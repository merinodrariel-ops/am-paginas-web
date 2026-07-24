import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/blog/cuanto-cuestan-las-carillas-dentales-en-argentina";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "¿Cuánto cuestan las carillas dentales en Argentina? Guía 2026 | AM Estética Dental",
    description: "Cuánto cuesta ponerse carillas dentales en Argentina en 2026: rangos de mercado por material, por qué varían tanto los precios, y qué explica la diferencia entre una carilla económica y una premium.",
    alternates: {
        canonical: CANONICAL,
    },
    keywords: "cuánto cuestan las carillas dentales en Argentina, precio carillas Argentina 2026, cuánto cuesta ponerse carillas, carillas dentales precio, costo carillas porcelana Argentina",
    openGraph: {
        title: "¿Cuánto cuestan las carillas dentales en Argentina? Guía honesta 2026",
        description: "Rangos reales de mercado, por qué una carilla puede costar 3 veces más que otra, y las preguntas que revelan dónde está la diferencia.",
        url: CANONICAL,
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "¿Cuánto cuestan las carillas dentales en Argentina? Guía 2026",
    "description": "Cuánto cuesta ponerse carillas dentales en Argentina en 2026: rangos de mercado por material, por qué varían tanto los precios y qué explica la diferencia.",
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
    "datePublished": "2026-07-08",
    "dateModified": "2026-07-08",
    "mainEntityOfPage": CANONICAL,
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuánto cuesta una carilla dental en Argentina en 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depende del material y del nivel de la clínica. Las carillas de resina compuesta van desde valores accesibles en consultorios generales hasta USD 500 por diente en clínicas especializadas en estética. Las carillas cerámicas de laboratorio (disilicato de litio o porcelana feldespática) se mueven en un rango amplio del mercado, y en clínicas premium de alta especialización cuestan entre USD 1.000 y 1.500 por pieza.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Por qué hay tanta diferencia de precio entre clínicas?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Las tres variables que más pesan son: el material (resina directa versus cerámica de laboratorio), el laboratorio dental (un ceramista de alta especialización cuesta varias veces más que un laboratorio genérico) y la experiencia del especialista. Una carilla muy barata casi siempre implica resina o un laboratorio de baja gama.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Cuántas carillas necesito para transformar mi sonrisa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depende de tu línea de sonrisa. Hay casos que se resuelven con 4 a 6 carillas en el frente superior, y diseños de sonrisa completos que llevan 10, 12 o hasta 20 piezas. Por eso el presupuesto serio se hace después de una evaluación clínica, no por teléfono.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Se pueden financiar las carillas dentales?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "En AM Estética Dental trabajamos con financiación propia: tasa fija anual del 18% (1,5% mensual) sobre el saldo financiado, con planes de 3, 6 o 12 meses. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Conviene elegir carillas por precio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El precio importa, pero las carillas son un tratamiento que queda en tu boca entre 10 y 20 años. La diferencia de costo entre una carilla económica y una premium, dividida por los años de uso, es pequeña — y rehacer un tratamiento mal ejecutado cuesta más que hacerlo bien la primera vez.",
            },
        },
    ],
};

const WA_LINK = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Le%C3%AD%20la%20gu%C3%ADa%20de%20precios%20de%20carillas%20en%20Argentina%20y%20quiero%20un%20presupuesto%20para%20mi%20caso.";

const RANGOS = [
    {
        material: "Carillas de resina compuesta",
        rango: "Desde valores accesibles hasta USD 500/diente",
        duracion: "5 – 7 años",
        nota: "Se hacen en el sillón, en el momento. El resultado depende casi por completo de la mano del odontólogo.",
    },
    {
        material: "Carillas cerámicas (disilicato / feldespática)",
        rango: "Rango amplio de mercado · USD 1.000 – 1.500 en clínicas premium",
        duracion: "10 – 20 años",
        nota: "Fabricadas por un ceramista en laboratorio dental. Acá el laboratorio explica gran parte de la diferencia de precio.",
    },
    {
        material: "Lentes de contacto dental (0,2–0,3 mm)",
        rango: "USD 1.000 – 1.500/pieza",
        duracion: "10 – 15 años",
        nota: "La versión más conservadora: en muchos casos sin ningún desgaste del diente natural.",
    },
];

