import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Blog de Estética Dental | AM Estética Dental — Puerto Madero",
    description: "Artículos sobre carillas de porcelana, diseño de sonrisa, lentes de contacto dental y estética dental en Buenos Aires. Dr. Ariel Merino, AM Estética Dental, Puerto Madero.",
    alternates: {
        canonical: "https://www.amesteticadental.com/blog",
    },
    openGraph: {
        title: "Blog de Estética Dental | AM Estética Dental",
        description: "Todo sobre carillas, diseño de sonrisa y estética dental. Artículos del Dr. Ariel Merino desde Puerto Madero, Buenos Aires.",
        url: "https://www.amesteticadental.com/blog",
        locale: "es_AR",
        type: "website",
    },
};

const ARTICULOS = [
    {
        slug: "cuanto-duran-las-carillas-de-porcelana",
        titulo: "¿Cuánto duran las carillas de porcelana?",
        descripcion: "Todo lo que necesitás saber sobre la vida útil de las carillas, qué las desgasta y cómo extender su duración al máximo.",
        categoria: "Carillas",
        lectura: "5 min",
    },
    {
        slug: "las-carillas-danan-los-dientes",
        titulo: "¿Las carillas dañan los dientes? Mitos y realidades",
        descripcion: "La pregunta más frecuente antes de decidirse. Qué pasa realmente con el esmalte, qué técnicas minimizan el impacto y cuándo no hay desgaste.",
        categoria: "Carillas",
        lectura: "6 min",
    },
    {
        slug: "diseno-de-sonrisa-digital-como-funciona",
        titulo: "Diseño de sonrisa digital: cómo funciona y qué podés esperar",
        descripcion: "El proceso completo desde la primera foto hasta ver tu sonrisa nueva en pantalla antes de que se toque un solo diente.",
        categoria: "Diseño de Sonrisa",
        lectura: "5 min",
    },
    {
        slug: "carillas-porcelana-antes-despues",
        titulo: "Carillas de porcelana: antes y después. Qué casos resuelven y cuáles no",
        descripcion: "Casos reales de AM Estética Dental. Para qué sirven las carillas, para qué no, y cómo saber si sos candidato antes de ir al consultorio.",
        categoria: "Casos",
        lectura: "7 min",
    },
    {
        slug: "cuantas-sesiones-se-necesitan-para-las-carillas",
        titulo: "¿Cuántas sesiones se necesitan para las carillas de porcelana?",
        descripcion: "El cronograma real de un tratamiento de carillas: qué pasa en cada sesión, cuánto tiempo hay entre ellas y qué podés hacer en el medio.",
        categoria: "Proceso",
        lectura: "4 min",
    },
    {
        slug: "preguntas-antes-de-hacerse-carillas",
        titulo: "Preguntas que hacerle a tu odontólogo antes de hacerte carillas",
        descripcion: "Hay cinco preguntas que todo especialista serio debe poder responderte. Si alguna respuesta es vaga, eso también es información valiosa.",
        categoria: "Guía",
        lectura: "6 min",
    },
    {
        slug: "carillas-disilicato-vs-porcelana-feldespatica",
        titulo: "Disilicato vs porcelana feldespática: diferencias reales",
        descripcion: "IPS e.max o porcelana feldespática: cuál es más estética, cuál dura más y cuándo conviene cada una según tu caso clínico.",
        categoria: "Carillas",
        lectura: "5 min",
    },
    {
        slug: "sonrisa-natural-vs-hollywood",
        titulo: "Sonrisa natural vs sonrisa Hollywood: cuál es la diferencia real",
        descripcion: "Dos filosofías de estética dental completamente distintas. Cuál se adapta mejor a tu rostro, personalidad y lo que buscás lograr.",
        categoria: "Diseño de Sonrisa",
        lectura: "5 min",
    },
];

const CATEGORIAS = ["Todos", "Carillas", "Diseño de Sonrisa", "Casos", "Proceso", "Guía"];

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO ── */}
                <section className="relative pt-40 pb-20 px-6 md:px-12">
                    <div className="absolute right-[-5%] top-[20%] w-[500px] h-[400px] rounded-full bg-oro/5 blur-[130px] pointer-events-none" />
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                            Blog · AM Estética Dental
                        </span>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Todo sobre{" "}
                            <span className="font-cormorant italic text-oro">estética dental</span>
                        </h1>
                        <p className="text-crema/60 font-manrope text-lg font-light max-w-2xl">
                            Artículos del Dr. Ariel Merino sobre carillas, diseño de sonrisa y odontología estética. Sin términos técnicos innecesarios — todo lo que necesitás saber para tomar una decisión informada.
                        </p>
                    </div>
                </section>

                {/* ── ARTÍCULOS ── */}
                <section className="py-12 px-6 md:px-12 pb-32">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ARTICULOS.map((art) => (
                                <Link
                                    key={art.slug}
                                    href={`/blog/${art.slug}`}
                                    className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft hover:border-oro/35 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">
                                            {art.categoria}
                                        </span>
                                        <span className="text-crema/30 font-manrope text-xs">{art.lectura} de lectura</span>
                                    </div>
                                    <h2 className="text-crema font-manrope font-medium text-base leading-snug mb-3 group-hover:text-oro transition-colors">
                                        {art.titulo}
                                    </h2>
                                    <p className="text-crema/55 font-manrope text-sm leading-relaxed mb-5">
                                        {art.descripcion}
                                    </p>
                                    <span className="text-oro/40 group-hover:text-oro transition-colors text-sm">Leer artículo →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
