import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  AtSign,
  MessageCircle,
  Monitor,
  PencilLine,
  Store,
  UserRound,
} from "lucide-react";

import "./ContactIdea.css";

const whatsappNumber = "5493462516223";

type ContactForm = {
  name: string;
  business: string;
  instagram: string;
  whatsapp: string;
  offering: string;
};

const initialForm: ContactForm = {
  name: "",
  business: "",
  instagram: "",
  whatsapp: "",
  offering: "",
};

const fields = [
  {
    name: "name",
    label: "Nombre",
    placeholder: "¿Cómo te llamás?",
    type: "text",
    autoComplete: "name",
    Icon: UserRound,
  },
  {
    name: "business",
    label: "Nombre del negocio",
    placeholder: "Nombre de tu negocio",
    type: "text",
    autoComplete: "organization",
    Icon: Store,
  },
  {
    name: "instagram",
    label: "Instagram del negocio",
    placeholder: "@instagram.de.tu.negocio",
    type: "text",
    autoComplete: "off",
    Icon: AtSign,
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    placeholder: "Tu número de WhatsApp",
    type: "tel",
    autoComplete: "tel",
    Icon: MessageCircle,
  },
] as const;

function ContactIdea() {
  const [form, setForm] = useState<ContactForm>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const business = form.business.trim();
    const instagram = form.instagram.trim();
    const whatsapp = form.whatsapp.trim();
    const offering = form.offering.trim();

    if (!name || !business || !instagram || !whatsapp) return;

    const message = [
      "Hola, quiero una muestra web gratuita y personalizada para mi negocio.",
      "",
      `Nombre: ${name}`,
      `Negocio: ${business}`,
      `Instagram: ${instagram}`,
      `WhatsApp: ${whatsapp}`,
      ...(offering ? [`Qué vendo u ofrezco: ${offering}`] : []),
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="idea-contact" id="contacto" aria-labelledby="idea-title">
      <div className="idea-contact__glow" aria-hidden="true" />

      <div className="idea-contact__inner">
        <div className="idea-contact__intro">
          <span className="idea-contact__eyebrow">
            TU WEB, ANTES DE CONTRATARLA
          </span>

          <h2 id="idea-title">Mirá cómo podría verse la web de tu negocio</h2>

          <span className="idea-contact__accent" aria-hidden="true" />

          <div className="idea-contact__promise">
            <span className="idea-contact__whatsapp-icon" aria-hidden="true">
              <Monitor size={28} strokeWidth={1.8} />
            </span>

            <div>
              <p>
                Dejanos algunos datos de tu negocio y preparamos una muestra
                personalizada utilizando tu identidad, contenido, productos o servicios.
              </p>
              <p className="idea-contact__free">100% gratis y sin compromiso.</p>
            </div>
          </div>
        </div>

        <span className="idea-contact__divider" aria-hidden="true" />

        <form className="idea-contact__form" onSubmit={handleSubmit}>
          {fields.map(({ name, label, placeholder, type, autoComplete, Icon }) => (
            <div className="idea-field-block" key={name}>
              <label className="idea-field-label" htmlFor={`sample-${name}`}>
                {label}
              </label>
              <div className="idea-field">
                <Icon size={20} aria-hidden="true" />
                <input
                  id={`sample-${name}`}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  autoCapitalize={name === "instagram" ? "none" : undefined}
                  spellCheck={name === "instagram" ? false : undefined}
                  aria-describedby={name === "instagram" ? "sample-instagram-help" : undefined}
                  value={form[name]}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, [name]: event.target.value }))
                  }
                  required
                />
              </div>
              {name === "instagram" && (
                <small className="idea-field-help" id="sample-instagram-help">
                  Usamos tu Instagram para conocer tu identidad, productos y servicios
                  y preparar una muestra realmente personalizada.
                </small>
              )}
            </div>
          ))}

          <div className="idea-field-block">
            <label className="idea-field-label" htmlFor="sample-offering">
              ¿Qué vendés u ofrecés? <span>(opcional)</span>
            </label>
            <div className="idea-field idea-field--message">
              <PencilLine size={20} aria-hidden="true" />
              <textarea
                id="sample-offering"
                name="offering"
                placeholder="Contanos brevemente a qué se dedica tu negocio..."
                rows={2}
                value={form.offering}
                onChange={(event) =>
                  setForm((current) => ({ ...current, offering: event.target.value }))
                }
              />
            </div>
          </div>

          <button className="idea-contact__submit" type="submit">
            <span>QUIERO VER MI WEB</span>
            <ArrowRight size={21} aria-hidden="true" />
          </button>

          <small className="idea-contact__note">100% gratis · Sin compromiso</small>
        </form>
      </div>
    </section>
  );
}

export default ContactIdea;
