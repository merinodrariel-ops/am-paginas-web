// Datos compartidos de arielmerino.com.
//
// Contexto de por qué este sitio creció: hasta 2026-09 arielmerino.com era UNA
// sola página de 526 palabras. La entidad "Ariel Merino" ya está reconocida por
// Google (knowledge panel + Wikidata Q134287655), pero no tenía dónde aterrizar:
// toda la autoridad de la persona se derramaba sobre amesteticadental.com o sobre
// perfiles de terceros. Este dominio es el ancla del @id de la Persona; el resto
// de la red (AM AR, AM UY, The Dental Review) apunta acá.
//
// REGLA: acá sólo entran datos verificables. Cada nota de prensa lleva su URL,
// cada credencial es chequeable contra una fuente pública. Es un perfil médico:
// una credencial inflada no es marketing agresivo, es un problema.

export const SITE = "https://www.arielmerino.com";
export const PERSON_ID = `${SITE}/#person`;

export const WA = (mensaje: string) =>
  `https://api.whatsapp.com/send?phone=5491170219298&text=${encodeURIComponent(mensaje)}`;

export const MATRICULA = "MN 34.869";

/**
 * Año del título de grado (Odontología, Universidad Católica de La Plata) y años
 * de ejercicio derivados. Se calcula en vez de escribirse a mano: el sitio de la
 * clínica venía mezclando "+20 años" y "+15 años" según la página justamente por
 * tener el número hardcodeado en veinte lugares. Espejo de
 * `amesteticadental/src/lib/trayectoria.ts` — son dos apps Next separadas y no
 * comparten módulos, así que si cambia una hay que cambiar la otra.
 */
export const ANIO_TITULO = 2010;
export const ANIOS_TRAYECTORIA = new Date().getFullYear() - ANIO_TITULO;

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/trayectoria", label: "Trayectoria" },
  { href: "/carillas-de-porcelana", label: "Carillas" },
  { href: "/prensa", label: "Prensa" },
  { href: "/contacto", label: "Contacto" },
];

// ---------------------------------------------------------------------------
// Credenciales — todas contrastables contra fuentes públicas.
// ---------------------------------------------------------------------------
export const FORMACION = [
  {
    titulo: "Odontología — Universidad Católica de La Plata",
    año: "2010",
    detalle: "Título de grado en Odontología por la UCALP.",
  },
  {
    titulo: "Posgrado en Rehabilitación Oral y Estética — AOA",
    año: "",
    detalle:
      "Posgrado en la Asociación Odontológica Argentina, la entidad de referencia del país en formación de posgrado odontológico.",
  },
  {
    titulo: "Matrícula Nacional 34.869",
    año: "",
    detalle:
      "Matrícula habilitante, publicada también en sus artículos firmados para La Nación y en su ficha de Expodent Buenos Aires.",
  },
];

export const DOCENCIA = [
  {
    titulo: "Ex docente de Operatoria Dental I y II",
    institucion: "Universidad Católica de La Plata",
    detalle:
      "Operatoria dental es la materia donde se enseña a trabajar sobre el diente sin destruirlo: exactamente la base técnica de la odontología mínimamente invasiva.",
  },
  {
    titulo: "Disertante internacional en más de 15 países",
    institucion: "Congresos y formaciones del sector",
    detalle:
      "Formación de odontólogos en diseño de sonrisa digital, carillas de porcelana y estética mínimamente invasiva.",
  },
  {
    titulo: "Disertante — Expodent Buenos Aires",
    institucion: "Expodent",
    detalle: "Una de las exposiciones odontológicas de mayor convocatoria de la Argentina.",
  },
];

// ---------------------------------------------------------------------------
// Prensa — mismos datos que la sección /prensa de amesteticadental.com.
// Todas con URL: son verificables una por una.
// ---------------------------------------------------------------------------
export type Nota = {
  medio: string;
  rol: string;
  titular: string;
  extracto: string;
  href: string;
  año: string;
};

