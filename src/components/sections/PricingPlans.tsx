import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappNumber } from "../../data/contact";
import "./PricingPlans.css";

type Plan = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  note: string;
};

const plans: Plan[] = [
  {
    id: "plan-web",
    name: "Plan Web",
    category: "WEB POR SUSCRIPCIÓN",
    price: "$60.000/mes",
    description:
      "Para negocios que quieren comenzar a tener presencia digital sin realizar una inversión inicial elevada.",
    features: [
      "Sin costo inicial de desarrollo",
      "Diseño predefinido adaptado con tu logo y colores",
      "Inicio, catálogo o servicios y contacto",
      "Consultas y pedidos directos por WhatsApp",
      "Hosting, soporte y mantenimiento mensual",
      "Indexación y optimización SEO inicial en Google",
    ],
    note:
      "Personalización limitada. Las funcionalidades especiales se presupuestan aparte.",
  },
  {
    id: "web-personalizada",
    name: "Web Personalizada",
    category: "DESARROLLO A MEDIDA",
    price: "$200.000",
    description:
      "Para empresas que buscan un sitio exclusivo, desarrollado según las necesidades de su negocio.",
    features: [
      "Diseño único y personalizado para tu marca",
      "Secciones y funcionalidades adaptadas al negocio",
      "Catálogo, galerías y formularios personalizados",
      "Integración con WhatsApp y redes sociales",
      "Optimización SEO inicial e indexación en Google",
      "Hosting, soporte y actualizaciones mediante abono mensual",
    ],
    note:
      "Desarrollo de pago único + mantenimiento mensual presupuestado según el proyecto.",
  },
  {
    id: "plan-premium",
    name: "Plan Premium",
    category: "WEB + ANÁLISIS Y OPTIMIZACIÓN",
    price: "$300.000",
    description:
      "Para empresas que quieren una web personalizada y conocer cómo interactúan los visitantes para mejorar sus resultados.",
    features: [
      "Todo lo incluido en la Web Personalizada",
      "Google Analytics 4 configurado",
      "Microsoft Clarity: grabaciones y mapas de calor",
      "Seguimiento de clics en WhatsApp y formularios",
      "Informe mensual de visitas e interacciones",
      "Recomendaciones de mejoras basadas en datos",
    ],
    note:
      "Desarrollo de pago único + mantenimiento y análisis mensual desde $90.000, según alcance.",
  },
];

function planWhatsApp(plan: Plan) {
  if (!whatsappNumber) return "#contacto";
  const message = `Hola, quiero consultar por el ${plan.name} de INNOVA (${plan.price}).`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function PricingPlans({ placement }: { placement: "mobile" | "desktop" }) {
  const [openPlan, setOpenPlan] = useState(placement === "mobile" ? "plan-web" : "web-personalizada");

  return (
    <section
      id={placement === "mobile" ? "planes-mobile" : "planes"}
      className={`pricing-plans pricing-plans--${placement}`}
      aria-label="Planes de desarrollo web"
    >
      {placement === "desktop" && (
        <div className="pricing-plans__intro">
          <span className="eyebrow">PLANES PARA TU NEGOCIO</span>
          <h2>Elegí cómo querés llevar tu negocio a la web.</h2>
        </div>
      )}

      <div className="pricing-plans__list">
        {plans.map((plan) => {
          const isOpen = openPlan === plan.id;
          const detailsId = `${placement}-${plan.id}-details`;
          const contactHref = planWhatsApp(plan);
          const external = contactHref.startsWith("https://");

          return (
            <article
              className={`pricing-plan${isOpen ? " pricing-plan--open" : ""}${plan.id === "web-personalizada" ? " pricing-plan--featured" : ""}`}
              key={plan.id}
            >
              <div className="pricing-plan__bar">
                <button
                  type="button"
                  className="pricing-plan__toggle"
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() => setOpenPlan(isOpen ? "" : plan.id)}
                >
                  <span className="pricing-plan__name">{plan.name}</span>
                  <span className="pricing-plan__price">Desde <strong>{plan.price}</strong></span>
                  <ChevronDown className="pricing-plan__chevron" size={24} aria-hidden="true" />
                </button>
                <a
                  className="pricing-plan__whatsapp"
                  href={contactHref}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={`Consultar por WhatsApp sobre ${plan.name}`}
                >
                  <FaWhatsapp aria-hidden="true" />
                </a>
              </div>

                <div className="pricing-plan__details" id={detailsId} hidden={!isOpen}>
                  <span className="pricing-plan__category">{plan.category}</span>
                  <p className="pricing-plan__description">{plan.description}</p>
                  <ul>
                    {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <p className="pricing-plan__note">{plan.note}</p>
                </div>
            </article>
          );
        })}
      </div>

      <p className="pricing-plans__disclaimer">
        *Los precios son valores de referencia y pueden variar según las funcionalidades y necesidades de cada proyecto. Dominio no incluido. Los planes no incluyen pasarela de pagos online, salvo contratación adicional.
      </p>

      {placement === "mobile" && (
        <a className="pricing-plans__projects" href="#proyectos">Ver proyectos reales</a>
      )}
    </section>
  );
}

export default PricingPlans;
