import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CasosClient from "./CasosClient";

const CANONICAL = "https://www.amesteticadental.com/casos";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Casos Clínicos Reales — Antes y Después | AM Estética Dental",
    description: "Casos reales de diseño de sonrisa, carillas de porcelana, lentes de contacto, implantes y alineadores invisibles en Puerto Madero, Buenos Aires.",
    alternates: {
        canonical: CANONICAL,
    },
    openGraph: {
        title: "Casos Clínicos Reales | AM Estética Dental",
        description: "Diagnóstico, plan de tratamiento y resultados reales documentados en AM Estética Dental.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
    },
};

export default function CasosPage() {
    return (
        <>
            <Navbar />
            <CasosClient />
        </>
    );
}
