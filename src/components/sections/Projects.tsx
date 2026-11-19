import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import FadeSection from "../ui/FadeSection";
import "./Projects.css";

const projects = [
  {
    id: "travel-keen",
    name: "TRAVEL KEEN",
    logo: "/projects/travel-keen-logo.webp",
    mockup: "/projects/travel-keen-showcase.webp",
    description: "Una experiencia digital para presentar destinos, generar confianza y convertir visitas en consultas por WhatsApp.",
    tags: ["Catálogo de viajes", "Experiencias", "WhatsApp"],
    kind: "Sitio institucional",
    href: "https://www.travelkeen.com.ar/",
    mockupAlt: "Travel Keen en computadora con Patagonia Soñada y en teléfono con Camboriú",
  },
  {
    id: "harmonia",
    name: "HARMONIA",
    logo: "/projects/harmonia-logo.webp",
    mockup: "/projects/harmonia-showcase.webp",
    description: "Una web para mostrar sus productos y recibir pedidos por WhatsApp, con un panel de administración para gestionar el catálogo.",
    tags: ["Web y catálogo", "Panel de administración", "PWA"],
    kind: "Web y sistema de gestión",
    href: "https://www.harmoniaaromas.com.ar/",
    mockupAlt: "Harmonia Aromas en computadora y teléfono, con su colección navideña",
  },
] as const;

function Projects() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const project = projects[selected];

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % projects.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + projects.length) % projects.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = projects.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <FadeSection id="proyectos" className="section projects-showcase-section">
      <div className="projects-showcase-inner">
        <div className="projects-showcase-intro">
          <span className="eyebrow">NUESTROS PROYECTOS</span>
          <h2>PROYECTOS <span>DESTACADOS</span></h2>
          <p>Conocé dos proyectos reales que desarrollamos para ayudar a cada negocio a mostrar lo que ofrece y generar consultas.</p>
        </div>
        <div className="projects-showcase-layout">
          <div className="projects-showcase-tabs" role="tablist" aria-label="Elegir proyecto" aria-orientation="vertical">
            {projects.map((item, index) => (
              <button
                key={item.id}
                ref={(element) => { tabs.current[index] = element; }}
                id={`project-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected === index}
                aria-controls="project-showcase-panel"
                tabIndex={selected === index ? 0 : -1}
                className={`projects-showcase-tab${selected === index ? " is-active" : ""}`}
                aria-label={item.name}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => onTabKey(event, index)}
              >
                <img src={item.logo} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
          <div className="projects-showcase-panel" id="project-showcase-panel" role="tabpanel" aria-labelledby={`project-tab-${project.id}`} key={project.id}>
            <div className="projects-showcase-visual">
              <img src={project.mockup} alt={project.mockupAlt} loading="lazy" decoding="async" />
            </div>
            <article className="projects-showcase-details">
              <div className="projects-showcase-brand">
                <img src={project.logo} alt={project.name} loading="lazy" decoding="async" />
              </div>
              <p>{project.description}</p>
              <div className="projects-showcase-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <dl className="projects-showcase-facts">
                <div><dt>Año</dt><dd>2026</dd></div>
                <div><dt>Tipo</dt><dd>{project.kind}</dd></div>
              </dl>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                Ver proyecto <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

export default Projects;