const FACTORES = [
    {
        n: "01",
        titulo: "El material",
        texto: "Una carilla de resina y una de disilicato de litio no son el mismo producto a distinto precio: son productos distintos. La resina se modela en el momento y tiene una vida útil de 5 a 7 años. La cerámica de laboratorio imita la translucidez del esmalte natural, no cambia de color y dura entre 10 y 20 años. Cuando compares presupuestos, lo primero que tenés que confirmar es de qué material están hablando.",
    },
    {
        n: "02",
        titulo: "El laboratorio",
        texto: "La carilla cerámica la diseña el odontólogo, pero la fabrica el ceramista. Un laboratorio de alta especialización cobra varias veces más que uno genérico — y esa diferencia se ve en la textura, la translucidez y la naturalidad del resultado. Si un presupuesto de cerámica es sospechosamente bajo, la explicación suele estar acá: mismo material en el papel, otro nivel de ejecución.",
    },
    {
        n: "03",
        titulo: "El especialista y el proceso",
        texto: "Diseño de sonrisa digital previo, mockup en boca para que veas el resultado antes de empezar, preparación mínimamente invasiva medida en décimas de milímetro. Ese proceso lleva más horas de trabajo clínico que pegar carillas estándar — y es exactamente lo que separa un resultado que nadie nota de uno que se nota a un metro de distancia.",
    },
    {
        n: "04",
        titulo: "La cantidad de piezas",
        texto: "El precio por carilla baja poco en volumen, pero el presupuesto total depende de cuántas piezas necesita tu sonrisa: hay casos de 4 a 6 carillas del frente superior, y rehabilitaciones completas de 20 piezas. Nadie puede darte un número serio sin ver tu boca — desconfiá de los presupuestos por teléfono.",
    },
];

