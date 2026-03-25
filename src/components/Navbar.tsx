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
          [&.nav-scrolled]:bg-carbon/95 [&.nav-scrolled]:text-crema [&.nav-scrolled]:border-oro/20 [&.nav-scrolled]:shadow-[0_0_40px_rgba(242,185,13,0.08)]
        "
            >
                <div className="flex-1">
                    <Link href="/" className="font-manrope font-semibold text-lg tracking-widest uppercase text-crema">
                        AM
                    </Link>
                </div>

                <div className="hidden md:flex flex-none gap-8 items-center text-sm font-medium tracking-wide font-manrope">
                    <Link href="#clinica" className="text-crema/70 hover:text-crema transition-colors">Clínica</Link>
                    <Link href="#tecnologia" className="text-crema/70 hover:text-crema transition-colors">Tecnología</Link>
                    <Link href="#casos" className="text-crema/70 hover:text-crema transition-colors">Casos</Link>
                </div>

                <div className="flex-1 flex justify-end">
                    <a
                        href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20evaluaci%C3%B3n%20gratuita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block bg-oro text-carbon px-5 py-2 rounded-full text-sm font-semibold font-manrope hover:bg-oro-light transition-colors"
                    >
                        Agendar Evaluación
                    </a>
                    <button className="md:hidden">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </div>
    );
}
