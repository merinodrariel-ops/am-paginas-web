import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const CANONICAL = "https://www.amesteticadental.com/blog/como-combatir-el-bruxismo-botox-y-placa";
const WA_LINK = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20bruxismo%20y%20quiero%20que%20evaluemos%20mi%20caso.";

const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/bruxismo";
const IMG = {
    header: `${CDN}/bruxismo-placa-nocturna-header-editorial-dr-ariel-merino-am-estetica-dental-buenos-aires.png`,
    placa: `${CDN}/placa-bruxismo-guiada-vista-producto-dr-ariel-merino-am-estetica-dental-buenos-aires.png`,
    masetero: `${CDN}/masetero-toxina-botulinica-ilustracion-dr-ariel-merino-am-estetica-dental-buenos-aires.png`,
    // Foto ya publicada del equipo: se reusa la misma de /equipo-am, no una copia nueva.
    cruz: "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870265/equipo-am/dra-candela-cruz-armonizacion-orofacial-estetica-dental-am-estetica-dental-puerto-madero.jpg",
};

// El video no pasa por el loader de next/image (es otro tipo de recurso), así que
// la URL de Cloudinary va completa y con `q_auto` puesto a mano.
const VIDEO_PLACA = {
    mp4: "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto/v1789936220/bruxismo/placa-bruxismo-giro-360-dr-ariel-merino-am-estetica-dental-buenos-aires.mp4",
    poster: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto,w_800/v1789936222/bruxismo/placa-bruxismo-giro-360-poster-dr-ariel-merino-am-estetica-dental-buenos-aires.jpg",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Cómo combatir el bruxismo: placa y toxina botulínica | AM",
    description: "Los dos tratamientos que de verdad frenan el bruxismo: la placa que guía los movimientos de la mandíbula y la toxina botulínica en el masetero. Cómo funcionan, cuánto duran y por qué se potencian. Dr. Ariel Merino, Puerto Madero.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Cómo combatir el bruxismo: los dos tratamientos que funcionan",
        description: "La placa que guía la mandíbula y la toxina botulínica en el masetero. Qué hace cada una, por qué juntas rinden más y qué esperar de verdad.",
        url: CANONICAL,
        locale: "es_AR",
        type: "article",
        images: [IMG.header],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo combatir el bruxismo: los dos tratamientos que de verdad funcionan",
    image: IMG.header,
    description: "Guía clínica sobre el tratamiento del bruxismo con placa de descarga con guías de desoclusión y toxina botulínica en el músculo masetero: mecanismo, duración, protocolo y límites.",
    author: {
        "@type": "Person",
        name: "Dr. Ariel Merino",
        url: "https://www.wikidata.org/wiki/Q134287655",
        jobTitle: "Odontólogo Estético",
    },
    // La Dra. Cruz aporta la mirada clínica sobre los pacientes sintomáticos.
    // Va como `contributor` y no como coautora: el texto es del Dr. Merino.
    contributor: {
        "@type": "Person",
        name: "Dra. Candela Cruz",
        jobTitle: "Odontóloga — Armonización orofacial",
        // La matrícula va como `identifier`, igual que la del Dr. Merino: una
        // afirmación clínica firmada por un matriculado se puede contrastar
        // contra un registro público.
        identifier: "MN 43.010",
        worksFor: { "@type": "Organization", name: "AM Estética Dental" },
    },
    publisher: {
        "@type": "Organization",
        name: "AM Estética Dental",
        url: "https://www.amesteticadental.com",
    },
    datePublished: "2026-09-20",
    dateModified: "2026-09-20",
    mainEntityOfPage: CANONICAL,
    about: {
        "@type": "MedicalCondition",
        name: "Bruxismo",
        alternateName: ["Rechinar de dientes", "Apretar los dientes", "Bruxismo nocturno"],
    },
};

