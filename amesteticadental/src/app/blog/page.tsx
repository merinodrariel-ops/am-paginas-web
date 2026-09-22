import type { Metadata } from "next";
import { hreflangFor } from "@/lib/i18n-routes";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ANIO } from "@/lib/anio";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Blog de Estética Dental | AM Estética Dental",
    description: "Artículos sobre carillas de porcelana, diseño de sonrisa, lentes de contacto dental y estética dental en Buenos Aires.",
    alternates: {
        canonical: "https://www.amesteticadental.com/blog",
    languages: hreflangFor("/blog"),
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
        slug: "como-combatir-el-bruxismo-botox-y-placa",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-bruxismo-carillas-mordida-cruzada-am-estetica-dental",
        alt: "Caso de bruxismo con mordida cruzada resuelto con carillas cerámicas — AM Estética Dental",
        titulo: "Cómo combatir el bruxismo: los dos tratamientos que de verdad funcionan",
        descripcion: "A la noche se te apaga Windows, pero la mandíbula sigue apretando. La placa que guía el movimiento y la toxina botulínica en el masetero: qué hace cada una, cuánto dura y por qué juntas rinden más.",
        categoria: "Bruxismo",
        lectura: "10 min",
    },
    {
        slug: "chatgpt-puede-disenar-tu-sonrisa",
        imagen: "/videos/generate-3d-veneer-poster.jpg",
        alt: "Render 3D de una carilla cerámica usado en la planificación digital de AM Estética Dental",
        titulo: "¿ChatGPT puede diseñar tu sonrisa? Qué pasa cuando esa imagen llega al consultorio",
        descripcion: "Cinco de cada diez pacientes llegan hoy con una imagen de su sonrisa generada por IA. Qué puede ver esa imagen de tu boca, qué no, y cómo se comprueba si el resultado es posible.",
        categoria: "Tecnología",
        lectura: "6 min",
    },
    {
        slug: "curso-carillas-universidad-de-pensilvania",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870272/dr-merino/dr-ariel-merino-ambo-principal.webp",
        alt: "Dr. Ariel Merino, instructor del curso Full Veneers en Penn Dental Medicine",
        titulo: "Qué significa que tu odontólogo enseñe carillas en la Universidad de Pensilvania",
        descripcion: "El Dr. Merino es instructor del curso \"Full Veneers\" en el programa de educación continua de Penn Dental Medicine. Por qué un curso acreditado no es lo mismo que una charla.",
        categoria: "Formación",
        lectura: "4 min",
    },
    {
        slug: "cepillo-electrico-dyson-opinion-odontologo",
        imagen: "https://img.youtube.com/vi/eOdr9gqT7k8/maxresdefault.jpg",
        alt: "Dr. Ariel Merino analizando el cepillo eléctrico de Dyson en video",
        titulo: "Cepillo eléctrico Dyson de US$500: la opinión de un odontólogo",
        descripcion: "Cámara intraoral, inteligencia artificial e irrigador en un mismo cepillo. Qué aporta de verdad, qué respalda la evidencia y si vale la pena a ese precio. Con video.",
        categoria: "Higiene y tecnología",
        lectura: "6 min",
    },
    {
        slug: "cuanto-cuesta-un-implante-dental-en-argentina",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/v1789965491/implantes-dentales-am/implante-giro-360-poster.jpg",
        alt: "Render de un implante dental de los que se usan en AM Estética Dental",
        titulo: `¿Cuánto cuesta un implante dental en Argentina? Guía ${ANIO}`,
        descripcion: "Qué incluye realmente el precio de un implante, por qué dos presupuestos pueden diferir tanto, la diferencia entre tornillo y corona, y cuándo hace falta injerto óseo.",
        categoria: "Precios",
        lectura: "7 min",
    },
    {
        slug: "cuanto-cuestan-las-carillas-dentales-en-argentina",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-01-am-estetica-dental",
        alt: "Resultado de carillas cerámicas — AM Estética Dental",
        titulo: `¿Cuánto cuestan las carillas dentales en Argentina? Guía ${ANIO}`,
        descripcion: "Rangos reales del mercado por material, por qué una carilla puede costar el triple que otra, y cómo leer un presupuesto para saber qué estás comprando.",
        categoria: "Precios",
        lectura: "7 min",
    },
    {
        slug: "como-blanquear-los-dientes-sin-danar-el-esmalte",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carilla-diente-oscurecido-tratamiento-conducto-am-estetica-dental",
        alt: "Diente oscurecido tras una endodoncia, resuelto con una carilla — AM Estética Dental",
        titulo: "Cómo blanquear los dientes sin dañar el esmalte",
        descripcion: "Cómo funciona el blanqueamiento profesional, cuándo da sensibilidad, qué no blanquea y qué cuidados seguir para proteger el esmalte.",
        categoria: "Blanqueamiento",
        lectura: "5 min",
    },
    {
        slug: "cuanto-duran-las-carillas-de-porcelana",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-italiano-carillas-ceramicas-02-am-estetica-dental",
        alt: "Resultado final de carillas cerámicas — AM Estética Dental",
        titulo: "¿Cuánto duran las carillas de porcelana?",
        descripcion: "Todo lo que necesitás saber sobre la vida útil de las carillas, qué las desgasta y cómo extender su duración al máximo.",
        categoria: "Carillas",
        lectura: "5 min",
    },
    {
        slug: "las-carillas-danan-los-dientes",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-erosion-dentaria-carillas-ceramicas-am-estetica-dental",
        alt: "Rehabilitación de una erosión dentaria con carillas cerámicas — AM Estética Dental",
        titulo: "¿Las carillas dañan los dientes? Mitos y realidades",
        descripcion: "La pregunta más frecuente antes de decidirse. Qué pasa realmente con el esmalte, qué técnicas minimizan el impacto y cuándo no hay desgaste.",
        categoria: "Carillas",
        lectura: "6 min",
    },
    {
        slug: "diseno-de-sonrisa-digital-como-funciona",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-patricia-carillas-diseno-sonrisa-ceramicas-dr-ariel-merino",
        alt: "Diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino",
        titulo: "Diseño de sonrisa digital: cómo funciona y qué podés esperar",
        descripcion: "El proceso completo desde la primera foto hasta ver tu sonrisa nueva en pantalla antes de que se toque un solo diente.",
        categoria: "Diseño de Sonrisa",
        lectura: "5 min",
    },
    {
        slug: "carillas-porcelana-antes-despues",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-carillas-veneers-04-dr-ariel-merino-am-estetica-dental",
        alt: "Antes y después de un caso extremo con carillas de porcelana — Dr. Ariel Merino",
        titulo: "Carillas de porcelana: antes y después. Qué casos resuelven y cuáles no",
        descripcion: "Casos reales de AM Estética Dental. Para qué sirven las carillas, para qué no, y cómo saber si sos candidato antes de ir al consultorio.",
        categoria: "Casos",
        lectura: "7 min",
    },
    {
        slug: "cuantas-sesiones-se-necesitan-para-las-carillas",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-caries-carillas-diseno-sonrisa-ceramica-am-estetica-dental",
        alt: "Rehabilitación cerámica completa tras caries — AM Estética Dental",
        titulo: "¿Cuántas sesiones se necesitan para las carillas de porcelana?",
        descripcion: "El cronograma real de un tratamiento de carillas: qué pasa en cada sesión, cuánto tiempo hay entre ellas y qué podés hacer en el medio.",
        categoria: "Proceso",
        lectura: "4 min",
    },
    {
        slug: "preguntas-antes-de-hacerse-carillas",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870243/clinica/consultorio-am-estetica-dental-puerto-madero-02.jpg",
        alt: "Consultorio de AM Estética Dental en Puerto Madero, donde se hace la consulta previa",
        titulo: "Preguntas que hacerle a tu odontólogo antes de hacerte carillas",
        descripcion: "Hay cinco preguntas que todo especialista serio debe poder responderte. Si alguna respuesta es vaga, eso también es información valiosa.",
        categoria: "Guía",
        lectura: "6 min",
    },
    {
        slug: "carillas-disilicato-vs-porcelana-feldespatica",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-diseno-sonrisa-carillas-ceramicas-dr-ariel-merino",
        alt: "Diseño de sonrisa con carillas cerámicas en un caso extremo — Dr. Ariel Merino",
        titulo: "Disilicato vs porcelana feldespática: diferencias reales",
        descripcion: "IPS e.max o porcelana feldespática: cuál es más estética, cuál dura más y cuándo conviene cada una según tu caso clínico.",
        categoria: "Carillas",
        lectura: "5 min",
    },
    {
        slug: "sonrisa-natural-vs-hollywood",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-eli-carillas-ceramicas-01-am-estetica-dental",
        alt: "Caso Eli: antes y después con carillas cerámicas de aspecto natural — AM Estética Dental",
        titulo: "Sonrisa natural vs sonrisa Hollywood: cuál es la diferencia real",
        descripcion: "Dos filosofías de estética dental completamente distintas. Cuál se adapta mejor a tu rostro, personalidad y lo que buscás lograr.",
        categoria: "Diseño de Sonrisa",
        lectura: "5 min",
    },
];

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
                                    className="overflow-hidden border border-oro/15 rounded-2xl bg-carbon-soft hover:border-oro/35 transition-all group"
                                >
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image
                                            src={art.imagen}
                                            alt={art.alt}
                                            fill
                                            sizes="(max-width: 768px) 92vw, 420px"
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-carbon-soft via-carbon/10 to-transparent" />
                                    </div>
                                    <div className="p-7">
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
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
