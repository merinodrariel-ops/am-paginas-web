import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Turismo Dental en Buenos Aires | Carillas y Diseño de Sonrisa | AM Estética Dental",
    description: "Carillas de porcelana y diseño de sonrisa en Buenos Aires para pacientes del exterior. Precios hasta 70% menores que en USA, Canadá o Europa. Dr. Ariel Merino, Puerto Madero.",
    alternates: {
        canonical: "https://www.amesteticadental.com/turismo-dental",
    },
    openGraph: {
        title: "Turismo Dental en Buenos Aires | Carillas de Porcelana | AM Estética Dental",
        description: "Buenos Aires es uno de los destinos de turismo dental más elegidos del mundo. Carillas, diseño de sonrisa y veneers con el Dr. Ariel Merino en Puerto Madero.",
        url: "https://www.amesteticadental.com/turismo-dental",
        locale: "es_AR",
        type: "website",
    },
};

const faqItems = [
    {
        pregunta: "¿Cuánto cuesta un diseño de sonrisa con carillas en Buenos Aires comparado con USA o Europa?",
        respuesta: "El costo de carillas de porcelana en Buenos Aires es entre un 40% y un 70% menor que en Estados Unidos, Canadá o España para una calidad clínica equivalente. Un juego de 8 carillas que en USA puede superar los USD 12.000 en AM Estética Dental se realiza con materiales de primera categoría a una fracción de ese valor, sin resignar protocolo ni resultado.",
    },
    {
        pregunta: "¿Cuánto tiempo tengo que quedarme en Buenos Aires para hacer el tratamiento?",
        respuesta: "El proceso completo de carillas de porcelana se realiza en 2 a 3 sesiones en un período de 10 a 14 días. Esto permite a los pacientes del exterior organizar un viaje puntual: llegan, hacen la consulta inicial y el diseño digital, regresan para la colocación y se van con el resultado terminado. También trabajamos con provisorios de alta calidad para quienes necesitan más tiempo.",
    },
    {
        pregunta: "¿Cómo agendo mi consulta desde el exterior?",
        respuesta: "Todo el proceso de coordinación previo puede hacerse de forma remota por WhatsApp o email. Recibimos fotos y radiografías de antemano, hacemos una evaluación preliminar, y definimos fecha y alcance del tratamiento antes de que viajes. Al llegar, arrancamos directamente sin demoras.",
    },
    {
        pregunta: "¿Es seguro hacerse carillas en Argentina? ¿Qué pasa si hay algún problema después?",
        respuesta: "AM Estética Dental trabaja con los mismos materiales y protocolos que las clínicas premium de Europa y USA: porcelana IPS e.max y feldespática de laboratorios certificados. Todos los casos tienen seguimiento y garantía. Si sos paciente del exterior y surge algún inconveniente tras tu regreso, lo resolvemos de forma coordinada con documentación clínica completa.",
    },
    {
        pregunta: "¿Puedo hacer el tratamiento de carillas y también conocer Buenos Aires?",
        respuesta: "Es parte de la propuesta. Los pacientes organizan su estadía en Puerto Madero — uno de los barrios más modernos de Buenos Aires, a metros de restaurantes, hoteles de categoría y atracciones culturales. El tratamiento no requiere reposo ni limita actividad normal entre sesiones.",
    },
    {
        pregunta: "¿Aceptan pacientes de México, Colombia, Chile, España o USA?",
        respuesta: "Sí, atendemos regularmente pacientes de México, Colombia, Chile, Uruguay, España y comunidades hispanohablantes de Estados Unidos. El Dr. Merino ha tratado pacientes internacionales que llegaron específicamente por la combinación de calidad clínica, precio y experiencia en Buenos Aires.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f) => ({
        "@type": "Question",
        "name": f.pregunta,
        "acceptedAnswer": { "@type": "Answer", "text": f.respuesta },
    })),
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Turismo Dental en Buenos Aires — Carillas y Diseño de Sonrisa",
    "serviceType": "Odontología Estética",
    "description": "Carillas de porcelana, lentes de contacto dental y diseño de sonrisa digital para pacientes del exterior en Puerto Madero, Buenos Aires.",
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
    "areaServed": [
        { "@type": "Country", "name": "México" },
        { "@type": "Country", "name": "Colombia" },
        { "@type": "Country", "name": "Chile" },
        { "@type": "Country", "name": "España" },
        { "@type": "Country", "name": "Estados Unidos" },
    ],
    "priceRange": "$$$$",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Estoy%20interesado%20en%20viajar%20a%20Buenos%20Aires%20para%20hacerme%20las%20carillas.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F";

const PAISES = [
    { pais: "México", ahorro: "hasta 65%", keyword: "carillas porcelana México" },
    { pais: "Colombia", ahorro: "hasta 55%", keyword: "diseño de sonrisa Colombia" },
    { pais: "España", ahorro: "hasta 60%", keyword: "veneers España" },
    { pais: "Estados Unidos", ahorro: "hasta 70%", keyword: "veneers USA" },
    { pais: "Chile", ahorro: "hasta 50%", keyword: "carillas Chile" },
    { pais: "Uruguay", ahorro: "hasta 45%", keyword: "carillas Uruguay" },
];

