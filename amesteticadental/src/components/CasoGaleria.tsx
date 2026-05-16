"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { FotoCaso } from "@/data/casos";

function VideoPlayer({ url, aspect, thumbnail }: { url: string; aspect: "16/9" | "9/16"; thumbnail?: string }) {
    const [playing, setPlaying] = useState(false);
    const embedUrl = url.includes("?") ? `${url}&autoplay=1&modestbranding=1&rel=0` : `${url}?autoplay=1&modestbranding=1&rel=0`;

    if (playing) {
        return (
            <div className={`relative w-full overflow-hidden rounded-2xl bg-carbon ${aspect === "9/16" ? "max-w-[340px] mx-auto aspect-[9/16]" : "aspect-video"}`}>
                <iframe
                    src={embedUrl}
                    title="Video del caso"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        );
    }

    return (
        <button
            onClick={() => setPlaying(true)}
            className={`group relative w-full overflow-hidden rounded-2xl bg-carbon cursor-pointer ${aspect === "9/16" ? "max-w-[340px] mx-auto aspect-[9/16] flex" : "aspect-video block"}`}
            aria-label="Reproducir video"
        >
            {/* Thumbnail */}
            {thumbnail ? (
                <Image src={thumbnail} alt="Video del caso" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 900px" />
            ) : (
                <div className="absolute inset-0 bg-carbon" />
            )}

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-carbon/50 group-hover:bg-carbon/40 transition-colors duration-300" />

            {/* Botón play AM style */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                    {/* Círculo exterior pulsante */}
                    <div className="absolute w-20 h-20 rounded-full border border-oro/30 animate-ping opacity-30" />
                    {/* Círculo principal */}
                    <div className="w-16 h-16 rounded-full border border-oro/60 bg-carbon/70 backdrop-blur-sm flex items-center justify-center group-hover:bg-oro/10 group-hover:border-oro transition-all duration-300">
                        {/* Triángulo play */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 4L16 10L7 16V4Z" fill="#C9A96E" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Badge */}
            <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5 border border-oro/25 bg-carbon/70 backdrop-blur-sm rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.28em] text-oro">
                    Ver video
                </span>
            </div>
        </button>
    );
}

interface Props {
    fotos: FotoCaso[];
    videoUrl?: string;
    videoAspect?: "16/9" | "9/16";
}

export default function CasoGaleria({ fotos, videoUrl, videoAspect = "16/9" }: Props) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const open = (i: number) => setLightboxIndex(i);
    const close = () => setLightboxIndex(null);

    const prev = useCallback(() => {
        setLightboxIndex((i) => (i === null ? null : (i - 1 + fotos.length) % fotos.length));
    }, [fotos.length]);

    const next = useCallback(() => {
        setLightboxIndex((i) => (i === null ? null : (i + 1) % fotos.length));
    }, [fotos.length]);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [lightboxIndex, prev, next]);

    const [fotoPortada, ...fotosResto] = fotos;

    return (
        <>
            {/* Foto principal */}
            {fotoPortada && (
                <button
                    onClick={() => open(0)}
                    className="relative aspect-square rounded-2xl overflow-hidden mb-4 w-full block cursor-zoom-in group"
                >
                    <Image
                        src={fotoPortada.src}
                        alt={fotoPortada.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 900px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        priority
                    />
                    {/* Overlay que aparece en hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Watermark />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {fotoPortada.caption && (
                            <p className="font-manrope text-xs text-crema/70 uppercase tracking-widest mb-2">
                                {fotoPortada.caption}
                            </p>
                        )}
                        <span className="inline-flex items-center gap-1.5 border border-crema/15 bg-carbon/60 backdrop-blur-sm rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-crema/50">
                            ⊕ Ampliar
                        </span>
                    </div>
                </button>
            )}

            {/* Video integrado con player AM custom */}
            {videoUrl && (
                <div className="mb-4">
                    <VideoPlayer
                        url={videoUrl}
                        aspect={videoAspect}
                        thumbnail={fotoPortada?.src}
                    />
                </div>
            )}

            {/* Grid fotos restantes */}
            {fotosResto.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                    {fotosResto.map((foto, i) => (
                        <button
                            key={foto.src}
                            onClick={() => open(i + 1)}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-zoom-in"
                        >
                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            <Watermark />
                            {foto.caption && (
                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-carbon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="font-manrope text-[9px] text-crema/50 uppercase tracking-widest">
                                        {foto.caption}
                                    </p>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
                    onClick={close}
                >
                    {/* Foto ampliada */}
                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full aspect-[4/3]">
                            <Image
                                src={fotos[lightboxIndex].src}
                                alt={fotos[lightboxIndex].alt}
                                fill
                                sizes="100vw"
                                className="object-contain"
                                priority
                            />
                            <Watermark prominent />
                        </div>

                        {/* Caption */}
                        {fotos[lightboxIndex].caption && (
                            <p className="text-center font-manrope text-xs text-crema/40 uppercase tracking-widest mt-4">
                                {fotos[lightboxIndex].caption}
                            </p>
                        )}
                    </div>

                    {/* Cerrar */}
                    <button
                        onClick={close}
                        className="absolute top-5 right-5 text-crema/50 hover:text-crema transition-colors font-manrope text-xs uppercase tracking-widest"
                    >
                        ESC · Cerrar
                    </button>

                    {/* Prev */}
                    {fotos.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prev(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-crema/40 hover:text-crema transition-colors text-2xl p-3"
                                aria-label="Anterior"
                            >
                                ←
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); next(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-crema/40 hover:text-crema transition-colors text-2xl p-3"
                                aria-label="Siguiente"
                            >
                                →
                            </button>
                        </>
                    )}

                    {/* Contador */}
                    <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-manrope text-[10px] text-crema/30 uppercase tracking-widest">
                        {lightboxIndex + 1} / {fotos.length}
                    </p>
                </div>
            )}
        </>
    );
}

function Watermark({ prominent = false }: { prominent?: boolean }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <p
                className="font-manrope uppercase whitespace-nowrap"
                style={{
                    fontSize: prominent ? "13px" : "10px",
                    color: "rgba(255,255,255,0.50)",
                    letterSpacing: "0.55em",
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                }}
            >
                AM Estética Dental
            </p>
        </div>
    );
}

function ZoomHint() {
    return (
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center gap-1.5 border border-crema/15 bg-carbon/70 backdrop-blur-sm rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-crema/50">
                ⊕ Ampliar
            </span>
        </div>
    );
}
