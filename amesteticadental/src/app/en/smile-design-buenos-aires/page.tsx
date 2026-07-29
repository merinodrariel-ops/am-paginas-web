import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import { hreflangFor } from "@/lib/i18n-routes";

const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/portafolio/diseno-de-sonrisa";
const CANONICAL = "https://www.amesteticadental.com/en/smile-design-buenos-aires";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Digital Smile Design in Buenos Aires | AM Estética Dental",
    description: "Digital smile design in Puerto Madero. See the result before we start. 3D simulation, veneers and implants by Dr. Ariel Merino.",
    alternates: {
        canonical: CANONICAL,
        languages: hreflangFor("/diseno-de-sonrisa"),
    },
    openGraph: {
        title: "Digital Smile Design in Buenos Aires | AM Estética Dental",
        description: "Digital smile design: you see the result before we start. Full personalization, aesthetic judgment and clinical precision in Puerto Madero.",
        url: CANONICAL,
        locale: "en_US",
        type: "website",
    },
};

const faqItems = [
    {
        pregunta: "What is digital smile design?",
        respuesta: "Digital Smile Design (DSD) is an aesthetic planning process in which your new smile is designed digitally before any procedure is performed. Working from photos and facial analysis, we propose shapes, sizes and colors suited to your face. The result is shown on screen and adjusted until you're happy.",
    },
    {
        pregunta: "When is a smile design worthwhile?",
        respuesta: "Smile design is the starting point for any aesthetic transformation involving multiple teeth. It's especially useful when combining veneers with whitening, implants or gum corrections, because it lets us coordinate every treatment toward a harmonious, planned result.",
    },
    {
        pregunta: "Can I see how it will look before we start?",
        respuesta: "Yes, always. At AM Estética Dental the digital design is part of the standard process. We design your smile on screen, make every adjustment you need, and only move forward once you approve the result. We don't start any procedure until you're convinced.",
    },
    {
        pregunta: "Does smile design necessarily mean veneers?",
        respuesta: "No. The design defines the aesthetic goal; the treatments to achieve it depend on the case. In some cases the result is reached with whitening alone. In others we combine veneers, gum contouring and orthodontics. The digital simulation helps plan the most efficient solution for each situation.",
    },
    {
        pregunta: "How long does the process take?",
        respuesta: "The full design-and-execution process takes 2 to 4 weeks depending on the treatment plan. The first session is analysis and design. The following ones are technical execution. Total time varies with the treatments involved.",
    },
    {
        pregunta: "Who is it indicated for?",
        respuesta: "Smile design is indicated for anyone who wants a planned, coordinated transformation — from minor changes in shape or color to full rehabilitations. There is no age restriction.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f) => ({
        "@type": "Question",
        "name": f.pregunta,
        "acceptedAnswer": { "@type": "Answer", "text": f.respuesta },
    })),
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Smile Design",
    "serviceType": "Cosmetic Dentistry",
    "description": "Digital planning and simulation of the smile before starting any aesthetic treatment. Full personalization with clinical and aesthetic judgment.",
    "provider": {
        "@type": "Dentist",
        "name": "AM Estética Dental",
        "url": "https://www.amesteticadental.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Camila O'Gorman 412, Office 101",
            "addressLocality": "Puerto Madero",
            "addressRegion": "Buenos Aires",
            "addressCountry": "AR",
        },
    },
    "areaServed": { "@type": "City", "name": "Buenos Aires", "addressCountry": "AR" },
    "priceRange": "$$$$",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'm%20interested%20in%20digital%20smile%20design.";

