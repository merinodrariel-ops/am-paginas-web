import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import { hreflangFor } from "@/lib/i18n-routes";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Dónde Hacerte Carillas en Buenos Aires: 7 Criterios | AM Estética",
    description: "Guía para elegir clínica de carillas en CABA: material, laboratorio propio, prueba en boca, desgaste real y garantía. Qué preguntar antes de decidir.",
    alternates: {
        canonical: "https://www.amesteticadental.com/donde-hacerse-carillas-buenos-aires",
        languages: hreflangFor("/donde-hacerse-carillas-buenos-aires"),
    },
    openGraph: {
        title: "Dónde hacerte carillas dentales en Buenos Aires",
        description: "Los 7 criterios que conviene verificar antes de elegir clínica, y las señales de alarma que ahorran disgustos.",
        url: "https://www.amesteticadental.com/donde-hacerse-carillas-buenos-aires",
        locale: "es_AR",
        type: "article",
    },
};

const faqItems = [
    {
        pregunta: "¿Dónde me hago carillas dentales en Buenos Aires?",
        respuesta: "En CABA hay clínicas de estética dental en Recoleta, Belgrano, Palermo, el microcentro y Puerto Madero. Más que la zona, lo que conviene comparar es el criterio clínico: con qué material trabajan y por qué lo eligen para tu caso, si el laboratorio es propio o tercerizado, si te dejan probar el diseño en boca antes del cementado definitivo, y qué política de reparación tienen. AM Estética Dental atiende en Camila O'Gorman 412, Oficina 101, Puerto Madero.",
    },
    {
        pregunta: "¿Qué tengo que preguntar antes de hacerme carillas?",
        respuesta: "Cinco preguntas concretas: (1) ¿Qué material recomendás para mi caso y por qué ese y no otro? (2) ¿El laboratorio es propio o tercerizado? (3) ¿Voy a poder ver y probar el diseño en boca antes del cementado definitivo? (4) ¿Cuánto desgaste necesita puntualmente mi caso? (5) ¿Qué pasa si se fractura una carilla a los dos años? Una clínica seria responde las cinco sin rodeos y sin comprometerse a nada antes de verte la boca.",
    },
    {
        pregunta: "¿Es mejor una clínica con laboratorio propio?",
        respuesta: "Cambia dos cosas medibles. Los tiempos: con laboratorio propio un diseño de sonrisa se resuelve en 2 a 3 sesiones, mientras que coordinar con un laboratorio externo suele estirar el tratamiento varias semanas o meses. Y el control del detalle: si en la prueba en boca hay que corregir un matiz de color o el borde de una pieza, con laboratorio propio se ajusta el mismo día en lugar de esperar la próxima tanda de envíos.",
    },
    {
        pregunta: "¿Puedo hacerme carillas sin desgastar los dientes?",
        respuesta: "Depende del caso, y nadie puede afirmarlo sin haberte visto la boca. Hay situaciones — dientes pequeños, con espacios entre sí, en buena posición — donde la preparación es mínima o prácticamente nula. Y hay otras — dientes rotados, hacia adelante, o con carillas previas — donde algo de preparación es inevitable si se busca un resultado natural y duradero. Que una clínica te prometa cero desgaste por teléfono, antes de evaluarte, es una señal de alarma, no una ventaja.",
    },
    {
        pregunta: "¿Cuánto tarda un tratamiento de carillas en Buenos Aires?",
        respuesta: "Con carillas de resina, una sola sesión. Con porcelana, lo habitual son 2 a 3 sesiones distribuidas en 2 a 4 semanas cuando la clínica tiene laboratorio propio, y bastante más cuando la fabricación se terceriza. Si venís del exterior, conviene consultar si el tratamiento puede condensarse en un solo viaje.",
    },
    {
        pregunta: "¿Cómo sé si las carillas que me muestran son casos reales de esa clínica?",
        respuesta: "Pedí ver casos propios del profesional que te va a atender, no fotos del catálogo del fabricante del material ni imágenes de banco. Dos preguntas que despejan la duda: ¿tenés fotos de este mismo caso a los tres o cinco años? y ¿puedo ver un caso parecido al mío? Los resultados a largo plazo son mucho más informativos que la foto del día del cementado.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(f => ({
        "@type": "Question",
        "name": f.pregunta,
        "acceptedAnswer": { "@type": "Answer", "text": f.respuesta },
    })),
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dónde hacerte carillas dentales en Buenos Aires: 7 criterios para elegir clínica",
    "description": "Guía práctica para comparar clínicas de carillas en Ciudad Autónoma de Buenos Aires: material, laboratorio propio, prueba en boca, desgaste real, garantía y casos verificables.",
    "author": {
        "@type": "Person",
        "name": "Dr. Ariel Merino",
        "jobTitle": "Odontólogo Estético",
        "url": "https://www.amesteticadental.com/dr-ariel-merino",
    },
    "publisher": {
        "@type": "Dentist",
        "name": "AM Estética Dental",
        "url": "https://www.amesteticadental.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Camila O'Gorman 412, Oficina 101",
            "addressLocality": "Puerto Madero",
            "addressRegion": "Ciudad Autónoma de Buenos Aires",
            "addressCountry": "AR",
        },
    },
    "mainEntityOfPage": "https://www.amesteticadental.com/donde-hacerse-carillas-buenos-aires",
    "inLanguage": "es-AR",
};

