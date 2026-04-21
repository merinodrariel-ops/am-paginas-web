"use client";

import Image from "next/image";
import { useMemo, useState, useCallback } from "react";

const testimoniosEscritos = [
    {
        nombre: "Agustina Zacariaz",
        tratamiento: "Carillas de resina",
        texto: "Fui a realizarme carillas de resina en mis dos dientes frontales, la verdad estoy muy feliz con los resultados.",
    },
    {
        nombre: "Santiago Ferraro",
        tratamiento: "Experiencia general",
        texto: "Mi experiencia fue genial, desde ingresar al consultorio hasta irme, la atencion no solo de Ari, si no de todas las chicas que trabajan con el es excelente.",
    },
    {
        nombre: "Valentina Oyarzun",
        tratamiento: "Blanqueamiento",
        texto: "Hace tiempo queria ir a la consulta con el doctor y organizamos para realizarme un blanqueamiento, me quedo hermoso el trabajo, feliz.",
    },
    {
        nombre: "Camila Rossi",
        tratamiento: "Transformacion de sonrisa",
        texto: "La unica pregunta que me hago hoy es por que no me anime antes a regalarme esta sonrisa que cambio mi vida.",
        destacado: true,
    },
    {
        nombre: "Julieta Marquez",
        tratamiento: "Carillas premium",
        texto: "Nunca senti que me vendieran algo. Me explicaron todo y el resultado se vio natural desde el primer momento.",
    },
];

