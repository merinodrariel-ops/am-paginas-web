import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CasosClient from "../../casos-antes-y-despues/CasosClient";
import { getCasosPublicadosMerged } from "@/lib/public-cases";
import { CASOS_FIJOS, ordenarGaleria } from "@/lib/casos-galeria";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/before-after";
export const revalidate = 60;

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Real Before & After — Documented Clinical Cases | AM Estética Dental",
    description: "Real before & after results documented as clinical cases: diagnosis, technique, photos, timeline and follow-up of treatments by Dr. Ariel Merino in Puerto Madero, Buenos Aires.",
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
            <Navbar />
            <CasosClient todos={casos} fijos={CASOS_FIJOS} lang="en" />
        </>
    );
}
