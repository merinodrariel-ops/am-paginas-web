import type { Metadata } from "next";
import { hreflangFor } from "@/lib/i18n-routes";
import Image from "next/image";
import Link from "next/link";
import ImplantVideoShowcase from "@/components/ImplantVideoShowcase";

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

                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Buenos Aires · Puerto Madero</span>
                    <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                        Implantes dentales<br /><span className="font-cormorant italic text-oro">en Buenos Aires.</span>
                    </h1>
                    <p className="text-crema/65 text-lg font-light leading-relaxed mb-8 max-w-xl">
                        Una solución estable y de largo plazo para dientes perdidos. Implantes Straumann y Neodent del grupo suizo Straumann. Planificación digital. Oseointegración en 2 a 3 meses.
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">Quiero saber si necesito implante →</a>
                </section>

                <section className="px-6 py-16 border-y border-oro/10 bg-carbon-soft">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                        <div>
                            <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-4">Rehabilitación oral integral</span>
                            <h2 className="text-3xl md:text-4xl font-light text-crema leading-tight mb-5">
                                De 1 a 4 implantes suelen estar <span className="font-cormorant italic text-oro">incluidos en la rehabilitación.</span>
                            </h2>
                            <p className="text-crema/60 text-sm md:text-base leading-relaxed max-w-2xl">
                                Cuando el objetivo es rehabilitar la sonrisa completa, no pensamos cada implante como un tratamiento aislado. En planes con una inversión total de <strong className="text-crema font-medium">USD 24.000 a 30.000</strong>, uno a cuatro implantes suelen quedar contemplados dentro del plan integral, junto con las restauraciones cerámicas.
                            </p>
                        </div>
                        <div className="border border-oro/20 rounded-2xl p-6 md:p-8 bg-carbon">
                            <p className="text-oro text-xs uppercase tracking-[0.25em] mb-5">Según indicación clínica, el plan puede incluir</p>
                            <ul className="space-y-3 text-crema/65 text-sm">
                                <li className="flex gap-3"><span className="text-oro">◆</span> Entre 1 y 4 implantes Straumann® o Neodent®</li>
                                <li className="flex gap-3"><span className="text-oro">◆</span> Relleno o injerto de hueso cuando sea necesario</li>
                                <li className="flex gap-3"><span className="text-oro">◆</span> Injerto de tejido para sostener el resultado estético</li>
                                <li className="flex gap-3"><span className="text-oro">◆</span> Coronas y cerámicas planificadas como un conjunto</li>
                            </ul>
                            <p className="text-crema/35 text-xs leading-relaxed mt-5 pt-5 border-t border-oro/10">La cantidad incluida depende del diagnóstico, la distribución de los implantes y la complejidad biológica del caso. Se confirma con tomografía CBCT y planificación clínica.</p>
                        </div>
                    </div>
                </section>

                <ImplantVideoShowcase />

                <section className="px-6 py-16 border-y border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">¿Cuál es la inversión en un implante dental <span className="font-cormorant italic text-oro">en Buenos Aires?</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { tipo: "1ª Fase — Implante", precio: "USD 1.200 – 1.500", nota: "All-inclusive: extracción + injerto óseo + tejidos" },
                            { tipo: "2ª Fase — Corona", precio: "USD 1.200 – 1.500", nota: "Cerámica o zirconio biomimético" },
                            { tipo: "Total terminado", precio: "USD 2.400 – 3.000", nota: "Implante Straumann o Neodent (Grupo Straumann)" },
                            { tipo: "Rehabilitación integral", precio: "USD 24.000 – 30.000", nota: "De 1 a 4 implantes suelen estar incluidos" },
                        ].map((o) => (
                            <div key={o.tipo} className="border border-oro/15 rounded-2xl p-6">
                                <p className="text-oro text-[9px] uppercase tracking-widest mb-2">{o.tipo}</p>
                                <p className="text-oro font-semibold text-xl mb-1">{o.precio}</p>
                                <p className="text-crema/40 text-xs">{o.nota}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-crema/30 text-xs">Inversión según diagnóstico con CBCT (tomografía). Implantes del Grupo Straumann (Suiza), los más reconocidos del mundo.</p>
                </section>

                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">Preguntas <span className="font-cormorant italic text-oro">frecuentes</span></h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿Cuánto tiempo dura el proceso de un implante dental?", a: "El implante se coloca en una cirugía de 45-60 minutos (1ª fase). La oseointegración lleva entre 2 y 3 meses según el tipo de implante. Una vez integrado, se coloca la corona definitiva (2ª fase). El proceso total es de 3 a 4 meses." },
                            { q: "¿El implante duele?", a: "La cirugía se realiza con anestesia local, por lo que no se siente dolor durante el procedimiento. Los primeros 2-3 días pueden haber molestias leves controladas con analgésicos. La mayoría de los pacientes vuelve a sus actividades al día siguiente." },
                            { q: "¿Cuánto dura un implante dental?", a: "Con buena higiene, controles periódicos y hábitos saludables, un implante puede mantenerse durante muchos años. Su evolución depende de la salud general, el hueso, los tejidos y el mantenimiento. La corona sobre el implante también puede requerir recambio con el tiempo." },
                            { q: "¿Cualquiera puede ponerse implantes?", a: "Se necesita cantidad suficiente de hueso maxilar para colocar el implante. En casos de pérdida ósea, se puede hacer un injerto previo. La condición general de salud también influye. Lo evaluamos con una tomografía (CBCT) en la primera consulta." },
                            { q: "¿Cuál es la inversión en un implante dental en Buenos Aires?", a: "En AM Estética Dental, el tratamiento se divide en dos fases: la 1ª fase (implante + extracción + injertos) va de USD 1.200 a 1.500, y la 2ª fase (corona) de USD 1.200 a 1.500. El total terminado con corona queda entre USD 2.400 y 3.000. Trabajamos con implantes Straumann y Neodent, del grupo suizo #1 del mundo." },
                            { q: "¿Los implantes están incluidos en una rehabilitación completa?", a: "En rehabilitaciones integrales con una inversión total de USD 24.000 a 30.000, entre uno y cuatro implantes suelen estar contemplados dentro del plan, junto con las restauraciones cerámicas. También pueden incluirse los rellenos o injertos de hueso y los injertos de tejido que el caso requiera. La cantidad y el alcance exactos se confirman después del diagnóstico con tomografía CBCT." },
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

                {/* Galería — casos reales */}
                <section className="px-6 py-16 border-t border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Casos reales</span>
                            <h2 className="text-2xl font-light text-crema">
                                Rehabilitaciones reales <span className="font-cormorant italic text-oro">en AM Estética Dental.</span>
                            </h2>
                            <p className="text-crema/45 text-sm mt-3 max-w-xl">Agenesia dental: implantes + 24 cerámicas. Una de las rehabilitaciones más complejas resueltas por el Dr. Ariel Merino.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {[
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental", alt: "Agenesia dental antes y después — rehabilitación completa con implantes y cerámicas — Dr. Ariel Merino AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-intraoral-implantes-dentales-24-ceramicas-rehabilitacion-completa-dr-ariel-merino-am-estetica-dental-buenos-aires", alt: "Intraoral antes y después — implantes dentales y 24 cerámicas — rehabilitación completa — AM Estética Dental Buenos Aires" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-labios-sonrisa-portada-carillas-ceramicas-alineadores-invisibles-dr-ariel-merino-am-estetica-dental", alt: "Antes y después labios y sonrisa — agenesia dental con implantes y carillas cerámicas — Dr. Ariel Merino AM Estética Dental" },
                            ].map((foto) => (
                                <div key={foto.src} className="relative aspect-square rounded-2xl overflow-hidden border border-oro/10 group">
                                    <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/casos/agenesia-dental-rehabilitacion-completa-implantes-24-ceramicas" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">
                                Ver el caso completo →
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-16 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">Recuperá tu sonrisa <span className="font-cormorant italic text-oro">con estabilidad a largo plazo.</span></h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">Valoración clínica inicial con tomografía incluida.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">Consultar por WhatsApp →</a>
                    <p className="text-crema/25 text-xs mt-4">Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>
            </main>
        </>
    );
}
