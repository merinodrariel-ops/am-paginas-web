import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CasosClient from "../../casos-antes-y-despues/CasosClient";
import { getCasosPublicadosMerged } from "@/lib/public-cases";
import { CASOS_FIJOS, ordenarGaleria } from "@/lib/casos-galeria";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/before-after";
export const revalidate = 60;

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Real Before & After Dental Cases — Dr. Ariel Merino (Puerto Madero, Buenos Aires)",
  url: CANONICAL,
  description: "Clinical evidence of porcelain veneers, 3D resin veneers, clear aligners and full mouth rehabilitations in Buenos Aires.",
  publisher: {
    "@type": "Dentist",
    "@id": "https://www.amesteticadental.com/#clinic",
    name: "AM Estética Dental",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Camila O'Gorman 412, Office 101",
      addressLocality: "Puerto Madero, Buenos Aires",
      addressCountry: "AR",
    },
  },
  author: {
    "@type": "Person",
    name: "Dr. Ariel Merino",
    identifier: "MN 34.869",
    jobTitle: "Specialist in Aesthetic Dentistry and High-Complexity Oral Rehabilitation",
  },
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Real Before & After — Clinical Cases | AM Estética Dental",
    description: "Real before & after documented as clinical cases: diagnosis, technique, photos, timeline and follow-up. Nothing retouched.",
    alternates: {
        canonical: CANONICAL,
        languages: hreflangFor("/casos-antes-y-despues"),
    },
    openGraph: {
        title: "Real Before & After | AM Estética Dental",
        description: "Gallery of real clinical cases with history, technique, photos and follow-up at AM Estética Dental, Buenos Aires.",
        url: CANONICAL,
        locale: "en_US",
        type: "website",
    },
};

export default async function BeforeAfterPage() {
    const casos = ordenarGaleria(await getCasosPublicadosMerged("en"));
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />
            <CasosClient todos={casos} fijos={CASOS_FIJOS} lang="en" />
        </>
    );
}
