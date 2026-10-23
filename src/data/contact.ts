
export const whatsappNumber = (
  import.meta.env.VITE_WHATSAPP_NUMBER || ""
).replace(/\D/g, "");

export const whatsappMessage =
  "Hola, quiero consultar por una página web o solución digital para mi negocio.";

export const whatsappLink = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  : "#contacto";

export const instagramLink =
  "https://www.instagram.com/innova.oficial1/";

export const innovaEmail =
  "innovasolucionesdigitales@gmail.com";

export const emailLink =
  `mailto:${innovaEmail}?subject=${encodeURIComponent(
    "Consulta por solución digital"
  )}&body=${encodeURIComponent(
    "Hola, quiero consultar por una página web o solución digital para mi negocio."
  )}`;

export const socialLinks = [
  {
    href: whatsappLink,
    ariaLabel: "WhatsApp de Innova",
    tooltip: "WhatsApp",
    color: "#25D366",
    type: "whatsapp",
  },
  {
    href: instagramLink,
    ariaLabel: "Instagram de Innova",
    tooltip: "Instagram",
    color: "#E1306C",
    type: "instagram",
  },
  {
    href: emailLink,
    ariaLabel: "Email de Innova",
    tooltip: "Email",
    color: "#ff334f",
    type: "email",
  },
] as const;
 