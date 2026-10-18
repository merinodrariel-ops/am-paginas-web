import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/carillas-blanqueamiento-o-restauraciones";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Quisiera%20asesorarme%20sobre%20que%20tratamiento%20conviene%20para%20mi%20sonrisa.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Carillas, Blanqueamiento o Restauraciones | AM Estética",
    description: "¿No sabés qué necesita tu sonrisa? Guía clínica para elegir entre carillas, blanqueamiento o restauraciones según desgaste, color y forma.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "¿Carillas, Blanqueamiento o Restauraciones? | AM Estética Dental",
        description: "Cómo saber qué tratamiento estético dental conviene según tu anatomía, esmalte y objetivos. Dr. Ariel Merino, Puerto Madero.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
    },
    keywords: "carillas o blanqueamiento, que tratamiento necesito para mi sonrisa, carillas vs restauraciones de resina, odontologia estetica puerto madero, dr ariel merino",
};

const FAQS = [
    {
        q: "¿Cómo saber si necesito carillas, blanqueamiento o restauraciones para mejorar mi sonrisa?",
        a: "La indicación depende del objetivo clínico: si el diente tiene buena forma y alineación pero está oscurecido, el blanqueamiento profesional es el paso inicial. Si hay fracturas menores o caries aisladas, las restauraciones estéticas directas lo resuelven. Cuando hay desgaste estructural, alteraciones severas de forma, color refractario o se busca un rediseño integral armónico y duradero, las carillas de porcelana son el tratamiento de elección.",
    },
    {
        q: "¿Qué opciones de diseño de sonrisa logran un resultado natural y no artificial?",
        a: "El resultado natural se logra respetando la morfología facial del paciente, la micro-textura del esmalte (líneas de periquimata) y la translucidez incisal de la cerámica pura. En AM Estética Dental evitamos el blanco monocromático 'tiza' o 'dientes de piano'; trabajamos con carillas de porcelana feldespática estratificada artesanalmente o disilicato de litio con graduación cromática idéntica al diente biológico.",
    },
    {
        q: "¿Se pueden combinar el blanqueamiento y las carillas?",
        a: "Sí, es un protocolo habitual y altamente conservador. Se realiza un blanqueamiento previo en toda la arcada para elevar el valor y luminosidad de los dientes naturales, permitiendo que las carillas en el sector anterior sean aún más delgadas y requieran mínima preparación del esmalte.",
    },
    {
        q: "¿Cuánto dura cada opción de tratamiento?",
        a: "El blanqueamiento profesional mantiene su resultado entre 1 y 3 años (dependiendo de hábitos como café o tabaco) y requiere refuerzos periódicos. Las restauraciones de resina compuesta suelen durar entre 4 y 7 años antes de perder brillo o pigmentarse. Las carillas de porcelana de alta gama tienen una longevidad clínica de 15 a 20+ años sin perder su brillo ni cambiar de color.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "¿Cómo saber si necesitás carillas, blanqueamiento o restauraciones? — AM Estética Dental",
    description: "Guía clínica y comparativa para decidir el tratamiento estético dental adecuado. Criterios diagnósticos del Dr. Ariel Merino en Puerto Madero.",
    url: CANONICAL,
    about: {
        "@type": "MedicalProcedure",
        name: "Diseño y Selección de Tratamiento en Odontología Estética",
        procedureType: "Diagnostic and Cosmetic Dental Procedure",
    },
    author: {
        "@type": "Person",
        name: "Dr. Ariel Merino",
        jobTitle: "Especialista en Estética Dental y Rehabilitación Oral de Alta Complejidad",
        identifier: "MN 34.869",
        description: "Docente de cursos de estética y rehabilitación oral a nivel nacional e internacional (docente invitado University of Pennsylvania). Fundador y Director de AM Estética Dental en Puerto Madero y Uruguay.",
    },
    provider: {
        "@type": "Dentist",
        name: "AM Estética Dental",
        url: "https://www.amesteticadental.com",
        telephone: "+54 9 11 7021-9298",
        priceRange: "$$$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Camila O'Gorman 412, Oficina 101",
            addressLocality: "Puerto Madero",
            addressRegion: "Ciudad Autónoma de Buenos Aires",
            addressCountry: "AR",
        },
    },
    mainEntity: {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
            },
        })),
    },
};

