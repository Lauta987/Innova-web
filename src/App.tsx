import Navbar from "./components/layout/Navbar";
import Contact from "./components/sections/Contact"; 
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import Technologies from "./components/sections/Technologies";
import ContactIdea from "./components/sections/ContactIdea";

function App() {
  return (
    <main className="page">
      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <Process />

     <ContactIdea />
     
     <Technologies />

    <Contact />
  </main>
  );
}

export default App;