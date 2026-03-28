"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CometButton from "./CometButton";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────
//  Partículas flotantes — posiciones fijas (sin Math.random
//  en render para evitar hydration mismatch)
// ─────────────────────────────────────────────────────────────
const PARTICLES = [
  { x: 12,  y: 18,  size: 2.5, delay: 0.0, dur: 4.8 },
  { x: 78,  y: 55,  size: 1.5, delay: 0.6, dur: 6.2 },
  { x: 34,  y: 72,  size: 3.0, delay: 1.2, dur: 5.5 },
  { x: 62,  y: 38,  size: 1.8, delay: 0.3, dur: 7.0 },
  { x: 88,  y: 82,  size: 2.0, delay: 1.8, dur: 4.5 },
  { x: 22,  y: 90,  size: 1.2, delay: 0.9, dur: 6.8 },
  { x: 50,  y: 25,  size: 2.2, delay: 2.1, dur: 5.2 },
  { x: 72,  y: 65,  size: 1.6, delay: 0.5, dur: 5.8 },
  { x: 15,  y: 48,  size: 2.8, delay: 1.5, dur: 4.2 },
  { x: 95,  y: 30,  size: 1.4, delay: 2.4, dur: 7.2 },
  { x: 42,  y: 88,  size: 2.0, delay: 0.8, dur: 5.0 },
  { x: 68,  y: 10,  size: 1.8, delay: 3.0, dur: 6.5 },
  { x: 8,   y: 62,  size: 1.2, delay: 1.1, dur: 4.8 },
  { x: 55,  y: 50,  size: 3.5, delay: 2.7, dur: 5.4 },
  { x: 82,  y: 75,  size: 1.6, delay: 0.4, dur: 6.0 },
  { x: 30,  y: 35,  size: 2.4, delay: 1.9, dur: 5.6 },
  { x: 92,  y: 52,  size: 1.0, delay: 3.3, dur: 7.5 },
  { x: 46,  y: 14,  size: 2.0, delay: 2.2, dur: 4.0 },
];

