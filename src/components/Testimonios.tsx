"use client";

import { useState } from "react";

// Testimonios escritos reales del sitio actual
const testimoniosEscritos = [
    {
        nombre: "Agustina Zacariaz",
        tratamiento: "Carillas de resina",
        texto: "Fui a realizarme carillas de resina en mis dos dientes frontales, la verdad estoy muy feliz con los resultados.",
    },
    {
        nombre: "Santiago Ferraro",
        tratamiento: "Experiencia general",
        texto: "Mi experiencia fue genial, desde ingresar al consultorio hasta irme, la atención no solo de Ari, si no de todas las chicas que trabajan con él es excelente.",
    },
    {
        nombre: "Valentina Oyarzun",
        tratamiento: "Blanqueamiento",
        texto: "Hace tiempo quería ir a la consulta con el doctor y organizamos para realizarme un blanqueamiento, me quedó hermoso el trabajo, ¡feliz!",
    },
    {
        nombre: "Camila Rossi",
        tratamiento: "Transformación de sonrisa",
        texto: "La única pregunta que me hago hoy es por qué no me animé antes a regalarme esta sonrisa que cambió mi vida.",
        destacado: true,
    },
];

// Videos de testimonios reales — Reels @amesteticadental / @drarielmerino
const videosTestimonios = [
    {
        id: "video-1",
        youtubeId: "oqcaGGGAs5Y",
        nombre: "Caso real",
        tratamiento: "Testimonio de paciente",
    },
    {
        id: "video-2",
        youtubeId: "vlWiV96jQmY",
        nombre: "Caso real",
        tratamiento: "Testimonio de paciente",
    },
    {
        id: "video-3",
        youtubeId: "UxmkQbFERcw",
        nombre: "Caso real",
        tratamiento: "Testimonio de paciente",
    },
    {
        id: "video-4",
        youtubeId: "DdBeH4XaJUY",
        nombre: "Caso real",
        tratamiento: "Testimonio de paciente",
    },
];

function VideoCard({ video }: { video: typeof videosTestimonios[0] }) {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="group relative aspect-[9/16] rounded-[1.6rem] overflow-hidden bg-carbon-soft border border-oro/8">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[1.6rem] opacity-55 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(242,185,13,0.05) 320deg, rgba(249,220,106,0.32) 344deg, rgba(255,250,214,0.7) 352deg, transparent 360deg)",
                    animation: "comet-orbit 9.5s linear infinite",
                }}
            />
            <div className="pointer-events-none absolute inset-[1.5px] rounded-[calc(1.6rem-1.5px)] bg-carbon-soft/70 backdrop-blur-[1px]" />
            {!playing ? (
                <>
                    {/* Thumbnail real de YouTube */}
                    <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.nombre}
                        className="absolute inset-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)] object-cover brightness-[0.72] rounded-[calc(1.6rem-1.5px)]"
                    />
                    <div className="absolute inset-[1.5px] rounded-[calc(1.6rem-1.5px)] bg-gradient-to-b from-carbon/18 via-transparent to-carbon/76" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={() => setPlaying(true)}
                            className="relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-105"
                            aria-label="Reproducir testimonio"
                        >
                            <span className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,#8f5b11_0%,#c88412_18%,#f0b10d_36%,#fff0b1_52%,#f4c646_68%,#8f5b11_100%)] shadow-[0_0_22px_rgba(242,185,13,0.26)]" />
                            <span
                                className="absolute inset-[-5px] rounded-full opacity-70"
                                style={{
                                    background: "conic-gradient(from 0deg, transparent 0deg, transparent 308deg, rgba(242,185,13,0.06) 326deg, rgba(255,250,214,0.9) 350deg, transparent 360deg)",
                                    animation: "comet-orbit 8.5s linear infinite",
                                }}
                            />
                            <svg className="relative z-10 ml-1 h-6 w-6 text-carbon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="text-oro/70 font-manrope text-xs uppercase tracking-widest block mb-1">
                            {video.tratamiento}
                        </span>
                        <span className="text-crema font-manrope text-sm font-medium">
                            {video.nombre}
                        </span>
                    </div>
                </>
            ) : (
                <iframe
                    className="absolute inset-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)] rounded-[calc(1.6rem-1.5px)]"
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.nombre}
                />
            )}
        </div>
    );
}

export default function Testimonios() {
    return (
        <section id="testimonios" className="py-32 px-4 bg-carbon relative z-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        Casos Reales
                    </span>
                    <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                        No contamos historias.{" "}
                        <span className="font-cormorant italic text-oro">Las mostramos.</span>
                    </h2>
                    <p className="text-crema-muted font-manrope text-lg font-light">
                        Cada video es un paciente real. Cada testimonio es una vida que cambió. Sin edición de sonrisas, sin filtros, sin stock.
                    </p>
                </div>

                {/* Videos de testimonios — verticales estilo Reels */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {videosTestimonios.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>

                {/* Separador */}
                <div className="flex items-center gap-6 mb-20">
                    <div className="flex-1 h-px bg-oro/10" />
                    <span className="text-oro/40 font-manrope text-xs uppercase tracking-widest">Lo que dicen en sus palabras</span>
                    <div className="flex-1 h-px bg-oro/10" />
                </div>

                {/* Testimonios escritos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimoniosEscritos.map((t) => (
                        <div
                            key={t.nombre}
                            className={`rounded-2xl p-8 border transition-colors ${
                                t.destacado
                                    ? "border-oro/40 bg-oro/5"
                                    : "border-oro/10 bg-carbon-soft hover:border-oro/20"
                            }`}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                {/* Avatar placeholder */}
                                <div className="w-10 h-10 rounded-full bg-oro/20 flex items-center justify-center flex-none">
                                    <span className="text-oro font-manrope font-semibold text-sm">
                                        {t.nombre.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-crema font-manrope font-medium text-sm">{t.nombre}</div>
                                    <div className="text-oro/60 font-manrope text-xs">{t.tratamiento}</div>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3 h-3 text-oro fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className={`font-manrope leading-relaxed text-sm ${t.destacado ? "text-crema text-base" : "text-crema/70"}`}>
                                &ldquo;{t.texto}&rdquo;
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
