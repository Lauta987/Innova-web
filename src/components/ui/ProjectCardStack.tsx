import {
  useCallback,
  useEffect,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Images,
  type LucideIcon,
} from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";
import "./ProjectCardStack.css";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

export type ProjectCardStackItem = {
  id: string;
  title: string;
  description: string;
  status: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  ctaLabel?: string;
  tags: string[];
  accent: string;
  icon: LucideIcon;
  comingSoon?: boolean;
  gallery?: ProjectGalleryImage[];
  problem?: string;
  solution?: string;
  features?: string[];
};

type ProjectCardStackProps = {
  items: ProjectCardStackItem[];
  initialIndex?: number;
  autoAdvance?: boolean;
  intervalMs?: number;
};

type StackLayout = {
  width: number;
  height: number;
  spacing: number;
  arc: number;
};

function wrapIndex(index: number, length: number) {
  if (length === 0) return 0;
  return ((index % length) + length) % length;
}

function signedOffset(
  index: number,
  activeIndex: number,
  length: number,
) {
  const directOffset = index - activeIndex;

  if (length <= 1) return directOffset;

  const wrappedOffset =
    directOffset > 0 ? directOffset - length : directOffset + length;

  return Math.abs(wrappedOffset) < Math.abs(directOffset)
    ? wrappedOffset
    : directOffset;
}

function getStackLayout(): StackLayout {
  if (typeof window === "undefined") {
    return {
      width: 620,
      height: 440,
      spacing: 285,
      arc: 32,
    };
  }

  if (window.innerWidth <= 560) {
    return {
      width: Math.min(window.innerWidth - 42, 390),
      height: 500,
      spacing: 78,
      arc: 18,
    };
  }

  if (window.innerWidth <= 900) {
    return {
      width: Math.min(window.innerWidth - 100, 540),
      height: 430,
      spacing: 150,
      arc: 24,
    };
  }

  return {
    width: 620,
    height: 440,
    spacing: 285,
    arc: 32,
  };
}

function ProjectMedia({ item }: { item: ProjectCardStackItem }) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = item.icon;

  useEffect(() => {
    setImageFailed(false);
  }, [item.imageSrc]);

  if (item.imageSrc && !imageFailed) {
    return (
      <img
        src={item.imageSrc}
        alt={item.imageAlt ?? `Vista de ${item.title}`}
        draggable={false}
        onError={() => setImageFailed(true)}
      />
    );
  }

  return (
    <div className="project-fan-fallback" aria-label={`Vista de ${item.title}`}>
      <div className="fallback-browser-bar">
        <span />
        <span />
        <span />
      </div>

      <div className="fallback-dashboard">
        <aside>
          <Icon size={28} strokeWidth={1.8} />
          <span />
          <span />
          <span />
          <span />
        </aside>

        <div className="fallback-content">
          <div className="fallback-metric-row">
            <span />
            <span />
            <span />
          </div>
          <div className="fallback-chart" />
          <div className="fallback-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <strong>{item.title}</strong>
    </div>
  );
}

