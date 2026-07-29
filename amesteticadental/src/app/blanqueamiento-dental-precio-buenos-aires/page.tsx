import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/blanqueamiento-dental-precio-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20blanqueamiento%20dental.";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Precio de Blanqueamiento Dental en Buenos Aires 2026",
    description: "Precio del blanqueamiento dental profesional en Buenos Aires 2026. Blanqueamiento láser y LED en una sesión en Puerto Madero. Dr. Ariel Merino.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Blanqueamiento Dental Precio Buenos Aires | AM Estética Dental",
        description: "Blanqueamiento dental profesional en una sesión. Precio real, resultado inmediato. Puerto Madero, Buenos Aires.",
        url: CANONICAL,
    },
    keywords: "blanqueamiento dental Buenos Aires, blanqueamiento dental precio, blanqueamiento laser Buenos Aires, blanqueamiento dental profesional, precio blanqueamiento dental Argentina"
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Blanqueamiento dental precio Buenos Aires — AM Estética Dental",
    description: "Precio del blanqueamiento dental profesional en Buenos Aires. Dr. Ariel Merino, Puerto Madero.",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Blanqueamiento dental profesional" },
};

const TIPOS = [
    {
        titulo: "Blanqueamiento LED",
        desc: "Gel activado con luz LED. Ideal para manchas superficiales y tono general. Resultado en 1 sesión de 60 minutos.",
        ideal: "Pacientes con dientes ligeramente amarillos o manchados por café, té o vino.",
    },
    {
        titulo: "Blanqueamiento Láser",
        desc: "Mayor potencia. Activa el gel con luz láser de alta intensidad. Resultado más notorio en menos tiempo.",
        ideal: "Pacientes con mayor grado de amarillamiento o manchas más profundas.",
    },
    {
        titulo: "Blanqueamiento combinado",
        desc: "Sesión en clínica + kit domiciliario. El resultado más duradero y uniforme.",
        ideal: "Pacientes que quieren el mejor resultado posible y lo mantienen en casa.",
    },
];

