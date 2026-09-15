import type { EquipoMiembro } from "@/data/equipo";

/**
 * Schema de cada integrante del Equipo AM.
 *
 * Vive acá y no dentro de cada página porque la ficha se publica en dos idiomas
 * (`/equipo-am` y `/en/team`) y el profesional es **una sola entidad**: mismo
 * `@id` en los dos lados. Si cada página inventara el suyo, Google vería dos
 * personas distintas con el mismo nombre y la misma matrícula.
 *
 * Lo que se declara acá tiene que poder verificarse en la página: la matrícula
 * que se muestra, el título que figura en el CV desplegado, la foto que se ve.
 * Structured data que afirma algo que no está en el HTML es exactamente lo que
 * Google trata como spam.
 */

const SITIO = "https://www.amesteticadental.com";
const MARCA = "AM Estética Dental";

/** El consultorio: la misma dirección y las mismas coordenadas que llevan escritas las fotos en su EXIF. */
export const CONSULTORIO_PLACE = {
  "@type": "Place",
  name: `${MARCA} — Puerto Madero`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camila O'Gorman 412, Oficina 101",
    addressLocality: "Puerto Madero",
    addressRegion: "Ciudad Autónoma de Buenos Aires",
    postalCode: "C1107DED",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.620858,
    longitude: -58.3609047,
  },
} as const;

/**
 * La foto como `ImageObject` en vez de una URL suelta. Repite en schema lo que el
 * archivo lleva en IPTC (autor, crédito, copyright, dónde fue tomada) para que
 * Google Imágenes lo lea aunque un CDN intermedio borre los metadatos del binario.
 */
function fotoSchema(miembro: EquipoMiembro, alt: string) {
  return {
    "@type": "ImageObject",
    url: miembro.imagen,
    contentUrl: miembro.imagen,
    caption: alt,
    representativeOfPage: false,
    creator: { "@type": "Organization", name: MARCA, url: SITIO },
    creditText: MARCA,
    copyrightNotice: `© ${new Date().getFullYear()} ${MARCA}`,
    acquireLicensePage: `${SITIO}/equipo-am`,
    contentLocation: CONSULTORIO_PLACE,
  };
}

export function empleadoSchema(miembro: EquipoMiembro, idioma: "es" | "en" = "es") {
  const cv = idioma === "en" ? miembro.cvEn ?? miembro.cv : miembro.cv;
  const alt = idioma === "en" ? miembro.altEn : miembro.alt;

  // La matrícula y el título son dos credenciales distintas: una la da el Estado,
  // el otro la universidad. Google las distingue por `credentialCategory`.
  const credenciales = [
    ...(miembro.matricula
      ? [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: idioma === "en" ? `National license ${miembro.matricula}` : `Matrícula nacional ${miembro.matricula}`,
            recognizedBy: {
              "@type": "GovernmentOrganization",
              name: "Ministerio de Salud de la Nación Argentina",
            },
          },
        ]
      : []),
    ...(cv
      ? [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: cv.titulo,
            recognizedBy: { "@type": "CollegeOrUniversity", name: cv.universidad },
          },
        ]
      : []),
  ];

  return {
    "@type": miembro.schemaType,
    // Mismo `@id` en español y en inglés: una persona, una entidad.
    "@id": `${SITIO}/equipo-am#${miembro.slug}`,
    name: miembro.nombre,
    jobTitle: idioma === "en" ? miembro.rolEn : miembro.rol,
    description: idioma === "en" ? miembro.descripcionEn : miembro.descripcion,
    image: fotoSchema(miembro, alt),
    url: `${SITIO}${idioma === "en" ? "/en/team" : "/equipo-am"}#${miembro.slug}`,
    worksFor: {
      "@type": "Dentist",
      name: MARCA,
      url: SITIO,
    },
    workLocation: CONSULTORIO_PLACE,
    knowsAbout: cv?.areas?.length ? [...miembro.keywords, ...cv.areas] : miembro.keywords,
    ...(cv ? { alumniOf: { "@type": "CollegeOrUniversity", name: cv.universidad } } : {}),
    ...(cv?.idiomas?.length ? { knowsLanguage: cv.idiomas } : {}),
    ...(credenciales.length ? { hasCredential: credenciales } : {}),
    // Se mantiene además como `identifier`: es la forma en que ya estaba
    // publicada la matrícula y hay agregadores que la leen de ahí.
    ...(miembro.matricula
      ? {
          identifier: {
            "@type": "PropertyValue",
            propertyID: "Matrícula Nacional",
            value: miembro.matricula,
          },
        }
      : {}),
  };
}
