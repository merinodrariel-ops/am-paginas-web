import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Testimonios from "@/components/Testimonios";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Carillas de Resina Impresas en 3D en Puerto Madero | AM",
    description: "Carillas ultrafinas de 0.1 a 0.2 mm impresas en resina híbrida 3D de alta carga. Máxima conservación del esmalte dental sin desgaste agresivo en Buenos Aires.",
    alternates: {
        canonical: "https://www.amesteticadental.com/blog/carillas-resina-3d-sin-desgaste-puerto-madero",
    },
    openGraph: {
        title: "Carillas de Resina Impresas en 3D: Sin Desgaste del Esmalte en Puerto Madero",
        description: "Láminas ultrafinas tipo lente de contacto fabricadas con tecnología 3D. Menos invasivo, resultados biológicos y precisión digital guiada.",
        url: "https://www.amesteticadental.com/blog/carillas-resina-3d-sin-desgaste-puerto-madero",
        locale: "es_AR",
        type: "article",
        images: [{ url: "https://res.cloudinary.com/drctvgyqd/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/casos/diseno-sonrisa-diastemas/fragmentos-ceramicos-lentes-contacto-dental-dedo-escala-carillas-am-dr-ariel-merino-am-estetica-dental", width: 1200, height: 630 }],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": "Carillas de Resina Impresas en 3D: La Nueva Era de la Odontología Sin Desgaste en Puerto Madero",
    "description": "Explicación clínica detallada sobre cómo las resinas de impresión 3D de alta carga permiten carillas ultrafinas tipo lente de contacto de 0.1 mm preservando la estructura del diente.",
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
    "datePublished": "2026-11-01",
    "dateModified": "2026-11-01",
    "mainEntityOfPage": "https://www.amesteticadental.com/blog/carillas-resina-3d-sin-desgaste-puerto-madero",
};

const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Carillas Impresas en Resina 3D: ¿El Fin de la Técnica a Mano? - Dr. Ariel Merino",
    "description": "El Dr. Ariel Merino analiza el impacto de la impresión 3D en resinas de alta carga cerámica para carillas definitivas ultrafinas de 0.1 mm frente a la técnica manual tradicional.",
    "thumbnailUrl": "https://i.ytimg.com/vi/QzcwYPHyYDU/maxresdefault.jpg",
    "uploadDate": "2026-11-01T22:21:37Z",
    "contentUrl": "https://www.youtube.com/watch?v=QzcwYPHyYDU",
    "embedUrl": "https://www.youtube.com/embed/QzcwYPHyYDU",
};

