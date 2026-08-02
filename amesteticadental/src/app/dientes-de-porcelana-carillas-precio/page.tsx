import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/dientes-de-porcelana-carillas-precio";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20dientes%20de%20porcelana.";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Dientes de Porcelana: Carillas y Precio 2026 | AM",
    description: "Dientes de porcelana en Buenos Aires: precio, tipos y diferencias. Carillas de porcelana y lentes de contacto dental. Dr. Ariel Merino, AM Estética Dental, Puerto Madero.",
    alternates: { canonical: CANONICAL },
    keywords: "dientes de porcelana Buenos Aires, dientes de porcelana precio, fundas para dientes Buenos Aires, carillas porcelana precio Argentina, carillas dentales porcelana"
};

const DIFERENCIAS = [
    { nombre: "Carilla de porcelana tradicional", espesor: "0.5–0.7mm", desgaste: "Requiere leve desgaste", duracion: "15–20 años", precio: "USD 1.000–1.500/pieza" },
    { nombre: "Lente de contacto dental AM", espesor: "0.2–0.3mm", desgaste: "Sin desgaste", duracion: "15–20 años", precio: "USD 1.000–1.500/pieza", destacado: true },
    { nombre: "Corona de porcelana", espesor: "Cubre el diente completo", desgaste: "Desgaste significativo", duracion: "15–25 años", precio: "USD 600–1.000/pieza" },
];

