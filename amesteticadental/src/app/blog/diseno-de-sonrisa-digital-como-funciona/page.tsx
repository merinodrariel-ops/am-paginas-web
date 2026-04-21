import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Diseño de Sonrisa Digital: cómo funciona y qué podés esperar | AM Estética Dental",
    description: "El proceso completo del diseño de sonrisa digital: desde la primera foto hasta ver tu nueva sonrisa en pantalla antes de que se toque un solo diente. Dr. Ariel Merino, Puerto Madero.",
    alternates: {
        canonical: "https://www.amesteticadental.com/blog/diseno-de-sonrisa-digital-como-funciona",
    },
    openGraph: {
        title: "Diseño de Sonrisa Digital: cómo funciona",
        description: "Ves el resultado antes de empezar. Cómo funciona el proceso de diseño de sonrisa digital paso a paso.",
        url: "https://www.amesteticadental.com/blog/diseno-de-sonrisa-digital-como-funciona",
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Diseño de Sonrisa Digital: cómo funciona y qué podés esperar",
    "description": "El proceso completo del diseño de sonrisa digital en AM Estética Dental: planificación, software, y cómo el paciente aprueba el resultado antes de empezar.",
    "author": {
        "@type": "Person",
        "name": "Dr. Ariel Merino",
        "url": "https://www.wikidata.org/wiki/Q134287655",
        "jobTitle": "Odontólogo Estético",
    },
    "publisher": {
        "@type": "Organization",
        "name": "AM Estética Dental",
        "url": "https://www.amesteticadental.com",
    },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30",
    "mainEntityOfPage": "https://www.amesteticadental.com/blog/diseno-de-sonrisa-digital-como-funciona",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Le%C3%AD%20sobre%20el%20dise%C3%B1o%20de%20sonrisa%20digital%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s.";

export default function ArticuloDisenoSonrisaDigital() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO ── */}
                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute right-0 top-[15%] w-[500px] h-[400px] rounded-full bg-oro/4 blur-[140px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Diseño de Sonrisa</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Diseño de sonrisa digital:{" "}
                            <span className="font-cormorant italic text-oro">cómo funciona y qué podés esperar</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            El diferencial más importante del tratamiento en AM Estética Dental: ves exactamente cómo va a quedar tu sonrisa antes de que se toque un solo diente. Acá explicamos el proceso completo.
                        </p>
                        <div className="flex items-center gap-6 text-crema/35 font-manrope text-xs">
                            <span>Dr. Ariel Merino</span>
                            <span>·</span>
                            <span>AM Estética Dental, Puerto Madero</span>
                            <span>·</span>
                            <span>5 min de lectura</span>
                        </div>
                    </div>
                </section>

                {/* ── CONTENIDO ── */}
                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Intro */}
                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Hace 20 años, hacerse carillas era un acto de fe: el odontólogo describía el resultado, vos aprobabas, y recién cuando las carillas ya estaban cementadas sabías si te gustaba lo que habías pagado. El diseño de sonrisa digital cambió eso completamente.
                            </p>
                        </div>

                        {/* Qué es */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                ¿Qué es exactamente el diseño de sonrisa digital?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                Es un proceso de planificación estética que usa software especializado y fotografías clínicas de alta calidad para diseñar virtualmente el resultado final del tratamiento. Sobre las fotos reales de tu cara y tu sonrisa, el especialista dibuja los contornos, proporciones y color de los nuevos dientes — y te muestra el resultado en pantalla.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                No es un filtro de Instagram ni un montaje genérico. Es un diseño clínico real, sobre tu anatomía específica, que después se traduce directamente en las instrucciones para el laboratorio que fabrica las carillas.
                            </p>
                        </section>

                        {/* El proceso paso a paso */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                El proceso paso a paso
                            </h2>
                            <div className="space-y-0">
                                {[
                                    {
                                        n: "01",
                                        titulo: "Fotografías clínicas",
                                        texto: "Todo empieza con fotos. No las del celular — fotos clínicas con retractores, fondo neutro, iluminación controlada. Se toman fotos de frente, de perfil, de la sonrisa abierta, de los dientes solos y con los labios relajados. Estas fotos son la materia prima del diseño.",
                                    },
                                    {
                                        n: "02",
                                        titulo: "Análisis de proporciones",
                                        texto: "El especialista analiza la relación entre el tamaño de los dientes, el contorno de las encías, la línea media, la línea de la sonrisa y el marco labial. El objetivo es que el resultado sea armónico con la cara — no dientes genéricos, sino dientes que le quedan bien a esa persona específica.",
                                    },
                                    {
                                        n: "03",
                                        titulo: "Diseño digital",
                                        texto: "Sobre las fotos clínicas se dibuja el nuevo diseño: forma de los dientes, bordes incisales, línea de encías, proporciones. El paciente ve en tiempo real cómo impacta cada ajuste. Si el incisivo central te parece muy largo, se lo decís y se modifica en el acto.",
                                    },
                                    {
                                        n: "04",
                                        titulo: "Aprobación del diseño",
                                        texto: "Antes de avanzar cualquier paso clínico, el paciente aprueba el diseño. Esto es no negociable en AM Estética Dental. Si no estás conforme con algo del diseño, no se empieza.",
                                    },
                                    {
                                        n: "05",
                                        titulo: "Mockup provisorio (opcional)",
                                        texto: "En muchos casos fabricamos un mockup — una reproducción provisoria del diseño en resina que se coloca directamente sobre los dientes sin ningún desgaste. Es como probarte los dientes nuevos en la boca antes de fabricar las carillas definitivas.",
                                    },
                                    {
                                        n: "06",
                                        titulo: "Instrucciones al laboratorio",
                                        texto: "El diseño aprobado se convierte en las especificaciones técnicas que recibe el laboratorio. El ceramista que fabrica las carillas trabaja sobre el mismo diseño que vos aprobaste — no hay margen para interpretaciones.",
                                    },
                                ].map((step, i, arr) => (
                                    <div key={step.n} className={`flex gap-8 py-8 ${i < arr.length - 1 ? "border-b border-oro/10" : ""}`}>
                                        <span className="text-oro/35 font-manrope font-light text-3xl flex-none w-12 pt-1">{step.n}</span>
                                        <div>
                                            <h3 className="text-crema font-manrope font-medium text-base mb-2">{step.titulo}</h3>
                                            <p className="text-crema/60 font-manrope text-sm leading-relaxed">{step.texto}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Qué puede y no puede hacer */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Qué puede hacer el diseño digital — y qué no
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                El diseño de sonrisa digital es una herramienta de planificación muy precisa, pero tiene límites que vale la pena entender:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="border border-green-800/30 rounded-xl p-6 bg-green-950/10">
                                    <h3 className="text-green-400/80 font-manrope font-medium text-sm mb-4 uppercase tracking-wider">Lo que sí puede hacer</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Mostrar el resultado final antes de empezar",
                                            "Ajustar forma, tamaño y proporciones",
                                            "Simular diferentes opciones de color",
                                            "Detectar asimetrías y problemas de línea media",
                                            "Coordinar el resultado con los rasgos faciales",
                                        ].map((p, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-green-400/60 text-xs flex-none mt-0.5">→</span>
                                                <span className="text-crema/60 font-manrope text-xs leading-relaxed">{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border border-red-800/30 rounded-xl p-6 bg-red-950/10">
                                    <h3 className="text-red-400/80 font-manrope font-medium text-sm mb-4 uppercase tracking-wider">Lo que no puede garantizar</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Replicar exactamente una foto de otra persona",
                                            "Compensar posiciones dentales muy desviadas sin ortodoncia",
                                            "Predecir cómo cambia el resultado con el paso del tiempo",
                                            "Reproducir el resultado en un tejido biológico con 100% de precisión (hay variables clínicas)",
                                        ].map((p, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-red-400/60 text-xs flex-none mt-0.5">—</span>
                                                <span className="text-crema/60 font-manrope text-xs leading-relaxed">{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Por qué importa */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Por qué el diseño digital cambia la experiencia del paciente
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                Sin diseño digital, el paciente entra al tratamiento con incertidumbre. Con diseño digital, entra con un acuerdo. Esa diferencia es enorme tanto para el resultado clínico como para la confianza del paciente durante el proceso.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                En AM Estética Dental el diseño digital no es un extra ni una opción premium — es parte del protocolo estándar de todos los tratamientos estéticos. No se avanza sin que el paciente haya visto y aprobado el resultado.
                            </p>
                        </section>

                        {/* Conclusión */}
                        <section className="border-t border-oro/15 pt-10">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">En resumen</h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                El diseño de sonrisa digital es la diferencia entre elegir una sonrisa nueva con información completa o hacerlo a ciegas. Combinado con un mockup provisorio, la experiencia del paciente pasa de "espero que quede bien" a "ya sé exactamente cómo va a quedar". Para un tratamiento de esta inversión y esta permanencia, esa diferencia importa.
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Querés ver cómo quedaría tu sonrisa?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Empezá con el diseño — sin tocar nada todavía
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                Mandanos fotos de tu sonrisa por WhatsApp. Evaluamos tu caso y te mostramos qué podría lograrse con un diseño de sonrisa digital.
                            </p>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Consultar por WhatsApp →
                            </a>
                        </section>

                        {/* Links internos */}
                        <section>
                            <span className="text-oro/50 font-manrope uppercase tracking-[0.3em] text-xs block mb-5">Seguir leyendo</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { titulo: "¿Las carillas dañan los dientes?", href: "/blog/las-carillas-danan-los-dientes", desc: "Mitos y realidades sobre el desgaste de esmalte." },
                                    { titulo: "¿Cuánto duran las carillas de porcelana?", href: "/blog/cuanto-duran-las-carillas-de-porcelana", desc: "Vida útil, materiales y cómo cuidarlas." },
                                ].map((l) => (
                                    <Link key={l.href} href={l.href} className="border border-oro/12 rounded-xl p-5 bg-carbon-soft hover:border-oro/30 transition-colors group">
                                        <h4 className="text-crema font-manrope font-medium text-sm mb-1 group-hover:text-oro transition-colors">{l.titulo}</h4>
                                        <p className="text-crema/45 font-manrope text-xs">{l.desc}</p>
                                        <span className="text-oro/35 group-hover:text-oro text-sm mt-2 block transition-colors">→</span>
                                    </Link>
                                ))}
                            </div>
                        </section>

                    </div>
                </article>
            </main>
        </>
    );
}
