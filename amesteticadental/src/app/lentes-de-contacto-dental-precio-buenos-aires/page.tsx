import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/lentes-de-contacto-dental-precio-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20lentes%20de%20contacto%20dental.";
const CDN1 = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas";
const CDN2 = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Lentes de Contacto Dental Precio Buenos Aires 2026 | AM Estética Dental",
    description: "Precio e inversión en lentes de contacto dental en Buenos Aires 2026. Carillas AM ultra delgadas de 0.2mm sin desgaste. Dr. Ariel Merino, AM Estética Dental, Puerto Madero.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Lentes de Contacto Dental Precio Buenos Aires | AM Estética Dental",
        description: "Carillas AM ultra delgadas 0.2mm. Sin desgaste del diente natural. Precio real, resultado inmediato. Puerto Madero, Buenos Aires.",
        url: CANONICAL,
        images: [{ url: `${CDN1}/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires` }],
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Lentes de contacto dental precio Buenos Aires — AM Estética Dental",
    description: "Precio de lentes de contacto dental (carillas AM ultra delgadas 0.2mm) en Buenos Aires. Sin desgaste del diente. Dr. Ariel Merino, Puerto Madero.",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Lentes de contacto dental — carillas AM ultra delgadas" },
};

const DIFERENCIAS = [
    { titulo: "Carilla tradicional", items: ["Requiere desgaste del diente", "0.5 a 0.7mm de espesor", "Proceso irreversible", "Mayor invasividad"], color: "border-crema/10" },
    { titulo: "Lente de contacto AM", items: ["Sin desgaste del diente natural", "Solo 0.2 a 0.3mm de espesor", "Mínimamente invasivo", "El diente original intacto"], color: "border-oro/30", highlight: true },
];

