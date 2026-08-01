import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CasoGaleria from "@/components/CasoGaleria";
import { getCasoBySlugMerged, getCasosPublicadosMerged } from "@/lib/public-cases";

export const revalidate = 60;

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return (await getCasosPublicadosMerged("en")).map((caso) => ({ slug: caso.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const caso = await getCasoBySlugMerged(slug, "en");
    if (!caso) return {};
    const canonical = `https://www.amesteticadental.com/en/cases/${caso.slug}`;
    const spanish = `https://www.amesteticadental.com/casos/${caso.slug}`;
    const description = caso.seoDescription || caso.descripcion;
    return {
        metadataBase: new URL("https://www.amesteticadental.com"),
        title: `${caso.seoTitle || caso.titulo} | AM Estética Dental`,
        description,
        alternates: {
            canonical,
            languages: {
                "es-AR": spanish,
                "en-US": canonical,
                "x-default": spanish,
            },
        },
        openGraph: {
            title: caso.seoTitle || caso.titulo,
            description,
            url: canonical,
            images: [{ url: caso.fotoPortada.src }],
            locale: "en_US",
            type: "website",
        },
    };
}

export default async function EnglishCasePage({ params }: Props) {
    const { slug } = await params;
    const caso = await getCasoBySlugMerged(slug, "en");
    if (!caso) notFound();

    const canonical = `https://www.amesteticadental.com/en/cases/${caso.slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: caso.titulo,
        headline: caso.titulo,
        description: caso.seoDescription || caso.descripcion,
        url: canonical,
        inLanguage: "en",
        image: caso.fotos.map((foto) => foto.src),
        about: caso.categorias,
        medicalSpecialty: "Dentistry",
        publisher: {
            "@type": "MedicalBusiness",
            name: "AM Estética Dental",
            url: "https://www.amesteticadental.com",
            telephone: "+5491170219298",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Puerto Madero",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
            },
            founder: { "@type": "Person", name: "Dr. Ariel Merino" },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <Navbar />
            <main className="bg-carbon min-h-screen pt-32 pb-32 px-4">
                <div className="max-w-5xl mx-auto">
                    <nav className="mb-10 flex items-center gap-2 font-manrope text-xs text-crema/30 uppercase tracking-widest">
                        <Link href="/en/before-after" className="hover:text-oro transition-colors">
                            Before &amp; after
                        </Link>
                        <span>/</span>
                        <span className="text-crema/50">{caso.categorias[0]}</span>
                    </nav>

                    <div className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-5">
                            {caso.categorias.map((category) => (
                                <span key={category} className="inline-flex border border-oro/30 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.28em] text-oro">
                                    {category}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-4">
                            {caso.titulo}
                        </h1>
                        <p className="text-crema/50 font-manrope text-lg font-light">{caso.subtitulo}</p>
                    </div>

                    <CasoGaleria fotos={caso.fotos} videoUrl={caso.videoUrl} videoAspect={caso.videoAspect} />

                    <div className="max-w-2xl mb-16">
                        {caso.copy.split("\n\n").map((paragraph, index) => (
                            <p key={index} className="font-manrope text-crema/70 text-base leading-relaxed mb-5">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="border-t border-crema/5 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <p className="font-manrope text-crema/30 text-xs uppercase tracking-widest mb-1">
                                Dr. Ariel Merino · AM Estética Dental
                            </p>
                            <p className="font-manrope text-crema/60 text-sm">Puerto Madero, Buenos Aires</p>
                        </div>
                        <a
                            href="https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20saw%20the%20before%20and%20after%20case%20and%20I'd%20like%20a%20consultation."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro/90 transition-all"
                        >
                            Book your consultation <span>→</span>
                        </a>
                    </div>

                    <div className="mt-12">
                        <Link href="/en/before-after" className="font-manrope text-xs text-crema/30 hover:text-oro transition-colors uppercase tracking-widest">
                            ← View all cases
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
