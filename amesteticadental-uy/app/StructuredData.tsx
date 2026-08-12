import { SITE_URL } from "./site-data";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AM Estética Dental Uruguay",
  url: SITE_URL,
  logo: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/am-estetica-dental-logo-puerto-madero.png",
  description: "Próxima sede de AM Estética Dental en zona Carrasco, Montevideo.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Miraflores 1445, Oficina 202",
    addressLocality: "Montevideo",
    addressRegion: "Montevideo",
    addressCountry: "UY",
  },
  areaServed: { "@type": "City", name: "Montevideo" },
  founder: { "@type": "Person", name: "Dr. Ariel Merino" },
};
