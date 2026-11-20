import { useEffect } from "react";
import { ArrowRight, CalendarDays, ClipboardCheck, ExternalLink, Images, Map, MessageCircle, Smartphone } from "lucide-react";
import { whatsappNumber } from "../../data/contact";
import { solutions } from "../../data/solutions";
import "./Tourism.css";

const demo = solutions.find(item => item.id === "turismo")!.demoUrl!;
const contact = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, vi la web de muestra para turismo y quiero consultar por una para mi agencia.")}`;
const features = [
  { icon: Map, title: "Destinos que inspiran", text: "Presentá tus destinos nacionales e internacionales con imágenes, información útil y una propuesta clara." },
  { icon: CalendarDays, title: "Paquetes bien organizados", text: "Mostrá fechas, noches, servicios incluidos y precios para que cada viajero pueda comparar opciones." },
  { icon: Images, title: "Experiencias en detalle", text: "Reuní galerías, actividades y beneficios en páginas que despierten las ganas de viajar." },
  { icon: MessageCircle, title: "Consultas por WhatsApp", text: "Conectá cada paquete con tu WhatsApp para recibir consultas con el destino que la persona está mirando." },
  { icon: ClipboardCheck, title: "Reservas más simples", text: "Guiá a cada visitante desde la inspiración hasta la solicitud de reserva con llamados a la acción claros." },
  { icon: Smartphone, title: "Lista para cada pantalla", text: "Una experiencia rápida y adaptada a celulares, tablets y computadoras, con tu marca en todo el recorrido." },
];
const questions = [
  ["¿La web se adapta a mi agencia?", "Sí. Personalizamos el diseño con tu logo, colores, destinos, paquetes, datos de contacto y la forma en la que trabajás."],
  ["¿Puedo mostrar viajes nacionales e internacionales?", "Sí. Podemos organizar los destinos por regiones, categorías o tipo de experiencia para que tus visitantes encuentren rápido lo que buscan."],
  ["¿Los clientes pueden consultar por WhatsApp?", "Sí. Cada paquete puede tener un botón de consulta con un mensaje preparado para que la conversación empiece con la información correcta."],
  ["¿Incluye preparación para Google?", "Trabajamos la estructura, los títulos y las descripciones, y realizamos la configuración inicial para facilitar la indexación. La posición en los resultados depende de distintos factores y no está garantizada."],
];

export default function Tourism() {
  useEffect(() => {
    const previousTitle = document.title;
    const title = "Páginas web para agencias de turismo | INNOVA";
    const description = "Diseño de páginas web para agencias de turismo: destinos, paquetes, experiencias y consultas por WhatsApp. Conocé la muestra de INNOVA.";
    document.title = title;
    const updates = [
      ['meta[name="description"]', 'content', description],
      ['link[rel="canonical"]', 'href', 'https://www.innovadev.com.ar/turismo'],
      ['meta[property="og:url"]', 'content', 'https://www.innovadev.com.ar/turismo'],
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

  return <div className="tourism-landing">
    <nav className="tourism-breadcrumb" aria-label="Ruta de navegación"><a href="/">Inicio</a><span>/</span><a href="/soluciones-web">Soluciones por rubro</a><span>/</span><span aria-current="page">Turismo</span></nav>
    <section className="tourism-hero" aria-labelledby="tourism-title">
      <div className="tourism-hero-copy">
        <span className="tourism-eyebrow">TU AGENCIA, UN PASO MÁS CERCA DEL VIAJERO</span>
        <h1 id="tourism-title">Páginas web para <em>agencias de turismo.</em></h1>
        <p>Mostrá tus destinos y paquetes con una web que inspire a viajar y convierta cada visita en una nueva consulta.</p>
        <div className="tourism-actions"><a className="tourism-button" href={demo} target="_blank" rel="noopener noreferrer">Ver web de muestra <ExternalLink size={17} /></a><a className="tourism-text-link" href={contact} target="_blank" rel="noopener noreferrer">Quiero una web así <ArrowRight size={17} /></a></div>
        <div className="tourism-hero-notes"><span>Tus destinos</span><span>Tus paquetes</span><span>Más consultas</span></div>
      </div>
      <figure className="tourism-preview"><a href={demo} target="_blank" rel="noopener noreferrer" aria-label="Abrir la web de muestra para agencias de turismo"><img src="/solutions/turismo.webp" width="1347" height="630" alt="Inicio de la web de muestra para turismo, con un viaje a Cancún y una vista desde un avión" fetchPriority="high" /></a><figcaption><span><i /> Una idea de lo que podemos crear para vos</span><a href={demo} target="_blank" rel="noopener noreferrer">Explorar muestra <ArrowRight size={15} /></a></figcaption></figure>
    </section>
    <section className="tourism-section" aria-labelledby="tourism-features"><div className="tourism-heading"><span className="tourism-eyebrow">PENSADA PARA VENDER EXPERIENCIAS</span><h2 id="tourism-features">Todo lo que tu agencia<br />necesita mostrar.</h2><p>Un espacio propio para inspirar, informar y acompañar a cada viajero desde el primer destino que descubre hasta su consulta.</p></div><div className="tourism-features">{features.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={26} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="tourism-section tourism-process" aria-labelledby="tourism-process"><div className="tourism-heading"><span className="tourism-eyebrow">DE LA IDEA A TU WEB</span><h2 id="tourism-process">Así la hacemos tuya.</h2></div><ol>{[["Conocemos tu agencia", "Nos contás qué destinos ofrecés, qué consultas recibís y cómo querés presentar tus viajes."], ["Adaptamos la propuesta", "Definimos el diseño, las secciones y las funciones con tu identidad como punto de partida."], ["Revisamos y publicamos", "Revisás la web con nosotros y, cuando está lista, coordinamos su publicación y soporte."]].map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
    <section className="tourism-section tourism-faq" aria-labelledby="tourism-faq"><div className="tourism-heading"><span className="tourism-eyebrow">ANTES DE EMPEZAR</span><h2 id="tourism-faq">Preguntas frecuentes.</h2></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section className="tourism-final"><span className="tourism-eyebrow">HABLEMOS DE TU PROYECTO</span><h2>Tu próximo destino.<br /><em>Tu próxima consulta.</em></h2><p>Dale a tu agencia un lugar propio para inspirar y vender viajes.</p><a className="tourism-button" href={contact} target="_blank" rel="noopener noreferrer">Quiero mi web de turismo <ArrowRight size={18} /></a></section>
    <footer className="tourism-footer"><span>INNOVA · Soluciones Digitales</span><a href="/soluciones-web">Explorar otros rubros <ArrowRight size={15} /></a></footer>
  </div>;
}
