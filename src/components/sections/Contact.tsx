import { Send } from "lucide-react";
import FadeSection from "../ui/FadeSection";

function Contact() {
  return (
    <FadeSection id="contacto">
      <div className="hero-card">
        <Send size={80} />

        <h3>¿Tenés una idea?</h3>

        <p>
          Contame tu proyecto y trabajemos juntos para llevar tu negocio al
          siguiente nivel.
        </p>

        <br />

        <a className="btn-primary" href="#">
          Hablemos por WhatsApp
        </a>
      </div>
    </FadeSection>
  );
}

export default Contact; 