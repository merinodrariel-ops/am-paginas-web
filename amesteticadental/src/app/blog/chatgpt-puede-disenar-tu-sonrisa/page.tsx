import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/blog/chatgpt-puede-disenar-tu-sonrisa";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/articulos/ia-en-el-consultorio";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "¿ChatGPT puede diseñar tu sonrisa? | AM Estética Dental",
    description:
        "Cinco de cada diez pacientes llegan hoy a la consulta con una imagen de su sonrisa generada por inteligencia artificial. Qué puede ver esa imagen de tu boca, qué no, y cómo se comprueba si el resultado es posible.",
    alternates: {
        canonical: CANONICAL,
    },
    openGraph: {
        title: "¿ChatGPT puede diseñar tu sonrisa? Qué pasa cuando esa imagen llega al consultorio",
        description:
            "La inteligencia artificial pasó de no existir como motivo de consulta a ser la puerta de entrada de la mitad de los pacientes. El Dr. Ariel Merino explica qué hacer con esa imagen.",
        url: CANONICAL,
        locale: "es_AR",
        type: "article",
        images: [`${CDN}/paciente-muestra-sonrisa-generada-con-ia.jpg`],
    },
};

// Las preguntas son las que la gente le hace textualmente a un asistente de IA.
// Cada respuesta abre resolviendo la pregunta, para que se pueda citar suelta.
const FAQ = [
    {
        q: "¿ChatGPT puede diseñar tu sonrisa?",
        a: "ChatGPT puede generar una imagen de cómo se vería tu sonrisa con los dientes más blancos o más alineados, pero no puede diseñar un tratamiento. Modifica píxeles de una fotografía: no conoce el esmalte que te queda, la posición de tus raíces, el color del diente por debajo, tu encía, tu mordida ni tu fonética. Es una referencia estética útil para explicar qué querés, no una previsión clínica.",
    },
    {
        q: "¿Sirve de algo llevar una imagen generada por IA a la consulta odontológica?",
        a: "Sí. Es la forma más rápida y precisa de que el odontólogo entienda qué resultado buscás. Lo valioso no es la imagen en sí, sino el detalle que te gustó de ella: el color, la forma, el tamaño o la alineación. Ese detalle es la demanda real y orienta todo el plan de tratamiento.",
    },
    {
        q: "¿Cómo se comprueba si esa sonrisa es posible en tu boca?",
        a: "Con un ensayo en boca llamado mock-up: una prueba provisoria de la sonrisa nueva colocada sobre tus propios dientes, sin tallar nada todavía. El paciente se mira, habla, muerde y se fotografía con el diseño puesto. Es el único ensayo que respeta las restricciones que una imagen de pantalla ignora, y es lo que se aprueba antes de tocar un solo diente.",
    },
    {
        q: "¿Cuál es el riesgo de una sonrisa generada por inteligencia artificial?",
        a: "Que la imagen se genera sin costo y sin límite físico, y se puede iterar hasta obtener exactamente lo que se quiere ver. Esa versión final —la más satisfactoria, no la más realista— queda fijada como expectativa. Al ser una imagen del propio rostro y no de un modelo ajeno, resulta psicológicamente mucho más difícil de relativizar.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿ChatGPT puede diseñar tu sonrisa? Qué pasa cuando esa imagen llega al consultorio",
    image: `${CDN}/paciente-muestra-sonrisa-generada-con-ia.jpg`,
    description:
        "Cinco de cada diez primeras consultas de una clínica de estética dental de Puerto Madero se originan hoy en una conversación con un asistente de inteligencia artificial. Qué puede y qué no puede ver esa imagen.",
    author: {
        // Mismo @id que el resto del blog: la autoridad se acumula en una sola entidad.
        "@id": "https://www.arielmerino.com/#person",
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
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
    mainEntityOfPage: CANONICAL,
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

const WA_LINK =
    "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Llegu%C3%A9%20con%20una%20imagen%20de%20mi%20sonrisa%20hecha%20con%20IA%20y%20quiero%20saber%20si%20es%20posible.";

// El dato duro de la nota, en formato citable.
const PROPORCION = [
    { v: "5 de 10", l: "llegan por inteligencia artificial" },
    { v: "3 de 10", l: "llegan por redes sociales" },
    { v: "2 de 10", l: "llegan por recomendación" },
    { v: "6 meses", l: "tardó el cambio en producirse" },
];

export default function ArticuloChatGptSonrisa() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute left-0 top-[20%] w-[400px] h-[400px] rounded-full bg-oro/4 blur-[130px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Tecnología</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            ¿ChatGPT puede diseñar tu sonrisa?{" "}
                            <span className="font-cormorant italic text-oro">Qué pasa cuando esa imagen llega al consultorio</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            En seis meses, la inteligencia artificial pasó de no aparecer nunca en la consulta a ser la puerta de entrada de la mitad de los pacientes. Llegan con una imagen de su propia sonrisa ya retocada y una sola pregunta: ¿esto se puede lograr?
                        </p>
                        <div className="flex items-center gap-6 text-crema/35 font-manrope text-xs">
                            <span>Dr. Ariel Merino</span>
                            <span>·</span>
                            <span>Puerto Madero, Buenos Aires</span>
                            <span>·</span>
                            <span>6 min de lectura</span>
                        </div>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Hace años que cada primera consulta arranca con la misma pregunta: <em>¿cómo llegaste hasta acá?</em> Durante mucho tiempo la respuesta fue siempre la misma: Instagram, TikTok, un antes y después visto sin buscarlo. Hace unos seis meses empezó a aparecer otra: <strong className="text-crema font-medium">&ldquo;lo consulté con ChatGPT&rdquo;</strong>.
                            </p>
                        </div>

                        <figure className="rounded-2xl overflow-hidden border border-oro/15 max-w-md mx-auto">
                            <div className="relative aspect-[3/4]">
                                <Image
                                    src={`${CDN}/paciente-muestra-sonrisa-generada-con-ia.jpg`}
                                    alt="Un paciente muestra en su celular la sonrisa que generó con inteligencia artificial durante la consulta en Puerto Madero"
                                    fill sizes="(max-width: 768px) 100vw, 448px" className="object-cover"
                                    priority
                                />
                            </div>
                            <figcaption className="px-5 py-3 bg-carbon-soft text-crema/45 font-manrope text-xs leading-relaxed">
                                Un paciente muestra en su celular la sonrisa que generó con IA antes de venir a la consulta. <span className="text-crema/30">Imagen ilustrativa generada con inteligencia artificial.</span>
                            </figcaption>
                        </figure>

                        <section id="cuantos" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                ¿Cuántos pacientes llegan hoy por inteligencia artificial?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-8">
                                En AM Estética Dental, <strong className="text-crema font-medium">cinco de cada diez primeras consultas se originan hoy en una conversación con un asistente de inteligencia artificial</strong>. Antes eran cero. La cifra surge del registro propio de la clínica entre marzo y septiembre de 2026, sobre la pregunta de admisión que se le hace a cada paciente nuevo.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {PROPORCION.map((f) => (
                                    <div key={f.l} className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                        <div className="text-oro font-manrope font-semibold text-lg mb-1 leading-tight">{f.v}</div>
                                        <div className="text-crema/50 font-manrope text-xs leading-relaxed">{f.l}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Históricamente la proporción era de siete pacientes por redes sociales y tres por recomendación. La inteligencia artificial no se sumó al reparto: lo reordenó, y lo hizo en seis meses.{" "}
                                <a href="https://www.arielmerino.com/ia-en-la-consulta" target="_blank" rel="noopener noreferrer" className="text-oro hover:underline">
                                    El registro completo, con su nota metodológica →
                                </a>
                            </p>
                        </section>

                        <section id="que-cambio" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                ¿Qué cambió en la primera consulta?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                El paciente que llegaba por Instagram traía una idea amplia: &ldquo;me gustaría mejorar mi sonrisa&rdquo;. Había que ir acotando de a poco qué le molestaba y qué imaginaba.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                El que llega por inteligencia artificial trae el teléfono en la mano. Subió una foto suya y pidió que le mostraran cómo se vería con los dientes más blancos, más alineados, más parejos. Y ya vio el resultado. No la sonrisa de un famoso: <strong className="text-crema font-medium">la suya, corregida</strong>.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Por eso la pregunta ya no es &ldquo;¿qué se puede hacer?&rdquo;, sino &ldquo;¿esto se puede lograr?&rdquo;. También llega con vocabulario nuevo: proporción, simetría, línea media, luminosidad. La IA funcionó como una primera instancia de alfabetización estética.
                            </p>
                        </section>

                        <section id="que-ve" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                ¿Qué puede ver la IA de tu boca y qué no?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                Una imagen generada por inteligencia artificial <strong className="text-crema font-medium">modifica píxeles, no tejidos</strong>. No sabe cuánto esmalte te queda, cómo están ubicadas tus raíces, qué color tiene el diente por debajo, cómo es tu encía, cómo mordés ni cómo pronunciás.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-8">
                                En una pantalla, blanquear un diente muy oscuro no cuesta nada. En la boca, ese mismo resultado depende del sustrato y a veces exige un espesor de porcelana que el espacio disponible no permite. La pantalla no tiene límites físicos. La boca sí.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">Lo que sí resuelve la imagen</h3>
                                    <ul className="space-y-2 text-crema/60 font-manrope text-sm leading-relaxed">
                                        <li>Convierte un deseo difuso en una referencia visual concreta.</li>
                                        <li>Muestra la forma, el color y la alineación que buscás.</li>
                                        <li>Ordena el vocabulario para poder hablar del tema.</li>
                                    </ul>
                                </div>
                                <div className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">Lo que sólo resuelve el estudio clínico</h3>
                                    <ul className="space-y-2 text-crema/60 font-manrope text-sm leading-relaxed">
                                        <li>Si ese resultado es alcanzable en tu boca.</li>
                                        <li>El espacio disponible, el esmalte y la posición real de los dientes.</li>
                                        <li>La mordida, la encía y cómo vas a hablar con las carillas puestas.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div className="grid md:grid-cols-2 gap-5">
                            <figure className="rounded-2xl overflow-hidden border border-oro/15">
                                <div className="relative aspect-[3/4]">
                                    <Image
                                        src={`${CDN}/odontologo-analiza-imagen-de-sonrisa-generada-por-ia.jpg`}
                                        alt="El Dr. Ariel Merino analiza junto a una paciente la imagen de sonrisa generada por inteligencia artificial"
                                        fill sizes="(max-width: 768px) 100vw, 370px" className="object-cover"
                                    />
                                </div>
                                <figcaption className="px-5 py-3 bg-carbon-soft text-crema/45 font-manrope text-xs leading-relaxed">
                                    El contraste entre la imagen y el estudio clínico define qué resultado es posible. <span className="text-crema/30">Imagen ilustrativa generada con IA.</span>
                                </figcaption>
                            </figure>
                            <figure className="rounded-2xl overflow-hidden border border-oro/15">
                                <div className="relative aspect-[3/4]">
                                    <Image
                                        src={`${CDN}/dr-ariel-merino-explica-diseno-de-sonrisa-sobre-imagen-de-ia.jpg`}
                                        alt="El Dr. Ariel Merino señala sobre la pantalla qué parte del diseño de sonrisa es alcanzable"
                                        fill sizes="(max-width: 768px) 100vw, 370px" className="object-cover"
                                    />
                                </div>
                                <figcaption className="px-5 py-3 bg-carbon-soft text-crema/45 font-manrope text-xs leading-relaxed">
                                    Parte del trabajo hoy es traducir: qué del diseño es alcanzable y qué no. <span className="text-crema/30">Imagen ilustrativa generada con IA.</span>
                                </figcaption>
                            </figure>
                        </div>

                        <section id="mock-up" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                ¿Cómo se comprueba si esa sonrisa es posible?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                Con un <strong className="text-crema font-medium">ensayo en boca</strong>, que en odontología se llama <em>mock-up</em>. Antes de llegar ahí hay un estudio: fotografía clínica, análisis de la cara y de la sonrisa, evaluación de la mordida y radiografías. Con eso se hace un diseño sobre la anatomía real, buscando siempre el mínimo desgaste posible.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                El mock-up es una prueba provisoria de la sonrisa nueva, colocada sobre los propios dientes, <strong className="text-crema font-medium">sin tallar nada todavía</strong>. El paciente se mira al espejo, se saca fotos, habla, muerde y sale a la calle si quiere.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Ese es el único ensayo con valor clínico, porque incorpora todas las restricciones que la imagen de pantalla ignora. Y es lo que se aprueba antes de tocar un solo diente.{" "}
                                <Link href="/blog/diseno-de-sonrisa-digital-como-funciona" className="text-oro hover:underline">
                                    Cómo funciona el diseño de sonrisa digital →
                                </Link>
                            </p>
                        </section>

                        <section id="riesgo" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                ¿Cuál es el riesgo de la sonrisa generada por IA?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                Que se genera sin ningún costo y sin ningún límite. Se puede pedir una versión, y otra, y otra, hasta que aparece exactamente lo que se quiere ver. Y esa última versión —la que más gustó, no la más realista— es la que queda grabada como expectativa.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                Cuando la imagen es de una modelo, uno sabe que es otra persona. Cuando la imagen es de uno mismo, se vuelve mucho más difícil de soltar. La salida no es pelearse con la tecnología: es usarla como punto de partida y no como promesa.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Por eso la clínica tiene su propio{" "}
                                <Link href="/sonrisa" className="text-oro hover:underline">
                                    simulador de sonrisa con inteligencia artificial
                                </Link>
                                : hace lo mismo que un asistente genérico, pero dentro de un criterio odontológico y con la consulta del otro lado para verificarlo.
                            </p>
                        </section>

                        <section id="recomendacion" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                ¿La inteligencia artificial reemplazó al boca a boca?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                No. Y ese es el dato más revelador de todos. Las redes sociales se derrumbaron de siete a tres, pero <strong className="text-crema font-medium">la recomendación de un paciente a otro apenas se movió: de tres a dos</strong>.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                La inteligencia artificial reemplazó la etapa de <em>averiguar</em>, no la de <em>confiar</em>. Sigue sin haber nada más fuerte que ver el resultado en la boca de alguien conocido. La tecnología cambió por dónde entra el paciente; no cambió qué lo hace quedarse.
                            </p>
                        </section>

                        <section id="preguntas" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Preguntas frecuentes
                            </h2>
                            <div className="space-y-4">
                                {FAQ.map((f) => (
                                    <div key={f.q} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                                        <h3 className="text-crema font-manrope font-medium text-base mb-3">{f.q}</h3>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="border border-oro/20 rounded-3xl p-8 md:p-10 bg-carbon-soft">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">
                                Traé tu imagen a la consulta
                            </h2>
                            <p className="text-crema/65 font-manrope text-base leading-relaxed mb-7">
                                Si generaste una simulación de tu sonrisa, mostrala. Es la forma más rápida de que entendamos qué buscás. El Dr. Merino atiende personalmente los casos de estética y diseño de sonrisa en AM Estética Dental, Puerto Madero, con laboratorio de cerámica propio dentro de la clínica.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-oro text-carbon font-manrope font-semibold text-sm rounded-full px-8 py-4"
                                >
                                    Hablar por WhatsApp →
                                </a>
                                <Link
                                    href="/sonrisa"
                                    className="inline-flex items-center border border-oro/30 text-oro font-manrope text-sm rounded-full px-8 py-4 hover:border-oro/60 transition-colors"
                                >
                                    Probar el simulador AM →
                                </Link>
                            </div>
                        </section>

                        <p className="text-crema/30 font-manrope text-xs leading-relaxed">
                            Sobre las imágenes: las fotografías que ilustran este artículo son recreaciones generadas con inteligencia artificial de situaciones habituales de la consulta. No corresponden a pacientes reales ni a registros clínicos.
                        </p>

                        <section className="pt-4">
                            <p className="text-crema/40 font-manrope text-xs uppercase tracking-[0.25em] mb-5">Seguir leyendo</p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    ["Simulador de sonrisa con IA", "/sonrisa"],
                                    ["Diseño de sonrisa digital: cómo funciona", "/blog/diseno-de-sonrisa-digital-como-funciona"],
                                    ["Sonrisa natural vs. Hollywood", "/blog/sonrisa-natural-vs-hollywood"],
                                    ["Preguntas antes de hacerse carillas", "/blog/preguntas-antes-de-hacerse-carillas"],
                                    ["Carillas de porcelana", "/carillas-dentales"],
                                ].map(([label, href]) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="border border-oro/15 rounded-full px-5 py-2.5 font-manrope text-sm text-crema/60 hover:text-crema hover:border-oro/35 transition-colors"
                                    >
                                        {label} →
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
