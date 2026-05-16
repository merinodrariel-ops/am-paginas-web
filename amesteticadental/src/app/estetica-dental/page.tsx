import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Estética Dental Buenos Aires · Carillas, Implantes, Diseño de Sonrisa · AM",
    description: "Especialistas en estética dental de alta complejidad en Buenos Aires. Carillas de porcelana, diseño de sonrisa, implantes y alineadores. Dr. Ariel Merino · Puerto Madero · Forbes Argentina.",
    alternates: {
        canonical: "https://www.amesteticadental.com/estetica-dental",
    },
    openGraph: {
        title: "Estética Dental Buenos Aires · Carillas, Implantes, Diseño de Sonrisa · AM",
        description: "La clínica de estética dental más premiada de Argentina. Puerto Madero, CABA. Carillas, alineadores, diseño de sonrisa e implantes.",
        url: "https://www.amesteticadental.com/estetica-dental",
        locale: "es_AR",
        type: "website",
    },
};

const faqItems = [
    {
        pregunta: "¿Qué es la estética dental?",
        respuesta: "La estética dental es la rama de la odontología dedicada a mejorar la apariencia de los dientes, las encías y la sonrisa en general. Incluye tratamientos como carillas dentales, diseño de sonrisa digital, blanqueamiento profesional, alineadores invisibles, contorno gingival e implantes estéticos. A diferencia de la odontología general, el foco está en el resultado visual y su integración con el rostro completo.",
    },
    {
        pregunta: "¿Cuál es la diferencia entre estética dental y odontología general?",
        respuesta: "La odontología general se ocupa de la salud: caries, encías, dolor. La estética dental se ocupa del resultado visual: color, forma, simetría, proporciones. En AM Estética Dental solo atendemos casos estéticos, con tratamientos planificados para obtener resultados duraderos y naturales.",
    },
    {
        pregunta: "¿Cómo sé qué tratamiento necesito?",
        respuesta: "En la evaluación inicial analizamos tu caso y te explicamos las opciones. No existe un tratamiento universal. La decisión depende de qué querés cambiar, cuánto cambio estás dispuesto a hacer, tu presupuesto y el estado de base de tu dentición. El diseño digital de sonrisa permite ver el resultado de distintas opciones antes de empezar.",
    },
    {
        pregunta: "¿Hay un orden de tratamientos correcto?",
        respuesta: "Sí. En casos combinados, el orden importa. Por ejemplo: la ortodoncia o los alineadores van antes que las carillas. El blanqueamiento va antes de fabricar carillas para ajustar el tono. El contorno gingival puede ir antes o integrado al proceso. En la consulta inicial planificamos el orden correcto para tu caso.",
    },
    {
        pregunta: "¿La estética dental tiene un rango de edad recomendado?",
        respuesta: "No. Los tratamientos estéticos están indicados para adultos en general, desde los 18 años hasta cualquier edad. El criterio es el estado de la dentición y el objetivo del paciente, no la edad.",
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

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20solicitar%20una%20evaluaci%C3%B3n%20inicial.";

const tratamientos = [
    { nombre: "Carillas Dentales", desc: "Porcelana y lentes de contacto dental. Cambiamos color, forma y simetría.", href: "/carillas-dentales" },
    { nombre: "Lentes de Contacto Dental", desc: "La alternativa ultradelgada para cambios sutiles y máxima naturalidad.", href: "/lentes-de-contacto-dental" },
    { nombre: "Carillas sin Desgaste", desc: "Cuando el caso permite una solución conservadora sin preparar el diente.", href: "/carillas-sin-desgaste" },
    { nombre: "Diseño de Sonrisa Digital", desc: "Ves el resultado antes de empezar. Planificación 3D completa.", href: "/diseno-de-sonrisa" },
    { nombre: "Alineadores Invisibles", desc: "Ortodoncia sin brackets. Planificación digital y seguimiento continuo.", href: "/alineadores-invisibles" },
    { nombre: "AM Aligners", desc: "Nuestro sistema de alineadores invisibles, integrado a criterio clínico y diseño de sonrisa.", href: "/alineadores-invisibles" },
    { nombre: "Blanqueamiento Profesional", desc: "Protocolo clínico calibrado para tu tipo de esmalte.", href: "/#tratamientos" },
];

export default function EsteticaDentalPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                            Estética Dental<br />
                            <span className="font-cormorant italic text-oro">en Puerto Madero</span>
                        </h1>
                        <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                            La clínica de estética dental más reconocida de Argentina. Carillas de porcelana, diseño de sonrisa digital, alineadores invisibles e implantes. Reconocida por Forbes. Dr. Ariel Merino.
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
                                href="/"
                                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
                            >
                                ← Ver el sitio completo
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
                            {[
                                { v: "4.9★", l: "+120 reseñas Google" },
                                { v: "Forbes", l: "Argentina" },
                                { v: "15+", l: "en estética dental" },
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

                {/* ── QUÉ ES ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Nuestra especialidad</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Odontología que{" "}
                                <span className="font-cormorant italic text-oro">transforma vidas</span>
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                En AM Estética Dental solo hacemos tratamientos estéticos. No somos una clínica generalista. Cada tratamiento está planificado para lograr un resultado visual preciso, armónico con el rostro y duradero en el tiempo.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Trabajamos con diseño digital previo, materiales de primera línea y criterio clínico estricto. El resultado que ves en la pantalla antes de empezar es el mismo que vas a ver en el espejo cuando terminamos.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {[
                                { t: "Especialización exclusiva en estética", d: "No atendemos urgencias ni odontología general. Cada slot de agenda es para un caso estético planificado." },
                                { t: "Diseño digital en todos los casos", d: "Cada tratamiento parte de una simulación digital. Ves el resultado antes de que empiece cualquier procedimiento." },
                                { t: "Reconocimiento Forbes Argentina", d: "La única clínica odontológica del país reconocida por el medio de negocios más exigente del mundo." },
                                { t: "Pacientes reales, sin filtros", d: "Todos nuestros casos son pacientes reales. Sin edición de sonrisas, sin imágenes de stock." },
                            ].map((item) => (
                                <div key={item.t} className="flex gap-4">
                                    <span className="text-oro mt-1.5 flex-none">◆</span>
                                    <div>
                                        <div className="text-crema font-manrope font-medium text-sm mb-1">{item.t}</div>
                                        <div className="text-crema-muted font-manrope text-xs leading-relaxed">{item.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── TRATAMIENTOS ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Tratamientos</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            Todos los tratamientos de{" "}
                            <span className="font-cormorant italic text-oro">estética dental</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {tratamientos.map((t) => (
                                <Link
                                    key={t.nombre}
                                    href={t.href}
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

                {/* ── DR. MERINO ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        <div className="md:col-span-2">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">El especialista</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Dr. Ariel Merino
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                Odontólogo estético con más de 15 años de práctica dedicada exclusivamente a la estética dental. Reconocido por Forbes Argentina. Elegido para diseñar la sonrisa de Miss Universo.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Cada paciente es atendido personalmente por el Dr. Merino. No delegamos casos. No hay residentes. Cada evaluación, cada diseño y cada colocación pasa por su criterio directo.
                            </p>
                            <Link
                                href="/dr-ariel-merino"
                                className="inline-flex items-center gap-2 text-oro font-manrope text-sm mt-6 hover:text-oro-light transition-colors"
                            >
                                Ver perfil completo del Dr. Ariel Merino →
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { v: "4.9★", l: "Google" },
                                { v: "Forbes", l: "Argentina" },
                                { v: "Miss Universo", l: "Paciente" },
                                { v: "15+", l: "en estética dental" },
                            ].map((s) => (
                                <div key={s.l} className="border border-oro/15 rounded-xl px-4 py-5 text-center bg-carbon">
                                    <div className="text-oro font-manrope font-semibold text-base">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs mt-1">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Preguntas frecuentes</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
                            Preguntas sobre{" "}
                            <span className="font-cormorant italic text-oro">estética dental</span>
                        </h2>
                        <SeoFaq items={faqItems} />
                    </div>
                </section>

                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">Guías para decidir</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { nombre: "Precio de Carillas", desc: "Qué influye realmente en el valor de un tratamiento estético bien planificado.", href: "/precio-carillas-dentales-buenos-aires" },
                                { nombre: "Carillas vs Alineadores", desc: "Para saber si necesitás cambiar forma o mover dientes primero.", href: "/carillas-vs-alineadores" },
                                { nombre: "Porcelana vs Resina", desc: "Compará duración, mantenimiento y resultado visual.", href: "/carillas-de-porcelana-vs-resina" },
                            ].map((item) => (
                                <Link
                                    key={item.nombre}
                                    href={item.href}
                                    className="border border-oro/15 rounded-2xl p-6 bg-carbon hover:border-oro/35 transition-colors group"
                                >
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2 group-hover:text-oro transition-colors">{item.nombre}</h3>
                                    <p className="text-crema/55 font-manrope text-xs leading-relaxed">{item.desc}</p>
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
                            <span className="font-cormorant italic text-oro">es el primer paso</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            Analizamos tu caso, te explicamos las opciones y diseñamos digitalmente el resultado. Sin compromiso. 
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
