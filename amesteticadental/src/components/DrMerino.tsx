"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIOS_TRAYECTORIA, ANIO_TITULO } from "@/lib/trayectoria";

// Sección crítica: el Doctor es la marca.
// La auditoría detectó que las páginas de Equipo y Nosotros retornan 404 —
// un paciente que va a gastar USD 5.000 en un procedimiento estético
// necesita conocer a la persona que lo va a tratar. Esta sección lo resuelve.

const UI = {
    es: {
        eyebrow: "El especialista",
        role: "Odontólogo Estético · Puerto Madero, Buenos Aires",
        p1a: "", p1b: `${ANIOS_TRAYECTORIA} años de ejercicio`, p1c: ` desde su título de grado en ${ANIO_TITULO}, `, p1d: "dedicados casi exclusivamente a la estética dental",
        p1e: " de alta complejidad. No desde un consultorio genérico — desde Puerto Madero, donde el estándar internacional no es una aspiración sino una exigencia diaria.",
        p2a: "Nuestros pacientes son ", p2b: "profesionales, empresarios y figuras públicas",
        p2c: " que no aceptan resultados promedio porque sus sonrisas viven bajo escrutinio. Miss Universo confió en el equipo. Forbes reconoció a AM Estética Dental como la única clínica dental del país en sus páginas.",
        p3a: "El enfoque de AM es ", p3b: "minimalista y permanente",
        p3c: ": intervenir lo mínimo necesario para lograr el máximo impacto. Cada caso que llevamos adelante es un resultado del que nos hacemos responsables para siempre.",
        forbesTitle: "Forbes Argentina",
        forbesSub: "Única clínica dental reconocida",
        creds: [
            { valor: String(ANIOS_TRAYECTORIA), texto: "años en estética dental" },
            { valor: "UCALP", texto: `título de grado, ${ANIO_TITULO}` },
            { valor: "Forbes", texto: "Reconocimiento editorial" },
            { valor: "4.9★", texto: "Google Rating" },
        ],
        eduTitle: "Formación",
        edu1: "Odontólogo · UCALP (2010) · M.N. 34.869",
        edu2: "Posgrado en Rehabilitación Oral y Estética · AOA",
        cta: "Consultar con el Dr. Merino",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20el%20Dr.%20Merino.",
        secondary: "Ver perfil completo",
        alt: "Dr. Ariel Merino — Odontólogo Estético AM Estética Dental Puerto Madero",
    },
    en: {
        eyebrow: "The specialist",
        role: "Cosmetic Dentist · Puerto Madero, Buenos Aires",
        p1a: "", p1b: `${ANIOS_TRAYECTORIA} years in dentistry`, p1c: ` since qualifying in ${ANIO_TITULO}, `, p1d: "dedicated almost exclusively to high-complexity cosmetic dentistry",
        p1e: ". Not from a generic practice — from Puerto Madero, where the international standard is not an aspiration but a daily requirement.",
        p2a: "Our patients are ", p2b: "professionals, entrepreneurs and public figures",
        p2c: " who do not accept average results because their smiles live under scrutiny. A Miss Universe trusted this team. Forbes featured AM Estética Dental as the only dental clinic in the country in its pages.",
        p3a: "The AM approach is ", p3b: "minimal and permanent",
        p3c: ": intervene as little as necessary to achieve the maximum impact. Every case we take on is a result we stand behind for good.",
        forbesTitle: "Forbes Argentina",
        forbesSub: "The only dental clinic featured",
        creds: [
            { valor: String(ANIOS_TRAYECTORIA), texto: "years in cosmetic dentistry" },
            { valor: "UCALP", texto: `DDS, ${ANIO_TITULO}` },
            { valor: "Forbes", texto: "Editorial recognition" },
            { valor: "4.9★", texto: "Google Rating" },
        ],
        eduTitle: "Education",
        edu1: "Dentist · UCALP (2010) · Lic. No. 34.869",
        edu2: "Postgraduate in Oral Rehabilitation & Aesthetics · AOA",
        cta: "Consult with Dr. Merino",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20book%20a%20consultation%20with%20Dr.%20Merino.",
        secondary: "See full profile",
        alt: "Dr. Ariel Merino — Cosmetic Dentist at AM Estética Dental, Puerto Madero, Buenos Aires",
    },
} as const;