export default function LentesContactoDentalLanding() {
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
                            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Buenos Aires · Sin desgaste</span>
                            <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                                Lentes de contacto<br />
                                <span className="font-cormorant italic text-oro">dental en Buenos Aires.</span>
                            </h1>
                            <p className="text-crema/65 text-lg font-light leading-relaxed mb-4">
                                Carillas AM de apenas 0.2mm — como una lente de contacto, pero para tus dientes. Resultado inmediato, sin tocar el diente natural.
                            </p>
                            <div className="flex items-center gap-3 mb-8 p-4 border border-oro/20 rounded-xl">
                                <span className="text-oro text-2xl font-cormorant italic">0.2mm</span>
                                <p className="text-crema/60 text-sm">El espesor de una lente de contacto. Tan delgada que no se siente. Tan resistente que dura años.</p>
                            </div>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                                Consultar precio de mi caso →
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15">
                                <Image src={`${CDN1}/fragmentos-ceramicos-lentes-contacto-dental-dedo-escala-carillas-am-dr-ariel-merino-am-estetica-dental`}
                                    alt="Lente de contacto dental escala real en dedo — carillas AM 0.2mm — Dr. Ariel Merino AM Estética Dental"
                                    fill priority sizes="200px" className="object-cover" />
                            </div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15">
                                <Image src={`${CDN1}/fragmentos-ceramicos-lentes-contacto-dental-02mm-carillas-am-dr-ariel-merino-am-estetica-dental-buenos-aires`}
                                    alt="Fragmentos cerámicos lentes de contacto dental 0.2mm carillas AM Dr. Ariel Merino Buenos Aires"
                                    fill sizes="200px" className="object-cover" />
                            </div>
                            <div className="relative aspect-square col-span-2 rounded-2xl overflow-hidden border border-oro/15">
                                <Image src={`${CDN1}/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires`}
                                    alt="Lentes de contacto dental antes y después — diseño de sonrisa — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires"
                                    fill sizes="400px" className="object-cover" />
                                <div className="absolute bottom-3 left-3">
                                    <span className="inline-flex items-center border border-oro/30 bg-carbon/80 backdrop-blur-sm rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-oro">
                                        Antes y después — caso real
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparativa */}
                <section className="px-6 py-16 border-y border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-light text-crema mb-10">
                            ¿Qué diferencia hay con una <span className="font-cormorant italic text-oro">carilla tradicional?</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {DIFERENCIAS.map((d) => (
                                <div key={d.titulo} className={`border ${d.color} rounded-2xl p-6 ${d.highlight ? "bg-oro/5" : ""}`}>
                                    {d.highlight && <span className="text-oro text-[9px] uppercase tracking-widest block mb-3">Lo que hacemos en AM</span>}
                                    <h3 className={`font-semibold mb-4 ${d.highlight ? "text-oro" : "text-crema/60"}`}>{d.titulo}</h3>
                                    <ul className="space-y-2">
                                        {d.items.map((item) => (
                                            <li key={item} className={`flex items-start gap-2 text-sm ${d.highlight ? "text-crema/80" : "text-crema/40"}`}>
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${d.highlight ? "bg-oro" : "bg-crema/20"}`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">
                                Evaluar si soy candidato →
                            </a>
                        </div>
                    </div>
                </section>

                {/* Precio */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-4">
                        ¿Cuánto cuestan los lentes de <span className="font-cormorant italic text-oro">contacto dental?</span>
                    </h2>
                    <p className="text-crema/55 text-sm mb-10 max-w-xl">El precio varía según la cantidad de piezas y el caso clínico. Como referencia:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {[
                            { piezas: "6 piezas", precio: "Desde USD 5.400", desc: "Sector anterior — transformación básica" },
                            { piezas: "10 piezas", precio: "USD 10.000 – 15.000", desc: "Diseño de sonrisa completo — la opción más elegida" },
                            { piezas: "20 piezas", precio: "Desde USD 26.000", desc: "Rehabilitación full cerámica superior e inferior" },
                        ].map((o) => (
                            <div key={o.piezas} className="border border-oro/15 rounded-2xl p-6">
                                <p className="text-oro text-[9px] uppercase tracking-widest mb-2">{o.piezas}</p>
                                <p className="text-oro font-semibold text-xl mb-1">{o.precio}</p>
                                <p className="text-crema/50 text-xs">{o.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-crema/30 text-xs">La inversión exacta se define luego de una valoración clínica inicial.</p>
                </section>

                {/* Galería casos */}
                <section className="px-6 py-10 border-t border-oro/8 max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { src: `${CDN2}/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental`, alt: "Lentes de contacto dental labios antes y después AM Estética Dental" },
                            { src: `${CDN2}/carillas-porcelana-20-piezas-mordida-antes-despues-am-estetica-dental`, alt: "20 lentes de contacto dental mordida antes y después AM Estética Dental" },
                            { src: `${CDN1}/cierre-diastemas-intraoral-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-puerto-madero`, alt: "Lentes de contacto dental intraoral antes y después Puerto Madero" },
                            { src: `${CDN1}/diseno-sonrisa-diastemas-antes-despues-rostro-intraoral-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Lentes de contacto dental rostro e intraoral antes y después Buenos Aires" },
                        ].map((f, i) => (
                            <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-oro/10">
                                <Image src={f.src} alt={f.alt} fill sizes="200px" className="object-cover" />
                            </div>
                        ))}
                    </div>
                    <p className="text-crema/25 text-xs text-center mt-3">@drarielmerino · Casos reales sin filtros</p>
                </section>

                {/* FAQ */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">
                        Preguntas <span className="font-cormorant italic text-oro">frecuentes</span>
                    </h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿Cualquiera puede ponerse lentes de contacto dental?", a: "La mayoría de los pacientes son candidatos, pero hay requisitos. El diente debe tener suficiente esmalte disponible y estar sano. Pacientes con bruxismo severo o mordida muy forzada necesitan evaluación especial." },
                            { q: "¿Los lentes de contacto dental duran lo mismo que una carilla tradicional?", a: "Sí — entre 15 y 20 años con cuidados normales. La diferencia no es en durabilidad sino en invasividad: los lentes de contacto preservan mucho más el esmalte original." },
                            { q: "¿Se notan? ¿Se ven artificiales?", a: "No. La cerámica que usamos tiene el mismo índice de refracción que el esmalte natural. A la luz, se comportan igual que un diente real. El resultado es indistinguible de dientes naturales bien formados." },
                            { q: "¿Duelen? ¿Requieren anestesia?", a: "En la mayoría de los casos no se requiere anestesia porque el desgaste es mínimo o inexistente. Puede haber sensibilidad leve los primeros días, que desaparece sola." },
                            { q: "¿Cuánto cuestan los lentes de contacto dental en Buenos Aires?", a: "Entre USD 1.000 y 1.500 por pieza según el caso. Un diseño de sonrisa completo de 10 piezas ronda los USD 10.000 a 15.000. La inversión exacta se define luego de valorar clínicamente el caso." },
                            { q: "¿Qué diferencia hay entre lente de contacto dental y carilla tradicional?", a: "El espesor y la invasividad. Los lentes de contacto AM tienen 0.2-0.3mm — como una lente de contacto ocular. Las carillas tradicionales tienen 0.5-0.7mm y requieren desgaste previo del diente. El resultado estético es el mismo; la diferencia está en cuánto diente original se conserva." },
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
                        Sonrisa nueva.<br />
                        <span className="font-cormorant italic text-oro">Diente original intacto.</span>
                    </h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">
                        Consultanos por WhatsApp y te decimos si sos candidato y cuánto costaría tu caso.
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">
                        Quiero saber si soy candidato →
                    </a>
                    <p className="text-crema/25 text-xs mt-4">Camila O'Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>

            </main>
        </>
    );
}
