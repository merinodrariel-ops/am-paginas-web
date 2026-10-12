import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ANIO } from "@/lib/anio";
import CarillaWireframe from "@/components/CarillaWireframe";

// Página sin par en .uy ni en /en todavía: NO se agrega a los mapas hreflang
// (i18n-routes.ts / site-data.ts). Cuando exista la traducción, seguir el
// checklist de AGENTS.md y mover los cuatro mapas juntos.

const CANONICAL = "https://www.amesteticadental.com/carillas-de-resina-impresas-3d";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20carillas%20de%20resina%20impresas%20en%203D.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: `Carillas de Resina Impresas en 3D en Buenos Aires ${ANIO} | AM`,
    description: "Carillas de resina impresas en 3D de 0,1 a 0,2 mm: más finas, naturales y resistentes que la resina directa. Dos sesiones, en una semana. Puerto Madero.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Carillas de Resina Impresas en 3D | AM Estética Dental",
        description: "La técnica más nueva en carillas: resina de alta performance impresa en 3D desde tu diseño digital de sonrisa. Ultrafinas, naturales y listas en una semana.",
        url: CANONICAL,
    },
    keywords: "carillas impresas en 3D, carillas de resina 3D, carillas resina impresa, carillas ultrafinas resina, carillas de resina Buenos Aires",
};

// Una sola fuente para la FAQ visible y la del schema: el texto tiene que ser
// idéntico en los dos lugares.
const FAQS = [
    {
        q: "¿Qué son las carillas de resina impresas en 3D?",
        a: "Son carillas hechas con una resina de alta performance que se imprime en 3D a partir de tu diseño digital de sonrisa. En lugar de modelar la resina a mano sobre el diente, la carilla se fabrica en laboratorio con precisión digital y después se adhiere en el consultorio. Es la técnica más nueva para hacer carillas.",
    },
    {
        q: "¿Cuánto duran las carillas impresas en 3D?",
        a: "Es una tecnología reciente, así que la duración a largo plazo todavía está en evaluación. Lo que sí sabemos es que el material es más homogéneo y resistente que la resina directa, por lo que esperamos una duración comparable o superior a la de las carillas de resina tradicionales. Como con cualquier carilla, la higiene y los controles periódicos influyen mucho.",
    },
    {
        q: "¿Hay que limar los dientes?",
        a: "Por lo general se necesita una preparación mínima del esmalte, pero como estas carillas se pueden imprimir de 0,1 a 0,2 mm, el desgaste es mucho menor: hasta un 60% menos que con técnicas convencionales. La cantidad exacta depende de la posición y la forma de tus dientes, y la definimos en la evaluación de tu caso.",
    },
    {
        q: "¿Son mejores que las carillas de resina directa?",
        a: "En la mayoría de los casos, sí. La resina directa se modela a mano en el sillón, capa por capa. La resina impresa se polimeriza de forma industrial y es un material más homogéneo: eso la hace más resistente, más pulida y más precisa. La diferencia es que requiere dos sesiones en lugar de una.",
    },
    {
        q: "¿Y comparadas con las carillas de porcelana?",
        a: "Son dos excelentes opciones con perfiles distintos. La resina impresa permite espesores todavía más finos y tiempos muy cortos; la porcelana sigue siendo el material con mayor estabilidad de color y trayectoria a largo plazo. En la evaluación te recomendamos la que mejor se adapta a tu caso, tus dientes y tu objetivo.",
    },
    {
        q: "¿Cuántas sesiones son y cuánto tarda el tratamiento?",
        a: "Generalmente dos sesiones, igual que la porcelana. En la primera hacemos el escaneo y el diseño digital de tu sonrisa; en la segunda colocamos las carillas. Entre una y otra pasan aproximadamente 7 días, porque las imprimimos en nuestro laboratorio propio.",
    },
    {
        q: "¿Las carillas impresas en 3D se manchan?",
        a: "Al ser más pulidas y menos porosas que la resina directa, retienen menos pigmentos. Igual conviene tener los mismos cuidados que con cualquier resina frente al café, el té, el vino o el tabaco, y hacer los controles y pulidos que te indiquemos.",
    },
    {
        q: "¿Quién puede hacérselas y cuándo no conviene?",
        a: "Son ideales para quienes quieren corregir color, forma o pequeñas asimetrías con la mínima intervención posible. No son la mejor opción con bruxismo severo sin control, o cuando los dientes están muy mal posicionados: en ese caso conviene alinearlos primero (por ejemplo con alineadores invisibles) y después evaluar las carillas.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Carillas de resina impresas en 3D en Buenos Aires — AM Estética Dental",
    description: "Carillas de resina de alta performance impresas en 3D, de 0,1 a 0,2 mm de espesor, en dos sesiones. Dr. Ariel Merino, Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Carillas de resina impresas en 3D" },
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
    { dato: "0,1–0,2 mm", titulo: "Ultrafinas", texto: "Se imprimen con un espesor de 0,1 a 0,2 mm, tanto o más finas que una lente de contacto dental." },
    { dato: "Hasta 60%", titulo: "Más conservadoras", texto: "Hasta un 60% menos de desgaste del esmalte que con técnicas convencionales. Cada caso se evalúa de forma individual." },
    { dato: "+ resistentes", titulo: "Que la resina directa", texto: "Material homogéneo, polimerizado de forma industrial: sin las capas ni las microburbujas del modelado a mano." },
    { dato: "~7 días", titulo: "Una semana", texto: "Dos sesiones con aproximadamente una semana entre el diseño y la colocación. Hiper rápido." },
];

