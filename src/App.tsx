import Navbar from "./components/layout/Navbar";
import Contact from "./components/sections/Contact"; 
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import Technologies from "./components/sections/Technologies";
import ContactIdea from "./components/sections/ContactIdea";
import Solutions from "./components/sections/Solutions";
import PricingPlans from "./components/sections/PricingPlans";

import RealEstate from "./components/sections/RealEstate";

function App() {
  if (window.location.pathname.replace(/\/$/, "") === "/inmobiliaria") {
    return <main className="page"><Navbar /><RealEstate /></main>;
  }
  if (window.location.pathname === "/soluciones-web") {
    return <main className="page"><Navbar /><Solutions /></main>;
  }
  return (
    <main className="page">
      <Navbar />

      <Hero />

      <PricingPlans placement="desktop" />

      <Solutions embedded />

      <ContactIdea />

      <Projects />

      <Services />

      <Process />

      <Technologies />

    <Contact />
  </main>
  );
}

export default App;
