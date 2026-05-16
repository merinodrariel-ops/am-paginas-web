import type { Metadata } from "next";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/carillas-de-resina";
const WA = "https://api.whatsapp.com/send?phone=541170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20carillas%20de%20resina.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Carillas de Resina Buenos Aires 2026 | AM Estética Dental Puerto Madero",
    description: "Carillas de resina compuesta en Buenos Aires. Una alternativa más accesible a las carillas de porcelana. Comparativa honesta: cuándo conviene cada opción. Dr. Ariel Merino, Puerto Madero.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Carillas de Resina vs Porcelana Buenos Aires | AM Estética Dental",
        description: "Carillas de resina: una sesión, sin desgaste del diente. Comparativa honesta con las carillas de porcelana. Dr. Ariel Merino, Puerto Madero.",
        url: CANONICAL,
    },
    keywords: "carillas de resina Buenos Aires, carillas resina precio, carillas resina compuesta dental, carillas composite Buenos Aires, carillas resina vs porcelana"
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Carillas de resina Buenos Aires — AM Estética Dental",
    description: "Carillas de resina compuesta en Buenos Aires. Comparativa con carillas de porcelana. Dr. Ariel Merino, Puerto Madero.",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Carillas de resina compuesta" },
    mainEntity: {
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Cuánto duran las carillas de resina?",
                acceptedAnswer: { "@type": "Answer", text: "Las carillas de resina duran entre 5 y 8 años con buena higiene. Pueden necesitar retoques o pulidos cada 2-3 años para mantener el brillo." }
            },
            {
                "@type": "Question",
                name: "¿Es mejor la resina o la porcelana para carillas?",
                acceptedAnswer: { "@type": "Answer", text: "Depende del caso. La porcelana dura más (15-20 años), tiene mejor estética a largo plazo y no se mancha. La resina es más accesible económicamente y se hace en una sola sesión. En AM trabajamos principalmente con porcelana feldespática porque los resultados son superiores, pero evaluamos cada caso." }
            },
            {
                "@type": "Question",
                name: "¿Las carillas de resina se manchan?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. La resina es más porosa que la porcelana y puede mancharse con café, té, vino o cigarrillo con el tiempo. Requiere pulidos periódicos para mantener el color." }
            },
            {
                "@type": "Question",
                name: "¿Las carillas de resina dañan el diente?",
                acceptedAnswer: { "@type": "Answer", text: "En general no. Las carillas de resina se adhieren directamente al esmalte sin necesidad de desgastar el diente. Son reversibles en muchos casos." }
            }
        ]
    }
};

const COMPARATIVA = [
    { aspecto: "Duración", resina: "5–8 años", porcelana: "15–20+ años" },
    { aspecto: "Sesiones", resina: "1 sesión", porcelana: "2 sesiones (10-15 días)" },
    { aspecto: "Manchas", resina: "Se mancha con el tiempo", porcelana: "No se mancha" },
    { aspecto: "Reparación", resina: "Reparable directamente", porcelana: "Requiere nueva carilla" },
    { aspecto: "Resultado estético", resina: "Muy bueno", porcelana: "Superior, más natural" },
    { aspecto: "Costo relativo", resina: "Menor", porcelana: "Mayor" },
];

const FAQS = [
    {
        q: "¿Cuánto duran las carillas de resina?",
        a: "Las carillas de resina duran entre 5 y 8 años con buena higiene. Pueden necesitar retoques o pulidos cada 2-3 años para mantener el brillo original."
    },
    {
        q: "¿Es mejor la resina o la porcelana para carillas?",
        a: "Depende del caso y del presupuesto. La porcelana dura más (15-20 años), tiene mejor estética a largo plazo y no se mancha. La resina es más accesible y se hace en una sesión. En AM trabajamos principalmente con porcelana feldespática porque los resultados son superiores, pero evaluamos cada caso con honestidad."
    },
    {
        q: "¿Las carillas de resina se manchan?",
        a: "Sí. La resina es más porosa que la porcelana y puede adquirir tono amarillento con café, té, vino o tabaco con el tiempo. Requiere pulidos periódicos para mantener el color."
    },
    {
        q: "¿Las carillas de resina dañan el diente?",
        a: "En general no. Las carillas de resina se adhieren directamente al esmalte sin necesidad de desgastar el diente y son reversibles en la mayoría de los casos."
    },
    {
        q: "¿Puedo pasar de resina a porcelana en el futuro?",
        a: "Sí. Muchos pacientes comienzan con resina y en el futuro optan por porcelana. Es una transición perfectamente viable."
    },
];

