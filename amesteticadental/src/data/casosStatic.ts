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
  src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-carillas-veneers-03-dr-ariel-merino-am-estetica-dental",
  alt: "Transformación extrema con carillas de porcelana — Dr. Ariel Merino — AM Estética Dental Puerto Madero",
  tratamiento: "Carillas de Porcelana",
  descripcion: "Transformación extrema",
  detalle: "Rehabilitación completa del sector anterior con veneers de porcelana de alta translucidez",
};

export const CASOS_STATIC: Caso[] = [
  {
    id: "caso-01",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-02-am-estetica-dental",
    alt: "Antes de carillas cerámicas — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Antes",
    aspect: "aspect-square",
  },
  {
    id: "caso-02",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-01-am-estetica-dental",
    alt: "Después de carillas cerámicas — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Después",
    aspect: "aspect-square",
  },
  {
    id: "caso-03",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-diseno-sonrisa-carillas-ceramicas-antes-despues-am-estetica-dental",
    alt: "Diseño de sonrisa con carillas cerámicas antes y después — AM Estética Dental",
    tratamiento: "Diseño de Sonrisa",
    descripcion: "Antes / Después",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-04",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-eli-carillas-ceramicas-01-am-estetica-dental",
    alt: "Caso Eli — Transformación con carillas cerámicas antes y después — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso Eli — Antes / Después",
    aspect: "aspect-square",
  },
  {
    id: "caso-05",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-bruxismo-carillas-mordida-cruzada-am-estetica-dental",
    alt: "Tratamiento de bruxismo con carillas y corrección de mordida cruzada — AM Estética Dental",
    tratamiento: "Bruxismo",
    descripcion: "Mordida cruzada",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-06",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-erosion-dentaria-carillas-ceramicas-am-estetica-dental",
    alt: "Tratamiento de erosión dentaria con carillas cerámicas — AM Estética Dental",
    tratamiento: "Erosión Dentaria",
    descripcion: "Rehabilitación completa",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-07",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-caries-carillas-diseno-sonrisa-ceramica-am-estetica-dental",
    alt: "Diseño de sonrisa cerámica en caso de caries — AM Estética Dental",
    tratamiento: "Diseño de Sonrisa",
    descripcion: "Rehabilitación cerámica",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-08",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-03-am-estetica-dental",
    alt: "Carillas cerámicas caso avanzado antes y después — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso avanzado",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-09",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carilla-diente-oscurecido-tratamiento-conducto-am-estetica-dental",
    alt: "Carilla sobre diente oscurecido post tratamiento de conducto — AM Estética Dental",
    tratamiento: "Carilla Unitaria",
    descripcion: "Post endodoncia",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-10",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-diseno-sonrisa-carillas-ceramicas-dr-ariel-merino",
    alt: "Caso extremo de diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso extremo",
    aspect: "aspect-[16/9]",
  },
  {
    id: "caso-11",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-italiano-carillas-ceramicas-01-am-estetica-dental",
    alt: "Caso Italiano — Carillas cerámicas AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso internacional",
    aspect: "aspect-square",
  },
  {
    id: "caso-12",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-italiano-carillas-ceramicas-02-am-estetica-dental",
    alt: "Resultado carillas cerámicas caso internacional — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Resultado final",
    aspect: "aspect-square",
  },
  {
    id: "caso-13",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-patricia-carillas-diseno-sonrisa-ceramicas-dr-ariel-merino",
    alt: "Caso Patricia — diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino",
    tratamiento: "Diseño de Sonrisa",
    descripcion: "Transformación natural",
    aspect: "aspect-[16/9]",
  },
  {
    id: "caso-14",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-carillas-veneers-04-dr-ariel-merino-am-estetica-dental",
    alt: "Transformación extrema con carillas — antes y después — Dr. Ariel Merino AM Estética Dental",
    tratamiento: "Carillas de Porcelana",
    descripcion: "Caso extremo — Antes / Después",
    aspect: "aspect-[16/9]",
  },
  {
    id: "caso-15",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-eli-carillas-ceramicas-03-am-estetica-dental",
    alt: "Caso Eli — antes del tratamiento con carillas cerámicas — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso Eli — Antes",
    aspect: "aspect-[4/5]",
  },
  {
    id: "caso-16",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-eli-carillas-ceramicas-04-am-estetica-dental",
    alt: "Caso Eli — después del tratamiento con carillas cerámicas — AM Estética Dental",
    tratamiento: "Carillas Cerámicas",
    descripcion: "Caso Eli — Después",
    aspect: "aspect-[4/5]",
  },
];

