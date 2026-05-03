export type Caso = {
  id: string;
  src: string;
  alt: string;
  tratamiento: string;
  descripcion: string;
  aspect: string;
  cloudinaryId?: string;
};

export type CasoFeatured = {
  id: string;
  src: string;
  alt: string;
  tratamiento: string;
  descripcion: string;
  detalle: string;
  cloudinaryId?: string;
};

export const CASO_FEATURED_STATIC: CasoFeatured = {
  id: "featured-01",
  src: "/images/casos/caso-extremo-carillas-veneers-03-dr-ariel-merino-am-estetica-dental.webp",
  alt: "Transformación extrema con carillas de porcelana — Dr. Ariel Merino — AM Estética Dental Puerto Madero",
  tratamiento: "Carillas de Porcelana",
  descripcion: "Transformación extrema",
  detalle: "Rehabilitación completa del sector anterior con veneers de porcelana de alta translucidez",
};

export const CASOS_STATIC: Caso[] = [
  {
    id: "caso-01",
    src: "/images/casos/caso-carillas-ceramicas-antes-despues-02-am-estetica-dental.webp",
    alt: "Antes de carillas cerámicas — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Antes",
    aspect: "aspect-square",
  },
  {
    id: "caso-02",
    src: "/images/casos/caso-carillas-ceramicas-antes-despues-01-am-estetica-dental.webp",
    alt: "Después de carillas cerámicas — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Después",
    aspect: "aspect-square",
  },
  {
    id: "caso-03",
    src: "/images/casos/caso-diseno-sonrisa-carillas-ceramicas-antes-despues-am-estetica-dental.webp",
    alt: "Diseño de sonrisa con carillas cerámicas antes y después — AM Estética Dental",
    tratamiento: "Diseño de Sonrisa",
    descripcion: "Antes / Después",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-04",
    src: "/images/casos/caso-eli-carillas-ceramicas-01-am-estetica-dental.webp",
    alt: "Caso Eli — Transformación con carillas cerámicas antes y después — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso Eli — Antes / Después",
    aspect: "aspect-square",
  },
  {
    id: "caso-05",
    src: "/images/casos/caso-bruxismo-carillas-mordida-cruzada-am-estetica-dental.webp",
    alt: "Tratamiento de bruxismo con carillas y corrección de mordida cruzada — AM Estética Dental",
    tratamiento: "Bruxismo",
    descripcion: "Mordida cruzada",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-06",
    src: "/images/casos/caso-erosion-dentaria-carillas-ceramicas-am-estetica-dental.webp",
    alt: "Tratamiento de erosión dentaria con carillas cerámicas — AM Estética Dental",
    tratamiento: "Erosión Dentaria",
    descripcion: "Rehabilitación completa",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-07",
    src: "/images/casos/caso-caries-carillas-diseno-sonrisa-ceramica-am-estetica-dental.webp",
    alt: "Diseño de sonrisa cerámica en caso de caries — AM Estética Dental",
    tratamiento: "Diseño de Sonrisa",
    descripcion: "Rehabilitación cerámica",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-08",
    src: "/images/casos/caso-carillas-ceramicas-antes-despues-03-am-estetica-dental.webp",
    alt: "Carillas cerámicas caso avanzado antes y después — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso avanzado",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-09",
    src: "/images/casos/caso-carilla-diente-oscurecido-tratamiento-conducto-am-estetica-dental.webp",
    alt: "Carilla sobre diente oscurecido post tratamiento de conducto — AM Estética Dental",
    tratamiento: "Carilla Unitaria",
    descripcion: "Post endodoncia",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-10",
    src: "/images/casos/caso-extremo-diseno-sonrisa-carillas-ceramicas-dr-ariel-merino.webp",
    alt: "Caso extremo de diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso extremo",
    aspect: "aspect-[16/9]",
  },
  {
    id: "caso-11",
    src: "/images/casos/caso-italiano-carillas-ceramicas-01-am-estetica-dental.webp",
    alt: "Caso Italiano — Carillas cerámicas AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso internacional",
    aspect: "aspect-square",
  },
  {
    id: "caso-12",
    src: "/images/casos/caso-italiano-carillas-ceramicas-02-am-estetica-dental.webp",
    alt: "Resultado carillas cerámicas caso internacional — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Resultado final",
    aspect: "aspect-square",
  },
  {
    id: "caso-13",
    src: "/images/casos/caso-patricia-carillas-diseno-sonrisa-ceramicas-dr-ariel-merino.webp",
    alt: "Caso Patricia — diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino",
    tratamiento: "Diseño de Sonrisa",
    descripcion: "Transformación natural",
    aspect: "aspect-[16/9]",
  },
  {
    id: "caso-14",
    src: "/images/casos/caso-extremo-carillas-veneers-04-dr-ariel-merino-am-estetica-dental.webp",
    alt: "Transformación extrema con carillas — antes y después — Dr. Ariel Merino AM Estética Dental",
    tratamiento: "Carillas de Porcelana",
    descripcion: "Caso extremo — Antes / Después",
    aspect: "aspect-[16/9]",
  },
  {
    id: "caso-15",
    src: "/images/casos/caso-eli-carillas-ceramicas-03-am-estetica-dental.webp",
    alt: "Caso Eli — antes del tratamiento con carillas cerámicas — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso Eli — Antes",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-16",
    src: "/images/casos/caso-eli-carillas-ceramicas-04-am-estetica-dental.webp",
    alt: "Caso Eli — después del tratamiento con carillas cerámicas — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso Eli — Después",
    aspect: "aspect-[4/5]",
  },
];
