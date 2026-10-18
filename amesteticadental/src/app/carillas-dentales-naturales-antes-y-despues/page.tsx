import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/carillas-dentales-naturales-antes-y-despues";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Quisiera%20asesorarme%20sobre%20un%20diseno%20de%20sonrisa%20con%20carillas%20de%20aspecto%20100%25%20natural.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Carillas Dentales Naturales: Casos Antes y Después | AM",
    description: "Casos reales de carillas dentales naturales sin efecto blanco tiza o piano. Translucidez incisal, micro-textura y estratificación artesanal. Puerto Madero.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Carillas Dentales Naturales: Antes y Después | AM Estética Dental",
        description: "Cómo lograr una sonrisa radiante y natural sin caer en dientes artificiales. Casos reales del Dr. Ariel Merino en Puerto Madero.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
        images: ["/images/carilla-ceramica-macro-textura-periquimatas-am-estetica-dental.png"],
    },
    keywords: "carillas dentales naturales antes y despues, como evitar dientes de chicle, carillas porcelana translucidez incisal, textura periquimatas carillas, carillas sin efecto artificial buenos aires",
};

const FAQS = [
    {
        q: "¿Cómo se evita el efecto artificial de 'dientes de chicle' o 'teclas de piano'?",
        a: "El aspecto artificial se produce cuando se colocan carillas monocromáticas, opacas y sin volumen anatómico. En AM Estética Dental cada carilla se estratifica a mano con porcelana feldespática o disilicato de litio, reproduciendo la micro-textura (periquimatas) que quiebra la luz y creando un degradé óptico con bordes incisales translúcidos y opalescentes, idénticos al esmalte biológico joven.",
    },
    {
        q: "¿Qué son las periquimatas y por qué definen la naturalidad de una carilla?",
        a: "Las periquimatas son micro-estrías horizontales naturales que posee el esmalte humano. En carillas comerciales o resinas rápidas, las superficies son completamente planas y reflejan la luz como un espejo plástico. Al reproducir artesanalmente estas líneas microscópicas en nuestro laboratorio, la luz se dispersa tridimensionalmente, logrando que el diente se vea vivo, húmedo y orgánico desde cualquier ángulo.",
    },
    {
        q: "¿Se puede elegir un tono bien blanco sin que parezca falso?",
        a: "Sí, absolutamente. La clave no es la oscuridad o claridad del color, sino la luminosidad y la translucidez. Una carilla en tono BL2 o BL1 (blanco de alta gama) puede verse completamente natural si conserva un tercio gingival con calidez cromática, un núcleo con valor lumínico y un borde incisal transparente que deja pasar la luz. Lo que resulta artificial es el blanco mate y opaco.",
    },
    {
        q: "¿Las carillas cerámicas se manchan con café, vino o mate?",
        a: "No. La porcelana dental de alta fusión es un material vítreo no poroso y biocompatible. A diferencia de las resinas compuestas, las carillas cerámicas no absorben pigmentos de alimentos, café, vino tinto ni tabaco, manteniendo exactamente el mismo brillo, color y textura durante más de 15 a 20 años.",
    },
    {
        q: "¿Cómo es el proceso para asegurar que me guste el resultado antes de colocar las carillas?",
        a: "Trabajamos con planificación digital 3D y una prueba estética en boca (mock-up guiado). Diseñamos la sonrisa en pantalla respetando las proporciones de tus labios y rostro, y luego transferimos ese diseño a tu boca con una resina provisional sin tocar tu esmalte. Podés verte al espejo, hablar y sonreír para evaluar la forma, el largo y la armonía antes de confeccionar la cerámica definitiva.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Carillas Dentales Naturales: Casos Antes y Después — AM Estética Dental",
    description: "Criterios clínicos y galería de casos reales de carillas cerámicas con integración biológica natural, translucidez incisal y micro-textura periquimata por el Dr. Ariel Merino.",
    url: CANONICAL,
    about: {
        "@type": "MedicalProcedure",
        name: "Diseño de Sonrisa y Laminados Cerámicos de Alta Estética Natural",
        procedureType: "Cosmetic Dental Procedure",
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

const CASOS_NATURALES = [
    {
        titulo: "Armonización en Paciente Joven sin Ortodoncia",
        subtitulo: "Resolución de apiñamiento y plano quebrado",
        desc: "Laminados cerámicos ultrafinos en sector anterior para corregir inclinaciones y devolver luminosidad sin desgaste biológico agresivo.",
        fotoAntes: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental",
        slug: "20-carillas-porcelana-apinamiento-sin-ortodoncia",
        tag: "Porcelana Feldespática",
    },
    {
        titulo: "Rejuvenecimiento Dental y Recuperación de Guías",
        subtitulo: "Recambio de restauraciones opacas antiguas",
        desc: "Transformación con carillas de disilicato estratificadas artesanalmente con degradación cromática y micro-textura periquimata.",
        fotoAntes: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/rehabilitacion-completa-sonrisa/carillas-coronas-arcada-superior-antes-despues-intraoral-rehabilitacion-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png",
        slug: "rehabilitacion-oral-completa-carillas-coronas-implantes",
        tag: "Rehabilitación Estética",
    },
    {
        titulo: "Carilla Unitaria en Diente Oscurecido",
        subtitulo: "El mayor desafío de mimetización óptica",
        desc: "Lograr que una sola carilla sea idéntica e indistinguible del diente vecino natural mediante mapeo cromático milimétrico.",
        fotoAntes: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-comparativa-labios-sonrisa-resinas-blanqueamiento-am-estetica-dental",
        slug: "carilla-unitaria-incisivo-central-oscurecido",
        tag: "Mimetización Unitaria",
    },
];

const ANATOMIA = [
    {
        num: "01",
        nombre: "Translucidez Incisal y Opalescencia",
        detalle: "El borde del diente no es opaco: deja pasar la luz filtrando destellos ámbar y azulados como el esmalte joven.",
    },
    {
        num: "02",
        nombre: "Micro-textura Periquimata",
        detalle: "Líneas de crecimiento microscópicas talladas a mano que rompen la reflexión para evitar el reflejo artificial vidriado.",
    },
    {
        num: "03",
        nombre: "Gradiente Cromático Tri-zonal",
        detalle: "Cálido y saturado en la base cervical, luminoso en el cuerpo y etéreo en el borde. Cero monocromatismo.",
    },
    {
        num: "04",
        nombre: "Integración Biológica Gingival",
        detalle: "Margen de precisión subgingival microscópica que respeta la encía, logrando un tejido rosado, sano y sin inflamación.",
    },
];

export default function CarillasNaturalesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO CON VIDEO CINEMATOGRÁFICO DE LA CARILLA Y TEXTURA ── */}
                <section className="relative px-6 md:px-12 pt-36 pb-20 max-w-6xl mx-auto">
                    <div className="absolute right-[-5%] top-[10%] w-[450px] h-[450px] rounded-full bg-oro/6 blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-oro uppercase tracking-[0.35em] text-xs font-semibold block mb-6">
                                Odontología Estética de Autor · Puerto Madero
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-crema leading-[1.05] mb-8">
                                Carillas dentales naturales:<br />
                                <span className="font-cormorant italic text-oro">el arte de lo imperceptible.</span>
                            </h1>
                            <p className="text-crema/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                                Una sonrisa de diseño no debe gritar que está intervenida. Nuestro enfoque reproduce la anatomía, micro-textura y translucidez del esmalte biológico para lograr un resultado deslumbrante y 100% natural.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <a
                                    href={WA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-lg shadow-oro/10"
                                >
                                    Consultar por tu diseño de sonrisa en WhatsApp →
                                </a>
                                <Link
                                    href="#casos"
                                    className="inline-flex items-center gap-2 border border-oro/30 text-crema px-7 py-4 rounded-full font-medium text-sm hover:border-oro transition-all"
                                >
                                    Ver casos antes y después
                                </Link>
                            </div>
                        </div>

                        {/* Video de macro de carilla con luz deslizante sobre periquimatas */}
                        <div className="lg:col-span-5">
                            <figure className="relative aspect-[4/5] w-full max-w-[480px] mx-auto overflow-hidden rounded-[24px] border border-oro/25 bg-carbon-soft shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    poster="/images/carilla-ceramica-macro-textura-periquimatas-am-estetica-dental.png"
                                    aria-label="Lámina de porcelana pura con translucidez incisal y micro-textura periquimata — AM Estética Dental"
                                    className="absolute inset-0 h-full w-full object-cover"
                                >
                                    <source src="/videos/carilla-ceramica-luz-textura-animacion.mp4" type="video/mp4" />
                                </video>
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/10" />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                                    <span className="mb-2 inline-flex rounded-full border border-oro/30 bg-carbon/80 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-oro backdrop-blur-sm">
                                        Estratificación Artesanal · Laboratorio Propio
                                    </span>
                                    <figcaption className="text-xs leading-relaxed text-crema/70">
                                        Porcelana feldespática con halo incisal translúcido y micro-relieves orgánicos.
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
                                <span className="text-oro/70 uppercase tracking-widest text-[11px] block mb-1">Filosofía de Naturalidad</span>
                                <p className="text-crema font-medium text-lg">Dr. Ariel Merino <span className="text-xs text-oro/80 font-normal">MN 34.869</span></p>
                                <p className="text-crema/60 text-xs sm:text-sm mt-1 max-w-2xl">
                                    Especialista en Estética Dental y Rehabilitación Oral de Alta Complejidad. Docente de cursos a nivel nacional e internacional (docente invitado University of Pennsylvania). Fundador y Director de AM Estética Dental en Puerto Madero y Uruguay.
                                </p>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <span className="inline-block border border-oro/25 text-oro text-xs px-4 py-2 rounded-full uppercase tracking-wider font-semibold">
                                Cero blanco monocromático
                            </span>
                        </div>
                    </div>
                </section>

                {/* ── LOS 4 ELEMENTOS DE LA ANATOMÍA VIVA ── */}
                <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Biomimética Dental</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema">
                            Los 4 detalles ópticos que <span className="font-cormorant italic text-oro">hacen que un diente se vea vivo.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ANATOMIA.map((a) => (
                            <div key={a.num} className="border border-oro/15 rounded-2xl p-7 bg-carbon/40 hover:border-oro/40 transition-all">
                                <span className="text-oro font-cormorant italic text-3xl block mb-4">{a.num}</span>
                                <h3 className="text-crema text-lg font-medium mb-3">{a.nombre}</h3>
                                <p className="text-crema/65 text-sm leading-relaxed font-light">{a.detalle}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── SECCIÓN MACROFOTOGRÁFICA: LA MICRO-TEXTURA PERIQUIMATA ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-6">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Detalle Microscópico</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema mb-6 leading-tight">
                                La diferencia entre un bloque plástico y una <span className="font-cormorant italic text-oro">pieza de arte cerámico.</span>
                            </h2>
                            <div className="space-y-4 text-crema/70 text-sm md:text-base leading-relaxed font-light">
                                <p>
                                    En la naturaleza, ningún diente tiene la superficie completamente lisa como el vidrio de una ventana. Posee diminutas ondulaciones horizontales (periquimatas) que quiebran la luz en múltiples ángulos.
                                </p>
                                <p>
                                    Cuando se colocan carillas genéricas sin micro-texturizado, la luz rebota en un único plano, produciendo ese brillo plano y artificial que popularmente se conoce como &ldquo;dientes de piano&rdquo; o &ldquo;chicle&rdquo;. En AM Estética Dental, cada lámina es grabada y pulida a mano con instrumental de diamante para emular esa dispersión biológica perfecta.
                                </p>
                            </div>
                        </div>

                        {/* Macrofotografía de impacto de la carilla */}
                        <div className="md:col-span-6">
                            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-oro/20 bg-carbon-soft shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="/images/carilla-ceramica-macro-textura-periquimatas-am-estetica-dental.png"
                                    alt="Macrofotografía de carilla de porcelana con periquimatas y halo incisal translúcido"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-flex items-center border border-oro/30 bg-carbon/85 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-oro">
                                        Translucidez Incisal · Textura de Esmalte Real
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CASOS REALES ANTES Y DESPUÉS ── */}
                <section id="casos" className="px-6 md:px-12 py-20 max-w-6xl mx-auto border-t border-oro/10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Evidencia Clínica</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema">
                            Casos reales: <span className="font-cormorant italic text-oro">transformación con respeto biológico.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {CASOS_NATURALES.map((c) => (
                            <div key={c.slug} className="border border-oro/15 rounded-2xl overflow-hidden bg-carbon/40 hover:border-oro/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-oro/10 bg-carbon-soft">
                                        <Image
                                            src={c.fotoAntes}
                                            alt={c.titulo}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <span className="absolute top-3 left-3 bg-carbon/90 border border-oro/30 text-oro text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                                            {c.tag}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-crema font-medium text-lg mb-1">{c.titulo}</h3>
                                        <p className="text-oro/70 text-xs mb-3">{c.subtitulo}</p>
                                        <p className="text-crema/60 text-sm font-light leading-relaxed mb-4">{c.desc}</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-0 border-t border-oro/10 mt-4">
                                    <Link
                                        href={`/casos/${c.slug}`}
                                        className="inline-flex items-center gap-2 text-oro hover:text-oro/80 text-xs font-semibold uppercase tracking-wider transition-colors pt-4"
                                    >
                                        Ver historia clínica completa →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── FAQ ESTRUCTURADA GEO ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Preguntas Frecuentes</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema">
                                Respuestas sobre <span className="font-cormorant italic text-oro">carillas dentales y naturalidad.</span>
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
                        Tu mejor versión,<br />
                        <span className="font-cormorant italic text-oro">sin que nadie note que son carillas.</span>
                    </h2>
                    <p className="text-crema/65 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Evaluación estética y simulación digital 3D personalizada con el Dr. Ariel Merino en Camila O&apos;Gorman 412, Oficina 101, Puerto Madero.
                    </p>
                    <a
                        href={WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-9 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-xl shadow-oro/10"
                    >
                        Solicitar evaluación de diseño de sonrisa por WhatsApp →
                    </a>
                </section>

            </main>
        </>
    );
}
