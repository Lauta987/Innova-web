import { useEffect } from "react";
import { ArrowRight, ExternalLink, Building2, Search, Images, MessageCircle, ClipboardList, Smartphone } from "lucide-react";
import { whatsappNumber } from "../../data/contact";
import { solutions } from "../../data/solutions";
import "./RealEstate.css";

const demo = solutions.find(item => item.id === "inmobiliarias")!.demoUrl!;
const contact = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, vi la web de muestra para inmobiliarias y quiero consultar por una para mi negocio.")}`;
const features = [
  { icon: Building2, title: "Tus propiedades, organizadas", text: "Presentá los inmuebles disponibles para venta y alquiler en un catálogo claro y fácil de recorrer." },
  { icon: Search, title: "Búsquedas más simples", text: "Ayudá a cada visitante a encontrar opciones según el tipo de propiedad, la ubicación y sus preferencias." },
  { icon: Images, title: "Cada inmueble en detalle", text: "Reuní fotos, descripción y características en una ficha para que tus clientes conozcan la propiedad antes de consultar." },
  { icon: MessageCircle, title: "Consultas por WhatsApp", text: "Facilitá el contacto desde cada propiedad para continuar la conversación y coordinar una visita." },
  { icon: ClipboardList, title: "Solicitudes de tasación", text: "Ofrecé un formulario para que los propietarios te dejen sus datos y te cuenten sobre su inmueble." },
  { icon: Smartphone, title: "Lista para cada pantalla", text: "Una experiencia adaptada a celulares, tablets y computadoras, con tu identidad y tus datos de contacto." },
];
const questions = [
  ["¿La web se adapta a mi inmobiliaria?", "Sí. Adaptamos el diseño con tu logo, colores, información y propiedades. La muestra es un punto de partida para definir lo que necesita tu negocio."],
  ["¿Cómo se actualizan las propiedades?", "Acordamos la forma de carga y actualización antes de comenzar. Si necesitás administrar el catálogo por tu cuenta, evaluamos esa funcionalidad y su alcance por separado."],
  ["¿Los clientes pueden consultar por una propiedad?", "Sí. Podemos conectar las fichas con tu WhatsApp para que cada interesado consulte por el inmueble que está viendo."],
  ["¿Incluye preparación para Google?", "Trabajamos la estructura, los títulos y las descripciones, y realizamos la configuración inicial para facilitar la indexación. La posición en los resultados depende de distintos factores y no está garantizada."],
];

export default function RealEstate() {
  useEffect(() => {
    const previousTitle = document.title;
    const title = "Páginas web para inmobiliarias | INNOVA";
    const description = "Diseño de páginas web para inmobiliarias: catálogo de propiedades, filtros, tasaciones y consultas por WhatsApp. Conocé la muestra de INNOVA.";
    document.title = title;
    const updates = [
      ['meta[name="description"]', 'content', description],
      ['link[rel="canonical"]', 'href', 'https://www.innovadev.com.ar/inmobiliaria'],
      ['meta[property="og:url"]', 'content', 'https://www.innovadev.com.ar/inmobiliaria'],
      ['meta[property="og:title"]', 'content', title],
      ['meta[property="og:description"]', 'content', description],
    ].map(([selector, attribute, value]) => {
      const element = document.querySelector(selector);
      const previous = element?.getAttribute(attribute);
      element?.setAttribute(attribute, value);
      return { element, attribute, previous };
    });
    return () => {
      document.title = previousTitle;
      updates.forEach(({ element, attribute, previous }) => {
        if (previous != null) element?.setAttribute(attribute, previous);
        else element?.removeAttribute(attribute);
      });
    };
  }, []);

  return <div className="real-estate">
    <nav className="re-breadcrumb" aria-label="Ruta de navegación"><a href="/">Inicio</a><span>/</span><a href="/soluciones-web">Soluciones por rubro</a><span>/</span><span aria-current="page">Inmobiliarias</span></nav>
    <section className="re-hero" aria-labelledby="re-title">
      <div className="re-hero-copy">
        <span className="re-eyebrow">TU INMOBILIARIA, UN PASO MÁS ALLÁ</span>
        <h1 id="re-title">Páginas web para <em>inmobiliarias.</em></h1>
        <p>Mostrá tus propiedades con una web profesional y convertí el interés de tus visitantes en nuevas consultas.</p>
        <div className="re-actions"><a className="re-button" href={demo} target="_blank" rel="noopener noreferrer">Ver web de muestra <ExternalLink size={17} /></a><a className="re-text-link" href={contact} target="_blank" rel="noopener noreferrer">Quiero una web así <ArrowRight size={17} /></a></div>
        <div className="re-hero-notes"><span>Tu marca</span><span>Tus propiedades</span><span>Tu próximo cliente</span></div>
      </div>
      <figure className="re-preview">
        <a href={demo} target="_blank" rel="noopener noreferrer" aria-label="Abrir la web de muestra para inmobiliarias"><img src="/solutions/inmobiliaria-inicio.webp" width="1340" height="627" alt="Inicio de la web de muestra inmobiliaria: Encontrá el lugar que estabas buscando, junto a un edificio moderno" fetchPriority="high" /></a>
        <figcaption><span><i /> Una idea de lo que podemos crear para vos</span><a href={demo} target="_blank" rel="noopener noreferrer">Explorar muestra <ArrowRight size={15} /></a></figcaption>
      </figure>
    </section>
    <section className="re-section" aria-labelledby="re-features"><div className="re-heading"><span className="re-eyebrow">PENSADA PARA TU DÍA A DÍA</span><h2 id="re-features">Todo lo que tu inmobiliaria<br />necesita mostrar.</h2><p>Un espacio propio para presentar tus servicios y acompañar a cada persona desde la búsqueda hasta la consulta.</p></div><div className="re-features">{features.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={26} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="re-section re-process" aria-labelledby="re-process"><div className="re-heading"><span className="re-eyebrow">DE LA IDEA A TU WEB</span><h2 id="re-process">Así la hacemos tuya.</h2></div><ol>{[["Conocemos tu inmobiliaria", "Nos contás cómo trabajás, qué querés mostrar y qué consultas necesitás recibir."], ["Adaptamos la propuesta", "Definimos el diseño, las secciones y las funciones con tu identidad como punto de partida."], ["Revisamos y publicamos", "Revisás la web con nosotros y, cuando está lista, coordinamos su publicación y soporte."]].map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
    <section className="re-section re-faq" aria-labelledby="re-faq"><div className="re-heading"><span className="re-eyebrow">ANTES DE EMPEZAR</span><h2 id="re-faq">Preguntas frecuentes.</h2></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section className="re-final"><span className="re-eyebrow">HABLEMOS DE TU PROYECTO</span><h2>Tu próxima propiedad.<br /><em>Tu próxima consulta.</em></h2><p>Dale a tu inmobiliaria un lugar propio en internet.</p><a className="re-button" href={contact} target="_blank" rel="noopener noreferrer">Quiero mi web inmobiliaria <ArrowRight size={18} /></a></section>
    <footer className="re-footer"><span>INNOVA · Soluciones Digitales</span><a href="/soluciones-web">Explorar otros rubros <ArrowRight size={15} /></a></footer>
  </div>;
}
