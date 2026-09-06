import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/blog/cepillo-electrico-dyson-opinion-odontologo";
const WA_LINK = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20el%20cepillo%20Dyson%20y%20quiero%20consultar%20por%20mi%20higiene%20y%20mi%20caso.";

// El video vive en YouTube: es la fuente canónica y la que acumula señales.
// Acá se embebe y se declara con VideoObject para que Google pueda mostrar la
// miniatura del video junto a esta página en los resultados de búsqueda.
const VIDEO = {
    id: "eOdr9gqT7k8",
    titulo: "Dyson US$500: ¿El mejor cepillo del mundo? | Dr. Ariel Merino",
    descripcion:
        "El Dr. Ariel Merino analiza el primer cepillo de dientes de Dyson: cámara intraoral, detección asistida por inteligencia artificial, irrigador integrado y un precio cercano a los US$ 500. Qué aporta de verdad en la higiene diaria y qué es marketing.",
    subida: "2026-09-05T22:27:15-07:00",
    duracion: "PT5M2S",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Cepillo eléctrico Dyson de US$500: opinión de un odontólogo | AM Estética Dental",
    description: "Cámara intraoral, inteligencia artificial e irrigador en un solo cepillo. Un odontólogo explica qué aporta realmente el cepillo Dyson, qué respalda la evidencia y si vale la pena a ese precio.",
    alternates: {
        canonical: CANONICAL,
    },
    openGraph: {
        title: "Cepillo eléctrico Dyson de US$500: la opinión de un odontólogo",
        description: "Qué hace de verdad el cepillo con cámara e IA de Dyson, qué respalda la evidencia científica y para quién tiene sentido a ese precio.",
        url: CANONICAL,
        locale: "es_AR",
        type: "article",
        images: [`https://i.ytimg.com/vi/${VIDEO.id}/maxresdefault.jpg`],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cepillo eléctrico Dyson de US$500: opinión de un odontólogo",
    image: `https://i.ytimg.com/vi/${VIDEO.id}/maxresdefault.jpg`,
    description: "Análisis clínico del cepillo de dientes de Dyson con cámara intraoral, detección asistida por IA e irrigador integrado: qué aporta a la higiene diaria y qué respalda la evidencia.",
    author: {
        "@type": "Person",
        name: "Dr. Ariel Merino",
        url: "https://www.wikidata.org/wiki/Q134287655",
        jobTitle: "Odontólogo Estético",
    },
    publisher: {
        "@type": "Organization",
        name: "AM Estética Dental",
        url: "https://www.amesteticadental.com",
    },
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    mainEntityOfPage: CANONICAL,
};

const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: VIDEO.titulo,
    description: VIDEO.descripcion,
    thumbnailUrl: [
        `https://i.ytimg.com/vi/${VIDEO.id}/maxresdefault.jpg`,
        `https://i.ytimg.com/vi/${VIDEO.id}/hqdefault.jpg`,
    ],
    uploadDate: VIDEO.subida,
    duration: VIDEO.duracion,
    contentUrl: `https://www.youtube.com/watch?v=${VIDEO.id}`,
    embedUrl: `https://www.youtube.com/embed/${VIDEO.id}`,
    inLanguage: "es-AR",
    creator: {
        "@type": "Person",
        name: "Dr. Ariel Merino",
        url: "https://www.amesteticadental.com/dr-ariel-merino",
    },
    publisher: {
        "@type": "Organization",
        name: "AM Estética Dental",
        url: "https://www.amesteticadental.com",
    },
    isPartOf: CANONICAL,
};