export default function TurismoDentalPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <Navbar />

            <main className="bg-carbon text-crema font-manrope">

                {/* ── HERO ── */}
                <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
                    <div className="absolute right-[-5%] top-[15%] w-[600px] h-[600px] rounded-full bg-oro/5 blur-[140px] pointer-events-none" />
                    <div className="absolute left-[-10%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-oro/4 blur-[120px] pointer-events-none" />
                    <div className="max-w-4xl mx-auto w-full">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                            Turismo Dental · Buenos Aires · Argentina
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
                            Tu sonrisa en Buenos Aires —{" "}
                            <span className="font-cormorant italic text-oro">al costo que en tu país no encontrás</span>
                        </h1>
                        <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                            Carillas de porcelana, lentes de contacto dental y diseño de sonrisa digital en Puerto Madero.
                            Mismos materiales, mismo protocolo — precio hasta un 70% menor que en USA, Canadá o Europa.
                            Todo en 10 a 14 días.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Consultar por WhatsApp →
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
                                { v: "10–14 días", l: "Tratamiento completo" },
                                { v: "Hasta 70%", l: "de ahorro vs USA" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── POR QUÉ BUENOS AIRES ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Por qué Buenos Aires</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                    Calidad de primer mundo{" "}
                                    <span className="font-cormorant italic text-oro">a precio latinoamericano</span>
                                </h2>
                                <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                    Argentina tiene una de las escuelas odontológicas más sólidas de América Latina. Los materiales que usamos — porcelana IPS e.max, feldespática, zirconio — son los mismos que se usan en clínicas premium de Madrid, Nueva York o Sao Paulo.
                                </p>
                                <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                    La diferencia está en el tipo de cambio y la estructura de costos. Eso se traduce en un ahorro real de entre el 40% y el 70% dependiendo del país de origen — sin resignar protocolo, materiales ni resultado.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { n: "01", t: "Materiales certificados de primera línea", d: "Porcelana IPS e.max y feldespática de laboratorios con certificación europea." },
                                    { n: "02", t: "Diseño digital antes de empezar", d: "Ves el resultado de tu sonrisa en pantalla antes de que se toque un solo diente." },
                                    { n: "03", t: "Coordinación previa por WhatsApp", d: "Evaluación preliminar con fotos antes de viajar. Llegás con el plan definido." },
                                    { n: "04", t: "Tratamiento completo en 10 a 14 días", d: "Pensado para quienes viajan desde el exterior: sin esperas ni vueltas innecesarias." },
                                    { n: "05", t: "Puerto Madero — barrio premium de Buenos Aires", d: "Clínica ubicada en el barrio más moderno de la ciudad, a pasos de hoteles 5 estrellas." },
                                ].map((item) => (
                                    <div key={item.n} className="flex gap-5">
                                        <span className="text-oro/40 font-manrope text-xs font-medium tracking-widest pt-0.5 flex-none w-6">{item.n}</span>
                                        <div>
                                            <div className="text-crema font-manrope font-medium text-sm mb-1">{item.t}</div>
                                            <div className="text-crema-muted font-manrope text-xs leading-relaxed">{item.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── AHORRO POR PAÍS ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Ahorro estimado</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-4">
                            ¿De dónde venís?
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-12">
                            El ahorro varía según el país, pero en todos los casos el costo del viaje más el tratamiento en Buenos Aires es menor que hacerlo localmente.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {PAISES.map((p) => (
                                <div key={p.pais} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/30 transition-colors">
                                    <div className="text-crema font-manrope font-medium text-base mb-1">{p.pais}</div>
                                    <div className="text-oro font-manrope font-semibold text-2xl mb-1">{p.ahorro}</div>
                                    <div className="text-crema/40 font-manrope text-xs">de ahorro estimado</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-crema/30 font-manrope text-xs mt-6">
                            * Porcentajes estimados comparando precios de clínicas de referencia en cada país para tratamientos equivalentes. El ahorro real depende de la cantidad de piezas y complejidad del caso.
                        </p>
                    </div>
                </section>

                {/* ── PROCESO PARA PACIENTES DEL EXTERIOR ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Cómo funciona</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            Del WhatsApp{" "}
                            <span className="font-cormorant italic text-oro">a la sonrisa terminada</span>
                        </h2>
                        <div className="space-y-0">
                            {[
                                {
                                    n: "01",
                                    t: "Mandás fotos por WhatsApp",
                                    d: "Fotos de frente y de perfil de tu sonrisa. Hacemos una evaluación preliminar sin costo y sin compromiso. Te decimos si sos candidato y cuántas piezas requeriría tu caso.",
                                },
                                {
                                    n: "02",
                                    t: "Definimos fechas y alcance",
                                    d: "Con la evaluación previa acordamos el plan de tratamiento, los tiempos y el presupuesto antes de que compres el pasaje. Sin sorpresas al llegar.",
                                },
                                {
                                    n: "03",
                                    t: "Primera sesión: evaluación y diseño",
                                    d: "Al llegar hacemos la evaluación clínica completa y el diseño digital de tu nueva sonrisa. Ves el resultado en pantalla y pedís los ajustes que quieras.",
                                },
                                {
                                    n: "04",
                                    t: "Aprobás el diseño",
                                    d: "Solo avanzamos cuando estás conforme. El diseño digital es tu garantía de que el resultado final va a ser exactamente lo que acordamos.",
                                },
                                {
                                    n: "05",
                                    t: "Colocación final",
                                    d: "En la última sesión colocamos las carillas definitivas. Ajustamos oclusión, pulido y acabado hasta lograr el resultado exacto. Te vas con la sonrisa lista.",
                                },
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

                {/* ── TRATAMIENTOS DISPONIBLES ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Tratamientos disponibles</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            Todo lo que podés resolver{" "}
                            <span className="font-cormorant italic text-oro">en un solo viaje</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    nombre: "Carillas de Porcelana",
                                    desc: "El tratamiento más solicitado por pacientes del exterior. Resultado definitivo, natural y duradero (10–20 años). Se completa en 2 a 3 sesiones.",
                                    tiempo: "10–14 días",
                                },
                                {
                                    nombre: "Lentes de Contacto Dental",
                                    desc: "Carillas ultradelgadas sin desgaste de esmalte. Para casos donde el diente está sano y solo se quiere mejorar color o forma superficial.",
                                    tiempo: "7–10 días",
                                },
                                {
                                    nombre: "Diseño de Sonrisa Digital",
                                    desc: "Planificación digital completa de la transformación estética. Incluida en todos los tratamientos: ves el resultado antes de empezar.",
                                    tiempo: "Incluido",
                                },
                                {
                                    nombre: "Blanqueamiento Profesional",
                                    desc: "Sesión de blanqueamiento en consultorio de alta concentración. Se puede combinar con carillas de resina o como tratamiento independiente.",
                                    tiempo: "1 día",
                                },
                            ].map((t) => (
                                <div key={t.nombre} className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft hover:border-oro/30 transition-colors">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">{t.nombre}</h3>
                                    <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-5">{t.desc}</p>
                                    <div className="border-t border-oro/10 pt-4">
                                        <span className="text-oro/70 font-manrope text-xs">Tiempo estimado: </span>
                                        <span className="text-crema/60 font-manrope text-xs">{t.tiempo}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── AUTORIDAD ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">El especialista</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Dr. Ariel Merino —{" "}
                                <span className="font-cormorant italic text-oro">Odontólogo Estético</span>
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Más de 15 años dedicados exclusivamente a la estética dental. La única clínica odontológica de Argentina reconocida por Forbes. Ha recibido pacientes de México, Colombia, Chile, España y la comunidad latinoamericana de Estados Unidos.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Cada caso es evaluado personalmente. El Dr. Merino no delega el diseño ni la colocación a terceros — el paciente del exterior trata directamente con el especialista de principio a fin.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                { v: "4.9★", l: "+120 reseñas en Google" },
                                { v: "Forbes", l: "Argentina" },
                                { v: "15+ años", l: "solo estética dental" },
                                { v: "Puerto Madero", l: "Buenos Aires, Argentina" },
                            ].map((s) => (
                                <div key={s.l} className="border border-oro/15 rounded-xl px-5 py-4 bg-carbon">
                                    <div className="text-oro font-manrope font-semibold text-base">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs mt-0.5">{s.l}</div>
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
                            Todo sobre{" "}
                            <span className="font-cormorant italic text-oro">turismo dental en Buenos Aires</span>
                        </h2>
                        <SeoFaq items={faqItems} />
                    </div>
                </section>

                {/* ── LINKS INTERNOS ── */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">También puede interesarte</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { nombre: "Carillas de Porcelana", desc: "El tratamiento más solicitado. Durabilidad, naturalidad y resultado definitivo.", href: "/carillas-dentales" },
                                { nombre: "Precio de Carillas", desc: "Qué define el valor según material, piezas y complejidad.", href: "/precio-carillas-dentales-buenos-aires" },
                                { nombre: "Diseño de Sonrisa Digital", desc: "Cómo funciona el proceso de planificación antes de empezar.", href: "/diseno-de-sonrisa" },
                            ].map((t) => (
                                <Link
                                    key={t.nombre}
                                    href={t.href}
                                    className="border border-oro/15 rounded-2xl p-6 bg-carbon hover:border-oro/35 transition-colors group"
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
                            Mandá tus fotos{" "}
                            <span className="font-cormorant italic text-oro">y te decimos si sos candidato</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            Evaluación preliminar sin costo y sin compromiso. Si sos candidato, te mandamos el plan y el presupuesto antes de que compres el pasaje.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-colors"
                        >
                            Escribir por WhatsApp →
                        </a>
                        <p className="text-crema/30 font-manrope text-xs mt-6">
                            Camila O&apos;Gorman 412, Oficina 101, Puerto Madero, Buenos Aires · Lun–Vie 10:00–18:00
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
