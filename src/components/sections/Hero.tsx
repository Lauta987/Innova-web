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
        <span className="eyebrow">IMPULSAMOS TU NEGOCIO</span>

        <h1>
          Llevamos tu negocio al siguiente nivel con <span>tecnología</span>
        </h1>

        <p>
          Desarrollamos páginas web y sistemas a medida para que empresas y
          emprendimientos crezcan, automaticen procesos y generen más
          oportunidades.
        </p>

        <div className="hero-buttons">
          <a href="#servicios" className="btn-primary">
            Ver servicios
          </a>

          <a href="#proyectos" className="btn-secondary">
            Ver proyectos
          </a>
        </div>
      </div>

      <div className="hero-orbit-system">
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>
        <div className="orbit orbit-4"></div>

        <div className="hero-orbit-core">
          <h3>INNOVA</h3>
          <span>MÉTODO</span>
        </div>

        <div className="orbit-label-track orbit-label-track-1">
          <div className="orbit-tag orbit-tag-1">
            <Target size={22} />
            <span>Estrategia</span>
            <i></i>
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-2">
          <div className="orbit-tag orbit-tag-2">
            <PencilRuler size={22} />
            <span>Diseño</span>
            <i></i>
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-3">
          <div className="orbit-tag orbit-tag-3">
            <Code2 size={22} />
            <span>Desarrollo</span>
            <i></i>
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-4">
          <div className="orbit-tag orbit-tag-4">
            <SlidersHorizontal size={22} />
            <span>Personalización</span>
            <i></i>
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