export default function BlanqueamientoPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">
                        Consultar precio →
                    </a>
                </header>

                {/* Hero */}
                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Buenos Aires · Puerto Madero</span>
                            <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                                Blanqueamiento dental<br />
                                <span className="font-cormorant italic text-oro">en una sesión.</span>
                            </h1>
                            <p className="text-crema/65 text-lg font-light leading-relaxed mb-4">
                                Resultado inmediato. Protocolo diseñado para minimizar la sensibilidad. Supervisión del Dr. Ariel Merino en Puerto Madero, Buenos Aires.
                            </p>
                            <div className="flex items-center gap-4 mb-8 p-4 border border-oro/20 rounded-xl">
                                <div>
                                    <p className="text-oro font-semibold text-2xl font-cormorant italic">1 sesión</p>
                                    <p className="text-crema/50 text-sm">60–90 minutos · resultado visible</p>
                                </div>
                                <div className="w-px h-12 bg-oro/20" />
                                <div>
                                    <p className="text-oro font-semibold text-2xl font-cormorant italic">8–10 tonos</p>
                                    <p className="text-crema/50 text-sm">de mejora según el caso</p>
                                </div>
                            </div>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                                Consultar precio de mi caso →
                            </a>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15 bg-carbon/50">
                            <Image
                                src={`${CDN}/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires`}
                                alt="Blanqueamiento dental antes y después Buenos Aires — AM Estética Dental Puerto Madero"
                                fill priority sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-flex items-center border border-oro/30 bg-carbon/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-oro">
                                    Resultado real — AM Estética Dental
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tipos */}
                <section className="px-6 py-16 border-y border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-light text-crema mb-10">
                            Tipos de <span className="font-cormorant italic text-oro">blanqueamiento</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {TIPOS.map((t) => (
                                <div key={t.titulo} className="border border-oro/15 rounded-2xl p-6">
                                    <h3 className="font-semibold text-crema text-sm mb-3">{t.titulo}</h3>
                                    <p className="text-crema/60 text-xs leading-relaxed mb-4">{t.desc}</p>
                                    <p className="text-oro/60 text-[10px] uppercase tracking-widest">{t.ideal}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Precio */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-4">
                        ¿Cuánto cuesta el blanqueamiento dental <span className="font-cormorant italic text-oro">en Buenos Aires?</span>
                    </h2>
                    <p className="text-crema/55 text-sm mb-10 max-w-xl">El precio varía según el tipo de blanqueamiento y el diagnóstico inicial. Como referencia:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            { tipo: "Blanqueamiento LED", precio: "Desde USD 150", nota: "1 sesión · 60 minutos" },
                            { tipo: "Blanqueamiento Láser", precio: "Desde USD 250", nota: "1 sesión · mayor potencia" },
                            { tipo: "Combinado (clínica + kit)", precio: "Desde USD 350", nota: "Mejor resultado y duración" },
                        ].map((o) => (
                            <div key={o.tipo} className="border border-oro/15 rounded-2xl p-6">
                                <p className="text-oro text-[9px] uppercase tracking-widest mb-2">{o.tipo}</p>
                                <p className="text-oro font-semibold text-xl mb-1">{o.precio}</p>
                                <p className="text-crema/40 text-xs">{o.nota}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-crema/30 text-xs">Inversión exacta según diagnóstico.</p>
                </section>

                {/* FAQ */}
                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">
                        Preguntas <span className="font-cormorant italic text-oro">frecuentes</span>
                    </h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿El blanqueamiento dental duele?", a: "Con el protocolo profesional que usamos en AM, la sensibilidad es mínima o inexistente. Aplicamos gel desensibilizante antes y después de cada sesión. La gran mayoría de nuestros pacientes no reporta molestias." },
                            { q: "¿Cuánto dura el resultado del blanqueamiento?", a: "Entre 1 y 3 años según los hábitos. El café, el vino, el té y el tabaco aceleran el re-oscurecimiento. Con el kit domiciliario de mantenimiento, el resultado puede extenderse considerablemente." },
                            { q: "¿Se puede hacer blanqueamiento con carillas o coronas?", a: "No. El blanqueamiento solo funciona sobre el esmalte natural. Las cerámicas, resinas y coronas no cambian de color. Si tenés restauraciones anteriores, lo evaluamos en la consulta inicial para coordinar el tratamiento." },
                            { q: "¿Cuántas sesiones de blanqueamiento se necesitan?", a: "En la mayoría de los casos, una sola sesión en clínica es suficiente para lograr un cambio notorio. Casos de manchas más profundas o amarillamiento severo pueden requerir 2 sesiones o el protocolo combinado con kit domiciliario." },
                            { q: "¿El blanqueamiento funciona en dientes con manchas de flúor o tetraciclina?", a: "Estas manchas son más resistentes al blanqueamiento convencional. En esos casos, las carillas cerámicas o lentes de contacto dental suelen ser una mejor opción para lograr el resultado deseado." },
                            { q: "¿Cuánto cuesta el blanqueamiento dental en Buenos Aires?", a: "En AM Estética Dental, el blanqueamiento LED parte desde USD 150 y el láser desde USD 250, en una sola sesión. El protocolo combinado con kit domiciliario parte desde USD 350. La indicación final depende del diagnóstico clínico." },
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

                {/* Galería — casos reales */}
                <section className="px-6 py-16 border-t border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Casos reales</span>
                            <h2 className="text-2xl font-light text-crema">
                                Transformaciones reales <span className="font-cormorant italic text-oro">en AM Estética Dental.</span>
                            </h2>
                            <p className="text-crema/45 text-sm mt-3 max-w-xl">Blanqueamiento dental combinado con tratamientos de armonización estética. Resultados sin filtros.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {[
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-comparativa-labios-sonrisa-resinas-blanqueamiento-am-estetica-dental", alt: "Comparativa labios y sonrisa después de blanqueamiento y resinas — AM Estética Dental Buenos Aires" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-ceramica-resultado-natural-dr-ariel-merino-am-estetica-dental", alt: "Resultado natural después de blanqueamiento y carilla cerámica unitaria — Dr. Ariel Merino AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-01-am-estetica-dental", alt: "Antes y después — carillas cerámicas y blanqueamiento — AM Estética Dental Buenos Aires" },
                            ].map((foto) => (
                                <div key={foto.src} className="relative aspect-square rounded-2xl overflow-hidden border border-oro/10 group">
                                    <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/casos-antes-y-despues" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">
                                Ver todos los casos clínicos →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 py-16 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">Una sesión. Resultado inmediato.</h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">Consultanos por WhatsApp y coordinamos tu turno en Puerto Madero.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">
                        Agendá tu sesión de blanqueamiento →
                    </a>
                    <p className="text-crema/25 text-xs mt-4">Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>

            </main>
        </>
    );
}
