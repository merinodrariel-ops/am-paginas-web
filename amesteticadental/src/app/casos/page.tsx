import type { Metadata } from "next";
import CasosClient from "./CasosClient";

const CANONICAL = "https://www.amesteticadental.com/casos";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Casos Clínicos Reales — Antes y Después | AM Estética Dental",
    description: "Casos clínicos reales documentados por AM Estética Dental: diseño de sonrisa, carillas, lentes de contacto dental, bruxismo, alineadores e implantes. Puerto Madero, Buenos Aires.",
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
    return <CasosClient />;
}
