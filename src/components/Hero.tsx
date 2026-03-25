"use client";

import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PolygonSmile from "./hero/PolygonSmile";

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
  const smileWrapRef = useRef<HTMLDivElement>(null);
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

    // ── Animación de entrada: smile wrapper
    tl.from(smileWrapRef.current, {
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
        // El SVG de sonrisa: sube más rápido (primer plano)
        gsap.set(smileWrapRef.current, { y: p * -55 });
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32 lg:py-0 min-h-[100dvh]">

        {/* ── Columna izquierda: texto */}
        <div className="flex flex-col justify-center">
          <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
            AM Estética Dental · Puerto Madero
          </span>

          <h1
            ref={headlineRef}
            className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.05] mb-8 will-change-transform"
          >
            Mejoramos<br />
            <span className="font-cormorant italic text-oro">Tu Sonrisa.</span>
          </h1>

          <p
            ref={subRef}
            className="text-crema/70 font-manrope text-lg font-light leading-relaxed max-w-md mb-10"
          >
            Diseño de sonrisa digital, carillas de porcelana e implantes al nivel más alto de Buenos Aires. Consultá sin cargo.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20agendar%20una%20consulta%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-all hover:scale-[1.02] active:scale-100"
            >
              Agendar consulta gratuita
              <span>→</span>
            </a>
            <a
              href="#tratamientos"
              className="inline-flex items-center justify-center gap-2 text-crema/60 font-manrope text-sm hover:text-crema transition-colors"
            >
              Ver tratamientos
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-14 pt-8 border-t border-oro/10">
            {[
              { v: "4.9★", l: "Google" },
              { v: "Forbes", l: "Argentina" },
              { v: "10+", l: "Años" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Columna derecha: sonrisa de polígonos */}
        <div className="relative flex justify-center lg:justify-end order-first lg:order-last">

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

          {/* Halo dorado detrás del SVG */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[70%] h-[55%] rounded-full bg-oro/8 blur-[60px]" />
          </div>

          {/* El SVG de la sonrisa */}
          <div
            ref={smileWrapRef}
            className="polygon-smile-wrapper relative w-full max-w-sm lg:max-w-[480px] will-change-transform"
            style={{ aspectRatio: "480 / 380" }}
          >
            <PolygonSmile />
          </div>

          {/* Badge flotante — Forbes (reposicionado) */}
          <div className="absolute -bottom-2 -left-2 bg-carbon-soft border border-oro/30 rounded-2xl p-4 shadow-xl hidden md:block z-10">
            <div className="text-oro font-manrope text-xs uppercase tracking-widest mb-1">Forbes Argentina</div>
            <div className="text-crema font-manrope text-sm font-medium leading-snug">
              Única clínica<br />dental reconocida
            </div>
          </div>

          {/* Badge @drarielmerino */}
          <div className="absolute top-4 right-2 hidden lg:block">
            <div className="inline-flex items-center gap-2 bg-carbon/80 backdrop-blur-sm border border-oro/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-oro animate-pulse" />
              <span className="text-crema font-manrope text-xs tracking-wide">@drarielmerino</span>
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
