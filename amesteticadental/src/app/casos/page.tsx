import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CasosClient from "./CasosClient";

const CANONICAL = "https://www.amesteticadental.com/casos";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Antes y Después Reales — Casos Clínicos Documentados | AM Estética Dental",
    description: "Antes y después reales documentados como casos clínicos: diagnóstico, técnica, fotos, duración y seguimiento de tratamientos del Dr. Ariel Merino en Puerto Madero.",
    alternates: {
        canonical: CANONICAL,
    },
    openGraph: {
        title: "Antes y Después Reales | AM Estética Dental",
        description: "Galería de casos clínicos reales con historia, técnica, fotos y seguimiento en AM Estética Dental.",
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
