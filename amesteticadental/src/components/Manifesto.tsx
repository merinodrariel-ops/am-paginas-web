"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current || !textRef.current) return;

        // Split text into words for reveal animation
        const text = textRef.current;
        if (text) {
            const words = text.innerText.split(' ');
            text.innerHTML = '';
            words.forEach(word => {
                const span = document.createElement('span');
                span.innerText = word + ' ';
                span.className = 'opacity-20 transition-opacity duration-300 inline-block';
                text.appendChild(span);
            });

            const spans = text.querySelectorAll('span');

            const ctx = gsap.context(() => {
                gsap.to(spans, {
                    opacity: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1,
                    }
                });
            }, containerRef);

            return () => ctx.revert();
        }
    }, []);

    return (
        <section
            id="manifiesto"
            ref={containerRef}
            className="bg-carbon text-crema min-h-[80vh] flex items-center justify-center p-8 relative flex-col z-20"
        >
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs mb-8 block opacity-80">
                    Nuestro Manifiesto
                </span>
                <h2
                    ref={textRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-manrope font-light leading-tight tracking-tight"
                >
                    No venimos a hacer odontología. Venimos a cambiarle la cara al nivel de lo que se puede esperar de una clínica dental en Argentina.
                </h2>
            </div>

            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-crema to-transparent opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-crema/20 to-transparent pointer-events-none mix-blend-overlay" />
        </section>
    );
}
