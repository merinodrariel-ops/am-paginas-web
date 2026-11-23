import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Testimonios from "@/components/Testimonios";

const CANONICAL = "https://www.amesteticadental.com/blog/alineadores-con-memoria-de-forma";
const FOTO_MEMORIA = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/alineadores/alineador-impreso-3d-memoria-de-forma-am.jpg";
const FOTO_MALLA = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/alineadores/alineador-impreso-3d-malla-digital-am";
const VIDEO_360 = "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto,vc_auto/alineadores/alineador-impreso-3d-sin-ataches-360-am.mp4";
const VIDEO_POSTER = "https://res.cloudinary.com/drctvgyqd/image/upload/v1791888815/alineadores/alineador-impreso-3d-memoria-de-forma-am.jpg";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Alineadores con Memoria de Forma: Ortodoncia 3D | AM",
    description: "Alineadores impresos en 3D con memoria de forma: fuerza continua con temperatura bucal, prácticamente sin ataches y menor tiempo de tratamiento.",
    alternates: {
        canonical: CANONICAL,
    },
    openGraph: {
        title: "Alineadores con Memoria de Forma: La Nueva Ortodoncia 3D | AM Estética Dental",
        description: "Ortodoncia invisible impresa directamente en 3D: activación térmica, fuerza continua biológica, sin dolor de deformación y sin ataches visibles.",
        url: CANONICAL,
        locale: "es_AR",
        type: "article",
        images: [{ url: FOTO_MEMORIA, width: 1200, height: 630 }],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": "Alineadores con Memoria de Forma: La Revolución de la Ortodoncia Invisible Impresa en 3D",
    "description": "Explicación clínica detallada sobre cómo los alineadores impresos en 3D con resina de memoria de forma superan el termoformado tradicional, logrando fuerza continua y eliminando los ataches.",
    "author": {
        "@id": "https://www.arielmerino.com/#person",
        "@type": "Person",
        "name": "Dr. Ariel Merino",
        "url": "https://www.wikidata.org/wiki/Q134287655",
        "jobTitle": "Odontólogo Estético",
    },
    "publisher": {
        "@type": "Organization",
        "name": "AM Estética Dental",
        "url": "https://www.amesteticadental.com",
    },
    "datePublished": "2026-11-23",
    "dateModified": "2026-11-23",
    "mainEntityOfPage": CANONICAL,
};

