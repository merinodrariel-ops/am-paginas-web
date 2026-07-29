import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CasosClient from "./CasosClient";
import { getCasosPublicadosMerged } from "@/lib/public-cases";
import type { Caso } from "@/data/casos";

const CANONICAL = "https://www.amesteticadental.com/casos-antes-y-despues";
export const revalidate = 60;

// Casos fijos ("pin de Instagram"): siempre primero, en este orden, sin importar
// la fecha de carga. Para cambiarlos, editá solo esta lista.
const CASOS_FIJOS = [
    "diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan",
    "20-carillas-porcelana-apinamiento-sin-ortodoncia",
    "rehabilitacion-ceramica-ambos-maxilares-sin-cirugia-ortodoncia",
];

// Rotación diaria determinista del resto de los casos: cambia cada día pero es
// estable dentro del mismo día (se calcula en el servidor, sin azar en render).
function seedForToday(): number {
    const now = new Date();
    return Math.floor(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 86400000);
}

function mulberry32(seed: number) {
    let a = seed >>> 0;
    return () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function shuffleDeterministic<T>(arr: T[], seed: number): T[] {
    const rng = mulberry32(seed);
    const out = [...arr];
    for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
}

function ordenarGaleria(casos: Caso[]): Caso[] {
    const porSlug = new Map(casos.map((c) => [c.slug, c]));
    const fijos = CASOS_FIJOS.map((slug) => porSlug.get(slug)).filter((c): c is Caso => Boolean(c));
    const fijosSet = new Set(fijos.map((c) => c.slug));
    const resto = casos.filter((c) => !fijosSet.has(c.slug));
    return [...fijos, ...shuffleDeterministic(resto, seedForToday())];
}

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

export default async function CasosPage() {
    const casos = ordenarGaleria(await getCasosPublicadosMerged());
    return (
        <>
            <Navbar />
            <CasosClient todos={casos} fijos={CASOS_FIJOS} />
        </>
    );
}
