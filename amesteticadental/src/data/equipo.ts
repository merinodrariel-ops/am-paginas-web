/**
 * Una línea del currículum: un título, un cargo docente, un puesto. `institucion`
 * y `periodo` son opcionales porque no todas las líneas los tienen (un curso
 * corto, una habilidad certificada).
 */
export type CvEntrada = {
  titulo: string;
  institucion?: string;
  periodo?: string;
};

/**
 * Currículum de un integrante del equipo.
 *
 * La ficha de la web muestra plegado sólo `titulo` + `universidad` + matrícula:
 * es lo que un paciente necesita para confiar. El resto se despliega con un clic
 * dentro de un `<details>`, que Google indexa igual que el contenido visible —a
 * diferencia de un modal, donde el texto suele quedar fuera del HTML inicial.
 *
 * Regla de carga: sólo va lo que está en el CV firmado por el profesional. Una
 * especialidad "en curso" se escribe *en curso*; en un sitio de salud, inflar un
 * título no es marketing, es un problema.
 */
export type Curriculum = {
  /** Título de grado, tal como figura en el diploma. */
  titulo: string;
  /** Casa de estudios que emitió ese título. Viaja al schema como `alumniOf`. */
  universidad: string;
  /** 1-2 frases en primera persona del plural o neutra, para la ficha desplegada. */
  perfil?: string;
  formacion?: CvEntrada[];
  docencia?: CvEntrada[];
  trayectoria?: CvEntrada[];
  /** Procedimientos y áreas que efectivamente practica. */
  areas?: string[];
  idiomas?: string[];
};

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
  /**
   * Matrícula nacional (p. ej. "MN 34.869"). Se muestra en la ficha y viaja en el
   * schema como `identifier`. Es una señal de E-E-A-T fuerte para contenido médico
   * —la competencia mejor rankeada de CABA la publica en cada integrante— y además
   * es verificable.
   *
   * SÓLO cargar matrículas confirmadas. Un número inventado o mal tipeado en un
   * sitio de salud es un problema real, no un detalle de SEO: dejar el campo
   * vacío es siempre preferible a completarlo "a ojo".
   */
  matricula?: string;
  /**
   * Currículum completo. Opcional a propósito: se va cargando integrante por
   * integrante a medida que cada uno entrega su CV. Sin `cv`, la ficha se
   * renderiza como siempre.
   */
  cv?: Curriculum;
  cvEn?: Curriculum;
};

