import type { Metadata } from "next";
import Link from "next/link";

const CANONICAL = "https://www.amesteticadental.com/odontologia-estetica-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=541170219298&text=Hola%2C%20quiero%20una%20consulta%20sobre%20odontolog%C3%ADa%20est%C3%A9tica.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Odontología Estética Buenos Aires — AM Estética Dental Puerto Madero",
    description: "Especialistas en odontología estética en Buenos Aires. Carillas, diseño de sonrisa, blanqueamiento, alineadores e implantes. Dr. Ariel Merino, Puerto Madero. Reconocido por Forbes Argentina.",
    alternates: { canonical: CANONICAL },
    keywords: "odontología estética Buenos Aires, dentista estético Buenos Aires, estética dental Buenos Aires, odontólogo estético Puerto Madero",
};

const SERVICIOS = [
    { titulo: "Carillas Dentales", desc: "Porcelana y resina. Lentes de contacto dental AM de 0.2mm.", href: "/carillas-dentales", desde: "USD 500/pieza" },
    { titulo: "Diseño de Sonrisa", desc: "Planificación digital antes de tocar ningún diente.", href: "/diseno-de-sonrisa", desde: "USD 4.000" },
    { titulo: "Blanqueamiento Dental", desc: "LED y láser en una sola sesión. Resultado inmediato.", href: "/blanqueamiento-dental-precio-buenos-aires", desde: "USD 150" },
    { titulo: "Alineadores Invisibles", desc: "Ortodoncia invisible AM. Sin brackets, sin alambre.", href: "/alineadores-invisibles", desde: "Consultar" },
    { titulo: "Implantes Dentales", desc: "Titanio y zirconio. Planificación guiada por computadora.", href: "/implantes-dentales-buenos-aires", desde: "Consultar" },
    { titulo: "Lentes de Contacto Dental", desc: "0.2mm de espesor. Sin desgaste del diente natural.", href: "/lentes-de-contacto-dental-precio-buenos-aires", desde: "USD 800/pieza" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Odontología estética Buenos Aires — AM Estética Dental",
    description: "Especialistas en odontología estética en Buenos Aires: carillas, diseño de sonrisa, blanqueamiento, alineadores e implantes. Dr. Ariel Merino, Puerto Madero.",
    url: CANONICAL,
};

export default function OdontologiaEsteticaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="bg-carbon text-crema font-manrope min-h-screen">
                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">Agendá tu consulta →</a>
                </header>

                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Puerto Madero · Buenos Aires</span>
                    <h1 className="text-5xl md:text-6xl font-light text-crema leading-tight mb-6">
                        Odontología estética<br /><span className="font-cormorant italic text-oro">en Buenos Aires.</span>
                    </h1>
                    <p className="text-crema/65 text-xl font-light leading-relaxed mb-8 max-w-2xl">
                        AM Estética Dental es una clínica especializada en estética dental de alta complejidad. Ubicada en Puerto Madero, Buenos Aires. Dirigida por el Dr. Ariel Merino, reconocido por Forbes Argentina.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">Agendá tu consulta</a>
                        <Link href="/casos" className="inline-flex items-center gap-2 border border-oro/25 text-oro px-6 py-4 rounded-full text-sm hover:border-oro/50 transition-colors">Ver casos reales →</Link>
                    </div>
                </section>

                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-light text-crema mb-12">Nuestros <span className="font-cormorant italic text-oro">tratamientos</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICIOS.map((s) => (
                            <Link key={s.href} href={s.href} className="group border border-oro/12 rounded-2xl p-6 hover:border-oro/30 transition-colors block">
                                <h3 className="font-semibold text-crema text-base mb-2 group-hover:text-oro transition-colors">{s.titulo}</h3>
                                <p className="text-crema/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-oro text-sm font-medium">{s.desde}</span>
                                    <span className="text-oro/50 text-xs group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[["Forbes Argentina", "Reconocimiento editorial"], ["Puerto Madero", "Camila O'Gorman 412"], ["20+ años", "Experiencia clínica"]].map(([n, l]) => (
                            <div key={n}>
                                <p className="font-cormorant italic text-oro text-3xl mb-2">{n}</p>
                                <p className="text-crema/40 text-xs uppercase tracking-widest">{l}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="px-6 py-16 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">Valoración clínica <span className="font-cormorant italic text-oro">personalizada.</span></h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">Evaluamos tu caso y te explicamos qué tratamiento aplica para vos y cuál sería la inversión.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">Agendá por WhatsApp →</a>
                    <p className="text-crema/25 text-xs mt-4">Camila O'Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>
            </main>
        </>
    );
}
