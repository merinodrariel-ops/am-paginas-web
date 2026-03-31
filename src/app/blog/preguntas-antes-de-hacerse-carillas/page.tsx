import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://amesteticadental.com"),
    title: "Preguntas que hacerle a tu odontólogo antes de hacerte carillas | AM Estética Dental",
    description: "Antes de hacerte carillas dentales, hay 5 preguntas clave que todo especialista serio debe poder responder. Mockup, desgaste, material, laboratorio y estética natural.",
    alternates: {
        canonical: "https://amesteticadental.com/blog/preguntas-antes-de-hacerse-carillas",
    },
    openGraph: {
        title: "¿Qué preguntarle a tu odontólogo antes de hacerte carillas?",
        description: "5 preguntas que separan a un buen especialista en estética dental de uno mediocre. Guía honesta antes de tomar la decisión.",
        url: "https://amesteticadental.com/blog/preguntas-antes-de-hacerse-carillas",
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Preguntas que hacerle a tu odontólogo antes de hacerte carillas dentales",
    "description": "Antes de hacerte carillas dentales, hay 5 preguntas clave que todo especialista serio debe poder responder. Mockup, desgaste, material, laboratorio y estética natural.",
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
    "datePublished": "2026-03-31",
    "dateModified": "2026-03-31",
    "mainEntityOfPage": "https://amesteticadental.com/blog/preguntas-antes-de-hacerse-carillas",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Hacés mockup previo en boca antes de las carillas?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. En AM Estética Dental siempre realizamos un mockup previo en boca antes de cualquier preparación. El mockup es una prueba temporal que te permite ver el resultado antes de comprometerte. Si no te convence la forma, el largo o la proporción, se ajusta antes de fabricar la carilla definitiva.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Con qué material trabajás: disilicato, porcelana feldespática o resina?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trabajamos principalmente con disilicato de litio (IPS e.max) y porcelana feldespática según el caso. Ambos son materiales de laboratorio de alta gama que imitan la translucidez del esmalte natural. La elección depende de la cantidad de desgaste disponible, la posición del diente y el resultado estético buscado.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Qué tan conservador es el desgaste?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El principio que guía nuestro trabajo es la mínima intervención posible. En muchos casos usamos lentes de contacto dental (0,3 mm de grosor) que no requieren desgaste del esmalte. Cuando se necesita preparación, es de 0,3 a 0,5 mm — significativamente menos que una corona.",
            },
        },
        {
            "@type": "Question",
            "name": "¿Trabajás con laboratorio propio o tercerizado?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trabajamos con laboratorios de alta especialización en cerámica dental. La calidad del laboratorio es tan determinante como la del odontólogo: el mismo diseño ejecutado en un laboratorio de baja gama da un resultado completamente diferente.",
            },
        },
        {
            "@type": "Question",
            "name": "¿El resultado va a verse natural o muy blanco?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eso depende completamente de lo que vos busques. Nuestra especialidad es la estética fina y natural: carillas que se integran con tu rostro, que nadie nota que son carillas pero que transforman tu sonrisa. Si buscás algo muy blanco e impactante también podemos hacerlo, pero siempre te vamos a mostrar el mockup antes para que decidas.",
            },
        },
    ],
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20preguntas%20antes%20de%20hacerse%20carillas%20y%20quer%C3%ADa%20consultar%20mi%20caso.";

