import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CasosClient from "./CasosClient";
import { getCasosPublicadosMerged } from "@/lib/public-cases";
import { CASOS_FIJOS, ordenarGaleria } from "@/lib/casos-galeria";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/casos-antes-y-despues";
export const revalidate = 60;

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Casos Clínicos Antes y Después · Dr. Ariel Merino en Puerto Madero",
  url: CANONICAL,
  description: "Evidencia clínica real documentada paso a paso: carillas de porcelana, resinas 3D, ortodoncia invisible y rehabilitación oral en Puerto Madero.",
  publisher: {
    "@type": "Dentist",
    "@id": "https://www.amesteticadental.com/#clinic",
    name: "AM Estética Dental",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Camila O'Gorman 412, Oficina 101",
      addressLocality: "Puerto Madero, Ciudad Autónoma de Buenos Aires",
    },
  },
  author: {
    "@type": "Person",
    name: "Dr. Ariel Merino",
    identifier: "MN 34.869",
    jobTitle: "Especialista en Estética Dental y Rehabilitación Oral",
  },
};


export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Antes y Después Reales: Casos Documentados | AM",
    description: "Casos reales del Dr. Ariel Merino con diagnóstico, técnica, fotos y seguimiento. Documentados uno por uno, no retocados.",
    alternates: {
        canonical: CANONICAL,
        languages: hreflangFor("/casos-antes-y-despues"),
    },
    openGraph: {
        title: "Antes y Después Reales | AM Estética Dental",
        description: "Galería de casos clínicos reales con historia, técnica, fotos y seguimiento en AM Estética Dental.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
    },
};

export default async function CasosPage() {
    const casos = ordenarGaleria(await getCasosPublicadosMerged());
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />
            <CasosClient todos={casos} fijos={CASOS_FIJOS} />
        </>
    );
}
