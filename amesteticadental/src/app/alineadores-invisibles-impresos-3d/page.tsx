import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ANIO } from "@/lib/anio";

// Página sin par en .uy ni en /en todavía: NO se agrega a los mapas hreflang
// (i18n-routes.ts / site-data.ts). Cuando exista la traducción, seguir el
// checklist de AGENTS.md y mover los cuatro mapas juntos.

// ── Visuales ────────────────────────────────────────────────────────────────
// Se completan cuando estén aprobados los renders de Magnific:
//   1. Subir el mp4 a Cloudinary (cloud `drctvgyqd`, carpeta `alineadores/`) y
//      pegar la URL liviana (q_auto,vc_auto) en HERO_VIDEO. Mientras esté vacío,
//      el hero muestra la imagen fija de HERO_POSTER.
//   2. HERO_POSTER: el cuadro final del video (jpg/webp). Hoy es el render de
//      láser que ya usa /alineadores-invisibles.
//   3. GALERIA: fotos/renders adicionales `{ src, alt }`. Con el array vacío la
//      sección no se muestra.
const CLOUDINARY = "https://res.cloudinary.com/drctvgyqd";
const HERO_VIDEO = "";
const HERO_POSTER = `${CLOUDINARY}/image/upload/q_auto,f_auto/alineadores/alineadores-invisibles-laser-aceleracion-buenos-aires.webp`;
type Visual = { src: string; alt: string };
const GALERIA: Visual[] = [];

const CANONICAL = "https://www.amesteticadental.com/alineadores-invisibles-impresos-3d";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20alineadores%20invisibles%20impresos%20en%203D.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: `Alineadores Invisibles Impresos en 3D | AM ${ANIO}`,
    description: "Alineadores impresos en 3D con memoria de forma y láser: prácticamente sin ataches y hasta un 30–40% menos de tiempo. Puerto Madero, Buenos Aires.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Alineadores Invisibles Impresos en 3D | AM Estética Dental",
        description: "La nueva generación de ortodoncia invisible: alineadores impresos en 3D con resina de memoria de forma, prácticamente sin ataches y combinados con láser.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
    },
    keywords: "alineadores impresos en 3D, alineadores sin ataches, ortodoncia invisible rápida, alineadores con memoria de forma, alineadores invisibles Buenos Aires, alineadores más rápidos Argentina",
};

// Una sola fuente para la FAQ visible y la del schema: el texto tiene que ser
// idéntico en los dos lugares.
const FAQS = [
    {
        q: "¿Qué son los alineadores invisibles impresos en 3D?",
        a: "Son alineadores transparentes que se imprimen directamente en 3D a partir de tu plan digital, con una resina de memoria de forma. A diferencia de los convencionales, no se fabrican calentando una lámina de plástico sobre un modelo: cada alineador sale de la impresora con el espesor y la forma exactos que necesita cada diente. Esa resina vuelve a su forma programada y sigue empujando de manera constante.",
    },
    {
        q: "¿En qué se diferencian de Invisalign y de los alineadores convencionales?",
        a: "Invisalign y la mayoría de los sistemas de alineadores son termoformados: una lámina de plástico se calienta y se adapta sobre un modelo de tus dientes. Ese plástico pierde fuerza con los días de uso y suele necesitar ataches para lograr ciertos movimientos. El alineador impreso en 3D se fabrica capa por capa en resina con memoria de forma: mantiene una fuerza más constante, se ajusta con precisión digital y, en la gran mayoría de los casos, permite trabajar prácticamente sin ataches.",
    },
    {
        q: "¿Por qué casi no necesitan ataches?",
        a: "Los ataches son pequeños botones de resina que se pegan sobre el diente para que el plástico tenga de dónde agarrarse y empujar. Como la resina con memoria de forma recupera su forma programada y se imprime con un espesor controlado en cada zona, el alineador logra un agarre y una fuerza suficientes sin esos botones en la gran mayoría de los casos. Resultado: más estético, más cómodo y menos tiempo en el sillón para colocarlos y retirarlos.",
    },
    {
        q: "¿Cuánto más rápido es y de qué depende?",
        a: "La fotobiomodulación láser que aplicamos en cada control acorta el tratamiento entre un 20 y un 25%, y la memoria de forma del material suma un 10 a 15% adicional. Combinados, el tratamiento puede durar hasta un 30 a 40% menos que con alineadores convencionales. Son valores orientativos: dependen de la complejidad del caso, de la respuesta biológica de cada paciente y, sobre todo, de que uses los alineadores las horas indicadas.",
    },
    {
        q: "¿Qué hace el láser y duele?",
        a: "Es un láser de baja potencia (fotobiomodulación) que se aplica sobre la zona en cada control. Estimula el hueso que rodea la raíz del diente, que es lo que marca el ritmo al que se lo puede mover, y además tiene un efecto analgésico que hace más llevadero cada cambio de alineador. No duele, no genera calor, no requiere anestesia y se hace dentro del mismo control, en pocos minutos.",
    },
    {
        q: "¿Sirve para mi caso? ¿Cuándo sí hacen falta ataches?",
        a: "Resuelve la mayoría de los casos de ortodoncia estética: apiñamiento, espacios y correcciones leves a moderadas. En algunos movimientos puede seguir haciendo falta algún atache puntual, por ejemplo en rotaciones severas, extrusiones o casos complejos de mordida. En la evaluación revisamos tu escaneo y te decimos con honestidad qué plan te conviene y si vas a necesitar alguno.",
    },
    {
        q: "¿Cuántas horas por día se usan y cada cuánto se cambian?",
        a: "Se usan entre 20 y 22 horas por día y se retiran solo para comer, tomar algo que no sea agua y cepillarte. La frecuencia de cambio la define tu plan digital y la vamos ajustando en cada control con láser, según cómo responden tus dientes.",
    },
    {
        q: "¿Desde cuándo lo ofrecen en AM?",
        a: "Incorporamos los alineadores impresos en 3D en octubre de 2026. Somos de las primeras clínicas de Argentina en trabajar con esta tecnología, y la combinamos con el protocolo de fotobiomodulación láser que ya aplicábamos en nuestros tratamientos de ortodoncia invisible.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Alineadores invisibles impresos en 3D en Buenos Aires — AM Estética Dental",
    description: "Alineadores invisibles impresos directamente en 3D con resina de memoria de forma, prácticamente sin ataches y combinados con fotobiomodulación láser. Dr. Ariel Merino, Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Alineadores invisibles impresos en 3D con memoria de forma" },
    mainEntity: {
        "@type": "FAQPage",
        mainEntity: FAQS.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
        })),
    },
};

