"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Caso, Categoria } from "@/data/casos";

const FILTROS_EN: Record<string, string> = {
    "Todos": "All",
    "Diseño de Sonrisa": "Smile Design",
    "Carillas": "Veneers",
    "Lentes de Contacto": "Ultra-Thin Veneers",
    "Bruxismo": "Bruxism",
    "Alineadores": "Aligners",
    "Implantes": "Implants",
    "Agenesia": "Agenesis",
    "Diastemas": "Diastemas",
    "Gingivectomía": "Gum Contouring",
    "Rehabilitación": "Full Rehab",
};

const UI = {
    es: {
        eyebrow: "Antes y después reales",
        h1a: "Casos clínicos",
        h1b: "documentados.",
        lead: "La galería de antes y después está organizada por caso real: diagnóstico, técnica, duración, fotos y seguimiento. Sin stock, sin filtros.",
        empty: "No hay casos publicados para esta categoría todavía.",
        featured: "Destacado",
        viewCase: "Ver caso completo",
        ctaQ: "¿Querés saber qué tratamiento se adapta a tu caso?",
        ctaBtn: "Agendá tu consulta",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Vi%20los%20casos%20cl%C3%ADnicos%20y%20me%20gustar%C3%ADa%20una%20consulta.",
    },
    en: {
        eyebrow: "Real before & afters",
        h1a: "Documented",
        h1b: "clinical cases.",
        lead: "Every before & after in this gallery is a real, documented case: diagnosis, technique, timeline, photos and follow-up. No stock images, no filters. Case write-ups are in Spanish — send us a message and we'll walk you through any case in English.",
        empty: "No published cases in this category yet.",
        featured: "Featured",
        viewCase: "View full case",
        ctaQ: "Want to know which treatment fits your case?",
        ctaBtn: "Book your consultation",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20saw%20the%20clinical%20cases%20and%20I'd%20like%20a%20consultation.",
    },
} as const;

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
    { label: "Gingivectomía", value: "Gingivectomía láser" },
    { label: "Rehabilitación", value: "Rehabilitación oral" },
];

export default function CasosClient({ todos, fijos = [], lang = "es" }: { todos: Caso[]; fijos?: string[]; lang?: "es" | "en" }) {
    const t = UI[lang];
    const filterLabel = (label: string) => (lang === "en" ? FILTROS_EN[label] || label : label);
    const [filtro, setFiltro] = useState<Categoria | "Todos">("Todos");
    const fijosSet = new Set(fijos);

    const casos = filtro === "Todos"
        ? todos
        : todos.filter((c) => c.categorias.includes(filtro as Categoria));

    return (
        <main className="bg-carbon min-h-screen pt-32 pb-32 px-4 font-manrope">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16">
                    <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">{t.eyebrow}</span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                        <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight">
                            {t.h1a}{" "}
                            <span className="font-cormorant italic text-oro">{t.h1b}</span>
                        </h1>
                        <p className="text-crema/60 text-lg font-light leading-relaxed">
                            {t.lead}
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
                                {filterLabel(f.label)}
                                <span className={`text-[9px] ${active ? "text-carbon/60" : "text-crema/25"}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                {casos.length === 0 ? (
                    <p className="text-crema/30 text-center py-20">{t.empty}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {casos.map((caso) => {
                            const destacado = fijosSet.has(caso.slug);
                            return (
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
                                        {destacado && (
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-flex items-center gap-1.5 border border-oro/40 bg-carbon/80 backdrop-blur-sm rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro">
                                                    <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="currentColor" aria-hidden="true">
                                                        <path d="M14.12 2.88a2 2 0 0 0-3.06.26L8.7 6.36l-3.9 1.2a1 1 0 0 0-.42 1.66l3.2 3.2-4.3 5.87a.6.6 0 0 0 .84.84l5.87-4.3 3.2 3.2a1 1 0 0 0 1.66-.42l1.2-3.9 3.22-2.36a2 2 0 0 0 .26-3.06z" />
                                                    </svg>
                                                    {t.featured}
                                                </span>
                                            </div>
                                        )}
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
                                            {t.viewCase}
                                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                            );
                        })}
                    </div>
                )}

                <div className="mt-24 text-center">
                    <p className="text-crema/40 font-manrope text-sm mb-6">{t.ctaQ}</p>
                    <a
                        href={t.wa}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro/90 transition-all"
                    >
                        {t.ctaBtn} <span>→</span>
                    </a>
                </div>

            </div>
        </main>
    );
}
