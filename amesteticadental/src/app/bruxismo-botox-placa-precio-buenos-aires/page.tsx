import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrensaTema from "@/components/PrensaTema";

const CANONICAL = "https://www.amesteticadental.com/bruxismo-botox-placa-precio-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20tratamiento%20de%20bruxismo%20con%20placa%20y%20toxina.";

const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/bruxismo";
const IMG = {
    hero: `${CDN}/bruxismo-placa-nocturna-header-editorial-dr-ariel-merino-am-estetica-dental-buenos-aires.png`,
    musculos: `${CDN}/masetero-temporal-toxina-botulinica-puntos-aplicacion-dr-ariel-merino-am-estetica-dental-buenos-aires.png`,
};
const VIDEO_PLACA = {
    mp4: "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto/v1789936220/bruxismo/placa-bruxismo-giro-360-dr-ariel-merino-am-estetica-dental-buenos-aires.mp4",
    poster: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto,w_800/v1789936222/bruxismo/placa-bruxismo-giro-360-poster-dr-ariel-merino-am-estetica-dental-buenos-aires.jpg",
};

// "Precio" vive en la URL, el title y la description porque es como busca la gente.
// En el cuerpo se habla de INVERSIÓN: es el lenguaje de quien decide por valor.
export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Botox para Bruxismo y Placa — Precio Buenos Aires | AM",
    description: "Placa de descarga y toxina botulínica en masetero y temporal: USD 1.000 los dos juntos, aplicados por odontólogas matriculadas.",
    alternates: { canonical: CANONICAL },
    keywords: "botox para bruxismo precio, tratamiento bruxismo Buenos Aires, placa de bruxismo precio, toxina botulinica masetero Buenos Aires, bruxismo Puerto Madero",
    openGraph: {
        title: "Tratamiento de bruxismo: placa + toxina botulínica | AM Estética Dental",
        description: "Los dos pilares del tratamiento del bruxismo, en un solo plan. USD 1.000. Puerto Madero, Buenos Aires.",
        url: CANONICAL,
        locale: "es_AR",
        type: "website",
        images: [IMG.hero],
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Tratamiento de bruxismo con placa de descarga y toxina botulínica — AM Estética Dental",
    description:
        "Tratamiento del bruxismo en Buenos Aires: placa de descarga con guías de desoclusión diseñada en 3D más toxina botulínica en masetero y temporal. Inversión de USD 1.000 por los dos.",
    url: CANONICAL,
    about: {
        "@type": "MedicalCondition",
        name: "Bruxismo",
        alternateName: ["Rechinar de dientes", "Apretar los dientes", "Bruxismo nocturno"],
    },
    mainEntity: {
        "@type": "MedicalProcedure",
        name: "Placa de descarga con guías de desoclusión y toxina botulínica en músculos masticatorios",
        bodyLocation: "Músculos masetero y temporal",
        performedBy: [
            { "@type": "Person", name: "Dr. Ariel Merino", identifier: "MN 34.869", jobTitle: "Odontólogo" },
            { "@type": "Person", name: "Dra. Candela Cruz", identifier: "MN 43.010", jobTitle: "Odontóloga" },
        ],
    },
    offers: {
        "@type": "Offer",
        price: "1000",
        priceCurrency: "USD",
        description: "Placa de descarga diseñada en 3D más aplicación de toxina botulínica en músculos masticatorios",
    },
};

const INCLUYE = [
    { titulo: "Evaluación y escaneo 3D", desc: "Escáner intraoral, análisis del desgaste y de cómo se mueve tu mandíbula. El diagnóstico se ve en pantalla en la misma consulta." },
    { titulo: "Placa de descarga a medida", desc: "Rígida, con guías talladas que conducen el movimiento mandibular. Diseñada sobre tu escaneo, no sobre un molde genérico." },
    { titulo: "Ajuste en boca", desc: "La placa se calibra hasta que el contacto es parejo. Es el paso que más se saltea y el que define si vas a poder dormir con ella." },
    { titulo: "Aplicación de toxina botulínica", desc: "En masetero y temporal, los dos músculos que cierran la mandíbula. Dosis calculada para bajar la fuerza sin comprometer la masticación." },
];