type Fila = { aspecto: string; directa: string; impresa: string; porcelana: string };

const COMPARATIVA: Fila[] = [
    { aspecto: "Espesor", directa: "Variable, en general más gruesa (0,5 mm o más)", impresa: "0,1–0,2 mm", porcelana: "0,3–0,5 mm (lentes de contacto: ~0,2 mm)" },
    { aspecto: "Desgaste del diente", directa: "Mínimo a moderado", impresa: "El menor: hasta 60% menos", porcelana: "Mínimo a moderado" },
    { aspecto: "Resistencia", directa: "Buena", impresa: "Mayor que la resina directa", porcelana: "Muy alta" },
    { aspecto: "Naturalidad", directa: "Muy buena", impresa: "Excelente, por su finura", porcelana: "Excelente" },
    { aspecto: "Sesiones", directa: "1", impresa: "2", porcelana: "2" },
    { aspecto: "Tiempo total", directa: "1 día", impresa: "~7 días", porcelana: "10–15 días" },
    { aspecto: "Precisión", directa: "Manual", impresa: "Digital", porcelana: "Digital + artesanal" },
];

const PASOS = [
    { n: "01", titulo: "Diseño digital de sonrisa", texto: "Escaneamos tus dientes y diseñamos la nueva sonrisa en la computadora: forma, largo, proporción y color pensados para tu cara." },
    { n: "02", titulo: "Mock-up de prueba", texto: "Antes de fabricar nada, probás el diseño en boca. Lo ves, lo opinás y ajustamos lo que haga falta hasta que te represente." },
    { n: "03", titulo: "Impresión 3D en laboratorio propio", texto: "Imprimimos las carillas en resina de alta performance en nuestro laboratorio, con el espesor justo que necesita cada diente." },
    { n: "04", titulo: "Colocación", texto: "Aproximadamente 7 días después, adherimos las carillas, ajustamos la mordida y pulimos. Te vas con la sonrisa terminada." },
];

// Casos clínicos de esta técnica. Para agregar uno:
//   1. Subir la foto a Cloudinary (cloud `drctvgyqd`, carpeta `casos/galeria/`)
//      con un nombre descriptivo, p. ej. `carillas-resina-impresa-3d-antes-despues-01`.
//   2. Sumar acá `{ src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/<nombre>", alt: "..." }`
//      con un alt que describa el caso (técnica + "antes y después" + AM Estética Dental).
//   3. Opcional: `href` al caso completo en /casos/<slug> si está publicado.
// Mientras el array esté vacío, la sección muestra el aviso de "Próximamente".
type Caso = { src: string; alt: string; href?: string };
const CASOS: Caso[] = [];

const RELACIONADOS = [
    { href: "/carillas-de-resina", label: "Carillas de resina directa" },
    { href: "/carillas-de-porcelana-vs-resina", label: "Porcelana vs resina" },
    { href: "/carillas-sin-desgaste", label: "Carillas de mínimo desgaste" },
    { href: "/lentes-de-contacto-dental", label: "Lentes de contacto dental" },
    { href: "/diseno-de-sonrisa", label: "Diseño de sonrisa digital" },
    { href: "/precio-carillas-dentales-buenos-aires", label: "Inversión en carillas" },
];