export const equipoAM: EquipoMiembro[] = [
  {
    slug: "dr-ariel-merino",
    nombre: "Dr. Ariel Merino",
    rol: "Director clínico",
    area: "Odontología estética",
    descripcion:
      "Director clínico de AM Estética Dental. Lidera la planificación de casos de estética dental, carillas, diseño de sonrisa digital y rehabilitación estética.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870264/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg",
    alt: "Dr. Ariel Merino, director clínico y odontólogo estético de AM Estética Dental en Puerto Madero",
    rolEn: "Clinical Director",
    areaEn: "Cosmetic Dentistry",
    descripcionEn:
      "Clinical director of AM Estética Dental. Leads case planning for cosmetic dentistry, veneers, digital smile design and aesthetic rehabilitation.",
    altEn: "Dr. Ariel Merino, clinical director and cosmetic dentist at AM Estética Dental in Puerto Madero",
    schemaType: "Dentist",
    keywords: ["odontólogo estético", "director clínico", "carillas dentales", "diseño de sonrisa"],
    matricula: "MN 34.869",
  },
  {
    slug: "dra-candela-cruz",
    nombre: "Dra. Candela Cruz",
    rol: "Armonización orofacial",
    area: "Estética facial y dental",
    descripcion:
      "Odontóloga del area de estética facial, armonización orofacial y procedimientos complementarios de estética dental.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870265/equipo-am/dra-candela-cruz-armonizacion-orofacial-estetica-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Candela Cruz, odontóloga de armonización orofacial y estética dental en AM Estética Dental Puerto Madero",
    rolEn: "Orofacial Harmonization",
    areaEn: "Facial & Dental Aesthetics",
    descripcionEn:
      "Dentist in the facial aesthetics area: orofacial harmonization and complementary cosmetic dentistry procedures.",
    altEn: "Dr. Candela Cruz, orofacial harmonization and cosmetic dentistry at AM Estética Dental Puerto Madero",
    schemaType: "Dentist",
    keywords: ["armonización orofacial", "estética facial", "odontóloga", "estética dental"],
    matricula: "MN 43.010",
  },
  {
    slug: "dra-luz-ferron",
    nombre: "Dra. Luz Ferron",
    rol: "Ortodoncia y alineadores",
    area: "Alineadores invisibles",
    descripcion:
      "Odontóloga del area de ortodoncia, odontología general y alineadores invisibles dentro del flujo digital de AM.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870267/equipo-am/dra-luz-ferron-ortodoncia-alineadores-invisibles-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Luz Ferron, odontóloga de ortodoncia y alineadores invisibles en AM Estética Dental Puerto Madero",
    rolEn: "Orthodontics & Aligners",
    areaEn: "Invisible Aligners",
    descripcionEn:
      "Dentist in the orthodontics area: general dentistry and invisible aligners within AM's digital workflow.",
    altEn: "Dr. Luz Ferron, orthodontics and invisible aligners at AM Estética Dental Puerto Madero",
    schemaType: "Dentist",
    keywords: ["ortodoncia", "alineadores invisibles", "odontóloga", "AM Aligners"],
  },
  {
    slug: "dra-emily-lugo",
    nombre: "Dra. Emily Lugo",
    rol: "Odontóloga estética",
    area: "Estética dental",
    descripcion:
      "Odontóloga especialista en estética dental. Se enfoca en carillas de porcelana, lentes de contacto dental y restauraciones de alta gama con un criterio natural.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870266/equipo-am/dra-emily-lugo-estetica-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Emily Lugo, odontóloga de estética dental de AM Estética Dental en Puerto Madero",
    rolEn: "Cosmetic Dentist",
    areaEn: "Cosmetic Dentistry",
    descripcionEn:
      "Dentist specialized in cosmetic dentistry. Focused on porcelain veneers, ultra-thin veneers and high-end restorations with a natural approach.",
    altEn: "Dr. Emily Lugo, cosmetic dentist at AM Estética Dental in Puerto Madero",
    schemaType: "Dentist",
    keywords: ["odontóloga", "estética dental", "carillas dentales", "lentes de contacto dental"],
  },
  {
    slug: "dr-juan-pablo-vivas",
    nombre: "Dr. Juan Pablo Vivas",
    rol: "Endodoncia y odontología integral",
    area: "Endodoncia",
    descripcion:
      "Odontólogo egresado de la UBA, a cargo de endodoncia y terapias de pulpa vital. Ayudante de cátedra de Endodoncia en la Facultad de Odontología de la UBA y cursando la especialidad.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1789515499/equipo-am/dr-juan-pablo-vivas-endodoncia-y-odontologia-integral-am-estetica-dental-puerto-madero.jpg",
    alt: "Dr. Juan Pablo Vivas, odontólogo de endodoncia (MN 44.961) en AM Estética Dental Puerto Madero",
    rolEn: "Endodontics & General Dentistry",
    areaEn: "Endodontics",
    descripcionEn:
      "Dentist trained at the University of Buenos Aires, in charge of endodontics and vital pulp therapy. Teaching assistant in Endodontics at UBA's School of Dentistry and currently completing the specialty.",
    altEn: "Dr. Juan Pablo Vivas, endodontics (license MN 44.961) at AM Estética Dental Puerto Madero",
    schemaType: "Dentist",
    keywords: [
      "endodoncia",
      "tratamiento de conducto",
      "terapia de pulpa vital",
      "odontólogo",
      "AM Estética Dental",
    ],
    matricula: "MN 44.961",
    cv: {
      titulo: "Odontólogo",
      universidad: "Universidad de Buenos Aires — Facultad de Odontología (FOUBA)",
      perfil:
        "Odontólogo egresado de la UBA, con formación clínica orientada a la atención integral y preventiva. Dentro de AM lleva los tratamientos de conducto y las terapias de pulpa vital: la parte del caso que sostiene al diente antes de cualquier trabajo estético.",
      formacion: [
        {
          titulo: "Odontólogo",
          institucion: "Universidad de Buenos Aires — Facultad de Odontología",
          periodo: "2019 - 2024",
        },
        {
          titulo: "Especialidad en Endodoncia (en curso)",
          institucion: "Universidad de Buenos Aires",
          periodo: "desde 2025",
        },
        {
          titulo: "Odontología",
          institucion: "Universidad de Carabobo — Valencia, Venezuela",
          periodo: "2015 - 2017",
        },
        {
          titulo: "Curso de encerado analógico",
          institucion: "Caracas, Venezuela",
          periodo: "2022",
        },
      ],
      docencia: [
        {
          titulo: "Ayudante de cátedra de Endodoncia",
          institucion: "Facultad de Odontología, UBA",
          periodo: "2023 - actualidad",
        },
        {
          titulo: "Ayudante de cátedra de Anatomía",
          institucion: "Facultad de Odontología, UBA",
          periodo: "2021 - 2024",
        },
        {
          titulo: "Ayudante de cátedra de Odontología Integral del Adulto Mayor y Prótesis Removible",
          institucion: "Facultad de Odontología, UBA",
          periodo: "2024",
        },
      ],
      trayectoria: [
        {
          titulo: "Odontólogo",
          institucion: "AM Estética Dental — Puerto Madero",
          periodo: "desde junio 2026",
        },
        {
          titulo: "Odontólogo",
          institucion: "Celedent — San Nicolás",
          periodo: "desde agosto 2025",
        },
        {
          titulo: "Odontólogo",
          institucion: "Odontología Di Pietro — Parque Patricios",
          periodo: "2025 - 2026",
        },
        {
          titulo: "Odontólogo",
          institucion: "Scatena Centro Odontológico — Olivos",
          periodo: "2025",
        },
        {
          titulo: "Odontólogo",
          institucion: "Medident — Palermo",
          periodo: "2023 - 2024",
        },
        {
          titulo: "Asistente dental",
          institucion: "Dr. Mauro Vivas, cirujano bucomaxilofacial — Maracay, Venezuela",
          periodo: "2017 - 2019",
        },
      ],
      areas: [
        "Endodoncia y terapias de pulpa vital",
        "Diagnóstico clínico-radiográfico",
        "Restauraciones simples y complejas",
        "Prótesis fija y removible",
        "Exodoncias simples",
      ],
      idiomas: ["Español (nativo)", "Inglés (B2)"],
    },
    cvEn: {
      titulo: "Odontólogo (dentist — Argentine dental degree)",
      universidad: "University of Buenos Aires — School of Dentistry (FOUBA)",
      perfil:
        "Dentist trained at the University of Buenos Aires, with a clinical focus on comprehensive and preventive care. At AM he handles root canal treatment and vital pulp therapy: the part of the case that keeps the tooth sound before any aesthetic work begins.",
      formacion: [
        {
          titulo: "Odontólogo (dentist — Argentine dental degree)",
          institucion: "University of Buenos Aires — School of Dentistry",
          periodo: "2019 - 2024",
        },
        {
          titulo: "Specialty in Endodontics (in progress)",
          institucion: "University of Buenos Aires",
          periodo: "since 2025",
        },
        {
          titulo: "Dentistry",
          institucion: "University of Carabobo — Valencia, Venezuela",
          periodo: "2015 - 2017",
        },
        {
          titulo: "Analog wax-up course",
          institucion: "Caracas, Venezuela",
          periodo: "2022",
        },
      ],
      docencia: [
        {
          titulo: "Teaching assistant, Endodontics",
          institucion: "School of Dentistry, University of Buenos Aires",
          periodo: "2023 - present",
        },
        {
          titulo: "Teaching assistant, Anatomy",
          institucion: "School of Dentistry, University of Buenos Aires",
          periodo: "2021 - 2024",
        },
        {
          titulo: "Teaching assistant, Comprehensive Geriatric Dentistry and Removable Prosthodontics",
          institucion: "School of Dentistry, University of Buenos Aires",
          periodo: "2024",
        },
      ],
      trayectoria: [
        {
          titulo: "Dentist",
          institucion: "AM Estética Dental — Puerto Madero",
          periodo: "since June 2026",
        },
        {
          titulo: "Dentist",
          institucion: "Celedent — San Nicolás",
          periodo: "since August 2025",
        },
        {
          titulo: "Dentist",
          institucion: "Odontología Di Pietro — Parque Patricios",
          periodo: "2025 - 2026",
        },
        {
          titulo: "Dentist",
          institucion: "Scatena Centro Odontológico — Olivos",
          periodo: "2025",
        },
        {
          titulo: "Dentist",
          institucion: "Medident — Palermo",
          periodo: "2023 - 2024",
        },
        {
          titulo: "Dental assistant",
          institucion: "Dr. Mauro Vivas, oral and maxillofacial surgeon — Maracay, Venezuela",
          periodo: "2017 - 2019",
        },
      ],
      areas: [
        "Endodontics and vital pulp therapy",
        "Clinical and radiographic diagnosis",
        "Simple and complex restorations",
        "Fixed and removable prosthodontics",
        "Simple extractions",
      ],
      idiomas: ["Spanish (native)", "English (B2)"],
    },
  },
  {
    slug: "julian-batista",
    nombre: "Julian Batista",
    rol: "Laboratorio dental digital",
    area: "Diseño 3D dental",
    descripcion:
      "Parte del laboratorio dental digital, con foco en diseño 3D dental y soporte técnico para tratamientos planificados digitalmente.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870268/equipo-am/julian-batista-laboratorio-dental-diseno-3d-am-estetica-dental-puerto-madero.jpg",
    alt: "Julian Batista, laboratorio dental y diseño 3D dental en AM Estética Dental Puerto Madero",
    rolEn: "Digital Dental Laboratory",
    areaEn: "3D Dental Design",
    descripcionEn:
      "Part of the in-house digital dental laboratory, focused on 3D dental design and technical support for digitally planned treatments.",
    altEn: "Julian Batista, dental laboratory and 3D dental design at AM Estética Dental Puerto Madero",
    schemaType: "Person",
    keywords: ["laboratorio dental", "diseño 3D dental", "flujo digital"],
  },
  {
    slug: "georgi-veglio",
    nombre: "Georgi Veglio",
    rol: "Laboratorio dental",
    area: "Soporte técnico",
    descripcion:
      "Integra el area de laboratorio dental, clave para sostener la precisión técnica de los tratamientos estéticos.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870268/equipo-am/georgi-veglio-laboratorio-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Georgi Veglio, laboratorio dental de AM Estética Dental en Puerto Madero",
    rolEn: "Dental Laboratory",
    areaEn: "Technical Support",
    descripcionEn:
      "Member of the dental laboratory team, key to sustaining the technical precisión of aesthetic treatments.",
    altEn: "Georgi Veglio, dental laboratory at AM Estética Dental in Puerto Madero",
    schemaType: "Person",
    keywords: ["laboratorio dental", "soporte técnico", "AM Estética Dental"],
  },
  {
    slug: "micaela-di-leva",
    nombre: "Micaela Di Leva",
    rol: "Asistente dental",
    area: "Asistencia clínica",
    descripcion:
      "Asistente dental del equipo clínico. Acompaña la preparación, organización y soporte durante la atención de pacientes.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870269/equipo-am/micaela-di-leva-asistente-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Micaela Di Leva, asistente dental de AM Estética Dental en Puerto Madero",
    rolEn: "Dental Assistant",
    areaEn: "Clinical Assistance",
    descripcionEn:
      "Dental assistant on the clinical team. Supports preparation, organization and patient care during treatment.",
    altEn: "Micaela Di Leva, dental assistant at AM Estética Dental in Puerto Madero",
    schemaType: "Person",
    keywords: ["asistente dental", "asistencia clínica", "equipo odontológico"],
  },
  {
    slug: "caterina",
    nombre: "Caterina",
    rol: "Asistente dental",
    area: "Asistencia clínica",
    descripcion:
      "Asistente dental del equipo AM. Brinda soporte clínico de alta gama, asistiendo en los procedimientos estéticos y asegurando el máximo confort del paciente.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870263/equipo-am/caterina-asistente-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Caterina, asistente dental de AM Estética Dental en Puerto Madero",
    rolEn: "Dental Assistant",
    areaEn: "Clinical Assistance",
    descripcionEn:
      "Dental assistant on the AM team. Provides high-end clinical support, assisting in aesthetic procedures and ensuring maximum patient comfort.",
    altEn: "Caterina, dental assistant at AM Estética Dental in Puerto Madero",
    schemaType: "Person",
    keywords: ["asistente dental", "equipo AM", "AM Estética Dental"],
  },
  {
    slug: "claudia-hernandez",
    nombre: "Dra. Claudia Hernandez",
    rol: "Odontóloga y Coordinación",
    area: "Odontología y Gestión",
    descripcion:
      "Odontóloga encargada de la dirección del consultorio, administración y logística de AM Estética Dental.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870264/equipo-am/claudia-hernandez-administracion-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Claudia Hernandez, odontóloga y coordinación de AM Estética Dental en Puerto Madero",
    rolEn: "Dentist & Coordination",
    areaEn: "Dentistry & Management",
    descripcionEn:
      "Dentist in charge of practice direction, administration and logistics at AM Estética Dental.",
    altEn: "Dr. Claudia Hernandez, dentist and coordination at AM Estética Dental in Puerto Madero",
    schemaType: "Dentist",
    keywords: ["odontóloga", "coordinación clínica", "gestión operativa", "AM Estética Dental"],
  },
  {
    slug: "romina-lima",
    nombre: "Romina Lima",
    rol: "Atención a pacientes",
    area: "Fidelización",
    descripcion:
      "Atención, seguimiento y fidelización de pacientes. Acompaña la continuidad de la experiencia AM antes y después de la consulta.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870270/equipo-am/romina-lima-atencion-fidelizacion-pacientes-am-estetica-dental-puerto-madero.jpg",
    alt: "Romina Lima, atención y fidelización de pacientes en AM Estética Dental Puerto Madero",
    rolEn: "Patient Care",
    areaEn: "Patient Experience",
    descripcionEn:
      "Patient care, follow-up and loyalty. Accompanies the continuity of the AM experience before and after each visit.",
    altEn: "Romina Lima, patient care and experience at AM Estética Dental Puerto Madero",
    schemaType: "Person",
    keywords: ["atención a pacientes", "fidelización", "experiencia del paciente"],
  },
];

export const equipoClinico = equipoAM.filter((miembro) => miembro.schemaType === "Dentist");

