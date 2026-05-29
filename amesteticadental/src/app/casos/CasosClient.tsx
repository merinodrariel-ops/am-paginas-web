"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getCasosPublicados, type Categoria } from "@/data/casos";

const FILTROS: { label: string; value: Categoria | "Todos" }[] = [
    { label: "Todos", value: "Todos" },
    { label: "Diseño de Sonrisa", value: "Diseño de sonrisa" },
    { label: "Carillas", value: "Carillas de porcelana" },
    { label: "Lentes de Contacto", value: "Lentes de contacto dental" },
    { label: "Bruxismo", value: "Bruxismo" },
    { label: "Alineadores", value: "Alineadores" },
    { label: "Implantes", value: "Implantes" },
    { label: "Agenesia", value: "Agenesia" },
    { label: "Diastemas", value: "Diastemas" },
    { label: "Rehabilitación", value: "Rehabilitación oral" },
];

export default function CasosClient() {
    const todos = getCasosPublicados();
    const [filtro, setFiltro] = useState<Categoria | "Todos">("Todos");

    const casos = filtro === "Todos"
        ? todos
        : todos.filter((c) => c.categorias.includes(filtro as Categoria));

    return (
        <main className="bg-carbon min-h-screen pt-32 pb-32 px-4 font-manrope">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16">
                    <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Casos Clínicos</span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                        <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight">
                            Cada caso,{" "}
                            <span className="font-cormorant italic text-oro">una historia.</span>
                        </h1>
                        <p className="text-crema/60 text-lg font-light leading-relaxed">
                            Documentamos el diagnóstico, el plan de tratamiento y el resultado. Sin filtros, sin stock.
                        </p>
                    </div>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {FILTROS.map((f) => {
                        const count = f.value === "Todos"
                            ? todos.length
                            : todos.filter((c) => c.categorias.includes(f.value as Categoria)).length;
                        if (count === 0 && f.value !== "Todos") return null;
                        const active = filtro === f.value;
                        return (
                            <button
                                key={f.value}
                                onClick={() => setFiltro(f.value)}
                                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-manrope text-[10px] uppercase tracking-[0.3em] transition-all duration-200 ${
                                    active
                                        ? "bg-oro text-carbon border border-oro"
                                        : "border border-crema/10 text-crema/40 hover:border-oro/30 hover:text-oro/70"
                                }`}
                            >
                                {f.label}
                                <span className={`text-[9px] ${active ? "text-carbon/60" : "text-crema/25"}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                {casos.length === 0 ? (
                    <p className="text-crema/30 text-center py-20">No hay casos publicados para esta categoría todavía.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {casos.map((caso) => (
                            <Link key={caso.slug} href={`/casos/${caso.slug}`} className="group block">
                                <article className="bg-carbon border border-crema/5 rounded-2xl overflow-hidden hover:border-oro/20 transition-colors duration-300">
                                    <div className="relative aspect-square overflow-hidden">
                                        <Image
                                            src={caso.fotoPortada.src}
                                            alt={caso.fotoPortada.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent" />
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-flex items-center gap-1.5 border border-oro/30 bg-carbon/80 backdrop-blur-sm rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro">
                                                {caso.duracion}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {caso.categorias.slice(0, 3).map((cat) => (
                                                <span key={cat} className="font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/60">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="font-manrope font-light text-crema text-lg leading-snug mb-2 group-hover:text-oro transition-colors duration-200">
                                            {caso.titulo}
                                        </h2>
                                        <p className="font-manrope text-crema/40 text-sm leading-relaxed line-clamp-2">
                                            {caso.subtitulo}
                                        </p>
                                        <div className="mt-5 flex items-center gap-2 text-oro font-manrope text-xs uppercase tracking-widest">
                                            Ver caso completo
                                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="mt-24 text-center">
                    <p className="text-crema/40 font-manrope text-sm mb-6">¿Querés saber si tu caso tiene solución?</p>
                    <a
                        href="https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Vi%20los%20casos%20cl%C3%ADnicos%20y%20me%20gustar%C3%ADa%20una%20consulta."
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro/90 transition-all"
                    >
                        Agendá tu consulta <span>→</span>
                    </a>
                </div>

            </div>
        </main>
    );
}
