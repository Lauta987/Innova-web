import { Send } from "lucide-react";
import FadeSection from "../ui/FadeSection";
import { whatsappLink } from "../../data/contact";

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

        <a
         className="btn-primary"
         href={whatsappLink}
         target="_blank"
         rel="noopener noreferrer"
         >
         Hablemos por WhatsApp
        </a> 
      </div>
    </FadeSection>
  );
}

export default Contact; 