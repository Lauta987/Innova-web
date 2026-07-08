import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import Technologies from "./components/sections/Technologies";
import CTA from "./components/sections/CTA";
import Blog from "./components/sections/Blog";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="page">
      <Navbar />

      <Hero />

      <Services />

      <Projects setSelectedImage={setSelectedImage} />

      <Process />

      <Technologies />

      <CTA />

      <Blog />

      <About />

      <Contact />

      <Footer />

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button
            className="modal-close"
            type="button"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Vista ampliada"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default App; 