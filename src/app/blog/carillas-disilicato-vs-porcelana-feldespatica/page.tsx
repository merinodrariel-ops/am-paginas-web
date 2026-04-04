import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Carillas de disilicato vs porcelana feldespática: diferencias reales | AM Estética Dental",
    description: "IPS e.max (disilicato de litio) o porcelana feldespática: cuál es más estética, cuál dura más y cuándo conviene cada una. Guía técnica del Dr. Ariel Merino.",
    alternates: {
        canonical: "https://www.amesteticadental.com/blog/carillas-disilicato-vs-porcelana-feldespatica",
    },
    openGraph: {
        title: "Carillas de disilicato vs porcelana feldespática: diferencias reales",
        description: "La comparación técnica que todo paciente debería leer antes de elegir material para sus carillas dentales.",
        url: "https://www.amesteticadental.com/blog/carillas-disilicato-vs-porcelana-feldespatica",
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Carillas de disilicato de litio vs porcelana feldespática: diferencias reales",
    "description": "IPS e.max (disilicato de litio) o porcelana feldespática: cuál es más estética, cuál dura más y cuándo conviene cada una según el caso clínico.",
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
    "datePublished": "2026-04-01",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": "https://www.amesteticadental.com/blog/carillas-disilicato-vs-porcelana-feldespatica",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuál es más estética: el disilicato o la porcelana feldespática?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La porcelana feldespática tiene una translucidez levemente superior y es considerada el material más estético disponible. Imita mejor la profundidad óptica del esmalte natural. El disilicato IPS e.max también tiene excelente estética y en la práctica la diferencia es mínima para la mayoría de los casos.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Cuál dura más: disilicato o porcelana feldespática?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El disilicato de litio (IPS e.max) es aproximadamente 3 veces más resistente a la fractura que la porcelana feldespática. Para pacientes con bruxismo o con cargas oclusales altas, el disilicato ofrece más margen de seguridad.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Qué material usan en AM Estética Dental?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Usamos ambos según el caso. La elección depende de factores clínicos: si hay bruxismo, la posición del diente, cuánto esmalte disponible hay para el adhesivo y el resultado estético buscado. En la consulta previa evaluamos cada caso y explicamos la recomendación.",
            },
        },
    ],
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20disilicato%20vs%20porcelana%20y%20quer%C3%ADa%20consultar%20mi%20caso.";

