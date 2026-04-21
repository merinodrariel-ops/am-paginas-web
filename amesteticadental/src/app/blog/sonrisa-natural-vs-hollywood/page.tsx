import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Sonrisa natural vs sonrisa Hollywood: cuál es la diferencia y cómo elegir | AM Estética Dental",
    description: "No toda la estética dental busca lo mismo. La sonrisa natural se integra con tu rostro. La sonrisa Hollywood impacta visualmente. Cuál conviene según tu caso.",
    alternates: {
        canonical: "https://www.amesteticadental.com/blog/sonrisa-natural-vs-hollywood",
    },
    openGraph: {
        title: "Sonrisa natural vs sonrisa Hollywood: cuál es la diferencia real",
        description: "Antes de hacerte carillas, entendé qué tipo de resultado existe y cuál se adapta mejor a tu rostro y personalidad.",
        url: "https://www.amesteticadental.com/blog/sonrisa-natural-vs-hollywood",
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sonrisa natural vs sonrisa Hollywood: cuál es la diferencia y cómo elegir",
    "description": "No toda la estética dental busca lo mismo. La sonrisa natural se integra con tu rostro. La sonrisa Hollywood impacta visualmente. Cuál conviene según tu caso.",
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
    "mainEntityOfPage": "https://www.amesteticadental.com/blog/sonrisa-natural-vs-hollywood",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Qué es una sonrisa Hollywood?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Una sonrisa Hollywood se caracteriza por dientes muy blancos (tonos BL1 o A1), perfectamente simétricos, de largo uniforme y sin imperfecciones visibles. Es el estilo que asociamos con actores y celebridades de Hollywood. El resultado es impactante visualmente pero en muchos casos luce poco natural en personas con rasgos finos o expresión sutil.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Qué diferencia una sonrisa natural de una Hollywood en carillas?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La diferencia está en el color, la forma y la integración con el rostro. Una sonrisa natural usa tonos más cálidos (A2, A3), tiene pequeñas variaciones entre dientes, incorpora algo de translucidez en los bordes y respeta las proporciones naturales del paciente. Una Hollywood maximiza la blancura, la uniformidad y el tamaño de los dientes.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Cuál estilo hace AM Estética Dental?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nuestra especialidad es la estética fina y natural: carillas que se integran con el rostro, que nadie nota que son carillas pero que transforman la sonrisa. Podemos trabajar en cualquier estilo, pero el mockup previo siempre le permite al paciente ver el resultado antes de decidir.",
            },
        },
    ],
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20sonrisa%20natural%20vs%20Hollywood%20y%20quer%C3%ADa%20ver%20opciones%20para%20mi%20caso.";

