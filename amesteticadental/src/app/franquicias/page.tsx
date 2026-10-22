import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/franquicias";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Quisiera%20recibir%20el%20dossier%20de%20inversion%20de%20la%20Franquicia%20AM%20Estetica%20Dental.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Franquicias AM Estética Dental | Modelo Probado de Negocio",
    description: "Invertí en una franquicia boutique de alta rentabilidad. Presencia en Argentina y Uruguay, tecnología de vanguardia y soporte integral del Dr. Ariel Merino.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Franquicias AM Estética Dental | Argentina & Uruguay",
        description: "Expandí el modelo de negocio líder en estética dental y rehabilitación oral. Sedes en Puerto Madero y Montevideo.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
        images: ["/images/franquicia-am-estetica-dental-clinica-puerto-madero-uruguay.png"],
    },
    keywords: "franquicias odontologicas argentina, franquicia am estetica dental, franquicia dental uruguay, invertir en clinica dental, modelo franquicia estetica dental dr ariel merino",
};

const FAQS = [
    {
        q: "¿Es necesario ser odontólogo para adquirir una franquicia de AM Estética Dental?",
        a: "No es excluyente. El modelo de negocio de AM Estética Dental está estructurado tanto para odontólogos que buscan escalar su práctica profesional bajo una marca premium internacional, como para inversores y emprendedores. Brindamos soporte llave en mano: selección y entrenamiento del equipo clínico, estandarización de protocolos, abastecimiento y gestión comercial integral.",
    },
    {
        q: "¿Dónde opera actualmente AM Estética Dental y hacia dónde se expande?",
        a: "AM Estética Dental cuenta con su clínica insignia en Puerto Madero (Buenos Aires, Argentina) y sede consolidada en Uruguay. Actualmente nos encontramos en proceso de expansión activa seleccionando socios estratégicos para abrir franquicias exclusivas en las principales plazas de Argentina (Córdoba, Rosario, Mendoza, Nordelta), Uruguay (Punta del Este) y plazas clave de Latinoamérica.",
    },
    {
        q: "¿Qué incluye el modelo de franquicia y soporte integral?",
        a: "El franquiciado recibe el manual de operaciones completo, arquitectura y diseño de clínica boutique llave en mano, capacitación médica continua bajo la dirección del Dr. Ariel Merino, acceso a nuestro ecosistema de marketing y generación de pacientes calificados, software de gestión y uso de nuestras innovaciones tecnológicas (como el simulador de diseño de sonrisa con IA y convenios con laboratorios cerámicos de alta precisión).",
    },
    {
        q: "¿Por qué el segmento de estética dental de alta gama ofrece mayor rentabilidad?",
        a: "A diferencia de las cadenas odontológicas de bajo costo basadas en volumen y obras sociales, AM Estética Dental se enfoca en tratamientos privados de alto valor agregado (carillas cerámicas, diseño de sonrisa digital, rehabilitación oral, alineadores y protocolos de blanqueamiento de marca propia). Esto permite operar con márgenes netos superiores, tickets promedio elevados en dólares y una experiencia personalizada sin saturación de sillones.",
    },
    {
        q: "¿Cómo es el proceso de postulación y selección de franquiciados?",
        a: "El proceso consta de 5 etapas: 1) Solicitud inicial y envío de perfil de inversión, 2) Entrevista confidencial con la dirección de AM para evaluar compatibilidad y zona de interés, 3) Presentación del dossier de negocio y números proyectados, 4) Visita a nuestras instalaciones en Puerto Madero, y 5) Firma de carta de intención y reserva territorial exclusiva.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Franquicias AM Estética Dental — Expansión Internacional de Negocio",
    description: "Oportunidad de inversión en franquicias de odontología estética boutique de alta rentabilidad en Argentina, Uruguay y la región.",
    url: CANONICAL,
    about: {
        "@type": "BusinessOpportunity",
        name: "Franquicia AM Estética Dental",
        description: "Modelo de franquicias odontológicas de lujo y alta rentabilidad fundado por el Dr. Ariel Merino.",
    },
    author: {
        "@type": "Person",
        name: "Dr. Ariel Merino",
        jobTitle: "Fundador y Director de AM Estética Dental",
        identifier: "MN 34.869",
        description: "Especialista en Estética Dental y Rehabilitación Oral. Docente internacional (docente invitado University of Pennsylvania). Director de sedes Puerto Madero y Uruguay.",
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

const VENTAJAS = [
    {
        num: "01",
        titulo: "Marca Reconocida y Respaldada",
        desc: "Más de 15 años liderando la estética dental boutique. Única clínica dental argentina reconocida por Forbes y presencia en medios como La Nación, Infobae y Ámbito.",
    },
    {
        num: "02",
        titulo: "Ticket Promedio Alto en Dólares",
        desc: "Foco en tratamientos privados de alto valor (carillas, rehabilitación, diseño digital). Cero dependencia de convenios u obras sociales masivas.",
    },
    {
        num: "03",
        titulo: "Tecnología e IA Exclusiva",
        desc: "Simulador de sonrisa con IA de desarrollo propio para captación de pacientes, flujos 100% digitales y protocolos clínicos estandarizados.",
    },
    {
        num: "04",
        titulo: "Presencia Binacional Consolidada",
        desc: "Sedes operativas en Puerto Madero (Argentina) y Uruguay, demostrando la escalabilidad y adaptabilidad internacional del modelo de negocio.",
    },
];

const PASOS = [
    {
        paso: "Paso 1",
        nombre: "Contacto y Perfil",
        detalle: "Coordinamos una primera llamada confidencial para conocer tu perfil inversor o profesional y evaluar la plaza deseada.",
    },
    {
        paso: "Paso 2",
        nombre: "Dossier Financiero",
        detalle: "Acceso al plan de negocio detallado, estructura de costos, proyecciones de facturación y recupero de inversión.",
    },
    {
        paso: "Paso 3",
        nombre: "Visita a Casa Matriz",
        detalle: "Conocé el día a día de nuestra clínica en Puerto Madero y reunite personalmente con el Dr. Ariel Merino.",
    },
    {
        paso: "Paso 4",
        nombre: "Reserva y Apertura",
        detalle: "Firma de carta de intención con exclusividad territorial, proyecto arquitectónico llave en mano e inauguración.",
    },
];

export default function FranquiciasPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO CON VIDEO CINEMATOGRÁFICO DE LA CLÍNICA Y RECEPCIÓN AM ── */}
                <section className="relative px-6 md:px-12 pt-36 pb-20 max-w-6xl mx-auto">
                    <div className="absolute right-[-5%] top-[10%] w-[450px] h-[450px] rounded-full bg-oro/6 blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-oro uppercase tracking-[0.35em] text-xs font-semibold block mb-6">
                                Oportunidad de Inversión · Argentina & Uruguay
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-crema leading-[1.05] mb-8">
                                Franquicias AM Estética Dental:<br />
                                <span className="font-cormorant italic text-oro">un modelo probado de alto impacto.</span>
                            </h1>
                            <p className="text-crema/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                                Uníte a la red líder en odontología estética y rehabilitación oral de alta gama. Con sedes consolidadas en Puerto Madero y Uruguay, expandimos nuestro modelo de negocio rentable, innovador y de prestigio internacional.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <a
                                    href={WA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-lg shadow-oro/10"
                                >
                                    Solicitar dossier de franquicia por WhatsApp →
                                </a>
                                <Link
                                    href="#modelo"
                                    className="inline-flex items-center gap-2 border border-oro/30 text-crema px-7 py-4 rounded-full font-medium text-sm hover:border-oro transition-all"
                                >
                                    Ver modelo de negocio
                                </Link>
                            </div>
                        </div>

                        {/* Video de la recepción boutique y suites clínicas */}
                        <div className="lg:col-span-5">
                            <figure className="relative aspect-[4/5] w-full max-w-[480px] mx-auto overflow-hidden rounded-[24px] border border-oro/25 bg-carbon-soft shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    poster="/images/franquicia-am-estetica-dental-clinica-puerto-madero-uruguay.png"
                                    aria-label="Clínica franquicia de AM Estética Dental en Puerto Madero y Uruguay"
                                    className="absolute inset-0 h-full w-full object-cover"
                                >
                                    <source src="/videos/franquicia-am-estetica-dental-animacion.mp4" type="video/mp4" />
                                </video>
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/10" />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                                    <span className="mb-2 inline-flex rounded-full border border-oro/30 bg-carbon/80 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-oro backdrop-blur-sm">
                                        Arquitectura Boutique · Sedes Binacionales
                                    </span>
                                    <figcaption className="text-xs leading-relaxed text-crema/70">
                                        Mármol nero marquina, suites acristaladas de vanguardia y marca consolidada en la región.
                                    </figcaption>
                                </div>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* ── AUTORIDAD DE LA MARCA CON FOTO DEL DR. MERINO ── */}
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
                                <span className="text-oro/70 uppercase tracking-widest text-[11px] block mb-1">Dirección y Respaldo Institucional</span>
                                <p className="text-crema font-medium text-lg">Dr. Ariel Merino <span className="text-xs text-oro/80 font-normal">MN 34.869</span></p>
                                <p className="text-crema/60 text-xs sm:text-sm mt-1 max-w-2xl">
                                    Especialista en Estética Dental y Rehabilitación Oral de Alta Complejidad. Docente nacional e internacional (U-Penn). Director de AM Estética Dental en Puerto Madero y Uruguay. Reconocido por Forbes.
                                </p>
                            </div>
                        </div>
                        <div className="shrink-0 flex items-center gap-3">
                            <span className="inline-block border border-oro/25 text-oro text-xs px-4 py-2 rounded-full uppercase tracking-wider font-semibold">
                                Modelo Validado en 2 Países
                            </span>
                        </div>
                    </div>
                </section>

                {/* ── LOS 4 PILARES DEL NEGOCIO (POR QUÉ AM) ── */}
                <section id="modelo" className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Ventajas Competitivas</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema">
                            Por qué invertir en una franquicia <span className="font-cormorant italic text-oro">boutique y no genérica.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VENTAJAS.map((v) => (
                            <div key={v.num} className="border border-oro/15 rounded-2xl p-7 bg-carbon/40 hover:border-oro/40 transition-all flex flex-col justify-between">
                                <div>
                                    <span className="text-oro font-cormorant italic text-3xl block mb-2">{v.num}</span>
                                    <h3 className="text-crema text-lg font-medium mb-3">{v.titulo}</h3>
                                    <p className="text-crema/65 text-sm leading-relaxed font-light">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── EXPANSION REGIONAL: ARGENTINA Y URUGUAY ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-6">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Huella Binacional</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema mb-6 leading-tight">
                                De Puerto Madero y Uruguay <span className="font-cormorant italic text-oro">a los principales polos de la región.</span>
                            </h2>
                            <div className="space-y-4 text-crema/70 text-sm md:text-base leading-relaxed font-light">
                                <p>
                                    La fortaleza de nuestra franquicia radica en un modelo probado que ya opera con rotundo éxito en dos mercados altamente exigentes: nuestro buque insignia en Puerto Madero (Buenos Aires) y nuestra sede en Uruguay.
                                </p>
                                <p>
                                    El paciente de estética dental busca excelencia médica, diseño de autor y confidencialidad. Al franquiciar AM Estética Dental, no adquirís un consultorio tradicional, sino una experiencia integral que combina arquitectura hotelera, tecnología de vanguardia y marketing de atracción calificado.
                                </p>
                            </div>
                        </div>

                        {/* Fotografía de impacto de los directivos planificando la expansión */}
                        <div className="md:col-span-6">
                            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-oro/20 bg-carbon-soft shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="/images/franquicia-am-estetica-dental-clinica-puerto-madero-uruguay.png"
                                    alt="Ejecutivos evaluando expansión de franquicias AM Estética Dental en plano digital"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-flex items-center border border-oro/30 bg-carbon/85 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-oro">
                                        Expansión Estratégica · Exclusividad de Zona
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PASOS PARA CONVERTIRTE EN FRANQUICIADO ── */}
                <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto border-t border-oro/10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">El Proceso de Incorporación</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema">
                            Cómo abrir tu franquicia <span className="font-cormorant italic text-oro">AM Estética Dental.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PASOS.map((p) => (
                            <div key={p.paso} className="border border-oro/15 rounded-2xl p-7 bg-carbon/40 hover:border-oro/40 transition-all flex flex-col justify-between">
                                <div>
                                    <span className="text-oro font-cormorant italic text-sm tracking-widest uppercase block mb-2">{p.paso}</span>
                                    <h3 className="text-crema text-lg font-medium mb-3">{p.nombre}</h3>
                                    <p className="text-crema/65 text-sm leading-relaxed font-light">{p.detalle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── FAQ ESTRUCTURADA FRANQUICIAS ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Preguntas Frecuentes</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema">
                                Preguntas habituales sobre el <span className="font-cormorant italic text-oro">modelo de franquicias AM.</span>
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

                {/* ── CTA FINAL PARA INVERSORES ── */}
                <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto text-center">
                    <span className="text-oro uppercase tracking-[0.35em] text-xs block mb-4">Expansión Exclusiva · Cupos Territoriales Limitados</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-crema mb-6 leading-tight">
                        Liderá el mercado de la odontología estética<br />
                        <span className="font-cormorant italic text-oro">en tu ciudad o región.</span>
                    </h2>
                    <p className="text-crema/65 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Contactate de forma directa y confidencial con nuestra dirección de desarrollo corporativo para evaluar tu plaza.
                    </p>
                    <a
                        href={WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-9 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-xl shadow-oro/10"
                    >
                        Solicitar entrevista de franquicia por WhatsApp →
                    </a>
                </section>

            </main>
        </>
    );
}