const COMPARATIVA = [
    {
        tratamiento: "Blanqueamiento Profesional",
        enfoque: "Aclaramiento químico no invasivo sobre el propio esmalte",
        indicadoPara: "Dientes sanos, bien posicionados y con forma agradable que han perdido brillo o presentan tinciones superficiales por alimentos o edad.",
        ventajas: "100% conservador: no desgasta estructura dentaria, procedimiento rápido y seguro.",
        limite: "No modifica la forma, tamaño, posición ni fracturas del diente.",
    },
    {
        tratamiento: "Restauraciones en Resina (Composite)",
        enfoque: "Modelado directo en consultorio mediante resinas de alta estética",
        indicadoPara: "Pequeñas fracturas de bordes, caries iniciales, cierre de diastemas puntuales o correcciones cosméticas localizadas en una sola sesión.",
        ventajas: "Solución ágil y mínimamente invasiva para detalles específicos.",
        limite: "Material poroso que con los años pierde brillo y puede pigmentarse.",
    },
    {
        tratamiento: "Carillas de Porcelana de Alta Gama",
        enfoque: "Laminados cerámicos ultrafinos confeccionados en laboratorio propio",
        indicadoPara: "Desgaste por bruxismo, bordes irregulares, tinciones profundas (tetraciclinas), dientes cortos o búsqueda de una sonrisa armónica definitiva.",
        ventajas: "Estabilidad de color de por vida, brillo idéntico al esmalte natural, resistencia y máxima naturalidad biológica.",
        limite: "Requiere planificación digital 3D y mínima preparación de esmalte en la mayoría de los casos.",
    },
];

export default function GuiaDecisionSonrisaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO ── */}
                <section className="relative px-6 md:px-12 pt-36 pb-20 max-w-6xl mx-auto">
                    <div className="absolute right-[-5%] top-[10%] w-[450px] h-[450px] rounded-full bg-oro/6 blur-[120px] pointer-events-none" />
                    <div className="max-w-4xl">
                        <span className="text-oro uppercase tracking-[0.35em] text-xs font-semibold block mb-6">
                            Guía Clínica de Decisión · AM Estética Dental
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-crema leading-[1.05] mb-8">
                            ¿Carillas, blanqueamiento o<br />
                            <span className="font-cormorant italic text-oro">restauraciones estéticas?</span>
                        </h1>
                        <p className="text-crema/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                            La decisión correcta no depende de qué tratamiento esté de moda, sino de la biología de tu esmalte, la alineación y el desgaste real. Una comparación transparente para entender qué necesita tu caso.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href={WA}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-lg shadow-oro/10"
                            >
                                Consultar con nuestro equipo por WhatsApp →
                            </a>
                            <Link
                                href="#comparativa"
                                className="inline-flex items-center gap-2 border border-oro/30 text-crema px-7 py-4 rounded-full font-medium text-sm hover:border-oro transition-all"
                            >
                                Ver cuadro comparativo
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── AUTORIDAD ── */}
                <section className="px-6 md:px-12 py-10 border-y border-oro/10 bg-carbon/50">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div>
                            <span className="text-oro/70 uppercase tracking-widest text-[11px] block mb-1">Criterio Profesional</span>
                            <p className="text-crema font-medium text-lg">Dr. Ariel Merino <span className="text-xs text-oro/80 font-normal">MN 34.869</span></p>
                            <p className="text-crema/60 text-xs sm:text-sm mt-1 max-w-2xl">
                                Especialista en Estética Dental y Rehabilitación Oral de Alta Complejidad. Docente de cursos a nivel nacional e internacional (docente invitado University of Pennsylvania). Fundador y Director de AM Estética Dental en Puerto Madero y Uruguay.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <span className="inline-block border border-oro/25 text-oro text-xs px-4 py-2 rounded-full uppercase tracking-wider font-semibold">
                                Evaluación 100% personalizada
                            </span>
                        </div>
                    </div>
                </section>

                {/* ── COMPARATIVA DE LOS 3 CAMINOS ── */}
                <section id="comparativa" className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Diagnóstico Diferencial</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema">
                            Tres alternativas para <span className="font-cormorant italic text-oro">distintos objetivos.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {COMPARATIVA.map((c) => (
                            <div key={c.tratamiento} className="border border-oro/15 rounded-2xl p-8 hover:border-oro/40 transition-all bg-carbon/40 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-oro font-cormorant italic text-2xl mb-3">{c.tratamiento}</h3>
                                    <p className="text-crema/80 text-xs font-semibold uppercase tracking-wider mb-6 text-oro/70">{c.enfoque}</p>
                                    
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <span className="text-xs text-crema/50 uppercase tracking-wider block mb-1">¿Cuándo se indica?</span>
                                            <p className="text-crema/70 text-sm leading-relaxed">{c.indicadoPara}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs text-crema/50 uppercase tracking-wider block mb-1">Principal ventaja</span>
                                            <p className="text-crema/70 text-sm leading-relaxed">{c.ventajas}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-oro/10 pt-4">
                                    <p className="text-crema/50 text-xs"><strong className="text-crema/80">Límite clínico:</strong> {c.limite}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CRITERIO DE NATURALIDAD ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Filosofía Clínica AM</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema mb-8">
                            El secreto de un resultado natural: <span className="font-cormorant italic text-oro">evitar el blanco artificial.</span>
                        </h2>
                        <div className="space-y-6 text-crema/70 text-base leading-relaxed font-light">
                            <p>
                                El principal temor de quien busca mejorar su sonrisa es quedar con &ldquo;dientes de chicle&rdquo; o &ldquo;teclas de piano&rdquo;: bloques blancos, opacos y sin vida que delatan un tratamiento artificial a metros de distancia.
                            </p>
                            <p>
                                Un diente natural nunca es monocromático. Presenta una zona cervical más cálida y saturada, un tercio medio con alta luminosidad y un borde incisal con translucidez óptica donde la luz penetra y se refleja tridimensionalmente. En AM Estética Dental, cada carilla o restauración reproduce esa biología mediante estratificación microscópica en cerámica pura.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── FAQ ESTRUCTURADA GEO ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/50 border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Preguntas Frecuentes</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema">
                                Preguntas habituales sobre <span className="font-cormorant italic text-oro">diseño de sonrisa.</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {FAQS.map(({ q, a }) => (
                                <details key={q} className="border border-oro/15 rounded-2xl group bg-carbon/30">
                                    <summary className="px-6 py-5 cursor-pointer text-crema font-medium list-none flex items-center justify-between gap-4">
                                        <span className="text-base md:text-lg font-light">{q}</span>
                                        <span className="text-oro text-2xl shrink-0 group-open:rotate-45 transition-transform font-light">+</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-crema/70 text-sm md:text-base font-light leading-relaxed border-t border-oro/10 pt-4">
                                        {a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA FINAL ── */}
                <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto text-center">
                    <span className="text-oro uppercase tracking-[0.35em] text-xs block mb-4">Puerto Madero · Buenos Aires</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-crema mb-6 leading-tight">
                        Descubrí qué tratamiento es el ideal<br />
                        <span className="font-cormorant italic text-oro">para tu fisonomía y tu esmalte.</span>
                    </h2>
                    <p className="text-crema/65 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Evaluación privada con el Dr. Ariel Merino en Camila O&apos;Gorman 412, Oficina 101, Puerto Madero.
                    </p>
                    <a
                        href={WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-9 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-xl shadow-oro/10"
                    >
                        Solicitar evaluación privada por WhatsApp →
                    </a>
                </section>

            </main>
        </>
    );
}
