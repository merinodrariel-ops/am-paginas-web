import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Prensa from "@/components/Prensa";
import EquipoAM from "@/components/EquipoAM";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Dr. Ariel Merino | Odontólogo Estético en Puerto Madero | AM Estética Dental",
    description:
        "Conocé al Dr. Ariel Merino, odontólogo estético en Puerto Madero y fundador de AM Estética Dental. Carillas, diseño de sonrisa digital y estética dental premium en Buenos Aires.",
    alternates: {
        canonical: "https://www.amesteticadental.com/dr-ariel-merino",
    },
    openGraph: {
        title: "Dr. Ariel Merino | Odontólogo Estético en Puerto Madero",
        description:
            "Perfil profesional del Dr. Ariel Merino: carillas de porcelana, diseño de sonrisa y odontología estética premium en Buenos Aires.",
        url: "https://www.amesteticadental.com/dr-ariel-merino",
        locale: "es_AR",
        type: "profile",
    },
};

const WA_LINK =
    "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20agendar%20una%20consulta%20con%20el%20Dr.%20Ariel%20Merino.";

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Ariel Merino",
    url: "https://www.amesteticadental.com/dr-ariel-merino",
    image: [
        "https://www.amesteticadental.com/images/dr-merino/dr-ariel-merino-traje-perfil.webp",
        "https://www.amesteticadental.com/images/dr-merino/dr-ariel-merino-ambo-principal.webp",
    ],
    jobTitle: "Odontólogo Estético",
    worksFor: {
        "@type": "Dentist",
        name: "AM Estética Dental",
        url: "https://www.amesteticadental.com",
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "Camila O'Gorman 412, Oficina 101",
        addressLocality: "Puerto Madero",
        addressRegion: "Ciudad Autónoma de Buenos Aires",
        postalCode: "C1107DED",
        addressCountry: "AR",
    },
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "UCALP",
    },
    sameAs: [
        "https://www.wikidata.org/wiki/Q134287655",
        "https://www.instagram.com/drarielmerino",
        "https://www.tiktok.com/@drarielmerino",
        "https://www.linkedin.com/in/drarielmerino/",
        "https://www.youtube.com/@ArielMerino",
        "https://www.odontoespacio.net/autores/ariel-merino/",
        "https://cde.dental.upenn.edu/Course/38-Full-Veneers",
    ],
    knowsAbout: [
        "Carillas de porcelana",
        "Diseño de sonrisa digital",
        "Lentes de contacto dental",
        "Odontología estética",
        "Alineadores invisibles",
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://www.amesteticadental.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Dr. Ariel Merino",
            item: "https://www.amesteticadental.com/dr-ariel-merino",
        },
    ],
};