const DIFERENCIALES = [
    { dato: "Impresos en 3D", titulo: "Memoria de forma", texto: "Resina que vuelve a su forma programada y sigue empujando de manera constante, en lugar de aflojarse con los días." },
    { dato: "Sin botones", titulo: "Prácticamente sin ataches", texto: "En la gran mayoría de los casos no hace falta pegar ataches sobre los dientes: más estético, más cómodo, menos sillón." },
    { dato: "20–25%", titulo: "Láser en cada control", texto: "La fotobiomodulación estimula el hueso alrededor de la raíz y acelera el movimiento. Además, cada cambio molesta menos." },
    { dato: "Hasta 30–40%", titulo: "Menos tiempo de tratamiento", texto: "Memoria de forma + láser. Valores orientativos: cada caso se evalúa de forma individual." },
];

type Fila = { aspecto: string; am: string; convencional: string };

const COMPARATIVA: Fila[] = [
    { aspecto: "Fabricación", am: "Impresión 3D directa", convencional: "Plástico termoformado sobre un modelo" },
    { aspecto: "Material", am: "Resina con memoria de forma", convencional: "Plástico que pierde fuerza con los días" },
    { aspecto: "Ataches", am: "Prácticamente ninguno en la mayoría de los casos", convencional: "Habitualmente varios por arcada" },
    { aspecto: "Fuerza sobre el diente", am: "Constante", convencional: "Decrece con el uso" },
    { aspecto: "Aceleración biológica", am: "Láser en cada control (20–25%)", convencional: "No" },
    { aspecto: "Tiempo de tratamiento", am: "Hasta 30–40% menos", convencional: "Referencia" },
    { aspecto: "Precisión de ajuste", am: "Digital, con espesor controlado", convencional: "Depende del termoformado" },
    { aspecto: "Estética", am: "Sin botones visibles", convencional: "Ataches visibles" },
    { aspecto: "Confort en cada cambio", am: "Láser con efecto analgésico", convencional: "Molestia habitual" },
    { aspecto: "Laboratorio", am: "Propio, impresión in-house", convencional: "Externo, con envíos" },
];

