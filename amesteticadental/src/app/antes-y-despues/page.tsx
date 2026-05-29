import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Antes y Después — Galería de Transformaciones | AM Estética Dental",
    description: "Galería de fotos antes y después de tratamientos de estética dental reales. Carillas de porcelana, diseño de sonrisa, implantes y más. Dr. Ariel Merino, Puerto Madero, Buenos Aires.",
    alternates: {
        canonical: "https://www.amesteticadental.com/antes-y-despues",
    },
    openGraph: {
        title: "Antes y Después — Galería Real | AM Estética Dental",
        description: "Fotos reales de transformaciones dentales. Sin filtros, sin stock. Puerto Madero, Buenos Aires.",
        url: "https://www.amesteticadental.com/antes-y-despues",
        locale: "es_AR",
        type: "website",
    },
};

const GALERIA = [
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan/diseno-sonrisa-plano-quebrado-carillas-ceramicas-antes-despues-portada-paciente-italia-milan-dr-ariel-merino-am-estetica-dental", alt: "Antes y después diseño de sonrisa por plano quebrado con carillas cerámicas — paciente de Milán — Dr. Ariel Merino AM Estética Dental Puerto Madero", tratamiento: "Diseño de Sonrisa", aspect: "aspect-square" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-carillas-veneers-03-dr-ariel-merino-am-estetica-dental", alt: "Transformación extrema con carillas de porcelana antes y después — Dr. Ariel Merino AM Estética Dental Puerto Madero", tratamiento: "Carillas de Porcelana", aspect: "aspect-[16/9]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-01-am-estetica-dental", alt: "Carillas cerámicas antes y después — AM Estética Dental Buenos Aires", tratamiento: "Carillas Cerámicas", aspect: "aspect-square" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-02-am-estetica-dental", alt: "Resultado carillas cerámicas antes y después — AM Estética Dental", tratamiento: "Carillas Cerámicas", aspect: "aspect-square" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-diseno-sonrisa-carillas-ceramicas-antes-despues-am-estetica-dental", alt: "Diseño de sonrisa con carillas cerámicas antes y después — AM Estética Dental", tratamiento: "Diseño de Sonrisa", aspect: "aspect-[4/5]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-eli-carillas-ceramicas-01-am-estetica-dental", alt: "Caso Eli — carillas cerámicas antes y después — AM Estética Dental", tratamiento: "Carillas Cerámicas", aspect: "aspect-square" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-bruxismo-carillas-mordida-cruzada-am-estetica-dental", alt: "Bruxismo con mordida cruzada — carillas cerámicas — AM Estética Dental", tratamiento: "Bruxismo", aspect: "aspect-[4/5]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-erosion-dentaria-carillas-ceramicas-am-estetica-dental", alt: "Erosión dentaria tratada con carillas cerámicas — AM Estética Dental Buenos Aires", tratamiento: "Erosión Dentaria", aspect: "aspect-[4/5]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-caries-carillas-diseno-sonrisa-ceramica-am-estetica-dental", alt: "Diseño de sonrisa cerámica sobre caso de caries — AM Estética Dental", tratamiento: "Diseño de Sonrisa", aspect: "aspect-[4/5]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-03-am-estetica-dental", alt: "Caso avanzado de carillas cerámicas antes y después — AM Estética Dental", tratamiento: "Carillas Cerámicas", aspect: "aspect-[4/5]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carilla-diente-oscurecido-tratamiento-conducto-am-estetica-dental", alt: "Carilla sobre diente oscurecido post endodoncia — AM Estética Dental", tratamiento: "Carilla Unitaria", aspect: "aspect-[4/5]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-diseno-sonrisa-carillas-ceramicas-dr-ariel-merino", alt: "Caso extremo de diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino", tratamiento: "Diseño de Sonrisa", aspect: "aspect-[16/9]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-italiano-carillas-ceramicas-01-am-estetica-dental", alt: "Caso internacional — carillas cerámicas — AM Estética Dental", tratamiento: "Carillas Cerámicas", aspect: "aspect-square" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-italiano-carillas-ceramicas-02-am-estetica-dental", alt: "Resultado final caso internacional carillas cerámicas — AM Estética Dental", tratamiento: "Carillas Cerámicas", aspect: "aspect-square" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-carillas-veneers-04-dr-ariel-merino-am-estetica-dental", alt: "Transformación extrema carillas de porcelana antes y después — Dr. Ariel Merino", tratamiento: "Carillas de Porcelana", aspect: "aspect-[16/9]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-eli-carillas-ceramicas-03-am-estetica-dental", alt: "Caso Eli — antes del tratamiento con carillas cerámicas — AM Estética Dental", tratamiento: "Carillas Cerámicas", aspect: "aspect-[4/5]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-eli-carillas-ceramicas-04-am-estetica-dental", alt: "Caso Eli — después de carillas cerámicas — AM Estética Dental Buenos Aires", tratamiento: "Carillas Cerámicas", aspect: "aspect-[4/5]" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-diseno-sonrisa-ceramicas-dr-ariel-merino", alt: "Diseño de sonrisa carillas cerámicas resultado — Dr. Ariel Merino AM Estética Dental", tratamiento: "Diseño de Sonrisa", aspect: "aspect-square" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/alineadores-invisibles-am-estetica-dental-resultado", alt: "Resultado alineadores invisibles AM — AM Estética Dental Puerto Madero", tratamiento: "Alineadores", aspect: "aspect-square" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/carillas-lente-contacto-dental-resultado-am-estetica-dental", alt: "Lentes de contacto dental resultado — AM Estética Dental Buenos Aires", tratamiento: "Lentes de Contacto Dental", aspect: "aspect-square" },
];

export default function AntesYDespuesPage() {
    return (
        <>
            <Navbar />
            <main className="bg-carbon min-h-screen pt-32 pb-32 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="mb-20">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                            Galería
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                            <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                                Antes y después{" "}
                                <span className="font-cormorant italic text-oro">reales.</span>
                            </h1>
                            <div>
                                <p className="text-crema/60 font-manrope text-lg font-light leading-relaxed mb-4">
                                    No son imágenes de stock. Son pacientes reales atendidos en AM Estética Dental, Puerto Madero.
                                </p>
                                <Link
                                    href="/casos"
                                    className="inline-flex items-center gap-2 text-oro font-manrope text-xs uppercase tracking-widest hover:text-oro/70 transition-colors"
                                >
                                    Ver casos documentados con historia clínica →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Masonry grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {GALERIA.map((foto, index) => (
                            <div
                                key={foto.src}
                                className="break-inside-avoid group relative overflow-hidden rounded-xl mb-4"
                            >
                                <div className={`relative ${foto.aspect} w-full`}>
                                    <Image
                                        src={foto.src}
                                        alt={foto.alt}
                                        fill
                                        loading={index < 6 ? "eager" : "lazy"}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-carbon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                                    <div className="absolute top-3 left-3">
                                        <span className="inline-flex items-center gap-1.5 border border-oro/20 bg-carbon/75 backdrop-blur-sm rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.28em] text-oro">
                                            {foto.tratamiento}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                                        <p className="font-manrope text-[10px] text-oro/50 mt-1">
                                            @drarielmerino · AM Estética Dental
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-24 text-center">
                        <p className="text-crema/40 font-manrope text-sm mb-6">
                            ¿Querés un resultado así para tu sonrisa?
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Vi%20la%20galería%20de%20antes%20y%20después%20y%20me%20gustaría%20una%20consulta."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro/90 transition-all"
                        >
                            Agendá tu consulta
                            <span>→</span>
                        </a>
                    </div>

                </div>
            </main>
        </>
    );
}
