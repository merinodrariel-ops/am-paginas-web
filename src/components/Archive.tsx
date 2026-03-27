"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Sección Antes/Después — reemplaza las tarjetas GSAP del template base
// Diseño basado en el "Antes / Después" del proyecto Stitch
// TODO: Reemplazar las imágenes placeholder con fotos reales de casos @drarielmerino

const casos = [
    {
        id: "01",
        tratamiento: "Diseño de Sonrisa Digital",
        antes: "https://images.unsplash.com/photo-1606275825272-9e9008bc06d1?q=80&w=800&auto=format&fit=crop",
        despues: "https://images.unsplash.com/photo-1598256989410-b4bd697dc2b5?q=80&w=800&auto=format&fit=crop",
        paciente: "Caso M.V.",
        resultado: "Planificación 3D para armonizar forma, color y proporción.",
        href: "/diseno-de-sonrisa",
    },
    {
        id: "02",
        tratamiento: "Carillas de Porcelana",
        antes: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
        despues: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=800&auto=format&fit=crop",
        paciente: "Caso L.R.",
        resultado: "Cambio de forma y color con un resultado más limpio y luminoso.",
        href: "/carillas-dentales",
    },
    {
        id: "03",
        tratamiento: "Blanqueamiento Profesional",
        antes: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=800&auto=format&fit=crop",
        despues: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
        paciente: "Caso A.C.",
        resultado: "Mejora visible del color con criterio clínico y sin sobreblanquear.",
        href: "/estetica-dental",
    },
];

function CasoCard({ caso }: { caso: typeof casos[0] }) {
    const [hover, setHover] = useState(false);

    return (
        <Link
            href={caso.href}
            className="group cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Imágenes antes/después */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-oro/10 mb-5">

                {/* Imagen ANTES */}
                <Image
                    src={caso.antes}
                    alt={`Antes — ${caso.tratamiento}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hover ? "opacity-0" : "opacity-100"}`}
                />

                {/* Imagen DESPUÉS */}
                <Image
                    src={caso.despues}
                    alt={`Después — ${caso.tratamiento}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`}
                />

                {/* Badge dinámico */}
                <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 font-manrope text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-300 ${
                        hover
                            ? "bg-oro text-carbon"
                            : "bg-carbon/70 backdrop-blur-sm text-crema border border-crema/20"
                    }`}>
                        {hover ? "Después" : "Antes"}
                    </span>
                </div>

                {/* Hover hint */}
                {!hover && (
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-crema/60 font-manrope text-xs">Hover para ver resultado →</span>
                    </div>
                )}

            </div>

            {/* Info */}
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-oro/60 font-manrope text-xs uppercase tracking-widest block mb-1">
                        {caso.id} — {caso.paciente}
                    </span>
                    <span className="text-crema font-manrope font-medium text-sm">
                        {caso.tratamiento}
                    </span>
                    <span className="text-crema/45 font-manrope text-xs leading-relaxed block mt-2 max-w-[16rem]">
                        {caso.resultado}
                    </span>
                </div>
                <span className="text-crema/30 font-manrope text-xs group-hover:text-oro/60 transition-colors">
                    @drarielmerino
                </span>
            </div>
        </Link>
    );
}

export default function Archive() {
    const decisionLinks = [
        {
            label: "Precio de Carillas",
            desc: "Entendé qué cambia el valor real según material, piezas y complejidad.",
            href: "/precio-carillas-dentales-buenos-aires",
        },
        {
            label: "Porcelana vs Resina",
            desc: "Compará duración, refinamiento visual y mantenimiento antes de elegir.",
            href: "/carillas-de-porcelana-vs-resina",
        },
        {
            label: "Carillas vs Alineadores",
            desc: "Descubrí si necesitás cambiar forma o mover dientes antes de diseñar la sonrisa.",
            href: "/carillas-vs-alineadores",
        },
    ];

    return (
        <section id="casos" className="py-32 px-4 bg-carbon-soft relative z-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
                    <div>
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                            Resultados reales
                        </span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                            Antes /{" "}
                            <span className="font-cormorant italic text-oro">Después</span>
                        </h2>
                    </div>
                    <p className="text-crema-muted font-manrope text-lg font-light leading-relaxed">
                        Cada caso es firmado con nombre y apellido. Sin filtros, sin stock, sin edición digital de resultados.
                        Pasá el mouse sobre cada imagen para ver la transformación y hacé click para explorar el tratamiento relacionado.
                    </p>
                </div>

                {/* Grid de casos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {casos.map((caso) => (
                        <CasoCard key={caso.id} caso={caso} />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Vi%20los%20casos%20antes%2Fdespu%C3%A9s%20y%20quiero%20agendar%20una%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-all hover:scale-[1.02]"
                    >
                        Quiero un resultado así
                        <span>→</span>
                    </a>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {decisionLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="rounded-2xl border border-oro/12 bg-carbon px-5 py-5 transition-colors hover:border-oro/30 group"
                        >
                            <span className="text-crema font-manrope font-medium text-sm block mb-2 group-hover:text-oro transition-colors">
                                {item.label}
                            </span>
                            <span className="text-crema/45 font-manrope text-xs leading-relaxed block">
                                {item.desc}
                            </span>
                            <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-3 block">→</span>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
