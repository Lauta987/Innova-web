import { Rocket } from "lucide-react";
import FadeSection from "../ui/FadeSection";

function CTA() {
  return (
    <FadeSection className="cta-banner">
      <div>
        <span className="eyebrow">¿LISTO PARA TRANSFORMAR TU NEGOCIO?</span>

        <h2>Hagamos despegar tu idea</h2>

        <p>
          Desarrollamos soluciones digitales que impulsan resultados reales:
          páginas web, sistemas a medida y automatizaciones para tu negocio.
        </p>

        <a className="btn-primary" href="#contacto">
          Hablemos de tu proyecto
        </a>
      </div>

      <div className="cta-visual">
        <span className="particle p1"></span>
        <span className="particle p2"></span>
        <span className="particle p3"></span>
        <span className="particle p4"></span>
        <span className="particle p5"></span>

        <div className="cta-rocket">
          <Rocket size={170} strokeWidth={1.5} />
        </div>

        <div className="laptop">
          <div className="laptop-screen"></div>
          <div className="laptop-base"></div>
        </div>
      </div>
    </FadeSection>
  );
}

export default CTA; 