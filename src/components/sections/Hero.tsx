
import {
  Home, Plane, Shirt, Bike, Car, Grid2X2, ChevronRight,
  Code2,
  PencilRuler,
  SlidersHorizontal,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import HeroParticles from "../ui/HeroParticles";

import { whatsappNumber } from "../../data/contact";

const rubros = [
  ["Inmobiliaria", "mi inmobiliaria", Home],
  ["Turismo", "mi agencia de viajes", Plane],
  ["Tienda de ropa", "mi tienda de ropa", Shirt],
  ["Bicicletería", "mi bicicletería", Bike],
  ["Automotores", "mi concesionaria", Car],
  ["Otro rubro", "mi negocio", Grid2X2],
] as const;

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
          <span role="img" aria-label="Google" style={{ whiteSpace: "nowrap", fontWeight: 700 }}>
            <span aria-hidden="true" style={{ color: "#4285F4" }}>G</span>
            <span aria-hidden="true" style={{ color: "#EA4335" }}>o</span>
            <span aria-hidden="true" style={{ color: "#FBBC05" }}>o</span>
            <span aria-hidden="true" style={{ color: "#4285F4" }}>g</span>
            <span aria-hidden="true" style={{ color: "#34A853" }}>l</span>
            <span aria-hidden="true" style={{ color: "#EA4335" }}>e</span>
          </span>{" "}
          para que tu negocio atraiga consultas orgánicamente.
        </p>

        <section className="demo-rubros" aria-labelledby="demo-title">
          <style>{`.demo-rubros{margin-top:1.5rem;text-align:left;max-width:34rem}.demo-rubros h2{font-size:clamp(1.45rem,3vw,2rem);line-height:1.12}.demo-rubros small{display:block;color:#d4cbd0;margin:.55rem 0 1rem}.demo-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.6rem}.demo-grid a{display:flex;align-items:center;gap:.45rem;padding:.6rem .7rem;min-height:46px;border:1px solid #887981;border-radius:8px;background:#100e13;color:white;font-size:.9rem;font-weight:650}.demo-grid svg{flex-shrink:0}.demo-grid a:hover,.demo-grid a:focus-visible{border-color:#ff3958}.demo-grid .arrow{margin-left:auto;color:#ff3958}.demo-projects{display:block;width:fit-content;margin:1.2rem auto 0}.hero .demo-rubros{width:100%}@media(max-width:768px){#inicio .hero-orbit-system,#inicio .scroll-indicator,#inicio::after{display:none}#inicio{min-height:0;height:auto;grid-template-columns:minmax(0,1fr);grid-template-rows:auto;gap:0;padding-bottom:2rem}#inicio .demo-rubros{margin-inline:auto}}`}</style>
          <h2 id="demo-title">Solicitá gratis una demo de tu sitio web.</h2>
          <small>Elegí tu rubro y pedí tu demo por WhatsApp.</small>
          <div className="demo-grid">
            {rubros.map(([label, negocio, Icon]) => (
              <a key={label} href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero solicitar una demo gratis personalizada para " + negocio + ".")}`} target="_blank" rel="noopener noreferrer">
                <Icon size={18} aria-hidden="true" />{label}<ChevronRight className="arrow" size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
          <a href="#proyectos" className="btn-secondary demo-projects">Ver proyectos reales</a>
        </section>
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
              <Target size={22} aria-hidden="true" />
              <span>Estrategia</span>
              <i></i>
            </div>
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-2">
          <div className="orbit-tag-orbiter orbit-tag-orbiter-2">
            <div className="orbit-tag orbit-tag-2">
              <PencilRuler size={22} aria-hidden="true" />
              <span>Diseño</span>
              <i></i>
            </div>
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-3">
          <div className="orbit-tag-orbiter orbit-tag-orbiter-3">
            <div className="orbit-tag orbit-tag-3">
              <Code2 size={22} aria-hidden="true" />
              <span>Desarrollo</span>
              <i></i>
            </div>
          </div>
        </div>

        <div className="orbit-label-track orbit-label-track-4">
          <div className="orbit-tag-orbiter orbit-tag-orbiter-4">
            <div className="orbit-tag orbit-tag-4">
              <SlidersHorizontal size={22} aria-hidden="true" />
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
 
