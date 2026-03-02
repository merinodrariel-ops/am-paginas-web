"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef1 = useRef<HTMLSpanElement>(null);
    const textRef2 = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Initial hero text reveal animation
        const ctx = gsap.context(() => {
            gsap.from([textRef1.current, textRef2.current], {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex items-center justify-center w-full h-[100dvh] overflow-hidden"
        >
            {/* Background Video */}
            {/* TODO: Replace with actual video URL provided by user */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center filter brightness-[0.6] sepia-[0.2]"
                    poster="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-dental-clinic-equipment-39908-large.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/40 to-carbon/10 mix-blend-multiply" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto overflow-hidden">
                <h1 className="flex flex-col md:flex-row items-center gap-x-4 gap-y-2 text-5xl md:text-7xl lg:text-8xl text-crema leading-none">
                    <span ref={textRef1} className="font-outfit font-light tracking-tight">
                        La Precisión es el
                    </span>
                    <span ref={textRef2} className="font-cormorant italic font-medium text-arcilla">
                        Arte
                    </span>
                </h1>

                {/* Optional Subtitle */}
                <p className="mt-8 text-crema/80 font-jakarta max-w-xl text-lg md:text-xl font-light opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
                    Odontología de alta gama con flujo digital. Diseñamos el estándar del mañana.
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
                <span className="text-crema/60 text-xs tracking-widest uppercase font-jakarta mb-2">Descubrir</span>
                <div className="w-[1px] h-12 bg-crema/20 relative overflow-hidden">
                    <div className="w-[1px] h-full bg-crema absolute top-0 left-0 animate-[scrollDown_2s_ease-in-out_infinite]" />
                </div>
            </div>
        </section>
    );
}
