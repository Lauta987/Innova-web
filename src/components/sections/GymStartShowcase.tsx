import { useState } from "react";
import { Activity, ChevronLeft, ChevronRight, Dumbbell } from "lucide-react";

type GymStartShowcaseProps = {
  setSelectedImage: (image: string) => void;
};

type CarouselName = "student" | "admin";

const studentImages = [
  "/images/gymstart-student-1.png",
  "/images/gymstart-student-2.png",
  "/images/gymstart-student-3.png",
];

const adminImages = [
  "/images/gymstart-admin-1.png",
  "/images/gymstart-admin-2.png",
  "/images/gymstart-admin-3.png",
];

function GymStartShowcase({ setSelectedImage }: GymStartShowcaseProps) {
  const [activeImages, setActiveImages] = useState({
    student: 0,
    admin: 0,
  });

  const getImages = (carousel: CarouselName) => {
    if (carousel === "student") return studentImages;
    return adminImages;
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
    <div className="gymstart-showcase">
      <div className="gymstart-main">
        <article className="gymstart-student-panel">
          <div className="gymstart-view-header">
            <span>Vista del alumno</span>
            <small>App móvil / PWA</small>
          </div>

          <div className="gymstart-carousel student-carousel">
            <img
              src={studentImages[activeImages.student]}
              alt="Vista del alumno en GymStart"
              onClick={() =>
                setSelectedImage(studentImages[activeImages.student])
              }
            />

            <button
              className="carousel-btn carousel-left"
              onClick={() => prevImage("student")}
              type="button"
              aria-label="Imagen anterior de la vista alumno"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className="carousel-btn carousel-right"
              onClick={() => nextImage("student")}
              type="button"
              aria-label="Imagen siguiente de la vista alumno"
            >
              <ChevronRight size={22} />
            </button>

            <div className="carousel-dots">
              {studentImages.map((_, index) => (
                <button
                  key={index}
                  className={
                    index === activeImages.student ? "dot active" : "dot"
                  }
                  onClick={() => goToImage("student", index)}
                  type="button"
                  aria-label={`Ver pantalla ${index + 1} del alumno`}
                />
              ))}
            </div>
          </div>

          <p>
            Los alumnos pueden consultar rutinas, registrar cardio, ver videos y
            seguir su progreso desde el celular.
          </p>
        </article>

        <article className="gymstart-admin-side">
          <div className="gymstart-copy">
            <span className="eyebrow">PROYECTO DESTACADO</span>

            <h3>
              Mejoramos la <span>experiencia</span> de tus alumnos
            </h3>

            <div className="gymstart-mini-tags">
              <span>
                <Dumbbell size={18} />
                SaaS para gimnasios
              </span>

              <span>
                <Activity size={18} />
                Experiencia móvil
              </span>
            </div>
          </div>

          <div className="gymstart-view-header gymstart-admin-header">
            <span>Vista de administración</span>
            <small>Panel de gestión</small>
          </div>

          <div className="gymstart-carousel admin-carousel">
            <img
              src={adminImages[activeImages.admin]}
              alt="Vista de administración en GymStart"
              onClick={() => setSelectedImage(adminImages[activeImages.admin])}
            />

            <button
              className="carousel-btn carousel-left"
              onClick={() => prevImage("admin")}
              type="button"
              aria-label="Imagen anterior de la vista administración"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className="carousel-btn carousel-right"
              onClick={() => nextImage("admin")}
              type="button"
              aria-label="Imagen siguiente de la vista administración"
            >
              <ChevronRight size={22} />
            </button>

            <div className="carousel-dots">
              {adminImages.map((_, index) => (
                <button
                  key={index}
                  className={index === activeImages.admin ? "dot active" : "dot"}
                  onClick={() => goToImage("admin", index)}
                  type="button"
                  aria-label={`Ver pantalla ${index + 1} de administración`}
                />
              ))}
            </div>
          </div>

          <p className="gymstart-admin-text">
            El gimnasio puede gestionar alumnos, rutinas, ejercicios, progreso y
            organización general desde un panel simple e intuitivo.
          </p>
        </article>
      </div>
    </div>
  );
}

export default GymStartShowcase; 