export default function PaginaAlineadoresMemoriaForma() {
    return (
        <main className="min-h-screen bg-[#080808] text-[#F2F0E9] font-sans antialiased selection:bg-[#F2B90D] selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Navbar />

            {/* Hero Section */}
            <header className="relative pt-36 pb-16 px-6 sm:px-8 max-w-4xl mx-auto border-b border-[#222]">
                <div className="flex items-center gap-3 text-xs tracking-widest text-[#F2B90D] uppercase font-semibold mb-6">
                    <Link href="/blog" className="hover:underline">Blog</Link>
                    <span>/</span>
                    <span>Ortodoncia Invisible 3D</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-8 leading-[1.15]">
                    Alineadores con memoria de forma: <br />
                    <span className="text-[#F2B90D] font-normal italic">la nueva generación de ortodoncia 3D</span>
                </h1>
                <p className="text-xl sm:text-2xl text-[#999] font-light leading-relaxed mb-6">
                    Durante más de veinte años, la ortodoncia invisible se basó en el mismo principio: estirar una lámina de plástico caliente sobre un molde de yeso o resina. La tecnología de memoria de forma y la impresión 3D directa cambian las reglas del juego.
                </p>
                <div className="flex items-center gap-4 text-xs text-[#777] font-mono tracking-wider">
                    <span>POR DR. ARIEL MERINO</span>
                    <span>•</span>
                    <span>LECTURA: 7 MIN</span>
                    <span>•</span>
                    <span>AM ESTÉTICA DENTAL</span>
                </div>
            </header>

            {/* Video / Visual Hero */}
            <section className="max-w-4xl mx-auto px-6 sm:px-8 pt-12 pb-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#222] bg-[#121212] shadow-2xl">
                    <video
                        src={VIDEO_360}
                        poster={VIDEO_POSTER}
                        controls
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="text-xs text-[#777] text-center mt-3 font-mono">
                    Alineador impreso en 3D con resina termorreactiva de memoria de forma — AM Estética Dental, Puerto Madero.
                </p>
            </section>

            {/* Contenido Principal */}
            <article className="max-w-3xl mx-auto px-6 sm:px-8 py-12 space-y-10 text-base sm:text-lg text-[#ccc] font-light leading-relaxed">
                
                <p className="text-xl text-white font-normal leading-relaxed border-l-2 border-[#F2B90D] pl-6 italic">
                    «El gran defecto de los alineadores convencionales siempre fue la fatiga del material: ejercían fuerza los primeros tres días y después se deformaban. Con memoria de forma, el alineador trabaja con la misma precisión biológica desde el primer día hasta el último.»
                </p>

                <h2 className="text-2xl sm:text-3xl font-normal text-white pt-6">
                    1. ¿Qué son y cómo funcionan los alineadores con memoria de forma?
                </h2>
                <p>
                    A diferencia de las placas tradicionales que se termoforman al vacío sobre moldes plásticos, estos alineadores se <strong>imprimen directamente en 3D</strong> utilizando fotopolímeros biocompatibles termorreactivos.
                </p>
                <p>
                    Su característica más asombrosa es la interacción con la temperatura:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-[#bbb]">
                    <li><strong>Se ablandan con agua tibia:</strong> Antes de colocarlos en boca, se sumergen unos segundos en agua tibia. El material se vuelve flexible y dócil, permitiendo calzarlos con extrema suavidad y sin forzar los dientes.</li>
                    <li><strong>Se reactivan con la temperatura de tu boca:</strong> Al entrar en contacto con los 36.5 °C corporales, la resina recupera su rigidez programada. Al volver a su forma original, ejerce un empuje constante, continuo y suave sobre cada pieza.</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-normal text-white pt-6">
                    2. Por qué los alineadores convencionales perdían fuerza
                </h2>
                <p>
                    Si alguna vez usaste alineadores tradicionales o consultaste con amigos que los hayan llevado, seguro escuchaste lo mismo: los primeros dos o tres días aprietan mucho (a veces con dolor de cabeza o molestia al masticar), y hacia el día 4 ya se sienten flojos.
                </p>
                <p>
                    Esto ocurre por un fenómeno físico llamado <em>relajación plástica</em>: el plástico convencional pierde tensión elástica rápidamente. El resto de la semana, la placa actúa casi como un retenedor pasivo, esperando al siguiente recambio.
                </p>
                <p>
                    Los alineadores con memoria de forma resuelven esto: al reactivarse con cada ciclo térmico y no sufrir relajación residual, proporcionan una fuerza fisiológica constante durante todo el tiempo de uso.
                </p>

                {/* Imagen Malla 3D */}
                <div className="my-10 rounded-2xl overflow-hidden border border-[#222]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={FOTO_MALLA}
                        alt="Malla digital y diseño 3D de alineadores de alta precisión — AM Estética Dental"
                        className="w-full object-cover"
                        loading="lazy"
                    />
                    <div className="p-4 bg-[#111] text-xs text-[#888] font-mono">
                        Planificación digital voxel a voxel: control de grosores sectorizados para piezas de alta resistencia.
                    </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-normal text-white pt-6">
                    3. Prácticamente sin ataches: estética de verdad
                </h2>
                <p>
                    Uno de los mayores motivos de decepción en pacientes que buscaban ortodoncia "invisible" tradicional era descubrir que les tenían que colocar diez o doce <em>ataches</em> (botones de resina pegados sobre el frente de los dientes). Esos botones acumulan placa, se manchan con café o vino tinto y hacen que el alineador se note a simple vista.
                </p>
                <p>
                    Gracias a la precisión de la impresión directa en 3D, el alineador abraza la anatomía del diente con una retención micrométrica tan exacta que <strong>en la gran mayoría de los casos no requiere ataches</strong>. Tu sonrisa luce limpia, sin agregados rugosos sobre el esmalte.
                </p>

                <h2 className="text-2xl sm:text-3xl font-normal text-white pt-6">
                    4. Tratamientos entre un 30% y un 40% más rápidos
                </h2>
                <p>
                    Al mantener una fuerza biológica continua sin valles de inactividad, el movimiento dentario no se interrumpe. Además, la impresión 3D nos permite variar el espesor de la placa según la zona: podemos darle mayor espesor y fuerza a un canino con raíz profunda o a un molar rotado, y menor espesor a los incisivos anteriores.
                </p>
                <p>
                    El resultado clínico es contundente: tratamientos que antes demandaban 14 o 18 meses pueden resolverse en 8 a 10 meses con mayor predictibilidad biológica.
                </p>

                {/* Banner de Consulta */}
                <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-[#181818] to-[#101010] border border-[#F2B90D]/40 text-center space-y-4">
                    <h3 className="text-2xl font-light text-white">¿Querés evaluar tu caso con alineadores 3D?</h3>
                    <p className="text-sm text-[#999] max-w-lg mx-auto">
                        Evaluamos tu mordida y diseñamos tu planificación digital en nuestra clínica de Puerto Madero (Camila O'Gorman 412).
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/5491170219298?text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20alineadores%20con%20memoria%20de%20forma%20y%20quiero%20coordinar%20una%20consulta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#F2B90D] hover:bg-[#d9a408] text-black font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-colors duration-200"
                        >
                            Consultar por WhatsApp
                        </a>
                        <Link
                            href="/alineadores-invisibles-impresos-3d"
                            className="inline-block border border-[#F2B90D]/40 hover:border-[#F2B90D] text-[#F2B90D] font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-colors duration-200"
                        >
                            Ver Tratamiento Completo →
                        </Link>
                    </div>
                </div>

                {/* Enlaces a la red */}
                <div className="border-t border-[#222] pt-8 mt-12">
                    <p className="text-xs uppercase tracking-widest text-[#777] font-mono mb-4">Otras perspectivas de esta tecnología</p>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <a
                            href="https://www.thedentalreview.com/noticias/alineadores-memoria-de-forma-impresion-3d-directa-2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-xl border border-[#222] hover:border-[#F2B90D]/40 transition-colors block"
                        >
                            <span className="text-[#F2B90D] block font-medium mb-1">The Dental Review →</span>
                            <span className="text-[#888] text-xs">Análisis técnico de polímeros y biomecánica aditiva directa.</span>
                        </a>
                        <a
                            href="https://www.arielmerino.com/ia-en-la-consulta/alineadores-con-memoria-de-forma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-xl border border-[#222] hover:border-[#F2B90D]/40 transition-colors block"
                        >
                            <span className="text-[#F2B90D] block font-medium mb-1">Dr. Ariel Merino →</span>
                            <span className="text-[#888] text-xs">Criterio clínico: por qué dejamos atrás el termoformado.</span>
                        </a>
                    </div>
                </div>

            </article>

            {/* Testimonios */}
            <section className="py-16 bg-[#0a0a0a] border-t border-[#1f1f1f]">
                <div className="max-w-6xl mx-auto px-6">
                    <Testimonios />
                </div>
            </section>
        </main>
    );
}
