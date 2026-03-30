import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://amesteticadental.com"),
    title: "¿Cuántas sesiones se necesitan para las carillas de porcelana? | AM Estética Dental",
    description: "El cronograma real de un tratamiento de carillas: qué pasa en cada sesión, cuánto tiempo hay entre ellas y qué podés hacer en el medio. Dr. Ariel Merino, Puerto Madero.",
    alternates: {
        canonical: "https://amesteticadental.com/blog/cuantas-sesiones-se-necesitan-para-las-carillas",
    },
    openGraph: {
        title: "¿Cuántas sesiones se necesitan para las carillas de porcelana?",
        description: "2 a 3 sesiones en 10 a 14 días. El cronograma real del tratamiento de carillas en AM Estética Dental.",
        url: "https://amesteticadental.com/blog/cuantas-sesiones-se-necesitan-para-las-carillas",
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "¿Cuántas sesiones se necesitan para las carillas de porcelana?",
    "description": "Cronograma detallado del tratamiento de carillas de porcelana: sesiones, tiempos entre sesiones y qué ocurre en cada etapa.",
    "author": {
        "@type": "Person",
        "name": "Dr. Ariel Merino",
        "url": "https://www.wikidata.org/wiki/Q138828257",
        "jobTitle": "Odontólogo Estético",
    },
    "publisher": {
        "@type": "Organization",
        "name": "AM Estética Dental",
        "url": "https://amesteticadental.com",
    },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30",
    "mainEntityOfPage": "https://amesteticadental.com/blog/cuantas-sesiones-se-necesitan-para-las-carillas",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20el%20proceso%20de%20carillas%20y%20cuántas%20sesiones%20necesito.";

export default function ArticuloSesionesCarillas() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute left-0 top-[20%] w-[400px] h-[400px] rounded-full bg-oro/4 blur-[130px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Proceso</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            ¿Cuántas sesiones se necesitan{" "}
                            <span className="font-cormorant italic text-oro">para las carillas?</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            La respuesta: 2 a 3 sesiones en un período de 10 a 14 días. Acá explicamos qué pasa exactamente en cada una.
                        </p>
                        <div className="flex items-center gap-6 text-crema/35 font-manrope text-xs">
                            <span>Dr. Ariel Merino</span>
                            <span>·</span>
                            <span>AM Estética Dental, Puerto Madero</span>
                            <span>·</span>
                            <span>4 min de lectura</span>
                        </div>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Uno de los miedos más comunes es pensar que hacerse carillas implica meses de tratamiento, múltiples visitas y semanas sin poder mostrar la sonrisa. La realidad es distinta: el proceso es más compacto de lo que la mayoría imagina.
                            </p>
                        </div>

                        {/* El resumen */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                El cronograma en números
                            </h2>
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {[
                                    { v: "2–3", l: "sesiones en total" },
                                    { v: "10–14", l: "días de proceso" },
                                    { v: "~2h", l: "duración de cada sesión" },
                                ].map((s) => (
                                    <div key={s.l} className="border border-oro/15 rounded-xl p-5 bg-carbon-soft text-center">
                                        <div className="text-oro font-manrope font-semibold text-2xl mb-1">{s.v}</div>
                                        <div className="text-crema/50 font-manrope text-xs">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Entre cada sesión hay tiempo de laboratorio: el ceramista fabrica las carillas según el diseño aprobado. Ese período (5 a 7 días hábiles) es lo que determina el tiempo total del tratamiento. No es tiempo de recuperación — es tiempo de fabricación.
                            </p>
                        </section>

                        {/* Cada sesión */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Qué pasa en cada sesión
                            </h2>
                            <div className="space-y-0">
                                {[
                                    {
                                        sesion: "Sesión 1",
                                        titulo: "Evaluación, fotografías y diseño digital",
                                        duracion: "1.5 – 2 hs",
                                        contenido: [
                                            "Evaluación clínica completa: encías, oclusión, estado del esmalte",
                                            "Fotografías clínicas de alta resolución",
                                            "Diseño digital de la nueva sonrisa en pantalla",
                                            "Ajustes y aprobación del diseño por parte del paciente",
                                            "En algunos casos: mockup provisorio en boca para validar el diseño",
                                        ],
                                        nota: "Al terminar esta sesión no se tocó ningún diente. El diseño está aprobado y el caso está listo para ir al laboratorio.",
                                    },
                                    {
                                        sesion: "Entre sesión 1 y 2",
                                        titulo: "Tiempo de laboratorio",
                                        duracion: "5–7 días hábiles",
                                        contenido: [
                                            "El ceramista fabrica las carillas siguiendo el diseño aprobado",
                                            "El paciente continúa su vida normal — no hay restricciones",
                                            "No hay molestias ni aspecto diferente al habitual",
                                        ],
                                        nota: null,
                                    },
                                    {
                                        sesion: "Sesión 2",
                                        titulo: "Preparación mínima y provisorios (cuando aplica)",
                                        duracion: "1.5 – 2 hs",
                                        contenido: [
                                            "Preparación mínima del esmalte si el caso lo requiere (0,3 a 0,7 mm)",
                                            "Impresión o escaneo digital para ajuste final de las carillas",
                                            "Colocación de provisorios estéticos mientras las carillas definitivas se ajustan",
                                        ],
                                        nota: "Los provisorios permiten vivir con normalidad. Se pueden comer alimentos normales con algunas excepciones (muy duros o muy pegajosos).",
                                    },
                                    {
                                        sesion: "Sesión 3",
                                        titulo: "Cementación definitiva",
                                        duracion: "1.5 – 2 hs",
                                        contenido: [
                                            "Verificación del ajuste, color y forma de las carillas definitivas",
                                            "Cementación con adhesivo de última generación",
                                            "Ajuste de oclusión (cómo morderás con las nuevas carillas)",
                                            "Pulido y acabado final",
                                            "Fotografías del resultado",
                                        ],
                                        nota: "Al salir de esta sesión el tratamiento está terminado. No hay período de recuperación — se puede comer normalmente el mismo día.",
                                    },
                                ].map((item, i, arr) => (
                                    <div key={i} className={`py-8 ${i < arr.length - 1 ? "border-b border-oro/10" : ""}`}>
                                        <div className="flex items-start gap-6">
                                            <div className="flex-none">
                                                <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.2em] text-oro/70 whitespace-nowrap">
                                                    {item.sesion}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                                                    <h3 className="text-crema font-manrope font-medium text-base">{item.titulo}</h3>
                                                    <span className="text-crema/35 font-manrope text-xs flex-none">{item.duracion}</span>
                                                </div>
                                                <ul className="space-y-2 mb-4">
                                                    {item.contenido.map((c, j) => (
                                                        <li key={j} className="flex items-start gap-3">
                                                            <span className="text-oro/40 text-xs flex-none mt-0.5">→</span>
                                                            <span className="text-crema/60 font-manrope text-sm leading-relaxed">{c}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {item.nota && (
                                                    <p className="text-crema/45 font-manrope text-xs leading-relaxed italic border-l border-oro/20 pl-4">
                                                        {item.nota}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Para pacientes del exterior */}
                        <section className="border border-oro/15 rounded-xl p-6 bg-carbon-soft">
                            <h2 className="text-lg font-manrope font-medium text-crema mb-3">Para pacientes que viajan desde el exterior</h2>
                            <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-3">
                                El cronograma de 10 a 14 días está pensado específicamente para no requerir estadías largas. En muchos casos podemos comprimir el proceso en 10 días corridos:
                            </p>
                            <ul className="space-y-2 mb-4">
                                {[
                                    "Día 1–2: evaluación y diseño digital",
                                    "Día 3–8: fabricación en laboratorio (podés conocer Buenos Aires)",
                                    "Día 9–10: preparación + cementación definitiva",
                                ].map((p, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-oro/50 text-xs flex-none mt-0.5">→</span>
                                        <span className="text-crema/60 font-manrope text-xs">{p}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/turismo-dental" className="text-oro font-manrope text-sm hover:text-oro-light transition-colors">
                                Ver información completa para turismo dental →
                            </Link>
                        </section>

                        <section className="border-t border-oro/15 pt-10">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">En resumen</h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                El tratamiento de carillas de porcelana en AM Estética Dental es de 2 a 3 sesiones en 10 a 14 días. No hay período largo de recuperación, no hay dolor entre sesiones y el resultado final está completo al terminar la última sesión. Lo que determina el tiempo es el laboratorio — no el tratamiento en sí.
                            </p>
                        </section>

                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Listo para empezar?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Agendá la primera sesión
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                La primera sesión es evaluación y diseño — sin tocar ningún diente. Salís sabiendo exactamente cómo va a quedar tu sonrisa.
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

                        <section>
                            <span className="text-oro/50 font-manrope uppercase tracking-[0.3em] text-xs block mb-5">Seguir leyendo</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { titulo: "Diseño de sonrisa digital: cómo funciona", href: "/blog/diseno-de-sonrisa-digital-como-funciona", desc: "El proceso de la primera sesión en detalle." },
                                    { titulo: "¿Cuánto duran las carillas de porcelana?", href: "/blog/cuanto-duran-las-carillas-de-porcelana", desc: "Vida útil y cómo maximizarla." },
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