/**
 * Los mismos casos, en inglés.
 *
 * El paciente internacional llega por /en y hasta ahora veía alt en español —
 * que para un lector de pantalla en inglés, y para Google Imágenes en inglés, es
 * lo mismo que no tener alt. `AM Estética Dental` se deja tal cual: es el nombre
 * propio de la clínica, no una frase a traducir.
 */
export type CasoEn = { alt: string; tratamiento: string; descripcion: string };

export const CASOS_STATIC_EN: Record<string, CasoEn> = {
  "featured-01": { alt: "Extreme transformation with porcelain veneers — Dr. Ariel Merino — AM Estética Dental, Puerto Madero", tratamiento: "Porcelain Veneers", descripcion: "Extreme transformation" },
  "caso-01": { alt: "Before ceramic veneers — AM Estética Dental", tratamiento: "Ceramic Veneers", descripcion: "Before" },
  "caso-02": { alt: "After ceramic veneers — AM Estética Dental", tratamiento: "Ceramic Veneers", descripcion: "After" },
  "caso-03": { alt: "Smile design with ceramic veneers, before and after — AM Estética Dental", tratamiento: "Smile Design", descripcion: "Before / After" },
  "caso-04": { alt: "Eli's case — transformation with ceramic veneers, before and after — AM Estética Dental", tratamiento: "Ceramic Veneers", descripcion: "Eli's case — Before / After" },
  "caso-05": { alt: "Bruxism treated with veneers and cross-bite correction — AM Estética Dental", tratamiento: "Bruxism", descripcion: "Cross bite" },
  "caso-06": { alt: "Dental erosion rebuilt with ceramic veneers — AM Estética Dental", tratamiento: "Dental Erosion", descripcion: "Full rehabilitation" },
  "caso-07": { alt: "Ceramic smile design in a case with decay — AM Estética Dental", tratamiento: "Smile Design", descripcion: "Ceramic rehabilitation" },
  "caso-08": { alt: "Advanced ceramic veneer case, before and after — AM Estética Dental", tratamiento: "Ceramic Veneers", descripcion: "Advanced case" },
  "caso-09": { alt: "Veneer on a tooth darkened after root canal treatment — AM Estética Dental", tratamiento: "Single Veneer", descripcion: "After root canal" },
  "caso-10": { alt: "Extreme smile design case with ceramic veneers — Dr. Ariel Merino", tratamiento: "Ceramic Veneers", descripcion: "Extreme case" },
  "caso-11": { alt: "Italian patient — ceramic veneers at AM Estética Dental", tratamiento: "Ceramic Veneers", descripcion: "International case" },
  "caso-12": { alt: "Ceramic veneer result, international patient — AM Estética Dental", tratamiento: "Ceramic Veneers", descripcion: "Final result" },
  "caso-13": { alt: "Patricia's case — smile design with ceramic veneers — Dr. Ariel Merino", tratamiento: "Smile Design", descripcion: "Natural transformation" },
  "caso-14": { alt: "Extreme transformation with veneers, before and after — Dr. Ariel Merino", tratamiento: "Porcelain Veneers", descripcion: "Extreme case — Before / After" },
  "caso-15": { alt: "Eli's case — before ceramic veneer treatment — AM Estética Dental", tratamiento: "Ceramic Veneers", descripcion: "Eli's case — Before" },
  "caso-16": { alt: "Eli's case — after ceramic veneer treatment — AM Estética Dental", tratamiento: "Ceramic Veneers", descripcion: "Eli's case — After" },
};