const SENALES = [
    { titulo: "Te despertás con la mandíbula cansada", desc: "Como si hubieras hecho gimnasio con la cara. Es el signo más típico y el que más se ignora." },
    { titulo: "Dolor de cabeza al levantarte", desc: "Sobre todo en las sienes. El músculo que aprieta de noche también tira de ahí." },
    { titulo: "Los dientes de abajo se ven parejos", desc: "Demasiado parejos. Los bordes deberían tener relieve; si están lisos como una mesa, algo los limó." },
    { titulo: "Sensibilidad que va y viene", desc: "Frío, dulce, o esa molestia rara al morder que aparece unos días y se va." },
    { titulo: "Ruidos al abrir la boca", desc: "Clics, chasquidos o arena. La articulación está avisando." },
    { titulo: "Tu pareja te escucha", desc: "El rechinar nocturno es fuerte. Muchos pacientes llegan porque alguien se lo dijo." },
];

const PLACA_SI = [
    "Es gruesa y rígida: separa los dientes de arriba de los de abajo",
    "Tiene guías talladas que conducen el movimiento de la mandíbula",
    "Se diseña sobre un escaneo 3D de tu boca, no sobre un molde genérico",
    "Se ajusta en boca hasta que el contacto es parejo en todos lados",
    "Se controla y se retoca con el tiempo",
];

const PLACA_NO = [
    "No es la placa fina transparente de después de la ortodoncia",
    "No es un protector deportivo de farmacia",
    "No es un plástico blando que se compra hecho y se calienta en agua",
    "No sirve si no se ajustó: una placa mal calibrada puede molestar más",
];

const PROTOCOLO = [
    { num: "01", titulo: "Terapia de choque", desc: "El primer año, tres aplicaciones. La idea es no dejar que el músculo vuelva a su fuerza anterior entre una y otra." },
    { num: "02", titulo: "Mantenimiento", desc: "Una vez que el patrón cedió, se suele espaciar a dos veces por año." },
    { num: "03", titulo: "La placa, siempre", desc: "La toxina baja la fuerza; la placa protege el esmalte y ordena el movimiento. La placa no se abandona." },
    { num: "04", titulo: "Control", desc: "Se revisa el desgaste, el ajuste de la placa y cómo responde el músculo. El plan se corrige sobre datos, no sobre el calendario." },
];

