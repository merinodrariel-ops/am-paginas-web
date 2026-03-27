"use client";

import { useEffect, useState } from "react";

const REVIEWS = [
    { name: "Maria L.", text: "El resultado supero todas mis expectativas y me devolvio seguridad al sonreir." },
    { name: "Santiago R.", text: "Profesionalismo absoluto. Cada paso fue claro, cuidado y sin improvisaciones." },
    { name: "Valentina C.", text: "Vine de Cordoba y valio cada kilometro. El cambio se noto desde el primer dia." },
    { name: "Juliana M.", text: "Las carillas quedaron naturales, elegantes y exactamente como las imagine." },
    { name: "Rodrigo P.", text: "La consulta fue honesta, sin presion, y sali con un plan hecho para mi caso." },
];

function Stars() {
    return (
        <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-oro" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

function LaurelBranch({ flip = false }: { flip?: boolean }) {
    return (
        <svg
            viewBox="0 0 70 130"
            className="h-24 w-auto"
            fill="none"
            style={{ transform: flip ? "scaleX(-1)" : undefined }}
        >
            <path d="M55 65 Q38 42 24 20" stroke="#F2B90D" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <path d="M55 65 Q38 88 24 110" stroke="#F2B90D" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <ellipse cx="38" cy="40" rx="9" ry="4" transform="rotate(-42 38 40)" fill="#F2B90D" opacity="0.45" />
            <ellipse cx="27" cy="24" rx="8" ry="3.5" transform="rotate(-52 27 24)" fill="#F2B90D" opacity="0.38" />
            <ellipse cx="47" cy="52" rx="8" ry="3.5" transform="rotate(-28 47 52)" fill="#F2B90D" opacity="0.40" />
            <circle cx="55" cy="65" r="3.5" fill="#F2B90D" opacity="0.6" />
            <circle cx="55" cy="65" r="1.5" fill="#F2B90D" opacity="0.9" />
            <ellipse cx="47" cy="78" rx="8" ry="3.5" transform="rotate(28 47 78)" fill="#F2B90D" opacity="0.40" />
            <ellipse cx="38" cy="90" rx="9" ry="4" transform="rotate(42 38 90)" fill="#F2B90D" opacity="0.45" />
            <ellipse cx="27" cy="106" rx="8" ry="3.5" transform="rotate(52 27 106)" fill="#F2B90D" opacity="0.38" />
            <line x1="34" y1="37" x2="42" y2="43" stroke="#F2B90D" strokeWidth="0.5" opacity="0.3" />
            <line x1="34" y1="93" x2="42" y2="87" stroke="#F2B90D" strokeWidth="0.5" opacity="0.3" />
        </svg>
    );
}

export default function Autoridad() {
    const [reviewIdx, setReviewIdx] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setReviewIdx((prev) => (prev + 1) % REVIEWS.length);
                setVisible(true);
            }, 280);
        }, 4200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden border-y border-oro/10 bg-carbon px-4 py-24">
            <div className="absolute top-0 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-oro/0 to-oro/60" />

            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <span className="font-manrope text-xs uppercase tracking-[0.4em] text-oro">
                        Reconocimiento & Autoridad
                    </span>
                </div>

                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="relative overflow-hidden rounded-2xl border border-oro/18 bg-[radial-gradient(circle_at_top,rgba(242,185,13,0.12),transparent_48%),linear-gradient(180deg,rgba(22,22,22,1),rgba(13,13,13,1))] p-8">
                        <div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                                background:
                                    "conic-gradient(from 0deg, transparent 0deg, transparent 304deg, rgba(242,185,13,0.08) 322deg, rgba(255,248,210,0.85) 352deg, transparent 360deg)",
                                animation: "comet-orbit 4.2s linear infinite",
                            }}
                        />
                        <div className="relative flex h-full flex-col justify-between gap-8 rounded-[calc(1rem-1px)] border border-white/4 bg-carbon/82 p-6 backdrop-blur-sm">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <span className="mb-3 inline-flex rounded-full border border-oro/20 bg-oro/8 px-3 py-1 font-manrope text-[10px] uppercase tracking-[0.3em] text-oro-light">
                                        Google Reviews
                                    </span>
                                    <div className="flex items-end gap-4">
                                        <span className="font-manrope text-6xl font-light leading-none text-crema md:text-7xl">4.9</span>
                                        <div className="space-y-2 pb-2">
                                            <Stars />
                                            <p className="font-manrope text-[11px] uppercase tracking-[0.28em] text-crema/45">
                                                87 resenas verificadas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-oro/18 bg-oro/8 md:flex">
                                    <span className="font-cormorant text-3xl italic text-oro">G</span>
                                </div>
                            </div>

                            <div
                                className="rounded-[1.25rem] border border-oro/10 bg-carbon-soft/75 p-5"
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(8px)",
                                    transition: "opacity 0.28s ease, transform 0.28s ease",
                                }}
                            >
                                <p className="mb-3 font-manrope text-sm leading-relaxed text-crema/82 md:text-[15px]">
                                    &ldquo;{REVIEWS[reviewIdx].text}&rdquo;
                                </p>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="font-manrope text-[11px] uppercase tracking-[0.24em] text-oro/60">
                                        {REVIEWS[reviewIdx].name}
                                    </span>
                                    <span className="font-manrope text-[10px] uppercase tracking-[0.24em] text-crema/35">
                                        confianza inmediata
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-oro/20 bg-carbon-soft p-8 transition-colors hover:border-oro/30">
                        <div
                            className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(242,185,13,0.07) 0%, transparent 65%)" }}
                        />

                        <div className="relative mb-8 flex items-center justify-center gap-2">
                            <LaurelBranch />

                            <div className="px-3 text-center">
                                <div
                                    className="font-manrope text-oro leading-none tracking-[0.18em] font-black"
                                    style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)" }}
                                >
                                    FORBES
                                </div>
                                <div className="mt-1.5 font-manrope text-[9px] uppercase tracking-[0.5em] text-oro/45">
                                    Argentina
                                </div>
                                <div className="mt-2 flex items-center justify-center gap-2">
                                    <div className="h-px w-8 bg-oro/30" />
                                    <div className="h-1 w-1 rounded-full bg-oro/40" />
                                    <div className="h-px w-8 bg-oro/30" />
                                </div>
                            </div>

                            <LaurelBranch flip />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-center">
                            <h3 className="mb-4 font-manrope text-2xl leading-snug font-light text-crema md:text-3xl">
                                La unica clinica odontologica de Argentina{" "}
                                <span className="font-cormorant italic text-oro">reconocida por Forbes.</span>
                            </h3>
                            <p className="font-manrope text-sm leading-relaxed text-crema-muted">
                                No es un premio de industria. Es reconocimiento editorial en el medio de negocios mas exigente del mundo por el impacto real que generamos en la vida de nuestros pacientes.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-oro/10 bg-oro/10">
                    {[
                        { number: "10+", label: "Anos de experiencia", sub: "Dr. Ariel Merino" },
                        { number: "Miss Universo", label: "Sonrisa mas estudiada", sub: "del mundo" },
                        { number: "100%", label: "Casos reales", sub: "Sin stock, sin filtros" },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-carbon px-4 py-8 text-center transition-colors hover:bg-carbon-soft">
                            <div className="mb-2 font-manrope text-2xl leading-tight font-light text-oro md:text-3xl">
                                {stat.number}
                            </div>
                            <div className="mb-1 font-manrope text-xs font-medium text-crema">{stat.label}</div>
                            <div className="font-manrope text-xs text-crema-muted">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-t from-oro/0 to-oro/60" />
        </section>
    );
}
