// Sección de presencia en medios — E-E-A-T signal alto para SEO
// Fuentes verificadas de apariciones reales del Dr. Ariel Merino

import Image from "next/image";
import { NOTAS_PRENSA, type NotaPrensa } from "@/lib/prensa";

// Logos estilizados que capturan la identidad tipográfica de cada medio
const LOGOS_MEDIOS = [
    {
        id: "forbes",
        node: (
            <div className="relative h-6 w-20">
                <Image
                    src="/images/forbes-logo.png"
                    alt="Forbes Logo"
                    fill
                    sizes="80px"
                    className="object-contain filter brightness-0 invert opacity-45 hover:opacity-75 transition-opacity"
                />
            </div>
        ),
    },
    {
        id: "lanacion",
        node: (
            <span className="font-cormorant text-lg italic font-semibold tracking-wide text-crema/40">
                La Nación
            </span>
        ),
    },
    {
        id: "infobae",
        node: (
            <span className="font-manrope text-sm font-bold tracking-[-0.02em] text-crema/40">
                info<span className="text-oro/40">bae</span>
            </span>
        ),
    },
    {
        id: "ambito",
        node: (
            <span className="font-cormorant text-lg font-medium tracking-[0.05em] text-crema/38">
                ámbito
            </span>
        ),
    },
    {
        id: "parati",
        node: (
            <span className="font-cormorant text-lg italic text-crema/38 tracking-wide">
                para ti
            </span>
        ),
    },
    {
        id: "ohlala",
        node: (
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.3em] text-crema/35">
                Ohlalá!
            </span>
        ),
    },
    {
        id: "yahoo",
        node: (
            <span className="font-manrope text-sm font-bold tracking-tight text-crema/35">
                Yahoo <span className="font-light">Noticias</span>
            </span>
        ),
    },
    {
        id: "odonto",
        node: (
            <span className="font-manrope text-xs font-medium uppercase tracking-[0.2em] text-crema/32">
                OdontoEspacio
            </span>
        ),
    },
];

// Qué se muestra en la home: primero las columnas firmadas, porque "lo escribió
// el Dr. Merino" pesa más que "lo mencionaron", y después las consultas de los
// medios más grandes. El archivo completo vive en /prensa.
const DESTACADAS_IDS = [
    "lanacion-guia-alimentaria",
    "ambito-bruxismo-longevidad",
    "lanacion-robotica",
    "ambito-turismo-dental",
    "forbes-ia-sonrisa",
    "infobae-posturas-dormir",
];

const NOTAS_DESTACADAS: NotaPrensa[] = DESTACADAS_IDS
    .map((id) => NOTAS_PRENSA.find((n) => n.id === id))
    .filter((n): n is NotaPrensa => Boolean(n));

// Los titulares y medios NO se traducen: son publicaciones reales en español.
// Solo se traduce el chrome (encabezados y etiquetas de la UI).
const UI = {
    es: {
        eyebrow: "Presencia en medios",
        h2a: "El Dr. Merino es fuente",
        h2b: "de referencia",
        lead: "Presencia editorial en los medios más influyentes de Argentina como especialista de estética dental.",
        read: "Leer nota →",
        autor: "Firmada por el Dr.",
        consultado: "Experto consultado",
        todas: "Ver todas las apariciones →",
    },
    en: {
        eyebrow: "In the press",
        h2a: "Dr. Merino is a go-to",
        h2b: "expert source",
        lead: "Editorial presence in Argentina's most influential media as a cosmetic dentistry specialist. Articles are published in Spanish.",
        read: "Read the article →",
        autor: "Bylined by Dr. Merino",
        consultado: "Expert source",
        todas: "See every appearance →",
    },
} as const;

export default function Prensa({ lang = "es" }: { lang?: "es" | "en" }) {
    const ui = UI[lang];
    return (
        <section id="prensa" className="py-24 bg-carbon-soft border-y border-oro/10 overflow-hidden">

            {/* Header */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-5">
                            {ui.eyebrow}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight">
                            {ui.h2a}{" "}
                            <span className="font-cormorant italic text-oro">{ui.h2b}</span>
                        </h2>
                    </div>
                    <p className="text-crema/55 font-manrope text-sm leading-relaxed max-w-xs md:text-right">
                        {ui.lead}
                    </p>
                </div>
            </div>

            {/* Marquee de logos */}
            <div
                className="mb-14 overflow-hidden"
                style={{
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                    maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                }}
            >
                <div className="flex gap-0 prensa-marquee-track">
                    {[...LOGOS_MEDIOS, ...LOGOS_MEDIOS, ...LOGOS_MEDIOS].map((logo, i) => (
                        <div
                            key={`${logo.id}-${i}`}
                            className="flex-none flex items-center gap-10 px-10"
                        >
                            {logo.node}
                            <span className="text-oro/15 text-[8px]">◆</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Grid de notas */}
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {NOTAS_DESTACADAS.map((nota) => (
                        <a
                            key={nota.titular}
                            href={nota.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border border-oro/12 rounded-2xl p-5 bg-carbon hover:border-oro/28 transition-colors flex flex-col gap-3"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <span className="text-oro/70 font-manrope font-semibold text-[11px] block">
                                        {nota.medio}
                                    </span>
                                    <span className="text-crema/30 font-manrope text-[10px]">{nota.fecha.slice(0, 4)}</span>
                                </div>
                                <span className={`font-manrope text-[9px] uppercase tracking-widest rounded-full px-2 py-0.5 flex-none ${
                                    nota.rol === "autor"
                                        ? "bg-oro/12 text-oro/80 border border-oro/20"
                                        : "border border-oro/10 text-crema/30"
                                }`}>
                                    {nota.rol === "autor" ? ui.autor : ui.consultado}
                                </span>
                            </div>
                            <h3 className="text-crema/80 font-manrope font-medium text-sm leading-snug group-hover:text-crema transition-colors line-clamp-3">
                                {nota.titular}
                            </h3>
                            <p className="text-crema/40 font-manrope text-xs leading-relaxed line-clamp-2 flex-1">
                                {nota.extracto}
                            </p>
                            <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-auto">
                                {ui.read}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}
