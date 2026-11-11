
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "../../data/contact";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const onSolutionsPage = window.location.pathname === "/soluciones-web";
  const home = onSolutionsPage ? "/" : "";

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={isOpen ? "navbar is-open" : "navbar"}>
      <a
        className="brand"
        href="/"
        onClick={closeMenu}
      >
        <div className="logo">
          <img
            src="/innova-symbol.svg"
            alt=""
            width={36}
            height={36}
            style={{ display: "block", objectFit: "contain" }}
          />
        </div>

        <div>
          <h2>INNOVA</h2>
          <p>Soluciones Digitales</p>
        </div>
      </a>

      <nav
        className="nav-links"
        aria-label="Navegación principal"
      >
        <a href="/" onClick={closeMenu}>
          Inicio
        </a>

        <a href={`${home}#contacto`} onClick={closeMenu}>
          Contacto
        </a>

        <a href={onSolutionsPage ? "/soluciones-web" : "#soluciones"} onClick={closeMenu} aria-current={onSolutionsPage ? "page" : undefined}>
          Soluciones por rubro
        </a>

        <a href={`${home}#proyectos`} onClick={closeMenu}>
          Proyectos
        </a>

        <a href={`${home}#servicios`} onClick={closeMenu}>
          Nuestros servicios
        </a>
      </nav>

      <div className="navbar-actions">
        <a
          className="btn-whatsapp"
          href={onSolutionsPage && whatsappLink === "#contacto" ? "/#contacto" : whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Hablemos
        </a>

        <button
          className="navbar-menu-btn"
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() =>
            setIsOpen((current) => !current)
          }
        >
          {isOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
 
