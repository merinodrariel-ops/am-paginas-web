import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://amesteticadental.com"),
    title: "Carillas de Porcelana: Antes y Después — Qué casos resuelven y cuáles no | AM Estética Dental",
    description: "Casos reales de AM Estética Dental con carillas de porcelana. Para qué sirven, para qué no, y cómo saber si sos candidato antes de ir al consultorio.",
    alternates: {
        canonical: "https://amesteticadental.com/blog/carillas-porcelana-antes-despues",
    },
    openGraph: {
        title: "Carillas de Porcelana: Antes y Después",
        description: "Qué problemas resuelven las carillas y cuáles no. Casos reales del Dr. Ariel Merino en AM Estética Dental, Puerto Madero.",
        url: "https://amesteticadental.com/blog/carillas-porcelana-antes-despues",
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Carillas de Porcelana: Antes y Después — Qué casos resuelven y cuáles no",
    "description": "Análisis clínico de los casos más frecuentes tratados con carillas de porcelana en AM Estética Dental, Buenos Aires.",
    "author": {
        "@type": "Person",
        "name": "Dr. Ariel Merino",
        "url": "https://www.wikidata.org/wiki/Q138828257",
        "jobTitle": "Odontólogo Estético",
    },
    "publisher": {
        "@type": "Organization",
        "name": "AM Estética Dental",
        "url": "https://amesteticadental.com",
    },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30",
    "mainEntityOfPage": "https://amesteticadental.com/blog/carillas-porcelana-antes-despues",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Vi%20los%20casos%20y%20me%20gustar%C3%ADa%20saber%20si%20soy%20candidato%20para%20carillas.";

const CASOS_IDEALES = [
    {
        caso: "Manchas que no responden al blanqueamiento",
        detalle: "Tinciones intrínsecas por tetraciclina, flúor (fluorosis) o dientes que perdieron vitalidad tras un tratamiento de conducto. El blanqueamiento no puede modificar estas manchas porque están dentro del esmalte o la dentina. Las carillas las cubren completamente.",
        resultado: "Dientes uniformes en color sin rastro de tinción",
    },
    {
        caso: "Diastema (espacio entre los dientes frontales)",
        detalle: "El espacio entre los incisivos centrales es uno de los casos más frecuentes. Con carillas se puede cerrar el espacio visualmente sin mover los dientes. El diseño tiene que ser cuidadoso para que las proporciones queden naturales.",
        resultado: "Sonrisa continua sin espacio visible",
    },
    {
        caso: "Dientes pequeños o con forma irregular",
        detalle: "Dientes laterales cónicos (en forma de estaca), incisivos centrales más cortos de lo ideal, bordes incisales desgastados por bruxismo. Las carillas permiten redefinir completamente la forma.",
        resultado: "Forma natural acorde a los rasgos faciales",
    },
    {
        caso: "Fracturas o bordes irregulares",
        detalle: "Fracturas superficiales, bordes dentados por desgaste o impacto. Siempre que la fractura no comprometa la estructura del diente, una carilla resuelve la apariencia y protege el área afectada.",
        resultado: "Borde incisal uniforme y sin irregularidades",
    },
    {
        caso: "Erosión del esmalte",
        detalle: "El esmalte se adelgaza con el tiempo por bruxismo, reflujo gástrico o dieta ácida. Los dientes se ven más cortos, amarillentos y transparentes en el borde. Las carillas restauran el volumen y el color.",
        resultado: "Dientes con volumen y opacidad restaurados",
    },
    {
        caso: "Corrección de color para toda la sonrisa",
        detalle: "Cuando el blanqueamiento no alcanza el resultado esperado o el paciente quiere un blanco más específico que el blanqueamiento no puede garantizar. Las carillas permiten elegir exactamente el tono y la translucidez.",
        resultado: "Color uniforme y controlado en toda la sonrisa",
    },
];

const CASOS_NO_IDEALES = [
    {
        caso: "Apiñamiento dental severo",
        detalle: "Cuando los dientes están muy desplazados de su posición, las carillas pueden mejorar la apariencia pero no reemplazan la ortodoncia. En casos extremos, forzar el resultado con carillas sobre dientes muy apiñados produce un resultado antinatural.",
        alternativa: "Ortodoncia primero, carillas después para el acabado estético",
    },
    {
        caso: "Problemas de mordida activos",
        detalle: "Mordida cruzada, mordida abierta severa o mordida profunda extrema generan fuerzas sobre las carillas que no están diseñadas para soportar. El resultado va a fallar antes.",
        alternativa: "Corrección funcional de la mordida antes del tratamiento estético",
    },
    {
        caso: "Caries activas o enfermedad periodontal",
        detalle: "No se puede hacer estética sobre un diente o encía enferma. Cualquier patología activa tiene prioridad clínica sobre el tratamiento estético.",
        alternativa: "Resolver la patología activa, luego proceder con las carillas",
    },
    {
        caso: "Muy poco esmalte disponible",
        detalle: "Si el diente ya tuvo trabajos previos extensos o el esmalte está muy comprometido, la adhesión de la carilla no va a ser óptima. En estos casos, una corona puede ser la indicación correcta.",
        alternativa: "Corona de porcelana o zirconio",
    },
];

export default function ArticuloCarillasAntesDespues() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute right-0 top-[20%] w-[500px] h-[400px] rounded-full bg-oro/4 blur-[130px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Casos</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Carillas de porcelana:{" "}
                            <span className="font-cormorant italic text-oro">qué casos resuelven y cuáles no</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            Las carillas son el tratamiento estético más versátil de la odontología. Pero no son la solución para todo. Acá explicamos exactamente para qué sirven, para qué no, y cómo evaluás si sos candidato.
                        </p>
                        <div className="flex items-center gap-6 text-crema/35 font-manrope text-xs">
                            <span>Dr. Ariel Merino</span>
                            <span>·</span>
                            <span>AM Estética Dental, Puerto Madero</span>
                            <span>·</span>
                            <span>7 min de lectura</span>
                        </div>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Las carillas de porcelana pueden transformar una sonrisa de forma radical. Pero esa capacidad de transformación tiene límites clínicos que es importante entender antes de empezar. El objetivo de este artículo es que llegues a la primera consulta con una idea clara de si tu problema tiene solución con carillas.
                            </p>
                        </div>

                        {/* Casos ideales */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Los 6 casos que las carillas resuelven muy bien
                            </h2>
                            <div className="space-y-5">
                                {CASOS_IDEALES.map((item, i) => (
                                    <div key={i} className="border border-oro/12 rounded-2xl overflow-hidden">
                                        <div className="p-6 bg-carbon-soft">
                                            <div className="flex items-start gap-4">
                                                <span className="text-oro/35 font-manrope text-sm font-medium flex-none w-6 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                                                <h3 className="text-crema font-manrope font-medium text-base">{item.caso}</h3>
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 border-t border-oro/8 space-y-3">
                                            <p className="text-crema/65 font-manrope text-sm leading-relaxed">{item.detalle}</p>
                                            <div className="flex items-start gap-2 pt-1">
                                                <span className="text-oro/50 font-manrope text-xs flex-none">Resultado esperado:</span>
                                                <span className="text-oro font-manrope text-xs">{item.resultado}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Link a casos reales */}
                        <div className="border border-oro/20 rounded-xl p-6 bg-carbon-soft">
                            <p className="text-crema/70 font-manrope text-sm leading-relaxed mb-4">
                                En la sección de <strong className="text-crema font-medium">Casos Reales</strong> del sitio podés ver el antes y después de pacientes reales tratados en AM Estética Dental. Todas las fotos tienen watermark @drarielmerino — no son imágenes de stock.
                            </p>
                            <Link href="/#casos" className="text-oro font-manrope text-sm hover:text-oro-light transition-colors">
                                Ver casos reales →
                            </Link>
                        </div>

                        {/* Casos no ideales */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Casos donde las carillas no son la primera indicación
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-8">
                                Parte de la ética clínica es decir cuándo algo no es lo más adecuado. En estos casos, las carillas pueden no ser el primer paso — o no ser la solución correcta:
                            </p>
                            <div className="space-y-5">
                                {CASOS_NO_IDEALES.map((item, i) => (
                                    <div key={i} className="border border-red-800/20 rounded-xl p-6 bg-red-950/5">
                                        <h3 className="text-crema font-manrope font-medium text-sm mb-2">{item.caso}</h3>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed mb-3">{item.detalle}</p>
                                        <div className="flex items-start gap-2">
                                            <span className="text-oro/50 font-manrope text-xs flex-none">Alternativa:</span>
                                            <span className="text-crema/60 font-manrope text-xs">{item.alternativa}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Cómo saber */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Cómo saber si sos candidato antes de ir al consultorio
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Hay señales claras que te indican que probablemente las carillas sean una buena opción para tu caso:
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Tus dientes están más o menos en su posición pero te molesta el color, la forma o el tamaño",
                                    "El blanqueamiento no resuelve el tono que querés lograr",
                                    "Tenés uno o más dientes fracturados o con bordes irregulares",
                                    "Tus encías están sanas y no tenés caries activas",
                                    "Querés un resultado definitivo, no un retoque que dure 2 años",
                                ].map((p, i) => (
                                    <div key={i} className="flex items-start gap-4 py-3 border-b border-oro/8 last:border-0">
                                        <span className="text-oro/50 font-manrope text-sm flex-none mt-0.5">→</span>
                                        <p className="text-crema/70 font-manrope text-sm leading-relaxed">{p}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="border-t border-oro/15 pt-10">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">En resumen</h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Las carillas de porcelana son la solución más versátil para cambios estéticos definitivos. Manchas, forma, tamaño, pequeñas posiciones — todo eso lo resuelven con resultado de 10 a 20 años. Lo que no reemplazan es la ortodoncia para problemas de posición severos ni el tratamiento de patologías activas. La evaluación inicial sirve exactamente para determinar en qué categoría está tu caso.
                            </p>
                        </section>

                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Tu caso entra en la lista?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Mandanos fotos y evaluamos tu caso
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                Con fotos de frente y de perfil podemos hacer una evaluación preliminar y decirte si las carillas son la indicación correcta para tu caso.
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
                                    { titulo: "¿Las carillas dañan los dientes?", href: "/blog/las-carillas-danan-los-dientes", desc: "Mitos y realidades sobre el desgaste de esmalte." },
                                    { titulo: "Diseño de sonrisa digital: cómo funciona", href: "/blog/diseno-de-sonrisa-digital-como-funciona", desc: "El proceso completo antes de empezar." },
                                ].map((l) => (
                                    <Link key={l.href} href={l.href} className="border border-oro/12 rounded-xl p-5 bg-carbon-soft hover:border-oro/30 transition-colors group">
                                        <h4 className="text-crema font-manrope font-medium text-sm mb-1 group-hover:text-oro transition-colors">{l.titulo}</h4>
                                        <p className="text-crema/45 font-manrope text-xs">{l.desc}</p>
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
