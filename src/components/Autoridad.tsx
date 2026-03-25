"use client";

import { useEffect, useState } from "react";

const REVIEWS = [
    { name: "María L.", text: "El resultado superó todas mis expectativas. La sonrisa que siempre quise, después de años esperándola." },
    { name: "Santiago R.", text: "Profesionalismo absoluto. El Dr. Merino explica cada paso con total claridad y confianza." },
    { name: "Valentina C.", text: "Vine especialmente de Córdoba y valió cada kilómetro. Un antes y un después en mi vida." },
    { name: "Juliana M.", text: "Las carillas quedaron perfectas. Natural, elegante, exactamente lo que pedí." },
    { name: "Rodrigo P.", text: "La primera consulta fue sin presión ni compromiso. Me fui con el tratamiento ideal para mi caso." },
];

function Stars() {
    return (
        <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-oro" viewBox="0 0 24 24" fill="currentColor">
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
            {/* Stem */}
            <path d="M55 65 Q38 42 24 20" stroke="#F2B90D" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <path d="M55 65 Q38 88 24 110" stroke="#F2B90D" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

            {/* Upper leaves */}
            <ellipse cx="38" cy="40" rx="9" ry="4" transform="rotate(-42 38 40)" fill="#F2B90D" opacity="0.45" />
            <ellipse cx="27" cy="24" rx="8" ry="3.5" transform="rotate(-52 27 24)" fill="#F2B90D" opacity="0.38" />
            <ellipse cx="47" cy="52" rx="8" ry="3.5" transform="rotate(-28 47 52)" fill="#F2B90D" opacity="0.40" />

            {/* Center jewel */}
            <circle cx="55" cy="65" r="3.5" fill="#F2B90D" opacity="0.6" />
            <circle cx="55" cy="65" r="1.5" fill="#F2B90D" opacity="0.9" />

            {/* Lower leaves */}
            <ellipse cx="47" cy="78" rx="8" ry="3.5" transform="rotate(28 47 78)" fill="#F2B90D" opacity="0.40" />
            <ellipse cx="38" cy="90" rx="9" ry="4" transform="rotate(42 38 90)" fill="#F2B90D" opacity="0.45" />
            <ellipse cx="27" cy="106" rx="8" ry="3.5" transform="rotate(52 27 106)" fill="#F2B90D" opacity="0.38" />

            {/* Leaf vein lines */}
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
                setReviewIdx(prev => (prev + 1) % REVIEWS.length);
                setVisible(true);
            }, 350);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-4 bg-carbon border-y border-oro/10 relative overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-oro/0 to-oro/60" />

            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs">
                        Reconocimiento & Autoridad
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                    {/* ── GOOGLE 4.9 — comet border + rotating reviews ── */}
                    <div className="relative rounded-2xl p-[1.5px] overflow-hidden">
                        {/* Comet orbital */}
                        <div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                                background: "conic-gradient(from 0deg, transparent 0deg, transparent 305deg, rgba(242,185,13,0.08) 320deg, rgba(242,185,13,0.4) 338deg, rgba(242,185,13,0.9) 350deg, rgba(255,248,210,1) 355deg, rgba(242,185,13,0.6) 358deg, transparent 360deg)",
                                animation: "comet-orbit 3.5s linear infinite",
                            }}
                        />
                        {/* Ambient glow */}
                        <div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                                background: "radial-gradient(ellipse at 50% 50%, rgba(242,185,13,0.06) 0%, transparent 70%)",
                                animation: "aura-pulse 4s ease-in-out infinite",
                            }}
                        />

                        {/* Card */}
                        <div className="relative bg-carbon-soft rounded-[calc(1rem-1.5px)] p-8 h-full flex flex-col items-center text-center">
                            <Stars />

                            <div className="mt-5 mb-1 leading-none">
                                <span className="text-[5.5rem] md:text-[7rem] font-manrope font-light text-oro leading-none">
                                    4.9
                                </span>
                            </div>

                            <div className="text-crema/40 font-manrope uppercase tracking-[0.35em] text-xs mb-8">
                                Google Reviews · 87 reseñas verificadas
                            </div>

                            {/* Rotating review */}
                            <div
                                className="border-t border-oro/10 pt-6 w-full flex flex-col items-center"
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(10px)",
                                    transition: "opacity 0.35s ease, transform 0.35s ease",
                                }}
                            >
                                <p className="text-crema/80 font-manrope text-sm leading-relaxed mb-4 italic max-w-xs">
                                    &ldquo;{REVIEWS[reviewIdx].text}&rdquo;
                                </p>
                                <span className="text-oro/50 font-manrope text-xs uppercase tracking-widest">
                                    — {REVIEWS[reviewIdx].name}
                                </span>
                            </div>

                            {/* Dot indicators */}
                            <div className="flex gap-2 mt-6">
                                {REVIEWS.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setVisible(false);
                                            setTimeout(() => { setReviewIdx(i); setVisible(true); }, 350);
                                        }}
                                        className="h-1.5 rounded-full transition-all duration-300"
                                        style={{
                                            width: i === reviewIdx ? "1.5rem" : "0.375rem",
                                            background: i === reviewIdx ? "#F2B90D" : "rgba(242,185,13,0.25)",
                                        }}
                                        aria-label={`Review ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── FORBES — laurel crown ── */}
                    <div className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft relative overflow-hidden group hover:border-oro/30 transition-colors flex flex-col">

                        {/* Glow background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(242,185,13,0.07) 0%, transparent 65%)" }} />

                        {/* Laurel crown badge */}
                        <div className="relative flex items-center justify-center gap-2 mb-8">
                            <LaurelBranch />

                            <div className="text-center px-3">
                                <div
                                    className="font-manrope font-black text-oro leading-none tracking-[0.18em]"
                                    style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)" }}
                                >
                                    FORBES
                                </div>
                                <div className="text-oro/45 font-manrope uppercase tracking-[0.5em] text-[9px] mt-1.5">
                                    Argentina
                                </div>
                                {/* Thin divider lines */}
                                <div className="flex items-center gap-2 mt-2 justify-center">
                                    <div className="h-px w-8 bg-oro/30" />
                                    <div className="w-1 h-1 rounded-full bg-oro/40" />
                                    <div className="h-px w-8 bg-oro/30" />
                                </div>
                            </div>

                            <LaurelBranch flip />
                        </div>

                        <div className="relative flex-1 flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4 leading-snug">
                                La única clínica odontológica de Argentina{" "}
                                <span className="font-cormorant italic text-oro">reconocida por Forbes.</span>
                            </h3>
                            <p className="text-crema-muted font-manrope text-sm leading-relaxed">
                                No es un premio de industria. Es reconocimiento editorial en el medio de negocios más exigente del mundo — por el impacto real que generamos en la vida de nuestros pacientes.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-px bg-oro/10 border border-oro/10 rounded-2xl overflow-hidden">
                    {[
                        { number: "10+", label: "Años de experiencia", sub: "Dr. Ariel Merino" },
                        { number: "Miss Universo", label: "Sonrisa más estudiada", sub: "del mundo" },
                        { number: "100%", label: "Casos reales", sub: "Sin stock, sin filtros" },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-carbon px-4 py-8 text-center hover:bg-carbon-soft transition-colors">
                            <div className="text-2xl md:text-3xl font-manrope font-light text-oro mb-2 leading-tight">
                                {stat.number}
                            </div>
                            <div className="text-crema font-manrope font-medium text-xs mb-1">{stat.label}</div>
                            <div className="text-crema-muted font-manrope text-xs">{stat.sub}</div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-oro/0 to-oro/60" />
        </section>
    );
}
