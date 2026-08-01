import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CasosClient from "./CasosClient";
import { getCasosPublicadosMerged } from "@/lib/public-cases";
import { CASOS_FIJOS, ordenarGaleria } from "@/lib/casos-galeria";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/casos-antes-y-despues";
export const revalidate = 60;


export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Antes y Después Reales: Casos Documentados | AM",
    description: "Antes y después reales documentados como casos clínicos: diagnóstico, técnica, fotos, duración y seguimiento de tratamientos del Dr. Ariel Merino en Puerto Madero.",
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
            <Navbar />
            <CasosClient todos={casos} fijos={CASOS_FIJOS} />
        </>
    );
}
