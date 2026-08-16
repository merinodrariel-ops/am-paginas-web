"use client";

import { usePathname } from "next/navigation";

// La fila "Red AM": los enlaces a las otras tres propiedades de la marca.
//
// Vivía adentro de Contacto.tsx, y como Contacto sólo se monta en 21 de las 76
// páginas, las otras 55 —incluidas /precio-carillas-dentales-buenos-aires, todo
// el blog y /opiniones— no le pasaban ni un enlace a amesteticadental.uy ni a
// arielmerino.com. Al colgarla del layout raíz, el enlace sale en todas sin
// tener que acordarse de importarla página por página.
//
// Es client component sólo para leer el pathname y saber si estamos en /en.

const COPY = {
    es: { label: "AM en la región", uy: "AM Uruguay · Montevideo" },
    en: { label: "AM across the region", uy: "AM Uruguay · Montevideo" },
};

// El link-in-bio de Instagram es un trampolín a WhatsApp, noindex y sin nada
// más: la fila ahí sólo agrega ruido.
const RUTAS_SIN_RED = ["/ig"];

export default function RedAM() {
    const pathname = usePathname() ?? "/";
    if (RUTAS_SIN_RED.includes(pathname)) return null;

    const t = pathname === "/en" || pathname.startsWith("/en/") ? COPY.en : COPY.es;

    return (
        <div className="border-t border-oro/10 bg-carbon px-6 py-8">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center font-manrope text-[10px] uppercase tracking-widest text-crema/25">
                <span className="text-crema/40">{t.label}</span>
                <a
                    href="https://www.amesteticadental.uy"
                    data-track="ar_to_uy_footer_click"
                    target="_blank"
                    rel="noopener"
                    className="transition-colors hover:text-oro"
                >
                    {t.uy}
                </a>
                <span className="hidden text-oro/20 sm:inline">|</span>
                <a
                    href="https://www.thedentalreview.com"
                    target="_blank"
                    rel="noopener"
                    className="transition-colors hover:text-oro"
                >
                    The Dental Review
                </a>
                <span className="hidden text-oro/20 sm:inline">|</span>
                <a
                    href="https://www.arielmerino.com"
                    target="_blank"
                    rel="noopener"
                    className="transition-colors hover:text-oro"
                >
                    arielmerino.com
                </a>
            </div>
        </div>
    );
}
