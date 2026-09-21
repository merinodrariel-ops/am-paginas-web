import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const PENN_URL = "https://cde.dental.upenn.edu/Course/38-Full-Veneers";
const CANONICAL = "https://www.amesteticadental.com/blog/curso-carillas-universidad-de-pensilvania";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "El Dr. Merino, instructor de carillas en Penn Dental",
    description:
        "El director clínico de AM es instructor del curso \"Full Veneers\" en Penn Dental Medicine. Qué significa esa credencial para un paciente.",
    alternates: {
        canonical: CANONICAL,
    },
    openGraph: {
        title: "Qué significa que tu odontólogo enseñe carillas en la Universidad de Pensilvania",
        description:
            "El Dr. Ariel Merino dicta \"Full Veneers\", curso acreditado con créditos de educación continua en Penn Dental Medicine.",
        url: CANONICAL,
        locale: "es_AR",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Qué significa que tu odontólogo enseñe carillas en la Universidad de Pensilvania",
    image: "https://www.amesteticadental.com/og-image.jpg",
    description:
        "El Dr. Ariel Merino, director clínico de AM Estética Dental, es instructor del curso \"Full Veneers\" del programa de Continuing Dental Education de la University of Pennsylvania School of Dental Medicine.",
    author: {
        // Mismo @id que el resto del blog: toda la autoridad se acumula en una sola
        // entidad, la que vive en arielmerino.com.
        "@id": "https://www.arielmerino.com/#person",
        "@type": "Person",
        name: "Dr. Ariel Merino",
        url: "https://www.wikidata.org/wiki/Q134287655",
        jobTitle: "Odontólogo Estético",
    },
    publisher: {
        "@type": "Organization",
        name: "AM Estética Dental",
        url: "https://www.amesteticadental.com",
    },
    // El curso es el sujeto de la nota. Se declara acá y en arielmerino.com con el
    // mismo @id, para que las dos páginas hablen del mismo objeto y no de dos.
    about: {
        "@type": "Course",
        "@id": "https://www.arielmerino.com/penn-dental-medicine#course",
        name: "Full Veneers",
        url: PENN_URL,
        inLanguage: "en",
        educationalCredentialAwarded: "1.5 CE credits",
        provider: {
            "@type": "CollegeOrUniversity",
            name: "University of Pennsylvania School of Dental Medicine",
            url: "https://www.dental.upenn.edu/",
        },
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            inLanguage: "en",
            instructor: { "@id": "https://www.arielmerino.com/#person" },
        },
    },
    datePublished: "2026-09-14",
    dateModified: "2026-09-14",
    mainEntityOfPage: CANONICAL,
};

const WA_LINK =
    "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Quiero%20consultar%20por%20un%20tratamiento%20de%20carillas%20en%20AM%20Est%C3%A9tica%20Dental.";

const FICHA = [
    { v: "Full Veneers", l: "curso" },
    { v: "Penn Dental Medicine", l: "programa de educación continua" },
    { v: "1.5", l: "créditos CE acreditados" },
    { v: "Inglés", l: "idioma en que se dicta" },
];

