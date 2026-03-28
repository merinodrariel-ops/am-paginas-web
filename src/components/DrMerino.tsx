"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sección crítica: el Doctor es la marca.
// La auditoría detectó que las páginas de Equipo y Nosotros retornan 404 —
// un paciente que va a gastar USD 5.000 en un procedimiento estético
// necesita conocer a la persona que lo va a tratar. Esta sección lo resuelve.

export default function DrMerino() {
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
        <section ref={sectionRef} id="clinica" className="py-32 px-4 bg-carbon relative overflow-hidden">

            {/* Línea dorada decorativa izquierda */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-oro/0 via-oro/30 to-oro/0" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Foto */}
                    <div className="relative order-2 lg:order-1">
                        <div ref={photoRef} className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-carbon-soft border border-oro/10" style={{ filter: "grayscale(1) brightness(0.65) contrast(1.05)" }}>
                            <Image
                                src="/images/dr-merino/dr-ariel-merino-ambo-principal.webp"
                                alt="Dr. Ariel Merino — Odontólogo Estético AM Estética Dental Puerto Madero"
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
                            <div className="text-oro font-manrope text-xs uppercase tracking-widest mb-1">Forbes Argentina</div>
                            <div className="text-crema font-manrope text-sm font-medium">Única clínica dental reconocida</div>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div ref={contentRef} className="order-1 lg:order-2">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                            El especialista
                        </span>

                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-2">
                            Dr. Ariel Merino
                        </h2>
                        <p className="text-oro font-manrope text-lg mb-10">
                            Odontólogo Estético · Puerto Madero, Buenos Aires
                        </p>

                        <div className="space-y-6 mb-12">
                            <p className="text-crema/80 font-manrope leading-relaxed">
                                Más de <strong className="text-crema">10 años</strong> redefiniendo lo que significa una sonrisa de alto nivel en Argentina. No desde un consultorio genérico — desde Puerto Madero, donde el estándar internacional no es una aspiración sino una exigencia diaria.
                            </p>
                            <p className="text-crema/80 font-manrope leading-relaxed">
                                Nuestros pacientes son <strong className="text-crema">profesionales, empresarios y figuras públicas</strong> que no aceptan resultados promedio porque sus sonrisas viven bajo escrutinio. Miss Universo confió en el equipo. Forbes reconoció a AM Estética Dental como la única clínica dental del país en sus páginas.
                            </p>
                            <p className="text-crema/80 font-manrope leading-relaxed">
                                El enfoque de AM es <strong className="text-crema">minimalista y permanente</strong>: intervenir lo mínimo necesario para lograr el máximo impacto. Cada caso que llevamos adelante es un resultado del que nos hacemos responsables para siempre.
                            </p>
                        </div>

                        {/* Credenciales */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {[
                                { valor: "10+", texto: "Años de experiencia" },
                                { valor: "4.9★", texto: "Google Rating" },
                                { valor: "Forbes", texto: "Reconocimiento editorial" },
                                { valor: "100%", texto: "Casos reales propios" },
                            ].map((item) => (
                                <div key={item.texto} className="border border-oro/10 rounded-xl p-4 bg-carbon-soft">
                                    <div className="text-oro font-manrope font-semibold text-xl mb-1">{item.valor}</div>
                                    <div className="text-crema-muted font-manrope text-xs">{item.texto}</div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20el%20Dr.%20Merino."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-all"
                        >
                            Consultar con el Dr. Merino
                            <span>→</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