export default function PaginaCarillasResina3DAM() {
    return (
        <main className="min-h-screen bg-[#080808] text-[#F2F0E9] font-sans antialiased selection:bg-[#F2B90D] selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />
            <Navbar />

            {/* Hero Section */}
            <header className="relative pt-36 pb-16 px-6 sm:px-8 max-w-4xl mx-auto border-b border-[#222]">
                <div className="flex items-center gap-3 text-xs tracking-widest text-[#F2B90D] uppercase font-semibold mb-6">
                    <Link href="/blog" className="hover:underline">Blog</Link>
                    <span>/</span>
                    <span>Tecnología Dental 3D</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-8 leading-[1.15]">
                    Carillas impresas en resina 3D: <br />
                    <span className="text-[#F2B90D] font-normal italic">el fin del desgaste dental innecesario</span>
                </h1>
                <p className="text-xl sm:text-2xl text-[#999] font-light leading-relaxed mb-6">
                    Durante décadas, el mayor temor de un paciente al pensar en carillas fue el torno. Hoy, la odontología digital aditiva y las resinas 3D de alta carga permiten crear láminas de 0.1 a 0.2 mm que respetan la biología de tus dientes.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#777]">
                    <span>Por <strong className="text-white font-medium">Dr. Ariel Merino</strong></span>
                    <span>·</span>
                    <span>Puerto Madero, Buenos Aires</span>
                    <span>·</span>
                    <span>Lectura de 4 min</span>
                </div>
            </header>

            {/* Contenido del Artículo */}
            <article className="py-14 px-6 sm:px-8 max-w-3xl mx-auto text-lg leading-relaxed text-[#ccc] space-y-8 font-light">
                
                {/* Embed YouTube Video Masterclass */}
                <div className="mb-12 rounded-2xl overflow-hidden border border-[#F2B90D]/30 bg-black shadow-2xl">
                    <div className="relative w-full pb-[56.25%]">
                        <iframe
                            src="https://www.youtube.com/embed/QzcwYPHyYDU?rel=0&modestbranding=1"
                            title="Carillas Impresas en Resina 3D: ¿El Fin de la Técnica a Mano? Dr. Ariel Merino"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                        />
                    </div>
                    <div className="p-4 bg-[#141414] text-xs sm:text-sm text-[#888] flex justify-between items-center">
                        <span>▶ Ver análisis clínico completo por el Dr. Ariel Merino</span>
                        <span className="text-[#F2B90D] font-medium">AM Estética Dental</span>
                    </div>
                </div>

                <p className="text-xl text-white font-normal leading-relaxed border-l-2 border-[#F2B90D] pl-6 italic">
                    «Cuando una carilla es extremadamente delgada —como una lente de contacto de 0.1 mm— no necesitamos limar tu esmalte. La luz la atraviesa y absorbe la tonalidad natural de tu propio diente.»
                </p>

                <h2 className="text-2xl sm:text-3xl font-normal text-white pt-6">
                    1. ¿Por qué cambia todo con la impresión 3D?
                </h2>
                <p>
                    Hasta hace poco tiempo, las opciones para transformar una sonrisa se dividían en dos extremos: o la técnica artesanal a mano alzada en el sillón con espátulas (sujeta a la variabilidad del operador y a tiempos de sesión agotadores), o las cerámicas fresadas tradicionales que, en muchos casos, exigían rebajar tejido dentario sano para compensar grosores mínimos.
                </p>
                <p>
                    Las nuevas resinas definitivas para impresión 3D (como Voxelprint de alta carga cerámica superior al 60%) inauguran la era de la <strong>odontología aditiva</strong>: construir forma, color y volumen sin restar biología.
                </p>

                <h2 className="text-2xl sm:text-3xl font-normal text-white pt-6">
                    2. Previsibilidad milimétrica: lo que ves en la pantalla es lo que va a tu boca
                </h2>
                <p>
                    Uno de los mayores motivos de estrés en pacientes que viajan desde el interior o desde el exterior a nuestra clínica de Puerto Madero es la incertidumbre sobre el resultado final.
                </p>
                <p>
                    Con el flujo 100% digital:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-[#bbb]">
                    <li><strong>Escaneo óptico 3D intraoral:</strong> Sin moldes molestos ni pastas.</li>
                    <li><strong>Planificación estética virtual:</strong> Diseñamos la proporción de tu sonrisa en base a tu fisonomía y dinámica labial.</li>
                    <li><strong>Impresión micropolimérica:</strong> La máquina materializa cada lámina con tolerancia cero de error.</li>
                    <li><strong>Cementado adhesivo guiado:</strong> Las piezas se integran de forma químicamente definitiva a tu esmalte.</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-normal text-white pt-6">
                    3. Resistencia y terminación térmica: el secreto de los 200°C
                </h2>
                <p>
                    ¿Cómo puede una lámina tan fina ser tan resistente? A diferencia de las resinas que se aplican directo en la boca, las piezas impresas en 3D se tratan en laboratorio a altas temperaturas. Este post-curado térmico permite lograr la máxima conversión monomérica del material, otorgando una resistencia al desgaste y un brillo vitrificado (gloss) duradero y estable en el tiempo.
                </p>

                {/* Banner de Consulta */}
                <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-[#181818] to-[#101010] border border-[#F2B90D]/40 text-center space-y-4">
                    <h3 className="text-2xl font-light text-white">¿Querés evaluar tu sonrisa en Puerto Madero?</h3>
                    <p className="text-sm text-[#999] max-w-lg mx-auto">
                        Coordiná una consulta privada de diagnóstico digital con el Dr. Ariel Merino en nuestras oficinas de Camila O'Gorman 412.
                    </p>
                    <div className="pt-2">
                        <a
                            href="https://wa.me/5491170219298?text=Hola!%20Le%C3%AD%20el%20art%C3%ADculo%20sobre%20carillas%20de%20resina%203D%20y%20quiero%20coordinar%20una%20evaluaci%C3%B3n"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#F2B90D] hover:bg-[#d9a408] text-black font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-colors duration-200"
                        >
                            Agendar Evaluación por WhatsApp
                        </a>
                    </div>
                </div>

            </article>

            {/* Testimonios reales de pacientes en lugar de fotos viejas sueltas */}
            <section className="py-16 bg-[#0a0a0a] border-t border-[#1f1f1f]">
                <div className="max-w-6xl mx-auto px-6">
                    <Testimonios />
                </div>
            </section>
        </main>
    );
}
