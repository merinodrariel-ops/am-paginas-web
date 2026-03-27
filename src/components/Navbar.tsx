"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import CometButton from "./CometButton";

const NAV_LINKS = [
    { label: "Tratamientos", href: "/#tratamientos" },
    { label: "Clínica",      href: "/#clinica" },
    { label: "Tecnología",   href: "/#tecnologia" },
    { label: "Testimonios",  href: "/#testimonios" },
    { label: "Casos",        href: "/#casos" },
    { label: "FAQ",          href: "/#faq" },
];

const FEATURED_LINKS = [
    { label: "Carillas", href: "/carillas-dentales" },
    { label: "Lentes", href: "/lentes-de-contacto-dental" },
    { label: "Invisalign", href: "/invisalign" },
    { label: "Precio", href: "/precio-carillas-dentales-buenos-aires" },
];

export default function Navbar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const lastScrollY = useRef(0);
    const hidden = useRef(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // ── Glassmorphism on scroll
        ScrollTrigger.create({
            start: "top -50",
            end: 99999,
            toggleClass: { targets: navRef.current!, className: "nav-scrolled" },
        });

        // ── Hide on scroll down / reveal on scroll up
        const onScroll = () => {
            const current = window.scrollY;
            const delta = current - lastScrollY.current;

            if (current < 80) {
                // Always visible near top
                if (hidden.current) {
                    gsap.to(containerRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
                    hidden.current = false;
                }
            } else if (delta > 6 && !hidden.current) {
                // Scrolling down → hide
                gsap.to(containerRef.current, { y: -120, duration: 0.35, ease: "power2.in" });
                hidden.current = true;
                setMobileOpen(false);
            } else if (delta < -4 && hidden.current) {
                // Scrolling up → reveal
                gsap.to(containerRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
                hidden.current = false;
            }

            lastScrollY.current = current;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center pt-5 px-4"
            style={{ willChange: "transform" }}
        >
            {/* ── Desktop nav pill */}
            <nav
                ref={navRef}
                className="
                    flex items-center justify-between
                    px-6 py-3
                    w-full max-w-5xl
                    rounded-full
                    bg-white/5 backdrop-blur-md border border-white/10
                    text-crema
                    transition-colors duration-300
                    [&.nav-scrolled]:bg-carbon/95 [&.nav-scrolled]:border-oro/20 [&.nav-scrolled]:shadow-[0_0_40px_rgba(242,185,13,0.08)]
                "
            >
                {/* Logo */}
                <div className="flex-none">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/logo.png"
                            alt="AM Estética Dental"
                            width={120}
                            height={40}
                            className="h-8 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Links — hidden on mobile */}
                <div className="hidden lg:flex flex-1 justify-center gap-7 items-center text-[13px] font-medium tracking-wide font-manrope">
                    {NAV_LINKS.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            className="text-crema/65 hover:text-crema transition-colors"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* CTA + mobile hamburger */}
                <div className="flex-none flex items-center gap-3">
                    <div className="hidden lg:block">
                        <CometButton
                            href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20gustaria%20solicitar%20una%20evaluacion%20inicial."
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                            speed={2.2}
                        >
                            Agendar Evaluación
                        </CometButton>
                    </div>
                    <button
                        className="lg:hidden p-1.5 text-crema/70 hover:text-crema transition-colors"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Menú"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            <div className="hidden lg:flex items-center gap-2 mt-3 px-4 py-2 rounded-full border border-oro/10 bg-carbon/72 backdrop-blur-md text-[11px] font-manrope uppercase tracking-[0.22em] text-crema/45">
                <span className="text-oro/65">Explorar</span>
                {FEATURED_LINKS.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-full border border-oro/12 bg-oro/5 px-3 py-1.5 text-crema/70 transition-colors hover:border-oro/30 hover:text-crema"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* ── Mobile dropdown */}
            {mobileOpen && (
                <div className="lg:hidden w-full max-w-5xl mt-2 rounded-2xl bg-carbon/97 border border-oro/15 backdrop-blur-md overflow-hidden">
                    <div className="flex flex-col py-4">
                        {NAV_LINKS.map((l) => (
                            <Link
                                key={l.label}
                                href={l.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-6 py-3 text-crema/70 hover:text-crema hover:bg-oro/5 font-manrope text-sm transition-colors"
                            >
                                {l.label}
                            </Link>
                        ))}
                        <div className="px-6 pt-4 pb-2 border-t border-oro/10 mt-2">
                            <p className="text-oro/55 font-manrope text-[10px] uppercase tracking-[0.28em] mb-3">Páginas clave</p>
                            <div className="grid grid-cols-2 gap-2">
                                {FEATURED_LINKS.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-xl border border-oro/12 bg-oro/5 px-3 py-2 text-crema/70 hover:text-crema hover:border-oro/30 font-manrope text-xs transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="px-6 pt-3 pb-2 border-t border-oro/10 mt-2">
                            <a
                                href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20gustaria%20solicitar%20una%20evaluacion%20inicial."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-oro text-carbon font-manrope font-semibold text-sm py-3 rounded-full hover:bg-oro-light transition-colors"
                            >
                                Agendar Evaluación
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
