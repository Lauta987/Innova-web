
import {
  Code2,
  Gift,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import FadeSection from "../ui/FadeSection";

const processSteps = [
  {
    number: "01",
    icon: <TrendingUp size={34} />,
    title: "Análisis",
    text: "Conocemos tu negocio, tus objetivos y las necesidades que debe resolver tu página web o sistema personalizado.",
  },
  {
    number: "02",
    icon: <Lightbulb size={34} />,
    title: "Propuesta",
    text: "Preparamos una propuesta personalizada con el diseño, las funcionalidades y el presupuesto del proyecto, adaptados a tu negocio.",
  },
  {
    number: "03",
    icon: <Code2 size={34} />,
    title: "Desarrollo",
    text: "Diseñamos y desarrollamos tu solución digital utilizando tecnologías modernas, cuidando la experiencia de usuario, el rendimiento y la adaptación a diferentes dispositivos.",
  },
  {
    number: "04",
    icon: <Gift size={34} />,
    title: "Entrega",
    text: "Realizamos las verificaciones finales, publicamos tu página web y ofrecemos soporte técnico y mantenimiento según las necesidades acordadas.",
  },
];

function Process() {
  return (
    <FadeSection className="section process-section">
      <div className="process-layout">
        <div className="process-content">
          <span className="eyebrow">
            NUESTRO PROCESO DE TRABAJO
          </span>

          <h2>
            De la idea al lanzamiento de tu
            <span> página web o sistema a medida.</span>
          </h2>

          <p>
            En INNOVA acompañamos a empresas y
            emprendimientos en cada etapa del desarrollo
            web: desde el análisis inicial y la propuesta
            personalizada hasta la publicación y el
            mantenimiento del proyecto.
          </p>
        </div>

        <div className="process-timeline">
          <div className="process-wave"></div>

          {processSteps.map((step) => (
            <article
              className="process-step"
              key={step.number}
            >
              <div className="process-circle">
                {step.icon}
              </div>

              <span className="process-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

export default Process;
 