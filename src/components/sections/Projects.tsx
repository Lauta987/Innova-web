import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

import FadeSection from "../ui/FadeSection";
import "./Projects.css";

type ProjectCase = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
  accent: string;
};

const projects: ProjectCase[] = [
  {
    id: "travel-keen",
    eyebrow: "PROYECTO REAL · TURISMO",
    title: "Travel Keen",
    description:
      "Una experiencia digital para presentar destinos, generar confianza y convertir visitas en consultas por WhatsApp.",
    tags: ["Catálogo de viajes", "Responsive", "WhatsApp"],
    href: "https://www.travelkeen.com.ar/",
    desktopImage: "/projects/travel-keen-real.webp",
    mobileImage: "/projects/travel-keen-mobile-screen.webp",
    imageAlt: "Web real de Travel Keen con un paisaje de montaña",
    accent: "#23a9e8",
  },
  {
    id: "harmonia",
    eyebrow: "PROYECTO REAL · WEB Y ADMINISTRACIÓN",
    title: "Harmonia",
    description:
      "Una web para mostrar sus velas y recibir pedidos por WhatsApp, con un panel de administración para gestionar el catálogo desde el celular.",
    tags: ["Web y catálogo", "Panel de administración", "PWA"],
    href: "https://www.harmoniaaromas.com.ar/",
    desktopImage: "/projects/harmonia-cover.webp",
    mobileImage: "/projects/harmonia-pwa.webp",
    imageAlt: "Web de Harmonia y su panel de administración móvil",
    accent: "#89966f",
  },
];

function DevicePreview({ project }: { project: ProjectCase }) {
  return (
    <div
      className="project-case-devices"
      style={{ "--case-accent": project.accent } as CSSProperties}
      aria-label={project.imageAlt}
    >
      <div className="project-case-monitor" aria-hidden="true">
        <div className="project-case-monitor-screen">
          <img src={project.desktopImage} alt="" draggable={false} />
        </div>
        <img className="project-case-monitor-frame" src="/projects/mockup-imac.webp" alt="" draggable={false} />
      </div>

      <div className="project-case-phone" aria-hidden="true">
        <div className="project-case-phone-screen">
          <img src={project.mobileImage} alt="" draggable={false} />
        </div>
        <img className="project-case-phone-frame" src="/projects/mockup-phone.webp" alt="" draggable={false} />
      </div>
    </div>
  );
}

function ProjectCaseCard({
  project,
  index,
}: {
  project: ProjectCase;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const reversed = index % 2 === 1;

  return (
    <motion.article
      className={`project-case-card${reversed ? " is-reversed" : ""}`}
      style={{ "--case-accent": project.accent } as CSSProperties}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="project-case-visual">
        <DevicePreview project={project} />
      </div>

      <div className="project-case-content">
        <span className="project-case-eyebrow">{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-case-tags" aria-label="Características">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          className="project-case-link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Conocer el proyecto ${project.title}`}
        >
          Conocer el proyecto
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <FadeSection id="proyectos" className="section projects-showcase-section">
      <div className="projects-showcase-intro">
        <span className="eyebrow">NUESTROS PROYECTOS</span>

        <h2>
          Proyectos creados para convertir visitas en
          <span> oportunidades reales</span>
        </h2>

        <p>
          Creamos experiencias digitales pensadas para mostrar mejor cada
          negocio y generar más consultas.
        </p>
      </div>

      <div className="projects-case-list">
        {projects.map((project, index) => (
          <ProjectCaseCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </FadeSection>
  );
}

export default Projects;
