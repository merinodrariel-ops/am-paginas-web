export type EquipoMiembro = {
  slug: string;
  nombre: string;
  rol: string;
  area: string;
  descripcion: string;
  imagen: string;
  alt: string;
  schemaType: "Person" | "Dentist";
  keywords: string[];
};

export const equipoAM: EquipoMiembro[] = [
  {
    slug: "dr-ariel-merino",
    nombre: "Dr. Ariel Merino",
    rol: "Director clinico",
    area: "Odontologia estetica",
    descripcion:
      "Director clinico de AM Estetica Dental. Lidera la planificacion de casos de estetica dental, carillas, diseno de sonrisa digital y rehabilitacion estetica.",
    imagen:
      "/images/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg",
    alt: "Dr. Ariel Merino, director clinico y odontologo estetico de AM Estetica Dental en Puerto Madero",
    schemaType: "Dentist",
    keywords: ["odontologo estetico", "director clinico", "carillas dentales", "diseno de sonrisa"],
  },
  {
    slug: "dra-candela-cruz",
    nombre: "Dra. Candela Cruz",
    rol: "Armonizacion orofacial",
    area: "Estetica facial y dental",
    descripcion:
      "Odontologa del area de estetica facial, armonizacion orofacial y procedimientos complementarios de estetica dental.",
    imagen:
      "/images/equipo-am/dra-candela-cruz-armonizacion-orofacial-estetica-dental-am-estetica-dental-puerto-madero.jpeg",
    alt: "Dra. Candela Cruz, odontologa de armonizacion orofacial y estetica dental en AM Estetica Dental Puerto Madero",
    schemaType: "Dentist",
    keywords: ["armonizacion orofacial", "estetica facial", "odontologa", "estetica dental"],
  },
  {
    slug: "dra-luz-ferron",
    nombre: "Dra. Luz Ferron",
    rol: "Ortodoncia y alineadores",
    area: "Alineadores invisibles",
    descripcion:
      "Odontologa del area de ortodoncia, odontologia general y alineadores invisibles dentro del flujo digital de AM.",
    imagen:
      "/images/equipo-am/dra-luz-ferron-ortodoncia-alineadores-invisibles-am-estetica-dental-puerto-madero.jpeg",
    alt: "Dra. Luz Ferron, odontologa de ortodoncia y alineadores invisibles en AM Estetica Dental Puerto Madero",
    schemaType: "Dentist",
    keywords: ["ortodoncia", "alineadores invisibles", "odontologa", "AM Aligners"],
  },
  {
    slug: "dra-emily-lugo",
    nombre: "Dra. Emily Lugo",
    rol: "Odontologa estetica",
    area: "Estetica dental",
    descripcion:
      "Odontologa especialista en estetica dental. Se enfoca en carillas de porcelana, lentes de contacto dental y restauraciones de alta gama con un criterio natural.",
    imagen:
      "/images/equipo-am/dra-emily-lugo-estetica-dental-am-estetica-dental-puerto-madero.jpeg",
    alt: "Dra. Emily Lugo, odontologa de estetica dental de AM Estetica Dental en Puerto Madero",
    schemaType: "Dentist",
    keywords: ["odontologa", "estetica dental", "carillas dentales", "lentes de contacto dental"],
  },
  {
    slug: "julian-batista",
    nombre: "Julian Batista",
    rol: "Laboratorio dental digital",
    area: "Diseno 3D dental",
    descripcion:
      "Parte del laboratorio dental digital, con foco en diseno 3D dental y soporte tecnico para tratamientos planificados digitalmente.",
    imagen:
      "/images/equipo-am/julian-batista-laboratorio-dental-diseno-3d-am-estetica-dental-puerto-madero.jpeg",
    alt: "Julian Batista, laboratorio dental y diseno 3D dental en AM Estetica Dental Puerto Madero",
    schemaType: "Person",
    keywords: ["laboratorio dental", "diseno 3D dental", "flujo digital"],
  },
  {
    slug: "georgi-veglio",
    nombre: "Georgi Veglio",
    rol: "Laboratorio dental",
    area: "Soporte tecnico",
    descripcion:
      "Integra el area de laboratorio dental, clave para sostener la precision tecnica de los tratamientos esteticos.",
    imagen:
      "/images/equipo-am/georgi-veglio-laboratorio-dental-am-estetica-dental-puerto-madero.jpeg",
    alt: "Georgi Veglio, laboratorio dental de AM Estetica Dental en Puerto Madero",
    schemaType: "Person",
    keywords: ["laboratorio dental", "soporte tecnico", "AM Estetica Dental"],
  },
  {
    slug: "micaela-di-leva",
    nombre: "Micaela Di Leva",
    rol: "Asistente dental",
    area: "Asistencia clinica",
    descripcion:
      "Asistente dental del equipo clinico. Acompana la preparacion, organizacion y soporte durante la atencion de pacientes.",
    imagen:
      "/images/equipo-am/micaela-di-leva-asistente-dental-am-estetica-dental-puerto-madero.jpeg",
    alt: "Micaela Di Leva, asistente dental de AM Estetica Dental en Puerto Madero",
    schemaType: "Person",
    keywords: ["asistente dental", "asistencia clinica", "equipo odontologico"],
  },
  {
    slug: "caterina",
    nombre: "Caterina",
    rol: "Asistente dental",
    area: "Asistencia clinica",
    descripcion:
      "Asistente dental del equipo AM. Su perfil publico se mantiene simple hasta completar la carga interna de datos.",
    imagen:
      "/images/equipo-am/caterina-asistente-dental-am-estetica-dental-puerto-madero.jpeg",
    alt: "Caterina, asistente dental de AM Estetica Dental en Puerto Madero",
    schemaType: "Person",
    keywords: ["asistente dental", "equipo AM", "AM Estetica Dental"],
  },
  {
    slug: "claudia-hernandez",
    nombre: "Claudia Hernandez",
    rol: "Administracion",
    area: "Coordinacion operativa",
    descripcion:
      "Administracion y coordinacion operativa de AM Estetica Dental. Ordena procesos internos que impactan en la experiencia del paciente.",
    imagen:
      "/images/equipo-am/claudia-hernandez-administracion-am-estetica-dental-puerto-madero.jpeg",
    alt: "Claudia Hernandez, administracion de AM Estetica Dental en Puerto Madero",
    schemaType: "Person",
    keywords: ["administracion", "coordinacion operativa", "atencion odontologica"],
  },
  {
    slug: "romina-lima",
    nombre: "Romina Lima",
    rol: "Atencion a pacientes",
    area: "Fidelizacion",
    descripcion:
      "Atencion, seguimiento y fidelizacion de pacientes. Acompana la continuidad de la experiencia AM antes y despues de la consulta.",
    imagen:
      "/images/equipo-am/romina-lima-atencion-fidelizacion-pacientes-am-estetica-dental-puerto-madero.jpeg",
    alt: "Romina Lima, atencion y fidelizacion de pacientes en AM Estetica Dental Puerto Madero",
    schemaType: "Person",
    keywords: ["atencion a pacientes", "fidelizacion", "experiencia del paciente"],
  },
];

export const equipoClinico = equipoAM.filter((miembro) => miembro.schemaType === "Dentist");

