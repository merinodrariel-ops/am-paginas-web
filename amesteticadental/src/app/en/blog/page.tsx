import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";
import { ANIO } from "@/lib/anio";

const CANONICAL = "https://www.amesteticadental.com/en/blog";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Cosmetic Dentistry Blog | AM Estética Dental — Puerto Madero",
    description:
        "Articles on porcelain veneers, smile design and cosmetic dentistry in Buenos Aires, written by Dr. Ariel Merino from Puerto Madero.",
    alternates: { canonical: CANONICAL, languages: hreflangFor("/blog") },
    openGraph: {
        title: "Cosmetic Dentistry Blog | AM Estética Dental",
        description: "Everything about veneers, smile design and cosmetic dentistry. Articles by Dr. Ariel Merino.",
        url: CANONICAL,
        locale: "en_US",
        type: "website",
    },
};

const POSTS = [
    {
        slug: "can-chatgpt-design-your-smile",
        imagen: "/videos/generate-3d-veneer-poster.jpg",
        alt: "3D render of a ceramic veneer used in digital planning at AM Estética Dental",
        titulo: "Can ChatGPT design your smile?",
        resumen: "Five in ten new patients now arrive with an AI-generated image of their own smile. What that image can see about your mouth, what it cannot, and how we check.",
        categoria: "Technology",
    },
    {
        slug: "veneers-cost-argentina",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-01-am-estetica-dental",
        alt: "Ceramic veneer result — AM Estética Dental, Puerto Madero",
        titulo: `How much do veneers cost in Argentina? ${ANIO} guide`,
        resumen: "Real USD figures, what actually changes the investment, and the honest reason international patients fly here — it is time, not price.",
        categoria: "Investment",
    },
    {
        slug: "do-veneers-damage-your-teeth",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-erosion-dentaria-carillas-ceramicas-am-estetica-dental",
        alt: "Dental erosion rebuilt with ceramic veneers — AM Estética Dental",
        titulo: "Do veneers damage your teeth?",
        resumen: "The honest answer about enamel preparation, why blanket 'no-prep' promises are a half-truth, and the question to ask your dentist.",
        categoria: "Guide",
    },
    {
        slug: "how-long-do-porcelain-veneers-last",
        imagen: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-italiano-carillas-ceramicas-02-am-estetica-dental",
        alt: "Final result of ceramic veneers on an international patient — AM Estética Dental",
        titulo: "How long do porcelain veneers last?",
        resumen: "Ten to twenty years with the right care. What wears them down, what does not, and when it is time to replace them.",
        categoria: "Veneers",
    },
];

export default function BlogEnPage() {
    return (
        <>
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <section className="px-6 md:px-12 pt-40 pb-16">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Blog</span>
                        <h1 className="text-4xl md:text-6xl font-light text-crema leading-tight mb-6">
                            Cosmetic dentistry,{" "}
                            <span className="font-cormorant italic text-oro">explained honestly.</span>
                        </h1>
                        <p className="text-crema/65 text-lg font-light leading-relaxed max-w-2xl">
                            Articles written from clinical practice in Puerto Madero — including the parts that are less comfortable to say out loud.
                        </p>
                    </div>
                </section>

                <section className="px-6 md:px-12 pb-24">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                        {POSTS.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/en/blog/${post.slug}`}
                                className="overflow-hidden border border-oro/15 rounded-2xl bg-carbon-soft hover:border-oro/35 transition-colors group flex flex-col"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={post.imagen}
                                        alt={post.alt}
                                        fill
                                        sizes="(max-width: 768px) 92vw, 420px"
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-soft via-carbon/10 to-transparent" />
                                </div>
                                <div className="p-7 flex flex-col flex-1">
                                <span className="text-oro/60 font-manrope text-[9px] uppercase tracking-[0.3em] mb-4">{post.categoria}</span>
                                <h2 className="text-crema font-manrope font-medium text-lg leading-snug mb-3 group-hover:text-oro transition-colors">
                                    {post.titulo}
                                </h2>
                                <p className="text-crema/55 font-manrope text-sm leading-relaxed flex-1">{post.resumen}</p>
                                <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-5 block">Read the article →</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto mt-12 border border-oro/10 rounded-2xl p-7 bg-carbon">
                        <p className="text-crema/55 font-manrope text-sm leading-relaxed">
                            We publish more articles in Spanish than in English. If a topic interests you and you cannot find it here,{" "}
                            <Link href="/en/contact" className="text-oro hover:underline">write to us</Link>{" "}
                            and we will answer your specific question directly — in English.
                        </p>
                    </div>
                </section>

                <Contacto lang="en" />
            </main>
        </>
    );
}
