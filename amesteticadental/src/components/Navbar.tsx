"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import CometButton from "./CometButton";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_LINKS = [
    { label: "Simulador IA", href: "/sonrisa" },
    { label: "Tratamientos",  href: "/#tratamientos" },
    { label: "Financiación",  href: "/#financiacion" },
    { label: "Clínica",       href: "/clinica" },
    { label: "Tecnología",    href: "/#tecnologia" },
    { label: "Testimonios",   href: "/#testimonios" },
    { label: "Antes y después", href: "/casos-antes-y-despues" },
    { label: "Equipo",        href: "/equipo-am" },
    { label: "FAQ",           href: "/#faq" },
];

const FEATURED_LINKS = [
    { label: "Simulador IA", href: "/sonrisa" },
    { label: "Carillas",      href: "/carillas-dentales" },
    { label: "Financiación",  href: "/#financiacion" },
    { label: "Lentes",        href: "/lentes-de-contacto-dental" },
    { label: "AM Aligners",   href: "/alineadores-invisibles" },
    { label: "Dr. Merino",    href: "/dr-ariel-merino" },
    { label: "Clínica",       href: "/clinica" },
    { label: "Antes y después", href: "/casos-antes-y-despues" },
    { label: "Precio",        href: "/precio-carillas-dentales-buenos-aires" },
];

// Menú en inglés para las páginas /en. Apunta a las páginas ya traducidas; el
// resto lleva a su equivalente en español hasta que se traduzca.
const NAV_LINKS_EN = [
    { label: "Veneers",        href: "/en/porcelain-veneers-buenos-aires" },
    { label: "Smile Design",   href: "/en/smile-design-buenos-aires" },
    { label: "Dental Tourism", href: "/en/dental-tourism-argentina" },
    { label: "Before & After", href: "/casos-antes-y-despues" },
    { label: "Clinic",         href: "/en/clinic" },
    { label: "Team",           href: "/en/team" },
];

const FEATURED_LINKS_EN = [
    { label: "Veneers",        href: "/en/porcelain-veneers-buenos-aires" },
    { label: "Smile Design",   href: "/en/smile-design-buenos-aires" },
    { label: "Dental Tourism", href: "/en/dental-tourism-argentina" },
    { label: "AI Simulator",   href: "/sonrisa" },
    { label: "Dr. Merino",     href: "/dr-ariel-merino" },
    { label: "Before & After", href: "/casos-antes-y-despues" },
];

const COPY = {
    es: {
        cta: "Agendar Evaluación",
        explore: "Explorar",
        keyPages: "Páginas clave",
        menu: "Menú",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Me%20gustaria%20solicitar%20una%20evaluacion%20inicial.",
    },
    en: {
        cta: "Book an Assessment",
        explore: "Explore",
        keyPages: "Key pages",
        menu: "Menu",
        wa: "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20request%20an%20initial%20assessment.",
    },
} as const;

export default function Navbar() {
    const pathname = usePathname() || "/";
    const isEn = pathname === "/en" || pathname.startsWith("/en/");
    const navLinks = isEn ? NAV_LINKS_EN : NAV_LINKS;
    const featuredLinks = isEn ? FEATURED_LINKS_EN : FEATURED_LINKS;
    const t = isEn ? COPY.en : COPY.es;

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
                    w-full max-w-6xl
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
                <div className="hidden lg:flex flex-1 justify-center gap-5 items-center text-[12px] font-medium tracking-wide font-manrope">
                    {navLinks.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            className="whitespace-nowrap text-crema/65 hover:text-crema transition-colors"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* CTA + mobile hamburger */}
                <div className="flex-none flex items-center gap-3">
                    <LanguageSwitcher />
                    <div className="hidden lg:block">
                        <CometButton
                            href={t.wa}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                            speed={2.2}
                        >{t.cta}</CometButton>
                    </div>
                    <button
                        className="lg:hidden p-1.5 text-crema/70 hover:text-crema transition-colors"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={t.menu}
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            <div className="hidden lg:flex items-center gap-2 mt-3 px-4 py-2 rounded-full border border-oro/10 bg-carbon/72 backdrop-blur-md text-[11px] font-manrope uppercase tracking-[0.22em] text-crema/45">
                <span className="text-oro/65">{t.explore}</span>
                {featuredLinks.map((item) => (
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
                        {navLinks.map((l) => (
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
                            <p className="text-oro/55 font-manrope text-[10px] uppercase tracking-[0.28em] mb-3">{t.keyPages}</p>
                            <div className="grid grid-cols-2 gap-2">
                                {featuredLinks.map((item) => (
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
                                href={t.wa}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-oro text-carbon font-manrope font-semibold text-sm py-3 rounded-full hover:bg-oro-light transition-colors"
                            >{t.cta}</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
