import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://amesteticadental.com"),
    title: "¿Las carillas dañan los dientes? Mitos y realidades | AM Estética Dental",
    description: "La pregunta más frecuente antes de hacerse carillas. Qué pasa realmente con el esmalte, qué técnicas minimizan el impacto y cuándo no hay ningún desgaste.",
    alternates: {
        canonical: "https://amesteticadental.com/blog/las-carillas-danan-los-dientes",
    },
    openGraph: {
        title: "¿Las carillas dañan los dientes? Mitos y realidades",
        description: "Qué pasa realmente con el esmalte cuando te colocás carillas. Sin mitos, sin marketing — la explicación clínica real.",
        url: "https://amesteticadental.com/blog/las-carillas-danan-los-dientes",
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "¿Las carillas dañan los dientes? Mitos y realidades",
    "description": "Qué pasa realmente con el esmalte cuando se colocan carillas dentales. Análisis clínico de mitos frecuentes.",
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
    "mainEntityOfPage": "https://amesteticadental.com/blog/las-carillas-danan-los-dientes",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20si%20las%20carillas%20da%C3%B1an%20los%20dientes%20y%20quiero%20consultar%20mi%20caso.";

const MITOS = [
    {
        mito: "«Las carillas destruyen el esmalte»",
        realidad: "El desgaste de esmalte en carillas modernas es mínimo — entre 0,3 y 0,7 mm en el caso de las carillas de porcelana convencionales, y cero en los lentes de contacto dental. Para ponerlo en contexto: el esmalte natural tiene entre 2 y 2,5 mm de grosor. El desgaste necesario representa menos del 30% de la capa de esmalte, y solo en la superficie frontal.",
        veredicto: "Mito",
    },
    {
        mito: "«Sin desgaste es mejor — las carillas sin preparación son siempre preferibles»",
        realidad: "Los lentes de contacto dental (sin desgaste) son ideales para casos específicos: dientes de buen tamaño y forma donde solo se quiere cambiar color o suavizar el contorno. En casos donde el diente es grande o tiene mala posición, pegar una carilla sin preparar resulta en un diente con aspecto de paleta — más grueso de lo natural. El desgaste mínimo existe para lograr un resultado que se vea natural.",
        veredicto: "Parcialmente falso",
    },
    {
        mito: "«Una vez que me hago carillas, tengo carillas para siempre»",
        realidad: "Verdad con matices. El esmalte que se preparó no se regenera, por lo que el diente necesitará siempre algún tipo de restauración en esa superficie. Pero no implica que el tratamiento sea para siempre sin cambios — las carillas tienen vida útil y eventualmente se reemplazan. El reemplazo es un proceso más sencillo que la primera colocación.",
        veredicto: "Parcialmente verdadero",
    },
    {
        mito: "«Las carillas se caen con facilidad»",
        realidad: "Con adhesivos modernos y técnica correcta, las carillas tienen una tasa de falla muy baja. Los estudios clínicos muestran tasas de supervivencia del 90–95% a los 10 años para carillas de porcelana feldespática colocadas correctamente. Las fallas ocurren principalmente por bruxismo sin protección, trauma o técnica deficiente de adhesión.",
        veredicto: "Mito",
    },
    {
        mito: "«Las carillas no se pueden hacer si tengo caries o encías inflamadas»",
        realidad: "Verdad. Pero no es un impedimento permanente. Es un orden de tratamiento: primero se resuelve cualquier patología activa (caries, enfermedad periodontal) y después se procede con el tratamiento estético. En AM Estética Dental hacemos la evaluación inicial para identificar exactamente qué hay que resolver antes de empezar.",
        veredicto: "Verdadero — pero con solución",
    },
];

export default function ArticuloCarillasDananDientes() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO ── */}
                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute left-0 top-[30%] w-[400px] h-[400px] rounded-full bg-oro/4 blur-[130px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Carillas</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            ¿Las carillas{" "}
                            <span className="font-cormorant italic text-oro">dañan los dientes?</span>
                            <br />Mitos y realidades
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            Es la pregunta que más escuchamos antes de que alguien se decida. Y tiene sentido hacerla. Acá respondemos sin rodeos, con la explicación clínica real — sin marketing ni miedos innecesarios.
                        </p>
                        <div className="flex items-center gap-6 text-crema/35 font-manrope text-xs">
                            <span>Dr. Ariel Merino</span>
                            <span>·</span>
                            <span>AM Estética Dental, Puerto Madero</span>
                            <span>·</span>
                            <span>6 min de lectura</span>
                        </div>
                    </div>
                </section>

                {/* ── CONTENIDO ── */}
                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Intro */}
                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Las carillas dentales tienen una reputación ambigua: para algunos son la solución definitiva, para otros hay una duda persistente sobre si "arruinan el diente natural". La realidad es más matizada y depende del tipo de carilla, del caso y de la técnica del operador.
                            </p>
                        </div>

                        {/* Lo que sí pasa */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Lo que sí ocurre al colocar carillas
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Para entender los mitos hay que saber qué implica el proceso real. Existen dos tipos de carillas según su relación con el esmalte:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                                <div className="border border-oro/15 rounded-xl p-6 bg-carbon-soft">
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-3">Carillas con preparación mínima</h3>
                                    <p className="text-crema/60 font-manrope text-xs leading-relaxed mb-3">
                                        Se desgasta una capa superficial del esmalte (0,3 a 0,7 mm) para que la carilla quede al ras del diente natural. El resultado es indistinguible de un diente real.
                                    </p>
                                    <p className="text-crema/40 font-manrope text-xs">Porcelana feldespática · IPS e.max</p>
                                </div>
                                <div className="border border-oro/15 rounded-xl p-6 bg-carbon-soft">
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-3">Carillas sin preparación (lentes de contacto dental)</h3>
                                    <p className="text-crema/60 font-manrope text-xs leading-relaxed mb-3">
                                        Se adhieren directamente al esmalte sin desgaste. Solo aplican para casos específicos donde el diente tiene el tamaño y posición correctos.
                                    </p>
                                    <p className="text-crema/40 font-manrope text-xs">Lumineers · Lentes de contacto dental</p>
                                </div>
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                En ambos casos, el adhesivo con que se cementan las carillas es tan fuerte que la unión carilla-diente es más resistente que el esmalte natural. El punto de falla, cuando ocurre, es la carilla — no el diente debajo.
                            </p>
                        </section>

                        {/* Mitos */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Los mitos más frecuentes — y la realidad
                            </h2>
                            <div className="space-y-6">
                                {MITOS.map((item, i) => (
                                    <div key={i} className="border border-oro/12 rounded-2xl overflow-hidden">
                                        <div className="flex items-start justify-between gap-4 p-6 bg-carbon-soft">
                                            <p className="text-crema font-manrope font-medium text-sm italic">{item.mito}</p>
                                            <span className={`flex-none font-manrope text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border ${
                                                item.veredicto === "Mito"
                                                    ? "border-red-800/40 text-red-400/70 bg-red-950/20"
                                                    : item.veredicto === "Parcialmente falso" || item.veredicto === "Parcialmente verdadero"
                                                        ? "border-oro/30 text-oro/70 bg-oro/5"
                                                        : "border-green-800/40 text-green-400/70 bg-green-950/20"
                                            }`}>
                                                {item.veredicto}
                                            </span>
                                        </div>
                                        <div className="px-6 py-5 border-t border-oro/8">
                                            <p className="text-crema/65 font-manrope text-sm leading-relaxed">{item.realidad}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Cuándo NO hacer carillas */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Cuándo las carillas no son la mejor opción
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Parte de hacer bien el trabajo es saber cuándo no hacerlo. Hay situaciones donde las carillas no son la indicación correcta:
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Dientes con muy poco esmalte disponible (el adhesivo no tiene superficie de calidad para anclar)",
                                    "Bruxismo severo sin posibilidad de hacer un protector nocturno adecuado",
                                    "Caries activas o enfermedad periodontal sin resolver",
                                    "Apiñamiento dental severo que requiere ortodoncia previa",
                                    "Pacientes con hábitos de mordida muy agresivos que no están dispuestos a modificarlos",
                                ].map((punto, i) => (
                                    <div key={i} className="flex items-start gap-4 py-3 border-b border-oro/8 last:border-0">
                                        <span className="text-oro/35 font-manrope text-sm flex-none mt-0.5">—</span>
                                        <p className="text-crema/65 font-manrope text-sm leading-relaxed">{punto}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    <span className="text-oro font-medium">Nota:</span> la evaluación inicial existe exactamente para identificar estos casos. No todos son candidatos directos, y eso no es un problema — hay alternativas para cada situación.
                                </p>
                            </div>
                        </section>

                        {/* Conclusión */}
                        <section className="border-t border-oro/15 pt-10">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">La conclusión</h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Las carillas modernas, bien indicadas y bien colocadas, no dañan los dientes. El desgaste de esmalte en las técnicas actuales es mínimo y controlado. Los lentes de contacto dental directamente no requieren ningún desgaste.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Lo que sí puede dañar un diente es una carilla mal colocada, con adhesivo deficiente, en un paciente que no fue correctamente evaluado. Por eso el operador y el protocolo importan tanto como el material.
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Querés saber si sos candidato?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Te evaluamos sin compromiso
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                Mandanos fotos de tu sonrisa por WhatsApp. Te decimos si sos candidato, qué tipo de carilla aplica para tu caso y qué resultado podés esperar.
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
                                    { titulo: "¿Cuánto duran las carillas de porcelana?", href: "/blog/cuanto-duran-las-carillas-de-porcelana", desc: "Vida útil, materiales y cómo extender la duración." },
                                    { titulo: "Carillas sin desgaste de esmalte", href: "/carillas-sin-desgaste", desc: "Cuándo son posibles y cuándo no aplican." },
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