export default function CarillasResinaPage() {
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
                <section className="px-6 py-20 max-w-5xl mx-auto text-center">
                    <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Buenos Aires · Puerto Madero</span>
                    <h1 className="text-4xl md:text-6xl font-light text-crema leading-tight mb-6">
                        Carillas de resina<br />
                        <span className="font-cormorant italic text-oro">en una sesión.</span>
                    </h1>
                    <p className="text-crema/65 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Una alternativa válida para mejorar la estética dental en una sola visita. Te explicamos honestamente cuándo conviene la resina y cuándo la porcelana.
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold hover:bg-oro/90 transition-all">
                        Consultar precio →
                    </a>
                </section>

                {/* Comparativa */}
                <section className="px-6 py-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10 text-center">
                        Resina <span className="font-cormorant italic text-oro">vs</span> Porcelana
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-oro/20">
                                    <th className="text-left py-4 pr-8 text-crema/50 font-normal uppercase tracking-widest text-xs">Aspecto</th>
                                    <th className="text-center py-4 px-6 text-crema font-semibold">Resina</th>
                                    <th className="text-center py-4 px-6 text-oro font-semibold">Porcelana AM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARATIVA.map(({ aspecto, resina, porcelana }) => (
                                    <tr key={aspecto} className="border-b border-oro/10">
                                        <td className="py-4 pr-8 text-crema/60">{aspecto}</td>
                                        <td className="py-4 px-6 text-center text-crema/70">{resina}</td>
                                        <td className="py-4 px-6 text-center text-oro/90 font-medium">{porcelana}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-crema/40 text-xs mt-6 text-center">En AM trabajamos principalmente con porcelana feldespática. Evaluamos cada caso para recomendarte la mejor opción.</p>
                </section>

                {/* Cuándo conviene */}
                <section className="px-6 py-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10 text-center">
                        ¿Cuándo conviene <span className="font-cormorant italic text-oro">cada opción?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-oro/15 rounded-2xl p-7">
                            <h3 className="text-crema font-semibold mb-4 text-lg">Carillas de resina</h3>
                            <ul className="space-y-3 text-crema/65 text-sm">
                                {[
                                    "Correcciones puntuales (un diente o dos)",
                                    "Presupuesto más acotado",
                                    "Resultado inmediato en 1 sesión",
                                    "Reparaciones de carillas existentes",
                                    "Prueba antes de carillas definitivas",
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-crema/30 mt-0.5">·</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border border-oro/40 rounded-2xl p-7 relative">
                            <span className="absolute -top-3 left-6 bg-oro text-carbon text-xs font-semibold px-3 py-1 rounded-full">Recomendado AM</span>
                            <h3 className="text-oro font-semibold mb-4 text-lg">Carillas de porcelana</h3>
                            <ul className="space-y-3 text-crema/65 text-sm">
                                {[
                                    "Transformación completa de la sonrisa (6-10 piezas)",
                                    "Resultado estético de alta gama",
                                    "Durabilidad a 15-20 años",
                                    "Sin manchas ni cambio de color",
                                    "Efecto más natural y translúcido",
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-oro/50 mt-0.5">·</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA medio */}
                <section className="px-6 py-16 max-w-4xl mx-auto text-center border-y border-oro/10">
                    <h2 className="text-3xl font-light text-crema mb-4">
                        Te asesoramos <span className="font-cormorant italic text-oro">sin compromiso.</span>
                    </h2>
                    <p className="text-crema/55 mb-8 max-w-xl mx-auto">Te explicamos qué opción es la más adecuada para tu caso, tu presupuesto y tu objetivo estético.</p>
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

                {/* Links relacionados */}
                <section className="px-6 py-12 max-w-4xl mx-auto">
                    <h3 className="text-crema/50 text-sm uppercase tracking-widest mb-6 text-center">También puede interesarte</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { href: "/precio-carillas-dentales-buenos-aires", label: "Precio carillas dentales" },
                            { href: "/carillas-de-porcelana-vs-resina", label: "Comparativa detallada porcelana vs resina" },
                            { href: "/carillas-sin-desgaste", label: "Carillas sin desgaste" },
                            { href: "/lentes-de-contacto-dental-precio-buenos-aires", label: "Lentes de contacto dental" },
                        ].map(({ href, label }) => (
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
                        ¿Resina o porcelana?<br />
                        <span className="font-cormorant italic text-oro">Te ayudamos a elegir.</span>
                    </h2>
                    <p className="text-crema/55 mb-8 max-w-xl mx-auto">Dr. Ariel Merino · AM Estética Dental · Camila O'Gorman 412, Puerto Madero, Buenos Aires.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold hover:bg-oro/90 transition-all">
                        Escribinos por WhatsApp →
                    </a>
                </section>

            </main>
        </>
    );
}
