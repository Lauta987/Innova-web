import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Layers3, Monitor } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappNumber } from "../../data/contact";
import { solutions, solutionFilters, type Solution } from "../../data/solutions";
import "./Solutions.css";
import "./SolutionsPricing.css";

function inquiry(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function SolutionCard({ item }: { item: Solution }) {
  const message = `Hola, ¿cómo estás? Estuve viendo el modelo de página web para ${item.title.toLowerCase()} en INNOVA y me gustaría recibir más información.`;
  return <article className="solution-card">
    <div className="solution-preview">
      <div className="solution-browser" aria-hidden="true"><i /><i /><i /><span>{item.title}</span></div>
      {item.image ? <img src={item.image} srcSet={item.imageWidth ? `${item.image.replace(/\.webp$/, "-720.webp")} 720w, ${item.image} ${item.imageWidth}w` : undefined} sizes="(max-width: 720px) min(90vw, 500px), (max-width: 1050px) 45vw, 375px" alt={`Vista previa del inicio de la web para ${item.title}`} loading="lazy" decoding="async" /> : <div className="solution-placeholder"><Monitor size={42} strokeWidth={1.4}/><span>{item.demoUrl ? "Explorá la demo en vivo" : "Vista previa próximamente"}</span></div>}
    </div>
    <div className="solution-card-content">
      <h3>{item.detailUrl ? <a href={item.detailUrl}>{item.title}</a> : item.title}</h3><p>{item.description}</p>
      <ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
      <div className="solution-actions">
        {item.detailUrl ? <a className="solution-primary solution-detail-link" href={item.detailUrl}>Conocer solución <ArrowRight size={16} aria-hidden="true" /></a> : item.demoUrl ? <a className="solution-primary" href={item.demoUrl} target="_blank" rel="noopener noreferrer">Explorar demo <ExternalLink size={16} aria-hidden="true"/></a> : <span className="solution-unavailable">Próximamente</span>}
        <a className="solution-secondary" href={inquiry(message)} target="_blank" rel="noopener noreferrer">Quiero una web así <ArrowRight size={16} aria-hidden="true"/></a>
      </div>
    </div>
  </article>;
}

export default function Solutions({ embedded = false }: { embedded?: boolean }) {
  const [filter, setFilter] = useState("Todos");
  useEffect(() => {
    if (embedded) return;
    const title = document.title;
    document.title = "Soluciones Web para Negocios | INNOVA";
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const description = meta?.content;
    const seoDescription = "Explorá modelos de páginas web para inmobiliarias, agencias de turismo, concesionarias, tiendas y más. Descubrí la solución ideal para tu negocio con INNOVA.";
    if (meta) meta.content = seoDescription;
    const selectors = ['link[rel="canonical"]', 'meta[property="og:url"]', 'meta[property="og:title"]', 'meta[property="og:description"]'];
    const tags = selectors.map(selector => document.querySelector<HTMLLinkElement & HTMLMetaElement>(selector));
    const previous = tags.map(tag => tag?.getAttribute(tag.tagName === "LINK" ? "href" : "content"));
    const values = ["https://www.innovadev.com.ar/soluciones-web", "https://www.innovadev.com.ar/soluciones-web", "Soluciones Web para Negocios | INNOVA", seoDescription];
    tags.forEach((tag, index) => tag?.setAttribute(tag.tagName === "LINK" ? "href" : "content", values[index]));
    return () => { document.title = title; if (meta && description) meta.content = description; tags.forEach((tag, index) => { if (tag && previous[index]) tag.setAttribute(tag.tagName === "LINK" ? "href" : "content", previous[index]); }); };
  }, [embedded]);
  const visible = filter === "Todos" ? solutions : solutions.filter(item => item.categories.includes(filter));
  return <div className="solutions-page" id={embedded ? "soluciones" : undefined}>
    <section className="solutions-catalog solutions-catalog-first" id="modelos" aria-labelledby="catalog-title">
      <div className="solutions-heading"><span className="solutions-eyebrow">EXPLORÁ LAS POSIBILIDADES</span>{embedded ? <h2 id="catalog-title">Soluciones para <em>tu rubro.</em></h2> : <h1 id="catalog-title">Soluciones para <em>tu rubro.</em></h1>}<p>Conocé cómo podría verse tu próximo sitio web.</p></div>
      <div className="solutions-pricing" aria-label="Opciones de desarrollo web">
        <article className="solutions-pricing__card">
          <span className="solutions-pricing__icon"><Monitor size={26} strokeWidth={1.8} aria-hidden="true" /></span>
          <div className="solutions-pricing__copy">
            <h3>Plan mensual</h3>
            <p>Tu web lista y en funcionamiento</p>
          </div>
          <div className="solutions-pricing__price"><span>Desde</span><strong>$60.000<small>/mes</small></strong></div>
        </article>
        <article className="solutions-pricing__card">
          <span className="solutions-pricing__icon"><Layers3 size={26} strokeWidth={1.8} aria-hidden="true" /></span>
          <div className="solutions-pricing__copy">
            <h3>Personalización completa</h3>
            <p>Un sitio 100% a medida para tu negocio</p>
          </div>
          <div className="solutions-pricing__price"><span>Desde</span><strong>$200.000</strong></div>
        </article>
      </div>
      <div className="solution-filters" role="group" aria-label="Filtrar soluciones por rubro">{solutionFilters.map(category => <button key={category} type="button" className={filter === category ? "active" : ""} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div>
      <div className="solutions-grid">{visible.map(item => <SolutionCard key={item.id} item={item}/>)}</div>
      <div className="solutions-contact-strip">
        <span className="solutions-contact-strip__icon"><FaWhatsapp aria-hidden="true" /></span>
        <strong>¿No encontrás tu rubro?</strong>
        <p>También desarrollamos páginas web adaptadas a otros negocios y profesionales.</p>
        <a
          href={whatsappNumber ? inquiry("Hola, ¿cómo estás? No encontré mi rubro entre las webs de muestra y quiero consultar por una página para mi negocio.") : embedded ? "#contacto" : "/#contacto"}
          target={whatsappNumber ? "_blank" : undefined}
          rel={whatsappNumber ? "noopener noreferrer" : undefined}
        >
          <FaWhatsapp aria-hidden="true" /> Consultanos por tu web <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  </div>;
}
