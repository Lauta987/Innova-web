import { BookOpen } from "lucide-react";
import FadeSection from "../ui/FadeSection";

function Blog() {
  return (
    <FadeSection>
      <span className="eyebrow">BLOG / ARTÍCULOS</span>

      <h2>Ideas para digitalizar tu negocio</h2>

      <div className="cards">
        <article className="card blog-card">
          <BookOpen size={34} />

          <h3>¿Por qué tu negocio necesita una página web?</h3>

          <p>
            Tener presencia online ya no es opcional: es una forma de generar
            confianza, mostrar tus servicios y conseguir nuevos clientes.
          </p>

          <a href="#contacto">Leer más →</a>
        </article>

        <article className="card blog-card">
          <BookOpen size={34} />

          <h3>Automatización: ahorrar tiempo y dinero</h3>

          <p>
            Digitalizar procesos repetitivos permite trabajar mejor, reducir
            errores y enfocarse en lo más importante.
          </p>

          <a href="#contacto">Leer más →</a>
        </article>

        <article className="card blog-card">
          <BookOpen size={34} />

          <h3>Beneficios de un sistema a medida</h3>

          <p>
            Un sistema personalizado se adapta a la forma de trabajar de tu
            empresa y mejora la organización.
          </p>

          <a href="#contacto">Leer más →</a>
        </article>
      </div>
    </FadeSection>
  );
}

export default Blog; 