import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/blog/cuanto-cuesta-un-implante-dental-en-argentina";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "¿Cuánto cuesta un implante dental? Guía 2026 | AM",
    description: "Cuánto cuesta un implante dental en Argentina en 2026: qué incluye el precio, por qué varía entre clínicas, la diferencia entre el tornillo y la corona, y cuándo hace falta injerto óseo.",
    alternates: {
        canonical: CANONICAL,
    },
    keywords: "cuánto cuesta un implante dental en Argentina, precio implante dental Argentina 2026, costo implantes dentales, implante dental precio, cuánto sale un implante dental",
    openGraph: {
        title: "¿Cuánto cuesta un implante dental en Argentina? Guía honesta 2026",
        description: "Qué incluye realmente el precio de un implante, por qué dos presupuestos pueden diferir tanto, y las preguntas que te evitan sorpresas.",
        url: CANONICAL,
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "¿Cuánto cuesta un implante dental en Argentina? Guía 2026",
    "image": "https://www.amesteticadental.com/og-image.jpg",
    "description": "Cuánto cuesta un implante dental en Argentina en 2026: qué incluye el precio, por qué varía entre clínicas y cuándo hace falta injerto óseo.",
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
            "name": "¿Cuánto cuesta un implante dental en Argentina en 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El precio de un implante unitario varía según la clínica y lo que incluya el presupuesto. En AM Estética Dental un implante unitario con corona parte desde USD 1.200, e incluye tornillo de titanio, pilar y corona. Es clave confirmar siempre si el precio incluye la corona o solo el tornillo, porque muchos presupuestos separan ambas cosas.",
            },
        },
        {
            "@type": "Question",
            "name": "¿El precio del implante incluye la corona?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No siempre, y es la principal causa de confusión al comparar presupuestos. Un implante completo tiene tres partes: el tornillo de titanio, el pilar y la corona visible. Algunas clínicas publican solo el precio del tornillo. En AM Estética Dental el valor desde USD 1.200 ya incluye la corona.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Qué encarece más un implante: el titanio o el zirconio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El tornillo del implante siempre es de titanio biocompatible. La diferencia de precio está en la corona: una corona estándar cumple una excelente función, mientras que la corona de zirconio ofrece mayor estética y mejor biocompatibilidad gingival, sobre todo en dientes visibles.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Por qué necesito un injerto óseo y cuánto suma al precio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El implante necesita suficiente hueso para integrarse. Si perdiste la pieza hace tiempo, es habitual que haya reabsorción ósea y haga falta un injerto previo. Es el factor que más puede modificar el presupuesto, y solo se puede evaluar con una tomografía en la consulta inicial.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Se pueden financiar los implantes dentales?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "En AM Estética Dental trabajamos con financiación propia: tasa fija anual del 18% (1,5% mensual), anticipo del 30% o 50% y saldo en 3, 6 o 12 cuotas. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Cuánto dura un implante dental?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Con buena higiene, sin fumar y controles anuales, el tornillo de titanio está diseñado para durar toda la vida. La corona sobre el implante puede necesitar reemplazo cada 15 a 20 años.",
            },
        },
    ],
};

const WA_LINK = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Le%C3%AD%20la%20gu%C3%ADa%20de%20precios%20de%20implantes%20en%20Argentina%20y%20quiero%20un%20presupuesto%20para%20mi%20caso.";

const RANGOS = [
    {
        tipo: "Implante unitario (incluye corona)",
        rango: "Desde USD 1.200",
        duracion: "Tornillo: permanente · Corona: 15–20 años",
        nota: "Reemplazo de una pieza. El precio ya contempla tornillo de titanio, pilar y corona.",
    },
    {
        tipo: "Implante + corona de zirconio",
        rango: "Desde USD 1.200",
        duracion: "Tornillo: permanente · Corona: 15–20 años",
        nota: "La opción más estética para dientes visibles: mejor translucidez y biocompatibilidad de la encía.",
    },
    {
        tipo: "Rehabilitación completa (All-on-4 / All-on-6)",
        rango: "Presupuesto integral",
        duracion: "Permanente",
        nota: "Arcada fija completa sobre 4 o 6 implantes. Se planifica como caso integral, no por pieza suelta.",
    },
];

const FACTORES = [
    {
        n: "01",
        titulo: "Qué incluye el presupuesto (tornillo vs. corona)",
        texto: "Es el punto donde más se confunden los precios. Un implante completo tiene tres partes: el tornillo de titanio que se integra al hueso, el pilar que lo conecta y la corona visible. Hay clínicas que publican solo el precio del tornillo — y la corona se suma aparte. Antes de comparar dos presupuestos, confirmá que ambos incluyan lo mismo. En AM el valor desde USD 1.200 ya incluye la corona.",
    },
    {
        n: "02",
        titulo: "El hueso disponible",
        texto: "El implante necesita suficiente hueso para osteointegrarse. Si perdiste el diente hace tiempo, es frecuente que haya reabsorción ósea y se necesite un injerto de hueso previo. Es el factor que más puede mover el presupuesto — y no es un extra que se pueda inventar: se ve con una tomografía en la primera consulta. Desconfiá de quien te da precio de implante sin haber visto tu hueso.",
    },
    {
        n: "03",
        titulo: "El material de la corona",
        texto: "El tornillo siempre es titanio biocompatible de máxima calidad — ahí no se negocia. Lo que cambia el precio es la corona: una corona estándar funciona muy bien en zonas no visibles, mientras que el zirconio se reserva para el frente, donde la estética y el comportamiento de la encía importan. Elegir zirconio en cada pieza cuando no hace falta es pagar de más; usarlo donde se ve, es invertir bien.",
    },
    {
        n: "04",
        titulo: "La planificación y la tecnología",
        texto: "Un implante bien puesto empieza con una tomografía y una planificación 3D de la posición exacta, no con el taladro. Esa planificación guiada reduce riesgos, acorta la cirugía y mejora el resultado final. Es trabajo clínico que un presupuesto muy bajo suele resignar — y en implantes, la diferencia entre bien planificado y improvisado se paga con el tiempo.",
    },
];

