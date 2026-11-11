
import {
  Code2,
  PencilRuler,
  SlidersHorizontal,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import HeroParticles from "../ui/HeroParticles";

function Hero() {
  return (
    <motion.section
      id="inicio"
      className="hero"
      initial={{ opacity: 0, y: 45 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <HeroParticles />

      <div className="hero-bg-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-content">
        <span className="eyebrow">
          IMPULSAMOS TU NEGOCIO
        </span>

        <h1>
          Hacemos que tu web <span>venda</span> y trabaje por vos.
        </h1>

        <p>
          Combinamos el desarrollo web y posicionamiento SEO en{" "}
          <span aria-label="Google" style={{ whiteSpace: "nowrap", fontWeight: 700 }}>
            <span aria-hidden="true" style={{ color: "#4285F4" }}>G</span>
            <span aria-hidden="true" style={{ color: "#EA4335" }}>o</span>
            <span aria-hidden="true" style={{ color: "#FBBC05" }}>o</span>
            <span aria-hidden="true" style={{ color: "#4285F4" }}>g</span>
            <span aria-hidden="true" style={{ color: "#34A853" }}>l</span>
            <span aria-hidden="true" style={{ color: "#EA4335" }}>e</span>
          </span>{" "}
          para que tu negocio atraiga consultas orgánicamente.
        </p>

        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">
            Quiero mi muestra web gratis
          </a>

          <a href="#proyectos" className="btn-secondary">
            Ver proyectos
          </a>
        </div>

        <small className="hero-sample-note">
          ✓ Personalizada para tu negocio · ✓ Sin compromiso
        </small>
      </div>

      <div className="hero-orbit-system">
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>
        <div className="orbit orbit-4"></div>

        <div className="hero-orbit-core">
          <div className="innova-logo-orbit">
            <img
              className="innova-core-logo"
              src="/innova-symbol.svg"
              alt="INNOVA Soluciones Digitales"
            />
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-1">
          <div className="orbit-tag-orbiter orbit-tag-orbiter-1">
            <div className="orbit-tag orbit-tag-1">
              <Target size={22} />
              <span>Estrategia</span>
              <i></i>
            </div>
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-2">
          <div className="orbit-tag-orbiter orbit-tag-orbiter-2">
            <div className="orbit-tag orbit-tag-2">
              <PencilRuler size={22} />
              <span>Diseño</span>
              <i></i>
            </div>
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-3">
          <div className="orbit-tag-orbiter orbit-tag-orbiter-3">
            <div className="orbit-tag orbit-tag-3">
              <Code2 size={22} />
              <span>Desarrollo</span>
              <i></i>
            </div>
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-4">
          <div className="orbit-tag-orbiter orbit-tag-orbiter-4">
            <div className="orbit-tag orbit-tag-4">
              <SlidersHorizontal size={22} />
              <span>Personalización</span>
              <i></i>
            </div>
          </div>
        </div>

        <span className="orbit-dot orbit-dot-1"></span>
        <span className="orbit-dot orbit-dot-2"></span>
        <span className="orbit-dot orbit-dot-3"></span>
        <span className="orbit-dot orbit-dot-4"></span>
        <span className="orbit-dot orbit-dot-5"></span>
      </div>

      <div className="scroll-indicator">↓</div>
    </motion.section>
  );
}

export default Hero;
 