const CRITERIOS = [
    {
        n: "01",
        t: "Con qué material trabajan — y por qué ese para tu caso",
        d: "Porcelana feldespática, disilicato de litio (IPS e.max) y resina compuesta resuelven problemas distintos. La feldespática imita mejor el esmalte y permite espesores muy finos; el disilicato resiste más y conviene cuando hay bruxismo o piezas debilitadas; la resina es la opción de menor inversión y se hace en una sola sesión, con una vida útil más corta.",
        preguntar: "¿Qué material me recomendás y por qué ese y no otro?",
        alarma: "Que la respuesta sea el mismo material para todos los pacientes, sin referencia a tu caso.",
    },
    {
        n: "02",
        t: "Si el laboratorio es propio o tercerizado",
        d: "Es el factor que más incide en los tiempos y en el control del detalle. Con laboratorio propio el ceramista está en el mismo lugar donde te atienden: un ajuste de color o de borde se corrige en el día. Con laboratorio externo, cada corrección es una tanda de envíos y el tratamiento se estira.",
        preguntar: "¿Dónde se fabrican las carillas y quién es el ceramista?",
        alarma: "Que no sepan decirte quién fabrica lo que te van a cementar en la boca.",
    },
    {
        n: "03",
        t: "Si vas a probar el diseño en boca antes del cementado",
        d: "El diseño digital en pantalla es el primer paso, pero el que importa es la prueba física: ver las piezas en tu boca, con tus labios y tu cara, antes de que se cementen de forma definitiva. Es el último momento en que un cambio sale gratis.",
        preguntar: "¿Voy a poder ver y aprobar el resultado en mi boca antes del cementado definitivo?",
        alarma: "Que el plan vaya directo de la impresión al cementado, sin instancia de prueba ni aprobación.",
    },
    {
        n: "04",
        t: "Cuánto desgaste necesita tu caso, en concreto",
        d: "Hay casos que se resuelven con preparación mínima o prácticamente nula, y otros — dientes rotados, vestibularizados o con carillas previas — donde algo de preparación es inevitable si se busca un resultado natural que dure. Ninguna de las dos respuestas se puede dar sin verte la boca.",
        preguntar: "En mi caso puntual, ¿cuánto esmalte hay que preparar y por qué?",
        alarma: "Que te prometan cero desgaste por teléfono o por WhatsApp, antes de evaluarte.",
    },
    {
        n: "05",
        t: "Quién diseña y quién ejecuta",
        d: "En algunas clínicas el profesional que te recibe en la consulta no es el que hace el tratamiento. No está mal en sí mismo, siempre que lo sepas de entrada y puedas conocer a quien va a trabajar en tu boca.",
        preguntar: "¿Quién va a hacer el tratamiento y voy a verlo antes de empezar?",
        alarma: "Que no te den un nombre.",
    },
    {
        n: "06",
        t: "Qué pasa si se fractura una a los dos años",
        d: "Las carillas de porcelana duran de 10 a 20 años, pero una fractura puntual puede ocurrir — por un golpe, por bruxismo no controlado. Lo que distingue a una clínica es tener una política clara de reparación y reposición, dicha antes de empezar y no después del problema.",
        preguntar: "¿Qué cubre la clínica si se fractura una pieza y en qué plazo?",
        alarma: "Respuestas vagas del tipo «eso no pasa nunca».",
    },
    {
        n: "07",
        t: "Casos propios, y a varios años de hechos",
        d: "Las fotos del día del cementado siempre se ven bien. Lo informativo es cómo envejece el trabajo: si el margen con la encía sigue limpio, si el color se mantuvo, si la encía está sana. Pedí casos del propio profesional, no imágenes del catálogo del fabricante del material.",
        preguntar: "¿Tenés fotos de este mismo caso a los tres o cinco años?",
        alarma: "Solo fotos de catálogo, o negativa a mostrar casos propios.",
    },
];

