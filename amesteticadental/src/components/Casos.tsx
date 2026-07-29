"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getCasosPublicados } from "@/data/casos";

const CASOS_DESTACADOS = getCasosPublicados().slice(0, 6);

const UI = {
    es: {
        eyebrow: "Antes y después reales",
        h2a: "Fotos reales, ordenadas",
        h2b: "por caso clínico.",
        lead: "Cada portada abre la historia completa del paciente: diagnóstico, tratamiento, duración, técnica, seguimiento y más fotos del resultado.",
        all: "Ver todos los casos",
        allHref: "/casos-antes-y-despues",
        ctaQ: "¿Querés un resultado así para tu sonrisa?",
        ctaBtn: "Agendá tu consulta",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Vi%20los%20casos%20y%20me%20gustar%C3%ADa%20una%20consulta.",
    },
    en: {
        eyebrow: "Real before & afters",
        h2a: "Real photos, organized",
        h2b: "by clinical case.",
        lead: "Each cover opens the patient's full story: diagnosis, treatment, timeline, technique, follow-up and more photos of the result.",
        all: "See all cases",
        allHref: "/en/before-after",
        ctaQ: "Want a result like this for your smile?",
        ctaBtn: "Book your consultation",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20saw%20the%20cases%20and%20I'd%20like%20a%20consultation.",
    },
} as const;

export default function Casos({ lang = "es" }: { lang?: "es" | "en" }) {
    const ui = UI[lang];
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const cards = gridRef.current?.querySelectorAll(".caso-card");
            if (cards) {
                gsap.from(cards, {
                    opacity: 0,
                    y: 60,
                    duration: 0.75,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 82%",
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="casos"
            className="py-32 px-4 bg-carbon relative z-10"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        {ui.eyebrow}
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                            {ui.h2a}{" "}
                            <span className="font-cormorant italic text-oro">{ui.h2b}</span>
                        </h2>
                        <p className="text-crema-muted font-manrope text-lg font-light leading-relaxed">
                            {ui.lead}
                        </p>
                    </div>
                </div>

                {/* Grid de casos */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {CASOS_DESTACADOS.map((caso) => (
                        <Link
                            key={caso.slug}
                            href={`/casos/${caso.slug}`}
                            className="caso-card group block"
                        >
                            <article className="h-full overflow-hidden rounded-2xl border border-crema/5 bg-carbon-soft transition-colors duration-300 hover:border-oro/25">
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={caso.fotoPortada.src}
                                        alt={caso.fotoPortada.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/10 to-transparent" />
                                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                                        <span className="inline-flex border border-oro/25 bg-carbon/75 px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.24em] text-oro backdrop-blur-sm">
                                            {caso.categorias[0]}
                                        </span>
                                        <span className="inline-flex border border-crema/10 bg-carbon/70 px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.24em] text-crema/70 backdrop-blur-sm">
                                            {caso.duracion}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="mb-2 font-manrope text-[10px] uppercase tracking-[0.28em] text-oro/70">
                                            Caso completo
                                        </p>
                                        <h3 className="line-clamp-2 font-manrope text-xl font-light leading-snug text-crema">
                                            {caso.titulo}
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="line-clamp-2 min-h-[2.75rem] font-manrope text-sm leading-relaxed text-crema/50">
                                        {caso.subtitulo}
                                    </p>
                                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-crema/5 pt-4">
                                        <span className="font-manrope text-[10px] uppercase tracking-[0.24em] text-crema/35">
                                            @drarielmerino
                                        </span>
                                        <span className="font-manrope text-xs uppercase tracking-widest text-oro transition-transform duration-200 group-hover:translate-x-1">
                                            Ver caso →
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href={ui.allHref}
                        className="inline-flex items-center gap-3 border border-oro/25 px-7 py-3.5 font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-oro transition-colors hover:border-oro hover:bg-oro hover:text-carbon"
                    >
                        {ui.all}
                        <span>→</span>
                    </Link>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-crema/40 font-manrope text-sm mb-6">
                        {ui.ctaQ}
                    </p>
                    <a
                        href={ui.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-all"
                    >
                        {ui.ctaBtn}
                        <span>→</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