const PARA_QUIEN = [
    "Te despertás con la mandíbula cansada o con dolor de cabeza en las sienes",
    "Tenés contractura en el cuello que no cede con masajes",
    "Los bordes de tus dientes se ven lisos o más cortos que antes",
    "Escuchás clics o chasquidos al abrir la boca",
    "Tu pareja te escucha rechinar de noche",
    "Ya usás una placa pero el desgaste sigue avanzando",
];

const FAQ = [
    {
        q: "¿Cuánto cuesta el tratamiento de bruxismo en Buenos Aires?",
        a: "USD 1.000 por una placa de descarga más una aplicación de toxina botulínica. Incluye el escaneo 3D, el diseño y la calibración de la placa en boca, y la aplicación en masetero y temporal. Las aplicaciones siguientes, que forman parte del plan del primer año, se cotizan aparte.",
    },
    {
        q: "¿Puedo hacer sólo la placa, sin toxina?",
        a: "Sí. La placa sola es un tratamiento completamente válido y es siempre el punto de partida. La toxina se suma cuando el componente muscular es fuerte: mandíbula muy marcada, dolor, o desgaste que sigue avanzando a pesar de la placa. Se cotiza por separado según el caso.",
    },
    {
        q: "¿Cuánto dura el efecto de la toxina?",
        a: "Alrededor de tres meses, con variación de persona a persona. No es un tratamiento de una vez: se planifica. El esquema de aplicaciones siguientes se define en la consulta, según cómo responda tu músculo.",
    },
    {
        q: "¿Quién aplica la toxina?",
        a: "Una odontóloga. En AM la aplica la Dra. Candela Cruz (MN 43.010), del área de armonización orofacial. El masetero y el temporal son músculos masticatorios, y el bruxismo se evalúa mirando además la mordida y la articulación: bajarle la fuerza al músculo sin haber evaluado la oclusión es medio diagnóstico.",
    },
    {
        q: "¿Voy a perder fuerza para masticar?",
        a: "Con dosis bien calculadas, no. El objetivo es bajar los picos de fuerza involuntaria, que son los que rompen, no la fuerza que usás para comer. Algunos pacientes notan los primeros días que morder algo muy duro cuesta un poco más, y se normaliza.",
    },
    {
        q: "¿Y si mis dientes ya están desgastados?",
        a: "Entonces hay dos etapas. Primero se frena el daño con este tratamiento; después se rehabilita lo perdido, porque el esmalte no se regenera. Esa segunda parte se planifica aparte y tiene su propia inversión.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
};

export default function BruxismoTratamientoPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main className="bg-carbon text-crema font-manrope min-h-screen">
                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">Consultar →</a>
                </header>

                {/* ── HERO ── */}
                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Bruxismo · Puerto Madero</span>
                            <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                                Dejá de romperte los dientes<br />
                                <span className="font-cormorant italic text-oro">mientras dormís.</span>
                            </h1>
                            <p className="text-crema/65 text-lg font-light leading-relaxed mb-8">
                                Los dos pilares del tratamiento en un solo plan: la placa que protege y guía el movimiento de tu mandíbula, y la toxina botulínica que le baja la fuerza al músculo que aprieta.
                            </p>
                            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                                Evaluar mi caso por WhatsApp →
                            </a>
                        </div>
                        <div className="relative w-full overflow-hidden rounded-2xl border border-oro/15" style={{ aspectRatio: "16 / 9" }}>
                            <Image
                                src={IMG.hero}
                                alt="Placa de descarga para bruxismo sobre piedra oscura — AM Estética Dental, Puerto Madero"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* ── LA INVERSIÓN ── */}
                <section className="px-6 py-16 border-y border-oro/8 bg-carbon-soft">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-start">
                            <div className="border border-oro/25 rounded-2xl p-8 min-w-[260px]">
                                <span className="text-oro/60 uppercase tracking-[0.25em] text-[10px] block mb-3">La inversión</span>
                                <p className="font-cormorant italic text-oro text-5xl leading-none mb-3">USD 1.000</p>
                                {/* "Una" y "una", explícito: el plan del primer año son tres
                                    aplicaciones, y sin esa precisión un paciente puede llegar
                                    creyendo que las tres entran en este monto. */}
                                <p className="text-crema/55 text-sm leading-relaxed mb-4">
                                    <span className="text-crema">Una</span> placa de descarga <span className="text-crema">+ una</span> aplicación de toxina botulínica.
                                </p>
                                <p className="text-crema/40 text-xs leading-relaxed border-t border-oro/10 pt-4">
                                    Invertí en tu descanso. Son ocho horas por noche, todas las noches, durante el resto de tu vida.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-light text-crema mb-8">Qué <span className="font-cormorant italic text-oro">incluye</span></h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {INCLUYE.map((i) => (
                                        <div key={i.titulo} className="border border-oro/12 rounded-2xl p-6">
                                            <h3 className="font-semibold text-crema text-sm mb-2">{i.titulo}</h3>
                                            <p className="text-crema/55 text-xs leading-relaxed">{i.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── LA PLACA ── */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <div className="relative w-full overflow-hidden rounded-2xl border border-oro/15 bg-carbon-soft" style={{ aspectRatio: "1 / 1" }}>
                            <video
                                src={VIDEO_PLACA.mp4}
                                poster={VIDEO_PLACA.poster}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                aria-label="Placa de descarga rígida para bruxismo girando 360 grados"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-oro/50 uppercase tracking-[0.3em] text-xs block mb-4">Primer pilar</span>
                            <h2 className="text-2xl md:text-3xl font-light text-crema mb-5">
                                La placa — <span className="font-cormorant italic text-oro">pero no cualquier placa</span>
                            </h2>
                            <p className="text-crema/65 text-base leading-relaxed mb-4">
                                No es el plástico fino y transparente que te dan al terminar la ortodoncia. Eso es un contenedor: sirve para que los dientes no se muevan de lugar.
                            </p>
                            <p className="text-crema/65 text-base leading-relaxed mb-4">
                                La que usamos para bruxismo es gruesa, rígida y está tallada para <span className="text-crema">guiar por dónde se mueve tu mandíbula</span>. No es una barrera pasiva: es una superficie diseñada para que, cuando el músculo empuje de noche, la mandíbula se deslice por donde corresponde.
                            </p>
                            <p className="text-crema/45 text-sm leading-relaxed">
                                Se diseña sobre el escaneo 3D de tu boca y se calibra en consultorio hasta que el contacto es parejo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── LA TOXINA ── */}
                <section className="px-6 py-16 border-y border-oro/8 bg-carbon-soft">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-oro/50 uppercase tracking-[0.3em] text-xs block mb-4">Segundo pilar</span>
                            <h2 className="text-2xl md:text-3xl font-light text-crema mb-5">
                                La toxina — <span className="font-cormorant italic text-oro">bajarle el volumen al músculo</span>
                            </h2>
                            <p className="text-crema/65 text-base leading-relaxed mb-4">
                                Se aplica en los dos músculos que cierran la mandíbula: el <span className="text-crema">masetero</span>, entre el pómulo y el ángulo del maxilar, y el <span className="text-crema">temporal</span>, el abanico que va sobre la sien.
                            </p>
                            <p className="text-crema/65 text-base leading-relaxed mb-4">
                                La toxina recorta los picos de fuerza involuntaria — los que rompen. Menos fuerza sobre el diente es menos desgaste, y menos carga sobre la articulación.
                            </p>
                            <p className="text-crema/45 text-sm leading-relaxed">
                                El temporal es el que explica el dolor de cabeza en las sienes al despertar, y el que casi nadie asocia con la mordida.
                            </p>
                        </div>
                        <div className="relative w-full overflow-hidden rounded-2xl border border-oro/15 order-1 lg:order-2" style={{ aspectRatio: "1 / 1" }}>
                            <Image
                                src={IMG.musculos}
                                alt="Ilustración del músculo temporal en abanico sobre la sien y del masetero en el ángulo mandibular, con los puntos de aplicación de toxina botulínica"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* ── PARA QUIÉN ── */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">¿Es tu <span className="font-cormorant italic text-oro">caso?</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                        {PARA_QUIEN.map((s) => (
                            <div key={s} className="flex items-start gap-3 border border-oro/12 rounded-xl px-5 py-4">
                                <span className="text-oro/40 shrink-0">—</span>
                                <p className="text-crema/60 text-sm leading-relaxed">{s}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── QUIÉN LO HACE ── */}
                <section className="px-6 py-16 border-y border-oro/8 bg-carbon-soft">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-light text-crema mb-5">Lo hacen <span className="font-cormorant italic text-oro">odontólogas.</span></h2>
                        <p className="text-crema/65 text-base leading-relaxed mb-4">
                            No es un detalle del currículum. El masetero y el temporal son músculos masticatorios, y el bruxismo no se resuelve mirando el músculo solo: hay que ver cómo encajan tus dientes, por dónde se mueve tu mandíbula y cómo está la articulación.
                        </p>
                        <p className="text-crema/65 text-base leading-relaxed mb-8">
                            Bajarle la fuerza al músculo sin haber evaluado la mordida es medio diagnóstico. Por eso acá la placa y la toxina se deciden juntas, en la misma consulta.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { n: "Dr. Ariel Merino", m: "MN 34.869", r: "Director clínico" },
                                { n: "Dra. Candela Cruz", m: "MN 43.010", r: "Armonización orofacial" },
                            ].map((p) => (
                                <div key={p.m} className="border border-oro/15 rounded-xl px-6 py-4">
                                    <p className="text-crema text-sm font-medium">{p.n}</p>
                                    <p className="text-crema/45 text-xs">{p.r}</p>
                                    <p className="text-crema/35 text-[10px] uppercase tracking-[0.22em] mt-1">{p.m}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/equipo-am" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro text-sm transition-colors mt-6">
                            Conocer al equipo →
                        </Link>
                    </div>
                </section>

                {/* ── EN LOS MEDIOS ── */}
                {/* Va acá, después de "quién lo hace" y antes del FAQ: es el
                    punto donde la persona ya entendió el tratamiento y el precio,
                    y lo que le falta resolver es si puede confiar. */}
                <section className="px-6 md:px-12 pb-16">
                    <div className="mx-auto max-w-4xl">
                        <PrensaTema
                            tema="bruxismo"
                            titulo="Cuando un medio necesita una voz sobre bruxismo, llama acá"
                            bajada="No es algo que digamos nosotros. La Nación, Ámbito e Infobae buscaron al Dr. Merino para hablar de bruxismo, y una de esas notas la escribió él."
                        />
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">Preguntas <span className="font-cormorant italic text-oro">frecuentes</span></h2>
                    <div className="space-y-4 max-w-3xl">
                        {FAQ.map(({ q, a }) => (
                            <details key={q} className="border border-oro/12 rounded-xl group">
                                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-crema text-sm font-medium select-none gap-4">
                                    {q}<span className="text-oro text-lg group-open:rotate-45 transition-transform duration-200 shrink-0">+</span>
                                </summary>
                                <p className="px-6 pb-5 text-crema/60 text-sm leading-relaxed">{a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ── PROFUNDIZAR ── */}
                <section className="px-6 pb-16 max-w-6xl mx-auto">
                    <div className="border border-oro/15 rounded-2xl p-8 bg-carbon-soft max-w-3xl">
                        <span className="text-oro/50 uppercase tracking-[0.3em] text-xs block mb-4">Si querés entenderlo a fondo</span>
                        <h3 className="text-crema font-light text-xl mb-3">
                            Cómo combatir el bruxismo: los dos tratamientos que de verdad funcionan
                        </h3>
                        <p className="text-crema/55 text-sm leading-relaxed mb-5">
                            El artículo completo del Dr. Merino y la Dra. Cruz: por qué el bruxismo es silencioso, qué hace cada tratamiento, el plan de aplicaciones, qué esperar de verdad y qué no.
                        </p>
                        <Link href="/blog/como-combatir-el-bruxismo-botox-y-placa" className="inline-flex items-center gap-2 text-oro hover:text-oro-light text-sm transition-colors">
                            Leer el artículo →
                        </Link>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="px-6 py-16 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">
                        El daño que ya ocurrió <span className="font-cormorant italic text-oro">no se revierte.</span>
                    </h2>
                    <p className="text-crema/50 text-base mb-8 max-w-md mx-auto">
                        Pero el que viene sí se frena. Cuanto antes, menos hay que reconstruir después.
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">
                        Consultar por WhatsApp →
                    </a>
                    <p className="text-crema/25 text-xs mt-4">Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>
            </main>
        </>
    );
}
