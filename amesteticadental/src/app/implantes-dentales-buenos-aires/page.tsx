import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/implantes-dentales-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=541170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20implantes%20dentales.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Implantes Dentales Buenos Aires — Precio y Turno | AM Estética Dental",
    description: "Implantes dentales en Buenos Aires: precio, tipos y proceso. Titanio y zirconio. Planificación guiada por computadora. Dr. Ariel Merino, AM Estética Dental, Puerto Madero.",
    alternates: { canonical: CANONICAL },
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
                        La solución permanente para dientes perdidos. Planificación digital guiada por computadora. Titanio y zirconio. Integración completa con el hueso en 3 a 6 meses.
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">Quiero saber si necesito implante →</a>
                </section>

                <section className="px-6 py-16 border-y border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">¿Cuánto cuesta un implante dental <span className="font-cormorant italic text-oro">en Buenos Aires?</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            { tipo: "Implante unitario", precio: "Desde USD 800", nota: "Precio por pieza · incluye corona" },
                            { tipo: "Implante + corona de zirconio", precio: "Desde USD 1.200", nota: "Mayor estética y biocompatibilidad" },
                            { tipo: "Rehabilitación sobre implantes", precio: "Consultar", nota: "Caso completo · depende de cantidad de piezas" },
                        ].map((o) => (
                            <div key={o.tipo} className="border border-oro/15 rounded-2xl p-6">
                                <p className="text-oro text-[9px] uppercase tracking-widest mb-2">{o.tipo}</p>
                                <p className="text-oro font-semibold text-xl mb-1">{o.precio}</p>
                                <p className="text-crema/40 text-xs">{o.nota}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-crema/30 text-xs">Inversión según diagnóstico con CBCT (tomografía).</p>
                </section>

                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">Preguntas <span className="font-cormorant italic text-oro">frecuentes</span></h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿Cuánto tiempo dura el proceso de un implante dental?", a: "El implante se coloca en una cirugía de 45-60 minutos. La integración con el hueso (oseointegración) lleva entre 3 y 6 meses. Una vez integrado, se coloca la corona definitiva. El proceso total es de 4 a 8 meses." },
                            { q: "¿El implante duele?", a: "La cirugía se realiza con anestesia local, por lo que no se siente dolor durante el procedimiento. Los primeros 2-3 días pueden haber molestias leves controladas con analgésicos. La mayoría de los pacientes vuelve a sus actividades al día siguiente." },
                            { q: "¿Cuánto dura un implante dental?", a: "Con cuidados normales (higiene, controles anuales, no fumar), los implantes dentales duran toda la vida. La corona sobre el implante puede necesitar reemplazo cada 15-20 años." },
                            { q: "¿Cualquiera puede ponerse implantes?", a: "Se necesita cantidad suficiente de hueso maxilar para colocar el implante. En casos de pérdida ósea, se puede hacer un injerto previo. La condición general de salud también influye. Lo evaluamos con una tomografía (CBCT) en la primera consulta." },
                            { q: "¿Cuánto cuesta un implante dental en Buenos Aires?", a: "En AM Estética Dental, un implante unitario parte desde USD 800 incluyendo la corona. La inversión varía según el material de la corona (cerámica o zirconio) y la complejidad del caso." },
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
                    <h2 className="font-light text-3xl text-crema mb-4">Recuperá tu sonrisa <span className="font-cormorant italic text-oro">de forma permanente.</span></h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">Valoración clínica inicial con tomografía incluida.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">Consultar por WhatsApp →</a>
                    <p className="text-crema/25 text-xs mt-4">Camila O'Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>
            </main>
        </>
    );
}
