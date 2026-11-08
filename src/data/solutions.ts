export type Solution = {
  id: string;
  title: string;
  description: string;
  features: [string, string, string];
  categories: string[];
  image?: string;
  demoUrl?: string;
};

// Configure only verified public demo URLs. Missing URLs display “Próximamente”.
export const solutions: Solution[] = [
  { id: "inmobiliarias", title: "Inmobiliarias", description: "Propiedades, búsquedas y consultas en un mismo lugar.", features: ["Catálogo", "Filtros", "Consultas"], categories: ["Inmobiliarias", "Servicios"], image: "/solutions/inmobiliaria.webp", demoUrl: "https://inmobiliria.innovadev.com.ar/" },
  { id: "turismo", title: "Agencias de turismo", description: "Destinos y experiencias que invitan a viajar.", features: ["Destinos", "Paquetes", "WhatsApp"], categories: ["Turismo", "Servicios"], image: "/solutions/turismo.webp", demoUrl: "https://turismo.innovadev.com.ar/" },
  { id: "bicicleterias", title: "Bicicleterías", description: "Mostrá bicicletas, marcas y servicios de reparación.", features: ["Catálogo", "Marcas", "Reparaciones"], categories: ["Comercios", "Servicios"], image: "/solutions/bicicleteria.webp", demoUrl: "https://bicicleteria.innovadev.com.ar/" },
  { id: "automotores", title: "Concesionarias y automotores", description: "Un espacio para presentar cada vehículo en detalle.", features: ["Vehículos", "Filtros", "Consultas"], categories: ["Automotores", "Comercios"], image: "/solutions/automotores.webp", demoUrl: "https://automotores.innovadev.com.ar/" },
  { id: "indumentaria", title: "Tiendas de ropa", description: "Colecciones, prendas y pedidos de forma simple.", features: ["Prendas", "Categorías", "Pedidos"], categories: ["Comercios"] },
  { id: "ferreterias", title: "Ferreterías y corralones", description: "Productos y materiales organizados para recibir presupuestos.", features: ["Productos", "Marcas", "Presupuestos"], categories: ["Comercios", "Servicios"] },
];

export const solutionFilters = ["Todos", "Inmobiliarias", "Turismo", "Automotores", "Comercios", "Servicios"];
