import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/coronas-y-fundas-dentales";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20coronas%20y%20fundas%20dentales.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Coronas y Fundas Dentales Buenos Aires 2026 | AM Estética Dental Puerto Madero",
    description: "Coronas y fundas dentales de cerámica en Buenos Aires. Restauración completa del diente con cerámica de alta resistencia. Dr. Ariel Merino, AM Estética Dental, Puerto Madero.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Coronas y Fundas Dentales Buenos Aires | AM Estética Dental",
        description: "Coronas dentales de cerámica para restaurar dientes dañados o fracturados. Dr. Ariel Merino, Puerto Madero, Buenos Aires.",
        url: CANONICAL,
    },
    keywords: "coronas dentales Buenos Aires, fundas dentales precio, corona cerámica dental, corona dental precio Argentina, funda dental porcelana Buenos Aires"
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Coronas y fundas dentales Buenos Aires — AM Estética Dental",
    description: "Coronas y fundas dentales de cerámica en Buenos Aires. Dr. Ariel Merino, Puerto Madero.",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Corona dental cerámica" },
    mainEntity: {
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "¿Cuánto dura una corona dental?",
                acceptedAnswer: { "@type": "Answer", text: "Con buena higiene, una corona de cerámica dura entre 15 y 25 años. Las de zirconio tienen mayor resistencia y pueden durar toda la vida." }
            },
            {
                "@type": "Question",
                name: "¿Duele colocarse una corona dental?",
                acceptedAnswer: { "@type": "Answer", text: "No. El procedimiento se realiza bajo anestesia local. El paciente puede sentir presión pero no dolor. El postoperatorio es muy leve." }
            },
            {
                "@type": "Question",
                name: "¿Cuántas sesiones requiere una corona dental?",
                acceptedAnswer: { "@type": "Answer", text: "En general 2 sesiones: la primera para preparar el diente y tomar impresión, y la segunda (10-15 días después) para cementar la corona definitiva." }
            },
            {
                "@type": "Question",
                name: "¿Cuál es la diferencia entre corona y carilla?",
                acceptedAnswer: { "@type": "Answer", text: "La carilla cubre solo la cara frontal del diente. La corona recubre el diente completo (360°) y se usa cuando hay mayor daño estructural o el diente está muy debilitado." }
            },
            {
                "@type": "Question",
                name: "¿Cuánto cuesta una corona dental en Buenos Aires?",
                acceptedAnswer: { "@type": "Answer", text: "Las coronas y fundas de cerámica en AM Estética Dental parten desde USD 1.000 por pieza. Son piezas cerámicas de laboratorio: el valor final depende del material (cerámica o zirconio) y de la complejidad del caso. La inversión exacta se define en la valoración inicial." }
            }
        ]
    }
};

const TIPOS = [
    {
        titulo: "Corona de zirconio",
        desc: "La más resistente. Estética natural, sin borde oscuro en la encía. Ideal para molares y dientes muy expuestos.",
        ideal: "Dientes con daño estructural severo o que soportan mucha carga masticatoria.",
    },
    {
        titulo: "Corona cerámica feldespática",
        desc: "Máxima transparencia y mimetismo natural. El mismo material que las carillas AM de alta gama.",
        ideal: "Dientes anteriores donde la estética es prioritaria.",
    },
    {
        titulo: "Corona sobre implante",
        desc: "La parte visible del implante dental. En AM usamos corona de zirconio o cerámica según el caso.",
        ideal: "Completar un implante dental con el resultado más natural posible.",
    },
];

const FAQS = [
    {
        q: "¿Cuánto dura una corona dental?",
        a: "Con buena higiene, una corona de cerámica dura entre 15 y 25 años. Las de zirconio tienen mayor resistencia y pueden durar toda la vida si se cuidan correctamente."
    },
    {
        q: "¿Duele colocarse una corona dental?",
        a: "No. El procedimiento se realiza bajo anestesia local. El paciente puede sentir presión pero no dolor. El postoperatorio es muy leve y en general no requiere analgésicos."
    },
    {
        q: "¿Cuántas sesiones requiere una corona dental?",
        a: "En general 2 sesiones: la primera para preparar el diente y tomar la impresión digital, y la segunda (10-15 días después) para cementar la corona definitiva."
    },
    {
        q: "¿Cuál es la diferencia entre corona y carilla?",
        a: "La carilla cubre solo la cara frontal del diente (como una lente de contacto). La corona recubre el diente completo (360°) y se usa cuando hay mayor daño estructural o el diente está muy debilitado."
    },
    {
        q: "¿Cuánto cuesta una corona dental en Buenos Aires?",
        a: "Las coronas y fundas de cerámica parten desde USD 1.000 por pieza. Son piezas cerámicas de laboratorio, igual que las carillas: el valor final depende del material (cerámica o zirconio) y de la complejidad del caso. La inversión exacta se define en la valoración inicial."
    },
    {
        q: "¿Puedo comer normal con una corona dental?",
        a: "Sí. Las coronas de zirconio y cerámica soportan la masticación normal. Solo recomendamos evitar morder objetos duros (hielo, maíz de la mazorca) para prolongar su vida útil."
    },
];

