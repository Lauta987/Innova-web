import { Code2, Globe, Headphones, Settings } from "lucide-react"; 

import FadeSection from "../ui/FadeSection";

const services = [
  {
    icon: <Globe size={32} />,
    title: "Páginas Web",
    text: "Sitios modernos, rápidos y optimizados para todos los dispositivos.",
  },
  {
    icon: <Code2 size={32} />,
    title: "Sistemas a medida",
    text: "Desarrollamos sistemas personalizados según las necesidades de tu negocio.",
  },
  {
    icon: <Settings size={32} />,
    title: "Automatizaciones",
    text: "Automatizamos procesos repetitivos para ahorrar tiempo y reducir errores.",
  },
  {
    icon: <Headphones size={32} />,
    title: "Soporte y mantenimiento",
    text: "Te acompañamos con soporte técnico, mejoras y mantenimiento constante.",
  },
];

function Services() {
  return (
    <FadeSection id="servicios" className="section services-section">
      <div className="services-layout">
        <div className="services-content">
          <span className="eyebrow">NUESTROS SERVICIOS</span>

          <h2>
            Todo lo que necesita tu negocio para <span>crecer</span>
          </h2>

          <p>
            Ofrecemos soluciones digitales pensadas para ayudarte a crecer,
            automatizar procesos y mejorar la presencia de tu negocio.
          </p>

          <a href="#proyectos" className="btn-primary">
            Ver proyectos
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <div>
                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

export default Services; 