function ProjectCard({
  item,
  active,
  onOpenDetails,
}: {
  item: ProjectCardStackItem;
  active: boolean;
  onOpenDetails: () => void;
}) {
  const Icon = item.icon;

  return (
    <article
      className={`project-fan-card-surface${item.comingSoon ? " is-coming-soon" : ""}`}
      style={{ "--project-accent": item.accent } as CSSProperties}
    >
      <header className="project-fan-card-header">
        <div className="project-fan-identity">
          <span className="project-fan-icon">
            <Icon size={22} strokeWidth={1.9} />
          </span>

          <div>
            <h3>{item.title}</h3>
            <span className="project-fan-status">{item.status}</span>
          </div>
        </div>
      </header>

      <div className="project-fan-media">
        <ProjectMedia item={item} />
      </div>

      <div className="project-fan-card-content">
        <p>{item.description}</p>

        <div className="project-fan-tags" aria-label="Características">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {active && !item.comingSoon ? (
          <button
            type="button"
            className="project-fan-detail-trigger"
            onClick={(event) => {
              event.stopPropagation();
              onOpenDetails();
            }}
          >
            Ver detalles
            <Images size={17} aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </article>
  );
}

function ProjectCardStack({
  items,
  initialIndex = 0,
  autoAdvance = true,
  intervalMs = 4800,
}: ProjectCardStackProps) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(() =>
    wrapIndex(initialIndex, items.length),
  );
  const [paused, setPaused] = useState(false);
  const [layout, setLayout] = useState<StackLayout>(() => getStackLayout());
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardStackItem | null>(null);

  const previous = useCallback(() => {
    setActiveIndex((current) => wrapIndex(current - 1, items.length));
  }, [items.length]);

  const next = useCallback(() => {
    setActiveIndex((current) => wrapIndex(current + 1, items.length));
  }, [items.length]);

  useEffect(() => {
    const updateLayout = () => setLayout(getStackLayout());

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    setActiveIndex((current) => wrapIndex(current, items.length));
  }, [items.length]);

  useEffect(() => {
    if (
      !autoAdvance ||
      paused ||
      reduceMotion ||
      items.length < 2
    ) {
      return;
    }

    const interval = window.setInterval(next, Math.max(intervalMs, 2500));
    return () => window.clearInterval(interval);
  }, [
    autoAdvance,
    intervalMs,
    items.length,
    next,
    paused,
    reduceMotion,
  ]);

  const handleKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      className="project-fan-shell"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="project-stack-stage"
        tabIndex={0}
        onKeyDown={handleKeyboard}
        aria-label="Carrusel de sistemas desarrollados"
      >
        {items.map((item, index) => {
          const offset = signedOffset(
            index,
            activeIndex,
            items.length,
          );
          const distance = Math.abs(offset);
          const visible = distance <= 2;
          const active = offset === 0;

          if (!visible) return null;

          return (
            <motion.div
              className={`project-fan-card${active ? " is-active" : ""}`}
              key={item.id}
              style={{
                width: layout.width,
                height: layout.height,
                zIndex: 20 - distance,
                pointerEvents: visible ? "auto" : "none",
              }}
              initial={reduceMotion ? false : { opacity: 0, y: 70 }}
              animate={{
                opacity: active ? 1 : Math.max(0.42, 0.82 - distance * 0.16),
                x: offset * layout.spacing,
                y: distance * layout.arc + (active ? -22 : 0),
                rotateZ: offset * (layout.width <= 390 ? 3.2 : 5.5),
                rotateY: offset * -4,
                scale: active ? 1 : 1 - distance * 0.075,
                filter: active
                  ? "brightness(1)"
                  : `brightness(${0.76 - distance * 0.08})`,
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: 250,
                      damping: 28,
                    }
              }
              drag={active && !reduceMotion ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                const threshold = Math.min(130, layout.width * 0.18);

                if (info.offset.x > threshold || info.velocity.x > 600) {
                  previous();
                } else if (
                  info.offset.x < -threshold ||
                  info.velocity.x < -600
                ) {
                  next();
                }
              }}
              onTap={() => {
                if (active && !item.comingSoon) {
                  setSelectedProject(item);
                  setPaused(true);
                }
              }}
              onClick={() => {
                if (!active) setActiveIndex(index);
              }}
              onKeyDown={(event) => {
                if (!active && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  setActiveIndex(index);
                }
              }}
              role={active ? undefined : "button"}
              tabIndex={active ? -1 : 0}
              aria-label={
                active
                  ? undefined
                  : `Mostrar el proyecto ${item.title}`
              }
            >
              <ProjectCard
                item={item}
                active={active}
                onOpenDetails={() => {
                  setSelectedProject(item);
                  setPaused(true);
                }}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="project-fan-navigation">
        <button
          type="button"
          className="project-fan-arrow"
          onClick={previous}
          aria-label="Proyecto anterior"
        >
          <ChevronLeft size={21} />
        </button>

        <div className="project-fan-dots" aria-label="Elegir proyecto">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar ${item.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="project-fan-arrow"
          onClick={next}
          aria-label="Proyecto siguiente"
        >
          <ChevronRight size={21} />
        </button>
      </div>

      <p className="project-fan-help">
        Elegí un proyecto para conocer el problema que resuelve
      </p>

      {selectedProject ? (
        <ProjectDetailModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => {
            setSelectedProject(null);
            setPaused(false);
          }}
        />
      ) : null}
    </div>
  );
}

export default ProjectCardStack; 
 