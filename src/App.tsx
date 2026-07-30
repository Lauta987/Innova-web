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
  return (
    <main className="page">
      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <Process />

      <Technologies />

      <CTA />

      <Blog />

      <About />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
 