export default function ArticuloPennFullVeneers() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute left-0 top-[20%] w-[400px] h-[400px] rounded-full bg-oro/4 blur-[130px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Formación</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Qué significa que tu odontólogo enseñe carillas{" "}
                            <span className="font-cormorant italic text-oro">en la Universidad de Pensilvania</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            El Dr. Ariel Merino, director clínico de AM Estética Dental, es el instructor del curso &ldquo;Full Veneers&rdquo; en el programa de educación continua de Penn Dental Medicine. Explicamos por qué esa credencial no es un adorno del currículum.
                        </p>
                        <div className="flex items-center gap-6 text-crema/35 font-manrope text-xs">
                            <span>AM Estética Dental</span>
                            <span>·</span>
                            <span>Puerto Madero, Buenos Aires</span>
                            <span>·</span>
                            <span>4 min de lectura</span>
                        </div>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                La University of Pennsylvania School of Dental Medicine —Penn Dental Medicine— es una de las escuelas dentales fundacionales de los Estados Unidos y forma parte de la Universidad de Pensilvania, de la Ivy League. En el catálogo de su programa de educación continua, el curso <em>Full Veneers</em> figura a nombre de <strong className="text-crema font-medium">Ariel Merino, DDS</strong>.
                            </p>
                        </div>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                La credencial, en datos
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {FICHA.map((f) => (
                                    <div key={f.l} className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                        <div className="text-oro font-manrope font-semibold text-lg mb-1 leading-tight">{f.v}</div>
                                        <div className="text-crema/50 font-manrope text-xs leading-relaxed">{f.l}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                La ficha del curso es pública y se puede consultar directamente en el sitio de la universidad.{" "}
                                <a href={PENN_URL} target="_blank" rel="noopener noreferrer" className="text-oro hover:underline">
                                    Ver el curso en el catálogo de Penn →
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                Cómo llegó ese curso al catálogo
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                El contacto lo inició la universidad. Penn buscaba a alguien que enseñara carillas de porcelana y llegó al Dr. Merino en Buenos Aires, en pleno ejercicio de la clínica.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                La conferencia se dictó en inglés ante alrededor de quinientas personas de la universidad. Esa misma clase es la que quedó después incorporada al catálogo de educación continua como curso acreditado: hoy un odontólogo estadounidense puede tomarla y aplicar sus créditos a la renovación de su matrícula.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Es una distinción poco frecuente para un profesional formado íntegramente en la Argentina, y la clínica la considera parte de su capital clínico, no de su material publicitario.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                Por qué no es lo mismo que dar una charla
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                En los Estados Unidos, un odontólogo no conserva su matrícula de forma indefinida: para renovarla debe acumular créditos de educación continua (<em>continuing education</em>, CE) cursando formación auditada por instituciones habilitadas para otorgarlos.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                Esa diferencia es todo. Una conferencia en un congreso la organiza quien la propone. Un curso acreditado lo avala la escuela: Penn revisa quién enseña y qué enseña antes de poner su nombre detrás, porque sus propios colegas van a usar ese curso para recertificarse.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                El curso se dicta íntegramente en inglés, para odontólogos formados en inglés. No es material traducido para público extranjero: es contenido producido dentro del marco académico de esa universidad.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Qué cubre &ldquo;Full Veneers&rdquo;
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        t: "Indicación",
                                        d: "Cuándo una carilla es la solución correcta y cuándo no lo es. Hay casos que se resuelven con ortodoncia, con blanqueamiento o sin tratamiento: una carilla mal indicada es un problema que ninguna cerámica corrige.",
                                    },
                                    {
                                        t: "Preparación mínimamente invasiva",
                                        d: "Cuánto esmalte hay que preparar y cuánto no. En la gran mayoría de los casos hace falta una preparación mínima del esmalte, incluso en las técnicas más finas, y el criterio para definirla es parte del curso.",
                                    },
                                    {
                                        t: "Color y comunicación con el laboratorio",
                                        d: "Lo que delata una carilla mal resuelta no suele ser la forma sino el color. Cómo se registra, cómo se le transmite al ceramista y qué cambia cuando el laboratorio trabaja dentro de la clínica.",
                                    },
                                    {
                                        t: "Cementado adhesivo",
                                        d: "La etapa donde se conserva o se pierde el trabajo de todas las anteriores: aislación, tratamiento de superficie, control de excesos y ajuste de la oclusión.",
                                    },
                                ].map((b) => (
                                    <div key={b.t} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                                        <h3 className="text-crema font-manrope font-medium text-base mb-2">{b.t}</h3>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{b.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                Qué cambia para un paciente de AM
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                En términos prácticos, nada del tratamiento en sí. Lo que cambia es el criterio con el que se decide si ese tratamiento corresponde, y quién lo ejecuta: el contenido que Penn acredita es el mismo protocolo que se aplica en la clínica de Puerto Madero, con el laboratorio dental adentro y el ceramista viendo al paciente en persona.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Para los pacientes que llegan desde el exterior —una parte creciente de la consulta de AM— hay además un dato concreto: el profesional que los va a atender enseña dentro del sistema académico del que ellos vienen.
                            </p>
                        </section>

                        <section className="border border-oro/20 rounded-3xl p-8 md:p-10 bg-carbon-soft">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">
                                Consultá por tu caso
                            </h2>
                            <p className="text-crema/65 font-manrope text-base leading-relaxed mb-7">
                                El Dr. Merino atiende personalmente los casos de estética y diseño de sonrisa en AM Estética Dental, Puerto Madero.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-oro text-carbon font-manrope font-semibold text-sm rounded-full px-8 py-4"
                                >
                                    Hablar por WhatsApp →
                                </a>
                                <Link
                                    href="/dr-ariel-merino"
                                    className="inline-flex items-center border border-oro/30 text-oro font-manrope text-sm rounded-full px-8 py-4 hover:border-oro/60 transition-colors"
                                >
                                    Trayectoria completa →
                                </Link>
                            </div>
                        </section>

                        <section className="pt-4">
                            <p className="text-crema/40 font-manrope text-xs uppercase tracking-[0.25em] mb-5">Seguir leyendo</p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    ["Carillas de porcelana", "/carillas-dentales"],
                                    ["¿Las carillas dañan los dientes?", "/blog/las-carillas-danan-los-dientes"],
                                    ["Disilicato vs. porcelana feldespática", "/blog/carillas-disilicato-vs-porcelana-feldespatica"],
                                    ["Prensa y reconocimientos", "/prensa"],
                                ].map(([label, href]) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="border border-oro/15 rounded-full px-5 py-2.5 font-manrope text-sm text-crema/60 hover:text-crema hover:border-oro/35 transition-colors"
                                    >
                                        {label} →
                                    </Link>
                                ))}
                            </div>
                        </section>

                    </div>
                </article>
            </main>
        </>
    );
}
