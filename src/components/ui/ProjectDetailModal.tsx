import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type SyntheticEvent,
} from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  X,
} from "lucide-react";
import type {
  ProjectCardStackItem,
  ProjectGalleryImage,
} from "./ProjectCardStack";

type ProjectDetailModalProps = {
  project: ProjectCardStackItem;
  onClose: () => void;
};

type GalleryLayout = "landscape" | "portrait";

function getLayoutHint(image?: ProjectGalleryImage): GalleryLayout | null {
  if (!image) return null;

  const value = `${image.src} ${image.alt} ${image.label ?? ""}`.toLowerCase();

  if (/pwa|mobile|móvil|movil|celular|phone|teléfono|telefono/.test(value)) {
    return "portrait";
  }

  if (
    /cover|web|desktop|escritorio|catálogo|catalogo|admin|panel|dashboard/.test(
      value,
    )
  ) {
    return "landscape";
  }

  return null;
}

function ProjectGalleryFallback({
  project,
}: {
  project: ProjectCardStackItem;
}) {
  const Icon = project.icon;

  return (
    <div className="project-detail-image-fallback">
      <span>
        <Icon size={42} strokeWidth={1.7} />
      </span>
      <strong>{project.title}</strong>
      <small>Vista disponible próximamente</small>
    </div>
  );
}

function GalleryThumbnail({
  image,
  project,
}: {
  image: ProjectGalleryImage;
  project: ProjectCardStackItem;
}) {
  const [failed, setFailed] = useState(false);
  const Icon = project.icon;

  useEffect(() => {
    setFailed(false);
  }, [image.src]);

  if (failed) {
    return (
      <span className="project-detail-thumbnail-fallback">
        <Icon size={20} strokeWidth={1.8} />
      </span>
    );
  }

  return (
    <img
      src={image.src}
      alt=""
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}

function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.imageSrc
        ? [
            {
              src: project.imageSrc,
              alt:
                project.imageAlt ??
                `Vista principal del proyecto ${project.title}`,
              label: "Vista principal",
            },
          ]
        : [];

  const activeImage = gallery[activeImageIndex];
  const [galleryLayout, setGalleryLayout] = useState<GalleryLayout>(
    () => getLayoutHint(activeImage) ?? "landscape",
  );
  const externalLink = project.href?.startsWith("http");
  const features =
    project.features && project.features.length > 0
      ? project.features
      : project.tags;

  useEffect(() => {
    document.body.classList.add("project-detail-open");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (gallery.length > 1 && event.key === "ArrowLeft") {
        setActiveImageIndex(
          (current) => (current - 1 + gallery.length) % gallery.length,
        );
      }

      if (gallery.length > 1 && event.key === "ArrowRight") {
        setActiveImageIndex((current) => (current + 1) % gallery.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("project-detail-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gallery.length, onClose]);

  useEffect(() => {
    setImageFailed(false);
    setGalleryLayout(getLayoutHint(activeImage) ?? "landscape");

    if (imageScrollRef.current) {
      imageScrollRef.current.scrollTop = 0;
    }
  }, [activeImage?.src]);

  const previousImage = () => {
    setActiveImageIndex(
      (current) => (current - 1 + gallery.length) % gallery.length,
    );
  };

  const nextImage = () => {
    setActiveImageIndex((current) => (current + 1) % gallery.length);
  };

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    const hint = getLayoutHint(activeImage);

    setGalleryLayout(
      hint ??
        (image.naturalHeight > image.naturalWidth ? "portrait" : "landscape"),
    );
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="project-detail-backdrop"
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <section
        id="project-detail-adaptive"
        className="project-detail-modal"
        data-layout={galleryLayout}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-detail-title-${project.id}`}
        style={{ "--project-accent": project.accent } as CSSProperties}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="project-detail-close"
          onClick={onClose}
          aria-label="Cerrar detalle del proyecto"
        >
          <X size={21} />
        </button>

        <div className="project-detail-gallery">
          <div className="project-detail-main-image">
            {activeImage && !imageFailed ? (
              <div
                ref={imageScrollRef}
                className="project-detail-image-scroll"
                tabIndex={0}
                aria-label={`Recorrer captura: ${activeImage.alt}`}
              >
                <img
                  className="project-detail-scroll-image"
                  src={activeImage.src}
                  alt={activeImage.alt}
                  draggable={false}
                  onLoad={handleImageLoad}
                  onError={() => setImageFailed(true)}
                />
              </div>
            ) : (
              <ProjectGalleryFallback project={project} />
            )}

            {gallery.length > 1 ? (
              <>
                <button
                  type="button"
                  className="project-detail-gallery-arrow is-left"
                  onClick={previousImage}
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  className="project-detail-gallery-arrow is-right"
                  onClick={nextImage}
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            ) : null}

            <span className="project-detail-counter">
              <ImageIcon size={15} />
              {gallery.length > 0
                ? `${activeImageIndex + 1} / ${gallery.length}`
                : "Sin capturas"}
            </span>

            {activeImage && !imageFailed ? (
              <span className="project-detail-scroll-hint">
                Scroll para recorrer
              </span>
            ) : null}
          </div>

          {gallery.length > 1 ? (
            <div className="project-detail-thumbnails">
              {gallery.map((image, index) => (
                <button
                  type="button"
                  key={`${image.src}-${index}`}
                  className={index === activeImageIndex ? "is-active" : ""}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Ver ${image.label ?? `imagen ${index + 1}`}`}
                  aria-current={index === activeImageIndex ? "true" : undefined}
                >
                  <GalleryThumbnail image={image} project={project} />
                  <span>{image.label ?? `Vista ${index + 1}`}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="project-detail-content">
          <div className="project-detail-heading">
            <span className="project-detail-status">{project.status}</span>
            <h2 id={`project-detail-title-${project.id}`}>{project.title}</h2>
            <p>{project.description}</p>
          </div>

          <div className="project-detail-block">
            <span>EL PROBLEMA</span>
            <p>{project.problem ?? project.description}</p>
          </div>

          <div className="project-detail-block">
            <span>LA SOLUCIÓN</span>
            <p>{project.solution ?? project.description}</p>
          </div>

          <div className="project-detail-features">
            <span>QUÉ PERMITE HACER</span>
            <ul>
              {features.map((feature) => (
                <li key={feature}>
                  <Check size={17} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {project.href && project.ctaLabel ? (
            <a
              className="project-detail-cta"
              href={project.href}
              target={externalLink ? "_blank" : undefined}
              rel={externalLink ? "noreferrer" : undefined}
              onClick={onClose}
            >
              {project.ctaLabel}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </section>
    </div>,
    document.body,
  );
}

export default ProjectDetailModal; 