import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CasoGaleria from "@/components/CasoGaleria";
import { getCasoBySlug, getCasosPublicados } from "@/data/casos";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getCasosPublicados().map((caso) => ({ slug: caso.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const caso = getCasoBySlug(slug);
    if (!caso) return {};

    return {
        metadataBase: new URL("https://www.amesteticadental.com"),
        title: `${caso.titulo} | AM Estética Dental`,
        description: caso.descripcion,
        alternates: {
            canonical: `https://www.amesteticadental.com/antes-y-despues/${caso.slug}`,
        },
        openGraph: {
            title: caso.titulo,
            description: caso.descripcion,
            url: `https://www.amesteticadental.com/antes-y-despues/${caso.slug}`,
            images: [{ url: caso.fotoPortada.src }],
            locale: "es_AR",
            type: "website",
        },
    };
}

export default async function CasoPage({ params }: Props) {
    const { slug } = await params;
    const caso = getCasoBySlug(slug);
    if (!caso) notFound();

    return (
        <>
            <Navbar />
            <main className="bg-carbon min-h-screen pt-32 pb-32 px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Breadcrumb */}
                    <nav className="mb-10 flex items-center gap-2 font-manrope text-xs text-crema/30 uppercase tracking-widest">
                        <Link href="/antes-y-despues" className="hover:text-oro transition-colors">
                            Antes y después
                        </Link>
                        <span>/</span>
                        <span className="text-crema/50">{caso.categorias[0]}</span>
                    </nav>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-5">
                            {caso.categorias.map((cat) => (
                                <span
                                    key={cat}
                                    className="inline-flex items-center gap-1.5 border border-oro/30 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.28em] text-oro"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-4">
                            {caso.titulo}
                        </h1>
                        <p className="text-crema/50 font-manrope text-lg font-light">
                            {caso.subtitulo}
                        </p>

                        {/* Datos rápidos */}
                        <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-crema/5">
                            {caso.duracion && (
                                <div>
                                    <p className="font-manrope text-[9px] uppercase tracking-[0.3em] text-oro/50 mb-1">Duración</p>
                                    <p className="font-manrope text-sm text-crema/70">{caso.duracion}</p>
                                </div>
                            )}
                            {caso.piezas && (
                                <div>
                                    <p className="font-manrope text-[9px] uppercase tracking-[0.3em] text-oro/50 mb-1">Piezas</p>
                                    <p className="font-manrope text-sm text-crema/70">{caso.piezas}</p>
                                </div>
                            )}
                            {caso.tecnica && (
                                <div>
                                    <p className="font-manrope text-[9px] uppercase tracking-[0.3em] text-oro/50 mb-1">Técnica</p>
                                    <p className="font-manrope text-sm text-crema/70">{caso.tecnica}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Galería con lightbox y watermark */}
                    <CasoGaleria fotos={caso.fotos} />

                    {/* Copy del caso */}
                    <div className="max-w-2xl mb-16">
                        {caso.copy.split("\n\n").map((parrafo, i) => (
                            <p
                                key={i}
                                className="font-manrope text-crema/70 text-base leading-relaxed mb-5"
                            >
                                {parrafo}
                            </p>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="border-t border-crema/5 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <p className="font-manrope text-crema/30 text-xs uppercase tracking-widest mb-1">
                                Dr. Ariel Merino · AM Estética Dental
                            </p>
                            <p className="font-manrope text-crema/60 text-sm">
                                Puerto Madero, Buenos Aires
                            </p>
                        </div>
                        <a
                            href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Vi%20el%20caso%20de%20antes%20y%20despu%C3%A9s%20y%20me%20gustar%C3%ADa%20una%20consulta."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro/90 transition-all whitespace-nowrap"
                        >
                            Agendá tu consulta
                            <span>→</span>
                        </a>
                    </div>

                    {/* Volver */}
                    <div className="mt-12">
                        <Link
                            href="/antes-y-despues"
                            className="font-manrope text-xs text-crema/30 hover:text-oro transition-colors uppercase tracking-widest"
                        >
                            ← Ver todos los casos
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
