import Navbar from "./components/layout/Navbar";

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

      
    </main>
  );
}

export default App;