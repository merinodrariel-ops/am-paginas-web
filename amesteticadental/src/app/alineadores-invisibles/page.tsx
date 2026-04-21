import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Alineadores Invisibles en Buenos Aires | AM Estética Dental",
    description: "Ortodoncia sin brackets en Puerto Madero, CABA. Alineadores invisibles e Invisalign con planificación digital. Dr. Ariel Merino — reconocido por Forbes Argentina.",
    alternates: {
        canonical: "https://www.amesteticadental.com/alineadores-invisibles",
    },
    openGraph: {
        title: "Alineadores Invisibles en Buenos Aires | AM Estética Dental",
        description: "Ortodoncia invisible en Puerto Madero. Alineadores e Invisalign con planificación digital y seguimiento continuo. Sin brackets, sin alambre.",
        url: "https://www.amesteticadental.com/alineadores-invisibles",
        locale: "es_AR",
        type: "website",
    },
};

const faqItems = [
    {
        pregunta: "¿Los alineadores invisibles sirven para cualquier caso?",
        respuesta: "Los alineadores invisibles resuelven la mayoría de los casos de ortodoncia: apiñamiento, espacios, mordida cruzada, sobremordida y casos moderados-complejos. En la consulta evaluamos tu caso específico. Si los alineadores no son la mejor opción para tu situación, te lo decimos con honestidad.",
    },
    {
        pregunta: "¿Cuántas horas por día se usan los alineadores?",
        respuesta: "El protocolo estándar es 22 horas por día. Se retiran para comer, beber (excepto agua) y para el cepillado. Cuanto más tiempo los usás, más predecible y rápido es el resultado. El seguimiento digital nos permite ajustar el plan en tiempo real.",
    },
    {
        pregunta: "¿Los alineadores duelen?",
        respuesta: "Los alineadores generan presión controlada, no dolor agudo. Cada cambio de alineador puede producir sensación de presión durante 24 a 48 horas, que cede sola. Es significativamente más cómodo que los brackets metálicos. La mayoría de los pacientes se adaptan en los primeros días.",
    },
    {
        pregunta: "¿Cuánto dura el tratamiento con alineadores?",
        respuesta: "La duración depende del caso. Casos simples pueden resolverse en 3 a 6 meses. Casos moderados toman entre 9 y 18 meses. La planificación digital establece desde el inicio la cantidad de alineadores y la duración estimada, para que sepas exactamente qué esperar antes de empezar.",
    },
    {
        pregunta: "¿Cuál es la diferencia entre AM Aligners y otros alineadores?",
        respuesta: "La diferencia real no pasa solo por el nombre del sistema, sino por cómo se diagnostica, planifica y controla cada caso. En AM Estética Dental evaluamos si AM Aligners es la mejor opción para vos y definimos el plan según tu caso, tu mordida y el resultado que querés lograr.",
    },
    {
        pregunta: "¿Se pueden combinar alineadores con carillas dentales?",
        respuesta: "Sí, y es frecuente en casos de diseño de sonrisa completo. El orden correcto es: primero los alineadores (para alinear la base), luego las carillas (para el resultado estético final). En la consulta planificamos el orden y la integración entre ambos tratamientos para que el resultado sea predecible y duradero.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(f => ({
        "@type": "Question",
        "name": f.pregunta,
        "acceptedAnswer": { "@type": "Answer", "text": f.respuesta },
    })),
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Alineadores Invisibles",
    "description": "Ortodoncia sin brackets con alineadores invisibles e Invisalign. Planificación digital y seguimiento continuo en Puerto Madero, Buenos Aires.",
    "procedureType": "Therapeutic",
    "url": "https://www.amesteticadental.com/alineadores-invisibles",
    "provider": {
        "@type": "Dentist",
        "name": "AM Estética Dental",
        "url": "https://www.amesteticadental.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Camila O'Gorman 412, Oficina 101",
            "addressLocality": "Puerto Madero",
            "addressRegion": "CABA",
            "postalCode": "C1107DED",
            "addressCountry": "AR",
        },
    },
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20interesan%20los%20alineadores%20invisibles.";

const ventajas = [
    { t: "Sin brackets ni alambre", d: "Removibles para comer y cepillarte. Ninguna restricción de dieta. Sin irritación en encías ni mejillas." },
    { t: "Completamente invisibles", d: "El material es transparente y de baja visibilidad. La mayoría de las personas no nota que los usás." },
    { t: "Planificación digital completa", d: "Antes de empezar ves en pantalla todos los movimientos y el resultado final. Aprobás el plan antes de fabricar el primer alineador." },
    { t: "Seguimiento continuo", d: "Controles periódicos para verificar que el tratamiento sigue el plan digital. Ajustamos en tiempo real si es necesario." },
];

const pasos = [
    { n: "01", t: "Evaluación inicial", d: "Análisis clínico y radiografías. Determinamos si los alineadores son la mejor opción para tu caso." },
    { n: "02", t: "Escaneado 3D", d: "Tomamos un escaneo digital de tu dentición. Sin moldes de yeso, sin incomodidad." },
    { n: "03", t: "Simulación digital", d: "Diseñamos el plan de movimientos y te mostramos el resultado final antes de fabricar nada." },
    { n: "04", t: "Fabricación", d: "Con tu aprobación, se fabrican todos los alineadores del plan. Recibís el primer set en la siguiente sesión." },
    { n: "05", t: "Seguimiento", d: "Controles periódicos para verificar avance y entregarte los siguientes sets. Todo en base al plan digital." },
    { n: "06", t: "Resultado final", d: "Al completar el plan, evaluamos el resultado y definimos la retención para mantenerlo en el tiempo." },
];

