import { Cog, Globe, TrendingUp } from "lucide-react";
import FadeSection from "../ui/FadeSection";

function Problems() {
  return (
    <FadeSection>
      <h2>¿Qué problema resolvemos?</h2>

      <div className="cards">
        <article className="card">
          <Globe size={36} />
          <h3>Presencia online</h3>
          <p>
            Creamos páginas web modernas para que tu negocio tenga presencia
            profesional en internet.
          </p>
        </article>

        <article className="card">
          <Cog size={36} />
          <h3>Procesos manuales</h3>
          <p>
            Automatizamos tareas repetitivas y digitalizamos la gestión de tu
            empresa.
          </p>
        </article>

        <article className="card">
          <TrendingUp size={36} />
          <h3>Crecimiento</h3>
          <p>
            Desarrollamos soluciones tecnológicas para ayudarte a escalar y tomar
            mejores decisiones.
          </p>
        </article>
      </div>
    </FadeSection>
  );
}

export default Problems; 