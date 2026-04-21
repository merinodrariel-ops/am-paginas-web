import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Diseño de Sonrisa Digital en Buenos Aires | AM Estética Dental",
    description: "Diseño de sonrisa digital en Puerto Madero, Buenos Aires. Ves el resultado antes de empezar. Simulación 3D, carillas, blanqueamiento e implantes coordinados por el Dr. Ariel Merino.",
    alternates: {
        canonical: "https://www.amesteticadental.com/diseno-de-sonrisa",
    },
    openGraph: {
        title: "Diseño de Sonrisa Digital en Buenos Aires | AM Estética Dental",
        description: "Smile design digital: ves el resultado antes de empezar. Personalización total, criterio estético y precisión clínica en Puerto Madero.",
        url: "https://www.amesteticadental.com/diseno-de-sonrisa",
        locale: "es_AR",
        type: "website",
    },
};

const faqItems = [
    {
        pregunta: "¿Qué es el diseño de sonrisa digital?",
        respuesta: "El diseño de sonrisa digital (DSD) es un proceso de planificación estética en el que se diseña digitalmente tu nueva sonrisa antes de realizar cualquier procedimiento. Se trabaja a partir de fotos y análisis facial para proponer formas, tamaños y colores adaptados a tu rostro. El resultado se muestra en pantalla y se ajusta hasta que quedés conforme.",
    },
    {
        pregunta: "¿Cuándo es conveniente hacer un diseño de sonrisa?",
        respuesta: "El diseño de sonrisa es el punto de partida para cualquier transformación estética que involucre múltiples piezas. Es especialmente útil cuando se combinan carillas con blanqueamiento, implantes o correcciones de encía, porque permite coordinar todos los tratamientos hacia un resultado armónico y planificado.",
    },
    {
        pregunta: "¿Puedo ver cómo va a quedar antes de empezar?",
        respuesta: "Sí, siempre. En AM Estética Dental el diseño digital es parte del proceso estándar. Diseñamos tu sonrisa en pantalla, hacemos todos los ajustes que necesités y solo avanzamos cuando aprobás el resultado. No empezamos ningún procedimiento hasta que estés convencido.",
    },
    {
        pregunta: "¿El diseño de sonrisa implica necesariamente carillas?",
        respuesta: "No. El diseño define el objetivo estético; los tratamientos para lograrlo dependen del caso. En algunos casos el resultado se logra solo con blanqueamiento. En otros se combinan carillas, contorno gingival y ortodoncia. La simulación digital ayuda a planificar cuál es la solución más eficiente para cada situación.",
    },
    {
        pregunta: "¿Cuánto tiempo tarda el proceso?",
        respuesta: "El proceso completo de diseño y ejecución toma entre 2 y 4 semanas dependiendo del plan de tratamiento. La primera sesión es de análisis y diseño. Las siguientes son de ejecución técnica. El tiempo total varía según los tratamientos involucrados.",
    },
    {
        pregunta: "¿Para qué tipo de casos está indicado?",
        respuesta: "El diseño de sonrisa está indicado para cualquier persona que quiera una transformación planificada y coordinada. Desde cambios menores de forma o color hasta rehabilitaciones completas. No tiene restricción de edad.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(f => ({
        "@type": "Question",
        "name": f.pregunta,
        "acceptedAnswer": { "@type": "Answer", "text": f.respuesta },
    })),
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diseño de Sonrisa Digital",
    "serviceType": "Odontología Estética",
    "description": "Planificación y simulación digital de la sonrisa antes de iniciar cualquier tratamiento estético. Personalización total con criterio clínico y estético.",
    "provider": {
        "@type": "Dentist",
        "name": "AM Estética Dental",
        "url": "https://www.amesteticadental.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Camila O'Gorman 412, Oficina 101",
            "addressLocality": "Puerto Madero",
            "addressRegion": "Ciudad Autónoma de Buenos Aires",
            "addressCountry": "AR",
        },
    },
    "areaServed": { "@type": "City", "name": "Buenos Aires", "addressCountry": "AR" },
    "priceRange": "$$$$",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20interesa%20el%20dise%C3%B1o%20de%20sonrisa%20digital.";