export default function AlineadoresInvisiblesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <Navbar />

            <main className="bg-carbon text-crema font-manrope">

                {/* ── HERO ── */}
                <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
                    <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
                    <div className="max-w-4xl mx-auto w-full">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                            AM Estética Dental · Puerto Madero · Buenos Aires
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
                            Alineadores Invisibles<br />
                            <span className="font-cormorant italic text-oro">en Buenos Aires</span>
                        </h1>
                        <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                            Ortodoncia sin brackets ni alambre con AM Aligners y planificación digital completa. Ves el resultado antes de empezar. Dr. Ariel Merino, Puerto Madero.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Solicitar evaluación inicial →
                            </a>
                            <Link
                                href="/estetica-dental"
                                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
                            >
                                ← Todos los tratamientos
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
                            {[
                                { v: "4.9★", l: "+120 reseñas Google" },
                                { v: "Forbes", l: "Argentina" },
                                { v: "100%", l: "Planificación digital" },
                                { v: "Puerto Madero", l: "CABA" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── VENTAJAS ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Por qué alineadores</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            Ortodoncia invisible,{" "}
                            <span className="font-cormorant italic text-oro">sin concesiones</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ventajas.map((v) => (
                                <div key={v.t} className="border border-oro/15 rounded-2xl p-6 bg-carbon">
                                    <div className="flex gap-3 mb-3">
                                        <span className="text-oro mt-1 flex-none">◆</span>
                                        <h3 className="text-crema font-manrope font-medium text-base">{v.t}</h3>
                                    </div>
                                    <p className="text-crema/60 font-manrope text-sm leading-relaxed pl-6">{v.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PROCESO ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Cómo funciona</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            El proceso,{" "}
                            <span className="font-cormorant italic text-oro">paso a paso</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pasos.map((p) => (
                                <div key={p.n} className="flex gap-5">
                                    <span className="text-oro/30 font-cormorant text-3xl font-light flex-none leading-none mt-1">{p.n}</span>
                                    <div>
                                        <div className="text-crema font-manrope font-medium text-sm mb-2">{p.t}</div>
                                        <p className="text-crema/55 font-manrope text-xs leading-relaxed">{p.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── MID CTA ── */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <p className="text-crema font-manrope font-medium text-lg mb-1">¿Los alineadores son para vos?</p>
                            <p className="text-crema/55 font-manrope text-sm">En la evaluación inicial analizamos tu caso y te decimos si son la mejor opción.</p>
                        </div>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors flex-none"
                        >
                            Consultar ahora →
                        </a>
                    </div>
                </section>

                {/* ── DR. MERINO ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        <div className="md:col-span-2">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">El especialista</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Dr. Ariel Merino
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                Cada caso de alineadores es planificado y seguido directamente por el Dr. Merino. No delegamos. No hay residentes. La planificación digital es revisada sesión a sesión para garantizar que el resultado coincide con lo que acordamos al inicio.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Reconocido por Forbes Argentina. Elegido para diseñar la sonrisa de Miss Universo. Más de 15 años dedicados exclusivamente a la estética dental en Puerto Madero.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { v: "4.9★", l: "Google" },
                                { v: "Forbes", l: "Argentina" },
                                { v: "Miss Universo", l: "Paciente" },
                                { v: "15+", l: "en estética dental" },
                            ].map((s) => (
                                <div key={s.l} className="border border-oro/15 rounded-xl px-4 py-5 text-center bg-carbon-soft">
                                    <div className="text-oro font-manrope font-semibold text-base">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs mt-1">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Preguntas frecuentes</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
                            Preguntas sobre{" "}
                            <span className="font-cormorant italic text-oro">alineadores invisibles</span>
                        </h2>
                        <SeoFaq items={faqItems} />
                    </div>
                </section>

                {/* ── TRATAMIENTOS RELACIONADOS ── */}
                <section className="py-16 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">También puede interesarte</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { nombre: "AM Aligners", desc: "Nuestro sistema de alineadores invisibles con enfoque clínico y seguimiento local.", href: "/alineadores-invisibles" },
                                { nombre: "Diseño de Sonrisa Digital", desc: "Planificación 3D completa. Ves el resultado antes de empezar.", href: "/diseno-de-sonrisa" },
                                { nombre: "Carillas Dentales", desc: "Porcelana y lentes de contacto dental para el refinamiento final.", href: "/carillas-dentales" },
                            ].map((t) => (
                                <Link
                                    key={t.nombre}
                                    href={t.href as string}
                                    className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/35 transition-colors group"
                                >
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2 group-hover:text-oro transition-colors">{t.nombre}</h3>
                                    <p className="text-crema/55 font-manrope text-xs leading-relaxed">{t.desc}</p>
                                    <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-3 block">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA FINAL ── */}
                <section className="py-28 px-6 md:px-12 text-center relative overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-oro/5 blur-[120px] pointer-events-none" />
                    <div className="relative max-w-2xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Empezar</span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            La evaluación inicial{" "}
                            <span className="font-cormorant italic text-oro">no tiene costo</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            Analizamos tu caso, evaluamos si los alineadores son la mejor opción y te mostramos el resultado digital. Sin compromiso.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-colors"
                        >
                            Consultar por WhatsApp →
                        </a>
                        <p className="text-crema/30 font-manrope text-xs mt-6">
                            Camila O&apos;Gorman 412, Oficina 101, Puerto Madero · Lun–Vie 10:00–18:00
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
