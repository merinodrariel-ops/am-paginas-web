"use client";

import { useState } from "react";
import { faqData, faqDataEn } from "@/data/faq";

const UI = {
    es: {
        eyebrow: "Preguntas frecuentes",
        h2a: "Preguntas sobre carillas,",
        h2b: "alineadores y diseño de sonrisa",
        lead: "Respondemos las preguntas que casi nadie hace en voz alta.",
        ctaQ: "¿Tenés una pregunta que no está acá?",
        ctaBtn: "Escribinos por WhatsApp →",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Tengo%20una%20consulta%20sobre...",
    },
    en: {
        eyebrow: "Frequently asked questions",
        h2a: "Questions about veneers,",
        h2b: "aligners and smile design",
        lead: "We answer the questions almost nobody asks out loud.",
        ctaQ: "Have a question that isn't here?",
        ctaBtn: "Message us on WhatsApp →",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20have%20a%20question%20about...",
    },
} as const;

export default function FAQ({ lang = "es" }: { lang?: "es" | "en" }) {
    const ui = UI[lang];
    const items = lang === "en" ? faqDataEn : faqData;
    const [abierto, setAbierto] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 px-4 bg-carbon-soft relative z-10">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        {ui.eyebrow}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                        {ui.h2a}{" "}
                        <span className="font-cormorant italic text-oro">{ui.h2b}</span>
                    </h2>
                    <p className="text-crema-muted font-manrope text-lg font-light">
                        {ui.lead}
                    </p>
                </div>

                {/* Acordeón */}
                <div className="space-y-2">
                    {items.map((faq: { pregunta: string; respuesta: string }, i: number) => (
                        <div
                            key={i}
                            className={`border rounded-xl overflow-hidden transition-colors ${
                                abierto === i ? "border-oro/30 bg-carbon" : "border-oro/10 bg-carbon hover:border-oro/20"
                            }`}
                        >
                            <button
                                onClick={() => setAbierto(abierto === i ? null : i)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                            >
                                <span className={`font-manrope font-medium text-sm leading-snug ${abierto === i ? "text-crema" : "text-crema/80"}`}>
                                    {faq.pregunta}
                                </span>
                                <span className={`text-oro flex-none transition-transform duration-200 ${abierto === i ? "rotate-45" : ""}`}>
                                    +
                                </span>
                            </button>

                            {abierto === i && (
                                <div className="px-6 pb-6">
                                    <div className="h-px bg-oro/10 mb-5" />
                                    <p className="text-crema-muted font-manrope text-sm leading-relaxed">
                                        {faq.respuesta}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA debajo del FAQ */}
                <div className="mt-12 text-center">
                    <p className="text-crema-muted font-manrope text-sm mb-4">
                        {ui.ctaQ}
                    </p>
                    <a
                        href={ui.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-oro font-manrope text-sm font-medium hover:text-oro-light transition-colors"
                    >
                        {ui.ctaBtn}
                    </a>
                </div>

            </div>
        </section>
    );
}
