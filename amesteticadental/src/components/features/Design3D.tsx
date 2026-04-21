"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Design3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Staggered fan out animation on scroll
            gsap.fromTo(
                cardsRef.current,
                {
                    y: 100,
                    opacity: 0,
                    rotation: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    rotation: (index) => (index - 1) * 8, // -8deg, 0deg, 8deg
                    duration: 1.2,
                    ease: "back.out(1.5)",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const placeholders = [
        "https://images.unsplash.com/photo-1598256989410-b4bd697dc2b5?q=80&w=800&auto=format&fit=crop", // Caso 1
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop", // Caso 2
        "https://images.unsplash.com/photo-1606275825272-9e9008bc06d1?q=80&w=800&auto=format&fit=crop", // Caso 3
    ];

    return (
        <div ref={containerRef} className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center pt-10">
            {placeholders.map((src, idx) => (
                <div
                    key={idx}
                    ref={(el) => {
                        cardsRef.current[idx] = el;
                    }}
                    className="absolute w-3/4 max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/20 origin-bottom"
                    style={{ zIndex: idx }}
                >
                    {/* TODO: Replace with user provided before/after images */}
                    <img
                        src={src}
                        alt={`Caso 3D ${idx + 1}`}
                        className="w-full h-full object-cover filter brightness-[0.9]"
                    />
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-crema tracking-wide">
                        {idx === 0 ? "Diseño" : idx === 1 ? "Mockup" : "Final"}
                    </div>
                </div>
            ))}
        </div>
    );
}