export default function CoronasPage() {
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
                        Coronas y fundas dentales<br />
                        <span className="font-cormorant italic text-oro">de cerámica.</span>
                    </h1>
                    <p className="text-crema/65 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Restauramos dientes dañados, fracturados o tratados con endodoncia con coronas de cerámica de alta resistencia. Resultado natural. Sin líneas oscuras en la encía.
                    </p>
                    <p className="text-oro font-manrope text-sm mb-10">Piezas cerámicas de laboratorio · desde USD 1.000 por pieza</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold hover:bg-oro/90 transition-all">
                        Consultar precio →
                    </a>
                </section>

                {/* Tipos */}
                <section className="px-6 py-16 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10 text-center">
                        Tipos de <span className="font-cormorant italic text-oro">corona dental</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TIPOS.map((t) => (
                            <div key={t.titulo} className="border border-oro/15 rounded-2xl p-7 hover:border-oro/40 transition-all">
                                <h3 className="text-oro font-cormorant italic text-xl mb-3">{t.titulo}</h3>
                                <p className="text-crema/70 text-sm leading-relaxed mb-4">{t.desc}</p>
                                <p className="text-crema/45 text-xs">Ideal para: {t.ideal}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Proceso */}
                <section className="px-6 py-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10 text-center">
                        El <span className="font-cormorant italic text-oro">proceso</span>
                    </h2>
                    <div className="space-y-4">
                        {[
                            { paso: "01", titulo: "Evaluación", desc: "Examinamos el diente y el estado de la encía. En algunos casos se necesita radiografía o tomografía." },
                            { paso: "02", titulo: "Preparación del diente", desc: "Reducimos levemente el diente para que la corona tenga espacio. Se toma una impresión digital de alta precisión." },
                            { paso: "03", titulo: "Corona provisoria", desc: "Mientras el laboratorio fabrica la corona definitiva (10-15 días), se coloca una corona provisoria." },
                            { paso: "04", titulo: "Cementado definitivo", desc: "Se prueba la corona, se verifica la oclusión y se cementa. El resultado es inmediato." },
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
                    <p className="text-crema/60 text-sm uppercase tracking-widest mb-4">AM Estética Dental · Puerto Madero</p>
                    <h2 className="text-3xl font-light text-crema mb-6">
                        Restauramos tu diente con<br />
                        <span className="font-cormorant italic text-oro">cerámica de alta resistencia.</span>
                    </h2>
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

                {/* Galería — casos reales */}
                <section className="px-6 py-16 border-t border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Casos reales</span>
                            <h2 className="text-2xl font-light text-crema">
                                Rehabilitaciones cerámicas <span className="font-cormorant italic text-oro">reales.</span>
                            </h2>
                            <p className="text-crema/45 text-sm mt-3 max-w-xl">Rehabilitación completa por desgaste severo con cerámicas AM. Función y estética restauradas en 15 días.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {[
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-desgaste-dental-antes-despues-carillas-ceramicas-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires", alt: "Rehabilitación cerámica completa por desgaste dental — antes y después — Dr. Ariel Merino AM Estética Dental Buenos Aires" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-desgaste-intraoral-antes-despues-carillas-ceramicas-rehabilitacion-dr-ariel-merino-am-estetica-dental", alt: "Antes y después intraoral — rehabilitación cerámica por desgaste — Dr. Ariel Merino AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-rehabilitacion-ceramica-carillas-despues-rostro-frontal-dr-ariel-merino-am-estetica-dental-buenos-aires", alt: "Resultado final rehabilitación cerámica — rostro frontal — Dr. Ariel Merino AM Estética Dental Buenos Aires" },
                            ].map((foto) => (
                                <div key={foto.src} className="relative aspect-square rounded-2xl overflow-hidden border border-oro/10 group">
                                    <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/casos/bruxismo-desgaste-dental-rehabilitacion-carillas-ceramicas" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">
                                Ver el caso completo →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="px-6 py-20 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-crema mb-4">
                        ¿Necesitás una <span className="font-cormorant italic text-oro">corona dental?</span>
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
