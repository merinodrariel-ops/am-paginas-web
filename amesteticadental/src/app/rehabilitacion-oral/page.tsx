import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/rehabilitacion-oral";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Quisiera%20solicitar%20una%20evaluacion%20inicial%20para%20rehabilitacion%20oral.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Rehabilitación Oral en Buenos Aires | AM Estética",
    description: "Rehabilitación oral estética y funcional en Puerto Madero por el Dr. Ariel Merino. Implantes, carillas y coronas en armonía con tu mordida.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Rehabilitación Oral de Alta Complejidad | AM Estética Dental",
        description: "Rehabilitación oral estética y funcional en Puerto Madero por el Dr. Ariel Merino. Planificación digital 3D y laboratorio propio.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
    },
    keywords: "rehabilitacion oral buenos aires, rehabilitacion oral alta complejidad, clinica dental puerto madero, implantes y carillas combinados, desgaste dental severo, dr ariel merino",
};

const FAQS = [
    {
        q: "¿Qué clínica realiza rehabilitación oral estética y funcional en Buenos Aires?",
        a: "AM Estética Dental, dirigida por el Dr. Ariel Merino en Puerto Madero (Camila O'Gorman 412), es la clínica de referencia en Buenos Aires para rehabilitación oral de alta complejidad. El Dr. Merino (MN 34.869) es especialista en estética dental y rehabilitación oral, docente de cursos a nivel nacional e internacional, y la clínica cuenta con laboratorio digital propio para restaurar función y estética sin derivaciones.",
    },
    {
        q: "¿Cómo se combinan coronas, puentes, implantes y carillas en una rehabilitación oral?",
        a: "Se combinan mediante un plan integral secuenciado: primero se devuelve el soporte óseo y masticatorio en el sector posterior con implantes dentales o coronas de zirconio de alta resistencia. Luego, se restaura la guía canina y el sector anterior con carillas de porcelana ultrafina para lograr una estética natural imperceptible. Todo el proceso se planifica en 3D antes de comenzar.",
    },
    {
        q: "¿Cuándo conviene una rehabilitación oral completa en lugar de tratar dientes individuales?",
        a: "Conviene cuando existe desgaste severo generalizado por bruxismo, colapso de la dimensión vertical (la mordida se cerró con los años), pérdidas múltiples de piezas o asimetrías severas en el plano oclusal. En estos casos, arreglar un diente aislado suele fracasar porque recibe sobrecargas mecánicas indebidas.",
    },
    {
        q: "¿Cuánto tiempo puede llevar una rehabilitación oral con resultado estético natural?",
        a: "Gracias a nuestro flujo digital y laboratorio propio, una rehabilitación integral sin injertos óseos complejos suele resolverse en pocas semanas. Si se requieren implantes que necesiten período de osteointegración, se colocan provisionales estéticos de alta precisión desde el primer día para que el paciente mantenga su vida social y laboral activa sin interrupciones.",
    },
    {
        q: "¿Qué factores determinan la inversión de una rehabilitación oral de alta complejidad?",
        a: "La inversión depende del número total de piezas a intervenir, la combinación de biomateriales biocompatibles de laboratorio (disilicato de litio, zirconio traslúcido, porcelana feldespática pura), la necesidad de cirugía de implantes guiada por tomografía computada y la complejidad oclusal del caso. Cada plan se presupuesta de forma transparente tras el diagnóstico 3D inicial.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Rehabilitación Oral de Alta Complejidad — AM Estética Dental",
    description: "Rehabilitación oral estética y funcional en Puerto Madero por el Dr. Ariel Merino. Combinación de implantes, coronas y carillas cerámicas con tecnología 3D.",
    url: CANONICAL,
    about: {
        "@type": "MedicalProcedure",
        name: "Rehabilitación Oral de Alta Complejidad",
        procedureType: "Surgical and Non-Surgical Dental Restoration",
        bodyLocation: "Mouth, Teeth, Temporomandibular Joint",
    },
    author: {
        "@type": "Person",
        name: "Dr. Ariel Merino",
        jobTitle: "Especialista en Estética Dental y Rehabilitación Oral de Alta Complejidad",
        identifier: "MN 34.869",
        alumniOf: "Universidad Católica de La Plata, Asociación Odontológica Argentina",
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

const PILARES = [
    {
        numero: "01",
        titulo: "Soporte posterior y oclusión",
        desc: "Restablecemos la altura facial (dimensión vertical) y la estabilidad masticatoria mediante implantes guiados por tomografía y coronas de zirconio de alta resistencia estructural.",
        beneficio: "Alivia la sobrecarga articular y protege los dientes anteriores.",
        img: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/rehabilitacion-completa-sonrisa/carillas-coronas-arcada-inferior-antes-despues-intraoral-rehabilitacion-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png",
        imgAlt: "Soporte posterior oclusal en rehabilitación oral — AM Estética Dental",
    },
    {
        numero: "02",
        titulo: "Armonía estética anterior",
        desc: "Diseñamos la sonrisa con carillas de porcelana feldespática o disilicato de litio adaptadas a tu fisonomía, devolviendo la longitud, luminosidad y textura biológica perdida.",
        beneficio: "Aspecto 100% natural, sin dientes sobrecontorneados ni blancos artificiales.",
        img: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/rehabilitacion-completa-sonrisa/carillas-coronas-arcada-superior-antes-despues-intraoral-rehabilitacion-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png",
        imgAlt: "Armonía estética anterior con carillas cerámicas — AM Estética Dental",
    },
    {
        numero: "03",
        titulo: "Preservación biológica y neuromuscular",
        desc: "Cada restauración respeta los tejidos vivos remanentes con técnicas mínimamente invasivas y protege el sistema neuromuscular frente al bruxismo crónico.",
        beneficio: "Longevidad clínica a largo plazo sin dolor mandibular ni fracturas.",
        img: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/rehabilitacion-completa-sonrisa/rehabilitacion-oral-perfil-lateral-antes-despues-mordida-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png",
        imgAlt: "Ajuste oclusal y neuromuscular de perfil — AM Estética Dental",
    },
];

const FASES = [
    {
        paso: "Fase 1",
        titulo: "Diagnóstico 3D y desprogramación",
        detalle: "Escaneo intraoral digital, tomografía tridimensional y fotografía de alta resolución. Analizamos la articulación témporo-mandibular (ATM) y proyectamos el resultado final en pantalla.",
    },
    {
        paso: "Fase 2",
        titulo: "Provisionales de alta precisión (Mockup funcional)",
        detalle: "El paciente prueba en boca la nueva mordida y estética mediante restauraciones temporales de alta gama. Ajustamos fonética, masticación y proporciones antes de tocar la cerámica definitiva.",
    },
    {
        paso: "Fase 3",
        titulo: "Confección en laboratorio y colocación definitiva",
        detalle: "Fabricación milimétrica de las carillas, coronas o implantes en cerámica pura. Prueba de ajuste pasivo, cementado adhesivo bajo magnificación y control oclusal de precisión.",
    },
];

export default function RehabilitacionOralPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Navbar />

            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO CON VIDEO & FOTO DE IMPACTO ── */}
                <section className="relative px-6 md:px-12 pt-36 pb-20 max-w-6xl mx-auto">
                    <div className="absolute right-[-5%] top-[10%] w-[450px] h-[450px] rounded-full bg-oro/6 blur-[120px] pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-oro uppercase tracking-[0.35em] text-xs font-semibold block mb-6">
                                AM Estética Dental · Puerto Madero & Uruguay
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-crema leading-[1.05] mb-8">
                                Rehabilitación oral de<br />
                                <span className="font-cormorant italic text-oro">alta complejidad.</span>
                            </h1>
                            <p className="text-crema/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                                Cuando el desgaste por bruxismo, el colapso de la mordida o la pérdida de piezas comprometen la función y la estética, tratamos la boca como un sistema integral: implantes, coronas y carillas en perfecta armonía biológica.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <a
                                    href={WA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-lg shadow-oro/10"
                                >
                                    Solicitar evaluación inicial por WhatsApp →
                                </a>
                                <Link
                                    href="#pilares"
                                    className="inline-flex items-center gap-2 border border-oro/30 text-crema px-7 py-4 rounded-full font-medium text-sm hover:border-oro transition-all"
                                >
                                    Cómo se combina el tratamiento
                                </Link>
                            </div>
                        </div>

                        {/* Video animado de impresión/restauración de alta tecnología */}
                        <div className="lg:col-span-5">
                            <figure className="relative aspect-[4/5] w-full max-w-[480px] mx-auto overflow-hidden rounded-[24px] border border-oro/25 bg-carbon-soft shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    poster="https://res.cloudinary.com/drctvgyqd/image/upload/v1791845553/tratamientos/carillas-resina-impresas-3d-am-estetica-dental-puerto-madero.jpg"
                                    aria-label="Animación digital 3D de restauración cerámica de alta precisión — AM Estética Dental"
                                    className="absolute inset-0 h-full w-full object-cover"
                                >
                                    <source src="https://res.cloudinary.com/drctvgyqd/video/upload/q_auto,vc_auto/tratamientos/carillas-resina-impresas-3d-impresion-am-estetica-dental.mp4" type="video/mp4" />
                                </video>
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/10" />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                                    <span className="mb-2 inline-flex rounded-full border border-oro/30 bg-carbon/80 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-oro backdrop-blur-sm">
                                        Flujo Digital 3D · Laboratorio Propio
                                    </span>
                                    <figcaption className="text-xs leading-relaxed text-crema/70">
                                        Planificación milimétrica y fabricación digital de restauraciones cerámicas.
                                    </figcaption>
                                </div>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* ── AUTORIDAD MÉDICA CON FOTO EDITORIAL DEL DR. MERINO ── */}
                <section className="px-6 md:px-12 py-12 border-y border-oro/10 bg-carbon/50">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-oro/30 shrink-0">
                                <Image
                                    src="https://res.cloudinary.com/drctvgyqd/image/upload/w_400,h_400,c_fill,g_face,q_auto,f_auto/equipo/dr-ariel-merino-director-clinico-am-estetica-dental-puerto-madero"
                                    alt="Dr. Ariel Merino — Especialista en Estética y Rehabilitación Oral"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <span className="text-oro/70 uppercase tracking-widest text-[11px] block mb-1">Director Clínico</span>
                                <h2 className="text-2xl font-light text-crema">Dr. Ariel Merino <span className="text-xs text-oro/80 font-normal">MN 34.869</span></h2>
                                <p className="text-crema/60 text-xs sm:text-sm mt-1 max-w-xl">
                                    Especialista en Estética Dental y Rehabilitación Oral de Alta Complejidad. Docente de cursos a nivel nacional e internacional (docente invitado University of Pennsylvania). Fundador y Director de AM Estética Dental en Puerto Madero y Uruguay.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 shrink-0 border-t md:border-t-0 md:border-l border-oro/15 pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-around md:justify-start">
                            <div>
                                <span className="block text-2xl font-cormorant italic text-oro">+15</span>
                                <span className="text-xs text-crema/50 uppercase tracking-wider">Años de dedicación</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-cormorant italic text-oro">Forbes</span>
                                <span className="text-xs text-crema/50 uppercase tracking-wider">Reconocimiento</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PILARES CLÍNICOS CON FOTOS EN CADA TARJETA ── */}
                <section id="pilares" className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Enfoque Integral</span>
                        <h2 className="text-3xl md:text-4xl font-light text-crema">
                            ¿Cómo se orquesta una <span className="font-cormorant italic text-oro">rehabilitación completa?</span>
                        </h2>
                        <p className="text-crema/60 text-sm mt-4">
                            No tratamos dientes aislados: rearmamos la arquitectura de la boca para que la función proteja la estética y la estética luzca completamente natural.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PILARES.map((p) => (
                            <div key={p.numero} className="border border-oro/15 rounded-2xl overflow-hidden hover:border-oro/40 transition-all bg-carbon/40 flex flex-col justify-between group">
                                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-oro/10">
                                    <Image
                                        src={p.img}
                                        alt={p.imgAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-3 left-3 bg-carbon/80 backdrop-blur-md px-3 py-1 rounded-full border border-oro/20 text-oro text-xs font-cormorant italic">
                                        Pilar {p.numero}
                                    </div>
                                </div>
                                <div className="p-7 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-crema font-semibold text-lg mb-3">{p.titulo}</h3>
                                        <p className="text-crema/70 text-sm leading-relaxed mb-6">{p.desc}</p>
                                    </div>
                                    <div className="border-t border-oro/10 pt-4">
                                        <p className="text-oro/80 text-xs font-medium">Clave: {p.beneficio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── FASES DEL TRATAMIENTO ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/70 border-t border-oro/10">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-14">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Metodología de Precisión</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema">
                                Fases de una rehabilitación <span className="font-cormorant italic text-oro">sin sorpresas.</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {FASES.map((f) => (
                                <div key={f.paso} className="border border-oro/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                    <span className="px-4 py-1.5 rounded-full bg-oro/10 text-oro text-xs font-semibold tracking-wider shrink-0 uppercase">
                                        {f.paso}
                                    </span>
                                    <div>
                                        <h3 className="text-crema font-semibold text-lg mb-2">{f.titulo}</h3>
                                        <p className="text-crema/65 text-sm leading-relaxed">{f.detalle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CASOS REALES ── */}
                <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto border-t border-oro/10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Casos Clínicos Documentados</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema">
                                Casos de <span className="font-cormorant italic text-oro">alta complejidad reales.</span>
                            </h2>
                            <p className="text-crema/60 text-sm mt-3 max-w-xl">
                                Pacientes con desgaste dental severo por bruxismo y pérdida de anatomía rehabilitados con restauraciones cerámicas de laboratorio.
                            </p>
                        </div>
                        <Link
                            href="/casos/rehabilitacion-oral-completa-carillas-coronas-implantes"
                            className="inline-flex items-center gap-2 text-oro hover:text-oro-light text-sm font-semibold transition-colors"
                        >
                            Ver caso completo documentado →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/rehabilitacion-completa-sonrisa/rehabilitacion-oral-completa-antes-despues-rostro-labios-portada-carillas-coronas-implantes-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png",
                                alt: "Antes y después rehabilitación oral completa — Dr. Ariel Merino AM Estética Dental",
                                epígrafe: "Transformación completa con carillas, coronas e implantes",
                            },
                            {
                                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-desgaste-intraoral-antes-despues-carillas-ceramicas-rehabilitacion-dr-ariel-merino-am-estetica-dental",
                                alt: "Detalle intraoral de rehabilitación de alta complejidad — Dr. Ariel Merino",
                                epígrafe: "Integración oclusal y biológica en sector anterior y posterior",
                            },
                            {
                                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental",
                                alt: "Resultado final estético y natural en rostro completo — Dr. Ariel Merino",
                                epígrafe: "Rehabilitación de agenesia dental con implantes y cerámica",
                            },
                        ].map((img) => (
                            <div key={img.src} className="border border-oro/15 rounded-2xl overflow-hidden bg-carbon/60 group">
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-4 border-t border-oro/10">
                                    <p className="text-crema/60 text-xs font-light">{img.epígrafe}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── FAQ ESTRUCTURADA GEO ── */}
                <section className="px-6 md:px-12 py-20 bg-carbon/50 border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-oro uppercase tracking-[0.3em] text-xs block mb-3">Preguntas Frecuentes</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema">
                                Respuestas claras sobre <span className="font-cormorant italic text-oro">rehabilitación oral.</span>
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
                        Evaluá tu caso de rehabilitación<br />
                        <span className="font-cormorant italic text-oro">con criterio y tecnología digital.</span>
                    </h2>
                    <p className="text-crema/65 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Camila O&apos;Gorman 412, Oficina 101, Puerto Madero. Coordiná tu evaluación inicial directamente con nuestro equipo de recepción.
                    </p>
                    <a
                        href={WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-9 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all shadow-xl shadow-oro/10"
                    >
                        Escribinos por WhatsApp →
                    </a>
                </section>

            </main>
        </>
    );
}
