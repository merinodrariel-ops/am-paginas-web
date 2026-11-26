import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Testimonios from "@/components/Testimonios";

const CANONICAL = "https://www.amesteticadental.com/blog/20-carillas-en-5-dias-caso-mendoza-turismo-dental";
const FOTO_PORTADA = "/images/casos/mendoza/caso-mendoza-antes-despues-carillas-porcelana-rostro-labios-dr-ariel-merino.webp";
const FOTO_FLUJO = "/images/casos/mendoza/caso-mendoza-planificacion-digital-2d-3d-fresado-vhf-resultado-real.webp";
const FOTO_ROSTRO = "/images/casos/mendoza/caso-mendoza-antes-despues-rostro-completo.webp";
const FOTO_MACRO = "/images/casos/mendoza/caso-mendoza-antes-despues-macro-sonrisa-carillas.webp";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "20 Carillas en 5 Días: Caso Mendoza y Flujo Digital 3D | AM",
    description: "Caso real de turismo dental: paciente de Mendoza renovó su sonrisa completa con 20 carillas de disilicato de litio de 0.3 mm en 5 días gracias a encerado 3D y fresado VHF.",
    alternates: {
        canonical: CANONICAL,
    },
    openGraph: {
        title: "20 Carillas en 5 Días: El Caso de Mendoza y el Flujo Digital 3D",
        description: "Rehabilitación estética completa en tiempo récord: 20 carillas cerámicas en 5 días con tecnología CAD/CAM y fresado alemán VHF.",
        url: CANONICAL,
        images: [{ url: FOTO_PORTADA }],
        locale: "es_AR",
        type: "article",
    },
};