export const PRENSA: Nota[] = [
  {
    medio: "Forbes Argentina",
    rol: "Nota de cobertura",
    titular: "Del 1 al 10, ¿qué tan linda es tu sonrisa? La IA te lo dirá en segundos",
    extracto:
      "Cobertura sobre la incorporación de inteligencia artificial al diseño de sonrisa. AM Estética Dental es la única clínica dental argentina que apareció en las páginas de Forbes.",
    href: "https://www.forbesargentina.com/innovacion/del-1-10-que-tan-linda-tu-sonrisa-ia-te-lo-dira-segundos-n51306",
    año: "2024",
  },
  {
    medio: "La Nación",
    rol: "Columna firmada",
    titular: "La revolución de la robótica en la odontología ya es una realidad",
    extracto:
      "Artículo de autor firmado como Dr. Ariel Merino (M.N. 34.869) en el diario de referencia de la Argentina.",
    href: "https://www.lanacion.com.ar/salud/la-revolucion-de-la-robotica-en-la-odontologia-ya-es-una-realidad-nid10032025/",
    año: "2025",
  },
  {
    medio: "Ámbito",
    rol: "Columna firmada",
    titular: "¿Por qué la Argentina es una parada obligada a la hora de rediseñar la sonrisa?",
    extracto: "Columna de opinión firmada para el diario económico de mayor tirada del país.",
    href: "https://www.ambito.com/lifestyle/por-que-la-argentina-es-una-parada-obligada-la-hora-redisenar-la-sonrisa-n6021134",
    año: "2024",
  },
  {
    medio: "La Nación",
    rol: "Experto consultado",
    titular: "Contra el bruxismo: cinco ejercicios sencillos para calmar este mecanismo inconsciente",
    extracto: "Especialista de referencia consultado por La Nación para el abordaje clínico del bruxismo.",
    href: "https://www.lanacion.com.ar/salud/contra-el-bruxismo-cinco-ejercicios-sencillos-para-calmar-este-mecanismo-inconsciente-nid30092025/",
    año: "2025",
  },
  {
    medio: "Infobae",
    rol: "Experto consultado",
    titular: "Científicos desarrollan una pasta dentífrica para reparar los dientes",
    extracto: "Fuente especializada para el medio de mayor audiencia digital de la Argentina.",
    href: "https://www.infobae.com/salud/ciencia/2025/08/14/cientificos-desarrollan-una-pasta-dentifrica-hecha-con-cabellos-que-podria-ser-una-opcion-para-reparar-los-dientes/",
    año: "2025",
  },
  {
    medio: "Somos Ohlalá",
    rol: "Experto consultado",
    titular: "10 consejos para cuidar la salud bucal y vivir más años, según un experto",
    extracto: "\"Experto consultado: Dr. Ariel Merino, odontólogo, experto en estética dental.\"",
    href: "https://www.somosohlala.com/lifestyle/salud/10-consejos-para-cuidar-la-salud-bucal-y-vivir-mas-anos-segun-un-experto-nid09012026",
    año: "2026",
  },
];

// ---------------------------------------------------------------------------
// Person schema. Este objeto es el ancla de la entidad para toda la red AM:
// amesteticadental.com y .uy referencian este mismo @id en su `founder`.
// ---------------------------------------------------------------------------
export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Dr. Ariel Merino",
  givenName: "Ariel",
  familyName: "Merino",
  jobTitle: "Odontólogo Especialista en Estética Dental",
  description:
    `Odontólogo argentino recibido en ${ANIO_TITULO} por la Universidad Católica de La Plata, con ${ANIOS_TRAYECTORIA} años de ejercicio dedicados casi exclusivamente a la estética dental, las carillas de porcelana y el diseño de sonrisa digital. Fundador y director de AM Estética Dental, en Puerto Madero, Buenos Aires. Docente y disertante internacional en más de 15 países.`,
  url: SITE,
  image: [
    "https://res.cloudinary.com/drctvgyqd/image/upload/w_1200,h_1200,c_fill,g_face,q_auto,f_auto/equipo/dr-ariel-merino-director-clinico-am-estetica-dental-puerto-madero",
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Matrícula Nacional",
    value: MATRICULA,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Católica de La Plata",
    sameAs: "https://www.ucalp.edu.ar/",
  },
  worksFor: {
    "@type": "Dentist",
    "@id": "https://www.amesteticadental.com/#clinic",
    name: "AM Estética Dental",
    url: "https://www.amesteticadental.com",
  },
  affiliation: [
    {
      "@type": "Dentist",
      "@id": "https://www.amesteticadental.com/#clinic",
      name: "AM Estética Dental",
      url: "https://www.amesteticadental.com",
    },
    {
      "@type": "Dentist",
      "@id": "https://www.amesteticadental.uy/#clinic",
      name: "AM Estética Dental Uruguay",
      url: "https://www.amesteticadental.uy",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camila O'Gorman 412, Oficina 101",
    addressLocality: "Puerto Madero",
    addressRegion: "Ciudad Autónoma de Buenos Aires",
    postalCode: "C1107DED",
    addressCountry: "AR",
  },
  knowsAbout: [
    "Carillas de porcelana",
    "Diseño de sonrisa digital",
    "Lentes de contacto dental",
    "Odontología estética",
    "Odontología mínimamente invasiva",
    "Rehabilitación oral estética",
    "Bruxismo",
  ],
  knowsLanguage: ["es", "en"],
  sameAs: [
    "https://www.wikidata.org/wiki/Q134287655",
    "https://www.amesteticadental.com/dr-ariel-merino",
    "https://www.amesteticadental.uy/dr-ariel-merino",
    "https://www.thedentalreview.com",
    "https://www.instagram.com/drarielmerino",
    "https://www.tiktok.com/@drarielmerino",
    "https://www.linkedin.com/in/drarielmerino/",
    "https://www.youtube.com/@ArielMerino",
    "https://www.facebook.com/MerinoAriel/",
    "https://expodentbuenosaires.com.ar/portfolio-item/dr-ariel-merino/",
    "https://www.odontoespacio.net/autores/ariel-merino/",
    "https://www.doctoraliar.com/perfil/ariel-merino",
  ],
  // Cada mención de prensa como `subjectOf`: le dice a Google que la entidad
  // fue cubierta por medios de referencia, con la URL para que lo compruebe.
  subjectOf: PRENSA.map((n) => ({
    "@type": "NewsArticle",
    headline: n.titular,
    url: n.href,
    publisher: { "@type": "Organization", name: n.medio },
  })),
};
