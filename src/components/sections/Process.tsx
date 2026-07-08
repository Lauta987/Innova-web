import { Code2, Gift, Lightbulb, TrendingUp } from "lucide-react";
import FadeSection from "../ui/FadeSection";

const processSteps = [
  {
    number: "01",
    icon: <TrendingUp size={34} />,
    title: "Análisis",
    text: "Investigamos y entendemos tu negocio, tus objetivos y tus necesidades.",
  },
  {
    number: "02",
    icon: <Lightbulb size={34} />,
    title: "Propuesta",
    text: "Planteamos la mejor solución digital para alcanzar tus objetivos.",
  },
  {
    number: "03",
    icon: <Code2 size={34} />,
    title: "Desarrollo",
    text: "Construimos el proyecto con tecnología moderna, cuidando diseño y rendimiento.",
  },
  {
    number: "04",
    icon: <Gift size={34} />,
    title: "Entrega",
    text: "Lanzamos el proyecto y te acompañamos con soporte y mejoras.",
  },
];

function Process() {
  return (
    <FadeSection className="section process-section">
      <div className="process-layout">
        <div className="process-content">
          <span className="eyebrow">NUESTRO PROCESO DE TRABAJO</span>

          <h2>
            Transformamos ideas en <span>soluciones digitales.</span>
          </h2>

          <p>
            Seguimos un proceso claro, simple y ordenado para que tu proyecto
            avance con seguridad desde la idea inicial hasta el lanzamiento.
          </p>
        </div>

        <div className="process-timeline">
          <div className="process-wave"></div>

          {processSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <div className="process-circle">
                {step.icon}
              </div>

              <span className="process-number">{step.number}</span>

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