export default function DisenoSonrisaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <Navbar />

            <main className="bg-carbon text-crema font-manrope">

                {/* ── HERO ── */}
                <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
                    <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
                    <div className="max-w-4xl mx-auto w-full">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                            AM Estética Dental · Puerto Madero
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
                            Diseño de Sonrisa<br />
                            <span className="font-cormorant italic text-oro">Digital en Buenos Aires</span>
                        </h1>
                        <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                            Antes de tocar un solo diente, diseñamos tu sonrisa en 3D y te la mostramos en pantalla. Ajustás lo que quieras, aprobás el resultado, y recién entonces empezamos. Sin sorpresas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Consultar sobre diseño de sonrisa →
                            </a>
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
                            >
                                ← Volver al sitio
                            </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
                            {[
                                { v: "4.9★", l: "Google Reviews" },
                                { v: "Forbes", l: "Argentina" },
                                { v: "3D Digital", l: "Antes de empezar" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── QUÉ INCLUYE ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Qué incluye</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            No es solo estética.{" "}
                            <span className="font-cormorant italic text-oro">Es planificación total.</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { t: "Análisis facial y dental", d: "Evaluamos proporciones del rostro, línea de sonrisa, color del esmalte y estado de los tejidos para definir el marco del diseño." },
                                { t: "Simulación 3D previa", d: "Diseñamos digitalmente el resultado esperado. Lo ves en pantalla, pedís cambios y aprobás antes de que empiece cualquier procedimiento." },
                                { t: "Coordinación de tratamientos", d: "El diseño integra todos los tratamientos necesarios: carillas, blanqueamiento, contorno gingival, alineadores. Todo planificado hacia un resultado unificado." },
                                { t: "Mockup previo si aplica", d: "En muchos casos podemos mostrar una prueba física provisional antes de las piezas definitivas, para confirmar el resultado en tu boca." },
                            ].map((item) => (
                                <div key={item.t} className="border border-oro/15 rounded-2xl p-7 bg-carbon hover:border-oro/30 transition-colors">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">{item.t}</h3>
                                    <p className="text-crema/65 font-manrope text-sm leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PROCESO ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Cómo funciona</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            De la consulta{" "}
                            <span className="font-cormorant italic text-oro">al resultado final</span>
                        </h2>
                        <div className="space-y-0">
                            {[
                                { n: "01", t: "Consulta y análisis", d: "Te escuchamos, analizamos tu caso y te contamos las opciones. Sin compromiso." },
                                { n: "02", t: "Fotografía y mapeo facial", d: "Tomamos fotos de referencia para trabajar sobre proporciones reales de tu rostro." },
                                { n: "03", t: "Diseño digital de tu sonrisa", d: "Trabajamos el diseño en software especializado y te lo mostramos en pantalla. Ajustamos hasta que quedés conforme." },
                                { n: "04", t: "Aprobación y plan de tratamiento", d: "Aprobás el diseño y definimos juntos el plan: qué tratamientos, en qué orden y en qué tiempos." },
                                { n: "05", t: "Ejecución clínica", d: "Ejecutamos el plan con precisión de detalle. Carillas, blanqueamiento, contorno gingival u otros tratamientos según lo planificado." },
                                { n: "06", t: "Resultado verificado", d: "Comparamos el resultado con el diseño digital original. Cada ajuste final se hace en la misma sesión." },
                            ].map((step, i, arr) => (
                                <div key={step.n} className={`flex gap-8 py-8 ${i < arr.length - 1 ? "border-b border-oro/10" : ""}`}>
                                    <span className="text-oro/35 font-manrope font-light text-3xl flex-none w-12 pt-1">{step.n}</span>
                                    <div>
                                        <div className="text-crema font-manrope font-medium text-base mb-2">{step.t}</div>
                                        <div className="text-crema-muted font-manrope text-sm leading-relaxed">{step.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA MID ── */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <p className="text-crema font-manrope font-medium text-lg">¿Querés ver cómo puede quedar tu sonrisa?</p>
                            <p className="text-crema/55 font-manrope text-sm mt-1"></p>
                        </div>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-none inline-flex items-center gap-3 bg-oro text-carbon px-7 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                        >
                            Agendar consulta →
                        </a>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Preguntas frecuentes</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
                            Todo sobre el{" "}
                            <span className="font-cormorant italic text-oro">diseño de sonrisa digital</span>
                        </h2>
                        <SeoFaq items={faqItems} />
                    </div>
                </section>

                {/* ── TRATAMIENTOS RELACIONADOS ── */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">Tratamientos relacionados</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { label: "Carillas Dentales", href: "/carillas-dentales", desc: "Porcelana, resina y lentes de contacto dental." },
                                { label: "Alineadores Invisibles", href: "/alineadores-invisibles", desc: "Ortodoncia sin brackets visible." },
                            ].map((t) => (
                                <a
                                    key={t.href}
                                    href={t.href}
                                    className="border border-oro/15 rounded-xl px-6 py-5 bg-carbon hover:border-oro/35 transition-colors flex items-center justify-between"
                                >
                                    <div>
                                        <div className="text-crema font-manrope font-medium text-sm">{t.label}</div>
                                        <div className="text-crema/50 font-manrope text-xs mt-0.5">{t.desc}</div>
                                    </div>
                                    <span className="text-oro/50">→</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA FINAL ── */}
                <section className="py-28 px-6 md:px-12 text-center relative overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-oro/5 blur-[120px] pointer-events-none" />
                    <div className="relative max-w-2xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">El primer paso</span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Empezá viendo{" "}
                            <span className="font-cormorant italic text-oro">tu nueva sonrisa</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            En la primera consulta diseñamos el resultado digital. Te lo mostramos, lo ajustamos y decidís si querés avanzar. Sin presión, sin compromiso.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-colors"
                        >
                            Consultar por WhatsApp →
                        </a>
                        <p className="text-crema/30 font-manrope text-xs mt-6">
                            Camila O'Gorman 412, Oficina 101, Puerto Madero · Lun–Vie 10:00–18:00
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