export default function ArticuloSonrisaNatural() {
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
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Diseño de Sonrisa</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Sonrisa natural vs sonrisa Hollywood:{" "}
                            <span className="font-cormorant italic text-oro">cuál es la diferencia real</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            Antes de decidirte por carillas o un diseño de sonrisa, hay una pregunta que vale la pena hacerse: ¿qué tipo de resultado estás buscando realmente? No es la misma pregunta que "¿qué color quiero?" — es más profunda que eso.
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

                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Intro */}
                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                En estética dental conviven dos filosofías bastante distintas. Una prioriza el impacto visual: dientes muy blancos, perfectamente uniformes, que se noten. La otra prioriza la integración: que la sonrisa se vea bella, transformada, pero que encaje naturalmente con el rostro y la personalidad de quien la lleva. Ninguna es objetivamente mejor — pero para cada persona existe un estilo más adecuado.
                            </p>
                        </div>

                        {/* Comparativa */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">Las dos filosofías</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Hollywood */}
                                <div className="border border-oro/20 rounded-2xl p-6 bg-carbon-soft">
                                    <span className="text-oro font-manrope uppercase tracking-[0.25em] text-[9px] block mb-3">Estilo Hollywood</span>
                                    <div className="space-y-3">
                                        {[
                                            "Dientes muy blancos (BL1, A1)",
                                            "Largo máximo dentro de lo posible",
                                            "Alta simetría entre dientes",
                                            "Bordes incisales rectos y definidos",
                                            "Sin variaciones de tono entre piezas",
                                            "Resultado impactante, se nota",
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro/50 text-xs flex-none mt-0.5">·</span>
                                                <p className="text-crema/65 font-manrope text-sm">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Natural */}
                                <div className="border border-oro/40 rounded-2xl p-6 bg-carbon-soft relative">
                                    <span className="absolute top-4 right-4 text-[8px] font-manrope uppercase tracking-widest text-oro/60 border border-oro/20 rounded-full px-2 py-0.5">Nuestra especialidad</span>
                                    <span className="text-oro font-manrope uppercase tracking-[0.25em] text-[9px] block mb-3">Estética fina y natural</span>
                                    <div className="space-y-3">
                                        {[
                                            "Tonos cálidos integrados con el tono de piel",
                                            "Proporciones respetando el rostro",
                                            "Translucidez en los bordes incisales",
                                            "Pequeñas variaciones naturales entre piezas",
                                            "Textura superficial que imita el esmalte",
                                            "Resultado elegante — nadie nota que son carillas",
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro text-xs flex-none mt-0.5">·</span>
                                                <p className="text-crema/80 font-manrope text-sm">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Por qué el natural es más difícil */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Por qué la estética natural es técnicamente más difícil
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Esto no es obvio a primera vista, pero hacer que algo se vea natural es más complejo que hacer que se vea perfecto. Una sonrisa Hollywood tiene parámetros claros: muy blanco, muy simétrico, muy uniforme. Es medible y replicable.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Una sonrisa natural requiere que el odontólogo y el ceramista del laboratorio tomen decisiones estéticas sutiles: qué tan translúcido queda el borde incisal, cómo varía levemente el tono entre el incisivo central y el lateral, cómo la textura superficial de la carilla capta la luz del mismo modo que el esmalte natural.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Esas decisiones no tienen una fórmula — requieren criterio estético y experiencia. Por eso el resultado "natural" varía mucho más entre profesionales que el resultado "Hollywood".
                            </p>
                        </section>

                        {/* Cómo saber cuál conviene */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Cómo saber cuál te conviene
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                No hay una respuesta universal. Hay algunos factores que suelen orientar la decisión:
                            </p>
                            <div className="space-y-5">
                                {[
                                    {
                                        n: "01",
                                        titulo: "Tu contexto social y profesional",
                                        texto: "Una persona que trabaja frente a cámaras, en medios, o en industrias donde la imagen tiene mucho peso puede preferir el impacto visual de una sonrisa Hollywood. Para alguien que prefiere que su sonrisa transforme sin que sea obvio, la estética natural suele ser más cómoda.",
                                    },
                                    {
                                        n: "02",
                                        titulo: "Tu tono de piel y rasgos",
                                        texto: "Los tonos muy blancos (BL1) se integran mejor con pieles más claras. En pieles medianas u oscuras, los blancos extremos pueden generar un contraste que se lee como artificial. Los tonos A2 o A3 suelen integrarse mejor con mayor diversidad de tonos de piel.",
                                    },
                                    {
                                        n: "03",
                                        titulo: "Qué estás cambiando",
                                        texto: "Si el objetivo principal es cerrar diastemas, corregir forma o mejorar color sin un cambio dramático, la estética natural es generalmente la dirección correcta. Si el objetivo es una transformación visible y buscada como resultado, una propuesta más Hollywood puede tener más sentido.",
                                    },
                                    {
                                        n: "04",
                                        titulo: "El mockup lo resuelve",
                                        texto: "Esta es la razón más importante para exigir un mockup antes de empezar. Verte el resultado en boca — antes de tocar un solo diente — es la única forma real de saber si el estilo que imaginabas es el que te queda bien. En muchos casos los pacientes cambian su preferencia después de verse con el mockup.",
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

                        {/* Señales de alerta */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Señales de que el resultado no va a verse natural
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Si buscás estética fina y natural, estas son algunas señales de alerta antes de empezar:
                            </p>
                            <div className="space-y-3">
                                {[
                                    "El portfolio del odontólogo muestra todas las sonrisas muy parecidas — misma forma, mismo blanco, mismo largo.",
                                    "No hacen mockup previo. Sin mockup no hay forma de ver el resultado antes de empezar.",
                                    "El laboratorio es genérico o trabajan con CAD/CAM de bajo costo. La estratificación manual es insustituible para lograr naturalismo.",
                                    "El color que te ofrecen por defecto es BL1 o A1 sin evaluar tu tono de piel.",
                                    "No preguntan qué tipo de resultado buscás — asumen que todos quieren lo mismo.",
                                ].map((punto, i) => (
                                    <div key={i} className="flex items-start gap-4 py-3 border-b border-oro/8 last:border-0">
                                        <span className="text-oro/40 font-manrope text-xs pt-0.5 flex-none">—</span>
                                        <p className="text-crema/70 font-manrope text-sm leading-relaxed">{punto}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Posicionamiento AM */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">Nuestra filosofía</span>
                            <h2 className="text-xl font-manrope font-light text-crema mb-4">
                                Estética fina, elegante, natural
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                En AM Estética Dental trabajamos con el principio de que la mejor carilla es la que nadie nota que es carilla — pero que transforma. Nuestra especialidad es la integración: que el resultado respete tu rostro, tu tono de piel, y que en diez años se vea igual de bien que el primer día.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Podemos trabajar en cualquier dirección estética — pero siempre con mockup previo, siempre con laboratorio de alta especialización, y siempre después de entender qué resultado buscás específicamente.
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Querés ver qué te queda bien?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                El mockup resuelve la duda
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                En la primera consulta diseñamos una propuesta y te la mostramos en boca. Antes de comprometerte con nada, ves el resultado.
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
                                    { titulo: "Preguntas que hacerle a tu odontólogo antes de las carillas", href: "/blog/preguntas-antes-de-hacerse-carillas", desc: "Las 5 preguntas que no podés dejar de hacer." },
                                    { titulo: "Diseño de sonrisa digital: cómo funciona", href: "/blog/diseno-de-sonrisa-digital-como-funciona", desc: "El proceso paso a paso antes de tocar un diente." },
                                    { titulo: "Disilicato vs porcelana feldespática", href: "/blog/carillas-disilicato-vs-porcelana-feldespatica", desc: "Cuál es más estética y cuál dura más." },
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
