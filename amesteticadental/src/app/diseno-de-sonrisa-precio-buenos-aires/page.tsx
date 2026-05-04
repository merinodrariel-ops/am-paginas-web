import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/diseno-de-sonrisa-precio-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=541170219298&text=Hola%2C%20quiero%20saber%20la%20inversi%C3%B3n%20para%20un%20dise%C3%B1o%20de%20sonrisa.";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Diseño de Sonrisa Precio Buenos Aires 2026 | AM Estética Dental Puerto Madero",
    description: "Precio e inversión del diseño de sonrisa en Buenos Aires 2026. Dr. Ariel Merino, AM Estética Dental, Puerto Madero. Carillas de porcelana, lentes de contacto dental y diseño digital.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Diseño de Sonrisa Precio Buenos Aires | AM Estética Dental",
        description: "Inversión del diseño de sonrisa en Buenos Aires. Casos documentados y planificación clínica en Puerto Madero.",
        url: CANONICAL,
        images: [{ url: `${CDN}/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires` }],
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Diseño de sonrisa precio Buenos Aires — AM Estética Dental",
    description: "Inversión del diseño de sonrisa con carillas de porcelana en Buenos Aires. Dr. Ariel Merino, Puerto Madero.",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Diseño de sonrisa digital con carillas de porcelana" },
};

const OPCIONES = [
    { titulo: "Diseño de sonrisa express", desc: "4 a 6 carillas sector anterior. La transformación más frecuente.", precio: "Desde USD 4.000", tiempo: "7 días" },
    { titulo: "Diseño de sonrisa completo", desc: "10 a 12 carillas. Ampliación de arco + corrección de color y forma.", precio: "Desde USD 8.000", precio2: "hasta USD 12.000", tiempo: "10 días" },
    { titulo: "Smile makeover integral", desc: "Diseño completo con corrección de mordida y dimensión vertical.", precio: "Desde USD 15.000", tiempo: "15 días" },
];

