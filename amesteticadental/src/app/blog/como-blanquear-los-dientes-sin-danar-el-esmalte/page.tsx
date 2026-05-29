import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/blog/como-blanquear-los-dientes-sin-danar-el-esmalte";
const WA_LINK = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20c%C3%B3mo%20blanquear%20los%20dientes%20sin%20da%C3%B1ar%20el%20esmalte%20y%20quiero%20consultar%20mi%20caso.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Cómo blanquear los dientes sin dañar el esmalte | AM Estética Dental",
    description: "Guía clara sobre blanqueamiento dental profesional: cómo funciona, cuándo da sensibilidad, qué no blanquea y qué cuidados seguir para proteger el esmalte.",
    alternates: {
        canonical: CANONICAL,
    },
    openGraph: {
        title: "Cómo blanquear los dientes sin dañar el esmalte",
        description: "Lo que un paciente debería saber antes de hacerse un blanqueamiento dental: tipos, sensibilidad, dieta blanca y límites reales del tratamiento.",
        url: CANONICAL,
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo blanquear los dientes sin dañar el esmalte",
    description: "Guía clínica para entender cómo funciona el blanqueamiento dental profesional, qué cuidados requiere y cómo evitar errores comunes.",
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
    datePublished: "2026-05-02",
    dateModified: "2026-05-02",
    mainEntityOfPage: CANONICAL,
};

const TIPOS = [
    {
        titulo: "En clínica",
        descripcion: "Se realiza con geles de mayor concentración activados bajo protocolo profesional. Suele dar un cambio visible en una sola sesión.",
        detalle: "Ideal cuando el paciente quiere un resultado rápido antes de un evento o parte de una rutina de estética dental supervisada.",
    },
    {
        titulo: "Domiciliario con férulas",
        descripcion: "Usa geles de menor concentración en férulas hechas a medida. El cambio es más progresivo y se desarrolla a lo largo de varios días o semanas.",
        detalle: "Suele ser cómodo para mantenimiento o para pacientes que prefieren un proceso más gradual.",
    },
    {
        titulo: "Combinado",
        descripcion: "Une una sesión en clínica con continuidad en casa. Es una de las formas más completas de lograr un resultado parejo y más duradero.",
        detalle: "Suele ser la mejor indicación cuando se busca maximizar resultado y estabilidad en el tiempo.",
    },
    {
        titulo: "Interno",
        descripcion: "Se reserva para dientes con endodoncia que se oscurecieron desde adentro. No aplica a dientes vitales normales.",
        detalle: "Requiere diagnóstico específico y planificación distinta al blanqueamiento convencional.",
    },
];

const PROHIBIDOS = [
    "Café, té, mate y vino tinto",
    "Salsas rojas, kétchup y mostaza",
    "Chocolate, remolacha, frutillas y alimentos con mucho pigmento",
    "Tabaco durante el tratamiento y las 48-72 horas posteriores",
    "Kits de internet o remedios caseros sin control profesional",
];

const SI_PERMITE = [
    "Agua",
    "Pollo, pescado, arroz y papas",
    "Lácteos claros y salsas blancas",
    "Higiene oral rigurosa y controles profesionales",
    "Retoques de mantenimiento cuando el caso lo pide",
];

