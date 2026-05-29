import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/bruxismo-desgaste-dental-carillas-ceramicas";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20bruxismo%20y%20quisiera%20una%20evaluaci%C3%B3n.";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Bruxismo y Desgaste Dental — Tratamiento con Carillas Cerámicas | AM Estética Dental",
    description: "El bruxismo desgasta tus dientes sin que lo notes. Recuperá la función y la estética con carillas cerámicas AM. Sin desgaste adicional. Puerto Madero, Buenos Aires. Dr. Ariel Merino.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Bruxismo y Desgaste Dental — Carillas Cerámicas | AM Estética Dental",
        description: "Tratamiento estético y funcional del bruxismo con carillas AM. Resultados reales. Puerto Madero, Buenos Aires.",
        url: CANONICAL,
        images: [{ url: `${CDN}/bruxismo-desgaste-dental-antes-despues-carillas-ceramicas-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires` }],
    },
    robots: { index: true, follow: true },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Tratamiento de bruxismo y desgaste dental con carillas cerámicas — AM Estética Dental",
    description: "Rehabilitación estética y funcional del desgaste dental por bruxismo mediante carillas AM lentes de contacto. Dr. Ariel Merino, Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    about: { "@type": "MedicalCondition", name: "Bruxismo", alternateName: ["Rechinar de dientes", "Desgaste dental", "Bruxismo nocturno"] },
    mainEntity: {
        "@type": "MedicalProcedure",
        name: "Rehabilitación cerámica con carillas AM para bruxismo",
        performedBy: { "@type": "Person", name: "Dr. Ariel Merino" },
    },
};

const SINTOMAS = [
    "Dientes más cortos de lo normal",
    "Bordes dentales desgastados o irregulares",
    "Dientes amarillos o con manchas que no se van",
    "Sensibilidad al frío o al calor",
    "Dolor de mandíbula al despertar",
    "Sonrisa que te hace ver mayor de tu edad",
];

const PASOS = [
    { num: "01", titulo: "Evaluación digital", desc: "Escáner intraoral y análisis del desgaste. En la misma consulta ves el diagnóstico en pantalla." },
    { num: "02", titulo: "Diseño de sonrisa", desc: "Diseñamos el resultado antes de tocar ningún diente. Ves exactamente cómo vas a quedar." },
    { num: "03", titulo: "Carillas AM", desc: "Cerámicas ultrafinas de 0.2mm. Se adhieren sobre el diente sin desgaste adicional." },
    { num: "04", titulo: "Resultado", desc: "Sonrisa restaurada, función recuperada. Todo en 10 a 15 días." },
];