export default function DientesPorcelanaPage() {
    return (
        <>
            <main className="bg-carbon text-crema font-manrope min-h-screen">
                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">
                        Consultar inversión →
                    </a>
                </header>

                {/* Hero */}
                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Buenos Aires · Puerto Madero</span>
                            <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                                Dientes de porcelana<br />
                                <span className="font-cormorant italic text-oro">en Buenos Aires.</span>
                            </h1>
                            <p className="text-crema/65 text-lg font-light leading-relaxed mb-8">
                                Carillas de porcelana y lentes de contacto dental. La tecnología cerámica más avanzada para transformar tu sonrisa con resultados naturales y durables.
                            </p>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                                Consultar inversión →
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15 col-span-2">
                                <Image
                                    src={`${CDN}/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental`}
                                    alt="Dientes de porcelana — carillas antes y después Buenos Aires — AM Estética Dental Puerto Madero"
                                    fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                            </div>
                            <div className="relative aspect-square rounded-xl overflow-hidden border border-oro/15">
                                <Image src={`${CDN}/diseno-sonrisa-diastemas/fragmentos-ceramicos-lentes-contacto-dental-02mm-carillas-am-dr-ariel-merino-am-estetica-dental-buenos-aires`}
                                    alt="Fragmentos cerámicos porcelana 0.2mm — lentes de contacto dental AM" fill sizes="200px" className="object-cover" />
                            </div>
                            <div className="relative aspect-square rounded-xl overflow-hidden border border-oro/15">
                                <Image src={`${CDN}/diseno-sonrisa-diastemas/fragmentos-ceramicos-lentes-contacto-dental-dedo-escala-carillas-am-dr-ariel-merino-am-estetica-dental`}
                                    alt="Escala dientes de porcelana en dedo — carillas AM lentes de contacto" fill sizes="200px" className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Qué son */}
                <section className="px-6 py-16 border-y border-oro/8">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-light text-crema mb-4">¿Qué son los <span className="font-cormorant italic text-oro">dientes de porcelana?</span></h2>
                            <p className="text-crema/60 text-sm leading-relaxed mb-4">
                                &ldquo;Dientes de porcelana&rdquo; es el término popular para las carillas cerámicas — láminas ultra delgadas que se adhieren a la cara frontal del diente para cambiar su color, forma y tamaño.
                            </p>
                            <p className="text-crema/60 text-sm leading-relaxed">
                                En AM usamos la versión más avanzada: lentes de contacto dental AM, de apenas 0.2mm de espesor, con una preparación mínima del esmalte. Sin anestesia en la mayoría de los casos. Resultado indistinguible del diente natural.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-light text-crema mb-4">¿Para quién son <span className="font-cormorant italic text-oro">ideales?</span></h2>
                            <ul className="space-y-3">
                                {["Dientes amarillos o manchados que no aclaran con blanqueamiento", "Dientes pequeños o con forma irregular", "Espacios entre dientes (diastemas)", "Apiñamiento leve sin necesidad de ortodoncia", "Dientes desgastados por el tiempo o el bruxismo", "Quienes buscan una sonrisa nueva, sin aspecto artificial"].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-crema/65 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-oro flex-shrink-0 mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Comparativa */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">Tipos de <span className="font-cormorant italic text-oro">porcelana dental</span></h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-oro/15">
                                    <th className="text-left py-3 pr-6 text-oro/60 text-[10px] uppercase tracking-widest font-normal">Tipo</th>
                                    <th className="text-left py-3 pr-6 text-oro/60 text-[10px] uppercase tracking-widest font-normal">Espesor</th>
                                    <th className="text-left py-3 pr-6 text-oro/60 text-[10px] uppercase tracking-widest font-normal">Desgaste</th>
                                    <th className="text-left py-3 pr-6 text-oro/60 text-[10px] uppercase tracking-widest font-normal">Duración</th>
                                    <th className="text-left py-3 text-oro/60 text-[10px] uppercase tracking-widest font-normal">Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DIFERENCIAS.map((d) => (
                                    <tr key={d.nombre} className={`border-b border-oro/8 ${d.destacado ? "bg-oro/5" : ""}`}>
                                        <td className={`py-4 pr-6 font-medium ${d.destacado ? "text-oro" : "text-crema/70"}`}>
                                            {d.nombre}
                                            {d.destacado && <span className="ml-2 text-[9px] border border-oro/30 rounded-full px-2 py-0.5 text-oro">AM</span>}
                                        </td>
                                        <td className="py-4 pr-6 text-crema/55">{d.espesor}</td>
                                        <td className="py-4 pr-6 text-crema/55">{d.desgaste}</td>
                                        <td className="py-4 pr-6 text-crema/55">{d.duracion}</td>
                                        <td className="py-4 text-crema/55">{d.precio}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQ */}
                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">Preguntas <span className="font-cormorant italic text-oro">frecuentes</span></h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿Cuánto cuestan los dientes de porcelana en Buenos Aires?", a: "Las carillas de porcelana en AM Estética Dental van de USD 1.000 a 1.500 por pieza. Un diseño de sonrisa de 10 piezas ronda los USD 10.000 a 15.000. La inversión exacta se define luego de una valoración clínica inicial." },
                            { q: "¿Los dientes de porcelana son permanentes?", a: "Duran entre 15 y 20 años con cuidados normales. No son permanentes en el sentido de que eventualmente pueden necesitar reemplazo, pero no son reversibles: una vez colocados, el diente queda preparado para esa restauración." },
                            { q: "¿Se pueden hacer dientes de porcelana sin desgastar los dientes?", a: "Sí. Con las carillas AM lentes de contacto de 0.2mm, en la mayoría de los casos no se requiere ningún desgaste del diente natural. Es la opción más conservadora disponible actualmente." },
                            { q: "¿Se notan los dientes de porcelana?", a: "No, si están bien diseñados. La cerámica que usamos imita el índice de refracción del esmalte natural. A la luz, se comportan igual que dientes sanos. El objetivo siempre es que parezcan tus propios dientes." },
                            { q: "¿Qué diferencia hay entre carilla y corona de porcelana?", a: "La carilla cubre solo la cara frontal del diente (mínimamente invasiva). La corona cubre el diente por completo y requiere un desgaste mucho mayor. Preferimos las carillas siempre que sea posible." },
                            { q: "¿Cuánto tiempo tarda el tratamiento?", a: "Entre 7 y 15 días desde la primera consulta hasta el resultado final. El diseño digital y el mock-up se hacen en la primera visita, para que veas cómo vas a quedar antes de empezar." },
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

                {/* CTA */}
                <section className="px-6 py-16 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">La sonrisa que querés, <span className="font-cormorant italic text-oro">en 10 días.</span></h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">Valoración clínica inicial. Te decimos qué necesitás y cuál sería la inversión antes de decidir.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">
                        Consultar por WhatsApp →
                    </a>
                    <p className="text-crema/25 text-xs mt-4">Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>
            </main>
        </>
    );
}
