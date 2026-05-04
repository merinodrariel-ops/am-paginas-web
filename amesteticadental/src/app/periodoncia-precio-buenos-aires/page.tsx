import type { Metadata } from "next";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/periodoncia-precio-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=541170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20periodoncia.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Periodoncia Buenos Aires — Precio y Tratamiento | AM Estética Dental",
    description: "Tratamiento periodontal en Buenos Aires. Periodontitis, gingivitis, gingivectomía láser. Precio y turno. Dr. Ariel Merino, AM Estética Dental, Puerto Madero.",
    alternates: { canonical: CANONICAL },
    keywords: "periodoncia Buenos Aires, periodontitis tratamiento Buenos Aires, gingivectomia laser Buenos Aires, encías tratamiento precio Buenos Aires",
};

export default function PeridonciaPage() {
    return (
        <main className="bg-carbon text-crema font-manrope min-h-screen">
            <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">Consultar →</a>
            </header>

            <section className="px-6 py-20 max-w-6xl mx-auto">
                <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Buenos Aires · Puerto Madero</span>
                <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                    Periodoncia<br /><span className="font-cormorant italic text-oro">en Buenos Aires.</span>
                </h1>
                <p className="text-crema/65 text-lg font-light leading-relaxed mb-8 max-w-xl">
                    Tratamiento de encías, gingivitis, periodontitis y gingivectomía láser. La salud periodontal es la base de cualquier tratamiento estético. Sin encías sanas, ninguna carilla queda bien.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">Quiero evaluar mis encías →</a>
            </section>

            <section className="px-6 py-16 border-y border-oro/8 max-w-6xl mx-auto">
                <h2 className="text-2xl font-light text-crema mb-10">Tratamientos <span className="font-cormorant italic text-oro">periodontales</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { titulo: "Gingivectomía láser", desc: "Remodelado de la línea gingival con láser para armonizar la sonrisa. Sin bisturí, mínima recuperación. Se combina frecuentemente con diseño de sonrisa y carillas." },
                        { titulo: "Tratamiento de periodontitis", desc: "Eliminación del sarro subgingival y bacterias. Detiene la pérdida ósea y previene la caída de los dientes. Primera línea de tratamiento antes de cualquier estética." },
                        { titulo: "Tratamiento de gingivitis", desc: "Inflamación de la encía sin pérdida ósea. Se trata con destartraje profesional y corrección de higiene. Primer paso para cualquier rehabilitación oral." },
                        { titulo: "Cirugía periodontal", desc: "Para casos avanzados de periodontitis con bolsas profundas. Requiere planificación con periodontograma y serie radiográfica completa." },
                    ].map((t) => (
                        <div key={t.titulo} className="border border-oro/12 rounded-2xl p-6">
                            <h3 className="font-semibold text-crema text-sm mb-3">{t.titulo}</h3>
                            <p className="text-crema/55 text-xs leading-relaxed">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                <h2 className="text-2xl font-light text-crema mb-10">Preguntas <span className="font-cormorant italic text-oro">frecuentes</span></h2>
                <div className="space-y-4 max-w-3xl">
                    {[
                        { q: "¿Qué es la periodoncia y cuándo se necesita?", a: "La periodoncia es la especialidad que trata las encías y el hueso que sostiene los dientes. Se necesita cuando hay sangrado al cepillarse, encías inflamadas, movilidad dental o mal aliento crónico. También antes de cualquier tratamiento estético importante." },
                        { q: "¿La gingivectomía láser es dolorosa?", a: "No. Se realiza con anestesia tópica o local según el caso. El láser cauteriza mientras corta, por lo que hay muy poco sangrado y la recuperación es rápida — la mayoría de los pacientes vuelve a su rutina al día siguiente." },
                        { q: "¿Se puede hacer estética dental con periodontitis?", a: "No directamente. La periodontitis activa debe tratarse primero. Una vez que las encías están sanas y estables, podemos avanzar con carillas, blanqueamiento o diseño de sonrisa. Es el orden correcto para garantizar que el resultado dure." },
                        { q: "¿Cuánto cuesta el tratamiento periodontal en Buenos Aires?", a: "Depende del grado de afectación. Una gingivectomía estética puede costar desde USD 100. Un tratamiento de periodontitis completo varía según la cantidad de cuadrantes afectados. La valoración clínica incluye sondaje periodontal." },
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
                <h2 className="font-light text-3xl text-crema mb-4">Encías sanas, <span className="font-cormorant italic text-oro">sonrisa durable.</span></h2>
                <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">Valoración periodontal clínica. Base obligatoria de cualquier tratamiento estético.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">Consultar por WhatsApp →</a>
                <p className="text-crema/25 text-xs mt-4">Camila O'Gorman 412, Puerto Madero · Buenos Aires</p>
            </section>
        </main>
    );
}
