import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";
import { ANIOS_TRAYECTORIA, ANIO_TITULO } from "@/lib/trayectoria";

const CANONICAL = "https://www.amesteticadental.com/en/press";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'm%20a%20journalist%20and%20I'd%20like%20to%20request%20an%20interview.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Press & Media Kit | Dr. Ariel Merino | AM Estética Dental",
    description:
        "Official press resources for journalists and media: approved biography, credentials and media appearances of Dr. Ariel Merino, AM Estética Dental, Buenos Aires.",
    alternates: { canonical: CANONICAL, languages: hreflangFor("/prensa") },
    openGraph: {
        title: "Press & Media Kit | Dr. Ariel Merino",
        description: "Official resources for journalists covering cosmetic dentistry in Argentina.",
        url: CANONICAL,
        locale: "en_US",
        type: "website",
    },
};

const FACTS = [
    { k: "Full name", v: "Dr. Ariel Merino" },
    { k: "Title", v: "Cosmetic Dentist · Licence No. 34.869" },
    { k: "Role", v: "Founder and Clinical Director, AM Estética Dental" },
    { k: "Location", v: "Camila O'Gorman 412, Office 101, Puerto Madero, Buenos Aires, Argentina" },
    { k: "Experience", v: `${ANIOS_TRAYECTORIA} years in dentistry, almost exclusively cosmetic · DDS, UCALP ${ANIO_TITULO}` },
    { k: "Education", v: "UCALP · Postgraduate in Oral Rehabilitation and Aesthetics (AOA) · University of Pennsylvania School of Dental Medicine" },
    { k: "Recognition", v: "The only dental clinic in Argentina featured by Forbes Argentina" },
    { k: "Languages", v: "Spanish, English" },
    { k: "Wikidata", v: "Q134287655 (Dr. Merino) · Q138862170 (AM Estética Dental)" },
];

export default function PressEnPage() {
    return (
        <>
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <section className="px-6 md:px-12 pt-40 pb-16">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Press &amp; Media Kit</span>
                        <h1 className="text-4xl md:text-6xl font-light text-crema leading-tight mb-6">
                            Resources for{" "}
                            <span className="font-cormorant italic text-oro">journalists and media.</span>
                        </h1>
                        <p className="text-crema/65 text-lg font-light leading-relaxed max-w-2xl mb-8">
                            Official resources designed for journalists, content creators and public relations: approved biography, credentials and verifiable facts to ensure accurate coverage.
                        </p>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                            Direct contact for interviews →
                        </a>
                    </div>
                </section>

                <section className="px-6 md:px-12 pb-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-light text-crema mb-8">
                            Quick <span className="font-cormorant italic text-oro">facts</span>
                        </h2>
                        <div className="border border-oro/12 rounded-2xl overflow-hidden">
                            {FACTS.map((f, i) => (
                                <div key={f.k} className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 px-6 py-5 ${i % 2 === 0 ? "bg-carbon-soft" : "bg-carbon"}`}>
                                    <span className="text-oro/70 font-manrope text-[10px] uppercase tracking-[0.28em] pt-1">{f.k}</span>
                                    <span className="text-crema/75 font-manrope text-sm leading-relaxed">{f.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-6 md:px-12 pb-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-light text-crema mb-4">
                            Approved <span className="font-cormorant italic text-oro">biography</span>
                        </h2>
                        <p className="text-crema/40 font-manrope text-xs mb-6">Short version — free to reproduce.</p>
                        <div className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft">
                            <p className="text-crema/75 font-manrope text-base leading-relaxed">
                                Dr. Ariel Merino is an Argentine cosmetic dentist who qualified at the Universidad Católica de La Plata in {ANIO_TITULO} and has spent those {ANIOS_TRAYECTORIA} years almost exclusively on high-complexity cosmetic dentistry. He is the founder and clinical director of AM Estética Dental in Puerto Madero, Buenos Aires — the only dental clinic in Argentina featured by Forbes Argentina. He specialises in porcelain veneers, digital smile design and aesthetic rehabilitation, has taught on international veneer programmes at the University of Pennsylvania School of Dental Medicine, and was chosen to design the smile of a Miss Universe. He speaks at industry congresses on artificial intelligence and digital planning applied to cosmetic dentistry.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="px-6 md:px-12 pb-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-light text-crema mb-6">
                            Image <span className="font-cormorant italic text-oro">usage</span>
                        </h2>
                        <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-4">
                            High-resolution photography and graphic assets are available on request. When using our photographs, please credit: &ldquo;Courtesy of AM Estética Dental / Dr. Ariel Merino&rdquo;.
                        </p>
                        <p className="text-crema/50 font-manrope text-sm leading-relaxed">
                            Clinical before-and-after images are published with express patient consent and must not be cropped or altered in ways that misrepresent the clinical result. For originals, get in touch{" "}
                            <Link href="/en/contact" className="text-oro hover:underline">here</Link>.
                        </p>
                    </div>
                </section>

                <Contacto lang="en" />
            </main>
        </>
    );
}
