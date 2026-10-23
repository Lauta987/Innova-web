
import { useState, type FormEvent } from "react";
import {
  MessageCircle,
  PencilLine,
  Send,
  UserRound,
} from "lucide-react";

import { whatsappNumber } from "../../data/contact";
import "./ContactIdea.css";

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

    const name = form.name.trim();
    const idea = form.idea.trim();

    if (!name || idea.length < 10) {
      return;
    }

    if (!whatsappNumber) {
      alert(
        "El contacto por WhatsApp no está configurado. Podés escribirnos desde nuestras redes sociales."
      );
      return;
    }

    const message = [
      "Hola, llegué desde la web de INNOVA.",
      "",
      `Mi nombre es ${name}.`,
      "",
      "Quiero contarte esta idea o problema:",
      idea,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="idea-contact"
      id="contacto"
      aria-labelledby="idea-title"
    >
      <div
        className="idea-contact__glow"
        aria-hidden="true"
      />

      <div className="idea-contact__inner">
        <div className="idea-contact__intro">
          <span className="idea-contact__eyebrow">
            HABLEMOS DE TU PROYECTO
          </span>

          <h2 id="idea-title">
            Contame qué necesita tu negocio
          </h2>

          <span
            className="idea-contact__accent"
            aria-hidden="true"
          />

          <div className="idea-contact__promise">
            <span
              className="idea-contact__whatsapp-icon"
              aria-hidden="true"
            >
              <MessageCircle
                size={28}
                strokeWidth={1.8}
              />
            </span>

            <p>
              Desde Venado Tuerto, Santa Fe,
              desarrollamos páginas web y soluciones
              digitales para negocios de toda Argentina.
              Contame qué necesitás y seguimos la
              conversación directamente por WhatsApp.
            </p>
          </div>
        </div>

        <span
          className="idea-contact__divider"
          aria-hidden="true"
        />

        <form
          className="idea-contact__form"
          onSubmit={handleSubmit}
        >
          <label className="idea-field">
            <UserRound
              size={21}
              aria-hidden="true"
            />

            <span className="sr-only">
              Nombre
            </span>

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
            <PencilLine
              size={21}
              aria-hidden="true"
            />

            <span className="sr-only">
              Idea o problema
            </span>

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

          <button
            className="idea-contact__submit"
            type="submit"
          >
            <span>Enviar mi consulta</span>

            <Send
              size={19}
              aria-hidden="true"
            />
          </button>

          <small className="idea-contact__note">
            Se abrirá WhatsApp con tu mensaje listo
            para enviar.
          </small>
        </form>
      </div>
    </section>
  );
}

export default ContactIdea;
 