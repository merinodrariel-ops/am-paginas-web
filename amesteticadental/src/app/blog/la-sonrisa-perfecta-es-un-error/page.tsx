import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CasosBanda from "@/components/CasosBanda";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Por qué la sonrisa perfecta es un error en estética dental | AM",
    description: "Lo más difícil no es cambiar una sonrisa, es cambiarla y que no parezca cambiada. Por qué la simetría absoluta atenta contra la belleza natural.",
    alternates: {
        canonical: "https://www.amesteticadental.com/blog/la-sonrisa-perfecta-es-un-error",
    },
    openGraph: {
        title: "Por qué la sonrisa perfecta es un error en estética dental",
        description: "Demasiado blancos y demasiado simétricos llama la atención, pero no por las razones correctas. El valor de la asimetría controlada.",
        url: "https://www.amesteticadental.com/blog/la-sonrisa-perfecta-es-un-error",
        locale: "es_AR",
        type: "article",
        images: [{ url: "https://www.amesteticadental.com/blog/carillas-translucidas-naturales.webp", width: 1200, height: 675 }],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Por qué la sonrisa perfecta es un error en estética dental",
    "image": "https://www.amesteticadental.com/blog/carillas-translucidas-naturales.webp",
    "description": "Lo más difícil en estética dental no es cambiar una sonrisa: es cambiarla y que no parezca cambiada. Criterio clínico por el Dr. Ariel Merino.",
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
    "datePublished": "2026-10-24",
    "dateModified": "2026-10-24",
    "mainEntityOfPage": "https://www.amesteticadental.com/blog/la-sonrisa-perfecta-es-un-error",
};

export default function PaginaSonrisaErrorAM() {
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
                    <span>Criterio Clínico</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-8 leading-[1.15]">
                    Por qué la sonrisa perfecta <br />
                    <span className="text-[#F2B90D] font-normal italic">es un error</span>
                </h1>
                <p className="text-xl sm:text-2xl text-[#999] font-light leading-relaxed mb-6">
                    Trabajando muchos años en estética dental terminás aprendiendo una lección fundamental: lo más difícil no es cambiar una sonrisa. Lo verdaderamente complejo es cambiarla y que nadie note que está cambiada.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#777]">
                    <span>Por <strong className="text-white font-medium">Dr. Ariel Merino</strong></span>
                    <span>·</span>
                    <span>Lectura de 3 min</span>
                </div>
            </header>

            {/* Contenido del Artículo */}
            <article className="py-14 px-6 sm:px-8 max-w-3xl mx-auto text-lg leading-relaxed text-[#ccc] space-y-8 font-light">
                
                {/* Embed YouTube Short */}
                <div className="mb-12 rounded-2xl overflow-hidden border border-[#F2B90D]/30 bg-black shadow-2xl">
                    <div className="relative w-full pb-[177.77%]">
                        <iframe
                            src="https://www.youtube.com/embed/MezEK4Hrd8g?rel=0&modestbranding=1"
                            title="¿Por qué la sonrisa perfecta es un error? Dr. Ariel Merino"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                        />
                    </div>
                    <div className="p-4 bg-[#141414] text-xs sm:text-sm text-[#888] flex justify-between items-center">
                        <span>▶ Ver explicación en video (YouTube Short)</span>
                        <span className="text-[#F2B90D] font-medium">AM Estética Dental</span>
                    </div>
                </div>

                <p className="text-xl text-white font-normal leading-relaxed border-l-2 border-[#F2B90D] pl-6 italic">
                    «Dientes demasiado blancos y matemáticamente simétricos llaman la atención. Pero no por las razones que el paciente cree.»
                </p>

                <h2 className="text-2xl sm:text-3xl font-normal text-white pt-6">
                    En la naturaleza, la perfección rígida no existe
                </h2>

                <p>
                    Cuando alguien te conoce por primera vez, no querés que su mirada se clave exclusivamente en tu boca y que los ojos no puedan despegarse de tus dientes. Lo que buscamos es que vean tu cara, tu expresión, tu mirada y tu presencia global.
                </p>

                <p>
                    Si lo primero que resalta de un rostro es un bloque blanco monocromático que no coincide con las facciones, el trabajo falló estéticamente: rompió la armonía facial.
                </p>

                {/* Imagen Conceptual 1 de Magnific */}
                <div className="my-10 rounded-2xl overflow-hidden border border-[#222]">
                    <img
                        src="/blog/carillas-translucidas-naturales.webp"
                        alt="Detalle macro de porcelana translúcida y textura anatómica natural"
                        className="w-full h-auto block"
                    />
                    <p className="p-3 text-xs sm:text-sm text-[#888] bg-[#111] m-0">
                        Textura superficial y micro-translucidez en borde incisal: elementos clave para que la porcelana responda a la luz como esmalte real.
                    </p>
                </div>

                <h2 className="text-2xl sm:text-3xl font-normal text-white pt-6">
                    El valor de la asimetría controlada
                </h2>

                <p>
                    Permitirse determinadas asimetrías en un diseño de sonrisa no solo está bien: es lo que devuelve la naturalidad. El lado izquierdo de un rostro no es idéntico al derecho. Los dientes reales presentan micro-texturas, bordes sutilmente translúcidos y graduaciones de color que reflejan la luz de forma viva.
                </p>

                <p>
                    Buscamos simetría visual y balance, nunca dos mitades clones idénticas. Si logramos un resultado donde el entorno dice <em>«te ves increíble, descansado, rejuvenecido»</em> pero nadie identifica que hay carillas o porcelana, el trabajo alcanzó su máxima cota.
                </p>

                {/* Imagen Conceptual 2 de Magnific */}
                <div className="my-10 rounded-2xl overflow-hidden border border-[#222]">
                    <img
                        src="/blog/armonia-dental-sofisticacion.webp"
                        alt="Armonía y sofisticación en estética dental de alta complejidad"
                        className="w-full h-auto block"
                    />
                    <p className="p-3 text-xs sm:text-sm text-[#888] bg-[#111] m-0">
                        La integración armónica entre la anatomía gingival, el volumen labial y la curva de la sonrisa.
                    </p>
                </div>

                <div className="bg-[#111] border border-[#222] p-8 rounded-2xl my-10 space-y-4">
                    <h3 className="text-xl text-[#F2B90D] font-normal">La verdadera sofisticación</h3>
                    <p className="text-base text-[#aaa] leading-relaxed m-0">
                        La verdadera sofisticación en estética dental consiste en que cuando sonrías todos noten algo diferente y magnético, pero nadie sepa explicar el porqué.
                    </p>
                </div>

                <div className="pt-10 border-t border-[#222]">
                    <h3 className="text-2xl font-light text-white mb-4">¿Querés evaluar tu caso en Puerto Madero?</h3>
                    <p className="text-[#999] mb-8">
                        Diseñamos cada sonrisa de manera digital en 3D respetando la anatomía de tus facciones y priorizando un resultado que nadie note que está hecho.
                    </p>
                    <a
                        href="https://wa.me/5491170219298?text=Hola%20Dr.%20Ariel,%20leí%20la%20nota%20sobre%20sonrisas%20naturales%20y%20me%20gustaría%20coordinar%20una%20evaluación"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#F2B90D] hover:bg-[#d9a50b] text-black font-medium px-8 py-4 rounded-full transition-colors text-base"
                    >
                        Coordinar consulta con el Dr. Ariel Merino
                    </a>
                </div>
            </article>

            {/* Banda de Casos Clínicos */}
            <div className="border-t border-[#222]">
                <CasosBanda />
            </div>
        </main>
    );
}