const WA_LINK = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Estoy%20comparando%20cl%C3%ADnicas%20para%20hacerme%20carillas%20y%20quer%C3%ADa%20hacer%20una%20consulta.";

export default function DondeHacerseCarillasPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <Navbar />

            <main className="bg-carbon text-crema font-manrope">

                {/* ── HERO ── */}
                <section className="relative px-6 md:px-12 pt-32 pb-16">
                    <div className="absolute right-[-5%] top-[15%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
                    <div className="max-w-4xl mx-auto w-full relative">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                            Guía para elegir clínica · Buenos Aires
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-light text-crema leading-[1.05] mb-7">
                            Dónde hacerte carillas<br />
                            <span className="font-cormorant italic text-oro">en Buenos Aires</span>
                        </h1>
                        <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                            Siete criterios para comparar clínicas, las preguntas exactas que conviene hacer en la consulta, y las señales de alarma que se ven antes de empezar.
                        </p>
                    </div>
                </section>

                {/* ── RESPUESTA DIRECTA (bloque extraíble) ── */}
                <section className="px-6 md:px-12 pb-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="border-l-2 border-oro/40 pl-6 md:pl-8 py-1">
                            <p className="text-crema/80 font-manrope text-base md:text-lg leading-relaxed mb-4">
                                En Ciudad Autónoma de Buenos Aires hay clínicas de estética dental concentradas sobre todo en Recoleta, Belgrano, Palermo, el microcentro y Puerto Madero. Pero la zona es el criterio menos importante: vas a ir dos o tres veces, no todas las semanas.
                            </p>
                            <p className="text-crema/80 font-manrope text-base md:text-lg leading-relaxed">
                                Lo que sí cambia el resultado es el criterio clínico. Con qué material trabajan y por qué lo eligen para tu caso. Si el laboratorio es propio o tercerizado. Si te dejan probar el diseño en boca antes del cementado definitivo. Cuánto desgaste necesita puntualmente tu boca. Y qué pasa si algo se rompe dos años después.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── LOS 7 CRITERIOS ── */}
                <section className="py-20 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Los criterios</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            Siete cosas que conviene verificar{" "}
                            <span className="font-cormorant italic text-oro">antes de decidir</span>
                        </h2>
                        <div className="space-y-0">
                            {CRITERIOS.map((c, i, arr) => (
                                <div key={c.n} className={`py-9 ${i < arr.length - 1 ? "border-b border-oro/10" : ""}`}>
                                    <div className="flex gap-6 md:gap-8">
                                        <span className="text-oro/35 font-manrope font-light text-3xl flex-none w-12 pt-0.5">{c.n}</span>
                                        <div className="min-w-0">
                                            <h3 className="text-crema font-manrope font-medium text-lg mb-3 leading-snug">{c.t}</h3>
                                            <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-5">{c.d}</p>
                                            <div className="space-y-2.5">
                                                <div className="flex gap-3">
                                                    <span className="text-oro/70 font-manrope text-xs uppercase tracking-widest flex-none pt-0.5 w-[5.5rem]">Preguntá</span>
                                                    <span className="text-crema/75 font-manrope text-sm leading-relaxed italic">«{c.preguntar}»</span>
                                                </div>
                                                <div className="flex gap-3">
                                                    <span className="text-crema/30 font-manrope text-xs uppercase tracking-widest flex-none pt-0.5 w-[5.5rem]">Alarma</span>
                                                    <span className="text-crema/50 font-manrope text-sm leading-relaxed">{c.alarma}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SEÑALES DE ALARMA ── */}
                <section className="py-20 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Señales de alarma</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                            Cinco cosas que se ven{" "}
                            <span className="font-cormorant italic text-oro">antes de empezar</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base leading-relaxed mb-12 max-w-2xl">
                            Ninguna es una prueba de mala praxis por sí sola. Pero si aparecen varias juntas, conviene pedir una segunda opinión antes de avanzar.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { t: "Prometen cero desgaste sin haberte visto", d: "Cuánto esmalte hay que preparar depende de la posición y el tamaño de tus dientes. Es una conclusión clínica, no una característica del producto." },
                                { t: "Presupuesto cerrado por WhatsApp", d: "Un valor exacto sin evaluación previa significa que el plan se armó sin conocer tu caso, o que después va a cambiar." },
                                { t: "Descuento por decidir hoy", d: "La urgencia comercial no tiene relación con la odontología. Un tratamiento que dura quince años no se decide con un plazo de 24 horas." },
                                { t: "No hay instancia de prueba en boca", d: "Si el plan va de la impresión directo al cementado definitivo, perdiste el momento de corregir sin costo." },
                                { t: "Solo muestran fotos de catálogo", d: "Las imágenes del fabricante del material no dicen nada sobre el trabajo de ese profesional en particular." },
                            ].map((s) => (
                                <div key={s.t} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2 leading-snug">{s.t}</h3>
                                    <p className="text-crema/55 font-manrope text-xs leading-relaxed">{s.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CÓMO RESPONDEMOS NOSOTROS ── */}
                <section className="py-20 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Nuestras respuestas</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                            Cómo responde AM{" "}
                            <span className="font-cormorant italic text-oro">a esos siete criterios</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base leading-relaxed mb-12 max-w-2xl">
                            Escribimos la guía para que la uses con cualquier clínica, incluida la nuestra. Estas son nuestras respuestas, para que las compares con las que recibas en otros lados.
                        </p>
                        <dl className="space-y-6">
                            {[
                                { k: "Material", v: "Porcelana feldespática, disilicato de litio (IPS e.max) y resina compuesta. El material se elige por caso, en la evaluación inicial, y te explicamos el porqué." },
                                { k: "Laboratorio", v: "Propio, dentro de la clínica. El ceramista trabaja en el mismo lugar donde te atendemos." },
                                { k: "Prueba en boca", v: "Sí, en todos los casos de porcelana. No cementamos nada definitivo sin tu aprobación." },
                                { k: "Desgaste", v: "Lo definimos después de evaluarte y te decimos cuánto es, aunque la respuesta no sea la que esperabas. No prometemos cero desgaste de antemano." },
                                { k: "Quién ejecuta", v: "El Dr. Ariel Merino evalúa personalmente cada caso de carillas." },
                                { k: "Si se rompe", v: "Todos los casos tienen seguimiento y garantía. Los alcances concretos se explican en la consulta inicial, antes de empezar, no después." },
                                { k: "Casos", v: "Publicamos casos propios con seguimiento, incluido un caso de 20 carillas a 13 años." },
                            ].map((r) => (
                                <div key={r.k} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6 border-t border-oro/10 pt-5">
                                    <dt className="text-oro/70 font-manrope text-xs uppercase tracking-widest pt-0.5">{r.k}</dt>
                                    <dd className="text-crema/75 font-manrope text-sm leading-relaxed">{r.v}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-12 flex flex-wrap gap-3">
                            <Link href="/casos-antes-y-despues" className="inline-flex items-center gap-2 border border-oro/25 text-crema/80 hover:border-oro/50 hover:text-crema px-5 py-3 rounded-full font-manrope text-sm transition-colors">
                                Ver casos reales →
                            </Link>
                            <Link href="/carillas-dentales" className="inline-flex items-center gap-2 border border-oro/25 text-crema/80 hover:border-oro/50 hover:text-crema px-5 py-3 rounded-full font-manrope text-sm transition-colors">
                                Cómo trabajamos las carillas →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── CASOS ── */}
                <section className="py-20 px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Casos propios</span>
                            <h2 className="text-2xl font-manrope font-light text-crema">
                                Trabajos <span className="font-cormorant italic text-oro">del Dr. Merino.</span>
                            </h2>
                            <p className="text-crema/45 font-manrope text-sm mt-3 max-w-xl">
                                No son imágenes de catálogo: son pacientes de la clínica en Puerto Madero.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental", alt: "Antes y después de diseño de sonrisa con carillas — AM Estética Dental, Puerto Madero" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-diseno-sonrisa-carillas-ceramicas-antes-despues-am-estetica-dental", alt: "Caso de carillas cerámicas antes y después — Dr. Ariel Merino, Buenos Aires" },
                            ].map((foto) => (
                                <div key={foto.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-oro/10 group">
                                    <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-20 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Preguntas frecuentes</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
                            Elegir dónde{" "}
                            <span className="font-cormorant italic text-oro">hacerte carillas</span>
                        </h2>
                        <SeoFaq items={faqItems} />
                    </div>
                </section>

                {/* ── SEGUIR LEYENDO ── */}
                <section className="py-16 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">Seguir leyendo</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { nombre: "Carillas Dentales", desc: "Materiales, proceso y tiempos del tratamiento en Puerto Madero.", href: "/carillas-dentales" },
                                { nombre: "Preguntas antes de empezar", desc: "Qué conviene tener claro antes de la primera consulta.", href: "/blog/preguntas-antes-de-hacerse-carillas" },
                                { nombre: "Porcelana vs Resina", desc: "Compará duración, naturalidad y mantenimiento.", href: "/carillas-de-porcelana-vs-resina" },
                                { nombre: "Feldespática vs Disilicato", desc: "Las dos porcelanas, y cuándo conviene cada una.", href: "/blog/carillas-disilicato-vs-porcelana-feldespatica" },
                                { nombre: "¿Las carillas dañan los dientes?", desc: "Qué dice la evidencia sobre la preparación del esmalte.", href: "/blog/las-carillas-danan-los-dientes" },
                                { nombre: "Inversión en carillas", desc: "Qué cambia el valor según material, piezas y complejidad.", href: "/precio-carillas-dentales-buenos-aires" },
                            ].map((t) => (
                                <Link
                                    key={t.nombre}
                                    href={t.href}
                                    className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/35 transition-colors group"
                                >
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2 group-hover:text-oro transition-colors">{t.nombre}</h3>
                                    <p className="text-crema/55 font-manrope text-xs leading-relaxed">{t.desc}</p>
                                    <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-3 block">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA FINAL ── */}
                <section className="py-28 px-6 md:px-12 text-center relative overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-oro/5 blur-[120px] pointer-events-none" />
                    <div className="relative max-w-2xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Segunda opinión</span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Traé el presupuesto{" "}
                            <span className="font-cormorant italic text-oro">que ya te dieron</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            Si ya te evaluaron en otra clínica, podés venir con ese plan. Te decimos qué haríamos igual y qué haríamos distinto, con el porqué — aunque la conclusión sea que el plan que tenés está bien.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-colors"
                        >
                            Consultar por WhatsApp →
                        </a>
                        <p className="text-crema/30 font-manrope text-xs mt-6">
                            Camila O&apos;Gorman 412, Oficina 101, Puerto Madero · Lun–Vie 10:00–18:00
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
