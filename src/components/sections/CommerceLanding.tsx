import { useEffect } from "react";
import { ArrowRight, CalendarDays, ClipboardCheck, ExternalLink, Images, Map, MessageCircle, Smartphone } from "lucide-react";
import { whatsappNumber } from "../../data/contact";
import { solutions } from "../../data/solutions";
import "./Tourism.css";

export default function CommerceLanding({ kind }: { kind: "bicicleterias" | "automotores" }) {
  const bike = kind === "bicicleterias";
  const item = solutions.find(solution => solution.id === kind)!;
  const demo = item.demoUrl!;
  const name = bike ? "bicicleterías" : "concesionarias y automotores";
  const path = bike ? "/bicicleteria" : "/automotores";
  const contact = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero consultar por una web para " + name + ".")}`;
  const features = bike ? [
    { icon: Map, title: "Bicicletas por categoría", text: "Organizá el catálogo por tipo de bicicleta y rodado para orientar a quienes buscan su primera bici o quieren renovar la que tienen." },
    { icon: CalendarDays, title: "Datos para comparar", text: "Mostrá marca, modelo, precio y características de cada bicicleta en un lugar fácil de consultar." },
    { icon: Images, title: "Accesorios a la vista", text: "Dale un espacio a cascos, infladores y accesorios para que tus clientes conozcan qué pueden sumar a su compra." },
    { icon: MessageCircle, title: "Pedidos por WhatsApp", text: "Facilitá la consulta sobre un producto antes de confirmar disponibilidad, talle, precio y forma de entrega con tu negocio." },
    { icon: ClipboardCheck, title: "Tu taller también cuenta", text: "Presentá tus servicios de reparación y mantenimiento, horarios y datos de contacto para recibir consultas." },
    { icon: Smartphone, title: "Un catálogo para el celular", text: "Compartí tu web en redes y atendé a quienes exploran productos desde el teléfono." },
  ] : [
    { icon: Map, title: "Tu stock organizado", text: "Presentá los vehículos disponibles en un catálogo con fotos, marca, modelo y precio." },
    { icon: CalendarDays, title: "Búsquedas por preferencias", text: "Ayudá a encontrar opciones según marca, año o presupuesto con los filtros acordados para tu catálogo." },
    { icon: Images, title: "Cada vehículo en detalle", text: "Reuní fotos, kilometraje, transmisión, combustible y equipamiento para que el interesado pueda evaluar cada unidad." },
    { icon: MessageCircle, title: "Consultas por unidad", text: "Conectá cada ficha con WhatsApp para que la conversación empiece por el vehículo que interesa al comprador." },
    { icon: ClipboardCheck, title: "Información comercial clara", text: "Presentá tus condiciones de venta y canales de consulta. Si ofrecés financiación o recibís usados, definimos cómo comunicarlo." },
    { icon: Smartphone, title: "Tu salón desde el celular", text: "Ofrecé una experiencia adaptable a distintas pantallas para que tus vehículos se puedan recorrer desde cualquier lugar." },
  ];
  const questions = bike ? [
    ["¿Puedo mostrar bicicletas y accesorios?", "Sí. Definimos categorías para separar las bicicletas de los accesorios y organizar la información que necesita tu cliente."],
    ["¿El pedido se paga en la web?", "La muestra está orientada a consultar y coordinar por WhatsApp. Un cobro online requiere definir una integración y se presupuesta por separado."],
    ["¿Cómo se actualizan los precios y el stock?", "Acordamos la forma de actualización antes de comenzar. Si querés cargar productos por tu cuenta, evaluamos un panel de administración con alcance y presupuesto propios."],
    ["¿Puedo incluir mi taller?", "Sí. Podemos presentar los servicios, horarios y ubicación, y facilitar las consultas. Un sistema de turnos se evalúa aparte."],
  ] : [
    ["¿Qué información puedo incluir por vehículo?", "Fotos, marca, modelo, año, kilometraje, precio y datos técnicos. Acordamos los campos que necesitás antes de preparar el catálogo."],
    ["¿Puedo recibir consultas por un auto específico?", "Sí. El botón de cada ficha puede preparar un mensaje de WhatsApp que identifique el vehículo consultado."],
    ["¿Cómo retiro una unidad vendida?", "Definimos el procedimiento de actualización al iniciar el proyecto. Si necesitás administrar el stock por tu cuenta, evaluamos un panel por separado."],
    ["¿La web aprueba financiación?", "No. Puede mostrar las condiciones que nos proporciones y recibir consultas. La evaluación crediticia y la aprobación corresponden al proveedor de financiación."],
  ];
  useEffect(() => {
    const previousTitle = document.title;
    const title = `Páginas web para ${name} | INNOVA`;
    const description = `Diseño de páginas web para ${name}: catálogo, fichas y consultas por WhatsApp. Explorá la muestra de INNOVA.`;
    document.title = title;
    const updates = [
      ['meta[name="description"]', 'content', description],
      ['link[rel="canonical"]', 'href', `https://www.innovadev.com.ar${path}`],
      ['meta[property="og:url"]', 'content', `https://www.innovadev.com.ar${path}`],
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
  }, [name, path]);

  return <div className="tourism-landing">
    <nav className="tourism-breadcrumb" aria-label="Ruta de navegación"><a href="/">Inicio</a><span>/</span><a href="/soluciones-web">Soluciones por rubro</a><span>/</span><span aria-current="page">{item.title}</span></nav>
    <section className="tourism-hero" aria-labelledby="tourism-title">
      <div className="tourism-hero-copy">
        <span className="tourism-eyebrow">TU NEGOCIO, CON UN LUGAR PROPIO</span>
        <h1 id="tourism-title">Páginas web para <em>{name}.</em></h1>
        <p>{bike ? "Mostrá tus bicicletas, accesorios y servicios con un catálogo que ayude a elegir y consultar." : "Presentá cada vehículo con la información que necesita tu próximo comprador para dar el primer paso."}</p>
        <div className="tourism-actions"><a className="tourism-button" href={demo} target="_blank" rel="noopener noreferrer">Ver web de muestra <ExternalLink size={17} /></a><a className="tourism-text-link" href={contact} target="_blank" rel="noopener noreferrer">Quiero una web así <ArrowRight size={17} /></a></div>
        <div className="tourism-hero-notes"><span>Tu marca</span><span>Tu catálogo</span><span>Tus consultas</span></div>
      </div>
      <figure className="tourism-preview"><a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`Abrir la web de muestra para ${name}`}><img src={item.image} alt={`Inicio de la web de muestra para ${name}`} fetchPriority="high" /></a><figcaption><span><i /> Una idea de lo que podemos crear para vos</span><a href={demo} target="_blank" rel="noopener noreferrer">Explorar muestra <ArrowRight size={15} /></a></figcaption></figure>
    </section>
    <section className="tourism-section" aria-labelledby="tourism-features"><div className="tourism-heading"><span className="tourism-eyebrow">INFORMACIÓN QUE AYUDA A ELEGIR</span><h2 id="tourism-features">Todo lo que tu negocio<br />necesita mostrar.</h2><p>Un catálogo que organiza tu oferta y facilita el contacto. Definimos las funciones según la forma en la que trabaja tu negocio.</p></div><div className="tourism-features">{features.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={26} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="tourism-section tourism-process" aria-labelledby="tourism-process"><div className="tourism-heading"><span className="tourism-eyebrow">DE LA IDEA A TU WEB</span><h2 id="tourism-process">Así la hacemos tuya.</h2></div><ol>{[["Preparamos tu catálogo", bike ? "Reunimos categorías, rodados, fotos y datos de tus bicicletas y accesorios." : "Reunimos las fotos y fichas técnicas de las unidades disponibles."], ["Definimos el recorrido", bike ? "Organizamos productos y servicios del taller para facilitar cada consulta." : "Ordenamos filtros y fichas para que cada comprador encuentre y compare vehículos."], ["Revisamos y publicamos", "Revisás la web con nosotros y, cuando está lista, coordinamos su publicación y soporte."]].map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
    <section className="tourism-section tourism-faq" aria-labelledby="tourism-faq"><div className="tourism-heading"><span className="tourism-eyebrow">ANTES DE EMPEZAR</span><h2 id="tourism-faq">Preguntas frecuentes.</h2></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section className="tourism-final"><span className="tourism-eyebrow">HABLEMOS DE TU PROYECTO</span><h2>Tu próximo cliente.<br /><em>Tu próxima consulta.</em></h2><p>Mostrá lo que ofrecés y facilitá el primer contacto con tu negocio.</p><a className="tourism-button" href={contact} target="_blank" rel="noopener noreferrer">Quiero una web para mi negocio <ArrowRight size={18} /></a></section>
    <footer className="tourism-footer"><span>INNOVA · Soluciones Digitales</span><a href="/soluciones-web">Explorar otros rubros <ArrowRight size={15} /></a></footer>
  </div>;
}

