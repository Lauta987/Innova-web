import FadeSection from "../ui/FadeSection";
import HarmoniaShowcase from "./HarmoniaShowcase";
import GymStartShowcase from "./GymStartShowcase";

type ProjectsProps = {
  setSelectedImage: (image: string) => void;
};

function Projects({ setSelectedImage }: ProjectsProps) {
  return (
    <FadeSection id="proyectos">
      <span className="eyebrow">PROYECTO DESTACADO</span>

      <h2>Harmonia Aromas</h2>

      <p className="projects-description">
        Página web moderna, panel de administración y aplicación instalable para
        gestionar productos de manera simple e independiente.
      </p>

      <HarmoniaShowcase setSelectedImage={setSelectedImage} />

      <div className="project-tags">
        <span>Responsive</span>
        <span>Panel Admin</span>
        <span>Gestión de Productos</span>
        <span>PWA</span>
      </div>

      <button className="btn-primary">Ver proyecto</button>

      <div className="project-divider"></div>

      <span className="eyebrow">OTRO PROYECTO</span>

      <h2>GymStart</h2>

      <p className="projects-description">
        SaaS para gimnasios con experiencia premium para alumnos y herramientas
        de gestión para administradores.
      </p>

      <GymStartShowcase setSelectedImage={setSelectedImage} />
    </FadeSection>
  );
}

export default Projects; 