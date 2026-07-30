import {
  Bike,
  CalendarDays,
  Dumbbell,
  Leaf,
  Rocket,
} from "lucide-react";
import FadeSection from "../ui/FadeSection";
import ProjectCardStack, {
  type ProjectCardStackItem,
} from "../ui/ProjectCardStack";

const projects: ProjectCardStackItem[] = [
  {
    id: "bicicleteria",
    title: "Gestión de Bicicletería",
    description:
      "Sistema para registrar clientes, bicicletas, reparaciones y estados de cada trabajo.",
    status: "EN DESARROLLO",
    imageSrc: "/projects/bicicleteria-cover.webp",
    imageAlt: "Panel del sistema de gestión para bicicletería",
    href: "#contacto",
    ctaLabel: "Consultar proyecto",
    tags: ["Clientes", "Reparaciones", "WhatsApp"],
    accent: "#94a3b8",
    icon: Bike,
    gallery: [
      {
        src: "/projects/bicicleteria-cover.webp",
        alt: "Panel principal del sistema de gestión para bicicletería",
        label: "Panel principal",
      },
      {
        src: "/projects/bicicleteria-clientes.webp",
        alt: "Gestión de clientes y bicicletas",
        label: "Clientes",
      },
      {
        src: "/projects/bicicleteria-reparaciones.webp",
        alt: "Seguimiento de reparaciones de bicicletas",
        label: "Reparaciones",
      },
    ],
    problem:
      "El seguimiento en cuadernos o mensajes dispersos dificulta saber qué bicicleta ingresó, qué trabajo necesita y cuándo está lista para entregar.",
    solution:
      "Centraliza clientes, bicicletas y reparaciones en un solo lugar, con estados claros y comunicación por WhatsApp cuando el trabajo está terminado.",
    features: [
      "Registrar clientes y sus bicicletas",
      "Controlar reparaciones, estados y precios",
      "Avisar al cliente por WhatsApp",
    ],
  },
  {
    id: "harmonia",
    title: "Harmonia Aromas",
    description:
      "Catálogo web, panel administrativo y experiencia instalable para gestionar productos de forma independiente.",
    status: "WEB + ADMIN + PWA",
    imageSrc: "/projects/harmonia-cover.webp",
    imageAlt: "Sitio web y panel de administración de Harmonia Aromas",
    href: "#contacto",
    ctaLabel: "Consultar proyecto",
    tags: ["Catálogo", "Panel Admin", "PWA"],
    accent: "#89966f",
    icon: Leaf,
    gallery: [
      {
        src: "/projects/harmonia-cover.webp",
        alt: "Página pública de Harmonia Aromas",
        label: "Página pública",
      },
      {
        src: "/projects/harmonia-catalogo.webp",
        alt: "Catálogo de productos de Harmonia Aromas",
        label: "Catálogo",
      },
      {
        src: "/projects/harmonia-admin.webp",
        alt: "Panel de administración de Harmonia Aromas",
        label: "Administración",
      },
      {
        src: "/projects/harmonia-pwa.webp",
        alt: "Aplicación instalable de Harmonia Aromas",
        label: "PWA",
      },
    ],
    problem:
      "La marca necesitaba mostrar sus productos con una imagen premium y actualizar el catálogo sin depender de otra persona para cada cambio.",
    solution:
      "Combina una tienda visual orientada a pedidos por WhatsApp con un panel propio para administrar productos, precios, disponibilidad y contenido.",
    features: [
      "Presentar productos y aromas con una identidad premium",
      "Administrar el catálogo de forma independiente",
      "Recibir consultas y pedidos por WhatsApp",
      "Instalar el panel como aplicación PWA",
    ],
  },
  {
    id: "gymstart",
    title: "GymStart",
    description:
      "Una experiencia premium para alumnos y herramientas simples para administrar rutinas y progreso.",
    status: "SAAS PARA GIMNASIOS",
    imageSrc: "/projects/gymstart-card.webp",
    imageAlt: "Aplicación de alumnos y panel administrativo de GymStart",
    href: "#contacto",
    ctaLabel: "Solicitar una demo",
    tags: ["Alumnos", "Rutinas", "Progreso"],
    accent: "#3b82f6",
    icon: Dumbbell,
    gallery: [
      {
        src: "/projects/gymstart-cover.webp",
        alt: "Aplicación móvil de GymStart para alumnos",
        label: "Vista móvil",
      },
      {
        src: "/projects/gymstart-alumno.webp",
        alt: "Aplicación móvil de GymStart para alumnos",
        label: "Experiencia alumno",
      },
      {
        src: "/projects/gymstart-rutinas.webp",
        alt: "Rutina de entrenamiento dentro de GymStart",
        label: "Rutinas",
      },
      {
        src: "/projects/gymstart-cardio.webp",
        alt: "Registro de cardio y calorías en GymStart",
        label: "Cardio",
      },
      {
        src: "/projects/gymstart-admin.webp",
        alt: "Panel administrativo de GymStart",
        label: "Administración",
      },
    ],
    problem:
      "Muchos gimnasios entregan rutinas de forma poco práctica y el alumno no tiene una experiencia clara para consultar ejercicios, registrar avances o seguir su entrenamiento.",
    solution:
      "Ofrece una aplicación personalizada para cada gimnasio donde el alumno encuentra su rutina y progreso, mientras el administrador gestiona todo desde un panel simple.",
    features: [
      "Crear alumnos, ejercicios y rutinas",
      "Asignar entrenamientos organizados por día",
      "Mostrar videos y datos de cada ejercicio",
      "Registrar progreso y actividad de cardio",
      "Personalizar logo y colores del gimnasio",
    ],
  },
  {
    id: "spoton",
    title: "SpotOn",
    description:
      "Plataforma de turnos que centraliza disponibilidad, reservas y cancelaciones de canchas.",
    status: "PROYECTO ACADÉMICO",
    imageSrc: "/projects/spoton-cover.webp",
    imageAlt: "Panel del sistema de reservas SpotOn",
    href: "#contacto",
    ctaLabel: "Conocer el caso",
    tags: ["Turnos", "Reservas", "Usuarios"],
    accent: "#ff334f",
    icon: CalendarDays,
    gallery: [
      {
        src: "/projects/spoton-cover.webp",
        alt: "Vista general de la plataforma SpotOn",
        label: "Vista general",
      },
      {
        src: "/projects/spoton-disponibilidad.webp",
        alt: "Consulta de horarios disponibles en SpotOn",
        label: "Disponibilidad",
      },
      {
        src: "/projects/spoton-reservas.webp",
        alt: "Gestión de reservas en SpotOn",
        label: "Reservas",
      },
    ],
    problem:
      "La disponibilidad de canchas y las reservas pueden quedar repartidas entre mensajes, llamadas y registros manuales, generando confusión y turnos duplicados.",
    solution:
      "Reúne horarios, disponibilidad y reservas en una plataforma donde cada usuario puede consultar, reservar y cancelar sus turnos.",
    features: [
      "Publicar horarios disponibles",
      "Reservar sin duplicar turnos",
      "Consultar y cancelar reservas",
      "Separar acciones de usuarios y administradores",
    ],
  },
  {
    id: "proximamente",
    title: "Próximo sistema",
    description:
      "Nuevas herramientas pensadas para mejorar procesos y experiencias en negocios reales.",
    status: "PRÓXIMAMENTE",
    tags: ["Nuevo producto", "Innova"],
    accent: "#ff334f",
    icon: Rocket,
    comingSoon: true,
  },
];

function Projects() {
  return (
    <FadeSection id="proyectos">
      <div className="projects-fan-intro">
        <span className="eyebrow">PROYECTOS</span>

        <h2>
          Sistemas que resuelven
          <span> problemas reales</span>
        </h2>

        <p>
          Productos digitales creados para mejorar la experiencia de cada
          negocio y simplificar su gestión.
        </p>
      </div>

      <ProjectCardStack
        items={projects}
        initialIndex={2}
        autoAdvance
        intervalMs={4800}
      />
    </FadeSection>
  );
}

export default Projects; 