export default function DrMerino({ lang = "es" }: { lang?: "es" | "en" }) {
    const ui = UI[lang];
    const sectionRef = useRef<HTMLElement>(null);
    const photoRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Blanco y negro → color, scrubbeado al scroll
            gsap.fromTo(
                photoRef.current,
                { filter: "grayscale(1) brightness(0.65) contrast(1.05)" },
                {
                    filter: "grayscale(0) brightness(0.9) contrast(1)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "center 40%",
                        scrub: 1.2,
                    },
                }
            );

            // Leve parallax vertical en la foto (sube más lento que el scroll)
            gsap.to(photoRef.current, {
                y: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Contenido texto: fade + slide desde la derecha
            gsap.from(contentRef.current, {
                x: 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="dr-ariel-merino" className="py-32 px-4 bg-carbon relative overflow-hidden">

            {/* Línea dorada decorativa izquierda */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-oro/0 via-oro/30 to-oro/0" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Foto */}
                    <div className="relative order-2 lg:order-1">
                        <div ref={photoRef} className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-carbon-soft border border-oro/10" style={{ filter: "grayscale(1) brightness(0.65) contrast(1.05)" }}>
                            <Image
                                src="https://res.cloudinary.com/drctvgyqd/image/upload/v1784870272/dr-merino/dr-ariel-merino-ambo-principal.webp"
                                alt={ui.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top"
                                priority
                            />
                            {/* Overlay dorado sutil */}
                            <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/10 to-transparent" />

                            {/* Badge @drarielmerino */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="inline-flex items-center gap-2 bg-carbon/80 backdrop-blur-sm border border-oro/20 rounded-full px-4 py-2">
                                    <div className="w-2 h-2 rounded-full bg-oro animate-pulse" />
                                    <span className="text-crema font-manrope text-xs tracking-wide">@drarielmerino</span>
                                </div>
                            </div>
                        </div>

                        {/* Card flotante — Forbes */}
                        <div className="absolute -bottom-6 -right-6 bg-carbon-soft border border-oro/30 rounded-2xl p-4 shadow-xl hidden md:block">
                            <div className="text-oro font-manrope text-xs uppercase tracking-widest mb-1">{ui.forbesTitle}</div>
                            <div className="text-crema font-manrope text-sm font-medium">{ui.forbesSub}</div>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div ref={contentRef} className="order-1 lg:order-2">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                            {ui.eyebrow}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-2">
                            Dr. Ariel Merino
                        </h2>
                        <p className="text-oro font-manrope text-lg mb-10">
                            {ui.role}
                        </p>

                        <div className="space-y-6 mb-12">
                            <p className="text-crema/80 font-manrope leading-relaxed">
                                {ui.p1a}<strong className="text-crema">{ui.p1b}</strong>{ui.p1c}<strong className="text-crema">{ui.p1d}</strong>{ui.p1e}
                            </p>
                            <p className="text-crema/80 font-manrope leading-relaxed">
                                {ui.p2a}<strong className="text-crema">{ui.p2b}</strong>{ui.p2c}
                            </p>
                            <p className="text-crema/80 font-manrope leading-relaxed">
                                {ui.p3a}<strong className="text-crema">{ui.p3b}</strong>{ui.p3c}
                            </p>
                        </div>

                        {/* Credenciales */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {ui.creds.map((item) => (
                                <div key={item.texto} className="border border-oro/10 rounded-xl p-4 bg-carbon-soft">
                                    <div className="text-oro font-manrope font-semibold text-xl mb-1">{item.valor}</div>
                                    <div className="text-crema-muted font-manrope text-xs">{item.texto}</div>
                                </div>
                            ))}
                        </div>

                        {/* Formación */}
                        <div className="mb-10 space-y-2">
                            <p className="font-manrope text-[10px] uppercase tracking-[0.3em] text-oro/60">{ui.eduTitle}</p>
                            <p className="font-manrope text-xs text-crema/55 leading-relaxed">
                                {ui.edu1}<br />
                                {ui.edu2}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href={ui.wa}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-all"
                            >
                                {ui.cta}
                                <span>→</span>
                            </a>
                            <Link
                                href="/dr-ariel-merino"
                                className="inline-flex items-center gap-2 text-crema/60 font-manrope text-sm hover:text-crema transition-colors pt-1"
                            >
                                {ui.secondary}
                                <span>→</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
