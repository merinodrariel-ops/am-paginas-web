import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Testimonios from "@/components/Testimonios";
import Link from "next/link";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Opiniones de AM Estética Dental · 4.9★ en Google · +120 Reseñas",
    description: "Lee las opiniones reales de pacientes de AM Estética Dental en Buenos Aires. 4.9 sobre 5 con más de 120 reseñas verificadas en Google. Dr. Ariel Merino, Puerto Madero.",
    alternates: {
        canonical: "https://www.amesteticadental.com/opiniones",
    },
    openGraph: {
        title: "Opiniones y Reseñas de AM Estética Dental · 4.9★ Google",
        description: "Más de 120 pacientes reales opinan sobre su experiencia en AM Estética Dental, la clínica de carillas y diseño de sonrisa del Dr. Ariel Merino en Puerto Madero.",
        url: "https://www.amesteticadental.com/opiniones",
        locale: "es_AR",
        type: "website",
    },
};

const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "AM Estética Dental",
    "url": "https://www.amesteticadental.com",
    "telephone": "+5491170219298",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Camila O'Gorman 412, Oficina 101",
        "addressLocality": "Puerto Madero",
        "addressRegion": "Ciudad Autónoma de Buenos Aires",
        "addressCountry": "AR",
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120",
        "bestRating": "5",
        "worstRating": "1",
    },
    "review": [
        {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Agustina Zacariaz" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "name": "Carillas de resina - Excelente resultado",
            "reviewBody": "Fui a realizarme carillas de resina en mis dos dientes frontales, la verdad estoy muy feliz con los resultados.",
        },
        {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Santiago Ferraro" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "name": "Atención de primera desde el primer momento",
            "reviewBody": "Mi experiencia fue genial, desde ingresar al consultorio hasta irme, la atención no solo de Ari, si no de todas las chicas que trabajan con el es excelente.",
        },
        {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Valentina Oyarzun" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "name": "Blanqueamiento - quedé feliz",
            "reviewBody": "Hace tiempo quería ir a la consulta con el doctor y organizamos para realizarme un blanqueamiento, me quedó hermoso el trabajo, feliz.",
        },
        {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Camila Rossi" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "name": "Transformación de sonrisa que cambió mi vida",
            "reviewBody": "La única pregunta que me hago hoy es por qué no me animé antes a regalarme esta sonrisa que cambió mi vida.",
        },
        {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Julieta Marquez" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "name": "Carillas premium - natural y sin presión",
            "reviewBody": "Nunca sentí que me vendieran algo. Me explicaron todo y el resultado se vio natural desde el primer momento.",
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.amesteticadental.com" },
        { "@type": "ListItem", "position": 2, "name": "Opiniones", "item": "https://www.amesteticadental.com/opiniones" },
    ],
};

export default function OpinionesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <Navbar />

            {/* Hero */}
            <section className="relative bg-carbon pt-32 pb-20 px-6 text-center overflow-hidden">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(242,185,13,0.07),transparent)]"
                />
                <div className="relative mx-auto max-w-3xl">
                    <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-center gap-2 font-manrope text-[11px] uppercase tracking-[0.3em] text-crema/35">
                        <Link href="/" className="hover:text-crema/60 transition-colors">Inicio</Link>
                        <span>/</span>
                        <span className="text-oro/70">Opiniones</span>
                    </nav>

                    <span className="mb-5 inline-flex rounded-full border border-oro/20 bg-oro/8 px-4 py-1.5 font-manrope text-[10px] uppercase tracking-[0.38em] text-oro">
                        +120 reseñas verificadas
                    </span>

                    <h1 className="mt-4 font-manrope text-4xl font-light leading-tight text-crema md:text-5xl lg:text-6xl">
                        Opiniones de{" "}
                        <span className="font-cormorant italic text-oro">AM Estética Dental</span>
                    </h1>

                    <p className="mt-6 font-manrope text-base leading-relaxed text-crema/55 md:text-lg">
                        Pacientes reales sobre su experiencia con el Dr. Ariel Merino en Puerto Madero, Buenos Aires.
                        <br />
                        <strong className="text-crema/75 font-medium">4.9 sobre 5 en Google</strong> con más de 120 reseñas verificadas.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-6 w-6 text-oro" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        ))}
                        <span className="ml-3 font-manrope text-2xl font-light text-crema">4.9</span>
                    </div>
                </div>
            </section>

            {/* Testimonios (videos + reviews marquee) */}
            <Testimonios />

            {/* CTA */}
            <section className="bg-carbon-soft border-t border-oro/10 px-6 py-20 text-center">
                <div className="mx-auto max-w-xl">
                    <p className="font-cormorant text-3xl italic text-crema md:text-4xl">
                        ¿Querés ser el próximo caso de éxito?
                    </p>
                    <p className="mt-4 font-manrope text-sm text-crema/50">
                        Agendá tu consulta de evaluación con el Dr. Ariel Merino.
                    </p>
                    <a
                        href="https://wa.me/5491170219298?text=Hola%20AM%20Est%C3%A9tica%20Dental%2C%20vi%20las%20opiniones%20y%20quiero%20agendar%20una%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(120deg,#8f5b11,#c88412,#f0b10d,#fff0b1,#f4c646,#8f5b11)] px-8 py-4 font-manrope text-sm font-semibold text-carbon shadow-[0_0_28px_rgba(242,185,13,0.22)] transition-all hover:shadow-[0_0_40px_rgba(242,185,13,0.35)] hover:scale-[1.02]"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.214a.75.75 0 00.93.93l5.356-1.475A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 01-4.974-1.363l-.357-.213-3.706 1.02 1.02-3.706-.213-.357A9.73 9.73 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                        </svg>
                        Consulta por WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}
