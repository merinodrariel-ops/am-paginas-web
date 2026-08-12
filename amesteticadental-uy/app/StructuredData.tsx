import { LOGO_BASE_URL, SITE_URL } from "./site-data";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AM Estética Dental Uruguay",
  url: SITE_URL,
  logo: LOGO_BASE_URL,
  image: LOGO_BASE_URL,
  description: "Próxima sede de AM Estética Dental en zona Carrasco, Montevideo.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Miraflores 1445, Oficina 202",
    addressLocality: "Montevideo",
    addressRegion: "Montevideo",
    addressCountry: "UY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.8926811,
    longitude: -56.0612685,
  },
  areaServed: { "@type": "City", name: "Montevideo" },
  founder: { "@type": "Person", name: "Dr. Ariel Merino" },
};