const PREGUNTAS = [
    {
        n: "01",
        pregunta: "¿Hacés mockup previo en boca?",
        por_que: "El mockup es una prueba en cera o resina temporal que te permite ver — en tu propia boca, antes de tocar nada — cómo van a quedar las carillas. Forma, largo, proporción, color.",
        respuesta_correcta: "\"Sí, siempre. Es parte del proceso.\"",
        señal_alerta: "Si te dicen que el mockup es opcional o que con el diseño digital alcanza, prestá atención. El diseño digital es una herramienta de planificación, no un sustituto de probarte el resultado en boca.",
        en_am: "En AM Estética Dental el mockup es obligatorio antes de cualquier preparación. Si no te convence algo, lo ajustamos antes de fabricar la carilla definitiva.",
    },
    {
        n: "02",
        pregunta: "¿Con qué material trabajás?",
        por_que: "No todas las carillas son iguales. Hay una diferencia enorme entre carillas de resina (que se hacen en el sillón, en el momento), carillas de disilicato de litio (fabricadas en laboratorio, altamente estéticas) y porcelana feldespática (el material más natural que existe, pero que requiere más técnica).",
        respuesta_correcta: "\"Trabajo con disilicato IPS e.max o porcelana feldespática según el caso, fabricadas en laboratorio dental especializado.\"",
        señal_alerta: "Si la respuesta es \"resina compuesta directa\" y te hablan de hacerlo en una sola sesión, el resultado es diferente — no malo, pero diferente. Asegurate de entender qué estás eligiendo.",
        en_am: "Trabajamos con disilicato de litio y porcelana feldespática de laboratorio. La elección depende de cada caso: cantidad de desgaste disponible, posición del diente y resultado estético buscado.",
    },
    {
        n: "03",
        pregunta: "¿Qué tan conservador es el desgaste?",
        por_que: "Para colocar una carilla, a veces hay que preparar mínimamente el esmalte del diente. \"Mínimamente\" es la palabra clave. Hay odontólogos que desgastan 0,3 mm (casi nada) y otros que desgastan 1 mm o más (que es prácticamente una corona). La diferencia es irreversible.",
        respuesta_correcta: "\"Mínimo posible. En muchos casos trabajo con lentes de contacto que no requieren ningún desgaste.\"",
        señal_alerta: "Si no pueden cuantificarte aproximadamente cuánto van a desgastar, o si no mencionan la posibilidad de trabajar sin desgaste (lentes de contacto), es una señal de que no están priorizando la conservación de tu tejido dental.",
        en_am: "Nuestro principio es mínima intervención. Usamos lentes de contacto dental siempre que el caso lo permite — 0,3 mm de grosor, sin desgaste de esmalte. Cuando se necesita preparación, es de 0,3 a 0,5 mm máximo.",
    },
    {
        n: "04",
        pregunta: "¿Con qué laboratorio trabajás?",
        por_que: "La carilla la diseña el odontólogo, pero la fabrica el ceramista del laboratorio. El mismo diseño ejecutado en un laboratorio de alta especialización versus uno de baja gama da resultados completamente distintos en textura, translucidez y naturalidad.",
        respuesta_correcta: "\"Trabajo con laboratorio especializado en cerámica dental, no con laboratorio genérico.\"",
        señal_alerta: "Si el precio es significativamente más bajo que el promedio del mercado, en general la diferencia está en el laboratorio. La cerámica dental de alta gama tiene un costo real que no se puede comprimir demasiado sin resignar calidad.",
        en_am: "Trabajamos exclusivamente con laboratorios especializados en cerámica dental. La calidad del laboratorio no es un detalle — es parte central del resultado.",
    },
    {
        n: "05",
        pregunta: "¿El resultado va a verse natural o muy blanco?",
        por_que: "Hay dos escuelas en estética dental. Una que prioriza el impacto visual: sonrisas muy blancas, muy simétricas, muy perfectas. Otra que prioriza la integración: que la sonrisa se vea bella pero que nadie note que son carillas. Ninguna es objetivamente mejor — depende de lo que vos querés.",
        respuesta_correcta: "\"Depende de lo que vos busques. Te muestro el mockup y decidís.\"",
        señal_alerta: "Si solo ves un tipo de resultado en su portfolio — todas las sonrisas se ven muy parecidas, muy blancas — ese odontólogo tiene un estilo marcado. No es un problema si es el estilo que vos querés. Pero si buscás algo más sutil y natural, asegurate de que puedan hacerlo.",
        en_am: "Nuestra especialidad es la estética fina y natural: carillas que se integran con tu rostro y tu personalidad. Podemos ir desde muy natural hasta más impactante, pero siempre con el mockup como punto de partida.",
    },
];

