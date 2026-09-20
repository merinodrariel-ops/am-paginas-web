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
  /**
   * Retrato en Cloudinary. Es opcional porque un profesional puede empezar a
   * atender antes de que su foto esté producida: sin `imagen`, la ficha se
   * dibuja con el monograma de `RetratoMiembro` en vez de una imagen rota, y el
   * schema simplemente no declara `image`. Es preferible publicar el currículum
   * verificable de alguien que ya está en el equipo a esconderlo esperando una
   * sesión de fotos.
   */
  imagen?: string;
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
   * Matrícula provincial (p. ej. "MP 91.374"), cuando el profesional también
   * está matriculado en una provincia además de la Nación. Misma regla que
   * `matricula`: sólo si está confirmada.
   */
  matriculaProvincial?: string;
  /**
   * Si el profesional toma pacientes. Por defecto sí; se pone en `false` para
   * quien está en el área clínica por su título pero hoy no atiende —la
   * dirección del consultorio, por ejemplo—. Sirve para no ofrecer un botón de
   * "consultar caso" que abre un WhatsApp pidiendo turno con alguien que no da
   * turnos: el paciente escribe, nadie puede atenderlo, y la primera impresión
   * de la clínica es una respuesta que corrige.
   */
  atiendePacientes?: boolean;
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
    slug: "dr-augusto-druck",
    nombre: "Dr. Augusto Druck",
    rol: "Cirugía e implantología",
    area: "Implantes y arcos completos",
    descripcion:
      "Odontólogo especialista en Prótesis Dentobucomaxilar (UBA). Resuelve la cirugía de implantes y la rehabilitación de arcos completos: full arch, carga inmediata y prótesis fija sobre implantes, con planificación digital y cirugía guiada.",
    alt: "Dr. Augusto Druck, cirujano e implantólogo (MN 31.471) de AM Estética Dental en Puerto Madero",
    rolEn: "Surgery & Implantology",
    areaEn: "Implants & Full Arch",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1789937765/equipo-am/dr-augusto-druck-cirugia-e-implantologia-am-estetica-dental-puerto-madero.jpg",
    descripcionEn:
      "Dentist specialized in Maxillofacial Prosthodontics (University of Buenos Aires). He handles implant surgery and full-arch rehabilitation: full arch, immediate loading and fixed implant-supported prosthetics, with digital planning and guided surgery.",
    altEn: "Dr. Augusto Druck, implant surgeon (license MN 31.471) at AM Estética Dental in Puerto Madero",
    schemaType: "Dentist",
    keywords: [
      "implantes dentales",
      "full arch",
      "all on x",
      "cirugía de implantes",
      "carga inmediata",
      "rehabilitación oral",
      "prótesis sobre implantes",
    ],
    matricula: "MN 31.471",
    matriculaProvincial: "MP 91.374",
    cv: {
      titulo: "Odontólogo — Especialista en Prótesis Dentobucomaxilar",
      universidad: "Universidad Nacional de La Plata — Facultad de Odontología (UNLP)",
      perfil:
        "Odontólogo especializado en Prótesis Dentobucomaxilar, implantología oral y rehabilitación de alta complejidad. Dentro de AM resuelve los casos de arcos completos sobre implantes: la parte del tratamiento donde la cirugía y la prótesis tienen que planificarse como una sola cosa, porque de la posición de cada implante depende la sonrisa que después se atornilla encima. Lleva más de 10 años formando odontólogos en implantología.",
      formacion: [
        {
          titulo: "Odontólogo",
          institucion: "Universidad Nacional de La Plata — Facultad de Odontología",
          periodo: "egresado en 2006",
        },
        {
          titulo: "Especialista en Prótesis Dentobucomaxilar",
          institucion: "Universidad de Buenos Aires",
        },
        {
          titulo:
            "Carrera de Especialización en Rehabilitación Protética de Alta Complejidad, orientación en Prótesis Implanto-Asistida y Prótesis Fija",
          institucion: "Universidad de Buenos Aires — Director: Prof. Héctor José Álvarez Cantoni",
        },
        {
          titulo:
            "Formación continua en implantología oral, cirugía implantológica, rehabilitación de arcos completos y odontología digital",
        },
      ],
      docencia: [
        {
          titulo: "Dictante del Curso Anual de Implantología — niveles Iniciación y Avanzado",
          institucion: "Asociación Odontológica Marplatense",
          periodo: "actualidad",
        },
        {
          titulo:
            "Dictante de cursos de Full Arch y rehabilitación de arcos completos sobre implantes: planificación digital, workshops y cirugías demostrativas",
        },
        {
          titulo: "Dictante de cursos de Implantología Oral",
          periodo: "más de 10 años",
        },
      ],
      trayectoria: [
        {
          titulo: "Cirugía de implantes y rehabilitación sobre implantes",
          institucion: "AM Estética Dental — Puerto Madero",
        },
      ],
      areas: [
        "Full Arch / All-on-X",
        "Carga inmediata",
        "Implantología oral avanzada",
        "Rehabilitación de maxilares edéntulos y atróficos",
        "Prótesis fija sobre implantes",
        "Planificación digital y cirugía guiada",
        "Fotogrametría en rehabilitaciones sobre implantes",
      ],
    },
    cvEn: {
      titulo: "Odontólogo (dentist) — Specialist in Maxillofacial Prosthodontics",
      universidad: "National University of La Plata — School of Dentistry (UNLP)",
      perfil:
        "Dentist specialized in Maxillofacial Prosthodontics, oral implantology and high-complexity rehabilitation. At AM he resolves full-arch implant cases: the part of treatment where surgery and prosthetics must be planned as one, because the smile that is later screwed into place depends on where each implant sits. He has been training dentists in implantology for over 10 years.",
      formacion: [
        {
          titulo: "Odontólogo (dentist — Argentine dental degree)",
          institucion: "National University of La Plata — School of Dentistry",
          periodo: "graduated 2006",
        },
        {
          titulo: "Specialist in Maxillofacial Prosthodontics",
          institucion: "University of Buenos Aires",
        },
        {
          titulo:
            "Specialization in High-Complexity Prosthetic Rehabilitation, focused on implant-supported and fixed prosthetics",
          institucion: "University of Buenos Aires — Director: Prof. Héctor José Álvarez Cantoni",
        },
        {
          titulo:
            "Continuing education in oral implantology, implant surgery, full-arch rehabilitation and digital dentistry",
        },
      ],
      docencia: [
        {
          titulo: "Lecturer, Annual Implantology Course — Introductory and Advanced levels",
          institucion: "Asociación Odontológica Marplatense",
          periodo: "present",
        },
        {
          titulo:
            "Lecturer on Full Arch and full-arch implant rehabilitation: digital planning, workshops and live surgeries",
        },
        {
          titulo: "Lecturer on Oral Implantology",
          periodo: "over 10 years",
        },
      ],
      trayectoria: [
        {
          titulo: "Implant surgery and implant-supported rehabilitation",
          institucion: "AM Estética Dental — Puerto Madero",
        },
      ],
      areas: [
        "Full Arch / All-on-X",
        "Immediate loading",
        "Advanced oral implantology",
        "Rehabilitation of edentulous and atrophic jaws",
        "Fixed implant-supported prosthetics",
        "Digital planning and guided surgery",
        "Photogrammetry for implant rehabilitation",
      ],
    },
  },
  {
    slug: "dra-candela-cruz",
    nombre: "Dra. Candela Cruz",
    rol: "Armonización orofacial",
    area: "Estética facial y dental",
    descripcion:
      "Odontóloga con más de 5 años de formación en estética facial. Lleva la armonización orofacial y los tratamientos inyectables, con un criterio de resultados naturales y equilibrados.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870265/equipo-am/dra-candela-cruz-armonizacion-orofacial-estetica-dental-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Candela Cruz, odontóloga de armonización orofacial y estética dental en AM Estética Dental Puerto Madero",
    rolEn: "Orofacial Harmonization",
    areaEn: "Facial & Dental Aesthetics",
    descripcionEn:
      "Dentist with over 5 years of training in facial aesthetics. She leads orofacial harmonization and injectable treatments, with a focus on natural, balanced results.",
    altEn: "Dr. Candela Cruz, orofacial harmonization and cosmetic dentistry at AM Estética Dental Puerto Madero",
    schemaType: "Dentist",
    keywords: ["armonización orofacial", "estética facial", "odontóloga", "estética dental"],
    matricula: "MN 43.010",
    cv: {
      titulo: "Odontóloga",
      universidad: "Universidad Argentina John F. Kennedy",
      perfil:
        "Odontóloga con más de 5 años de formación en estética facial, dedicada a los tratamientos inyectables. Dentro de AM trabaja el diseño de sonrisa junto a la armonización orofacial: la sonrisa se proyecta mirando la cara entera —labios, tercio medio, proporciones— y no un rasgo aislado. El criterio es el mismo en las dos áreas: que el resultado se vea natural y equilibrado.",
      formacion: [
        {
          titulo: "Odontóloga",
          institucion: "Universidad Argentina John F. Kennedy",
        },
        {
          titulo: "Fillers y toxina botulínica",
          institucion: "Dra. Ariana Pedreira",
        },
        {
          titulo: "Full Face",
          institucion: "Ateneo Argentino — Dra. Analía Rojktop",
        },
        {
          titulo: "Armonización facial",
          institucion: "Eugenia Garaventa",
        },
        {
          titulo: "MD Codes",
          institucion: "Natalia Ballestrini",
        },
        {
          titulo: "Bioestimuladores",
          institucion: "Diego Bujanda",
        },
        {
          titulo: "Fillers",
          institucion: "Celeste Nome — Allergan",
        },
        {
          titulo: "Toxina botulínica",
          institucion: "Fernanda Cohen",
        },
        {
          titulo: "Bioestimulación facial",
          institucion: "Andrea Rey",
        },
      ],
      trayectoria: [
        {
          titulo: "Diseño de sonrisa y armonización orofacial",
          institucion: "AM Estética Dental — Puerto Madero",
        },
        {
          titulo: "Armonización facial",
          institucion: "Clínica Dermatológica SP",
        },
        {
          titulo: "Armonización facial",
          institucion: "Clínica Costoya",
        },
      ],
      areas: [
        "Armonización orofacial",
        "Toxina botulínica",
        "Rellenos con ácido hialurónico",
        "MD Codes",
        "Bioestimuladores",
        "Diseño de sonrisa digital",
      ],
    },
    cvEn: {
      titulo: "Odontóloga (dentist — Argentine dental degree)",
      universidad: "Universidad Argentina John F. Kennedy",
      perfil:
        "Dentist with over 5 years of training in facial aesthetics, dedicated to injectable treatments. At AM she works on smile design alongside orofacial harmonization: the smile is planned by looking at the whole face —lips, midface, proportions— rather than a single feature. The criterion is the same in both areas: a result that looks natural and balanced.",
      formacion: [
        {
          titulo: "Odontóloga (dentist — Argentine dental degree)",
          institucion: "Universidad Argentina John F. Kennedy",
        },
        {
          titulo: "Fillers and botulinum toxin",
          institucion: "Dr. Ariana Pedreira",
        },
        {
          titulo: "Full Face",
          institucion: "Ateneo Argentino — Dr. Analía Rojktop",
        },
        {
          titulo: "Facial harmonization",
          institucion: "Eugenia Garaventa",
        },
        {
          titulo: "MD Codes",
          institucion: "Natalia Ballestrini",
        },
        {
          titulo: "Biostimulators",
          institucion: "Diego Bujanda",
        },
        {
          titulo: "Fillers",
          institucion: "Celeste Nome — Allergan",
        },
        {
          titulo: "Botulinum toxin",
          institucion: "Fernanda Cohen",
        },
        {
          titulo: "Facial biostimulation",
          institucion: "Andrea Rey",
        },
      ],
      trayectoria: [
        {
          titulo: "Smile design and orofacial harmonization",
          institucion: "AM Estética Dental — Puerto Madero",
        },
        {
          titulo: "Facial harmonization",
          institucion: "Clínica Dermatológica SP",
        },
        {
          titulo: "Facial harmonization",
          institucion: "Clínica Costoya",
        },
      ],
      areas: [
        "Orofacial harmonization",
        "Botulinum toxin",
        "Hyaluronic acid fillers",
        "MD Codes",
        "Biostimulators",
        "Digital smile design",
      ],
    },
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
    nombre: "Dra. Claudia Hernández",
    rol: "Odontóloga y dirección del consultorio",
    area: "Odontología y gestión",
    descripcion:
      "Odontóloga, y encargada del área administrativa de AM. Dirige la gestión del consultorio y asiste al equipo durante la atención: el título está en el sillón, no sólo en la agenda. Formación clínica en odontología general, endodoncia y asistencia en cirugía e implantología.",
    imagen:
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870264/equipo-am/claudia-hernandez-administracion-am-estetica-dental-puerto-madero.jpg",
    alt: "Dra. Claudia Hernández, odontóloga y dirección del consultorio de AM Estética Dental en Puerto Madero",
    rolEn: "Dentist & Practice Direction",
    areaEn: "Dentistry & Management",
    descripcionEn:
      "A dentist, and the head of AM's administrative area. She runs the practice and assists the team chairside: the degree is in the operatory, not only in the schedule. Clinical training in general dentistry, endodontics and assistance in surgery and implantology.",
    altEn: "Dr. Claudia Hernández, dentist and practice direction at AM Estética Dental in Puerto Madero",
    schemaType: "Dentist",
    keywords: ["odontóloga", "dirección de consultorio", "coordinación clínica", "gestión operativa", "AM Estética Dental"],
    // Es odontóloga y asiste al equipo en el sillón, pero no toma tratamientos a
    // su cargo: por eso su ficha no ofrece el botón de "consultar caso".
    atiendePacientes: false,
    cv: {
      titulo: "Odontóloga",
      universidad: "Universidad José Antonio Páez — Valencia, Venezuela",
      perfil:
        "Odontóloga con experiencia en atención general, restauración sobre implantes y asistencia en tratamientos de alta complejidad: cirugía maxilofacial, implantología, endodoncia y rehabilitación. Dentro de AM lleva el área administrativa y la dirección del consultorio, pero no se bajó del sillón: asiste al equipo durante la atención y resuelve los ajustes y las maniobras mínimas del día a día. Por eso la gestión funciona como funciona —quien armó cajas de implantes sabe qué necesita una agenda que gira alrededor de esos tratamientos.",
      formacion: [
        {
          titulo: "Odontóloga",
          institucion: "Universidad José Antonio Páez — Valencia, Venezuela",
          periodo: "2012 - 2017",
        },
        {
          titulo: "Diplomado en Cirugía Bucal — 150 horas académicas",
          institucion: "Universidad José Antonio Páez — Valencia, Venezuela",
          periodo: "2017 - 2018",
        },
      ],
      trayectoria: [
        {
          titulo: "Dirección, gestión administrativa y coordinación operativa del consultorio",
          institucion: "AM Estética Dental — Puerto Madero",
          periodo: "actualidad",
        },
        {
          titulo: "Asistente dental",
          institucion: "Dental System — Buenos Aires",
          periodo: "marzo 2024 - mayo 2025",
        },
        {
          titulo: "Odontóloga general",
          institucion: "Consultorio Dra. Margarita D'Urbano — Buenos Aires",
          periodo: "2023",
        },
        {
          titulo: "Asistente dental — asistencia en cirugía maxilofacial e implantología",
          institucion: "Consultorio Doctores Klurfan — Buenos Aires",
          periodo: "marzo 2019 - febrero 2024",
        },
        {
          titulo: "Odontóloga general",
          institucion: "Clínica Dental Brackets — Valencia, Venezuela",
          periodo: "noviembre 2017 - mayo 2018",
        },
      ],
      areas: [
        "Odontología general",
        "Asistencia clínica al equipo",
        "Dirección y gestión de consultorio",
        "Coordinación operativa y organización de procesos",
        "Endodoncia",
        "Restauración sobre implantes",
        "Asistencia en cirugía e implantología",
        "Bioseguridad y esterilización de instrumental",
      ],
    },
    cvEn: {
      titulo: "Odontóloga (dentist — Venezuelan dental degree)",
      universidad: "Universidad José Antonio Páez — Valencia, Venezuela",
      perfil:
        "Dentist with experience in general care, implant-supported restoration and assistance in high-complexity treatments: maxillofacial surgery, implantology, endodontics and rehabilitation. At AM she leads the administrative area and runs the practice, but she never left the operatory: she assists the team chairside and handles the small adjustments of the day to day. That is why the management side works the way it does —someone who has assembled implant kits knows what a schedule built around those treatments actually needs.",
      formacion: [
        {
          titulo: "Odontóloga (dentist — Venezuelan dental degree)",
          institucion: "Universidad José Antonio Páez — Valencia, Venezuela",
          periodo: "2012 - 2017",
        },
        {
          titulo: "Diploma in Oral Surgery — 150 academic hours",
          institucion: "Universidad José Antonio Páez — Valencia, Venezuela",
          periodo: "2017 - 2018",
        },
      ],
      trayectoria: [
        {
          titulo: "Practice direction, administration and operational coordination",
          institucion: "AM Estética Dental — Puerto Madero",
          periodo: "present",
        },
        {
          titulo: "Dental assistant",
          institucion: "Dental System — Buenos Aires",
          periodo: "March 2024 - May 2025",
        },
        {
          titulo: "General dentist",
          institucion: "Dr. Margarita D'Urbano's practice — Buenos Aires",
          periodo: "2023",
        },
        {
          titulo: "Dental assistant — assisting in maxillofacial surgery and implantology",
          institucion: "Doctores Klurfan practice — Buenos Aires",
          periodo: "March 2019 - February 2024",
        },
        {
          titulo: "General dentist",
          institucion: "Clínica Dental Brackets — Valencia, Venezuela",
          periodo: "November 2017 - May 2018",
        },
      ],
      areas: [
        "General dentistry",
        "Chairside assistance to the clinical team",
        "Practice direction and management",
        "Operational coordination and process organization",
        "Endodontics",
        "Implant-supported restoration",
        "Assistance in surgery and implantology",
        "Biosafety and instrument sterilization",
      ],
    },
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