export default function SmileDesignPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <Navbar />

            <main className="bg-carbon text-crema font-manrope">

                {/* ── HERO ── */}
                <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
                    <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                                AM Estética Dental · Puerto Madero
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
                                Smile Design<br />
                                <span className="font-cormorant italic text-oro">in Buenos Aires</span>
                            </h1>
                            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                                Before we touch a single tooth, we design your smile in 3D and show it to you on screen. You adjust whatever you want, approve the result, and only then do we begin. No surprises.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                                >
                                    Ask about smile design →
                                </a>
                                <Link
                                    href="/en/dental-tourism-argentina"
                                    className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
                                >
                                    Traveling from abroad? →
                                </Link>
                            </div>
                            <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
                                {[
                                    { v: "4.9★", l: "Google Reviews" },
                                    { v: "Forbes", l: "Argentina" },
                                    { v: "3D Digital", l: "Before we start" },
                                ].map((s) => (
                                    <div key={s.l}>
                                        <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                                        <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-oro/15">
                            <Image
                                src={`${CDN}/diseno-de-sonrisa-analisis-facial-estetica-dental-am`}
                                alt="Facial analysis for digital smile design — AM Estética Dental Puerto Madero Buenos Aires"
                                fill priority sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-flex items-center gap-1.5 border border-oro/30 bg-carbon/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-oro">
                                    Facial analysis · Digital design
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── WHAT'S INCLUDED ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">What's included</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            It's not just aesthetics.{" "}
                            <span className="font-cormorant italic text-oro">It's total planning.</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { t: "Facial and dental analysis", d: "We assess facial proportions, smile line, enamel color and tissue condition to define the framework of the design." },
                                { t: "3D preview simulation", d: "We design the expected result digitally. You see it on screen, request changes and approve before any procedure starts." },
                                { t: "Treatment coordination", d: "The design integrates every needed treatment: veneers, whitening, gum contouring, aligners. All planned toward a unified result." },
                                { t: "Physical mock-up when applicable", d: "In many cases we can show a provisional physical trial before the definitive units, to confirm the result in your own mouth." },
                            ].map((item) => (
                                <div key={item.t} className="border border-oro/15 rounded-2xl p-7 bg-carbon hover:border-oro/30 transition-colors">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">{item.t}</h3>
                                    <p className="text-crema/65 font-manrope text-sm leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PROCESS ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">How it works</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            From the consultation{" "}
                            <span className="font-cormorant italic text-oro">to the final result</span>
                        </h2>
                        <div className="space-y-0">
                            {[
                                { n: "01", t: "Consultation and analysis", d: "We listen, analyze your case and walk you through the options. No commitment." },
                                { n: "02", t: "Photography and facial mapping", d: "We take reference photos to work on the real proportions of your face." },
                                { n: "03", t: "Digital design of your smile", d: "We build the design in specialized software and show it to you on screen. We adjust until you're happy." },
                                { n: "04", t: "Approval and treatment plan", d: "You approve the design and together we define the plan: which treatments, in what order and on what timeline." },
                                { n: "05", t: "Clinical execution", d: "We execute the plan with attention to detail. Veneers, whitening, gum contouring or other treatments as planned." },
                                { n: "06", t: "Verified result", d: "We compare the result against the original digital design. Every final adjustment is made in the same session." },
                            ].map((step, i, arr) => (
                                <div key={step.n} className={`flex gap-8 py-8 ${i < arr.length - 1 ? "border-b border-oro/10" : ""}`}>
                                    <span className="text-oro/35 font-manrope font-light text-3xl flex-none w-12 pt-1">{step.n}</span>
                                    <div>
                                        <div className="text-crema font-manrope font-medium text-base mb-2">{step.t}</div>
                                        <div className="text-crema-muted font-manrope text-sm leading-relaxed">{step.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CLINICAL ANALYSIS GALLERY ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Clinical analysis</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            This is what the process{" "}
                            <span className="font-cormorant italic text-oro">looks like from the inside</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { src: "diseno-de-sonrisa-proporcion-aurea-dientes-frontales-am", alt: "Golden ratio applied to front teeth — smile design AM Estética Dental" },
                                { src: "diseno-de-sonrisa-sonrisa-natural-analisis-dental-am", alt: "Natural smile analysis with dental grid — AM Estética Dental Buenos Aires" },
                                { src: "diseno-de-sonrisa-fibonacci-close-up-incisivos-am-estetica", alt: "Fibonacci spiral in incisor analysis — digital smile design" },
                                { src: "diseno-de-sonrisa-vista-frontal-incisivos-estetica-dental-am", alt: "Front view of incisors with digital analysis — AM Estética Dental Puerto Madero" },
                                { src: "diseno-de-sonrisa-curva-incisal-analisis-dental-am", alt: "Incisal curve and dental proportion analysis — AM Estética Dental" },
                                { src: "diseno-de-sonrisa-carillas-ceramica-render-3d-am-estetica", alt: "3D render of ceramic veneers with gingival analysis — AM Estética Dental" },
                            ].map((img, i) => (
                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-oro/10 group">
                                    <Image
                                        src={`${CDN}/${img.src}`}
                                        alt={img.alt}
                                        fill
                                        sizes="(max-width: 640px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-crema/25 font-manrope text-xs text-center mt-4">
                            Digital dental proportion analysis · AM Estética Dental · Puerto Madero, Buenos Aires
                        </p>
                    </div>
                </section>

                {/* ── MID CTA ── */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <p className="text-crema font-manrope font-medium text-lg">Want to see how your smile could look?</p>
                            <p className="text-crema/55 font-manrope text-sm mt-1"></p>
                        </div>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-none inline-flex items-center gap-3 bg-oro text-carbon px-7 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                        >
                            Book a consultation →
                        </a>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Frequently asked questions</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
                            Everything about{" "}
                            <span className="font-cormorant italic text-oro">digital smile design</span>
                        </h2>
                        <SeoFaq items={faqItems} />
                    </div>
                </section>

                {/* ── RELATED TREATMENTS ── */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-t border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">Related treatments</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { label: "Porcelain Veneers", href: "/en/porcelain-veneers-buenos-aires", desc: "Porcelain, composite and ultra-thin veneers." },
                                { label: "Dental Tourism in Argentina", href: "/en/dental-tourism-argentina", desc: "Get it done in a single trip to Buenos Aires." },
                            ].map((t) => (
                                <a
                                    key={t.href}
                                    href={t.href}
                                    className="border border-oro/15 rounded-xl px-6 py-5 bg-carbon hover:border-oro/35 transition-colors flex items-center justify-between"
                                >
                                    <div>
                                        <div className="text-crema font-manrope font-medium text-sm">{t.label}</div>
                                        <div className="text-crema/50 font-manrope text-xs mt-0.5">{t.desc}</div>
                                    </div>
                                    <span className="text-oro/50">→</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FINAL CTA ── */}
                <section className="py-28 px-6 md:px-12 text-center relative overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-oro/5 blur-[120px] pointer-events-none" />
                    <div className="relative max-w-2xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">The first step</span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Start by seeing{" "}
                            <span className="font-cormorant italic text-oro">your new smile</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            In the first consultation we design the digital result. We show it to you, adjust it, and clearly define whether the treatment is right for your case.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-colors"
                        >
                            Ask on WhatsApp →
                        </a>
                        <p className="text-crema/30 font-manrope text-xs mt-6">
                            Camila O&apos;Gorman 412, Office 101, Puerto Madero · Mon–Fri 10:00–18:00
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
