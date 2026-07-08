import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";

import FadeSection from "../ui/FadeSection";

const technologies = [
  {
    name: "React",
    icon: <SiReact />,
    color: "#61dafb",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178c6",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#f7df1e",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "#5fa04e",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "#ffffff",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47a248",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "#4169e1",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "#4479a1",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "#e34f26",
  },
  {
    name: "CSS",
    icon: <SiCss />,
    color: "#663399",
  },
  {
    name: "Git",
    icon: <SiGit />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    color: "#ffffff",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    color: "#646cff",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "#06b6d4",
  },
];

function Technologies() {
  return (
    <FadeSection>
      <span className="eyebrow">TECNOLOGÍAS</span>

      <h2>Herramientas que usamos para construir soluciones modernas</h2>

      <p className="projects-description">
        Trabajamos con tecnologías actuales para desarrollar sitios rápidos,
        sistemas escalables y experiencias digitales profesionales.
      </p>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <article className="tech-card" key={tech.name}>
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>

            <span>{tech.name}</span>
          </article>
        ))}
      </div>
    </FadeSection>
  );
}

export default Technologies; 