export default function ArticuloPreciosCarillasArgentina() {
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
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Precios</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            ¿Cuánto cuestan las carillas dentales{" "}
                            <span className="font-cormorant italic text-oro">en Argentina?</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            Guía honesta 2026: los rangos reales del mercado, por qué una carilla puede costar el triple que otra, y cómo leer un presupuesto para saber qué estás comprando en realidad.
                        </p>
                        <div className="flex items-center gap-6 text-crema/35 font-manrope text-xs">
                            <span>Dr. Ariel Merino</span>
                            <span>·</span>
                            <span>AM Estética Dental, Puerto Madero</span>
                            <span>·</span>
                            <span>7 min de lectura</span>
                        </div>
                    </div>
                </section>

                {/* ── CONTENIDO ── */}
                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Intro */}
                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Si buscaste &ldquo;cuánto cuestan las carillas&rdquo; probablemente encontraste de todo: desde precios que parecen imposiblemente baratos hasta cifras que asustan. Los dos extremos son reales — porque bajo la palabra &ldquo;carillas&rdquo; se venden productos muy distintos. Esta guía te explica los rangos del mercado argentino y, más importante, qué explica la diferencia.
                            </p>
                        </div>

                        {/* Tabla de rangos */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                Rangos de precio por material <span className="font-cormorant italic text-oro">(2026)</span>
                            </h2>
                            <div className="space-y-4">
                                {RANGOS.map((r) => (
                                    <div key={r.material} className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                                            <h3 className="text-crema font-manrope font-medium text-base">{r.material}</h3>
                                            <span className="text-oro font-manrope font-semibold text-sm">{r.rango}</span>
                                        </div>
                                        <p className="text-crema/45 font-manrope text-xs mb-2">Vida útil estimada: {r.duracion}</p>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{r.nota}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-crema/35 font-manrope text-xs mt-4 leading-relaxed">
                                * Los rangos de mercado varían según la zona y el nivel de especialización de cada clínica. Los valores de referencia de AM Estética Dental están publicados en nuestra <Link href="/precio-carillas-dentales-buenos-aires" className="text-oro/70 hover:text-oro underline underline-offset-2">página de precios</Link> y se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.
                            </p>
                        </section>

                        {/* Factores */}
                        <section className="space-y-10">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema">
                                Las 4 variables que explican <span className="font-cormorant italic text-oro">la diferencia de precio</span>
                            </h2>
                            {FACTORES.map((f) => (
                                <div key={f.n} className="flex items-start gap-4">
                                    <span className="text-oro/35 font-manrope text-xs font-medium tracking-widest pt-1.5 flex-none w-6">{f.n}</span>
                                    <div>
                                        <h3 className="text-xl font-manrope font-light text-crema mb-3">{f.titulo}</h3>
                                        <p className="text-crema/65 font-manrope text-base leading-relaxed">{f.texto}</p>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* El cálculo que nadie hace */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">
                                El cálculo que casi nadie hace: <span className="font-cormorant italic text-oro">costo por año</span>
                            </h2>
                            <p className="text-crema/65 font-manrope text-base leading-relaxed mb-4">
                                Una carilla cerámica premium de USD 1.000 que dura 15 años cuesta unos USD 67 por año. Una carilla económica que hay que rehacer a los 5 años puede terminar costando lo mismo o más — con el agregado de que cada reintervención desgasta un poco más tu diente natural, y eso sí es irreversible.
                            </p>
                            <p className="text-crema/65 font-manrope text-base leading-relaxed">
                                No significa que la opción más cara sea siempre la correcta. Significa que la pregunta correcta no es &ldquo;cuánto sale&rdquo; sino &ldquo;qué estoy comprando y cuánto me va a durar&rdquo;.
                            </p>
                        </section>

                        {/* Financiación */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4">
                                ¿Y si no llego con el <span className="font-cormorant italic text-oro">monto total?</span>
                            </h2>
                            <p className="text-crema/65 font-manrope text-base leading-relaxed mb-4">
                                En AM Estética Dental trabajamos con financiación propia: anticipo del 30% o 50% y el saldo en 3, 6 o 12 cuotas con tasa fija anual del 18% (1,5% mensual). Podés simular tu plan en la <Link href="/precio-carillas-dentales-buenos-aires" className="text-oro/70 hover:text-oro underline underline-offset-2">página de precios</Link>.
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">Presupuesto real, no estimado</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Tu caso tiene un número exacto
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                En una valoración clínica evaluamos tu sonrisa, definimos cuántas piezas necesitás y te damos el presupuesto por escrito. Sin sorpresas después.
                            </p>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Pedir presupuesto por WhatsApp →
                            </a>
                        </section>

                        {/* Links internos */}
                        <section>
                            <span className="text-oro/50 font-manrope uppercase tracking-[0.3em] text-xs block mb-5">Seguir leyendo</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { titulo: "Precio de carillas dentales en Buenos Aires", href: "/precio-carillas-dentales-buenos-aires", desc: "Tabla de precios AM 2026 con simulador de financiación." },
                                    { titulo: "Carillas de porcelana vs resina", href: "/carillas-de-porcelana-vs-resina", desc: "Diferencias reales de material, estética y duración." },
                                    { titulo: "Caso real: carillas de resina y diseño de sonrisa", href: "/casos/carillas-resina-diseno-sonrisa-gingivectomia-laser", desc: "10 carillas de resina + gingivectomía láser en paciente joven." },
                                    { titulo: "¿Cuánto duran las carillas de porcelana?", href: "/blog/cuanto-duran-las-carillas-de-porcelana", desc: "10 a 20 años con el cuidado correcto." },
                                    { titulo: "¿Cuánto cuesta un implante dental en Argentina?", href: "/blog/cuanto-cuesta-un-implante-dental-en-argentina", desc: "La guía de precios de implantes, con la misma lógica." },
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
