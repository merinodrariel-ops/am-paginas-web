import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Link from "next/link";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/reviews";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "AM Estética Dental Reviews · 4.9★ on Google · 120+ Reviews",
    description:
        "Read real patient reviews of AM Estética Dental in Buenos Aires. 4.9 out of 5 with more than 120 verified Google reviews. Dr. Ariel Merino, Puerto Madero.",
    alternates: { canonical: CANONICAL, languages: hreflangFor("/opiniones") },
    openGraph: {
        title: "AM Estética Dental Reviews · 4.9★ on Google",
        description:
            "More than 120 real patients share their experience at AM Estética Dental, the veneers and smile design clinic of Dr. Ariel Merino in Puerto Madero.",
        url: CANONICAL,
        locale: "en_US",
        type: "website",
    },
};

// Reseñas reales de Google. El texto original está en español; acá se muestra
// traducido y así se declara en la página.
const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "AM Estética Dental",
    url: "https://www.amesteticadental.com",
    image: "https://www.amesteticadental.com/og-image.jpg",
    priceRange: "$$$$",
    telephone: "+5491170219298",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Camila O'Gorman 412, Office 101",
        addressLocality: "Puerto Madero",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120",
        bestRating: "5",
        worstRating: "1",
    },
};

const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20book%20an%20assessment.";

export default function ReviewsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <section className="px-6 md:px-12 pt-36 pb-16 max-w-4xl mx-auto text-center">
                    <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Reviews</span>
                    <h1 className="text-4xl md:text-6xl font-light text-crema leading-tight mb-6">
                        What patients say about{" "}
                        <span className="font-cormorant italic text-oro">AM Estética Dental</span>
                    </h1>
                    <p className="text-crema/65 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                        Real patients on their experience with Dr. Ariel Merino in Puerto Madero, Buenos Aires.
                    </p>
                    <a
                        href="https://g.page/r/CQ3df5Xn-J6oEBM/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 border border-oro/25 text-oro px-6 py-3 rounded-full font-manrope text-sm hover:border-oro/50 transition-colors"
                    >
                        ★ 4.9 out of 5 on Google · 120+ reviews →
                    </a>
                    <p className="text-crema/30 font-manrope text-xs mt-6 max-w-xl mx-auto">
                        Reviews were originally written in Spanish and are shown here translated. The originals can be read on our Google profile.
                    </p>
                </section>

                <Testimonios lang="en" />

                <section className="px-6 md:px-12 py-24 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-light text-crema leading-tight mb-4">
                            Want to be the{" "}
                            <span className="font-cormorant italic text-oro">next success story?</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-8">
                            Book your assessment with Dr. Ariel Merino.
                        </p>
                        <a
                            href={WA}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-all"
                        >
                            Ask on WhatsApp →
                        </a>
                        <div className="mt-8">
                            <Link href="/en/before-after" className="text-oro/70 hover:text-oro font-manrope text-sm transition-colors">
                                See the documented clinical cases →
                            </Link>
                        </div>
                    </div>
                </section>

                <Contacto lang="en" />
            </main>
        </>
    );
}