const PASOS = [
    { n: "01", titulo: "Escaneo y plan digital", texto: "Escaneamos tus dientes sin moldes y diseñamos el plan completo de movimientos. Ves el resultado final en pantalla antes de empezar." },
    { n: "02", titulo: "Impresión 3D en laboratorio propio", texto: "Imprimimos tus alineadores en resina con memoria de forma en nuestro laboratorio, con el espesor justo para cada diente." },
    { n: "03", titulo: "Entrega + láser", texto: "Te colocamos el primer juego, revisamos el ajuste y aplicamos la primera sesión de fotobiomodulación. Sin ataches en la gran mayoría de los casos." },
    { n: "04", titulo: "Controles con láser", texto: "En cada control aplicamos láser, verificamos que todo siga el plan y te entregamos los alineadores siguientes." },
];

// Casos clínicos de esta técnica. Para agregar uno:
//   1. Subir la foto a Cloudinary (cloud `drctvgyqd`, carpeta `casos/galeria/`)
//      con un nombre descriptivo, p. ej. `alineadores-impresos-3d-antes-despues-01`.
//   2. Sumar acá `{ src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/<nombre>", alt: "..." }`
//      con un alt que describa el caso (técnica + "antes y después" + AM Estética Dental).
//   3. Opcional: `href` al caso completo en /casos/<slug> si está publicado.
// Mientras el array esté vacío, la sección muestra el aviso de "Próximamente".
type Caso = { src: string; alt: string; href?: string };
const CASOS: Caso[] = [];

const RELACIONADOS = [
    { href: "/alineadores-invisibles", label: "Alineadores invisibles con láser" },
    { href: "/alineadores-invisibles-buenos-aires", label: "Alineadores en Buenos Aires" },
    { href: "/invisalign", label: "Invisalign" },
    { href: "/carillas-vs-alineadores", label: "Carillas vs alineadores" },
    { href: "/carillas-de-resina-impresas-3d", label: "Carillas impresas en 3D" },
    { href: "/diseno-de-sonrisa", label: "Diseño de sonrisa digital" },
];

