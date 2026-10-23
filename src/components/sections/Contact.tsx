
import SocialMedia from "../ui/SocialMedia";
import { socialLinks } from "../../data/contact";

function Contact() {
  return (
    <section
      id="redes"
      className="social-strip"
      aria-label="Redes sociales de INNOVA"
    >
      <div className="social-strip-inner">
        <span className="social-strip-line"></span>

        <p>Seguinos en redes</p>

        <SocialMedia
          items={socialLinks}
          className="social-media-compact"
        />
      </div>
    </section>
  );
}

export default Contact;
 