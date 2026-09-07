"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Footer global con el mapa completo del sitio.
//
// Hasta ahora el layout raíz sólo montaba {children} + <RedAM />, y el Navbar
// tiene un único href="/". Eso dejaba a cada página colgando exclusivamente de
// los enlaces que trajera su propio contenido: al 03/09/2026, 5 páginas del
// sitemap no tenían NINGÚN enlace interno entrante (/invisalign,
// /periodoncia-precio-buenos-aires, /alineadores-invisibles-buenos-aires,
// /dientes-de-porcelana-carillas-precio, /puentes-dentales) y ~30 tenían uno
// solo. Search Console las reportaba como "Descubierta: actualmente sin
// indexar": Google las conocía por el sitemap y decidía que no valían el
// rastreo. El sitemap declara que una página existe; los enlaces internos
// declaran que importa.
//
// El caso extremo era el sub-sitio en inglés: las 24 páginas de /en colgaban de
// un único enlace, la banderita del home.
//
// Es client component sólo para leer el pathname y elegir el mapa ES o EN; Next
// lo renderiza igual en el HTML del servidor, que es lo que rastrea Google.

type Enlace = { href: string; label: string };
type Columna = { titulo: string; enlaces: Enlace[] };

const COLUMNAS_ES: Columna[] = [
    {
        titulo: "Tratamientos",
        enlaces: [
            { href: "/carillas-dentales", label: "Carillas dentales" },
            { href: "/carillas-de-resina", label: "Carillas de resina" },
            { href: "/lentes-de-contacto-dental", label: "Lentes de contacto dental" },
            // La marca no dice "cero desgaste" ni "no-prep": el desgaste es mínimo,
            // no inexistente. La URL conserva el término por el que se busca.
            { href: "/carillas-sin-desgaste", label: "Carillas de mínimo desgaste" },
            { href: "/diseno-de-sonrisa", label: "Diseño de sonrisa" },
            { href: "/alineadores-invisibles", label: "Alineadores invisibles" },
            { href: "/invisalign", label: "Invisalign" },
            { href: "/implantes-dentales-buenos-aires", label: "Implantes dentales" },
            { href: "/coronas-y-fundas-dentales", label: "Coronas y fundas" },
            { href: "/puentes-dentales", label: "Puentes dentales" },
            { href: "/periodoncia-precio-buenos-aires", label: "Periodoncia" },
            { href: "/bruxismo-desgaste-dental-carillas-ceramicas", label: "Bruxismo y desgaste" },
            { href: "/estetica-dental", label: "Estética dental" },
            { href: "/odontologia-estetica-buenos-aires", label: "Odontología estética" },
        ],
    },
    {
        titulo: "Precios",
        enlaces: [
            { href: "/precio-carillas-dentales-buenos-aires", label: "Precio de carillas" },
            { href: "/dientes-de-porcelana-carillas-precio", label: "Carillas de porcelana" },
            { href: "/diseno-de-sonrisa-precio-buenos-aires", label: "Precio de diseño de sonrisa" },
            { href: "/lentes-de-contacto-dental-precio-buenos-aires", label: "Precio de lentes de contacto" },
            { href: "/precio-implantes-dentales-buenos-aires", label: "Precio de implantes" },
            { href: "/blanqueamiento-dental-precio-buenos-aires", label: "Precio de blanqueamiento" },
            { href: "/alineadores-invisibles-buenos-aires", label: "Alineadores en Buenos Aires" },
        ],
    },
    {
        titulo: "Resultados",
        enlaces: [
            { href: "/casos-antes-y-despues", label: "Antes y después" },
            { href: "/opiniones", label: "Opiniones" },
            { href: "/blog", label: "Blog" },
            { href: "/prensa", label: "Prensa" },
            { href: "/sonrisa", label: "Simulador de sonrisa" },
            { href: "/carillas-vs-alineadores", label: "Carillas vs alineadores" },
            { href: "/carillas-de-porcelana-vs-resina", label: "Porcelana vs resina" },
            { href: "/donde-hacerse-carillas-buenos-aires", label: "Dónde hacerte carillas" },
        ],
    },
    {
        titulo: "Buenos Aires",
        enlaces: [
            { href: "/dentista-puerto-madero", label: "Dentista en Puerto Madero" },
            { href: "/carillas-dentales-recoleta", label: "Carillas en Recoleta" },
            { href: "/carillas-dentales-palermo", label: "Carillas en Palermo" },
            { href: "/carillas-dentales-belgrano", label: "Carillas en Belgrano" },
            { href: "/turismo-dental", label: "Turismo dental" },
        ],
    },
    {
        titulo: "AM",
        enlaces: [
            { href: "/clinica", label: "La clínica" },
            { href: "/dr-ariel-merino", label: "Dr. Ariel Merino" },
            { href: "/equipo-am", label: "Equipo AM" },
            { href: "/contacto", label: "Contacto" },
            { href: "/trabaja-en-am", label: "Trabajá en AM" },
            { href: "/en", label: "English site" },
        ],
    },
];