export default function CasoMendozaBlogPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        headline: "20 Carillas Cerámicas en 5 Días: Turismo Dental y Flujo 100% Digital 3D",
        description: "Caso clínico real de paciente de Mendoza rehabilitado en 5 días con 20 carillas de disilicato de litio IPS e.max de 0.3 mm.",
        url: CANONICAL,
        image: [FOTO_PORTADA, FOTO_FLUJO],
        author: {
            "@type": "Person",
            name: "Dr. Ariel Merino",
            jobTitle: "Especialista en Estética Dental y Rehabilitación Oral",
            worksFor: {
                "@type": "MedicalBusiness",
                name: "AM Estética Dental",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "Camila O'Gorman 412",
                    addressLocality: "Puerto Madero",
                    addressRegion: "Buenos Aires",
                    addressCountry: "AR",
                },
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <Navbar />
            <main className="bg-carbon min-h-screen pt-32 pb-24 text-crema px-4 sm:px-6">
                <article className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="mb-8 flex items-center gap-2 font-manrope text-xs text-crema/40 uppercase tracking-widest">
                        <Link href="/" className="hover:text-oro transition-colors">Inicio</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-oro transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-crema/70">Turismo Dental</span>
                    </nav>

                    {/* Encabezado */}
                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex border border-oro/30 bg-oro/10 rounded-full px-3 py-1 font-manrope text-[10px] uppercase tracking-[0.28em] text-oro">
                                Caso Clínico Real
                            </span>
                            <span className="inline-flex border border-crema/10 rounded-full px-3 py-1 font-manrope text-[10px] uppercase tracking-[0.28em] text-crema/60">
                                Turismo Dental
                            </span>
                            <span className="text-crema/40 font-manrope text-xs">5 min de lectura</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-manrope font-light leading-tight mb-6">
                            20 carillas en 5 días: cómo resolver una sonrisa completa en{" "}
                            <span className="font-cormorant italic text-oro">tiempo récord</span> para pacientes del interior
                        </h1>
                        <p className="font-manrope text-lg md:text-xl text-crema/60 font-light leading-relaxed">
                            Un paciente abogado viajó desde Mendoza a Buenos Aires para transformar su sonrisa. Gracias a la planificación 2D, encerado virtual 3D y fresado robotizado VHF, colocamos 20 carillas cerámicas de 0.3 mm en menos de una semana.
                        </p>
                    </header>

                    {/* Foto principal */}
                    <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden mb-12 border border-oro/15 shadow-2xl">
                        <Image
                            src={FOTO_PORTADA}
                            alt="Antes y después de 20 carillas cerámicas en paciente de Mendoza — Dr. Ariel Merino"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 900px"
                        />
                    </div>

                    {/* Contenido Editorial */}
                    <div className="font-manrope text-crema/80 text-base md:text-lg leading-relaxed space-y-6">
                        <p>
                            Cuando un paciente se toma un avión para atenderse en Puerto Madero, hay dos factores que no admiten margen de error: <strong>el tiempo y la precisión</strong>. 
                        </p>
                        <p>
                            Este caso corresponde a un paciente abogado de Mendoza que buscaba renovar integralmente su sonrisa. Tenía bordes desgastados, asimetrías de color y una pérdida progresiva de brillo que apagaba su expresión. Por sus compromisos profesionales y audiencias judiciales, no podía trasladarse durante meses a Buenos Aires para un tratamiento tradicional en múltiples etapas.
                        </p>
                        <p>
                            Nuestra respuesta fue un protocolo de <strong>turismo dental de alta precisión</strong>: concentrar el diagnóstico, el diseño estético, la fabricación y la cementación definitiva en <strong>exactamente 5 días</strong>, trabajando tanto la arcada superior como la inferior (10 carillas arriba y 10 carillas abajo).
                        </p>

                        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-carbon-soft border border-oro/20">
                            <h3 className="text-xl font-manrope font-normal text-oro mb-3">
                                Ficha técnica del tratamiento
                            </h3>
                            <ul className="space-y-2 text-sm sm:text-base text-crema/75">
                                <li><strong>Paciente:</strong> Profesional (Abogado), oriundo de la provincia de Mendoza.</li>
                                <li><strong>Tratamiento:</strong> Rehabilitación estética con 20 carillas cerámicas (10 superiores y 10 inferiores).</li>
                                <li><strong>Material:</strong> Disilicato de litio IPS e.max (0.3 mm de espesor, tipo lentes de contacto).</li>
                                <li><strong>Tecnología:</strong> Flujo 100% digital 3D (DSD, escaneo intraoral, encerado digital 3D y fresado alemán VHF).</li>
                                <li><strong>Duración total:</strong> 5 días (llegada a Buenos Aires, colocación y alta clínica).</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-manrope font-light text-crema pt-6">
                            El flujo 100% digital: del escáner a la fresadora VHF
                        </h2>
                        <p>
                            La odontología tradicional solía requerir semanas de espera entre impresiones con alginato o silicona que resultaban incómodas para el paciente, envíos a laboratorios externos y pruebas repetidas. En AM Estética Dental operamos con un <strong>laboratorio digital propio</strong> integrado a la clínica.
                        </p>
                        
                        {/* Infografía flujo digital */}
                        <div className="my-8 relative aspect-[4/5] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border border-oro/15 shadow-xl">
                            <Image
                                src={FOTO_FLUJO}
                                alt="Secuencia del flujo digital: diseño 2D DSD, encerado 3D STL y resultado real en boca — Dr. Ariel Merino"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 900px"
                            />
                        </div>

                        <p>
                            El proceso se divide en tres fases milimétricas:
                        </p>
                        <ol className="list-decimal list-inside space-y-3 pl-2 text-crema/75">
                            <li>
                                <strong>Paso 1 — Diseño 2D (Digital Smile Design):</strong> Sobre fotografías faciales de alta definición, calibramos las proporciones ideales de los dientes según la línea de la sonrisa, el labio superior y los ejes bipupilares del paciente.
                            </li>
                            <li>
                                <strong>Paso 2 — Encerado virtual 3D (malla STL):</strong> Traducimos el diseño bidimensional a una arquitectura tridimensional digital mediante software CAD. Esto permite visualizar el volumen final con precisión micrométrica antes de tocar un solo diente.
                            </li>
                            <li>
                                <strong>Paso 3 — Fresado robotizado VHF de ultra precisión:</strong> Las carillas se tallan por control numérico (CNC) con fresadoras alemanas VHF en bloques de disilicato de litio IPS e.max. Se logran espesores de <strong>0.3 milímetros</strong>, idénticos a los lentes de contacto dentales.
                            </li>
                        </ol>

                        <h2 className="text-2xl sm:text-3xl font-manrope font-light text-crema pt-6">
                            Conservar el esmalte natural: la clave de los 0.3 mm
                        </h2>
                        <p>
                            Una de las dudas más frecuentes de los pacientes que viajan a atenderse es si es necesario desgastar los dientes. En este caso, al trabajar con cerámicas reforzadas de 0.3 mm y planificación 3D, el tratamiento fue <strong>mínimamente invasivo</strong>.
                        </p>
                        <p>
                            Las carillas tipo lentes de contacto se adhieren químicamente al esmalte natural mediante protocolos adhesivos de última generación. Esto garantiza una fuerza de unión biológica superior, estabilidad del color a lo largo de los años y una encía sana y desinflamada desde el primer momento.
                        </p>

                        {/* Comparativas detalladas */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-oro/15">
                                <Image
                                    src={FOTO_ROSTRO}
                                    alt="Rostro antes y después del paciente de Mendoza"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-oro/15">
                                <Image
                                    src={FOTO_MACRO}
                                    alt="Macro de la sonrisa antes y después con carillas cerámicas"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-manrope font-light text-crema pt-6">
                            ¿Venís del interior o del exterior? Cómo organizar tu viaje
                        </h2>
                        <p>
                            Para pacientes que viven en Mendoza, Córdoba, Rosario, Neuquén, o que viajan desde el exterior (Uruguay, Chile, Estados Unidos, Europa), contamos con un canal de atención previo:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-2 text-crema/75">
                            <li><strong>Evaluación virtual previa:</strong> Nos enviás fotos de tu sonrisa por WhatsApp y el Dr. Ariel Merino evalúa la viabilidad del tratamiento antes de que compres tu pasaje.</li>
                            <li><strong>Agenda en bloque:</strong> Coordinamos turnos intensivos para que tu estadía en Buenos Aires sea eficiente y placentera.</li>
                            <li><strong>Ubicación en Puerto Madero:</strong> Acceso a hoteles, gastronomía y seguridad a minutos de la clínica.</li>
                        </ul>

                        {/* CTA al caso clínico y contacto */}
                        <div className="my-12 p-8 rounded-2xl bg-carbon-soft border border-oro/30 text-center">
                            <span className="text-oro font-manrope uppercase tracking-[0.3em] text-xs block mb-3">
                                AM Estética Dental · Puerto Madero
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-manrope font-light text-crema mb-4">
                                ¿Querés ver el caso completo con todas las fotos?
                            </h3>
                            <p className="text-crema/60 text-sm sm:text-base max-w-lg mx-auto mb-6">
                                Explorá la galería clínica en alta resolución del caso del paciente de Mendoza en nuestra sección de casos reales.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/casos/20-carillas-ceramicas-tiempo-record-paciente-mendoza"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-oro text-oro hover:bg-oro hover:text-carbon px-6 py-3.5 rounded-full font-manrope text-sm font-semibold transition-[color,background-color,border-color,opacity,box-shadow,transform,filter]"
                                >
                                    Ver caso clínico completo →
                                </Link>
                                <Link
                                    href="/turismo-dental"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-oro text-carbon hover:bg-oro/90 px-6 py-3.5 rounded-full font-manrope text-sm font-semibold transition-[color,background-color,border-color,opacity,box-shadow,transform,filter]"
                                >
                                    Conocer Turismo Dental
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="max-w-4xl mx-auto mt-16">
                    <Testimonios />
                </div>
            </main>
        </>
    );
}