export default function AlineadoresImpresos3DPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">
                        Consultar →
                    </a>
                </header>

                {/* Hero */}
                <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Lo más nuevo · Puerto Madero</span>
                        <h1 className="text-4xl md:text-6xl font-light text-crema leading-tight mb-6">
                            Alineadores invisibles<br />
                            <span className="font-cormorant italic text-oro">impresos en 3D.</span>
                        </h1>
                        <p className="text-crema/65 text-lg font-light leading-relaxed mb-4">
                            La nueva generación de ortodoncia invisible: alineadores impresos directamente en 3D con una resina de memoria de forma, que vuelve a su forma programada y sigue empujando de manera constante.
                        </p>
                        <p className="text-crema/55 font-light leading-relaxed mb-6">
                            Prácticamente sin ataches en la gran mayoría de los casos y combinados con láser en cada control: probablemente el protocolo de alineadores más rápido de Argentina.
                        </p>
                        <p className="border-l-2 border-oro pl-4 text-crema/85 font-light leading-relaxed mb-10 text-left">
                            Sabemos que lo más valioso que tenés es tu tiempo.{" "}
                            <span className="font-cormorant italic text-oro text-xl">Por eso, hasta un 30–40% menos de tratamiento.</span>
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold hover:bg-oro/90 transition-all">
                                Consultar por WhatsApp →
                            </a>
                            <a href="#comparativa"
                                className="inline-flex items-center gap-2 border border-oro/25 text-crema/70 px-8 py-4 rounded-full text-sm hover:border-oro/50 hover:text-crema transition-colors">
                                Ver comparativa
                            </a>
                        </div>
                    </div>
                    {/* Con HERO_VIDEO vacío se muestra la imagen fija; con URL, el video en loop. */}
                    <div className="relative aspect-[4/3] rounded-2xl border border-oro/15 overflow-hidden bg-carbon-soft">
                        {HERO_VIDEO ? (
                            <video
                                className="h-full w-full object-cover"
                                src={HERO_VIDEO}
                                poster={HERO_POSTER}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                aria-label="Alineador invisible impreso en 3D con resina de memoria de forma — AM Estética Dental"
                            />
                        ) : (
                            <Image
                                src={HERO_POSTER}
                                alt="Alineador invisible impreso en 3D atravesado por un haz de láser de baja potencia — AM Estética Dental, Puerto Madero"
                                fill
                                priority
                                sizes="(max-width: 768px) 92vw, 46vw"
                                className="object-cover"
                            />
                        )}
                    </div>
                </section>

                {/* Autoridad */}
                <section className="px-6 py-10 border-y border-oro/10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center">
                        <div>
                            <span className="font-cormorant italic text-oro text-4xl block">Oct. 2026</span>
                            <span className="text-crema/55 text-xs uppercase tracking-widest">incorporamos la tecnología</span>
                        </div>
                        <div>
                            <span className="font-cormorant italic text-oro text-4xl block">Láser</span>
                            <span className="text-crema/55 text-xs uppercase tracking-widest">en cada control</span>
                        </div>
                        <p className="text-crema/55 text-sm max-w-xs leading-relaxed">
                            Somos de las primeras clínicas de Argentina en incorporar alineadores impresos en 3D con memoria de forma.
                        </p>
                    </div>
                </section>

                {/* Diferenciales */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light text-crema mb-4 text-center">
                        Menos ataches, <span className="font-cormorant italic text-oro">menos tiempo.</span>
                    </h2>
                    <p className="text-crema/55 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
                        Es el tratamiento de alineadores invisibles más rápido que hicimos: dos tecnologías que se suman, una en el material y otra en la biología.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {DIFERENCIALES.map(({ dato, titulo, texto }) => (
                            <div key={titulo} className="border border-oro/15 rounded-2xl p-6">
                                <span className="font-cormorant italic text-oro text-3xl block mb-2">{dato}</span>
                                <h3 className="text-crema font-semibold mb-2">{titulo}</h3>
                                <p className="text-crema/60 text-sm leading-relaxed">{texto}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Calculadora visual (estática) */}
                <section className="px-6 py-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light text-crema mb-10 text-center">
                        Cuánto tiempo <span className="font-cormorant italic text-oro">te ahorrás</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                        <div className="border border-oro/15 rounded-2xl p-8 text-center">
                            <span className="text-crema/50 text-xs uppercase tracking-widest block mb-3">Tratamiento convencional</span>
                            <span className="font-cormorant italic text-crema text-5xl block">12 meses</span>
                            <div className="mt-6 h-2 rounded-full bg-crema/20" aria-hidden="true" />
                        </div>
                        <span className="text-oro text-3xl text-center" aria-hidden="true">→</span>
                        <div className="border border-oro/40 bg-oro/5 rounded-2xl p-8 text-center">
                            <span className="text-oro text-xs uppercase tracking-widest block mb-3">Con alineadores AM 3D + láser</span>
                            <span className="font-cormorant italic text-oro text-5xl block">7 a 9 meses</span>
                            <div className="mt-6 h-2 rounded-full bg-crema/10 overflow-hidden" aria-hidden="true">
                                <div className="h-full w-[65%] rounded-full bg-oro" />
                            </div>
                        </div>
                    </div>
                    <p className="text-crema/40 text-xs mt-6 text-center max-w-2xl mx-auto">
                        Ejemplo orientativo: aplica una reducción de hasta un 30–40% sobre un plan de 12 meses. La duración real depende de cada caso y se define en la evaluación.
                    </p>
                </section>

                {/* Comparativa */}
                <section id="comparativa" className="px-6 py-16 max-w-5xl mx-auto scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-light text-crema mb-10 text-center">
                        Impresos en 3D <span className="font-cormorant italic text-oro">vs. convencionales</span>
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm min-w-[600px]">
                            <thead>
                                <tr className="border-b border-oro/20">
                                    <th className="text-left py-4 pr-6 text-crema/50 font-normal uppercase tracking-widest text-xs">Aspecto</th>
                                    <th className="text-center py-4 px-4 text-oro font-semibold bg-oro/5 rounded-t-xl">
                                        <span className="block text-[10px] uppercase tracking-widest bg-oro text-carbon rounded-full px-2 py-0.5 w-fit mx-auto mb-1">Lo más nuevo</span>
                                        Alineadores AM impresos en 3D
                                    </th>
                                    <th className="text-center py-4 px-4 text-crema font-semibold">Alineadores invisibles convencionales (termoformados)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARATIVA.map(({ aspecto, am, convencional }) => (
                                    <tr key={aspecto} className="border-b border-oro/10">
                                        <td className="py-4 pr-6 text-crema/60">{aspecto}</td>
                                        <td className="py-4 px-4 text-center text-oro/90 font-medium bg-oro/5">{am}</td>
                                        <td className="py-4 px-4 text-center text-crema/70">{convencional}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-crema/40 text-xs mt-6 text-center max-w-2xl mx-auto">
                        Valores orientativos. Los porcentajes de reducción de tiempo surgen de nuestra experiencia clínica y de la literatura sobre fotobiomodulación; la duración, la necesidad de ataches y el plan indicado se definen en la evaluación de cada caso.
                    </p>
                </section>

                {/* Proceso */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light text-crema mb-4 text-center">
                        Cómo es <span className="font-cormorant italic text-oro">el proceso</span>
                    </h2>
                    <p className="text-crema/55 text-center max-w-2xl mx-auto mb-12">
                        Todo pasa en la clínica: escaneo, diseño, impresión y controles, sin esperar envíos de un laboratorio externo.
                    </p>
                    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PASOS.map(({ n, titulo, texto }) => (
                            <li key={n} className="border border-oro/15 rounded-2xl p-6">
                                <span className="text-oro text-xs font-semibold tracking-widest block mb-3">{n}</span>
                                <h3 className="text-crema font-semibold mb-2">{titulo}</h3>
                                <p className="text-crema/60 text-sm leading-relaxed">{texto}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Galería (solo si hay visuales cargados) */}
                {GALERIA.length > 0 && (
                    <section className="px-6 py-16 max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {GALERIA.map((v) => (
                                <div key={v.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-oro/15">
                                    <Image src={v.src} alt={v.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA medio */}
                <section className="px-6 py-16 max-w-4xl mx-auto text-center border-y border-oro/10">
                    <h2 className="text-3xl font-light text-crema mb-4">
                        ¿Es la técnica <span className="font-cormorant italic text-oro">para tu caso?</span>
                    </h2>
                    <p className="text-crema/55 mb-8 max-w-xl mx-auto">
                        Revisamos tu caso con criterio clínico y te decimos cuánto podría durar tu tratamiento y si vas a necesitar algún atache.
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold hover:bg-oro/90 transition-all">
                        Consultar por WhatsApp →
                    </a>
                </section>

                {/* FAQ */}
                <section className="px-6 py-16 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10 text-center">
                        Preguntas <span className="font-cormorant italic text-oro">frecuentes</span>
                    </h2>
                    <div className="space-y-3">
                        {FAQS.map(({ q, a }) => (
                            <details key={q} className="border border-oro/15 rounded-xl group">
                                <summary className="px-6 py-5 cursor-pointer text-crema/90 font-medium list-none flex items-center justify-between gap-4">
                                    {q}
                                    <span className="text-oro text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-6 pb-5 text-crema/60 text-sm leading-relaxed border-t border-oro/10 pt-4">
                                    {a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Casos clínicos */}
                <section className="px-6 py-16 border-t border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Casos clínicos</span>
                            <h2 className="text-2xl font-light text-crema">
                                Alineadores impresos en 3D, <span className="font-cormorant italic text-oro">en casos reales.</span>
                            </h2>
                        </div>
                        {CASOS.length === 0 ? (
                            <div className="border border-oro/15 rounded-2xl p-10 text-center">
                                <p className="text-crema/70 mb-4">Próximamente: casos reales de alineadores impresos en 3D.</p>
                                <Link href="/casos-antes-y-despues" className="inline-flex items-center gap-2 text-oro/80 hover:text-oro text-sm transition-colors">
                                    Mientras tanto, mirá todos nuestros casos clínicos →
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                    {CASOS.map((foto) => {
                                        const contenido = (
                                            <>
                                                <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </>
                                        );
                                        const clases = "relative block aspect-square rounded-2xl overflow-hidden border border-oro/10 group";
                                        return foto.href ? (
                                            <Link key={foto.src} href={foto.href} className={clases}>{contenido}</Link>
                                        ) : (
                                            <div key={foto.src} className={clases}>{contenido}</div>
                                        );
                                    })}
                                </div>
                                <div className="mt-8 text-center">
                                    <Link href="/casos-antes-y-despues" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">
                                        Ver todos los casos clínicos →
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* Links relacionados */}
                <section className="px-6 py-12 max-w-4xl mx-auto">
                    <h3 className="text-crema/50 text-sm uppercase tracking-widest mb-6 text-center">También puede interesarte</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {RELACIONADOS.map(({ href, label }) => (
                            <Link key={href} href={href}
                                className="text-crema/60 hover:text-oro text-sm border border-oro/15 hover:border-oro/40 rounded-full px-4 py-2 transition-all">
                                {label}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="px-6 py-20 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-crema mb-4">
                        Tu tiempo vale.<br />
                        <span className="font-cormorant italic text-oro">Tu sonrisa alineada, antes.</span>
                    </h2>
                    <p className="text-crema/55 mb-8 max-w-xl mx-auto">Dr. Ariel Merino · AM Estética Dental · Camila O&apos;Gorman 412, Puerto Madero, Buenos Aires.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold hover:bg-oro/90 transition-all">
                        Escribinos por WhatsApp →
                    </a>
                </section>

            </main>
        </>
    );
}
