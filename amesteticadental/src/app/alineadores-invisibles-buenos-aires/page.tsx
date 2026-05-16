import type { Metadata } from "next";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/alineadores-invisibles-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=541170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20alineadores%20invisibles.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Alineadores Invisibles Buenos Aires — Precio 2026 | AM Estética Dental",
    description: "Alineadores invisibles en Buenos Aires: precio, marcas y proceso. Ortodoncia sin brackets. Alineadores AM, Invisalign y más. Dr. Ariel Merino, Puerto Madero.",
    alternates: { canonical: CANONICAL },
    keywords: "alineadores invisibles Buenos Aires, alineadores dentales precio Buenos Aires, Invisalign Buenos Aires precio, ortodoncia invisible Buenos Aires, aparatos invisibles precio Argentina",
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Alineadores invisibles Buenos Aires — AM Estética Dental",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Ortodoncia invisible con alineadores" },
};

export default function AlineadoresBAPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="bg-carbon text-crema font-manrope min-h-screen">
                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">Quiero saber si soy candidato →</a>
                </header>

                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Buenos Aires · Puerto Madero</span>
                    <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                        Alineadores invisibles<br /><span className="font-cormorant italic text-oro">en Buenos Aires.</span>
                    </h1>
                    <p className="text-crema/65 text-lg font-light leading-relaxed mb-8 max-w-xl">
                        Ortodoncia sin brackets, sin alambre, sin que nadie lo note. Planificación digital completa desde el primer día. Ves tu resultado final antes de empezar.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">Quiero saber si soy candidato →</a>
                        <Link href="/alineadores-invisibles" className="inline-flex items-center gap-2 border border-oro/25 text-oro px-6 py-4 rounded-full text-sm hover:border-oro/50 transition-colors">Ver más sobre alineadores AM →</Link>
                    </div>
                </section>

                <section className="px-6 py-16 border-y border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">¿Cuánto cuestan los alineadores invisibles <span className="font-cormorant italic text-oro">en Buenos Aires?</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            { tipo: "Caso leve", precio: "Desde USD 1.500", nota: "Apiñamiento menor · 6 a 12 meses" },
                            { tipo: "Caso moderado", precio: "USD 2.500 – 4.000", nota: "Apiñamiento moderado · 12 a 18 meses" },
                            { tipo: "Caso complejo", precio: "USD 4.000 – 6.000", nota: "Mordida + apiñamiento · 18 a 24 meses" },
                        ].map((o) => (
                            <div key={o.tipo} className="border border-oro/15 rounded-2xl p-6">
                                <p className="text-oro text-[9px] uppercase tracking-widest mb-2">{o.tipo}</p>
                                <p className="text-oro font-semibold text-xl mb-1">{o.precio}</p>
                                <p className="text-crema/40 text-xs">{o.nota}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-crema/30 text-xs">La inversión incluye todos los alineadores del tratamiento + controles.</p>
                </section>

                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">Preguntas <span className="font-cormorant italic text-oro">frecuentes</span></h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿Cuánto tiempo dura el tratamiento con alineadores invisibles?", a: "Depende del caso: desde 6 meses para apiñamientos leves hasta 24 meses para casos complejos con corrección de mordida. La planificación digital te muestra el tiempo estimado antes de empezar." },
                            { q: "¿Los alineadores invisibles duelen?", a: "Puede haber presión leve los primeros 2-3 días de cada nueva serie de alineadores. No es dolor sino sensación de ajuste. Desaparece rápido y no interfiere con la vida diaria." },
                            { q: "¿Se pueden comer con los alineadores puestos?", a: "No. Los alineadores se retiran para comer y beber (excepto agua). Se usan 20-22 horas por día. Eso es la principal diferencia con los brackets fijos." },
                            { q: "¿Los alineadores reemplazan completamente a la ortodoncia tradicional?", a: "Para la mayoría de los casos, sí. Casos muy complejos con discrepancias esqueléticas severas pueden requerir ortodoncia fija. Lo evaluamos en la primera consulta." },
                            { q: "¿Cuánto cuestan los alineadores invisibles en Buenos Aires?", a: "En AM Estética Dental, los tratamientos con alineadores arrancan desde USD 1.500 para casos leves. Casos complejos pueden llegar a USD 6.000. La inversión incluye todos los alineadores necesarios y los controles durante el tratamiento." },
                            { q: "¿Qué diferencia hay entre Invisalign y los alineadores AM?", a: "Invisalign es la marca más conocida a nivel mundial. Los alineadores AM son fabricados con tecnología equivalente, con seguimiento directo del Dr. Merino, sin intermediarios de marca. El resultado clínico es comparable con mayor personalización del tratamiento." },
                        ].map(({ q, a }) => (
                            <details key={q} className="border border-oro/12 rounded-xl group">
                                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-crema font-manrope text-sm font-medium select-none">
                                    {q}<span className="text-oro text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                                </summary>
                                <p className="px-6 pb-5 text-crema/60 text-sm leading-relaxed">{a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                <section className="px-6 py-16 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">Tu sonrisa alineada, <span className="font-cormorant italic text-oro">sin que nadie lo note.</span></h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">Valoración clínica inicial. Te decimos si sos candidato y cuánto dura tu caso.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">Consultar por WhatsApp →</a>
                    <p className="text-crema/25 text-xs mt-4">Camila O'Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>
            </main>
        </>
    );
}