export default function CarillasResinaImpresas3DPage() {
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
                            Carillas de resina<br />
                            <span className="font-cormorant italic text-oro">impresas en 3D.</span>
                        </h1>
                        <p className="text-crema/65 text-lg font-light leading-relaxed mb-4">
                            La técnica más nueva para hacer carillas: resina de alta performance impresa en 3D a partir de tu diseño digital de sonrisa.
                        </p>
                        <p className="text-crema/55 font-light leading-relaxed mb-10">
                            Ultrafinas —de 0,1 a 0,2 mm—, más naturales y más resistentes que la resina hecha a mano. Listas en una semana.
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
                    {/* Placeholder: pasar videoSrc con la animación de Magnific cuando esté en Cloudinary. */}
                    <CarillaWireframe />
                </section>

                {/* Autoridad */}
                <section className="px-6 py-10 border-y border-oro/10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center">
                        <div>
                            <span className="font-cormorant italic text-oro text-4xl block">+30</span>
                            <span className="text-crema/55 text-xs uppercase tracking-widest">casos realizados</span>
                        </div>
                        <div>
                            <span className="font-cormorant italic text-oro text-4xl block">+2 años</span>
                            <span className="text-crema/55 text-xs uppercase tracking-widest">trabajando con resina impresa</span>
                        </div>
                        <p className="text-crema/55 text-sm max-w-xs leading-relaxed">
                            En AM somos una de las clínicas con mayor experiencia en esta técnica en Buenos Aires.
                        </p>
                    </div>
                </section>

                {/* Diferenciales */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light text-crema mb-4 text-center">
                        Más finas, <span className="font-cormorant italic text-oro">más naturales.</span>
                    </h2>
                    <p className="text-crema/55 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
                        Lo que más nos piden hoy es que no se note que hay carillas. Cuanto más fina es la carilla, menos hay que tocar el diente y más natural se ve.
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

                {/* Comparativa */}
                <section id="comparativa" className="px-6 py-16 max-w-5xl mx-auto scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-light text-crema mb-10 text-center">
                        Resina directa, impresa en 3D <span className="font-cormorant italic text-oro">o porcelana</span>
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm min-w-[640px]">
                            <thead>
                                <tr className="border-b border-oro/20">
                                    <th className="text-left py-4 pr-6 text-crema/50 font-normal uppercase tracking-widest text-xs">Aspecto</th>
                                    <th className="text-center py-4 px-4 text-crema font-semibold">Resina directa</th>
                                    <th className="text-center py-4 px-4 text-oro font-semibold bg-oro/5 rounded-t-xl">
                                        <span className="block text-[10px] uppercase tracking-widest bg-oro text-carbon rounded-full px-2 py-0.5 w-fit mx-auto mb-1">Lo más nuevo</span>
                                        Resina impresa 3D
                                    </th>
                                    <th className="text-center py-4 px-4 text-crema font-semibold">Porcelana</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARATIVA.map(({ aspecto, directa, impresa, porcelana }) => (
                                    <tr key={aspecto} className="border-b border-oro/10">
                                        <td className="py-4 pr-6 text-crema/60">{aspecto}</td>
                                        <td className="py-4 px-4 text-center text-crema/70">{directa}</td>
                                        <td className="py-4 px-4 text-center text-oro/90 font-medium bg-oro/5">{impresa}</td>
                                        <td className="py-4 px-4 text-center text-crema/70">{porcelana}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-crema/40 text-xs mt-6 text-center max-w-2xl mx-auto">
                        Valores orientativos. El espesor, el desgaste y la técnica indicada se definen en la evaluación de cada caso. La duración a largo plazo de la resina impresa todavía está en evaluación; esperamos que sea comparable o superior a la de la resina directa.
                    </p>
                </section>

                {/* Proceso */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light text-crema mb-4 text-center">
                        Cómo es <span className="font-cormorant italic text-oro">el proceso</span>
                    </h2>
                    <p className="text-crema/55 text-center max-w-2xl mx-auto mb-12">
                        Dos sesiones, con aproximadamente una semana entre una y otra.
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

                {/* CTA medio */}
                <section className="px-6 py-16 max-w-4xl mx-auto text-center border-y border-oro/10">
                    <h2 className="text-3xl font-light text-crema mb-4">
                        ¿Es la técnica <span className="font-cormorant italic text-oro">para tu caso?</span>
                    </h2>
                    <p className="text-crema/55 mb-8 max-w-xl mx-auto">
                        Te explicamos con criterio clínico si te conviene la resina impresa, la porcelana o combinar tratamientos.
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
                                Resina impresa en 3D, <span className="font-cormorant italic text-oro">en casos reales.</span>
                            </h2>
                        </div>
                        {CASOS.length === 0 ? (
                            <div className="border border-oro/15 rounded-2xl p-10 text-center">
                                <p className="text-crema/70 mb-4">Próximamente: casos reales de carillas impresas en 3D.</p>
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
                        Carillas ultrafinas,<br />
                        <span className="font-cormorant italic text-oro">en una semana.</span>
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