const videosTestimonios = [
    { id: "video-1", youtubeId: "oqcaGGGAs5Y", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
    { id: "video-2", youtubeId: "vlWiV96jQmY", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
    { id: "video-3", youtubeId: "UxmkQbFERcw", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
    { id: "video-4", youtubeId: "DdBeH4XaJUY", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
    { id: "video-5", youtubeId: "bMwbSxNCZIA", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
];

function Stars({ small = false }: { small?: boolean }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={small ? "h-3.5 w-3.5 text-oro" : "h-4 w-4 text-oro"}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

function ReviewCard({ review, featured = false }: { review: (typeof testimoniosEscritos)[0]; featured?: boolean }) {
    return (
        <article
            className={featured
                ? "relative min-w-[20rem] max-w-[36rem] rounded-[2rem] border border-oro/24 bg-[linear-gradient(180deg,rgba(242,185,13,0.1),rgba(13,13,13,0.02))] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
                : "relative min-w-[19rem] max-w-[24rem] rounded-[1.75rem] border border-white/6 bg-carbon-soft/92 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-sm"
            }
        >
            <div className="mb-5 flex items-start gap-4">
                <div className={featured
                    ? "flex h-12 w-12 flex-none items-center justify-center rounded-full border border-oro/25 bg-oro/10"
                    : "flex h-11 w-11 flex-none items-center justify-center rounded-full border border-oro/15 bg-oro/8"}>
                    <span className="font-manrope text-sm font-semibold text-oro">{review.nombre.charAt(0)}</span>
                </div>
                <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center justify-between gap-3">
                        <div>
                            <p className="font-manrope text-sm font-medium text-crema md:text-[15px]">{review.nombre}</p>
                            <p className="font-manrope text-[11px] uppercase tracking-[0.24em] text-oro/55">{review.tratamiento}</p>
                        </div>
                        <Stars small />
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/3 px-3 py-1 font-manrope text-[10px] uppercase tracking-[0.24em] text-crema/45">
                        <span className="h-1.5 w-1.5 rounded-full bg-oro" />
                        Google review
                    </div>
                </div>
            </div>

            <p className={featured
                ? "font-manrope text-lg leading-relaxed text-crema"
                : "font-manrope text-sm leading-relaxed text-crema/78"}>
                &ldquo;{review.texto}&rdquo;
            </p>
        </article>
    );
}

function VideoCard({ video }: { video: typeof videosTestimonios[0] }) {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="group relative aspect-[9/16] overflow-hidden rounded-[1.6rem] border border-oro/8 bg-carbon-soft">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[1.6rem] p-px opacity-55 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background:
                        "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(242,185,13,0.05) 320deg, rgba(249,220,106,0.32) 344deg, rgba(255,250,214,0.7) 352deg, transparent 360deg)",
                    animation: "comet-orbit 9.5s linear infinite",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />
            <div className="pointer-events-none absolute inset-[1.5px] rounded-[calc(1.6rem-1.5px)] bg-carbon-soft/70 backdrop-blur-[1px]" />
            {!playing ? (
                <>
                    <Image
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.nombre}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="absolute inset-[1.5px] h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-[calc(1.6rem-1.5px)] object-cover brightness-[0.72]"
                        unoptimized
                    />
                    <div className="absolute inset-[1.5px] rounded-[calc(1.6rem-1.5px)] bg-gradient-to-b from-carbon/18 via-transparent to-carbon/76" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={() => setPlaying(true)}
                            className="relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-105"
                            aria-label="Reproducir testimonio"
                        >
                            <span className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,#8f5b11_0%,#c88412_18%,#f0b10d_36%,#fff0b1_52%,#f4c646_68%,#8f5b11_100%)] shadow-[0_0_22px_rgba(242,185,13,0.26)]" />
                            <span className="absolute inset-[-6px] rounded-full border border-oro/30 animate-pulse opacity-70" />
                            <svg className="relative z-10 ml-1 h-6 w-6 text-carbon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute right-0 bottom-0 left-0 p-5">
                        <span className="mb-1 block font-manrope text-xs uppercase tracking-widest text-oro/70">
                            {video.tratamiento}
                        </span>
                        <span className="font-manrope text-sm font-medium text-crema">{video.nombre}</span>
                    </div>
                </>
            ) : (
                <iframe
                    className="absolute inset-[1.5px] h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-[calc(1.6rem-1.5px)]"
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.nombre}
                />
            )}
        </div>
    );
}

// Visible slides: 3 on desktop, 1 on mobile
const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE  = 1;

function VideoCarousel() {
    const [idx, setIdx] = useState(0);
    const total = videosTestimonios.length;

    const maxIdx = useCallback(
        (visible: number) => Math.max(0, total - visible),
        [total]
    );

    const prev = () => setIdx((i) => Math.max(0, i - 1));
    const next = (visible: number) => setIdx((i) => Math.min(maxIdx(visible), i + 1));

    // offset as % of track width
    const offsetDesktop = `calc(${idx} * (100% / ${VISIBLE_DESKTOP}) * -1)`;
    const offsetMobile  = `calc(${idx} * -100%)`;

    const canPrev = idx > 0;

    return (
        <div className="relative">
            {/* ── Carousel track ── */}
            <div className="overflow-hidden">
                {/* Mobile: 1 visible */}
                <div
                    className="flex md:hidden transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(${offsetMobile})` }}
                >
                    {videosTestimonios.map((video) => (
                        <div key={video.id} className="flex-shrink-0 w-full px-4">
                            <VideoCard video={video} />
                        </div>
                    ))}
                </div>

                {/* Desktop: 3 visible */}
                <div
                    className="hidden md:flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(${offsetDesktop})` }}
                >
                    {videosTestimonios.map((video) => (
                        <div
                            key={video.id}
                            className="flex-shrink-0 px-3"
                            style={{ width: `calc(100% / ${VISIBLE_DESKTOP})` }}
                        >
                            <VideoCard video={video} />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Navigation ── */}
            <div className="mt-8 flex items-center justify-between px-4 md:px-2">
                {/* Dots */}
                <div className="flex gap-2">
                    {/* Mobile dots: 4 */}
                    {videosTestimonios.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`md:hidden h-1.5 rounded-full transition-all duration-300 ${
                                i === idx ? "w-6 bg-oro" : "w-1.5 bg-crema/20"
                            }`}
                            aria-label={`Ir al testimonio ${i + 1}`}
                        />
                    ))}
                    {/* Desktop dots: 2 positions */}
                    {Array.from({ length: maxIdx(VISIBLE_DESKTOP) + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`hidden md:block h-1.5 rounded-full transition-all duration-300 ${
                                i === idx ? "w-6 bg-oro" : "w-1.5 bg-crema/20"
                            }`}
                            aria-label={`Ir a la posición ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                    <button
                        onClick={prev}
                        disabled={!canPrev}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-oro/20 text-crema/60 transition-all hover:border-oro/50 hover:text-oro disabled:opacity-20 disabled:cursor-not-allowed"
                        aria-label="Anterior"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    {/* Mobile: max = total-1 | Desktop: max = total-3 */}
                    <button
                        onClick={() => next(VISIBLE_MOBILE)}
                        disabled={idx >= maxIdx(VISIBLE_MOBILE)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-oro/20 text-crema/60 transition-all hover:border-oro/50 hover:text-oro disabled:opacity-20 disabled:cursor-not-allowed"
                        aria-label="Siguiente"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Testimonios() {
    const marqueeTrack = useMemo(() => [...testimoniosEscritos, ...testimoniosEscritos], []);
    const marqueeTrackReverse = useMemo(() => [...testimoniosEscritos].reverse().concat([...testimoniosEscritos].reverse()), []);

    return (
        <>
            {/* ── BLOQUE 1: Testimonios en video ── */}
            <section id="testimonios" className="relative z-10 bg-carbon-soft border-y border-oro/10 px-4 py-24">
                <div className="mx-auto max-w-[88rem]">
                    <div className="mb-12 max-w-2xl px-4 md:px-8">
                        <span className="mb-4 block font-manrope text-[10px] uppercase tracking-[0.4em] text-oro">
                            Testimonios
                        </span>
                        <h2 className="font-manrope text-3xl font-light leading-tight text-crema md:text-4xl">
                            Pacientes reales,{" "}
                            <span className="font-cormorant italic text-oro">en sus propias palabras</span>
                        </h2>
                    </div>
                    <div className="px-1 md:px-5">
                        <VideoCarousel />
                    </div>
                </div>
            </section>

            {/* ── BLOQUE 2: Google Reviews ── */}
            <section id="reviews" className="relative z-10 overflow-hidden bg-carbon px-4 py-24">
                <div className="mx-auto max-w-[88rem]">

                    {/* Header */}
                    <div className="mb-14 px-4 md:px-8">
                        <span className="mb-5 inline-flex rounded-full border border-oro/15 bg-oro/8 px-4 py-1.5 font-manrope text-[10px] uppercase tracking-[0.38em] text-oro-light">
                            Google Reviews
                        </span>
                        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <a
                                href="https://g.page/r/CQ3df5Xn-J6oEBM/review"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/rating flex items-end gap-5 transition-opacity hover:opacity-80"
                            >
                                <span className="font-manrope text-[5rem] leading-none font-light text-crema transition-colors group-hover/rating:text-oro md:text-[7rem]">4.9</span>
                                <div className="space-y-2 pb-2">
                                    <Stars />
                                    <p className="font-manrope text-sm font-medium text-crema">
                                        +120 reseñas verificadas
                                    </p>
                                    <p className="font-manrope text-[11px] uppercase tracking-[0.28em] text-crema/40">
                                        Google Maps · Puerto Madero · ver todas →
                                    </p>
                                </div>
                            </a>
                            <h2 className="max-w-lg font-manrope text-2xl font-light leading-snug text-crema/70 md:text-3xl md:text-right">
                                Lo que dicen quienes ya{" "}
                                <span className="font-cormorant italic text-oro">confiaron en nosotros</span>
                            </h2>
                        </div>
                    </div>

                    {/* Marquee fila 1 */}
                    <div
                        className="mb-6 overflow-hidden"
                        style={{
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        }}
                    >
                        <div className="reviews-marquee group flex gap-6">
                            <div className="reviews-marquee-track flex min-w-max gap-6 group-hover:[animation-play-state:paused]">
                                {marqueeTrack.map((review, index) => (
                                    <ReviewCard key={`${review.nombre}-${index}`} review={review} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Marquee fila 2 */}
                    <div
                        className="overflow-hidden"
                        style={{
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                        }}
                    >
                        <div className="reviews-marquee group flex gap-6">
                            <div className="reviews-marquee-track-reverse flex min-w-max gap-6 group-hover:[animation-play-state:paused]">
                                {marqueeTrackReverse.map((review, index) => (
                                    <ReviewCard key={`${review.nombre}-reverse-${index}`} review={review} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Link a Google */}
                    <div className="mt-10 px-4 text-center md:px-8">
                        <a
                            href="https://g.page/r/CQ3df5Xn-J6oEBM/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-manrope text-xs text-crema/35 hover:text-crema/60 transition-colors"
                        >
                            ★ Ver todas las reseñas en Google →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
