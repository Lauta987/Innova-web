import { useState, type FormEvent } from "react";
import { MessageCircle, PencilLine, Send, UserRound } from "lucide-react";
import "./ContactIdea.css";

const INNOVA_WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);

type ContactForm = {
  name: string;
  idea: string;
};

const initialForm: ContactForm = {
  name: "",
  idea: "",
};

function ContactIdea() {
  const [form, setForm] = useState<ContactForm>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hola Lautaro, llegué desde la web de Innova.",
      "",
      `Mi nombre es ${form.name.trim()}.`,
      "",
      "Quiero contarte esta idea o problema:",
      form.idea.trim(),
    ].join("\n");

    const baseUrl = INNOVA_WHATSAPP_NUMBER
      ? `https://wa.me/${INNOVA_WHATSAPP_NUMBER}`
      : "https://wa.me/";

    window.open(
      `${baseUrl}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="idea-contact" id="contacto" aria-labelledby="idea-title">
      <div className="idea-contact__glow" aria-hidden="true" />

      <div className="idea-contact__inner">
        <div className="idea-contact__intro">
          <span className="idea-contact__eyebrow">HABLEMOS DE TU PROYECTO</span>

          <h2 id="idea-title">
            Contame qué necesita tu negocio 
          </h2>

          <span className="idea-contact__accent" aria-hidden="true" />

          <div className="idea-contact__promise">
            <span className="idea-contact__whatsapp-icon" aria-hidden="true">
              <MessageCircle size={28} strokeWidth={1.8} />
            </span>
            <p>
              Contame la idea o el problema que querés resolver y seguimos la
              conversación directamente por WhatsApp.
            </p>
          </div>
        </div>

        <span className="idea-contact__divider" aria-hidden="true" />

        <form className="idea-contact__form" onSubmit={handleSubmit}>
          <label className="idea-field">
            <UserRound size={21} aria-hidden="true" />
            <span className="sr-only">Nombre</span>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              autoComplete="name"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              required
            />
          </label>

          <label className="idea-field idea-field--message">
            <PencilLine size={21} aria-hidden="true" />
            <span className="sr-only">Idea o problema</span>
            <textarea
              name="idea"
              placeholder="Contame tu idea o problema..."
              rows={4}
              minLength={10}
              value={form.idea}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  idea: event.target.value,
                }))
              }
              required
            />
          </label>

          <button className="idea-contact__submit" type="submit">
            <span>Enviar mi consulta</span>
            <Send size={19} aria-hidden="true" />
          </button>

          <small className="idea-contact__note">
            Se abrirá WhatsApp con tu mensaje listo para enviar.
          </small>
        </form>
      </div>
    </section>
  );
}

export default ContactIdea; 