const FUNCIONES = [
    {
        titulo: "Cámara intraoral",
        descripcion: "Filma dentro de la boca mientras te cepillás y transmite la imagen a la aplicación del teléfono en tiempo real.",
        detalle: "Es la función que distingue al dispositivo. Ningún cepillo doméstico había puesto imagen directa de la boca en manos del paciente.",
    },
    {
        titulo: "Detección asistida por algoritmo",
        descripcion: "El sistema analiza esa imagen e identifica las zonas donde queda acumulación, señalándolas durante el cepillado.",
        detalle: "El fabricante indica usar una pasta sin espuma para que la cámara conserve visibilidad todo el tiempo.",
    },
    {
        titulo: "Irrigador integrado",
        descripcion: "El cabezal lanza un chorro de enjuague de baja espuma desde un depósito alojado en la base de carga.",
        detalle: "Unifica en un solo aparato lo que hoy son dos: el cepillo eléctrico y el irrigador de agua a presión.",
    },
    {
        titulo: "Cepillado lento",
        descripcion: "La instrucción de uso pide desplazar el cabezal despacio: cuanto más lento, mejor trabaja el sistema.",
        detalle: "Es lo contrario del gesto habitual, y coincide con lo que la odontología viene señalando hace décadas sobre técnica de cepillado.",
    },
];

const SI_RESPALDA = [
    "El cepillo eléctrico reduce más placa y gingivitis que el manual",
    "El irrigador oral ayuda como complemento de la limpieza interdental",
    "Cepillarse despacio y con técnica rinde más que cepillarse fuerte",
    "La retroalimentación visual mejora la adherencia a la higiene",
];

const NO_RESPALDA = [
    "Que la detección por cámara mejore índices de placa a mediano plazo",
    "Que un irrigador reemplace el hilo o los cepillos interdentales",
    "Que un dispositivo compense una técnica deficiente sostenida",
    "Que exista un cepillo que vuelva innecesario el control profesional",
];