export default function DisenoDeSonrisaLanding() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">
                        Quiero ver cómo quedaría mi sonrisa →
                    </a>
                </header>

                {/* Hero */}
                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                                Buenos Aires · Puerto Madero
                            </span>
                            <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                                Diseño de sonrisa<br />
                                <span className="font-cormorant italic text-oro">en Buenos Aires.</span>
                            </h1>
                            <p className="text-crema/65 text-lg font-light leading-relaxed mb-4">
                                Inversión clara, casos reales. Diseñamos tu sonrisa digitalmente antes de tocar ningún diente. Ves el resultado antes de empezar.
                            </p>
                            <p className="text-crema/45 text-sm leading-relaxed mb-8">
                                Dr. Ariel Merino — reconocido por Forbes Argentina — lleva más de 20 años transformando sonrisas en Puerto Madero.
                            </p>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                                Quiero saber la inversión →
                            </a>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15">
                            <Image
                                src={`${CDN}/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires`}
                                alt="Diseño de sonrisa antes y después Buenos Aires — Dr. Ariel Merino AM Estética Dental Puerto Madero"
                                fill priority sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-flex items-center gap-1.5 border border-oro/30 bg-carbon/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-oro">
                                    Caso real · Antes y después
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Precios */}
                <section className="px-6 py-16 border-y border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-4">Inversión 2026</span>
                        <h2 className="text-3xl font-light text-crema mb-12">
                            ¿Cuál es la inversión para un diseño de <span className="font-cormorant italic text-oro">sonrisa en Buenos Aires?</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            {OPCIONES.map((o) => (
                                <div key={o.titulo} className="border border-oro/15 rounded-2xl p-6 flex flex-col">
                                    <h3 className="font-semibold text-crema text-sm mb-3">{o.titulo}</h3>
                                    <p className="text-crema/55 text-xs leading-relaxed mb-4 flex-1">{o.desc}</p>
                                    <div className="border-t border-oro/10 pt-4">
                                        <p className="text-oro font-semibold text-lg">{o.precio}</p>
                                        {o.precio2 && <p className="text-oro/60 text-sm">{o.precio2}</p>}
                                        <p className="text-crema/40 text-xs mt-1">Duración: {o.tiempo}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-crema/35 text-xs text-center mb-6">
                            La inversión exacta depende de la cantidad de piezas y del diagnóstico clínico.
                        </p>
                        <div className="text-center">
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                                Consultá la inversión de tu caso →
                            </a>
                        </div>
                    </div>
                </section>

                {/* Galería */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-8">
                        Casos <span className="font-cormorant italic text-oro">reales</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { src: `${CDN}/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires`, alt: "Diseño de sonrisa antes y después rostro Buenos Aires" },
                            { src: `${CDN}/cierre-diastemas-intraoral-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-puerto-madero`, alt: "Diseño de sonrisa intraoral antes y después carillas" },
                            { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental", alt: "Diseño de sonrisa labios frontal antes y después AM Estética Dental" },
                            { src: `${CDN}/diseno-sonrisa-diastemas-antes-despues-rostro-intraoral-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Diseño de sonrisa rostro e intraoral antes y después Buenos Aires" },
                            { src: `${CDN}/mordida-antes-despues-diseno-sonrisa-cierre-diastemas-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Diseño de sonrisa mordida antes y después Buenos Aires" },
                            { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/carillas-porcelana-20-piezas-mordida-antes-despues-am-estetica-dental", alt: "20 carillas porcelana antes y después AM Estética Dental" },
                        ].map((f, i) => (
                            <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-oro/10 group">
                                <Image src={f.src} alt={f.alt} fill
                                    sizes="(max-width: 640px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                            </div>
                        ))}
                    </div>
                    <p className="text-crema/25 text-xs text-center mt-4">@drarielmerino · AM Estética Dental · Casos reales sin filtros</p>
                </section>

                {/* FAQ */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">
                        Preguntas <span className="font-cormorant italic text-oro">frecuentes</span>
                    </h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿Cuánto dura un diseño de sonrisa completo?", a: "Entre 7 y 15 días desde la primera consulta hasta el resultado final. La evaluación inicial y el diseño digital se realizan en la primera visita." },
                            { q: "¿Puedo ver cómo me voy a quedar antes del tratamiento?", a: "Sí. Realizamos un diseño digital en la primera consulta. Ves en pantalla cómo quedarían tus dientes antes de decidir. También hacemos un mock-up en boca." },
                            { q: "¿Cuántas piezas se trabajan en un diseño de sonrisa?", a: "El más frecuente es de 8 a 10 piezas en el sector anterior superior. En casos completos se trabajan hasta 20 piezas. Lo definimos en la evaluación inicial." },
                            { q: "¿El resultado se ve natural?", a: "Es el objetivo principal. Usamos cerámicas de alta translucidez que imitan el esmalte natural. El resultado no se ve puesto — queda integrado con cada rostro." },
                            { q: "¿Cuánto tiempo duran las carillas del diseño de sonrisa?", a: "Las carillas cerámicas duran entre 15 y 20 años con cuidados básicos y control anual." },
                            { q: "¿Cuánto cuesta un diseño de sonrisa en Buenos Aires?", a: "Desde USD 4.000 para 4-6 piezas hasta USD 20.000 para una rehabilitación completa. La inversión exacta se define luego de evaluar el caso." },
                        ].map(({ q, a }) => (
                            <details key={q} className="border border-oro/12 rounded-xl group">
                                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-crema font-manrope text-sm font-medium select-none">
                                    {q}
                                    <span className="text-oro text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                                </summary>
                                <p className="px-6 pb-5 text-crema/60 text-sm leading-relaxed">{a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA final */}
                <section className="px-6 py-16 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">
                        El primer paso es entender tu caso.
                    </h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">
                        Evaluamos tu caso por WhatsApp y te orientamos sobre qué necesitás y cuál sería la inversión.
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">
                        Empezar mi diseño de sonrisa →
                    </a>
                    <p className="text-crema/25 text-xs mt-4">Puerto Madero · Buenos Aires</p>
                </section>

            </main>
        </>
    );
}