export default function ArticuloPreciosImplantesArgentina() {
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
                            ¿Cuánto cuesta un implante dental{" "}
                            <span className="font-cormorant italic text-oro">en Argentina?</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            Guía honesta 2026: qué incluye realmente el precio de un implante, por qué dos presupuestos pueden diferir tanto, y cómo leer una cotización para no llevarte sorpresas.
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
                                &ldquo;¿Cuánto sale un implante?&rdquo; es la pregunta más frecuente — y la más difícil de responder con un solo número. No porque haya algo que ocultar, sino porque bajo la palabra &ldquo;implante&rdquo; entran cosas distintas: a veces el precio incluye la corona y a veces no, a veces hace falta un injerto de hueso y a veces no. Esta guía te explica qué determina el precio en el mercado argentino para que puedas leer cualquier presupuesto con criterio.
                            </p>
                        </div>

                        {/* Tabla de rangos */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                Precios de referencia <span className="font-cormorant italic text-oro">(2026)</span>
                            </h2>
                            <div className="space-y-4">
                                {RANGOS.map((r) => (
                                    <div key={r.tipo} className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                                            <h3 className="text-crema font-manrope font-medium text-base">{r.tipo}</h3>
                                            <span className="text-oro font-manrope font-semibold text-sm">{r.rango}</span>
                                        </div>
                                        <p className="text-crema/45 font-manrope text-xs mb-2">Durabilidad: {r.duracion}</p>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{r.nota}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-crema/35 font-manrope text-xs mt-4 leading-relaxed">
                                * Valores de referencia de AM Estética Dental, publicados en detalle en nuestra <Link href="/precio-implantes-dentales-buenos-aires" className="text-oro/70 hover:text-oro underline underline-offset-2">página de precios de implantes</Link>. Se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago. El precio final depende de la evaluación clínica.
                            </p>
                        </section>

                        {/* Factores */}
                        <section className="space-y-10">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema">
                                Las 4 variables que definen <span className="font-cormorant italic text-oro">el precio de tu implante</span>
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

                        {/* La trampa del precio por tornillo */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">
                                La comparación que <span className="font-cormorant italic text-oro">engaña</span>
                            </h2>
                            <p className="text-crema/65 font-manrope text-base leading-relaxed mb-4">
                                Ves un implante a un precio y otro que parece la mitad. Antes de decidir, preguntá qué incluye cada uno: es muy común que el más barato sea solo el tornillo, y que al sumar el pilar y la corona termine costando lo mismo o más. Un implante que no incluye la corona no es un implante terminado: es una pieza sin diente.
                            </p>
                            <p className="text-crema/65 font-manrope text-base leading-relaxed">
                                La pregunta que aclara todo es simple: <span className="text-crema">&ldquo;¿este precio me deja el diente puesto y funcionando, o falta algo?&rdquo;</span>
                            </p>
                        </section>

                        {/* Financiación */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4">
                                ¿Y si no llego con el <span className="font-cormorant italic text-oro">monto total?</span>
                            </h2>
                            <p className="text-crema/65 font-manrope text-base leading-relaxed mb-4">
                                En AM Estética Dental trabajamos con financiación propia: anticipo del 30% o 50% y el saldo en 3, 6 o 12 cuotas con tasa fija anual del 18% (1,5% mensual). Podés simular tu plan en la <Link href="/precio-implantes-dentales-buenos-aires" className="text-oro/70 hover:text-oro underline underline-offset-2">página de precios</Link>.
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">Presupuesto real, con tomografía</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Tu caso tiene un número exacto
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                En la evaluación inicial revisamos tu hueso, definimos el tipo de implante y corona que necesitás y te damos el presupuesto por escrito. Sin sorpresas después.
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
                                    { titulo: "Precio de implantes dentales en Buenos Aires", href: "/precio-implantes-dentales-buenos-aires", desc: "Tabla de precios AM 2026 con calculadora de cuotas." },
                                    { titulo: "Implantes dentales en Buenos Aires", href: "/implantes-dentales-buenos-aires", desc: "Cómo es el tratamiento paso a paso, materiales y planificación 3D." },
                                    { titulo: "¿Cuánto cuestan las carillas dentales en Argentina?", href: "/blog/cuanto-cuestan-las-carillas-dentales-en-argentina", desc: "La guía de precios de carillas, con la misma lógica." },
                                    { titulo: "Dentista en Puerto Madero", href: "/dentista-puerto-madero", desc: "Conocé la clínica, al Dr. Merino y cómo llegar." },
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
