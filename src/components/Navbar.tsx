"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!navRef.current || !containerRef.current) return;

        // Scroll animation for Navbar
        ScrollTrigger.create({
            start: "top -50",
            end: 99999,
            toggleClass: {
                targets: navRef.current,
                className: "nav-scrolled"
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-4" ref={containerRef}>
            <nav
                ref={navRef}
                className="
          flex items-center justify-between 
          px-6 py-3 
          w-full max-w-4xl 
          rounded-full 
          bg-white/5 backdrop-blur-md border border-white/10
          text-crema
          transition-all duration-300 ease-in-out
          [&.nav-scrolled]:bg-white/80 [&.nav-scrolled]:text-verde-musgo [&.nav-scrolled]:border-white/40 [&.nav-scrolled]:shadow-lg
        "
            >
                <div className="flex-1">
                    <Link href="/" className="font-outfit font-semibold text-lg tracking-wide uppercase">
                        AM
                    </Link>
                </div>

                <div className="hidden md:flex flex-none gap-8 items-center text-sm font-medium tracking-wide">
                    <Link href="#clinica" className="hover:opacity-70 transition-opacity">Clínica</Link>
                    <Link href="#tecnologia" className="hover:opacity-70 transition-opacity">Tecnología</Link>
                    <Link href="#casos" className="hover:opacity-70 transition-opacity">Casos</Link>
                </div>

                <div className="flex-1 flex justify-end">
                    <button className="hidden md:block bg-arcilla text-crema px-5 py-2 rounded-full text-sm font-semibold hover:bg-arcilla/90 transition-colors">
                        Agendar Evaluación
                    </button>
                    <button className="md:hidden">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </div>
    );
}
