
import {
  Code2,
  Globe,
  Headphones,
  Settings,
} from "lucide-react";

import FadeSection from "../ui/FadeSection";

const services = [
  {
    icon: <Globe size={32} />,
    title: "Páginas Web",
    text: "Diseñamos y desarrollamos páginas web profesionales, catálogos digitales y sitios para empresas y emprendimientos, adaptados a celulares y computadoras.",
  },
  {
    icon: <Code2 size={32} />,
    title: "Sistemas a medida",
    text: "Desarrollamos soluciones digitales personalizadas para organizar información, mejorar la gestión y simplificar el trabajo de tu negocio.",
  },
  {
    icon: <Settings size={32} />,
    title: "Automatizaciones",
    text: "Optimizamos procesos y tareas repetitivas mediante herramientas digitales que permiten ahorrar tiempo, reducir errores y trabajar de manera más eficiente.",
  },
  {
    icon: <Headphones size={32} />,
    title: "Soporte y mantenimiento",
    text: "Nos encargamos del mantenimiento de páginas web, actualizaciones de contenido, mejoras y soporte técnico para que tu negocio siga funcionando correctamente.",
  },
];

function Services() {
  return (
    <FadeSection
      id="servicios"
      className="section services-section"
    >
      <div className="services-layout">
        <div className="services-content">
          <span className="eyebrow">
            NUESTROS SERVICIOS
          </span>

          <h2>
            Desarrollo web y soluciones digitales
            para <span>tu negocio</span>
          </h2>

          <p>
            En INNOVA creamos páginas web y soluciones
            digitales a medida para empresas y
            emprendimientos. Te ayudamos a mejorar tu
            presencia online, optimizar procesos y
            facilitar las consultas de tus clientes.
          </p>

          <a
            href="#proyectos"
            className="btn-primary"
          >
            Ver proyectos
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.title}
            >
              <div className="service-icon">
                {service.icon}
              </div>

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
 