export default function ArticuloPreguntas() {
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
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Guía</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Preguntas que hacerle a tu odontólogo{" "}
                            <span className="font-cormorant italic text-oro">antes de hacerte carillas</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            Hay cinco preguntas que todo especialista serio en estética dental debe poder responderte con claridad. Si alguna respuesta es vaga o evasiva, es información importante antes de tomar una decisión irreversible.
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
                                Las carillas dentales son un tratamiento permanente. Una vez que se prepara el diente, no hay marcha atrás. Por eso, elegir al especialista correcto no es una decisión menor — y la mejor forma de evaluarlo no es mirando solo las fotos del antes/después, sino haciendo las preguntas correctas antes de empezar.
                            </p>
                        </div>

                        {/* Preguntas */}
                        {PREGUNTAS.map((p) => (
                            <section key={p.n} className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <span className="text-oro/35 font-manrope text-xs font-medium tracking-widest pt-1.5 flex-none w-6">{p.n}</span>
                                    <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema leading-tight">
                                        {p.pregunta}
                                    </h2>
                                </div>

                                <div className="pl-10 space-y-4">
                                    <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                        <span className="text-crema/40 font-medium uppercase tracking-widest text-[10px] block mb-2">Por qué importa</span>
                                        {p.por_que}
                                    </p>

                                    <div className="border border-oro/20 rounded-xl p-5 bg-carbon-soft">
                                        <span className="text-oro/60 font-manrope uppercase tracking-widest text-[9px] block mb-2">Respuesta que querés escuchar</span>
                                        <p className="text-crema font-manrope text-sm leading-relaxed italic">{p.respuesta_correcta}</p>
                                    </div>

                                    <div className="border border-white/6 rounded-xl p-5 bg-carbon-soft">
                                        <span className="text-crema/30 font-manrope uppercase tracking-widest text-[9px] block mb-2">Señal de alerta</span>
                                        <p className="text-crema/55 font-manrope text-sm leading-relaxed">{p.señal_alerta}</p>
                                    </div>

                                    <div className="border-l-2 border-oro/30 pl-4">
                                        <span className="text-oro/60 font-manrope uppercase tracking-widest text-[9px] block mb-1">En AM Estética Dental</span>
                                        <p className="text-crema/65 font-manrope text-sm leading-relaxed">{p.en_am}</p>
                                    </div>
                                </div>
            </section>
                        ))}

                        {/* Conclusión */}
                        <section className="border-t border-oro/15 pt-10">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">La elección correcta empieza con las preguntas correctas</h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Un buen especialista en estética dental no solo hace bien el trabajo técnico — también puede explicarte exactamente qué va a pasar, por qué, y mostrarte el resultado antes de empezar. Si en la consulta previa encontrás evasivas o respuestas genéricas, esa es información valiosa.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                No hay ninguna pregunta de esta lista que sea difícil de responder para alguien que trabaja con estándares altos. Hacélas, escuchá las respuestas, y elegí con esa información.
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Querés hacer esas preguntas en persona?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Primera consulta en AM Estética Dental
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                Respondemos todas estas preguntas en la primera consulta, con mockup incluido para que veas el resultado antes de decidir.
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
                                    { titulo: "¿Cuánto duran las carillas de porcelana?", href: "/blog/cuanto-duran-las-carillas-de-porcelana", desc: "10 a 20 años con el cuidado correcto." },
                                    { titulo: "Diseño de sonrisa digital: cómo funciona", href: "/blog/diseno-de-sonrisa-digital-como-funciona", desc: "El proceso paso a paso desde la foto hasta el resultado." },
                                    { titulo: "¿Cuántas sesiones se necesitan para las carillas?", href: "/blog/cuantas-sesiones-se-necesitan-para-las-carillas", desc: "Todo el proceso en 2 a 3 consultas en 10 a 14 días." },
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