const FAQ = [
    {
        q: "¿El Botox para el bruxismo es lo mismo que el estético?",
        a: "Es la misma molécula, pero el objetivo es distinto. En estética se trabaja sobre músculos de la expresión, superficiales y pequeños. Acá se aplica en el masetero, que es un músculo masticatorio, profundo y potente. Cambian el punto, la profundidad y la dosis. Por eso importa quién lo aplica: alguien que conozca la anatomía masticatoria, no solo la facial.",
    },
    {
        q: "¿Quién debería aplicar la toxina para el bruxismo?",
        a: "Un odontólogo. No es una cuestión de título sino de terreno: el masetero es un músculo masticatorio y el bruxismo se evalúa mirando cómo encajan los dientes, por dónde se mueve la mandíbula y cómo está la articulación. Bajarle la fuerza al músculo sin haber evaluado la mordida es medio diagnóstico. En AM la aplica la Dra. Candela Cruz, odontóloga del área de armonización orofacial.",
    },
    {
        q: "¿Voy a perder fuerza para masticar?",
        a: "Con dosis bien calculadas, no. El objetivo es bajar los picos de fuerza involuntaria, que son los que rompen, no la fuerza que usás para comer. Algunos pacientes notan los primeros días que morder algo muy duro cuesta un poco más, y se normaliza. Si la dosis se pasa, sí puede haber debilidad al masticar: es la razón principal para no improvisar.",
    },
    {
        q: "¿Cuánto tarda en hacer efecto?",
        a: "No es inmediato. Suele empezar a notarse entre el tercer y el séptimo día, y el efecto completo se ve alrededor de las dos semanas. Si esperabas dormir distinto esa misma noche, no funciona así.",
    },
    {
        q: "¿Cuánto dura?",
        a: "Alrededor de tres meses, con variación de persona a persona. Hay pacientes que llegan a cuatro y otros que a los dos meses y medio ya notan que vuelve la tensión. Por eso el plan se ajusta a cada uno y no al revés.",
    },
    {
        q: "¿Puedo usar solo la placa, sin toxina?",
        a: "Sí, y en muchos casos alcanza. La placa sola es un tratamiento completamente válido y es siempre el punto de partida. La toxina entra cuando el componente muscular es fuerte: mandíbula muy marcada, dolor, desgaste que sigue avanzando a pesar de la placa.",
    },
    {
        q: "¿Y solo toxina, sin placa?",
        a: "No lo recomiendo. La toxina baja la fuerza, pero no elimina el contacto entre los dientes ni corrige por dónde se mueve la mandíbula. La placa es la que protege físicamente el esmalte. Sacarla porque te aplicaste toxina es dejar el diente sin su escudo.",
    },
    {
        q: "¿El bruxismo se cura?",
        a: "Se controla. El bruxismo tiene un componente de sistema nervioso, de estrés y de patrón de sueño que no se resuelve en el consultorio. Lo que sí se puede es que deje de tener consecuencias: que no te rompa los dientes, que no te duela la cabeza y que no te arruine el descanso.",
    },
    {
        q: "¿La toxina sirve si ya tengo los dientes desgastados?",
        a: "Sirve para frenar lo que viene, no para devolver lo que se perdió. El esmalte no se regenera. Si el desgaste ya cambió la forma o la altura de los dientes, hay que rehabilitar eso aparte, y recién después proteger el resultado.",
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

export default function BlogBruxismo() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                {/* ── HERO ── */}
                <section className="relative pt-40 pb-14 px-6 md:px-12">
                    <div className="absolute right-0 top-[20%] w-[420px] h-[420px] rounded-full bg-oro/4 blur-[140px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/blog" className="text-crema/40 font-manrope text-xs hover:text-crema transition-colors">← Blog</Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Bruxismo</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Cómo combatir el bruxismo:{" "}
                            <span className="font-cormorant italic text-oro">los dos tratamientos que de verdad funcionan</span>
                        </h1>

                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            A la noche se te apaga Windows, pero la mandíbula sigue trabajando. Te lo explico sin vueltas: qué le está pasando a tus dientes mientras dormís, y las dos herramientas que usamos en el consultorio para frenarlo. Una protege. La otra baja la fuerza. Juntas cambian el problema de raíz.
                        </p>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-crema/35 font-manrope text-xs">
                            <span>Dr. Ariel Merino</span>
                            <span>·</span>
                            <span>AM Estética Dental, Puerto Madero</span>
                            <span>·</span>
                            <span>10 min de lectura</span>
                        </div>
                    </div>
                </section>

                {/* ── IMAGEN HEADER ── */}
                <section className="px-6 md:px-12 pb-16">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative w-full overflow-hidden rounded-2xl border border-oro/15 bg-carbon-soft" style={{ aspectRatio: "16 / 9" }}>
                            <Image
                                src={IMG.header}
                                alt="Placa de descarga para bruxismo apoyada sobre piedra oscura, iluminada con luz cálida — AM Estética Dental, Puerto Madero"
                                fill
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Es la analogía que más uso en el consultorio, porque es la que hace que el paciente entienda de una: <span className="text-crema">a la noche se te apaga Windows, pero vos seguís apretando</span>. El sistema nervioso central baja la persiana y suelta el control voluntario. Tu musculatura, no. Sigue trabajando toda la noche contra tus propios dientes, con una fuerza que despierto nunca aplicarías, y sin nadie que la frene.
                            </p>
                        </div>

                        {/* ── QUÉ PASA ── */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Por qué el bruxismo es un problema silencioso
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                El bruxismo no duele al principio. Ese es todo el problema. No hay un día en que te des cuenta de que empezó: es un desgaste de décimas de milímetro por año que solo se vuelve visible cuando ya cambió la forma de tus dientes.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Y no se queda en el esmalte. La misma fuerza que lima los bordes viaja hacia arriba: carga la articulación de la mandíbula, tensiona los músculos del cuello, y se traduce en dolores de cabeza que muchos pacientes vienen arrastrando desde hace años sin haberlos conectado nunca con la boca.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-8">
                                Cuando el desgaste ya avanzó, además, la sonrisa envejece. Los dientes se acortan, pierden los bordes y dejan de mostrarse al hablar. Es una de las razones más frecuentes por las que alguien de cuarenta siente que su sonrisa se ve mayor que él.
                            </p>

                            <h3 className="text-crema font-manrope font-medium text-base mb-5">Señales de que estás bruxando</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {SENALES.map((s) => (
                                    <div key={s.titulo} className="border border-oro/12 rounded-2xl p-5 bg-carbon-soft">
                                        <h4 className="text-crema font-manrope font-medium text-sm mb-2">{s.titulo}</h4>
                                        <p className="text-crema/55 font-manrope text-sm leading-relaxed">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* ── SANTO GRIAL 1 ── */}
                        <section>
                            <span className="text-oro/50 font-manrope uppercase tracking-[0.3em] text-xs block mb-4">Primer pilar</span>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                La placa — pero no cualquier placa
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Acá hay una confusión que escucho todas las semanas, y vale la pena aclararla antes que nada. Cuando digo &ldquo;placa&rdquo;, casi todo el mundo piensa en el plástico fino y transparente que te dan al terminar la ortodoncia. Eso es un contenedor: sirve para que los dientes no se muevan de lugar. No tiene nada que ver con esto.
                            </p>

                            {/* Giro 360 en bucle. Es un <video> y no un GIF a propósito: el GIF
                                sólo maneja 256 colores y este plano es un degradé oscuro con
                                reflejos dorados — saldría con bandas y pesaría 10 veces más.
                                Sin controles, en silencio y con `playsInline` se comporta igual
                                que un GIF para el visitante. El `poster` evita el hueco mientras carga. */}
                            <div className="relative w-full overflow-hidden rounded-2xl border border-oro/15 bg-carbon-soft mb-3" style={{ aspectRatio: "1 / 1" }}>
                                <video
                                    src={VIDEO_PLACA.mp4}
                                    poster={VIDEO_PLACA.poster}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    aria-label="Placa de descarga rígida para bruxismo girando 360 grados: arcada completa, cuerpo grueso y superficie de mordida tallada"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-crema/35 font-manrope text-xs mb-8">
                                Así se ve una placa de descarga real, girando 360°: arcada completa, cuerpo grueso y rígido, superficie de mordida tallada. Ilustración de referencia.
                            </p>

                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-8">
                                La placa que usamos para bruxismo es otra cosa. Es gruesa, es rígida y, sobre todo, <span className="text-crema">está tallada para guiar por dónde se mueve tu mandíbula</span>. No es una barrera pasiva entre dos hileras de dientes: es una superficie diseñada para que, cuando el músculo empuje de noche, la mandíbula se deslice por donde vos querés y no por donde venía haciéndolo mal.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                                <div className="border border-oro/12 rounded-2xl p-6 bg-carbon-soft">
                                    <span className="text-oro/60 font-manrope uppercase tracking-[0.25em] text-[10px] block mb-4">Qué es</span>
                                    <div className="space-y-3">
                                        {PLACA_SI.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro/35">—</span>
                                                <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="border border-oro/12 rounded-2xl p-6">
                                    <span className="text-oro/60 font-manrope uppercase tracking-[0.25em] text-[10px] block mb-4">Qué no es</span>
                                    <div className="space-y-3">
                                        {PLACA_NO.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro/35">—</span>
                                                <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                La diferencia entre una y otra no es el material: es el diseño. Escaneamos tu boca, estudiamos cómo se mueve tu mandíbula y la placa se fabrica sobre esos datos. Después se ajusta en boca, que es el paso que más se saltea y el que más define si vas a poder dormir con ella o la vas a dejar en el cajón a la semana.
                            </p>
                            <div className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    <span className="text-oro font-medium">El punto clave:</span> la placa no te hace dejar de apretar. Lo que hace es que apretar deje de costarte los dientes. Es el escudo, y por eso es el primer paso de cualquier tratamiento serio de bruxismo.
                                </p>
                            </div>
                        </section>

                        {/* ── SANTO GRIAL 2 ── */}
                        <section>
                            <span className="text-oro/50 font-manrope uppercase tracking-[0.3em] text-xs block mb-4">Segundo pilar</span>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                La toxina botulínica — bajarle el volumen al músculo
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Si la placa protege, la toxina botulínica ataca el otro lado del problema: la fuerza. Se aplica en el masetero, que es el músculo que tenés a los costados de la cara, entre el pómulo y el ángulo de la mandíbula. Es el que se marca cuando apretás los dientes, y es el motor de todo esto.
                            </p>

                            <div className="relative w-full overflow-hidden rounded-2xl border border-oro/15 bg-carbon-soft mb-3" style={{ aspectRatio: "1 / 1" }}>
                                <Image
                                    src={IMG.masetero}
                                    alt="Ilustración del músculo masetero en perfil, entre el arco cigomático y el ángulo de la mandíbula, con los puntos de aplicación de toxina botulínica — AM Estética Dental"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 768px"
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-crema/35 font-manrope text-xs mb-8">
                                El masetero, entre el pómulo y el ángulo de la mandíbula, con los puntos de aplicación. Ilustración esquemática.
                            </p>

                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Lo explico así: <span className="text-crema">a ese músculo le bajás el volumen</span>. La toxina interrumpe parcialmente la señal que le dice al músculo cuánto contraerse. No lo apaga ni lo paraliza: le recorta los picos. Y los picos son exactamente lo que rompe, porque la fuerza que aplicás dormido es muy superior a la que podrías aplicar despierto.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Menos fuerza sobre el diente significa menos desgaste. Y menos carga sobre la articulación, que es el otro lugar donde el bruxismo cobra factura y del que casi nadie habla hasta que empieza a sonar.
                            </p>

                            <div className="border border-oro/15 rounded-xl p-5 bg-carbon-soft mb-8">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    A mis pacientes les digo que la toxina es <span className="text-oro">el ángel guardián 24/7</span>: no tenés que acordarte de nada, no depende de tu voluntad y trabaja mientras dormís. Está ahí aunque vos te hayas olvidado del tema.
                                </p>
                            </div>

                            <h3 className="text-crema font-manrope font-medium text-base mb-4">
                                No es el mismo tratamiento que el Botox estético
                            </h3>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Esto conviene decirlo claro, porque se confunde todo el tiempo. Es la misma molécula, sí. Pero el músculo, el objetivo y la dosis son otros.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                El Botox estético trabaja sobre los músculos de la expresión: superficiales, pequeños, y el objetivo es suavizar una arruga. El masetero es otra cosa por completo. Es un músculo <span className="text-crema">masticatorio</span>: profundo, potente, de los que más fuerza generan en todo el cuerpo en relación a su tamaño. Y acá el objetivo no es estético: es bajar la fuerza involuntaria sin comprometer tu capacidad de masticar.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                                <div className="border border-oro/12 rounded-2xl p-6 bg-carbon-soft">
                                    <span className="text-oro/60 font-manrope uppercase tracking-[0.25em] text-[10px] block mb-4">Toxina estética</span>
                                    <div className="space-y-2.5">
                                        {[
                                            "Músculos de la expresión",
                                            "Superficiales y pequeños",
                                            "Objetivo: suavizar una arruga",
                                            "Territorio: la piel del rostro",
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro/35">—</span>
                                                <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="border border-oro/12 rounded-2xl p-6">
                                    <span className="text-oro/60 font-manrope uppercase tracking-[0.25em] text-[10px] block mb-4">Toxina para bruxismo</span>
                                    <div className="space-y-2.5">
                                        {[
                                            "Músculo masticatorio (masetero)",
                                            "Profundo y muy potente",
                                            "Objetivo: bajar la fuerza que rompe",
                                            "Territorio: el sistema masticatorio",
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="text-oro/35">—</span>
                                                <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Cambian los puntos de aplicación, cambia la profundidad y cambia la dosis. Una dosis pensada para una arruga no sirve acá; una dosis excesiva en un masetero te deja masticando con dificultad durante semanas.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Y hay algo más de fondo, que es lo que de verdad define quién debería hacerlo. El bruxismo no se resuelve mirando el músculo solo: hay que ver <span className="text-crema">cómo encajan tus dientes, por dónde se mueve tu mandíbula y cómo está la articulación</span>. Bajarle la fuerza al músculo sin haber evaluado la mordida es medio diagnóstico. Por eso en nuestro consultorio la placa y la toxina se deciden juntas, en la misma consulta y por la misma persona.
                            </p>
                            <div className="border border-oro/15 rounded-xl p-5 bg-carbon-soft mb-8">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    <span className="text-oro font-medium">Sin criticar a nadie:</span> el bruxismo es un área donde el terreno es la boca, y el profesional formado en ese terreno es el odontólogo. No es una cuestión de título, es de anatomía masticatoria y de poder evaluar la oclusión en la misma silla.
                                </p>
                            </div>

                            <h3 className="text-crema font-manrope font-medium text-base mb-4">A los tres meses se cae el carruaje</h3>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                El efecto no es permanente, y esto hay que decirlo de entrada. Dura alrededor de tres meses, con variación según la persona. Es la parte del cuento que le llamo <span className="text-crema">el carruaje de la Cenicienta</span>: llega la medianoche, se acaba el hechizo y el músculo empieza a recuperar su fuerza.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-8">
                                Que sea reversible tiene su lado bueno: si algo no te gustó, se va solo. Pero implica que esto no es un tratamiento de una vez. Es un plan.
                            </p>

                            <h3 className="text-crema font-manrope font-medium text-base mb-5">El plan que uso</h3>
                            <div className="space-y-4">
                                {PROTOCOLO.map((p) => (
                                    <div key={p.num} className="flex gap-5 border border-oro/12 rounded-2xl p-6 bg-carbon-soft">
                                        <span className="font-cormorant italic text-oro/50 text-2xl leading-none shrink-0">{p.num}</span>
                                        <div>
                                            <h4 className="text-crema font-manrope font-medium text-sm mb-2">{p.titulo}</h4>
                                            <p className="text-crema/55 font-manrope text-sm leading-relaxed">{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mt-6">
                                La lógica de empezar con tres aplicaciones en el año es simple: si dejás pasar demasiado tiempo entre una y otra, el músculo vuelve a su fuerza original y arrancás de cero cada vez. Concentrando las primeras se consigue que el patrón ceda, y después se puede espaciar.
                            </p>
                        </section>

                        {/* ── POR QUÉ LOS DOS ── */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Por qué los dos juntos y no uno solo
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Porque atacan cosas distintas, y ninguno reemplaza al otro.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                La placa se ocupa del <span className="text-crema">dónde</span>: separa los dientes, absorbe el contacto y ordena por dónde se desliza la mandíbula. Pero no reduce ni un poco la fuerza que hace el músculo; simplemente la recibe ella en lugar de tu esmalte.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                La toxina se ocupa del <span className="text-crema">cuánto</span>: baja la intensidad. Pero no separa los dientes ni corrige el movimiento. Un paciente con toxina y sin placa sigue teniendo contacto diente contra diente todas las noches, solo que con menos violencia.
                            </p>
                            <div className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    Escudo y volumen. Uno protege el diente del golpe, el otro hace que el golpe sea más suave. Es la combinación la que cambia el pronóstico, no cada pieza por separado.
                                </p>
                            </div>
                        </section>

                        {/* ── EXPERIENCIA PERSONAL ── */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Mi propia experiencia
                            </h2>
                            <div className="border-l-2 border-oro/30 pl-6 space-y-4">
                                <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                    No lo cuento como evidencia científica, porque es un solo caso y ese caso soy yo. Lo cuento porque es la razón por la que hablo de esto con tanta convicción.
                                </p>
                                <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                    Yo tenía ruidos articulares. Ese clic al abrir la boca que al principio ignorás, después te acostumbrás y en algún momento te empieza a preocupar. Me apliqué toxina botulínica siguiendo el mismo esquema que les propongo a mis pacientes: tres aplicaciones a lo largo de nueve meses.
                                </p>
                                <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                    El ruido desapareció por completo.
                                </p>
                                <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                    No le prometo eso a nadie —las articulaciones son complejas y cada caso responde distinto—, pero conocer el tratamiento desde adentro cambia cómo se lo explicás a alguien. Sé lo que se siente los primeros días, sé cuándo empieza a notarse y sé qué se recupera.
                                </p>
                            </div>
                        </section>

                        {/* ── LA VOZ DE LA DRA. CRUZ ── */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Quién lo aplica en nuestro consultorio
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                La toxina en AM la aplica la{" "}
                                <Link href="/equipo-am" className="text-oro hover:text-oro-light transition-colors">Dra. Candela Cruz</Link>, que lleva el área de armonización orofacial y estética facial. Es <span className="text-crema">odontóloga</span>, y eso no es un detalle del currículum: es exactamente el punto del que venimos hablando.
                            </p>

                            <div className="border border-oro/15 rounded-2xl p-6 md:p-8 bg-carbon-soft">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-oro/20 shrink-0">
                                        <Image
                                            src={IMG.cruz}
                                            alt="Dra. Candela Cruz, odontóloga de armonización orofacial en AM Estética Dental, Puerto Madero"
                                            fill
                                            sizes="56px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-crema font-manrope font-medium text-sm">Dra. Candela Cruz</p>
                                        <p className="text-crema/45 font-manrope text-xs">Armonización orofacial · AM Estética Dental</p>
                                        <p className="text-crema/35 font-manrope text-[10px] uppercase tracking-[0.22em] mt-0.5">MN 43.010</p>
                                    </div>
                                </div>
                                <div className="space-y-4 border-l-2 border-oro/30 pl-6">
                                    <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                        &ldquo;Los pacientes más agradecidos son los sintomáticos. Los que llegan con dolor: dolor de cabeza al despertar, contractura en el cuello, la mandíbula cansada todas las mañanas. Muchos vienen arrastrando eso desde hace años y probaron de todo menos mirar la boca.&rdquo;
                                    </p>
                                    <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                        &ldquo;Cuando el músculo baja la intensidad, ese cuadro cede. Y ahí el cambio no es estético, es de calidad de vida. Duermen distinto, se levantan distinto. Es de las cosas más gratificantes que hacemos.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* ── SUEÑO ── */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Lo que casi nadie te cuenta: el sueño
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Esta es la parte que a mí más me interesa, y la que menos se menciona cuando se habla de bruxismo.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Apretar los dientes de noche no es un evento silencioso para tu cuerpo. Cada episodio de contracción viene acompañado de una microactivación: el sueño se aligera un instante, aunque no llegues a despertarte ni te acuerdes al otro día. Multiplicá eso por decenas de veces por noche, todas las noches, durante años.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                El resultado es gente que duerme ocho horas y se levanta como si hubiera dormido cinco. Muchos pacientes no vienen por los dientes: vienen porque se despiertan cansados y ya probaron todo lo demás.
                            </p>
                            <div className="border border-oro/15 rounded-xl p-5 bg-carbon-soft mb-6">
                                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                                    <span className="text-oro font-medium">Seamos honestos con esto:</span> no te voy a decir que una placa o la toxina te van a hacer vivir más años. Eso no está demostrado y sería venderte humo. Lo que sí está bien establecido es que el descanso profundo es de lo más reparador que tiene el organismo, y que un bruxismo controlado interrumpe menos ese descanso. El razonamiento es sólido; la promesa sería otra cosa.
                                </p>
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Dicho de forma simple: tratar el bruxismo no es solo cuidar el esmalte. Es devolverle calidad a las ocho horas en las que tu cuerpo se repara.
                            </p>
                        </section>

                        {/* ── LÍMITES ── */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5">
                                Qué no hace, y para quién no es
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                Si algo aprendí en estos años es que explicar los límites de un tratamiento genera más confianza que exagerar sus beneficios. Así que:
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    "No devuelve el esmalte perdido. Lo que se desgastó, se desgastó. Frenás lo que viene; lo anterior se rehabilita aparte.",
                                    "No elimina la causa. El estrés, la ansiedad y el patrón de sueño siguen ahí. Esto controla las consecuencias, no el origen.",
                                    "No es permanente. La toxina se va en unos tres meses y hay que repetirla.",
                                    "No es para todos. El embarazo, la lactancia y ciertas enfermedades neuromusculares son contraindicaciones, y hay medicaciones que interactúan.",
                                    "No es un procedimiento cosmético cualquiera. Es un acto médico sobre un músculo masticatorio: la dosis y el punto los define un profesional formado, con evaluación previa.",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <span className="text-oro/35 shrink-0">—</span>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Si el desgaste ya cambió la forma o la altura de tus dientes, hay un paso previo: primero se reconstruye lo perdido y recién después se protege el resultado. De eso hablamos en detalle en la página sobre{" "}
                                <Link href="/bruxismo-desgaste-dental-carillas-ceramicas" className="text-oro hover:text-oro-light transition-colors">bruxismo y desgaste dental con carillas cerámicas</Link>.
                            </p>
                        </section>

                        {/* ── FAQ ── */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Preguntas frecuentes
                            </h2>
                            <div className="space-y-4">
                                {FAQ.map((item) => (
                                    <div key={item.q} className="border border-oro/12 rounded-2xl p-6 bg-carbon-soft">
                                        <h3 className="text-crema font-manrope font-medium text-sm mb-3">{item.q}</h3>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* ── CONCLUSIÓN ── */}
                        <section className="border-t border-oro/15 pt-10">
                            <h2 className="text-2xl font-manrope font-light text-crema mb-4">La conclusión</h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-4">
                                El bruxismo no se cura, se controla. Y se controla bien cuando atacás las dos variables a la vez: la placa que protege y ordena el movimiento, y la toxina que le baja la fuerza al músculo.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Lo importante es empezar antes de que el desgaste sea visible. Cuando ya se ve, el tratamiento sigue siendo posible, pero deja de ser solo protección y pasa a ser reconstrucción. Es más largo, más caro y más complejo. La ventana buena es ahora, mientras el problema todavía es silencioso.
                            </p>
                        </section>

                        {/* ── CTA ── */}
                        <section className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-4">¿Te reconocés en esto?</span>
                            <h3 className="text-crema font-manrope font-light text-xl mb-4">
                                Evaluamos tu caso en consultorio
                            </h3>
                            <p className="text-crema/55 font-manrope text-sm mb-6 max-w-md mx-auto">
                                Escribinos por WhatsApp. Vemos cuánto desgaste hay, cómo está tu articulación y qué combinación tiene sentido en tu caso: si alcanza con la placa o si conviene sumar toxina.
                            </p>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Consultar por WhatsApp →
                            </a>
                        </section>

                        {/* ── SEGUIR LEYENDO ── */}
                        <section>
                            <span className="text-oro/50 font-manrope uppercase tracking-[0.3em] text-xs block mb-5">Seguir leyendo</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        titulo: "Bruxismo y desgaste dental: carillas cerámicas",
                                        href: "/bruxismo-desgaste-dental-carillas-ceramicas",
                                        desc: "Cuando el desgaste ya cambió la forma de los dientes y hay que reconstruir.",
                                    },
                                    {
                                        titulo: "¿Cuánto duran las carillas de porcelana?",
                                        href: "/blog/cuanto-duran-las-carillas-de-porcelana",
                                        desc: "Qué las desgasta y por qué el bruxismo no tratado es su peor enemigo.",
                                    },
                                ].map((link) => (
                                    <Link key={link.href} href={link.href} className="border border-oro/12 rounded-xl p-5 bg-carbon-soft hover:border-oro/30 transition-colors group">
                                        <h4 className="text-crema font-manrope font-medium text-sm mb-1 group-hover:text-oro transition-colors">{link.titulo}</h4>
                                        <p className="text-crema/45 font-manrope text-xs">{link.desc}</p>
                                        <span className="text-oro/35 group-hover:text-oro text-sm mt-2 block transition-colors">→</span>
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
