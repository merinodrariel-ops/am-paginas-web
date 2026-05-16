import type { Metadata } from "next";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/puentes-dentales";
const WA = "https://api.whatsapp.com/send?phone=541170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20puentes%20dentales.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Puentes Dentales Buenos Aires 2026 | AM Estética Dental Puerto Madero",
    description: "Puentes dentales fijos de cerámica en Buenos Aires. Reemplazá un diente perdido sin implante. Dr. Ariel Merino, AM Estética Dental, Puerto Madero. Precio y proceso.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Puentes Dentales Buenos Aires | AM Estética Dental",
        description: "Puentes dentales fijos de cerámica. Solución permanente para dientes perdidos sin implante. Dr. Ariel Merino, Puerto Madero, Buenos Aires.",
        url: CANONICAL,
    },
    keywords: "puentes dentales Buenos Aires, puente dental precio Argentina, puente dental fijo cerámica, puente dental porcelana Buenos Aires, puente dental vs implante"
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Puentes dentales Buenos Aires — AM Estética Dental",
    description: "Puentes dentales fijos de cerámica en Buenos Aires. Dr. Ariel Merino, Puerto Madero.",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Puente dental fijo" },
    mainEntity: {
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Cuánto dura un puente dental?",
                acceptedAnswer: { "@type": "Answer", text: "Un puente dental de cerámica dura entre 10 y 15 años con buena higiene. La clave es mantener limpios los dientes pilares y usar hilo dental o irrigador bucal bajo el puente." }
            },
            {
                "@type": "Question",
                name: "¿Es mejor un puente dental o un implante?",
                acceptedAnswer: { "@type": "Answer", text: "El implante es generalmente la opción superior porque no requiere desgastar los dientes adyacentes y dura toda la vida. El puente es preferible cuando los dientes vecinos ya tienen coronas o daño estructural, o cuando no hay suficiente hueso para un implante." }
            },
            {
                "@type": "Question",
                name: "¿Cuántas sesiones requiere un puente dental?",
                acceptedAnswer: { "@type": "Answer", text: "En general 2-3 sesiones: preparación de los dientes pilares e impresión, eventualmente una sesión de prueba, y la sesión final de cementado. El proceso completo toma entre 2 y 4 semanas." }
            },
            {
                "@type": "Question",
                name: "¿Duele hacerse un puente dental?",
                acceptedAnswer: { "@type": "Answer", text: "No. Se realiza bajo anestesia local. Puede haber sensibilidad leve en los primeros días tras la preparación de los dientes pilares, pero es manejable con analgésicos comunes." }
            }
        ]
    }
};

const FAQS = [
    {
        q: "¿Cuánto dura un puente dental?",
        a: "Un puente dental de cerámica dura entre 10 y 15 años con buena higiene. La clave es mantener limpios los dientes pilares y usar hilo dental o irrigador bucal para limpiar debajo del puente."
    },
    {
        q: "¿Es mejor un puente dental o un implante?",
        a: "El implante es generalmente la opción superior porque no requiere desgastar los dientes adyacentes y dura toda la vida. El puente es preferible cuando los dientes vecinos ya tienen coronas o daño estructural importante, o cuando las condiciones de hueso no son ideales para un implante."
    },
    {
        q: "¿Cuántas sesiones requiere un puente dental?",
        a: "En general 2-3 sesiones: preparación de los dientes pilares e impresión digital, eventualmente una sesión de prueba, y la sesión final de cementado definitivo. El proceso completo toma entre 2 y 4 semanas."
    },
    {
        q: "¿Duele hacerse un puente dental?",
        a: "No. El procedimiento se realiza bajo anestesia local. Puede haber sensibilidad leve en los primeros días tras la preparación de los dientes pilares, manejable con analgésicos comunes."
    },
    {
        q: "¿Puedo comer con normalidad con un puente dental?",
        a: "Sí. Una vez cementado, el puente funciona igual que dientes naturales. Conviene evitar masticar alimentos muy duros directamente sobre el puente para prolongar su vida útil."
    },
    {
        q: "¿Cómo se limpia debajo de un puente dental?",
        a: "Con hilo dental enhebrado bajo el puente (existen agujas especiales para esto) o con un irrigador bucal, que es la opción más cómoda y efectiva."
    },
];