export default function Hero() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headlineRef  = useRef<HTMLHeadingElement>(null);
  const subRef       = useRef<HTMLParagraphElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const mediaWrapRef = useRef<HTMLDivElement>(null);
  const bgGlowRef    = useRef<HTMLDivElement>(null);
  const particleRef  = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ── Animación de entrada: texto
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(headlineRef.current, {
      y: 70,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
    })
    .from(subRef.current, {
      y: 35,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
    }, "-=0.55")
    .from(ctaRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.65,
      ease: "power3.out",
    }, "-=0.45");

    // ── Animación de entrada: media wrapper
    tl.from(mediaWrapRef.current, {
      opacity: 0,
      scale: 0.94,
      duration: 1.4,
      ease: "power2.out",
    }, 0.1);

    // ── Partículas: flotan hacia arriba de forma infinita
    if (particleRef.current) {
      const dots = particleRef.current.querySelectorAll(".particle-dot");
      dots.forEach((dot, i) => {
        const p = PARTICLES[i];
        gsap.set(dot, { y: 0, opacity: 0 });
        gsap.to(dot, {
          y: -80 - p.size * 10,
          opacity: 0,
          duration: p.dur,
          delay: p.delay,
          ease: "power1.in",
          repeat: -1,
          repeatDelay: p.delay * 0.8,
          onRepeat() {
            gsap.set(dot, { y: 0, opacity: p.size * 0.13 });
          },
        });
        // fade-in inicial
        gsap.to(dot, {
          opacity: p.size * 0.13,
          duration: 0.8,
          delay: p.delay,
          ease: "power2.out",
        });
      });
    }

    // ── Parallax al hacer scroll
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.8,
      onUpdate(self) {
        const p = self.progress;
        // El video: sube más rápido (primer plano)
        gsap.set(mediaWrapRef.current, { y: p * -55 });
        // El headline: velocidad media
        gsap.set(headlineRef.current,  { y: p * -28 });
        // El blobs de fondo: suben más lento (profundidad)
        gsap.set(bgGlowRef.current,    { y: p * +38 });
        // Las partículas: suben muy rápido (entre smile y foreground)
        gsap.set(particleRef.current,  { y: p * -72 });
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] bg-carbon flex items-center overflow-hidden"
    >
      {/* ── Bokeh / blobs de luz ambiental (se mueven en parallax lento) */}
      <div ref={bgGlowRef} className="absolute inset-0 pointer-events-none will-change-transform">
        <div className="absolute right-[-5%] top-[30%] w-[520px] h-[520px] rounded-full bg-oro/8 blur-[130px]" />
        <div className="absolute right-[15%] top-[10%] w-[280px] h-[280px] rounded-full bg-oro/5 blur-[90px]" />
        <div className="absolute right-[5%] bottom-[15%] w-[200px] h-[200px] rounded-full bg-oro/4 blur-[70px]" />
      </div>

      {/* ── Línea dorada izquierda */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-oro/0 via-oro/40 to-oro/0" />

      {/* ── Líneas de cuadrícula muy sutiles (atmósfera cinemática) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f2b90d 1px, transparent 1px), linear-gradient(to bottom, #f2b90d 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-y-0 right-[-18%] w-[118vw] max-w-none pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-carbon/5 via-carbon/18 to-carbon" />
        <div
          ref={mediaWrapRef}
          className="absolute right-0 top-1/2 h-[86vh] w-[78vw] -translate-y-1/2 will-change-transform"
        >
          <div className="absolute inset-y-[2%] right-[6%] w-[88%] rounded-[50%] bg-oro/10 blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-l from-carbon/0 via-carbon/12 to-carbon z-10" />
          <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-carbon via-carbon/72 to-transparent z-10" />
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/generate-3d-veneer-poster.jpg"
          >
            <source src="/videos/generate-3d-veneer.webm" type="video/webm" />
            <source src="/videos/generate-3d-veneer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-8 lg:gap-0 items-center py-28 lg:pt-28 lg:pb-0 min-h-[100dvh]">

        {/* ── Columna izquierda: texto */}
        <div className="relative flex flex-col justify-center max-w-xl lg:max-w-[34rem]">
          <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
            AM Estética Dental · Puerto Madero
          </span>

          <h1
            ref={headlineRef}
            className="text-5xl md:text-6xl lg:text-[5.25rem] font-manrope font-light text-crema leading-[0.98] mb-7 will-change-transform"
          >
            Carillas Dentales<br />
            <span className="font-cormorant italic text-oro">y Sonrisa Natural.</span>
          </h1>

          <p
            ref={subRef}
            className="text-crema/68 font-manrope text-lg md:text-[1.12rem] font-light leading-relaxed max-w-sm mb-9"
          >
            Carillas de porcelana, lentes de contacto dental y diseño de sonrisa digital para lograr resultados naturales en Puerto Madero. Alineadores invisibles e Invisalign cuando el caso pide movimiento, no artificio.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <CometButton
              href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20solicitar%20una%20evaluacion%20inicial."
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              speed={5.8}
            >
              Solicitar evaluacion inicial
              <span>→</span>
            </CometButton>
            <a
              href="#tratamientos"
              className="inline-flex items-center justify-center gap-2 text-crema/60 font-manrope text-sm hover:text-crema transition-colors"
            >
              Ver tratamientos principales
            </a>
          </div>

          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-oro/15 bg-carbon/55 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-oro" />
            <span className="text-[11px] font-manrope uppercase tracking-[0.24em] text-crema/72">
              Agenda limitada · Solo 4 evaluaciones iniciales disponibles este mes
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-12 pt-7 border-t border-oro/10">
            {[
              { v: "4.9★", l: "Google" },
              { v: "Forbes", l: "Argentina" },
              { v: "15+", l: "Años" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Columna derecha: video hero mobile / spatial anchor desktop */}
        <div className="relative flex justify-center lg:justify-end order-first lg:order-last min-h-[18rem] lg:min-h-0">

          {/* Partículas flotantes */}
          <div
            ref={particleRef}
            className="absolute inset-0 pointer-events-none will-change-transform"
            aria-hidden="true"
          >
            {PARTICLES.map((p, i) => (
              <div
                key={i}
                className="particle-dot absolute rounded-full bg-oro"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  opacity: 0,
                }}
              />
            ))}
          </div>

          {/* Halo dorado detrás del media card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none lg:hidden">
            <div className="w-[78%] h-[60%] rounded-full bg-oro/10 blur-[60px]" />
          </div>

          {/* Video principal mobile */}
          <div
            ref={mediaWrapRef}
            className="relative w-[112%] max-w-none sm:w-full sm:max-w-2xl will-change-transform lg:hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-transparent">
              <div className="absolute inset-0 bg-gradient-to-l from-carbon/0 via-carbon/12 to-carbon z-10" />
              <div className="absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-carbon to-transparent z-10" />

              <video
                className="h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/videos/generate-3d-veneer-poster.jpg"
              >
                <source src="/videos/generate-3d-veneer.webm" type="video/webm" />
                <source src="/videos/generate-3d-veneer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

      </div>

      {/* ── Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <span className="text-crema text-xs tracking-widest uppercase font-manrope mb-2">Descubrir</span>
        <div className="w-px h-10 bg-crema/30 relative overflow-hidden">
          <div className="w-full h-full bg-crema absolute top-0 animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