export default function BlogBlanqueamientoEsmalte() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">
                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute right-0 top-[20%] w-[420px] h-[420px] rounded-full bg-oro/4 blur-[140px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Blanqueamiento</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Cómo blanquear los dientes{" "}
                            <span className="font-cormorant italic text-oro">sin dañar el esmalte</span>
                        </h1>

                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            Es uno de los miedos más comunes antes de hacerse un blanqueamiento. La respuesta corta es que sí se puede hacer de forma segura, pero no con cualquier producto, no en cualquier boca y no de cualquier manera.
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
                                En redes sociales suele parecer que blanquearse es una compra impulsiva: un gel, una luz azul y listo. En clínica real no funciona así. El objetivo no es llevar el diente a un blanco artificial, sino aclararlo de manera controlada, respetando la estructura dental y la salud de las encías.
                            </p>
                        </div>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Lo primero: el color natural del diente no es blanco papel
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                El tono natural de los dientes suele ser hueso o ligeramente amarillento. Eso no significa suciedad ni enfermedad. De hecho, muchas veces ese fondo amarillento viene de la dentina, que forma parte de la anatomía normal del diente.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Por eso, cuando alguien busca un blanco extremo visto en filtros o en ciertas sonrisas de redes, conviene frenar y recalibrar expectativas. Un buen blanqueamiento mejora el tono. No convierte todos los dientes en una lámina blanca idéntica.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Cómo funciona el blanqueamiento dental profesional
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                El blanqueamiento no &quot;lija&quot; el esmalte ni cambia la forma del diente. Funciona a través de una reacción química controlada con peróxido de hidrógeno o peróxido de carbamida. Estos agentes penetran esmalte y dentina, oxidan las moléculas pigmentadas y las vuelven más claras.
                            </p>
                            <div className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    <span className="text-oro font-medium">La clave:</span> cuando el procedimiento está bien indicado y supervisado, el objetivo es aclarar pigmentos, no desgastar estructura. El problema no suele ser el blanqueamiento profesional. El problema es improvisar con concentraciones, productos o diagnósticos incorrectos.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Qué opciones existen hoy
                            </h2>
                            <div className="space-y-5">
                                {TIPOS.map((tipo) => (
                                    <div key={tipo.titulo} className="border border-oro/12 rounded-2xl p-6 bg-carbon-soft">
                                        <h3 className="text-crema font-manrope font-medium text-sm mb-3">{tipo.titulo}</h3>
                                        <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-3">{tipo.descripcion}</p>
                                        <p className="text-crema/45 font-manrope text-xs leading-relaxed">{tipo.detalle}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mt-6">
                                Si querés ver valores orientativos y diferencias de enfoque entre LED, láser y combinado, lo desarrollamos aparte en nuestra guía de <Link href="/blanqueamiento-dental-precio-buenos-aires" className="text-oro hover:text-oro-light transition-colors">precio de blanqueamiento dental en Buenos Aires</Link>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Entonces, ¿por qué a veces da sensibilidad?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                La sensibilidad postoperatoria es el efecto secundario más frecuente. Suele sentirse como un pinchazo transitorio, sobre todo con frío, durante las primeras horas o el primer par de días. Esto ocurre porque el peróxido puede estimular los túbulos dentinarios y, a través de ellos, activar la respuesta nerviosa del diente.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Eso no significa que el diente se haya dañado. Significa que hubo una respuesta esperable del tejido dental. En protocolos serios, esa molestia se previene o se reduce con agentes desensibilizantes como nitrato de potasio, flúor o compuestos que ayudan a sellar los túbulos expuestos.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="border border-oro/15 rounded-xl p-5">
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2">Lo esperable</h3>
                                    <p className="text-crema/60 font-manrope text-xs leading-relaxed">Sensibilidad reversible, controlada y de corta duración.</p>
                                </div>
                                <div className="border border-oro/15 rounded-xl p-5">
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2">Lo que hay que evitar</h3>
                                    <p className="text-crema/60 font-manrope text-xs leading-relaxed">Usar productos de alta concentración sin evaluación previa ni protección gingival.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Qué no blanquea, aunque mucha gente lo crea
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                El blanqueamiento actúa sobre diente natural. No cambia el color de carillas, coronas, resinas ni empastes viejos. Esto es importante porque muchas veces el paciente aclara los dientes y después nota que una restauración previa quedó despareja.
                            </p>
                            <div className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    Si estás pensando en hacerte <Link href="/carillas-dentales" className="text-oro hover:text-oro-light transition-colors">carillas dentales</Link>, el orden correcto suele ser primero blanquear, después esperar entre 7 y 14 días para que el color se estabilice, y recién ahí elegir el tono definitivo de las restauraciones.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                La dieta blanca no es un capricho
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Durante el tratamiento y al menos las 48 a 72 horas posteriores, el diente queda más susceptible a volver a captar pigmentos. Por eso se recomienda la llamada dieta blanca: bajar al mínimo alimentos y bebidas con color intenso mientras el tono se estabiliza.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="border border-oro/12 rounded-2xl p-6">
                                    <span className="text-oro/60 font-manrope uppercase tracking-[0.25em] text-[10px] block mb-4">Evitar</span>
                                    <div className="space-y-3">
                                        {PROHIBIDOS.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro/35">—</span>
                                                <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="border border-oro/12 rounded-2xl p-6 bg-carbon-soft">
                                    <span className="text-oro/60 font-manrope uppercase tracking-[0.25em] text-[10px] block mb-4">Sí conviene</span>
                                    <div className="space-y-3">
                                        {SI_PERMITE.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro/35">—</span>
                                                <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Cuándo no conviene improvisar con un kit casero
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                El mayor error es asumir que todos los dientes manchados se blanquean igual. No es lo mismo una tinción por café que una pigmentación interna, una mancha por tetraciclinas o un diente con endodoncia. Tampoco es lo mismo una boca sana que una con caries activas, restauraciones filtradas o encías inflamadas.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Antes de blanquear, corresponde evaluar el caso y hacer una limpieza profesional. Eso permite remover sarro o manchas superficiales, detectar límites del tratamiento y decidir si realmente conviene blanquear o si otra solución estética va a dar un resultado más estable.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Cuánto dura el resultado
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                El resultado no es permanente. Según el método elegido y los hábitos del paciente, puede durar desde varios meses hasta algunos años. Café, vino, mate, tabaco y falta de mantenimiento aceleran el reoscurecimiento.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                La buena noticia es que los retoques suelen ser más simples y económicos que el tratamiento inicial. Lo importante es no perseguir un blanco irreal, sino un tono más luminoso, natural y sostenible en el tiempo.
                            </p>
                        </section>

                        <section className="border-t border-oro/15 pt-10">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">La conclusión</h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Blanquear los dientes sin dañar el esmalte sí es posible cuando el tratamiento está bien indicado, se hace con productos adecuados y hay supervisión profesional. La estructura del diente no se protege con hacks de internet. Se protege con diagnóstico, protocolo y mantenimiento.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Si además tenés restauraciones previas, sensibilidad, manchas profundas o estás pensando combinar blanqueamiento con carillas, la planificación importa todavía más. Ahí es donde una consulta seria evita errores y te da un resultado más predecible.
                            </p>
                        </section>

                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Querés saber qué opción aplica para tu caso?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Te orientamos antes de que tomes una decisión
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                Escribinos por WhatsApp. Vemos si conviene blanqueamiento, qué tipo de protocolo puede servirte y qué resultado realista podés esperar según tu sonrisa actual.
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
                                        titulo: "Blanqueamiento dental: precio en Buenos Aires",
                                        href: "/blanqueamiento-dental-precio-buenos-aires",
                                        desc: "Tipos de blanqueamiento, diferencias y valores orientativos.",
                                    },
                                    {
                                        titulo: "Sonrisa natural vs sonrisa Hollywood",
                                        href: "/blog/sonrisa-natural-vs-hollywood",
                                        desc: "Qué resultado conviene buscar si querés estética sin exageración.",
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
