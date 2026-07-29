"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sección de diferenciación explícita.
// El análisis competitivo reveló que NINGÚN competidor en CABA tiene
// una página de diferenciación. Esta sección captura a quien está comparando.

const diferenciadores = [
    {
        titulo: "Resultados firmados",
        descripcion: "Cada foto que publicamos lleva el watermark @drarielmerino. No son resultados anónimos de una clínica genérica — son casos con nombre, apellido y responsable clínico. Ningún competidor asume esa responsabilidad pública.",
        icono: "✦",
    },
    {
        titulo: "El único simulador financiero del mercado",
        descripcion: "Calculá exactamente cuánto te cuesta tu tratamiento antes de hablar con nadie. Tasa fija 18% anual, pago en USD o ARS al tipo de cambio oficial del Banco Nación. Transparencia total en un mercado que vive de la opacidad de precios.",
        icono: "◆",
    },
    {
        titulo: "Puerto Madero no es un detalle",
        descripcion: "Camila O'Gorman 412, Oficina 101, Puerto Madero. En el metro cuadrado más caro de Argentina. Esto no es marketing — es un estándar de infraestructura, equipamiento y clientela que define todo lo que hacemos adentro.",
        icono: "◈",
    },
    {
        titulo: "Forbes. Miss Universo. Sin más.",
        descripcion: "AM Estética Dental es la única clínica odontológica de Argentina en las páginas de Forbes. La sonrisa de Miss Universo fue diseñada por nuestro equipo. No pedimos confianza — mostramos por qué otros ya la depositan.",
        icono: "◉",
    },
    {
        titulo: "Tecnología 3D antes de tocar un diente",
        descripcion: "Diseñamos tu sonrisa digitalmente y te mostramos el resultado antes de empezar. Aprobás o ajustamos. Recién cuando el diseño es exactamente lo que querés, arrancamos. Eso elimina el mayor miedo de cualquier paciente.",
        icono: "◎",
    },
    {
        titulo: "Sin impresión. Sin moldes. Sin ansiedad.",
        descripcion: "Escáner intraoral digital. Cero pasta en la boca. Cero impresiones tradicionales. Un proceso clínico que respeta que venir al dentista requiere valentía, y nos ocupamos de que valga la pena.",
        icono: "◐",
    },
];

const diferenciadoresEn = [
    {
        titulo: "Signed results",
        descripcion: "Every photo we publish carries the @drarielmerino watermark. These are not anonymous results from a generic clinic — they are cases with a name and a clinician who takes public responsibility for them.",
        icono: "✦",
    },
    {
        titulo: "Our own laboratory, inside the clinic",
        descripcion: "We do not outsource fabrication. Designing and milling in-house is what lets us compress a full smile transformation into a single 10–14 day trip instead of months of back-and-forth with an external lab.",
        icono: "◆",
    },
    {
        titulo: "Puerto Madero is not a detail",
        descripcion: "Camila O'Gorman 412, Office 101, Puerto Madero — on the most expensive square metre in Argentina. This is not marketing: it is a standard of infrastructure, equipment and clientele that defines everything we do inside.",
        icono: "◈",
    },
    {
        titulo: "Forbes. Miss Universe. That's it.",
        descripcion: "AM Estética Dental is the only dental clinic in Argentina featured in the pages of Forbes. The smile of a Miss Universe was designed by our team. We do not ask for trust — we show why others already place it here.",
        icono: "◉",
    },
    {
        titulo: "3D technology before touching a tooth",
        descripcion: "We design your smile digitally and show you the result before we start. You approve it or we adjust it. Only when the design is exactly what you want do we begin. That removes the biggest fear any patient has.",
        icono: "◎",
    },
    {
        titulo: "No impressions. No moulds. No anxiety.",
        descripcion: "Digital intraoral scanner. Zero paste in your mouth. Zero traditional impressions. A clinical process that respects the fact that coming to the dentist takes courage — and makes sure it is worth it.",
        icono: "◐",
    },
];

const UI = {
    es: {
        eyebrow: "Por qué AM Estética Dental",
        h2a: "Hay muchas clínicas en Buenos Aires.",
        h2b: "Solo una en Puerto Madero con este nivel.",
        lead: "No compete por precio. No compite por volumen. AM Estética Dental compite por resultado — y en ese terreno, la conversación es diferente.",
        cta: "Agendá tu consulta inicial",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Quiero%20conocer%20m%C3%A1s%20sobre%20AM%20Est%C3%A9tica%20Dental.",
    },
    en: {
        eyebrow: "Why AM Estética Dental",
        h2a: "There are many clinics in Buenos Aires.",
        h2b: "Only one in Puerto Madero at this level.",
        lead: "We do not compete on price. We do not compete on volume. AM Estética Dental competes on result and on time — and on that ground, the conversation is different.",
        cta: "Book your initial assessment",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20more%20about%20AM%20Est%C3%A9tica%20Dental.",
    },
} as const;

export default function PorQueAM({ lang = "es" }: { lang?: "es" | "en" }) {
    const ui = UI[lang];
    const items = lang === "en" ? diferenciadoresEn : diferenciadores;
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Heading fade-up
            gsap.from(headingRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "power2.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 82%",
                    once: true,
                },
            });

            // Cards stagger in
            const cards = gridRef.current?.querySelectorAll(".diferenciador-card");
            if (cards) {
                gsap.from(cards, {
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power2.out",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                        once: true,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-4 bg-carbon-soft relative z-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div ref={headingRef} className="mb-20">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        {ui.eyebrow}
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                            {ui.h2a}{" "}
                            <span className="font-cormorant italic text-oro">{ui.h2b}</span>
                        </h2>
                        <p className="text-crema-muted font-manrope text-lg font-light leading-relaxed">
                            {ui.lead}
                        </p>
                    </div>
                </div>

                {/* Grilla de diferenciadores */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-oro/10">
                    {items.map((d) => (
                        <div
                            key={d.titulo}
                            className="diferenciador-card bg-carbon p-8 hover:bg-carbon-soft transition-colors group"
                        >
                            <div className="text-oro text-xl mb-6 group-hover:scale-110 transition-transform inline-block">
                                {d.icono}
                            </div>
                            <h3 className="text-crema font-manrope font-medium text-base mb-4 leading-snug">
                                {d.titulo}
                            </h3>
                            <p className="text-crema-muted font-manrope text-sm leading-relaxed">
                                {d.descripcion}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA base */}
                <div className="mt-16 text-center">
                    <a
                        href={ui.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-all"
                    >
                        {ui.cta}
                        <span>→</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
