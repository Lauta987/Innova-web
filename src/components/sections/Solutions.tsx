import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Monitor } from "lucide-react";
import { whatsappNumber } from "../../data/contact";
import { solutions, solutionFilters, type Solution } from "../../data/solutions";
import "./Solutions.css";

const solutionsWhatsappNumber = whatsappNumber || "543462216689";

function inquiry(message: string) {
  return `https://wa.me/${solutionsWhatsappNumber}?text=${encodeURIComponent(message)}`;
}

function SolutionCard({ item }: { item: Solution }) {
  const message = `Hola, ¿cómo estás? Estuve viendo el modelo de página web para ${item.title.toLowerCase()} en INNOVA y me gustaría recibir más información.`;
  return <article className="solution-card">
    <div className="solution-preview">
      <div className="solution-browser" aria-hidden="true"><i /><i /><i /><span>{item.title}</span></div>
      {item.image ? <img src={item.image} alt={`Vista previa del inicio de la web para ${item.title}`} loading="lazy" /> : <div className="solution-placeholder"><Monitor size={42} strokeWidth={1.4}/><span>{item.demoUrl ? "Explorá la demo en vivo" : "Vista previa próximamente"}</span></div>}
    </div>
    <div className="solution-card-content">
      <h3>{item.title}</h3><p>{item.description}</p>
      <ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
      <div className="solution-actions">
        {item.demoUrl ? <a className="solution-primary" href={item.demoUrl} target="_blank" rel="noopener noreferrer">Explorar demo <ExternalLink size={16}/></a> : <span className="solution-unavailable" aria-label="Demo próximamente">Próximamente</span>}
        <a className="solution-secondary" href={inquiry(message)} target="_blank" rel="noopener noreferrer">Quiero una web así <ArrowRight size={16}/></a>
      </div>
    </div>
  </article>;
}

export default function Solutions() {
  const [filter, setFilter] = useState("Todos");
  useEffect(() => {
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
  }, []);
  const visible = filter === "Todos" ? solutions : solutions.filter(item => item.categories.includes(filter));
  return <div className="solutions-page">
    <section className="solutions-catalog solutions-catalog-first" id="modelos" aria-labelledby="catalog-title">
      <div className="solutions-heading"><span className="solutions-eyebrow">EXPLORÁ LAS POSIBILIDADES</span><h1 id="catalog-title">Soluciones para <em>tu rubro.</em></h1><p>Conocé cómo podría verse tu próximo sitio web.</p></div>
      <div className="solution-filters" role="group" aria-label="Filtrar soluciones por rubro">{solutionFilters.map(category => <button key={category} type="button" className={filter === category ? "active" : ""} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div>
      <div className="solutions-grid">{visible.map(item => <SolutionCard key={item.id} item={item}/>)}</div>
    </section>
    <section className="solutions-custom"><span className="solutions-eyebrow">HECHA PARA VOS</span><h2>¿TE GUSTÓ UN MODELO? <em>LO ADAPTAMOS A TU NEGOCIO.</em></h2><p>Nuestros modelos son el punto de partida. Adaptamos la identidad visual, el contenido y los datos de tu empresa para que tu página represente tu negocio.</p><div className="solutions-benefits"><div><strong>Tu identidad</strong><span>Tu logo, colores y datos comerciales.</span></div><div><strong>Diseño adaptable</strong><span>Se ve bien en celulares, tablets y computadoras.</span></div><div><strong>Contacto directo</strong><span>Tus clientes pueden consultarte por WhatsApp.</span></div></div><a className="solution-primary" href={inquiry("Hola, ¿cómo estás? Estuve viendo los modelos de INNOVA y me gustaría consultar cómo adaptar uno a mi negocio.")} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <ArrowRight size={18}/></a></section>
    <section className="solutions-final"><span className="solutions-eyebrow">HABLEMOS DE TU IDEA</span><h2>¿NO ENCONTRASTE <em>TU RUBRO?</em></h2><p>Contanos qué necesitás y buscamos la mejor solución para vos.</p><a className="solution-primary" href={inquiry("Hola, ¿cómo estás? Estuve viendo las soluciones web de INNOVA y me gustaría consultar por una página para mi negocio.")} target="_blank" rel="noopener noreferrer">Contanos tu idea <ArrowRight size={18}/></a></section>
  </div>;
}
