import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HarmoniaShowcaseProps = {
  setSelectedImage: (image: string) => void;
};

type CarouselName = "web" | "admin" | "app";

const webImages = [
  "/images/harmonia-web.png",
  "/images/harmonia-web-2.png",
  "/images/harmonia-carrito.png",
];
 
const adminImages = [
  "/images/harmonia-admin-login.png",
  "/images/harmonia-admin-panel.png",
  "/images/harmonia-admin-3.png",
];

const appImages = [
  "/images/harmonia-pwa.png",
  "/images/harmonia-pwa-2.png",
  "/images/harmonia-pwa-3.png",
];

function HarmoniaShowcase({ setSelectedImage }: HarmoniaShowcaseProps) {
  const [activeImages, setActiveImages] = useState({
    web: 0,
    admin: 0,
    app: 0,
  });

  const getImages = (carousel: CarouselName) => {
    if (carousel === "web") return webImages;
    if (carousel === "admin") return adminImages;
    return appImages;
  };

  const nextImage = (carousel: CarouselName) => {
    const images = getImages(carousel);

    setActiveImages((prev) => ({
      ...prev,
      [carousel]: (prev[carousel] + 1) % images.length,
    }));
  };

  const prevImage = (carousel: CarouselName) => {
    const images = getImages(carousel);

    setActiveImages((prev) => ({
      ...prev,
      [carousel]:
        prev[carousel] === 0 ? images.length - 1 : prev[carousel] - 1,
    }));
  };

  const goToImage = (carousel: CarouselName, index: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [carousel]: index,
    }));
  };

  return (
    <>
      <div className="harmonia-project">
        <div className="project-preview">
          <div className="showcase-carousel">
            <img
              src={webImages[activeImages.web]}
              alt="Página pública de Harmonia"
              onClick={() => setSelectedImage(webImages[activeImages.web])}
            />

            <button
              className="carousel-btn carousel-left"
              onClick={() => prevImage("web")}
              type="button"
              aria-label="Imagen anterior de la página pública"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className="carousel-btn carousel-right"
              onClick={() => nextImage("web")}
              type="button"
              aria-label="Imagen siguiente de la página pública"
            >
              <ChevronRight size={22} />
            </button>

            <div className="carousel-dots">
              {webImages.map((_, index) => (
                <button
                  key={index}
                  className={index === activeImages.web ? "dot active" : "dot"}
                  onClick={() => goToImage("web", index)}
                  type="button"
                  aria-label={`Ver imagen ${index + 1} de la página pública`}
                />
              ))}
            </div>
          </div>

          <div className="preview-info">
            <div className="preview-icon">🌐</div>

            <div>
              <h4>Página pública</h4>
              <p>Sitio web para presentación de la marca y productos.</p>
            </div>
          </div>
        </div>

        <div className="project-plus">+</div>

        <div className="project-preview">
          <div className="showcase-carousel">
            <img
              src={adminImages[activeImages.admin]}
              alt="Panel de gestión de Harmonia"
              onClick={() =>
                setSelectedImage(adminImages[activeImages.admin])
              }
            />

            <button
              className="carousel-btn carousel-left"
              onClick={() => prevImage("admin")}
              type="button"
              aria-label="Imagen anterior del panel de gestión"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className="carousel-btn carousel-right"
              onClick={() => nextImage("admin")}
              type="button"
              aria-label="Imagen siguiente del panel de gestión"
            >
              <ChevronRight size={22} />
            </button>

            <div className="carousel-dots">
              {adminImages.map((_, index) => (
                <button
                  key={index}
                  className={
                    index === activeImages.admin ? "dot active" : "dot"
                  }
                  onClick={() => goToImage("admin", index)}
                  type="button"
                  aria-label={`Ver imagen ${index + 1} del panel`}
                />
              ))}
            </div>
          </div>

          <div className="preview-info">
            <div className="preview-icon">⚙️</div>

            <div>
              <h4>Panel de gestión</h4>
              <p>Administración completa de productos y categorías.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="project-plus pwa-plus">+</div>

      <span className="pwa-eyebrow">TAMBIÉN DISPONIBLE COMO</span>

      <h3 className="pwa-title">Aplicación instalable</h3>

      <div className="harmonia-pwa-showcase">
        <div className="project-preview pwa-preview">
          <div className="pwa-content">
            <div className="pwa-phone">
              <div className="showcase-carousel app-carousel">
                <img
                  src={appImages[activeImages.app]}
                  alt="Aplicación instalable de Harmonia"
                  onClick={() => setSelectedImage(appImages[activeImages.app])}
                />

                <button
                  className="carousel-btn carousel-left"
                  onClick={() => prevImage("app")}
                  type="button"
                  aria-label="Imagen anterior de la app"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  className="carousel-btn carousel-right"
                  onClick={() => nextImage("app")}
                  type="button"
                  aria-label="Imagen siguiente de la app"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="carousel-dots">
                  {appImages.map((_, index) => (
                    <button
                      key={index}
                      className={
                        index === activeImages.app ? "dot active" : "dot"
                      }
                      onClick={() => goToImage("app", index)}
                      type="button"
                      aria-label={`Ver imagen ${index + 1} de la app`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pwa-info">
              <div className="preview-icon">📱</div>

              <h4>Aplicación instalable</h4>

              <p>
                Acceso rápido desde el celular mediante tecnología PWA, sin
                necesidad de descargar desde una tienda de aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HarmoniaShowcase; 