export default function BruxismoPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* Header minimal — sin nav completo */}
                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">
                        Consultar por WhatsApp →
                    </a>
                </header>

                {/* Hero */}
                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                                Bruxismo · Desgaste Dental
                            </span>
                            <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                                El bruxismo no avisa.<br />
                                <span className="font-cormorant italic text-oro">Las carillas, sí.</span>
                            </h1>
                            <p className="text-crema/65 text-lg font-light leading-relaxed mb-8">
                                Años de rechinar los dientes desgastan el esmalte, acortan las piezas y envejecen la sonrisa. Con carillas AM recuperás forma, color y función — sin desgaste adicional.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href={WA} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                                    Evaluar mi caso por WhatsApp
                                </a>
                                <a href={`${CANONICAL}#antes-despues`}
                                    className="inline-flex items-center gap-2 border border-oro/25 text-oro px-6 py-4 rounded-full text-sm hover:border-oro/50 transition-colors">
                                    Ver antes y después
                                </a>
                            </div>
                            <p className="text-crema/30 text-xs mt-5">
                                Puerto Madero, Buenos Aires · Dr. Ariel Merino
                            </p>
                        </div>

                        {/* Foto portada del caso */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15">
                            <Image
                                src={`${CDN}/bruxismo-desgaste-dental-antes-despues-carillas-ceramicas-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires`}
                                alt="Bruxismo y desgaste dental — tratamiento con carillas cerámicas antes y después — Dr. Ariel Merino AM Estética Dental Buenos Aires"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-flex items-center gap-1.5 border border-oro/30 bg-carbon/80 backdrop-blur-sm rounded-full px-3 py-1.5 font-manrope text-[9px] uppercase tracking-[0.3em] text-oro">
                                    Caso real — AM Estética Dental
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Síntomas */}
                <section className="px-6 py-16 bg-carbon border-y border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-manrope font-light text-crema mb-10">
                            ¿Te identificás con <span className="font-cormorant italic text-oro">alguno de estos síntomas?</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {SINTOMAS.map((s) => (
                                <div key={s} className="flex items-start gap-3 border border-oro/10 rounded-xl p-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-oro flex-shrink-0 mt-2" />
                                    <p className="text-crema/70 text-sm leading-relaxed">{s}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-crema/50 text-sm mb-4">Si marcás 2 o más, el bruxismo probablemente ya está afectando tu sonrisa.</p>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">
                                Evaluar mi caso por WhatsApp →
                            </a>
                        </div>
                    </div>
                </section>

                {/* Antes y después */}
                <section id="antes-despues" className="px-6 py-20 max-w-6xl mx-auto">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Caso real</span>
                    <h2 className="text-3xl font-manrope font-light text-crema mb-12">
                        Antes y después — <span className="font-cormorant italic text-oro">desgaste por bruxismo</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { src: "bruxismo-dientes-desgastados-amarillentos-antes-rostro-frontal-dr-ariel-merino-am-estetica-dental-puerto-madero", caption: "Antes — rostro frontal" },
                            { src: "bruxismo-rehabilitacion-ceramica-carillas-despues-rostro-frontal-dr-ariel-merino-am-estetica-dental-buenos-aires", caption: "Después — rostro frontal" },
                            { src: "bruxismo-desgaste-intraoral-antes-despues-carillas-ceramicas-rehabilitacion-dr-ariel-merino-am-estetica-dental", caption: "Antes y después — intraoral" },
                            { src: "bruxismo-labios-sonrisa-antes-despues-carillas-ceramicas-rejuvenecimiento-dr-ariel-merino-am-estetica-dental", caption: "Antes y después — sonrisa" },
                            { src: "bruxismo-perfil-antes-despues-rehabilitacion-ceramica-carillas-dr-ariel-merino-am-estetica-dental-buenos-aires", caption: "Antes y después — perfil" },
                            { src: "bruxismo-rostro-perfil-comparativa-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-puerto-madero", caption: "Comparativa de perfil" },
                        ].map((f) => (
                            <div key={f.src} className="relative aspect-square rounded-xl overflow-hidden border border-oro/10 group">
                                <Image
                                    src={`${CDN}/${f.src}`}
                                    alt={`${f.caption} — bruxismo carillas cerámicas — Dr. Ariel Merino AM Estética Dental`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-carbon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="font-manrope text-[10px] text-crema/70 uppercase tracking-widest">{f.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-crema/30 text-xs text-center mt-6">@drarielmerino · AM Estética Dental · Caso real sin filtros</p>
                </section>

                {/* Cómo funciona */}
                <section className="px-6 py-16 bg-carbon border-t border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-manrope font-light text-crema mb-12">
                            Cómo es el <span className="font-cormorant italic text-oro">proceso</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {PASOS.map((p) => (
                                <div key={p.num} className="border border-oro/12 rounded-2xl p-6">
                                    <div className="font-cormorant italic text-oro text-3xl mb-4">{p.num}</div>
                                    <h3 className="font-manrope font-semibold text-crema text-sm mb-3">{p.titulo}</h3>
                                    <p className="text-crema/55 text-xs leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Doctor */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-oro/12 rounded-2xl p-8 md:p-12">
                        <div>
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-4">Tu especialista</span>
                            <h2 className="font-cormorant italic text-3xl text-crema mb-4">Dr. Ariel Merino</h2>
                            <p className="text-crema/55 text-sm leading-relaxed mb-6">
                                Más de 20 años en estética dental de alta complejidad. Reconocido por Forbes Argentina. Director de AM Estética Dental, Puerto Madero. Especialista en rehabilitaciones cerámicas por bruxismo y diseño de sonrisa.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="border border-oro/20 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest text-oro">Forbes Argentina</span>
                                <span className="border border-oro/20 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest text-oro">Puerto Madero</span>
                                <span className="border border-oro/20 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest text-oro">20+ años</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-crema/50 text-sm mb-6">Primera evaluación de tu caso</p>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                                Agendá tu consulta →
                            </a>
                            <p className="text-crema/25 text-xs mt-4">Camila O'Gorman 412, Puerto Madero · Buenos Aires</p>
                        </div>
                    </div>
                </section>

                {/* FAQ — AEO optimizado */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">
                        Preguntas <span className="font-cormorant italic text-oro">frecuentes</span>
                    </h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿Las carillas sirven para tratar el bruxismo?", a: "Sí. Las carillas cerámicas restauran el volumen y la forma de los dientes desgastados por el bruxismo, recuperando tanto la estética como la función masticatoria. Es importante complementarlas con una férula de descarga para protegerlas durante la noche." },
                            { q: "¿Tengo que dejar de apretarme los dientes para ponerme carillas?", a: "No es un requisito previo, pero sí recomendamos el uso de una placa de relajación nocturna para proteger las carillas a largo plazo. Las carillas cerámicas AM son muy resistentes, pero ningún material aguinda indefinidamente el impacto del bruxismo sin protección." },
                            { q: "¿Cuánto duran las carillas cerámicas en pacientes con bruxismo?", a: "Con control regular y uso de placa nocturna, las carillas cerámicas duran entre 15 y 20 años. Sin protección, el desgaste puede reducir esa vida útil significativamente. La cerámica duplica la resistencia del esmalte natural." },
                            { q: "¿Cuánto cuesta tratar el bruxismo con carillas en Buenos Aires?", a: "Depende de la cantidad de piezas afectadas y el nivel de desgaste. Como referencia, una rehabilitación cerámica completa por bruxismo ronda los USD 15.000 a 30.000 según el caso. El plan y la inversión se definen luego de evaluar clínicamente la mordida." },
                            { q: "¿Es doloroso el tratamiento?", a: "No. Se trabaja con anestesia local cuando es necesario. Las carillas AM lentes de contacto requieren mínimo o ningún desgaste del diente original, lo que reduce notablemente la sensibilidad post-tratamiento." },
                            { q: "¿Cuánto tiempo lleva el tratamiento completo?", a: "Entre 10 y 15 días desde la evaluación hasta el resultado final. En algunos casos complejos con muchas piezas afectadas, el proceso puede extenderse a 3-4 semanas." },
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
                <section className="px-6 py-20 text-center border-t border-oro/10">
                    <h2 className="font-manrope font-light text-3xl md:text-4xl text-crema mb-4">
                        El desgaste no se detiene solo.
                    </h2>
                    <p className="text-crema/50 text-lg mb-8 max-w-md mx-auto">
                        Cuanto antes tratás el bruxismo, menos estructura dentaria perdés. Escribinos hoy.
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">
                        Quiero evaluar mi caso →
                    </a>
                </section>

            </main>
        </>
    );
}
