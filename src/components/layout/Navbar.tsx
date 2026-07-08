function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="logo">IN</div>

        <div>
          <h2>INNOVA</h2>
          <p>Soluciones Digitales</p>
        </div>
      </div>

      <nav>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a className="btn-whatsapp" href="#contacto">
        Hablemos
      </a>
    </header>
  );
}

export default Navbar; 