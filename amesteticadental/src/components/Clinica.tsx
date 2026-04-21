"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FOTOS = [
    {
        src: "/images/clinica/consultorio-am-estetica-dental-puerto-madero-01.jpg",
        alt: "Consultorio AM Estética Dental — Puerto Madero, Buenos Aires",
    },
    {
        src: "/images/clinica/consultorio-am-estetica-dental-puerto-madero-02.jpg",
        alt: "Sala de tratamiento AM Estética Dental — equipamiento de última generación",
    },
    {
        src: "/images/clinica/consultorio-am-estetica-dental-puerto-madero-03.jpg",
        alt: "Interior AM Estética Dental — clínica odontológica Puerto Madero",
    },
    {
        src: "/images/clinica/consultorio-am-estetica-dental-puerto-madero-04.jpg",
        alt: "Recepción AM Estética Dental — Camila O'Gorman 412, Oficina 101",
    },
];

export default function Clinica() {
    const sectionRef = useRef<HTMLElement>(null);
    const headRef = useRef<HTMLDivElement>(null);
    const mosaicRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(headRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "power2.out",
                scrollTrigger: { trigger: headRef.current, start: "top 85%" },
            });

            const cells = mosaicRef.current?.querySelectorAll(".mosaic-cell");
            if (cells) {
                gsap.from(cells, {
                    opacity: 0,
                    scale: 0.97,
                    duration: 0.85,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: { trigger: mosaicRef.current, start: "top 80%" },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-32 px-4 bg-carbon-soft relative z-10"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
                    <div>
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                            El espacio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                            Puerto Madero.{" "}
                            <span className="font-cormorant italic text-oro">
                                El estándar que define todo lo demás.
                            </span>
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <p className="text-crema-muted font-manrope text-lg font-light leading-relaxed">
                            No es solo una dirección. El metro cuadrado más caro de Argentina impone un criterio — en infraestructura, equipamiento y en el tipo de paciente que exige excelencia en todo lo que consume.
                        </p>
                        {/* Dirección */}
                        <div className="inline-flex items-start gap-3 border border-oro/15 bg-carbon/60 backdrop-blur-sm rounded-2xl px-5 py-4">
                            <div className="w-2 h-2 rounded-full bg-oro mt-1.5 flex-shrink-0" />
                            <div>
                                <p className="text-crema font-manrope text-sm font-medium">
                                    Camila O&apos;Gorman 412, Oficina 101
                                </p>
                                <p className="text-crema/50 font-manrope text-xs mt-0.5 uppercase tracking-widest">
                                    Puerto Madero · Buenos Aires · Argentina
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mosaico 2×2 con énfasis en foto 01 */}
                <div
                    ref={mosaicRef}
                    className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3 h-[520px] md:h-[680px]"
                >
                    {/* Foto principal — 2 columnas, 2 filas */}
                    <div className="mosaic-cell col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden rounded-2xl group">
                        <Image
                            src={FOTOS[0].src}
                            alt={FOTOS[0].alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent" />
                    </div>

                    {/* Fotos 2, 3, 4 — columna derecha en desktop, segunda columna en mobile */}
                    {FOTOS.slice(1).map((foto, i) => (
                        <div
                            key={foto.src}
                            className={`mosaic-cell relative overflow-hidden rounded-2xl group ${i === 2 ? "hidden lg:block" : ""}`}
                        >
                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                fill
                                sizes="(max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-carbon/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                        </div>
                    ))}
                </div>

                {/* Footer — dirección + horario */}
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <div>
                            <p className="font-manrope text-[10px] uppercase tracking-[0.3em] text-oro/60 mb-0.5">Dirección</p>
                            <p className="font-manrope text-sm text-crema/70">Camila O&apos;Gorman 412, Of. 101 · Puerto Madero</p>
                        </div>
                        <div className="w-px h-8 bg-oro/15 hidden sm:block" />
                        <div>
                            <p className="font-manrope text-[10px] uppercase tracking-[0.3em] text-oro/60 mb-0.5">Teléfono</p>
                            <p className="font-manrope text-sm text-crema/70">+54 11 7021-9298</p>
                        </div>
                    </div>
                    <a
                        href="https://maps.google.com/?q=Camila+O'Gorman+412+Puerto+Madero+Buenos+Aires"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-manrope text-xs text-oro/50 hover:text-oro transition-colors uppercase tracking-widest"
                    >
                        Ver en Google Maps →
                    </a>
                </div>

            </div>
        </section>
    );
}
