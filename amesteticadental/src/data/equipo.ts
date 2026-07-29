export type EquipoMiembro = {
  slug: string;
  nombre: string;
  rol: string;
  area: string;
  descripcion: string;
  imagen: string;
  alt: string;
  rolEn: string;
  areaEn: string;
  descripcionEn: string;
  altEn: string;
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
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870264/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg",
    alt: "Dr. Ariel Merino, director clinico y odontologo estetico de AM Estetica Dental en Puerto Madero",
    rolEn: "Clinical Director",
    areaEn: "Cosmetic Dentistry",
    descripcionEn:
      "Clinical director of AM Estética Dental. Leads case planning for cosmetic dentistry, veneers, digital smile design and aesthetic rehabilitation.",
    altEn: "Dr. Ariel Merino, clinical director and cosmetic dentist at AM Estética Dental in Puerto Madero",
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
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870265/equipo-am/dra-candela-cruz-armonizacion-orofacial-estetica-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Candela Cruz, odontologa de armonizacion orofacial y estetica dental en AM Estetica Dental Puerto Madero",
    rolEn: "Orofacial Harmonization",
    areaEn: "Facial & Dental Aesthetics",
    descripcionEn:
      "Dentist in the facial aesthetics area: orofacial harmonization and complementary cosmetic dentistry procedures.",
    altEn: "Dr. Candela Cruz, orofacial harmonization and cosmetic dentistry at AM Estética Dental Puerto Madero",
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
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870267/equipo-am/dra-luz-ferron-ortodoncia-alineadores-invisibles-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Luz Ferron, odontologa de ortodoncia y alineadores invisibles en AM Estetica Dental Puerto Madero",
    rolEn: "Orthodontics & Aligners",
    areaEn: "Invisible Aligners",
    descripcionEn:
      "Dentist in the orthodontics area: general dentistry and invisible aligners within AM's digital workflow.",
    altEn: "Dr. Luz Ferron, orthodontics and invisible aligners at AM Estética Dental Puerto Madero",
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
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870266/equipo-am/dra-emily-lugo-estetica-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Emily Lugo, odontologa de estetica dental de AM Estetica Dental en Puerto Madero",
    rolEn: "Cosmetic Dentist",
    areaEn: "Cosmetic Dentistry",
    descripcionEn:
      "Dentist specialized in cosmetic dentistry. Focused on porcelain veneers, ultra-thin veneers and high-end restorations with a natural approach.",
    altEn: "Dr. Emily Lugo, cosmetic dentist at AM Estética Dental in Puerto Madero",
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
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870268/equipo-am/julian-batista-laboratorio-dental-diseno-3d-am-estetica-dental-puerto-madero.jpg",
    alt: "Julian Batista, laboratorio dental y diseno 3D dental en AM Estetica Dental Puerto Madero",
    rolEn: "Digital Dental Laboratory",
    areaEn: "3D Dental Design",
    descripcionEn:
      "Part of the in-house digital dental laboratory, focused on 3D dental design and technical support for digitally planned treatments.",
    altEn: "Julian Batista, dental laboratory and 3D dental design at AM Estética Dental Puerto Madero",
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
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870268/equipo-am/georgi-veglio-laboratorio-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Georgi Veglio, laboratorio dental de AM Estetica Dental en Puerto Madero",
    rolEn: "Dental Laboratory",
    areaEn: "Technical Support",
    descripcionEn:
      "Member of the dental laboratory team, key to sustaining the technical precision of aesthetic treatments.",
    altEn: "Georgi Veglio, dental laboratory at AM Estética Dental in Puerto Madero",
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
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870269/equipo-am/micaela-di-leva-asistente-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Micaela Di Leva, asistente dental de AM Estetica Dental en Puerto Madero",
    rolEn: "Dental Assistant",
    areaEn: "Clinical Assistance",
    descripcionEn:
      "Dental assistant on the clinical team. Supports preparation, organization and patient care during treatment.",
    altEn: "Micaela Di Leva, dental assistant at AM Estética Dental in Puerto Madero",
    schemaType: "Person",
    keywords: ["asistente dental", "asistencia clinica", "equipo odontologico"],
  },
  {
    slug: "caterina",
    nombre: "Caterina",
    rol: "Asistente dental",
    area: "Asistencia clinica",
    descripcion:
      "Asistente dental del equipo AM. Brinda soporte clinico de alta gama, asistiendo en los procedimientos esteticos y asegurando el maximo confort del paciente.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870263/equipo-am/caterina-asistente-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Caterina, asistente dental de AM Estetica Dental en Puerto Madero",
    rolEn: "Dental Assistant",
    areaEn: "Clinical Assistance",
    descripcionEn:
      "Dental assistant on the AM team. Provides high-end clinical support, assisting in aesthetic procedures and ensuring maximum patient comfort.",
    altEn: "Caterina, dental assistant at AM Estética Dental in Puerto Madero",
    schemaType: "Person",
    keywords: ["asistente dental", "equipo AM", "AM Estetica Dental"],
  },
  {
    slug: "claudia-hernandez",
    nombre: "Dra. Claudia Hernandez",
    rol: "Odontologa y Coordinacion",
    area: "Odontologia y Gestion",
    descripcion:
      "Odontologa encargada de la direccion del consultorio, administracion y logistica de AM Estetica Dental.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870264/equipo-am/claudia-hernandez-administracion-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Claudia Hernandez, odontologa y coordinacion de AM Estetica Dental en Puerto Madero",
    rolEn: "Dentist & Coordination",
    areaEn: "Dentistry & Management",
    descripcionEn:
      "Dentist in charge of practice direction, administration and logistics at AM Estética Dental.",
    altEn: "Dr. Claudia Hernandez, dentist and coordination at AM Estética Dental in Puerto Madero",
    schemaType: "Dentist",
    keywords: ["odontologa", "coordinacion clinica", "gestion operativa", "AM Estetica Dental"],
  },
  {
    slug: "romina-lima",
    nombre: "Romina Lima",
    rol: "Atencion a pacientes",
    area: "Fidelizacion",
    descripcion:
      "Atencion, seguimiento y fidelizacion de pacientes. Acompana la continuidad de la experiencia AM antes y despues de la consulta.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870270/equipo-am/romina-lima-atencion-fidelizacion-pacientes-am-estetica-dental-puerto-madero.jpg",
    alt: "Romina Lima, atencion y fidelizacion de pacientes en AM Estetica Dental Puerto Madero",
    rolEn: "Patient Care",
    areaEn: "Patient Experience",
    descripcionEn:
      "Patient care, follow-up and loyalty. Accompanies the continuity of the AM experience before and after each visit.",
    altEn: "Romina Lima, patient care and experience at AM Estética Dental Puerto Madero",
    schemaType: "Person",
    keywords: ["atencion a pacientes", "fidelizacion", "experiencia del paciente"],
  },
];

export const equipoClinico = equipoAM.filter((miembro) => miembro.schemaType === "Dentist");

