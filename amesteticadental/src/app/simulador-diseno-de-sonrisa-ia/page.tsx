import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/simulador-diseno-de-sonrisa-ia";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Probe%20el%20simulador%20de%20sonrisa%20con%20IA%20y%20quisiera%20una%20evaluacion%20clinica%20con%20el%20Dr.%20Ariel%20Merino.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Simulador de Sonrisa con IA: Tecnología y Realidad | AM",
    description: "Cómo funciona el simulador de diseño de sonrisa con IA de AM Estética Dental. De la proyección biométrica 3D a la cerámica artesanal en Puerto Madero.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Simulador de Diseño de Sonrisa con IA | AM Estética Dental",
        description: "Inteligencia artificial aplicada al diseño de sonrisa. Probá tu simulación online y conocé cómo la materializamos en clínica.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
        images: ["/images/simulador-diseno-sonrisa-ia-laboratorio-am-estetica-dental.png"],
    },
    keywords: "simulador diseno de sonrisa, simulador sonrisa ia online, diseno de sonrisa digital puerto madero, como funciona el diseno de sonrisa con ia, dr ariel merino simulador sonrisa",
};

const FAQS = [
    {
        q: "¿Cómo funciona el simulador de diseño de sonrisa con inteligencia artificial de AM?",
        a: "Desarrollado internamente por el Dr. Ariel Merino, nuestro simulador procesa una fotografía frontal de tu rostro mediante visión artificial y redes neuronales especializadas en biométrica facial. Analiza la línea media, la curvatura del labio inferior, las proporciones áureas dentales y proyecta al instante una arquitectura de sonrisa simétrica, armónica y adaptada a tus facciones.",
    },
    {
        q: "¿El resultado de la IA es exactamente lo que voy a tener en la boca?",
        a: "La simulación con IA es una herramienta de previsualización estética y orientación fundamental: te permite perder el miedo, verte con dientes alineados y proporcionados, y alinear expectativas. Sin embargo, una pantalla no tiene en cuenta tu oclusión (mordida), la salud de tus encías, el espesor de tu esmalte ni el movimiento de la mandíbula. En AM Estética Dental combinamos la proyección de la IA con escaneo intraoral 3D y mock-up real en boca para garantizar viabilidad biológica.",
    },
    {
        q: "¿Qué diferencia hay entre un filtro de redes sociales y el simulador de AM?",
        a: "Los filtros de redes aplican 'pegatinas' blancas estándar sin criterio anatómico ni proporciones dentales. El simulador de AM Estética Dental fue entrenado con casos clínicos reales de odontología estética de alta gama, reconociendo zenits gingivales, ángulos interincisales y proporciones biométricas respetuosas de la anatomía craneofacial.",
    },
    {
        q: "¿Qué es el 'Mock-up' y cómo se traslada la IA a la boca?",
        a: "El mock-up es la prueba física en vivo. Una vez validado el diseño digital preliminar, imprimimos en 3D un modelo de tu nueva sonrisa y transferimos esa forma exacta a tus dientes con una resina estética provisoria. Podés mirarte al espejo, hablar, gesticular y validar la sensación real en boca antes de tocar un solo milímetro de esmalte.",
    },
    {
        q: "¿Cómo puedo probar el simulador ahora mismo?",
        a: "Podés ingresar de forma 100% gratuita y sin costo desde tu navegador en nuestra sección interactiva amesteticadental.com/sonrisa, subir una selfie con sonrisa amplia y ver tu transformación en segundos.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Simulador de Diseño de Sonrisa con IA — AM Estética Dental Puerto Madero",
    description: "Plataforma de simulación de diseño de sonrisa con inteligencia artificial desarrollada por el Dr. Ariel Merino para previsualización biométrica en odontología estética.",
    url: CANONICAL,
    about: {
        "@type": "SoftwareApplication",
        name: "AM Smile Simulator AI",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web Browser",
    },
    mainEntity: {
        "@type": "MedicalProcedure",
        name: "Diseño Digital de Sonrisa Asistido por Inteligencia Artificial y Mock-up Guiado",
        procedureType: "DiagnosticProcedure",
    },
    author: {
        "@type": "Person",
        name: "Dr. Ariel Merino",
        jobTitle: "Especialista en Estética Dental y Rehabilitación Oral de Alta Complejidad",
        identifier: "MN 34.869",
        description: "Docente de cursos de estética y rehabilitación oral a nivel nacional e internacional (docente invitado University of Pennsylvania). Creador del simulador de sonrisa con IA. Fundador y Director de AM Estética Dental en Puerto Madero y Uruguay.",
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

const ETAPAS = [
    {
        num: "01",
        titulo: "Simulación Facial con IA",
        subtitulo: "Previsualización instantánea",
        desc: "Subís tu foto y nuestros algoritmos de visión detectan tus proporciones labiales y faciales, proyectando una sonrisa estética balanceada.",
    },
    {
        num: "02",
        titulo: "Escaneo Intraoral 3D",
        subtitulo: "Precisión de laboratorio",
        desc: "En consultorio capturamos la volumetría microscópica de tus dientes y registramos tu mordida exacta con escáner óptico digital.",
    },
    {
        num: "03",
        titulo: "Mock-up Físico en Boca",
        subtitulo: "El 'test drive' de tu sonrisa",
        desc: "Colocamos una resina temporal sin tocar tu esmalte. Te mirás al espejo, sonreís y confirmás si te gusta el largo, la forma y la armonía.",
    },
    {
        num: "04",
        titulo: "Cerámica Pura Artesanal",
        subtitulo: "Materialización definitiva",
        desc: "Nuestro laboratorio propio estratifica cada carilla a mano en porcelana pura con la micro-textura y translucidez del diente natural.",
    },
];

export default function SimuladorIAPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO CON VIDEO CINEMATOGRÁFICO DE PANTALLAS IA Y LABORATORIO AM ── */}
                <section className="relative px-6 md:px-12 pt-36 pb-20 max-w-6xl mx-auto">
                    <div className="absolute right-[-5%] top-[10%] w-[450px] h-[450px] rounded-full bg-oro/6 blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-oro uppercase tracking-[0.35em] text-xs font-semibold block mb-6">
                                Innovación y Desarrollo Propio · Puerto Madero
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-crema leading-[1.05] mb-8">
                                Simulador de diseño de sonrisa con IA:<br />
                                <span className="font-cormorant italic text-oro">del algoritmo al arte cerámico.</span>
                            </h1>
                            <p className="text-crema/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                                Previsualizá tu nueva sonrisa en segundos desde tu navegador. Descubrí cómo combinamos inteligencia artificial biométrica con la maestría de nuestro laboratorio de porcelana pura.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <Link
                                    href="/sonrisa"
                                    className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-lg shadow-oro/10"
                                >
                                    Probar el simulador con IA gratis →
                                </Link>
                                <a
                                    href={WA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-oro/30 text-crema px-7 py-4 rounded-full font-medium text-sm hover:border-oro transition-all"
                                >
                                    Agendar evaluación clínica
                                </a>
                            </div>
                        </div>

                        {/* Video de las pantallas de diseño con IA y laboratorio */}
                        <div className="lg:col-span-5">
                            <figure className="relative aspect-[4/5] w-full max-w-[480px] mx-auto overflow-hidden rounded-[24px] border border-oro/25 bg-carbon-soft shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    poster="/images/simulador-diseno-sonrisa-ia-laboratorio-am-estetica-dental.png"
                                    aria-label="Estación de diseño digital con IA y carillas de porcelana artesanal en AM Estética Dental"
                                    className="absolute inset-0 h-full w-full object-cover"
                                >
                                    <source src="/videos/simulador-diseno-sonrisa-ia-pantallas-animacion.mp4" type="video/mp4" />
                                </video>
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/10" />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                                    <span className="mb-2 inline-flex rounded-full border border-oro/30 bg-carbon/80 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-oro backdrop-blur-sm">
                                        Software Biométrico · Desarrollo AM
                                    </span>
                                    <figcaption className="text-xs leading-relaxed text-crema/70">
                                        Simulación digital facial en tiempo real conectada a laboratorio de porcelana de alta precisión.
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
                                <span className="text-oro/70 uppercase tracking-widest text-[11px] block mb-1">Pionero en Odontología Computacional</span>
                                <p className="text-crema font-medium text-lg">Dr. Ariel Merino <span className="text-xs text-oro/80 font-normal">MN 34.869</span></p>
                                <p className="text-crema/60 text-xs sm:text-sm mt-1 max-w-2xl">
                                    Especialista en Estética Dental y Rehabilitación Oral de Alta Complejidad. Creador del simulador de sonrisa con IA de AM. Docente invitado University of Pennsylvania. Fundador y Director de AM Estética Dental en Puerto Madero y Uruguay.
                                </p>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <span className="inline-block border border-oro/25 text-oro text-xs px-4 py-2 rounded-full uppercase tracking-wider font-semibold">
                                Reconocido por Forbes
                            </span>
                        </div>
                    </div>
                </section>

                {/* ── EL CIRCUITO: DE LA PANTALLA A LA BOCA ── */}
                <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Workflow Digital Integral</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema">
                            Cómo convertimos una proyección virtual en <span className="font-cormorant italic text-oro">una sonrisa real y duradera.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ETAPAS.map((e) => (
                            <div key={e.num} className="border border-oro/15 rounded-2xl p-7 bg-carbon/40 hover:border-oro/40 transition-all flex flex-col justify-between">
                                <div>
                                    <span className="text-oro font-cormorant italic text-3xl block mb-2">{e.num}</span>
                                    <h3 className="text-crema text-lg font-medium mb-1">{e.titulo}</h3>
                                    <p className="text-oro/70 text-xs uppercase tracking-wider mb-4">{e.subtitulo}</p>
                                    <p className="text-crema/65 text-sm leading-relaxed font-light">{e.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── SECCIÓN COMPARATIVA: IA VS. CRITERIO HUMANO ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-6">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Tecnología con Alma</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema mb-6 leading-tight">
                                La IA propone la armonía,<br />
                                <span className="font-cormorant italic text-oro">la biología la hace viable.</span>
                            </h2>
                            <div className="space-y-4 text-crema/70 text-sm md:text-base leading-relaxed font-light">
                                <p>
                                    La inteligencia artificial es maravillosa para eliminar la incertidumbre inicial: te ayuda a imaginarte sonriendo con seguridad y a entender qué proporciones favorecen la forma de tu cara.
                                </p>
                                <p>
                                    Pero un algoritmo no sabe si apretás de noche, cuánto grosor de esmalte tenés para adherir la porcelana ni cómo se mueve tu articulación temporomandibular. Por eso, en AM Estética Dental el simulador es el punto de partida de una conversación clínica profunda, donde la experiencia médica de más de 20 años y el arte de nuestros ceramistas terminan de crear una pieza única e irrepetible.
                                </p>
                            </div>
                        </div>

                        {/* Fotografía de impacto del escritorio de diseño */}
                        <div className="md:col-span-6">
                            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-oro/20 bg-carbon-soft shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="/images/simulador-diseno-sonrisa-ia-laboratorio-am-estetica-dental.png"
                                    alt="Estación de diseño de sonrisa con IA y carillas de porcelana AM Estética Dental"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-flex items-center border border-oro/30 bg-carbon/85 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-oro">
                                        Biometría 3D · Puerto Madero
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── BANNER PARA PROBAR EL SIMULADOR ── */}
                <section className="px-6 md:px-12 py-16 bg-carbon/40 border-t border-oro/10">
                    <div className="max-w-4xl mx-auto rounded-3xl border border-oro/30 p-8 md:p-12 text-center bg-gradient-to-b from-carbon-soft to-carbon">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs font-semibold block mb-3">Herramienta Interactiva</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema mb-4">
                            ¿Querés ver cómo quedaría tu sonrisa?
                        </h2>
                        <p className="text-crema/70 max-w-xl mx-auto mb-8 font-light text-sm md:text-base leading-relaxed">
                            Probá nuestro simulador de sonrisa con inteligencia artificial ahora mismo. Es online, privado y toma menos de un minuto.
                        </p>
                        <Link
                            href="/sonrisa"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-xl shadow-oro/10"
                        >
                            Ingresar al Simulador con IA →
                        </Link>
                    </div>
                </section>

                {/* ── FAQ ESTRUCTURADA GEO ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Preguntas Frecuentes</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema">
                                Dudas habituales sobre el <span className="font-cormorant italic text-oro">diseño de sonrisa con IA.</span>
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
                        Transformá tu proyección digital<br />
                        <span className="font-cormorant italic text-oro">en una sonrisa real para toda la vida.</span>
                    </h2>
                    <p className="text-crema/65 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Evaluación clínica privada y mock-up guiado con el Dr. Ariel Merino en Camila O&apos;Gorman 412, Oficina 101, Puerto Madero.
                    </p>
                    <a
                        href={WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-9 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-xl shadow-oro/10"
                    >
                        Solicitar consulta personalizada por WhatsApp →
                    </a>
                </section>

            </main>
        </>
    );
}
