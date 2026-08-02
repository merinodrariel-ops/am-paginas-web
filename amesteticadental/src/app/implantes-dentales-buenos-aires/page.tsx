import type { Metadata } from "next";
import { hreflangFor } from "@/lib/i18n-routes";
import Image from "next/image";
import Link from "next/link";
import ImplantHeroVideo from "@/components/ImplantHeroVideo";
import ImplantRehabilitationCase from "@/components/ImplantRehabilitationCase";

const CANONICAL = "https://www.amesteticadental.com/implantes-dentales-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20implantes%20dentales.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Implantes Dentales en Buenos Aires | Precio y Turno",
    description: "Implantes dentales Straumann y Neodent en Buenos Aires desde USD 2.400 total. Dos fases, extracción e injertos incluidos. Dr. Ariel Merino, Puerto Madero.",
    alternates: { canonical: CANONICAL , languages: hreflangFor("/implantes-dentales-buenos-aires") },
    keywords: "implantes dentales Buenos Aires, implante dental precio Buenos Aires, implantes dentales precio Argentina, implante dental Puerto Madero",
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Implantes dentales Buenos Aires — AM Estética Dental",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Implante dental", bodyLocation: "Maxilar y mandíbula" },
};

export default function ImplantesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="bg-carbon text-crema font-manrope min-h-screen">
                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">Quiero saber si necesito implante →</a>
                </header>

                <section className="px-6 py-12 md:py-20">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Buenos Aires · Puerto Madero</span>
                            <h1 className="text-5xl md:text-6xl font-light text-crema leading-[1.02] mb-6">
                                Implantes dentales<br /><span className="font-cormorant italic text-oro">en Buenos Aires.</span>
                            </h1>
                            <p className="text-crema/65 text-lg font-light leading-relaxed mb-8 max-w-xl">
                                Implantes Straumann y Neodent del Grupo Straumann. Planificación digital, cirugía de precisión y una mirada estética que integra cada pieza con el resto de la sonrisa.
                            </p>
                            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">Quiero saber si necesito implante →</a>
                        </div>
                        <ImplantHeroVideo />
                    </div>
                </section>

                <ImplantRehabilitationCase />

                <section className="px-6 py-16 border-y border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">¿Cuál es la inversión en un implante dental <span className="font-cormorant italic text-oro">en Buenos Aires?</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            { tipo: "1ª Fase — Implante", precio: "USD 1.200 – 1.500", nota: "All-inclusive: extracción + injerto óseo + tejidos" },
                            { tipo: "2ª Fase — Corona", precio: "USD 1.200 – 1.500", nota: "Cerámica o zirconio biomimético" },
                            { tipo: "Total terminado", precio: "USD 2.400 – 3.000", nota: "Implante Straumann o Neodent (Grupo Straumann)" },
                        ].map((o) => (
                            <div key={o.tipo} className="border border-oro/15 rounded-2xl p-6">
                                <p className="text-oro text-[9px] uppercase tracking-widest mb-2">{o.tipo}</p>
                                <p className="text-oro font-semibold text-xl mb-1">{o.precio}</p>
                                <p className="text-crema/40 text-xs">{o.nota}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-crema/30 text-xs">La inversión final se define después de la evaluación clínica y de los estudios que estén indicados para el caso. Los estudios de diagnóstico se realizan por separado.</p>
                </section>

                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">Preguntas <span className="font-cormorant italic text-oro">frecuentes</span></h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿Cuánto tiempo dura el proceso de un implante dental?", a: "El implante se coloca en una cirugía de 45-60 minutos (1ª fase). La oseointegración lleva entre 2 y 3 meses según el tipo de implante. Una vez integrado, se coloca la corona definitiva (2ª fase). El proceso total es de 3 a 4 meses." },
                            { q: "¿El implante duele?", a: "La cirugía se realiza con anestesia local, por lo que no se siente dolor durante el procedimiento. Los primeros 2-3 días pueden haber molestias leves controladas con analgésicos. La mayoría de los pacientes vuelve a sus actividades al día siguiente." },
                            { q: "¿Cuánto dura un implante dental?", a: "Con buena higiene, controles periódicos y hábitos saludables, un implante puede mantenerse durante muchos años. Su evolución depende de la salud general, el hueso, los tejidos y el mantenimiento. La corona sobre el implante también puede requerir recambio con el tiempo." },
                            { q: "¿Cualquiera puede ponerse implantes?", a: "Se necesita cantidad suficiente de hueso maxilar y una condición de salud compatible con el tratamiento. En la primera consulta hacemos una evaluación clínica. Si el caso requiere una tomografía CBCT para estudiar el hueso, se indica por separado en un centro de diagnóstico." },
                            { q: "¿Necesito llevar radiografías o una tomografía a la primera consulta?", a: "Si ya tenés radiografías o estudios recientes, te pedimos que los traigas porque pueden aportar información útil. No son un requisito excluyente: podés realizar igualmente la primera consulta. Si después de evaluarte hace falta una tomografía CBCT, se indica por separado y no está incluida en la consulta." },
                            { q: "¿Cuál es la inversión en un implante dental en Buenos Aires?", a: "En AM Estética Dental, el tratamiento se divide en dos fases: la 1ª fase (implante + extracción + injertos) va de USD 1.200 a 1.500, y la 2ª fase (corona) de USD 1.200 a 1.500. El total terminado con corona queda entre USD 2.400 y 3.000. Trabajamos con implantes Straumann y Neodent, del grupo suizo #1 del mundo." },
                            { q: "¿Los implantes están incluidos en una rehabilitación completa?", a: "En rehabilitaciones integrales con una inversión total de USD 24.000 a 30.000, entre uno y cuatro implantes suelen estar contemplados dentro del plan, junto con las restauraciones cerámicas. También pueden incluirse los rellenos o injertos de hueso y los injertos de tejido que el caso requiera. La cantidad y el alcance exactos se confirman después de la evaluación clínica y de los estudios que estén indicados." },
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

                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="relative aspect-square max-w-sm mx-auto">
                            <Image
                                src="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/implantes-dentales-am/implante-dental-neodent-grupo-straumann-despiece-corona-pilar-tornillo-fondo-negro-am-estetica-dental-puerto-madero"
                                alt="Implante dental Neodent del grupo Straumann, despiece 3D: corona, pilar y tornillo de titanio — AM Estética Dental, Puerto Madero, Buenos Aires"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-4">Grupo Straumann · Suiza</span>
                            <h2 className="text-2xl font-light text-crema mb-4">Implantes suizos <span className="font-cormorant italic text-oro">tope de gama.</span></h2>
                            <p className="text-crema/60 text-sm leading-relaxed mb-4">Trabajamos exclusivamente con implantes del Grupo Straumann: Neodent (gama alta) y Straumann (tope de gama, #1 del mundo). Ambos son implantes suizos de titanio con el mayor respaldo científico del sector.</p>
                            <p className="text-crema/60 text-sm leading-relaxed mb-6">Cada corona se diseña para mimetizarse con el color y la translucidez de tus dientes naturales. El enfoque es siempre biomimético: que nadie note que tenés un implante.</p>
                            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-oro text-sm hover:text-oro/80 transition-colors">Consultar inversión para mi caso →</a>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-16 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">Recuperá tu sonrisa <span className="font-cormorant italic text-oro">con estabilidad a largo plazo.</span></h2>
                    <p className="text-crema/50 text-base mb-8 max-w-md mx-auto">Primera consulta clínica. Si ya tenés radiografías o estudios recientes, podés traerlos; no son un requisito excluyente.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">Consultar por WhatsApp →</a>
                    <p className="text-crema/25 text-xs mt-4">Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>
            </main>
        </>
    );
}