export default function ArticuloDisilicato() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO ── */}
                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute right-0 top-[20%] w-[500px] h-[400px] rounded-full bg-oro/4 blur-[130px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Carillas</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Disilicato vs porcelana feldespática:{" "}
                            <span className="font-cormorant italic text-oro">diferencias reales</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            Son los dos materiales más usados en carillas dentales de alta gama. Ambos dan resultados excelentes — pero no son iguales, y la elección correcta depende de tu caso.
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
                                Cuando un paciente llega a la consulta preguntando por carillas, en algún momento aparece la pregunta sobre el material. Los nombres suenan técnicos — disilicato de litio, IPS e.max, porcelana feldespática — pero la diferencia práctica es más simple de entender de lo que parece.
                            </p>
                        </div>

                        {/* Tabla comparativa */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                Comparación directa
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse font-manrope text-sm">
                                    <thead>
                                        <tr className="border-b border-oro/20">
                                            <th className="text-left py-3 pr-6 text-crema/40 font-medium text-xs uppercase tracking-widest">Característica</th>
                                            <th className="text-left py-3 pr-6 text-oro font-medium text-xs uppercase tracking-widest">Disilicato (e.max)</th>
                                            <th className="text-left py-3 text-crema/70 font-medium text-xs uppercase tracking-widest">Feldespática</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-oro/8">
                                        {[
                                            { cat: "Estética", dis: "Muy alta", fel: "Máxima" },
                                            { cat: "Translucidez", dis: "Alta", fel: "Muy alta — más natural" },
                                            { cat: "Resistencia a fractura", dis: "Alta (~400 MPa)", fel: "Media (~100 MPa)" },
                                            { cat: "Grosor mínimo", dis: "0,4 mm", fel: "0,3 mm" },
                                            { cat: "Desgaste del diente", dis: "Mínimo", fel: "Mínimo o ninguno" },
                                            { cat: "Ideal para bruxismo", dis: "Sí (con protector)", fel: "Con precaución" },
                                            { cat: "Durabilidad estimada", dis: "10–18 años", fel: "12–20 años" },
                                            { cat: "Dificultad técnica", dis: "Alta", fel: "Muy alta" },
                                        ].map((row) => (
                                            <tr key={row.cat}>
                                                <td className="py-3.5 pr-6 text-crema/40 text-xs">{row.cat}</td>
                                                <td className="py-3.5 pr-6 text-crema text-sm">{row.dis}</td>
                                                <td className="py-3.5 text-crema/70 text-sm">{row.fel}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Sección disilicato */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Disilicato de litio (IPS e.max)
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                El IPS e.max es el material más utilizado en clínicas de estética dental de todo el mundo. Su popularidad se debe a una combinación que pocos materiales logran: alta resistencia mecánica y muy buena estética.
                            </p>
                            <div className="space-y-4">
                                {[
                                    {
                                        titulo: "Resistencia",
                                        texto: "Con una resistencia a la flexión de alrededor de 400 MPa, el disilicato soporta bien las cargas normales de masticación y tiene más margen ante bruxismo moderado. No es indestructible, pero es significativamente más tolerante a los impactos que la feldespática.",
                                    },
                                    {
                                        titulo: "Estética",
                                        texto: "La translucidez del e.max es muy alta y en la práctica clínica la diferencia con la feldespática es imperceptible para la mayoría de los casos. El laboratorio puede ajustar el nivel de opacidad y el matiz con precisión.",
                                    },
                                    {
                                        titulo: "Procesado",
                                        texto: "Puede fabricarse por fresado CAD/CAM o por prensado. El prensado manual hecho por un ceramista experimentado sigue siendo el estándar de calidad más alto.",
                                    },
                                    {
                                        titulo: "Cuándo es la primera opción",
                                        texto: "Pacientes con bruxismo controlado (usan protector nocturno), dientes posteriores, casos donde la resistencia es prioritaria, y situaciones donde se necesita mayor uniformidad en el color base.",
                                    },
                                ].map((item) => (
                                    <div key={item.titulo} className="border border-oro/12 rounded-xl p-6 bg-carbon-soft">
                                        <h3 className="text-oro font-manrope font-medium text-sm mb-2">{item.titulo}</h3>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item.texto}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Sección feldespática */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Porcelana feldespática
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                La porcelana feldespática es el material más antiguo y, en manos expertas, el más estético disponible. Su capacidad para imitar la profundidad óptica del esmalte natural no tiene rival — pero exige más del laboratorio y más del odontólogo.
                            </p>
                            <div className="space-y-4">
                                {[
                                    {
                                        titulo: "Estética máxima",
                                        texto: "La feldespática tiene una translucidez que imita mejor la forma en que la luz se comporta dentro del esmalte natural. Esto la hace ideal cuando el resultado estético es la prioridad absoluta y el paciente tiene muy buenas condiciones clínicas.",
                                    },
                                    {
                                        titulo: "Grosor ultra fino",
                                        texto: "Puede fabricarse en espesores de 0,3 mm o menos, lo que permite trabajar con mínimo o ningún desgaste del esmalte. Es el material preferido para lentes de contacto dental.",
                                    },
                                    {
                                        titulo: "Mayor fragilidad",
                                        texto: "Con alrededor de 100 MPa de resistencia a la flexión, la feldespática es más sensible a los impactos. Un mordisco en un objeto duro o bruxismo sin protector pueden fracturarla. No es el material correcto para pacientes con parafunciones sin controlar.",
                                    },
                                    {
                                        titulo: "Cuándo es la primera opción",
                                        texto: "Pacientes sin bruxismo, dientes anteriores con buena cobertura de esmalte, cuando se busca el máximo naturalismo posible, y casos de lentes de contacto sin preparación.",
                                    },
                                ].map((item) => (
                                    <div key={item.titulo} className="border border-oro/12 rounded-xl p-6 bg-carbon-soft">
                                        <h3 className="text-crema/80 font-manrope font-medium text-sm mb-2">{item.titulo}</h3>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item.texto}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Lo que no te dicen */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Lo que pocas veces se menciona
                            </h2>
                            <div className="space-y-5">
                                {[
                                    {
                                        n: "01",
                                        titulo: "El laboratorio importa más que el material",
                                        texto: "La misma especificación de material procesada en un laboratorio de alta especialización versus uno genérico da resultados completamente distintos. El ceramista que fabrica la carilla — su técnica, su experiencia con ese material específico — es determinante para el resultado final.",
                                    },
                                    {
                                        n: "02",
                                        titulo: "El CAD/CAM no es siempre lo mejor",
                                        texto: "Muchas clínicas ofrecen carillas CAD/CAM (fresadas por máquina) como sinónimo de tecnología avanzada. Para restauraciones de un solo color uniforme, el fresado es excelente. Pero para replicar la estratificación natural del esmalte, el trabajo manual de un ceramista especializado sigue siendo superior.",
                                    },
                                    {
                                        n: "03",
                                        titulo: "La decisión no es tuya — es clínica",
                                        texto: "La elección del material debe hacerla el odontólogo basándose en factores clínicos: presencia de bruxismo, cantidad de esmalte disponible, posición del diente, carga oclusal. Un especialista que te deja elegir el material sin evaluar esas variables no está haciendo bien su trabajo.",
                                    },
                                ].map((item) => (
                                    <div key={item.n} className="flex gap-5">
                                        <span className="text-oro/35 font-manrope text-xs font-medium tracking-widest pt-0.5 flex-none w-6">{item.n}</span>
                                        <div>
                                            <h3 className="text-crema font-manrope font-medium text-sm mb-2">{item.titulo}</h3>
                                            <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item.texto}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Resumen */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft">
                            <h2 className="text-xl font-manrope font-light text-crema mb-5">En resumen: ¿cuál elegir?</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="text-oro text-sm flex-none mt-0.5">→</span>
                                    <p className="text-crema/70 font-manrope text-sm leading-relaxed">
                                        <span className="text-crema font-medium">Si tenés bruxismo o carga oclusal alta:</span> disilicato IPS e.max, con protector nocturno obligatorio.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-oro text-sm flex-none mt-0.5">→</span>
                                    <p className="text-crema/70 font-manrope text-sm leading-relaxed">
                                        <span className="text-crema font-medium">Si buscás el máximo naturalismo y no tenés bruxismo:</span> porcelana feldespática, especialmente para lentes de contacto dental.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-oro text-sm flex-none mt-0.5">→</span>
                                    <p className="text-crema/70 font-manrope text-sm leading-relaxed">
                                        <span className="text-crema font-medium">En la mayoría de los casos:</span> la diferencia estética entre ambos materiales es mínima en la práctica clínica. Lo que más impacta en el resultado final es la calidad del laboratorio y la técnica del odontólogo.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Querés saber qué material conviene para tu caso?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                La respuesta requiere verte en persona
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                En la primera consulta evaluamos tu oclusión, el estado de tu esmalte y lo que buscás estéticamente. Con esa información, la elección del material es una decisión clínica — no una preferencia.
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
                                    { titulo: "Preguntas que hacerle a tu odontólogo antes de las carillas", href: "/blog/preguntas-antes-de-hacerse-carillas", desc: "Las 5 preguntas que separan un buen especialista de uno mediocre." },
                                    { titulo: "¿Cuánto duran las carillas de porcelana?", href: "/blog/cuanto-duran-las-carillas-de-porcelana", desc: "10 a 20 años con el cuidado correcto." },
                                    { titulo: "¿Las carillas dañan los dientes?", href: "/blog/las-carillas-danan-los-dientes", desc: "Mitos y realidades sobre el desgaste de esmalte." },
                                    { titulo: "Carillas de porcelana: antes y después", href: "/blog/carillas-porcelana-antes-despues", desc: "Casos reales y qué situaciones resuelven." },
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
