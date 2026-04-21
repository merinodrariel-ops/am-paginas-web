"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CASO_FEATURED = {
    src: "/images/casos/caso-extremo-carillas-veneers-03-dr-ariel-merino-am-estetica-dental.webp",
    alt: "Transformación extrema con carillas de porcelana — Dr. Ariel Merino — AM Estética Dental Puerto Madero",
    tratamiento: "Carillas de Porcelana",
    descripcion: "Transformación extrema",
    detalle: "Rehabilitación completa del sector anterior con veneers de porcelana de alta translucidez",
};

// Aspect ratios reales de cada imagen para layout sin distorsión
const CASOS = [
    {
        src: "/images/casos/caso-carillas-ceramicas-antes-despues-02-am-estetica-dental.webp",
        alt: "Antes de carillas cerámicas — AM Estética Dental",
        tratamiento: "Carillas Cerámicas",
        descripcion: "Antes",
        aspect: "aspect-square",
    },
    {
        src: "/images/casos/caso-carillas-ceramicas-antes-despues-01-am-estetica-dental.webp",
        alt: "Después de carillas cerámicas — AM Estética Dental",
        tratamiento: "Carillas Cerámicas",
        descripcion: "Después",
        aspect: "aspect-square",
    },
    {
        src: "/images/casos/caso-diseno-sonrisa-carillas-ceramicas-antes-despues-am-estetica-dental.webp",
        alt: "Diseño de sonrisa con carillas cerámicas antes y después — AM Estética Dental",
        tratamiento: "Diseño de Sonrisa",
        descripcion: "Antes / Después",
        aspect: "aspect-[4/5]",
    },
    {
        src: "/images/casos/caso-eli-carillas-ceramicas-01-am-estetica-dental.webp",
        alt: "Caso Eli — Transformación con carillas cerámicas antes y después — AM Estética Dental",
        tratamiento: "Carillas Cerámicas",
        descripcion: "Caso Eli — Antes / Después",
        aspect: "aspect-square",
    },
    {
        src: "/images/casos/caso-bruxismo-carillas-mordida-cruzada-am-estetica-dental.webp",
        alt: "Tratamiento de bruxismo con carillas y corrección de mordida cruzada — AM Estética Dental",
        tratamiento: "Bruxismo",
        descripcion: "Mordida cruzada",
        aspect: "aspect-[4/5]",
    },
    {
        src: "/images/casos/caso-erosion-dentaria-carillas-ceramicas-am-estetica-dental.webp",
        alt: "Tratamiento de erosión dentaria con carillas cerámicas — AM Estética Dental",
        tratamiento: "Erosión Dentaria",
        descripcion: "Rehabilitación completa",
        aspect: "aspect-[4/5]",
    },
    {
        src: "/images/casos/caso-caries-carillas-diseno-sonrisa-ceramica-am-estetica-dental.webp",
        alt: "Diseño de sonrisa cerámica en caso de caries — AM Estética Dental",
        tratamiento: "Diseño de Sonrisa",
        descripcion: "Rehabilitación cerámica",
        aspect: "aspect-[4/5]",
    },
    {
        src: "/images/casos/caso-carillas-ceramicas-antes-despues-03-am-estetica-dental.webp",
        alt: "Carillas cerámicas caso avanzado antes y después — AM Estética Dental",
        tratamiento: "Carillas Cerámicas",
        descripcion: "Caso avanzado",
        aspect: "aspect-[4/5]",
    },
    {
        src: "/images/casos/caso-carilla-diente-oscurecido-tratamiento-conducto-am-estetica-dental.webp",
        alt: "Carilla sobre diente oscurecido post tratamiento de conducto — AM Estética Dental",
        tratamiento: "Carilla Unitaria",
        descripcion: "Post endodoncia",
        aspect: "aspect-[4/5]",
    },
    {
        src: "/images/casos/caso-extremo-diseno-sonrisa-carillas-ceramicas-dr-ariel-merino.webp",
        alt: "Caso extremo de diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino",
        tratamiento: "Carillas Cerámicas",
        descripcion: "Caso extremo",
        aspect: "aspect-[16/9]",
    },
    {
        src: "/images/casos/caso-italiano-carillas-ceramicas-01-am-estetica-dental.webp",
        alt: "Caso Italiano — Carillas cerámicas AM Estética Dental",
        tratamiento: "Carillas Cerámicas",
        descripcion: "Caso internacional",
        aspect: "aspect-square",
    },
    {
        src: "/images/casos/caso-italiano-carillas-ceramicas-02-am-estetica-dental.webp",
        alt: "Resultado carillas cerámicas caso internacional — AM Estética Dental",
        tratamiento: "Carillas Cerámicas",
        descripcion: "Resultado final",
        aspect: "aspect-square",
    },
    {
        src: "/images/casos/caso-patricia-carillas-diseno-sonrisa-ceramicas-dr-ariel-merino.webp",
        alt: "Caso Patricia — diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino",
        tratamiento: "Diseño de Sonrisa",
        descripcion: "Transformación natural",
        aspect: "aspect-[16/9]",
    },
    {
        src: "/images/casos/caso-extremo-carillas-veneers-04-dr-ariel-merino-am-estetica-dental.webp",
        alt: "Transformación extrema con carillas — antes y después — Dr. Ariel Merino AM Estética Dental",
        tratamiento: "Carillas de Porcelana",
        descripcion: "Caso extremo — Antes / Después",
        aspect: "aspect-[16/9]",
    },
    {
        src: "/images/casos/caso-eli-carillas-ceramicas-03-am-estetica-dental.webp",
        alt: "Caso Eli — antes del tratamiento con carillas cerámicas — AM Estética Dental",
        tratamiento: "Carillas Cerámicas",
        descripcion: "Caso Eli — Antes",
        aspect: "aspect-[4/5]",
    },
    {
        src: "/images/casos/caso-eli-carillas-ceramicas-04-am-estetica-dental.webp",
        alt: "Caso Eli — después del tratamiento con carillas cerámicas — AM Estética Dental",
        tratamiento: "Carillas Cerámicas",
        descripcion: "Caso Eli — Después",
        aspect: "aspect-[4/5]",
    },
];

