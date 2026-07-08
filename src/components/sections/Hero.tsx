import { BarChart3, Code2, Settings, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 45 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
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

      <div className="hero-tech-card">
        <div className="code-box">
          <Code2 size={82} />
        </div>

        <h3>Soluciones que impulsan</h3>

        <p>
          Desarrollamos tecnología a medida para llevar tu negocio más lejos.
        </p>

        <div className="hero-features">
          <div>
            <Settings size={22} />
            <span>A medida</span>
          </div>

          <div>
            <BarChart3 size={22} />
            <span>Escalable</span>
          </div>

          <div>
            <ShieldCheck size={22} />
            <span>Confiable</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">↓</div>
    </motion.section>
  );
}

export default Hero; 