const FAQ = [
    {
        q: "¿Vale la pena el cepillo eléctrico Dyson?",
        a: "Para quien pueda afrontar el gasto y quiera la retroalimentación visual de la cámara, es un dispositivo interesante y bien resuelto. Para la mayoría de los pacientes, un cepillo eléctrico de gama media usado con buena técnica y acompañado de limpieza interdental logra la mayor parte del beneficio a una fracción del costo.",
    },
    {
        q: "¿Un cepillo con cámara reemplaza al control con el odontólogo?",
        a: "No. La cámara muestra superficies visibles y ayuda a mejorar el hábito, pero no detecta caries interproximales, pérdida ósea ni lesiones bajo restauraciones. Eso requiere examen clínico y radiografías.",
    },
    {
        q: "¿El irrigador reemplaza al hilo dental?",
        a: "No lo reemplaza. La evidencia lo respalda como complemento: ayuda especialmente en pacientes con ortodoncia, implantes o puentes, pero la limpieza mecánica del espacio interdental sigue siendo necesaria.",
    },
    {
        q: "¿Qué cepillo conviene si tengo carillas o coronas?",
        a: "Un cepillo eléctrico con cerdas suaves y presión controlada, más limpieza interdental diaria. Lo determinante para la duración de una restauración no es la marca del cepillo, sino la salud del margen gingival y el mantenimiento periódico.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
};

export default function BlogCepilloDyson() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">
                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute right-0 top-[20%] w-[420px] h-[420px] rounded-full bg-oro/4 blur-[140px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Higiene y tecnología</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Cepillo eléctrico Dyson de US$500:{" "}
                            <span className="font-cormorant italic text-oro">la opinión de un odontólogo</span>
                        </h1>

                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            Cámara adentro de la boca, detección asistida por inteligencia artificial y chorro de enjuague, todo en un mismo cepillo. Es el más caro que se haya lanzado. Lo analizo función por función: qué aporta de verdad a tu higiene y qué todavía no está demostrado.
                        </p>

                        <div className="flex items-center gap-6 text-crema/35 font-manrope text-xs">
                            <span>Dr. Ariel Merino</span>
                            <span>·</span>
                            <span>AM Estética Dental, Puerto Madero</span>
                            <span>·</span>
                            <span>6 min de lectura</span>
                        </div>
                    </div>
                </section>

                {/* ── VIDEO ── */}
                <section className="px-6 md:px-12 pb-16">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative w-full overflow-hidden rounded-2xl border border-oro/15 bg-carbon-soft" style={{ aspectRatio: "16 / 9" }}>
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/${VIDEO.id}`}
                                title={VIDEO.titulo}
                                loading="lazy"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                        <p className="text-crema/35 font-manrope text-xs mt-3">
                            Análisis en video del Dr. Ariel Merino ·{" "}
                            <a href={`https://www.youtube.com/watch?v=${VIDEO.id}`} target="_blank" rel="noopener noreferrer" className="text-oro/60 hover:text-oro transition-colors">
                                Ver en YouTube →
                            </a>
                        </p>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Dyson fabrica aspiradoras, secadores y purificadores de aire. Que entre en odontología no era esperable, y que lo haga con un dispositivo de este precio lo convirtió en noticia de tecnología antes que de salud. Pero hay una función acá que sí merece atención clínica, y no es la que más se comentó.
                            </p>
                        </div>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Qué hace, función por función
                            </h2>
                            <div className="space-y-5">
                                {FUNCIONES.map((f) => (
                                    <div key={f.titulo} className="border border-oro/12 rounded-2xl p-6 bg-carbon-soft">
                                        <h3 className="text-crema font-manrope font-medium text-sm mb-3">{f.titulo}</h3>
                                        <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-3">{f.descripcion}</p>
                                        <p className="text-crema/45 font-manrope text-xs leading-relaxed">{f.detalle}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Lo más útil no es la inteligencia artificial: es poder ver
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                En el consultorio veo el mismo patrón todos los días. El paciente controla frente al espejo los dientes de adelante, los que se ven al sonreír. Los molares de atrás, las últimas dos o tres piezas de cada lado, prácticamente nunca se miran. Y es justamente ahí donde la higiene falla, donde aparece la caries que nadie vio venir y donde se instala la inflamación de la encía.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Una cámara que te devuelve esa zona a la pantalla del teléfono cambia la naturaleza del hábito. Deja de ser un gesto automático y a ciegas para convertirse en algo que podés verificar. Es el mismo principio de las pastillas reveladoras de placa que usamos hace décadas, pero disponible todos los días, sin tinción y con la zona que nunca mirás.
                            </p>
                            <div className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    <span className="text-oro font-medium">El punto clave:</span> el valor real del dispositivo es educativo antes que mecánico. No te limpia mejor por tener cámara. Te muestra dónde estás limpiando mal, y eso sí puede mejorar tu técnica de forma sostenida.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Qué respalda la evidencia y qué todavía no
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="border border-oro/12 rounded-2xl p-6 bg-carbon-soft">
                                    <span className="text-oro/60 font-manrope uppercase tracking-[0.25em] text-[10px] block mb-4">Con respaldo</span>
                                    <div className="space-y-3">
                                        {SI_RESPALDA.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro/35">—</span>
                                                <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="border border-oro/12 rounded-2xl p-6">
                                    <span className="text-oro/60 font-manrope uppercase tracking-[0.25em] text-[10px] block mb-4">Todavía sin demostrar</span>
                                    <div className="space-y-3">
                                        {NO_RESPALDA.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro/35">—</span>
                                                <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mt-6">
                                La detección de placa por cámara con asistencia algorítmica es una tecnología plausible, no una tecnología probada. Todavía no hay estudios clínicos independientes que muestren una mejora medible en índices de placa o sangrado a mediano plazo. Eso no la descalifica: la ubica donde corresponde.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Si tenés carillas, coronas o implantes
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Acá el tema cambia de escala. La duración de una restauración estética depende mucho menos del cepillo que elijas que de la salud del tejido que la rodea. Un margen gingival inflamado compromete el resultado de unas{" "}
                                <Link href="/carillas-dentales" className="text-oro hover:text-oro-light transition-colors">carillas dentales</Link> tanto como una cerámica mal indicada.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Lo mismo vale para{" "}
                                <Link href="/coronas-y-fundas-dentales" className="text-oro hover:text-oro-light transition-colors">coronas</Link> y para{" "}
                                <Link href="/implantes-dentales-buenos-aires" className="text-oro hover:text-oro-light transition-colors">implantes dentales</Link>: alrededor de un implante no hay ligamento periodontal, y la respuesta del tejido a la acumulación de placa es más rápida y menos indulgente que en un diente natural. En esos casos el irrigador sí suma como complemento, y el control profesional periódico deja de ser opcional.
                            </p>
                            <div className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    Cerdas suaves, presión controlada y limpieza interdental diaria. Ese trío protege una restauración mucho más que cualquier función adicional del dispositivo.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Entonces, ¿hay que gastar US$500?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Honestamente, no hace falta. Un cepillo eléctrico de gama media, usado con buena técnica y acompañado de hilo o cepillos interdentales, te da la mayor parte del beneficio a una fracción del costo. Nadie desarrolla enfermedad periodontal por no tener cámara en el cepillo.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Dicho eso: si el dinero no es tu limitación y la salud bucal es una prioridad, es un producto que tiene sentido y que yo mismo probaría. La función de la cámara resuelve un problema real de la higiene doméstica, y eso no es poco en una categoría que llevaba años sin novedades de fondo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Preguntas frecuentes
                            </h2>
                            <div className="space-y-4">
                                {FAQ.map((item) => (
                                    <div key={item.q} className="border border-oro/12 rounded-2xl p-6 bg-carbon-soft">
                                        <h3 className="text-crema font-manrope font-medium text-sm mb-3">{item.q}</h3>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="border-t border-oro/15 pt-10">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">La conclusión</h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                El cepillo de Dyson marca algo más interesante que su propio precio: la higiene doméstica empieza a incorporar instrumentación que hasta ahora era exclusiva del consultorio. Esa frontera es la noticia.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Lo que no cambia es el fondo. El mejor cepillo sigue siendo el que usás bien, dos veces por día, con limpieza interdental y controles periódicos. Ningún dispositivo, por sofisticado que sea, sustituye eso.
                            </p>
                        </section>

                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Querés saber cómo está tu higiene de verdad?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Evaluamos tu caso y tu técnica en consultorio
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                Escribinos por WhatsApp. Vemos el estado de tus encías, la técnica de cepillado que estás usando y qué mantenimiento necesita tu boca según lo que tengas hecho.
                            </p>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Consultar por WhatsApp →
                            </a>
                        </section>

                        <section>
                            <span className="text-oro/50 font-manrope uppercase tracking-[0.3em] text-xs block mb-5">Seguir leyendo</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        titulo: "Cómo blanquear los dientes sin dañar el esmalte",
                                        href: "/blog/como-blanquear-los-dientes-sin-danar-el-esmalte",
                                        desc: "Qué funciona, qué da sensibilidad y qué no blanquea nunca.",
                                    },
                                    {
                                        titulo: "¿Cuánto duran las carillas de porcelana?",
                                        href: "/blog/cuanto-duran-las-carillas-de-porcelana",
                                        desc: "Qué las desgasta y cómo el mantenimiento diario extiende su vida útil.",
                                    },
                                ].map((link) => (
                                    <Link key={link.href} href={link.href} className="border border-oro/12 rounded-xl p-5 bg-carbon-soft hover:border-oro/30 transition-colors group">
                                        <h4 className="text-crema font-manrope font-medium text-sm mb-1 group-hover:text-oro transition-colors">{link.titulo}</h4>
                                        <p className="text-crema/45 font-manrope text-xs">{link.desc}</p>
                                        <span className="text-oro/35 group-hover:text-oro text-sm mt-2 block transition-colors">→</span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                </article>
            </main>
        </>
    );
}
