import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/placas-neuromiorrelajantes-bruxismo";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Quisiera%20consultar%20por%20una%20placa%20neuromiorrelajante%20para%20bruxismo%20a%20medida.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Placas Neuromiorrelajantes Bruxismo Buenos Aires | AM",
    description: "Placas neuromiorrelajantes rígidas de alta precisión calibradas en boca. Frena el desgaste dental y el dolor mandibular. Puerto Madero.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Placas Neuromiorrelajantes para Bruxismo | AM Estética Dental",
        description: "Férulas oclusales de desprogramación neuromuscular diseñadas en 3D y calibradas individualmente. Dr. Ariel Merino, Puerto Madero.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
        images: ["/images/placa-neuromiorrelajante-bruxismo-am-estetica-dental.png"],
    },
    keywords: "placas neuromiorrelajantes bruxismo, placa de bruxismo precio, placa miorrelajante puerto madero, ferula de descarga rigida buenos aires, desgaste dental por bruxismo",
};

const FAQS = [
    {
        q: "¿Qué diferencia hay entre una placa neuromiorrelajante rígida y las placas blandas de farmacia?",
        a: "La diferencia es radical: las placas blandas o de venta libre estimulan el reflejo de masticación y aumentan el apretamiento nocturno, además de alterar la mordida. En AM Estética Dental confeccionamos placas rígidas de polímero médico transparente de alta densidad con guías de desoclusión talladas. Esto desprograma los músculos masetero y temporal, distribuye la fuerza oclusal de forma homogénea y protege tanto el esmalte como la articulación temporomandibular (ATM).",
    },
    {
        q: "¿Por qué es fundamental la calibración y el ajuste en boca?",
        a: "Una placa sin calibrar puede causar más daño que no usar nada: si un solo diente hace contacto antes que el resto, se genera un punto de palanca que agrava el dolor articular. En nuestro protocolo, tras el escaneo digital 3D y el fresado de máxima precisión, el Dr. Ariel Merino calibra milimétricamente las guías canina y anterior en boca con papel de articular micrométrico para asegurar un contacto balanceado y libre de interferencias.",
    },
    {
        q: "¿Cómo saber si necesito una placa neuromiorrelajante?",
        a: "Los signos clínicos más frecuentes son: despertarse con tensión o dolor en la mandíbula y sienes, dolores de cabeza matutinos, contracturas cervicales crónicas, bordes dentales desgastados o astillados, ruidos o chasquidos en la articulación al abrir la boca, o que tu pareja te escuche rechinar los dientes durante la noche.",
    },
    {
        q: "¿La placa cura el bruxismo o es un tratamiento de protección?",
        a: "El bruxismo tiene un origen central/neurológico frecuentemente ligado al estrés. La placa neuromiorrelajante es el estándar de oro médico para desprogramar la musculatura hipertónica, frenar en seco la destrucción del esmalte dental y proteger la ATM. En casos de hiperactividad muscular severa, combinamos la placa con micro-dosis de toxina botulínica en maseteros para reducir el pico de fuerza involuntaria.",
    },
    {
        q: "¿Cuánto dura una placa de descanso y cómo se cuida?",
        a: "Confeccionada en polímero rígido de alta gama, una placa AM dura varios años según la intensidad del apretamiento del paciente. Se limpia diariamente con agua fría y jabón neutro (evitando pastas dentales abrasivas o agua caliente que puedan deformarla) y se guarda en su estuche ventilado exclusivo.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Placas Neuromiorrelajantes para Bruxismo — AM Estética Dental Puerto Madero",
    description: "Tratamiento de alta precisión para el bruxismo mediante placas neuromiorrelajantes rígidas calibradas en boca y protección articular por el Dr. Ariel Merino.",
    url: CANONICAL,
    about: {
        "@type": "MedicalCondition",
        name: "Bruxismo y Trastornos Temporomandibulares",
        alternateName: ["Rechinar nocturno", "Apretamiento dental", "Disfunción de la ATM"],
    },
    mainEntity: {
        "@type": "MedicalProcedure",
        name: "Confección y Calibración de Placa Neuromiorrelajante Rígida",
        procedureType: "NonSurgicalProcedure",
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
    mainEntityOfPage: {
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

const PILARES = [
    {
        num: "01",
        titulo: "Escaneo Digital 3D",
        desc: "Sin pastas incómodas ni náuseas. Tomamos una réplica microscópica de tu boca y registramos cómo cierra tu mandíbula en relación céntrica real.",
    },
    {
        num: "02",
        titulo: "Polímero Médico Rígido",
        desc: "Fabricación de máxima densidad. No se deforma, no retiene olores y no estimula el apretamiento como las gomosas de farmacia.",
    },
    {
        num: "03",
        titulo: "Guías de Desoclusión",
        desc: "Rampas anteriores y caninas diseñadas para que al deslizar la mandíbula los molares se separen instantáneamente, apagando la contracción muscular.",
    },
    {
        num: "04",
        titulo: "Calibración en Boca",
        desc: "Ajuste microscópico realizado personalmente por el Dr. Ariel Merino. Contactos simétricos y cero puntos de dolor desde la primera noche.",
    },
];

export default function PlacasBruxismoPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO CON VIDEO CINEMATOGRÁFICO DE LA PLACA Y ESTUCHE AM ── */}
                <section className="relative px-6 md:px-12 pt-36 pb-20 max-w-6xl mx-auto">
                    <div className="absolute right-[-5%] top-[10%] w-[450px] h-[450px] rounded-full bg-oro/6 blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-oro uppercase tracking-[0.35em] text-xs font-semibold block mb-6">
                                Desprogramación Neuromuscular · Puerto Madero
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-crema leading-[1.05] mb-8">
                                Placas neuromiorrelajantes<br />
                                <span className="font-cormorant italic text-oro">para bruxismo de alta precisión.</span>
                            </h1>
                            <p className="text-crema/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                                No es un simple protector: es un dispositivo de ingeniería oclusal diseñado a medida para relajar la musculatura mandibular, frenar el desgaste de tus dientes y devolverte el descanso profundo sin dolor.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <a
                                    href={WA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-lg shadow-oro/10"
                                >
                                    Solicitar evaluación de bruxismo por WhatsApp →
                                </a>
                                <Link
                                    href="#protocolo"
                                    className="inline-flex items-center gap-2 border border-oro/30 text-crema px-7 py-4 rounded-full font-medium text-sm hover:border-oro transition-all"
                                >
                                    Ver cómo se calibra
                                </Link>
                            </div>
                        </div>

                        {/* Video de la placa en estuche de terciopelo AM */}
                        <div className="lg:col-span-5">
                            <figure className="relative aspect-[4/5] w-full max-w-[480px] mx-auto overflow-hidden rounded-[24px] border border-oro/25 bg-carbon-soft shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    poster="/images/placa-neuromiorrelajante-bruxismo-am-estetica-dental.png"
                                    aria-label="Placa neuromiorrelajante rígida de bruxismo en estuche exclusivo de AM Estética Dental"
                                    className="absolute inset-0 h-full w-full object-cover"
                                >
                                    <source src="/videos/placa-neuromiorrelajante-bruxismo-am-animacion.mp4" type="video/mp4" />
                                </video>
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/10" />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                                    <span className="mb-2 inline-flex rounded-full border border-oro/30 bg-carbon/80 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-oro backdrop-blur-sm">
                                        Ingeniería Oclusal · AM Estética Dental
                                    </span>
                                    <figcaption className="text-xs leading-relaxed text-crema/70">
                                        Polímero de grado médico transparente, desoclusión guiada y estuche exclusivo grabado en oro.
                                    </figcaption>
                                </div>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* ── AUTORIDAD MÉDICA CON FOTO DEL DR. MERINO ── */}
                <section className="px-6 md:px-12 py-10 border-y border-oro/10 bg-carbon/50">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-oro/30 shrink-0">
                                <Image
                                    src="https://res.cloudinary.com/drctvgyqd/image/upload/w_300,h_300,c_fill,g_face,q_auto,f_auto/equipo/dr-ariel-merino-director-clinico-am-estetica-dental-puerto-madero"
                                    alt="Dr. Ariel Merino"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <span className="text-oro/70 uppercase tracking-widest text-[11px] block mb-1">Criterio Oclusal y Diagnóstico</span>
                                <p className="text-crema font-medium text-lg">Dr. Ariel Merino <span className="text-xs text-oro/80 font-normal">MN 34.869</span></p>
                                <p className="text-crema/60 text-xs sm:text-sm mt-1 max-w-2xl">
                                    Especialista en Estética Dental y Rehabilitación Oral de Alta Complejidad. Docente de cursos a nivel nacional e internacional (docente invitado University of Pennsylvania). Fundador y Director de AM Estética Dental en Puerto Madero y Uruguay.
                                </p>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <span className="inline-block border border-oro/25 text-oro text-xs px-4 py-2 rounded-full uppercase tracking-wider font-semibold">
                                Calibración milimétrica en sillón
                            </span>
                        </div>
                    </div>
                </section>

                {/* ── LOS 4 PILARES DEL PROTOCOLO DE ALTA PRECISIÓN ── */}
                <section id="protocolo" className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Protocolo Clínico</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema">
                            Por qué una placa de precisión <span className="font-cormorant italic text-oro">no se parece a nada comercial.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PILARES.map((p) => (
                            <div key={p.num} className="border border-oro/15 rounded-2xl p-7 bg-carbon/40 hover:border-oro/40 transition-all">
                                <span className="text-oro font-cormorant italic text-3xl block mb-4">{p.num}</span>
                                <h3 className="text-crema text-lg font-medium mb-3">{p.titulo}</h3>
                                <p className="text-crema/65 text-sm leading-relaxed font-light">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── DIFERENCIA CRÍTICA: RÍGIDA VS. BLANDA ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-6">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Peligro de las Férulas Comerciales</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema mb-6 leading-tight">
                                El grave error de usar <span className="font-cormorant italic text-oro">placas blandas de farmacia.</span>
                            </h2>
                            <div className="space-y-4 text-crema/70 text-sm md:text-base leading-relaxed font-light">
                                <p>
                                    Mucha gente compra férulas blandas o termoplásticas en farmacias pensando que amortiguan la mordida. El efecto biológico es exactamente el contrario: al ser elásticas, el sistema neuromuscular las interpreta como alimento, activando el reflejo de masticación y provocando que aprietes con hasta el doble de fuerza mientras dormís.
                                </p>
                                <p>
                                    Una verdadera <strong className="text-crema font-medium">placa neuromiorrelajante debe ser rígida</strong>. Su función no es ser una almohadilla, sino desprogramar el arco reflejo mandibular, permitiendo que los cóndilos descansen en su posición articular más fisiológica y segura.
                                </p>
                            </div>
                        </div>

                        {/* Fotografía de impacto del estuche y la placa rígida */}
                        <div className="md:col-span-6">
                            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-oro/20 bg-carbon-soft shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="/images/placa-neuromiorrelajante-bruxismo-am-estetica-dental.png"
                                    alt="Placa neuromiorrelajante rígida de precisión AM Estética Dental"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-flex items-center border border-oro/30 bg-carbon/85 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-oro">
                                        Material Rígido Cristalino · Desoclusión Guiada
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CASOS DE DESGASTE POR BRUXISMO RESUELTOS EN AM ── */}
                <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto border-t border-oro/10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Consecuencias del Bruxismo</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema">
                            Cuando el bruxismo ya gastó tus dientes: <span className="font-cormorant italic text-oro">recuperación estética y funcional.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-oro/20 bg-carbon-soft">
                            <Image
                                src="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/rehabilitacion-completa-sonrisa/carillas-coronas-arcada-superior-antes-despues-intraoral-rehabilitacion-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png"
                                alt="Restauración de desgaste severo por bruxismo con carillas cerámicas — AM Estética Dental"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6 text-crema/70 font-light text-sm md:text-base leading-relaxed">
                            <p>
                                El esmalte desgastado no se regenera biológicamente. Con los años, el rechinar crónico acorta los dientes anteriores, borra las cúspides molares y colapsa la dimensión vertical del rostro, haciendo que los labios se afinen y se marquen líneas de envejecimiento prematuro.
                            </p>
                            <p>
                                En AM Estética Dental abordamos el bruxismo en dos fases coordinadas: primero devolvemos la anatomía, longitud y luminosidad de los dientes mediante carillas cerámicas ultrafinas o coronas estéticas de disilicato de litio, y luego protegemos esa inversión para toda la vida con una placa neuromiorrelajante personalizada.
                            </p>
                            <div>
                                <Link
                                    href="/bruxismo-desgaste-dental-carillas-ceramicas"
                                    className="inline-flex items-center gap-2 text-oro hover:text-oro/80 text-sm font-semibold transition-colors"
                                >
                                    Conocé cómo rehabilitamos el desgaste por bruxismo con carillas →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FAQ ESTRUCTURADA GEO ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Preguntas Frecuentes</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema">
                                Respuestas clínicas sobre <span className="font-cormorant italic text-oro">placas de descanso y bruxismo.</span>
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
                        Frená el desgaste de tus dientes y<br />
                        <span className="font-cormorant italic text-oro">despertate sin tensión mandibular.</span>
                    </h2>
                    <p className="text-crema/65 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Evaluación clínica y escaneo digital en Camila O&apos;Gorman 412, Oficina 101, Puerto Madero.
                    </p>
                    <a
                        href={WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-9 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-xl shadow-oro/10"
                    >
                        Agendar consulta de bruxismo por WhatsApp →
                    </a>
                </section>

            </main>
        </>
    );
}