const COLUMNAS_EN: Columna[] = [
    {
        titulo: "Treatments",
        enlaces: [
            { href: "/en/porcelain-veneers-buenos-aires", label: "Porcelain veneers" },
            { href: "/en/ultra-thin-veneers-buenos-aires", label: "Ultra-thin veneers" },
            { href: "/en/smile-design-buenos-aires", label: "Smile design" },
            { href: "/en/invisible-aligners-buenos-aires", label: "Invisible aligners" },
            { href: "/en/dental-implants-buenos-aires", label: "Dental implants" },
            { href: "/en/teeth-whitening-buenos-aires", label: "Teeth whitening" },
            { href: "/en/cosmetic-dentistry-buenos-aires", label: "Cosmetic dentistry" },
        ],
    },
    {
        titulo: "Costs",
        enlaces: [
            { href: "/en/veneers-cost-buenos-aires", label: "Veneers cost" },
            { href: "/en/blog/veneers-cost-argentina", label: "Veneers cost in Argentina" },
            { href: "/en/dental-tourism-argentina", label: "Dental tourism" },
        ],
    },
    {
        titulo: "Results",
        enlaces: [
            { href: "/en/before-after", label: "Before & after" },
            { href: "/en/reviews", label: "Reviews" },
            { href: "/en/blog", label: "Blog" },
            { href: "/en/press", label: "Press" },
            { href: "/en/smile-simulator", label: "Smile simulator" },
            { href: "/en/porcelain-vs-composite-veneers", label: "Porcelain vs composite" },
            { href: "/en/veneers-vs-aligners", label: "Veneers vs aligners" },
        ],
    },
    {
        titulo: "Read",
        enlaces: [
            { href: "/en/blog/do-veneers-damage-your-teeth", label: "Do veneers damage your teeth?" },
            { href: "/en/blog/how-long-do-porcelain-veneers-last", label: "How long do veneers last?" },
        ],
    },
    {
        titulo: "AM",
        enlaces: [
            { href: "/en/clinic", label: "The clinic" },
            { href: "/en/dr-ariel-merino", label: "Dr. Ariel Merino" },
            { href: "/en/team", label: "Team AM" },
            { href: "/en/contact", label: "Contact" },
            { href: "/", label: "Sitio en español" },
        ],
    },
];

const COPY = {
    es: {
        aria: "Mapa del sitio",
        direccion: "Camila O'Gorman 412, Oficina 101 · Puerto Madero, Buenos Aires",
        legal: "Dr. Ariel Merino · MN 34.869",
    },
    en: {
        aria: "Site map",
        direccion: "Camila O'Gorman 412, Suite 101 · Puerto Madero, Buenos Aires, Argentina",
        legal: "Dr. Ariel Merino · MN 34.869",
    },
};

// El link-in-bio de Instagram es un trampolín a WhatsApp: un footer de 40
// enlaces ahí sólo agrega fuga.
const RUTAS_SIN_FOOTER = ["/ig"];

export default function SiteFooter() {
    const pathname = usePathname() ?? "/";
    if (RUTAS_SIN_FOOTER.includes(pathname)) return null;

    const en = pathname === "/en" || pathname.startsWith("/en/");
    const columnas = en ? COLUMNAS_EN : COLUMNAS_ES;
    const t = en ? COPY.en : COPY.es;

    return (
        <footer className="border-t border-oro/10 bg-carbon-soft px-6 pt-16 pb-10">
            <nav aria-label={t.aria} className="mx-auto max-w-6xl">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
                    {columnas.map((columna) => (
                        <div key={columna.titulo}>
                            <h2 className="mb-4 font-cormorant text-sm uppercase tracking-[0.25em] text-oro">
                                {columna.titulo}
                            </h2>
                            <ul className="space-y-2.5">
                                {columna.enlaces.map((enlace) => (
                                    <li key={enlace.href}>
                                        <Link
                                            href={enlace.href}
                                            className="font-manrope text-[13px] font-light leading-snug text-crema/45 transition-colors hover:text-oro"
                                        >
                                            {enlace.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </nav>

            <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-2 border-t border-crema/5 pt-8 font-manrope text-[11px] tracking-wide text-crema/25 sm:flex-row sm:items-center sm:justify-between">
                <span>{t.direccion}</span>
                <span>{t.legal}</span>
            </div>
        </footer>
    );
}
