import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "¿Cuánto duran las carillas de porcelana? | AM Estética Dental",
    description: "Las carillas de porcelana duran entre 10 y 20 años con el cuidado correcto. Te explicamos qué las desgasta, cómo cuidarlas y cuándo hay que reemplazarlas.",
    alternates: {
        canonical: "https://www.amesteticadental.com/blog/cuanto-duran-las-carillas-de-porcelana",
    },
    openGraph: {
        title: "¿Cuánto duran las carillas de porcelana?",
        description: "10 a 20 años con el cuidado correcto. Todo sobre durabilidad, mantenimiento y señales de que es hora de renovarlas.",
        url: "https://www.amesteticadental.com/blog/cuanto-duran-las-carillas-de-porcelana",
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "¿Cuánto duran las carillas de porcelana?",
    "description": "Las carillas de porcelana duran entre 10 y 20 años con el cuidado correcto. Factores que afectan la durabilidad y cómo maximizar su vida útil.",
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
    "mainEntityOfPage": "https://www.amesteticadental.com/blog/cuanto-duran-las-carillas-de-porcelana",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20duraci%C3%B3n%20de%20carillas%20y%20me%20gustar%C3%ADa%20consultar%20mi%20caso.";

export default function ArticuloDuracionCarillas() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
                            ¿Cuánto duran las{" "}
                            <span className="font-cormorant italic text-oro">carillas de porcelana?</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            La respuesta corta: entre 10 y 20 años. Pero eso depende del material, de cómo se colocaron y de algunos hábitos que podés controlar. Acá te explicamos todo.
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
                                Las carillas de porcelana son una inversión a largo plazo. No son como un blanqueamiento que hay que repetir cada año — bien colocadas con materiales de primera, duran décadas sin perder brillo ni color. Pero como cualquier trabajo odontológico de calidad, su vida útil depende de varios factores.
                            </p>
                        </div>

                        {/* Sección 1 */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                La vida útil según el material
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                No todas las carillas duran igual. El material es el factor más determinante:
                            </p>
                            <div className="space-y-4">
                                {[
                                    {
                                        tipo: "Carillas de porcelana feldespática",
                                        duracion: "12 a 20 años",
                                        detalle: "El material más estético. Imita perfectamente la translucidez del esmalte natural. Requiere técnica muy precisa en la colocación, pero cuando está bien hecha es la más duradera y natural.",
                                    },
                                    {
                                        tipo: "Carillas IPS e.max (disilicato de litio)",
                                        duracion: "10 a 18 años",
                                        detalle: "Más resistente a la fractura que la feldespática. Excelente estética y muy buena durabilidad. Es el material más utilizado en clínicas premium de todo el mundo.",
                                    },
                                    {
                                        tipo: "Lentes de contacto dental",
                                        duracion: "8 a 15 años",
                                        detalle: "Al ser más delgadas (0,3 mm), son levemente más sensibles al impacto. Pero su ventaja es que no requieren desgaste del diente, lo que las hace reversibles.",
                                    },
                                    {
                                        tipo: "Carillas de resina compuesta",
                                        duracion: "5 a 7 años",
                                        detalle: "Costo menor y colocación en una sola sesión. Se manchan más con el tiempo y requieren pulidos periódicos. Son una buena opción para casos puntuales con menor presupuesto.",
                                    },
                                ].map((m) => (
                                    <div key={m.tipo} className="border border-oro/12 rounded-xl p-6 bg-carbon-soft">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                            <h3 className="text-crema font-manrope font-medium text-sm">{m.tipo}</h3>
                                            <span className="text-oro font-manrope font-semibold text-sm flex-none">{m.duracion}</span>
                                        </div>
                                        <p className="text-crema/55 font-manrope text-xs leading-relaxed">{m.detalle}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Sección 2 */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Qué las desgasta antes de tiempo
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Las carillas de porcelana no se manchan ni se desgastan por el uso normal. Lo que puede acortar su vida útil son factores específicos que, en su mayoría, podés controlar:
                            </p>
                            <div className="space-y-5">
                                {[
                                    {
                                        n: "01",
                                        titulo: "Bruxismo sin protector nocturno",
                                        texto: "El bruxismo (apretar o rechinar los dientes durante el sueño) es el enemigo número uno de las carillas. La fuerza que genera puede fracturar incluso la porcelana más resistente. Si tenés bruxismo, usar un protector nocturno a medida es obligatorio — no opcional.",
                                    },
                                    {
                                        n: "02",
                                        titulo: "Morder objetos duros",
                                        texto: "Lapiceras, hielo, uñas, alimentos muy duros. La porcelana aguanta bien la masticación normal, pero los impactos puntuales de alta intensidad pueden generar microfracturas o astillar la carilla.",
                                    },
                                    {
                                        n: "03",
                                        titulo: "Pastas dentales abrasivas",
                                        texto: "Las pastas blanqueadoras con micro-partículas abrasivas no dañan la porcelana de forma significativa, pero sí pueden desgastar el adhesivo del margen. Lo recomendable es usar pasta de flúor neutra sin agentes blanqueadores fuertes.",
                                    },
                                    {
                                        n: "04",
                                        titulo: "Mala técnica de colocación",
                                        texto: "Este es el factor que más se subestima. Una carilla colocada con adhesivo incorrecto, con contaminación de humedad durante la cementación o con oclusión mal ajustada va a fallar antes. La técnica del odontólogo importa tanto como el material.",
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

                        {/* Sección 3 */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Cómo extender la vida útil al máximo
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Los cuidados no son complicados. Son los mismos que para cualquier dentición sana, con algunas consideraciones específicas:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { icono: "→", t: "Higiene dental de rutina", d: "Cepillado 2 veces por día con pasta neutra, hilo dental diario. Las carillas no se carían, pero las encías y el diente debajo sí necesitan cuidado." },
                                    { icono: "→", t: "Protector nocturno si hay bruxismo", d: "A medida, no el genérico de farmacia. Es la diferencia entre 10 y 20 años de duración." },
                                    { icono: "→", t: "Control odontológico anual", d: "El odontólogo puede detectar desgaste o microfracturas en los márgenes antes de que se conviertan en un problema mayor." },
                                    { icono: "→", t: "Evitar impactos frontales", d: "Deportes de contacto: usar protector bucal. No abrir paquetes ni envases con los dientes." },
                                ].map((item) => (
                                    <div key={item.t} className="border border-oro/12 rounded-xl p-5 bg-carbon-soft">
                                        <div className="flex items-start gap-3 mb-2">
                                            <span className="text-oro text-sm flex-none mt-0.5">{item.icono}</span>
                                            <h3 className="text-crema font-manrope font-medium text-sm">{item.t}</h3>
                                        </div>
                                        <p className="text-crema/55 font-manrope text-xs leading-relaxed pl-5">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Sección 4 */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                ¿Cuándo hay que reemplazarlas?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Las carillas no tienen una fecha de vencimiento fija. Se reemplazan cuando hay una razón clínica o estética concreta:
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Fractura o astillado visible",
                                    "Filtración en el margen del adhesivo (puede causar sensibilidad o caries debajo)",
                                    "Cambio de color significativo en la resina de cementación (el borde se oscurece)",
                                    "El paciente quiere actualizar el diseño o el color",
                                    "Cambios en la mordida o en los dientes adyacentes que afectan el ajuste",
                                ].map((punto, i) => (
                                    <div key={i} className="flex items-start gap-4 py-3 border-b border-oro/8 last:border-0">
                                        <span className="text-oro/40 font-manrope text-xs pt-0.5 flex-none">—</span>
                                        <p className="text-crema/70 font-manrope text-sm leading-relaxed">{punto}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 border border-oro/20 rounded-xl p-6 bg-carbon-soft">
                                <p className="text-crema/70 font-manrope text-sm leading-relaxed">
                                    <span className="text-oro font-medium">Nota clínica:</span> cuando se reemplazan carillas bien colocadas, el proceso es mucho más sencillo que la primera colocación. El diente ya tiene la preparación adecuada y el nuevo trabajo se apoya en una base conocida.
                                </p>
                            </div>
                        </section>

                        {/* Conclusión */}
                        <section className="border-t border-oro/15 pt-10">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">En resumen</h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Las carillas de porcelana son el tratamiento de estética dental con mejor relación entre resultado y durabilidad. Con materiales de primera y una técnica correcta, entre 10 y 20 años sin mantenimiento complejo es perfectamente alcanzable.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                El bruxismo sin protector es el único factor que puede comprometer ese pronóstico. Si lo tenés, es importante mencionarlo antes de empezar — cambia el plan de tratamiento.
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Tenés dudas sobre tu caso?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Cada caso es distinto — hablemos del tuyo
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                Si ya tenés carillas y querés saber cómo están, o si estás evaluando hacerlas, mandanos un WhatsApp.
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
                                    { titulo: "Carillas de porcelana vs resina", href: "/carillas-de-porcelana-vs-resina", desc: "Cuál conviene según tu caso y presupuesto." },
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