export default function DrArielMerinoPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <Navbar />

            <main className="bg-carbon text-crema font-manrope">
                <section className="relative px-6 md:px-12 pt-32 pb-24 overflow-hidden">
                    <div className="absolute right-[-10%] top-[12%] w-[520px] h-[520px] rounded-full bg-oro/5 blur-[140px] pointer-events-none" />
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
                        <div>
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                                Perfil Profesional · Puerto Madero · Buenos Aires
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[0.98] mb-6">
                                Dr. Ariel Merino
                            </h1>
                            <p className="text-oro font-manrope text-lg md:text-xl mb-8">
                                Odontólogo Estético · Fundador de AM Estética Dental
                            </p>
                            <p className="text-crema/70 font-manrope text-lg font-light leading-relaxed max-w-2xl mb-10">
                                Especialista en carillas de porcelana, diseño de sonrisa digital y odontología estética mínimamente invasiva.
                                Atiende personalmente cada caso desde Puerto Madero con un enfoque de alta precisión clínica y resultado natural.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                                >
                                    Agendar consulta con el Dr. Merino →
                                </a>
                                <Link
                                    href="/estetica-dental"
                                    className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
                                >
                                    ← Ver tratamientos de estética dental
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-oro/10">
                                {[
                                    { valor: "15+", etiqueta: "años en estética dental" },
                                    { valor: "Forbes", etiqueta: "reconocimiento editorial" },
                                    { valor: "AOA", etiqueta: "posgrado en rehabilitación oral y estética" },
                                    { valor: "Puerto Madero", etiqueta: "práctica privada" },
                                ].map((item) => (
                                    <div key={item.etiqueta}>
                                        <div className="text-oro font-manrope font-semibold text-lg">{item.valor}</div>
                                        <div className="text-crema-muted font-manrope text-xs leading-relaxed">{item.etiqueta}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-oro/10 bg-carbon-soft">
                                <Image
                                    src="/images/dr-merino/dr-ariel-merino-traje-perfil.webp"
                                    alt="Dr. Ariel Merino con traje azul en AM Estética Dental Puerto Madero"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent" />
                            </div>
                            <div className="absolute -bottom-6 -left-2 md:-left-8 bg-carbon border border-oro/20 rounded-2xl px-5 py-4 shadow-xl max-w-[240px]">
                                <p className="text-oro font-manrope text-[10px] uppercase tracking-[0.3em] mb-2">Consulta directa</p>
                                <p className="text-crema/75 font-manrope text-xs leading-relaxed">
                                    Evaluación, planificación y definición final del caso con criterio directo del Dr. Merino.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
                        <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-oro/10 bg-carbon">
                            <Image
                                src="/images/dr-merino/dr-ariel-merino-ambo-principal.webp"
                                alt="Dr. Ariel Merino con ambo en la clínica AM Estética Dental"
                                fill
                                sizes="(max-width: 1024px) 100vw, 36vw"
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 via-transparent to-transparent" />
                        </div>

                        <div>
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Trayectoria</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Una práctica enfocada exclusivamente en <span className="font-cormorant italic text-oro">estética dental</span>
                            </h2>
                            <div className="space-y-5 text-crema/72 font-manrope leading-relaxed">
                                <p>
                                    Ariel Merino se formó como odontólogo en UCALP y completó un posgrado en Rehabilitación Oral y Estética en AOA. Desde entonces orientó toda su práctica a tratamientos donde el resultado visual tiene que estar a la altura del rostro, la profesión y el estilo de vida del paciente.
                                </p>
                                <p>
                                    En AM Estética Dental trabaja con casos de carillas de porcelana, lentes de contacto dental, diseño de sonrisa digital y rehabilitaciones estéticas complejas. El foco no está en hacer más, sino en intervenir lo mínimo necesario para lograr un cambio contundente y natural.
                                </p>
                                <p>
                                    Fue docente invitado en la cátedra de Prostodoncia de la <strong className="text-crema">University of Pennsylvania School of Dental Medicine (Penn Dental)</strong>, una de las escuelas de odontología más prestigiosas de Estados Unidos, donde dio una conferencia sobre Full Veneers.
                                </p>
                                <p>
                                    Su nombre aparece citado en medios, perfiles públicos y piezas editoriales como parte de una construcción de autoridad real: práctica clínica, casos visibles, presencia de marca y consistencia en la información pública.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Especialidades</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
                            Áreas en las que trabaja el <span className="font-cormorant italic text-oro">Dr. Merino</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    titulo: "Carillas de Porcelana",
                                    texto: "Casos de cambio completo de forma, color y proporción con foco en naturalidad y permanencia.",
                                    href: "/carillas-dentales",
                                },
                                {
                                    titulo: "Diseño de Sonrisa Digital",
                                    texto: "Planificación visual del resultado antes de iniciar cualquier desgaste o restauración.",
                                    href: "/diseno-de-sonrisa",
                                },
                                {
                                    titulo: "Lentes de Contacto Dental",
                                    texto: "Protocolos ultraconservadores para casos donde el objetivo es mejorar sin sobreactuar.",
                                    href: "/lentes-de-contacto-dental",
                                },
                                {
                                    titulo: "Alineadores Invisibles",
                                    texto: "Corrección de posición dentaria integrada a un plan estético completo.",
                                    href: "/alineadores-invisibles",
                                },
                            ].map((item) => (
                                <Link
                                    key={item.titulo}
                                    href={item.href}
                                    className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/35 transition-colors group"
                                >
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2 group-hover:text-oro transition-colors">{item.titulo}</h3>
                                    <p className="text-crema/55 font-manrope text-sm leading-relaxed">{item.texto}</p>
                                    <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-4 block">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                titulo: "Formación",
                                detalle: "Odontólogo · UCALP (2010) · M.N. 34.869\nPosgrado en Rehabilitación Oral y Estética · AOA\nDocente invitado · Penn Dental Medicine · University of Pennsylvania",
                            },
                            {
                                titulo: "Ubicación",
                                detalle: "Camila O'Gorman 412, Oficina 101\nPuerto Madero, Buenos Aires",
                            },
                            {
                                titulo: "Perfiles públicos",
                                detalle: "LinkedIn, Instagram, YouTube, TikTok y Wikidata con datos consistentes del doctor y la clínica.",
                            },
                        ].map((item) => (
                            <div key={item.titulo} className="border border-oro/15 rounded-2xl p-6 bg-carbon">
                                <p className="text-oro font-manrope text-[10px] uppercase tracking-[0.3em] mb-3">{item.titulo}</p>
                                <p className="text-crema/70 font-manrope text-sm leading-relaxed whitespace-pre-line">{item.detalle}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <Prensa />

                <section className="py-28 px-6 md:px-12 text-center relative overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[420px] rounded-full bg-oro/5 blur-[120px] pointer-events-none" />
                    <div className="relative max-w-2xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Próximo paso</span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Si querés tratarte con el <span className="font-cormorant italic text-oro">Dr. Merino</span>, empezá por una evaluación inicial
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            La consulta sirve para entender tu caso, definir si necesitás carillas, alineadores o diseño de sonrisa, y plantear un plan realista antes de tomar cualquier decisión.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-colors"
                        >
                            Hablar por WhatsApp →
                        </a>
                    </div>
                </section>
                <EquipoAM />
            </main>
        </>
    );
}