export default function PuentesDentalesPage() {
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
                        Puentes dentales<br />
                        <span className="font-cormorant italic text-oro">fijos de cerámica.</span>
                    </h1>
                    <p className="text-crema/65 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Solución permanente para reemplazar un diente perdido apoyándose en los dientes vecinos. Resultado natural, función completa, sin extracción adicional.
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold hover:bg-oro/90 transition-all">
                        Consultar precio →
                    </a>
                </section>

                {/* Qué es */}
                <section className="px-6 py-16 max-w-4xl mx-auto">
                    <div className="border border-oro/15 rounded-2xl p-10">
                        <h2 className="text-2xl font-light text-crema mb-6">
                            ¿Qué es un <span className="font-cormorant italic text-oro">puente dental?</span>
                        </h2>
                        <p className="text-crema/70 leading-relaxed mb-4">
                            Un puente dental es una estructura fija de cerámica que reemplaza uno o más dientes perdidos apoyándose en los dientes naturales adyacentes (llamados dientes pilares). Estos dientes son preparados y recubiertos con coronas que sostienen la pieza artificial (póntico) en el medio.
                        </p>
                        <p className="text-crema/70 leading-relaxed">
                            El resultado es una solución permanente que no se retira, funciona igual que dientes naturales y es estéticamente indistinguible del resto de la dentición.
                        </p>
                    </div>
                </section>

                {/* Puente vs Implante */}
                <section className="px-6 py-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10 text-center">
                        Puente dental <span className="font-cormorant italic text-oro">vs</span> Implante
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-oro/15 rounded-2xl p-7">
                            <h3 className="text-crema font-semibold mb-4 text-lg">Puente dental</h3>
                            <p className="text-crema/55 text-sm mb-4">Conveniente cuando:</p>
                            <ul className="space-y-3 text-crema/65 text-sm">
                                {[
                                    "Los dientes vecinos ya tienen coronas o daño",
                                    "No hay suficiente hueso para un implante",
                                    "Se prefiere un tiempo de tratamiento más corto",
                                    "Es la única opción viable por condición médica",
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-crema/30 mt-0.5">·</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border border-oro/40 rounded-2xl p-7 relative">
                            <span className="absolute -top-3 left-6 bg-oro text-carbon text-xs font-semibold px-3 py-1 rounded-full">Primera opción AM</span>
                            <h3 className="text-oro font-semibold mb-4 text-lg">Implante dental</h3>
                            <p className="text-crema/55 text-sm mb-4">Preferible cuando:</p>
                            <ul className="space-y-3 text-crema/65 text-sm">
                                {[
                                    "Los dientes vecinos están sanos (no se los desgasta)",
                                    "Se busca la solución más duradera (de por vida)",
                                    "Se quiere preservar el hueso de la zona edéntula",
                                    "El paciente tiene buena salud general",
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

                {/* Proceso */}
                <section className="px-6 py-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10 text-center">
                        El <span className="font-cormorant italic text-oro">proceso</span>
                    </h2>
                    <div className="space-y-4">
                        {[
                            { paso: "01", titulo: "Evaluación y diagnóstico", desc: "Radiografías para evaluar el hueso y los dientes pilares. Planificamos el diseño del puente." },
                            { paso: "02", titulo: "Preparación de los pilares", desc: "Se reducen los dientes adyacentes para que las coronas entren correctamente. Se toma impresión digital." },
                            { paso: "03", titulo: "Puente provisorio", desc: "Se coloca un puente provisorio mientras el laboratorio fabrica el definitivo (10-20 días)." },
                            { paso: "04", titulo: "Prueba y ajuste", desc: "Verificamos el color, la forma y la oclusión. Se hacen ajustes si es necesario." },
                            { paso: "05", titulo: "Cementado definitivo", desc: "El puente se cementa con adhesivo de alta resistencia. El resultado es inmediato y permanente." },
                        ].map(({ paso, titulo, desc }) => (
                            <div key={paso} className="flex gap-6 items-start p-6 border border-oro/10 rounded-xl">
                                <span className="text-oro/40 font-cormorant italic text-3xl shrink-0">{paso}</span>
                                <div>
                                    <h3 className="text-crema font-semibold mb-1">{titulo}</h3>
                                    <p className="text-crema/60 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA medio */}
                <section className="px-6 py-16 max-w-4xl mx-auto text-center border-y border-oro/10">
                    <h2 className="text-3xl font-light text-crema mb-4">
                        Evaluamos tu caso<br />
                        <span className="font-cormorant italic text-oro">y te recomendamos la mejor opción.</span>
                    </h2>
                    <p className="text-crema/55 mb-8 max-w-xl mx-auto">Puente, implante o combinación — te explicamos las diferencias con honestidad.</p>
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
                            { href: "/implantes-dentales-buenos-aires", label: "Implantes dentales Buenos Aires" },
                            { href: "/coronas-y-fundas-dentales", label: "Coronas dentales" },
                            { href: "/odontologia-estetica-buenos-aires", label: "Odontología estética" },
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
                        ¿Perdiste un diente?<br />
                        <span className="font-cormorant italic text-oro">Tenemos la solución.</span>
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