export default function Casos() {
    const sectionRef = useRef<HTMLElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Featured case: fade + scale up
            gsap.from(featuredRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: featuredRef.current,
                    start: "top 85%",
                },
            });

            // Grid: stagger reveal
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
                        Casos Reales
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                            Resultados que hablan{" "}
                            <span className="font-cormorant italic text-oro">por sí solos.</span>
                        </h2>
                        <p className="text-crema-muted font-manrope text-lg font-light leading-relaxed">
                            Cada caso lleva el watermark @drarielmerino. No son imágenes de stock — son pacientes reales de AM Estética Dental, con nombre y responsable clínico visible.
                        </p>
                    </div>
                </div>

                {/* Featured case */}
                <div ref={featuredRef} className="relative mb-4 overflow-hidden rounded-2xl group">
                    <div className="relative aspect-[16/9] md:aspect-[21/9]">
                        <Image
                            src={CASO_FEATURED.src}
                            alt={CASO_FEATURED.alt}
                            fill
                            sizes="100vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-transparent" />

                        {/* Info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                                <div>
                                    <span className="inline-flex items-center gap-2 border border-oro/30 bg-carbon/70 backdrop-blur-sm rounded-full px-4 py-1.5 font-manrope text-[10px] uppercase tracking-[0.3em] text-oro mb-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-oro" />
                                        {CASO_FEATURED.tratamiento}
                                    </span>
                                    <h3 className="text-crema font-manrope font-light text-2xl md:text-3xl">
                                        {CASO_FEATURED.descripcion}
                                    </h3>
                                    <p className="text-crema/60 font-manrope text-sm mt-2 max-w-md">
                                        {CASO_FEATURED.detalle}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-oro/50 font-manrope text-xs uppercase tracking-widest">
                                    @drarielmerino
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid de casos */}
                <div
                    ref={gridRef}
                    className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
                >
                    {CASOS.map((caso) => (
                        <div
                            key={caso.src}
                            className="caso-card break-inside-avoid group relative overflow-hidden rounded-xl mb-4"
                        >
                            <div className={`relative ${caso.aspect} w-full`}>
                                <Image
                                    src={caso.src}
                                    alt={caso.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-carbon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                                {/* Treatment badge — always visible */}
                                <div className="absolute top-3 left-3">
                                    <span className="inline-flex items-center gap-1.5 border border-oro/20 bg-carbon/75 backdrop-blur-sm rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.28em] text-oro">
                                        {caso.tratamiento}
                                    </span>
                                </div>

                                {/* Description — appears on hover */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                                    <p className="font-manrope text-xs text-crema/70 uppercase tracking-widest">
                                        {caso.descripcion}
                                    </p>
                                    <p className="font-manrope text-[10px] text-oro/40 mt-1">
                                        @drarielmerino · AM Estética Dental
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-crema/40 font-manrope text-sm mb-6">
                        ¿Querés un resultado así para tu sonrisa?
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Vi%20los%20casos%20y%20me%20gustar%C3%ADa%20una%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-all"
                    >
                        Agendá tu consulta
                        <span>→</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
