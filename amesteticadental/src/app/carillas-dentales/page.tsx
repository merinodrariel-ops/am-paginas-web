import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Carillas Dentales en Puerto Madero | AM Estética Dental",
    description: "Carillas de porcelana y lentes de contacto dental mínimamente invasivos en Puerto Madero, Buenos Aires. Cambiá el color, forma y simetría de tu sonrisa en pocas sesiones. Dr. Ariel Merino.",
    alternates: {
        canonical: "https://www.amesteticadental.com/carillas-dentales",
    },
    openGraph: {
        title: "Carillas Dentales en Puerto Madero | AM Estética Dental",
        description: "Carillas de porcelana mínimamente invasivas en Puerto Madero. Resultados definitivos en 2 a 3 sesiones. Consultá al Dr. Ariel Merino.",
        url: "https://www.amesteticadental.com/carillas-dentales",
        locale: "es_AR",
        type: "website",
    },
};

const faqItems = [
    {
        pregunta: "¿Cuánto cuestan las carillas dentales en Buenos Aires?",
        respuesta: "El valor depende del material elegido (porcelana o resina), la cantidad de piezas y el estado de base de tu dentición. En AM Estética Dental trabajamos con precios en USD y ofrecemos financiación propia al 18% anual. La evaluación inicial define el presupuesto exacto para tu caso.",
    },
    {
        pregunta: "¿Las carillas dañan o desgastan los dientes?",
        respuesta: "Las carillas de porcelana mínimamente invasivas y los lentes de contacto dental requieren un desgaste mínimo o nulo del esmalte. La técnica depende del caso: hay situaciones en que se puede trabajar directamente sobre el diente sin preparación previa. Esto se evalúa en la consulta inicial.",
    },
    {
        pregunta: "¿Cuál es la diferencia entre carillas de porcelana y de resina?",
        respuesta: "Las carillas de porcelana tienen mayor durabilidad (10 a 20 años), mejor imitación del esmalte natural y resistencia superior a las manchas. Las de resina tienen un costo menor y se realizan en una sola sesión, pero su vida útil es de 5 a 7 años. La elección depende de tu caso, presupuesto y objetivo estético.",
    },
    {
        pregunta: "¿Cuánto dura el proceso de colocación de carillas?",
        respuesta: "El proceso completo se realiza en 2 a 3 sesiones distribuidas en 2 a 4 semanas. En la primera sesión diseñamos tu sonrisa digitalmente y te mostramos el resultado previo. Solo cuando lo aprobás avanzamos con la preparación y colocación.",
    },
    {
        pregunta: "¿Qué son los lentes de contacto dental?",
        respuesta: "Los lentes de contacto dental son carillas ultradelgadas (0,3 mm) que se adhieren directamente al diente sin requerir desgaste del esmalte. Son la opción más conservadora y están indicados para casos en los que el diente está en buen estado y solo se quiere mejorar el color o la forma superficial.",
    },
    {
        pregunta: "¿Cuánto duran las carillas de porcelana?",
        respuesta: "Con los cuidados adecuados, las carillas de porcelana duran entre 10 y 20 años. Es importante evitar morder objetos duros, usar protector nocturno si hay bruxismo y mantener la higiene dental de rutina.",
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
    "@type": "Service",
    "name": "Carillas Dentales",
    "serviceType": "Odontología Estética",
    "description": "Carillas de porcelana y lentes de contacto dental mínimamente invasivos para mejorar color, forma y simetría de la sonrisa.",
    "provider": {
        "@type": "Dentist",
        "name": "AM Estética Dental",
        "url": "https://www.amesteticadental.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Camila O'Gorman 412, Oficina 101",
            "addressLocality": "Puerto Madero",
            "addressRegion": "Ciudad Autónoma de Buenos Aires",
            "addressCountry": "AR",
        },
    },
    "areaServed": { "@type": "City", "name": "Buenos Aires", "addressCountry": "AR" },
    "priceRange": "$$$$",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20las%20carillas%20dentales.";

export default function CarillasDentalesPage() {
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
                            AM Estética Dental · Puerto Madero
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
                            Carillas Dentales<br />
                            <span className="font-cormorant italic text-oro">en Puerto Madero</span>
                        </h1>
                        <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                            Porcelana, resina y lentes de contacto dental. Cambiamos el color, la forma y la simetría de tu sonrisa con técnicas mínimamente invasivas — sin comprometer la salud de tus dientes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Consultar sobre carillas →
                            </a>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
                            >
                                ← Volver al sitio
                            </Link>
                        </div>
                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
                            {[
                                { v: "4.9★", l: "Google Reviews" },
                                { v: "Forbes", l: "Argentina" },
                                { v: "15+", l: "en estética dental" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PARA QUIÉN ES ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Para quién son</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Carillas para quienes quieren{" "}
                                <span className="font-cormorant italic text-oro">un cambio definitivo</span>
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Las carillas dentales son la solución más efectiva para dientes con manchas permanentes, forma irregular, tamaño asimétrico o fracturas superficiales. En una o dos semanas, el resultado es definitivo y natural.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {[
                                { n: "01", t: "Manchas que no responden al blanqueamiento", d: "Tinciones intrínsecas por tetraciclina, flúor o dientes no vitales." },
                                { n: "02", t: "Dientes con forma, tamaño o simetría incorrectos", d: "Piezas fracturadas, pequeñas o con espacios entre ellas." },
                                { n: "03", t: "Sonrisa que perdió brillo o naturalidad con el tiempo", d: "Desgaste o envejecimiento del esmalte sin enfermedad activa." },
                                { n: "04", t: "Resultado inmediato sin ortodoncia", d: "Cuando corregir la posición lleva años pero la forma puede mejorarse en semanas." },
                            ].map((item) => (
                                <div key={item.n} className="flex gap-5">
                                    <span className="text-oro/40 font-manrope text-xs font-medium tracking-widest pt-0.5 flex-none">{item.n}</span>
                                    <div>
                                        <div className="text-crema font-manrope font-medium text-sm mb-1">{item.t}</div>
                                        <div className="text-crema-muted font-manrope text-xs leading-relaxed">{item.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── TIPOS DE CARILLAS ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Tipos de carillas</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            Porcelana, resina{" "}
                            <span className="font-cormorant italic text-oro">y lentes de contacto dental</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    tipo: "Carillas de Porcelana",
                                    descripcion: "El estándar de excelencia. Duran 10 a 20 años, imitan perfectamente el esmalte natural y no se manchan. Requieren preparación mínima del diente.",
                                    ideal: "Casos con cambio importante de color, forma o tamaño.",
                                    duracion: "10–20 años",
                                },
                                {
                                    tipo: "Lentes de Contacto Dental",
                                    descripcion: "Carillas ultradelgadas (0,3 mm) que se adhieren sin desgaste. La opción más conservadora cuando el diente está sano y solo necesita una mejora superficial.",
                                    ideal: "Correcciones de color o forma sin quitar esmalte.",
                                    duracion: "8–15 años",
                                },
                                {
                                    tipo: "Carillas de Resina",
                                    descripcion: "Se realizan en una sola sesión con resina compuesta de alta calidad. Costo menor, resultado inmediato. Requieren mantenimiento periódico.",
                                    ideal: "Correcciones puntuales con menor inversión.",
                                    duracion: "5–7 años",
                                },
                            ].map((c) => (
                                <div key={c.tipo} className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft hover:border-oro/30 transition-colors">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">{c.tipo}</h3>
                                    <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-5">{c.descripcion}</p>
                                    <div className="border-t border-oro/10 pt-4 space-y-2">
                                        <div className="text-xs font-manrope text-crema/50">
                                            <span className="text-oro/70">Ideal para:</span> {c.ideal}
                                        </div>
                                        <div className="text-xs font-manrope text-crema/50">
                                            <span className="text-oro/70">Duración:</span> {c.duracion}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PROCESO ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Proceso</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            Ves el resultado{" "}
                            <span className="font-cormorant italic text-oro">antes de empezar</span>
                        </h2>
                        <div className="space-y-0">
                            {[
                                { n: "01", t: "Evaluación inicial", d: "Analizamos tu dentición, escuchamos tu objetivo y te explicamos las opciones. Sin compromiso." },
                                { n: "02", t: "Diseño digital de sonrisa", d: "Diseñamos tu nueva sonrisa en 3D. Ves el resultado en pantalla y pedís los ajustes que quieras." },
                                { n: "03", t: "Aprobás el resultado", d: "Solo avanzamos cuando estás conforme con el diseño. Sin sorpresas, sin fe ciega." },
                                { n: "04", t: "Preparación mínima del diente", d: "Si aplica, preparamos el diente con el desgaste mínimo necesario para el material elegido." },
                                { n: "05", t: "Colocación y ajuste final", d: "Colocamos las carillas y ajustamos oclusión, pulido y acabado hasta lograr el resultado exacto." },
                            ].map((step, i, arr) => (
                                <div key={step.n} className={`flex gap-8 py-8 ${i < arr.length - 1 ? "border-b border-oro/10" : ""}`}>
                                    <span className="text-oro/35 font-manrope font-light text-3xl flex-none w-12 pt-1">{step.n}</span>
                                    <div>
                                        <div className="text-crema font-manrope font-medium text-base mb-2">{step.t}</div>
                                        <div className="text-crema-muted font-manrope text-sm leading-relaxed">{step.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── AUTORIDAD ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">El especialista</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Dr. Ariel Merino —{" "}
                                <span className="font-cormorant italic text-oro">Odontólogo Estético</span>
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Más de 15 años dedicados exclusivamente a la estética dental. La única clínica odontológica de Argentina reconocida por Forbes. El Dr. Merino fue elegido para diseñar la sonrisa de Miss Universo.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Cada caso de carillas es evaluado personalmente, con criterio clínico y estético, para lograr un resultado natural que dure décadas.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {[
                                { v: "4.9★", l: "+120 reseñas en Google" },
                                { v: "Forbes", l: "Reconocimiento Argentina" },
                                { v: "Miss Universo", l: "Paciente destacada" },
                                { v: "Puerto Madero", l: "CABA, Argentina" },
                            ].map((s) => (
                                <div key={s.l} className="border border-oro/15 rounded-xl px-5 py-4 bg-carbon-soft">
                                    <div className="text-oro font-manrope font-semibold text-base">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs mt-0.5">{s.l}</div>
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
                            Todo sobre{" "}
                            <span className="font-cormorant italic text-oro">carillas dentales</span>
                        </h2>
                        <SeoFaq items={faqItems} />
                    </div>
                </section>

                <section className="py-16 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">También puede interesarte</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { nombre: "Lentes de Contacto Dental", desc: "La versión más conservadora para casos que permiten mínima o nula intervención.", href: "/lentes-de-contacto-dental" },
                                { nombre: "Carillas sin Desgaste", desc: "Cuándo realmente se puede trabajar sin preparar el diente.", href: "/carillas-sin-desgaste" },
                                { nombre: "Precio de Carillas", desc: "Qué cambia el valor según material, piezas y complejidad del caso.", href: "/precio-carillas-dentales-buenos-aires" },
                                { nombre: "Porcelana vs Resina", desc: "Compará duración, naturalidad, costo y mantenimiento.", href: "/carillas-de-porcelana-vs-resina" },
                                { nombre: "Carillas vs Alineadores", desc: "Descubrí cuándo conviene cambiar forma y cuándo conviene mover dientes.", href: "/carillas-vs-alineadores" },
                            ].map((t) => (
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

                {/* ── CTA FINAL ── */}
                <section className="py-28 px-6 md:px-12 text-center relative overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-oro/5 blur-[120px] pointer-events-none" />
                    <div className="relative max-w-2xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Empezar</span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            La evaluación inicial{" "}
                            <span className="font-cormorant italic text-oro">es sin compromiso</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            En la primera consulta evaluamos tu caso, te mostramos las opciones y te explicamos el proceso completo. Sin presión. 
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
