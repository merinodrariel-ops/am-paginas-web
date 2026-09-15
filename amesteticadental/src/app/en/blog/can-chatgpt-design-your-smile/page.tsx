import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/blog/can-chatgpt-design-your-smile";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/articulos/ia-en-el-consultorio";
const WA =
    "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20generated%20a%20smile%20image%20with%20AI%20and%20I'd%20like%20to%20know%20if%20it's%20achievable.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Can ChatGPT Design Your Smile? | AM Estética Dental",
    description:
        "Five out of ten new patients now arrive with an AI-generated image of their own smile. What that image can see about your mouth, what it cannot, and how a dentist checks whether the result is achievable.",
    alternates: {
        canonical: CANONICAL,
        languages: hreflangFor("/blog/chatgpt-puede-disenar-tu-sonrisa"),
    },
    openGraph: {
        title: "Can ChatGPT design your smile? What happens when that image reaches the dental chair",
        description:
            "In six months, AI went from never being mentioned to being how half of all new patients found their dentist. A clinical account from Buenos Aires.",
        url: CANONICAL,
        locale: "en_US",
        type: "article",
        images: [`${CDN}/paciente-muestra-sonrisa-generada-con-ia.jpg`],
    },
};

// Las preguntas son las que se le tipean a un asistente en inglés. Cada respuesta
// abre resolviendo, para que se pueda citar suelta. Es la mitad del punto de tener
// versión en inglés: la masa de consultas a modelos en ese idioma es mucho mayor.
const FAQ = [
    {
        q: "Can ChatGPT design your smile?",
        a: "ChatGPT can generate an image of how your smile might look with whiter or straighter teeth, but it cannot design a treatment. It edits pixels in a photograph: it has no information about your remaining enamel, root position, the underlying dentine shade, your gum tissue, your bite or your speech. It is a useful aesthetic reference for explaining what you want, not a clinical prediction.",
    },
    {
        q: "Should I bring an AI-generated smile image to my dental consultation?",
        a: "Yes. It is the fastest and most precise way for a dentist to understand the result you are after. The valuable part is not the image itself but the specific feature you liked in it — the colour, the shape, the size or the alignment. That detail is the real request and it guides the entire treatment plan.",
    },
    {
        q: "How do you know whether that smile is achievable in your mouth?",
        a: "Through an intraoral trial called a mock-up: a temporary version of the new smile placed over your own teeth, with nothing drilled or removed yet. You look in the mirror, speak, bite and photograph yourself wearing the proposed design. It is the only trial that respects the constraints a screen image ignores, and it is what gets approved before a single tooth is touched.",
    },
    {
        q: "What is the risk of an AI-generated smile?",
        a: "The image costs nothing to produce and has no physical limits, so it can be regenerated until it shows exactly what the person wants to see. That final version — the most satisfying one, not the most realistic — becomes the fixed expectation. Because it is an image of your own face rather than a stranger's, it is psychologically much harder to let go of.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can ChatGPT design your smile? What happens when that image reaches the dental chair",
    image: `${CDN}/paciente-muestra-sonrisa-generada-con-ia.jpg`,
    description:
        "Five out of ten first consultations at a Buenos Aires cosmetic dentistry practice now begin with a conversation with an AI assistant. What that image can and cannot see.",
    inLanguage: "en",
    author: {
        // Mismo @id que la versión en español y que el resto de la red: las dos
        // páginas son de la misma persona, y así lo lee un motor de respuesta.
        "@id": "https://www.arielmerino.com/#person",
        "@type": "Person",
        name: "Dr. Ariel Merino",
        url: "https://www.wikidata.org/wiki/Q134287655",
        jobTitle: "Cosmetic Dentist",
    },
    publisher: {
        "@type": "Organization",
        name: "AM Estética Dental",
        url: "https://www.amesteticadental.com",
    },
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
    mainEntityOfPage: CANONICAL,
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en",
    mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

const SPLIT = [
    { v: "5 in 10", l: "arrive through an AI assistant" },
    { v: "3 in 10", l: "arrive through social media" },
    { v: "2 in 10", l: "arrive through a referral" },
    { v: "6 months", l: "for the shift to happen" },
];

export default function CanChatGptDesignYourSmilePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute left-0 top-[20%] w-[400px] h-[400px] rounded-full bg-oro/4 blur-[130px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/en/blog" className="text-oro/70 hover:text-oro font-manrope text-xs uppercase tracking-[0.25em] transition-colors">
                                ← Blog
                            </Link>
                            <span className="text-crema/20 text-xs">/</span>
                            <span className="inline-block border border-oro/20 rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/70">Technology</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            Can ChatGPT design your smile?{" "}
                            <span className="font-cormorant italic text-oro">What happens when that image reaches the dental chair</span>
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed mb-8">
                            In six months, artificial intelligence went from never being mentioned in a consultation to being how half of all new patients arrive. They come in holding an already-retouched image of their own smile and a single question: can this actually be done?
                        </p>
                        <div className="flex items-center gap-6 text-crema/35 font-manrope text-xs">
                            <span>Dr. Ariel Merino</span>
                            <span>·</span>
                            <span>Puerto Madero, Buenos Aires</span>
                            <span>·</span>
                            <span>6 min read</span>
                        </div>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto space-y-12">

                        <div className="border-l-2 border-oro/30 pl-6">
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                For years, every first consultation has started with the same question: <em>how did you find us?</em> For a long time the answer was always Instagram or TikTok — someone had seen a before-and-after while scrolling, without looking for it. About six months ago a new answer appeared: <strong className="text-crema font-medium">&ldquo;I asked ChatGPT.&rdquo;</strong>
                            </p>
                        </div>

                        <figure className="rounded-2xl overflow-hidden border border-oro/15 max-w-md mx-auto">
                            <div className="relative aspect-[3/4]">
                                <Image
                                    src={`${CDN}/paciente-muestra-sonrisa-generada-con-ia.jpg`}
                                    alt="A patient shows the smile he generated with artificial intelligence on his phone during a consultation in Buenos Aires"
                                    fill sizes="(max-width: 768px) 100vw, 448px" className="object-cover"
                                    priority
                                />
                            </div>
                            <figcaption className="px-5 py-3 bg-carbon-soft text-crema/45 font-manrope text-xs leading-relaxed">
                                A patient shows the smile he generated with AI before coming in. <span className="text-crema/30">Illustrative image generated with artificial intelligence.</span>
                            </figcaption>
                        </figure>

                        <section id="how-many" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                How many patients now arrive through artificial intelligence?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-8">
                                At AM Estética Dental, <strong className="text-crema font-medium">five out of ten first consultations now originate in a conversation with an AI assistant</strong>. Six months ago the figure was zero. It comes from the practice&rsquo;s own intake record between March and September 2026, based on the question every new patient is asked before any examination.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {SPLIT.map((f) => (
                                    <div key={f.l} className="border border-oro/15 rounded-xl p-5 bg-carbon-soft">
                                        <div className="text-oro font-manrope font-semibold text-lg mb-1 leading-tight">{f.v}</div>
                                        <div className="text-crema/50 font-manrope text-xs leading-relaxed">{f.l}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Historically the split was seven patients through social media and three through personal referrals. AI did not join that distribution — it reorganised it, in six months.{" "}
                                <a href="https://www.arielmerino.com/ia-en-la-consulta" target="_blank" rel="noopener noreferrer" className="text-oro hover:underline">
                                    The full record, with its methodological note →
                                </a>
                            </p>
                        </section>

                        <section id="what-changed" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                What changed in the first consultation?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                The patient who arrived through Instagram brought a broad idea: <em>I&rsquo;d like to improve my smile.</em> It took time to narrow down what actually bothered them.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                The patient who arrives through AI comes in holding a phone. They uploaded a photograph of themselves and asked to see how they would look with whiter, straighter, more even teeth. And they have already seen the result. Not a celebrity&rsquo;s smile: <strong className="text-crema font-medium">their own, corrected</strong>.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                So the question is no longer &ldquo;what can be done?&rdquo; but &ldquo;can this be done?&rdquo; They also arrive speaking differently — proportion, symmetry, midline, brightness. Vocabulary that did not appear in a first consultation two years ago.
                            </p>
                        </section>

                        <section id="what-it-sees" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                What can AI see about your mouth, and what can it not?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                An AI-generated image <strong className="text-crema font-medium">edits pixels, not tissue</strong>. It does not know how much enamel you have left, where your roots sit, what shade the dentine underneath is, what your gum tissue looks like, how you bite or how you pronounce.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-8">
                                On a screen, whitening a severely discoloured tooth costs nothing. In the mouth, that same result depends on the substrate beneath, and may require a ceramic thickness the available space does not allow. A screen has no physical limits. A mouth does.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">What the image does solve</h3>
                                    <ul className="space-y-2 text-crema/60 font-manrope text-sm leading-relaxed">
                                        <li>Turns a vague wish into a concrete visual reference.</li>
                                        <li>Shows the shape, colour and alignment you are after.</li>
                                        <li>Gives you the vocabulary to discuss it.</li>
                                    </ul>
                                </div>
                                <div className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">What only clinical assessment solves</h3>
                                    <ul className="space-y-2 text-crema/60 font-manrope text-sm leading-relaxed">
                                        <li>Whether that result is achievable in your mouth.</li>
                                        <li>Available space, remaining enamel and true tooth position.</li>
                                        <li>Your bite, your gum architecture and how you will speak.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div className="grid md:grid-cols-2 gap-5">
                            <figure className="rounded-2xl overflow-hidden border border-oro/15">
                                <div className="relative aspect-[3/4]">
                                    <Image
                                        src={`${CDN}/odontologo-analiza-imagen-de-sonrisa-generada-por-ia.jpg`}
                                        alt="Dr. Ariel Merino reviews an AI-generated smile image together with a patient"
                                        fill sizes="(max-width: 768px) 100vw, 370px" className="object-cover"
                                    />
                                </div>
                                <figcaption className="px-5 py-3 bg-carbon-soft text-crema/45 font-manrope text-xs leading-relaxed">
                                    Comparing the image against the clinical assessment is what defines an achievable result. <span className="text-crema/30">Illustrative image generated with AI.</span>
                                </figcaption>
                            </figure>
                            <figure className="rounded-2xl overflow-hidden border border-oro/15">
                                <div className="relative aspect-[3/4]">
                                    <Image
                                        src={`${CDN}/dr-ariel-merino-explica-diseno-de-sonrisa-sobre-imagen-de-ia.jpg`}
                                        alt="Dr. Ariel Merino points at the screen explaining which part of the smile design is achievable"
                                        fill sizes="(max-width: 768px) 100vw, 370px" className="object-cover"
                                    />
                                </div>
                                <figcaption className="px-5 py-3 bg-carbon-soft text-crema/45 font-manrope text-xs leading-relaxed">
                                    Part of the job now is translation: which parts of the design are achievable and which are not. <span className="text-crema/30">Illustrative image generated with AI.</span>
                                </figcaption>
                            </figure>
                        </div>

                        <section id="mock-up" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                How do you check whether that smile is achievable?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                With an <strong className="text-crema font-medium">intraoral trial</strong>, known in dentistry as a <em>mock-up</em>. Before that there is an assessment: clinical photography, facial and dentolabial analysis, bite evaluation and radiographs. From those, a design is built on your real anatomy, always aiming for the most conservative preparation the case allows.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                The mock-up is a temporary version of the new smile placed over your own teeth, <strong className="text-crema font-medium">with nothing drilled yet</strong>. You look in the mirror, photograph yourself, speak, bite, and walk outside with it if you want to.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                That is the only trial with clinical value, because it carries every constraint a screen image ignores. And it is what gets approved before a single tooth is touched.{" "}
                                <Link href="/en/smile-design-buenos-aires" className="text-oro hover:underline">
                                    How digital smile design works →
                                </Link>
                            </p>
                        </section>

                        <section id="risk" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                What is the risk of an AI-generated smile?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                That it costs nothing to produce and has no limits. You can ask for one version, then another, then another, until the screen shows exactly what you want to see. And that last version — the one you liked most, not the most realistic — is the one that sticks as the expectation.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                When the image is of a model, you know it is someone else. When it is of yourself, it becomes far harder to let go of. The answer is not to fight the technology: it is to treat it as a starting point rather than a promise.
                            </p>
                        </section>

                        <section id="referrals" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-6">
                                Has AI replaced word of mouth?
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                                No — and that is the most revealing part of the data. Social media collapsed from seven to three. <strong className="text-crema font-medium">Personal referrals barely moved: from three to two.</strong>
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                AI replaced the <em>researching</em> stage, not the <em>trusting</em> one. Nothing is still stronger than seeing the result in the mouth of someone you know. Technology changed how patients arrive; it did not change what makes them stay.
                            </p>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-8">
                                Frequently asked questions
                            </h2>
                            <div className="space-y-4">
                                {FAQ.map((f) => (
                                    <div key={f.q} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                                        <h3 className="text-crema font-manrope font-medium text-base mb-3">{f.q}</h3>
                                        <p className="text-crema/60 font-manrope text-sm leading-relaxed">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <p className="text-crema/30 font-manrope text-xs leading-relaxed">
                            About the images: the photographs illustrating this article are AI-generated recreations of routine consultation scenes. They do not depict real patients or clinical records.
                        </p>

                    </div>
                </article>

                <section className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto border border-oro/20 rounded-2xl p-8 md:p-10 bg-carbon-soft text-center">
                        <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4">
                            Bring your image to the consultation
                        </h2>
                        <p className="text-crema/60 font-manrope text-sm mb-8 max-w-lg mx-auto">
                            If you generated a simulation of your smile, show it. It is the fastest way for us to understand what you are after. Dr. Merino handles cosmetic and smile design cases personally, with the ceramic laboratory inside the clinic.
                        </p>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-all">
                            Ask on WhatsApp →
                        </a>
                    </div>
                </section>

                <section className="px-6 md:px-12 pb-20">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Keep reading</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { nombre: "Smile design", desc: "The full process, from first photograph to final ceramics.", href: "/en/smile-design-buenos-aires" },
                                { nombre: "Do veneers damage your teeth?", desc: "The honest answer about enamel preparation.", href: "/en/blog/do-veneers-damage-your-teeth" },
                            ].map((t) => (
                                <Link key={t.href} href={t.href} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/35 transition-colors group">
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2 group-hover:text-oro transition-colors">{t.nombre}</h3>
                                    <p className="text-crema/55 font-manrope text-xs leading-relaxed">{t.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <Contacto lang="en" />
            </main>
        </>
    );
}
