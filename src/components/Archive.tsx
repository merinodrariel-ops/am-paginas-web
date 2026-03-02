"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cases = [
    {
        id: "01",
        title: "Rehabilitación Completa",
        patient: "Caso M.V.",
        description: "Diseño de sonrisa 3D con carillas cerámicas disilicato.",
        image: "https://images.unsplash.com/photo-1606275825272-9e9008bc06d1?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Implantes & Biomecánica",
        patient: "Caso L.R.",
        description: "Restauración sobre implantes con flujo 100% digital.",
        image: "https://images.unsplash.com/photo-1598256989410-b4bd697dc2b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Estética Mínimamente Invasiva",
        patient: "Caso A.C.",
        description: "Micromodelado de resinas de ultra alta definición.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop"
    }
];

export default function Archive() {
    const containerRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current) return;

        const panels = panelsRef.current.filter(Boolean);

        // Pin the container
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: `+=${100 * panels.length}%`,
            pin: true,
            anticipatePin: 1,
        });

        // Create the stacking/blur effect for each panel except the last one
        panels.forEach((panel, i) => {
            if (i === panels.length - 1) return;

            gsap.to(panel, {
                scale: 0.9,
                opacity: 0.5,
                filter: "blur(10px)",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `top -${i * 100}%`,
                    end: `top -${(i + 1) * 100}%`,
                    scrub: true,
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section id="casos" ref={containerRef} className="h-screen w-full relative overflow-hidden bg-carbon">
            {cases.map((item, idx) => (
                <div
                    key={item.id}
                    ref={(el) => {
                        panelsRef.current[idx] = el;
                    }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center p-4 md:p-8"
                    style={{ zIndex: idx + 1 }}
                >
                    <div className="relative w-full max-w-7xl h-full max-h-[90vh] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-8">
                            <div className="text-crema max-w-2xl">
                                <span className="font-mono text-arcilla mb-4 block text-sm tracking-widest">{item.id} // {item.patient}</span>
                                <h3 className="text-4xl md:text-6xl font-outfit font-light leading-none mb-4 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="font-jakarta text-crema/70 text-lg md:text-xl font-light">
                                    {item.description}
                                </p>
                            </div>

                            <button className="flex-none bg-crema/10 hover:bg-crema/20 backdrop-blur-md border border-crema/20 text-crema px-6 py-3 rounded-full font-jakarta hover:pr-8 transition-all group/btn flex items-center gap-2">
                                Ver caso
                                <span className="inline-block transform group-hover/btn:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
