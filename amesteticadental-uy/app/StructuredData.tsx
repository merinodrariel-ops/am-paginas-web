import {
  ADDRESS,
  AR_CLINIC_ID,
  ARGENTINA_URL,
  BRAND_ID,
  LOGO_BASE_URL,
  PERSON_ID,
  PERSON_URL,
  REVIEW_URL,
  SITE_URL,
  UY_CLINIC_ID,
  WHATSAPP_NUMBER,
  WIKIDATA_BRAND,
  WIKIDATA_PERSON,
} from "./site-data";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

/**
 * Grafo de marca de AM Uruguay.
 *
 * Clave: los `@id` son compartidos con amesteticadental.com. La sede uruguaya se
 * declara `subOrganization` de la marca y `Dentist` con su propia dirección, y el
 * Dr. Merino reusa el `@id` de arielmerino.com. Así Google resuelve las cuatro
 * propiedades como UNA entidad con dos sedes, en lugar de cuatro marcas sueltas
 * compitiendo entre sí.
 *
 * No se declaran `openingHoursSpecification` ni `aggregateRating`: la sede todavía
 * no atiende, y afirmar horarios o reseñas propias de una clínica que no abrió
 * sería un dato falso.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": BRAND_ID,
      name: "AM Estética Dental",
      url: ARGENTINA_URL,
      logo: LOGO_BASE_URL,
      founder: { "@id": PERSON_ID },
      sameAs: [
        WIKIDATA_BRAND,
        ARGENTINA_URL,
        SITE_URL,
        REVIEW_URL,
        "https://www.instagram.com/amesteticadental",
        "https://ar.linkedin.com/company/am-est%C3%A9tica-dental",
      ],
      subOrganization: [{ "@id": AR_CLINIC_ID }, { "@id": UY_CLINIC_ID }],
    },
    {
      "@type": ["Dentist", "LocalBusiness"],
      "@id": UY_CLINIC_ID,
      name: "AM Estética Dental Uruguay",
      description:
        "Próxima sede de AM Estética Dental en zona Carrasco, Montevideo. Estética dental, diseño de sonrisa, carillas cerámicas y rehabilitación con laboratorio propio.",
      url: SITE_URL,
      image: LOGO_BASE_URL,
      logo: LOGO_BASE_URL,
      telephone: `+${WHATSAPP_NUMBER}`,
      priceRange: "$$$$",
      currenciesAccepted: "USD",
      parentOrganization: { "@id": BRAND_ID },
      branchOf: { "@id": AR_CLINIC_ID },
      founder: { "@id": PERSON_ID },
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        addressCountry: ADDRESS.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: ADDRESS.latitude,
        longitude: ADDRESS.longitude,
      },
      areaServed: [
        { "@type": "City", name: "Montevideo" },
        { "@type": "Country", name: "Uruguay" },
      ],
      knowsLanguage: ["es", "en"],
      sameAs: [WIKIDATA_BRAND, ARGENTINA_URL],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Dr. Ariel Merino",
      jobTitle: "Odontólogo Estético",
      url: PERSON_URL,
      worksFor: { "@id": BRAND_ID },
      sameAs: [
        WIKIDATA_PERSON,
        PERSON_URL,
        `${ARGENTINA_URL}/dr-ariel-merino`,
        "https://www.instagram.com/drarielmerino",
        "https://www.linkedin.com/in/drarielmerino/",
        "https://www.youtube.com/c/ArielMerino",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AM Estética Dental Uruguay",
      inLanguage: "es-UY",
      publisher: { "@id": BRAND_ID },
    },
  ],
};

/** Breadcrumb de una página interna. `trail` va desde el home hacia la página actual. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      ...trail.map((step, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: step.name,
        item: `${SITE_URL}${step.path}`,
      })),
    ],
  };
}

/** FAQPage a partir de un set de preguntas. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Servicio odontológico ofrecido por la sede uruguaya. */
export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": UY_CLINIC_ID },
  };
}
