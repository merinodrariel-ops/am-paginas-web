import Link from "next/link";

const tratamientos = [
    {
        id: "01",
        nombre: "Diseño de Sonrisa Digital",
        tagline: "Tu resultado antes de empezar",
        descripcion: "Diseñamos tu nueva sonrisa en 3D antes de tocar un solo diente. Ves el resultado, lo aprobás, y después lo ejecutamos con precisión milimétrica. Sin sorpresas. Sin fe ciega.",
        impacto: "El tratamiento más transformador que existe. Una sola consulta puede cambiar cómo te ves al espejo para siempre.",
        href: "/diseno-de-sonrisa",
        destacado: true,
    },
    {
        id: "02",
        nombre: "Carillas Dentales",
        tagline: "Porcelana y resina de ultra definición",
        descripcion: "Carillas de porcelana mínimamente invasivas y lentes de contacto dental que corrigen color, forma y tamaño en pocas sesiones. Máxima durabilidad, mínimo desgaste. El tratamiento favorito de quienes quieren resultados inmediatos y permanentes.",
        impacto: "El 80% de nuestros pacientes eligen carillas. El 100% dice que cambió su vida.",
        href: "/carillas-dentales",
        destacado: false,
    },
    {
        id: "03",
        nombre: "Blanqueamiento Profesional",
        tagline: "Técnica controlada, resultados desde la primera sesión",
        descripcion: "No es el blanqueamiento de una farmacia. Es un protocolo clínico con tecnología de luz activa, calibrado para tu tipo de esmalte y el resultado específico que buscás.",
        impacto: "Resultados visibles en la primera sesión. Sin sensibilidad innecesaria.",
        href: null,
        destacado: false,
    },
    {
        id: "04",
        nombre: "AM Aligners",
        tagline: "Ortodoncia sin brackets, sin molestias",
        descripcion: "Alineadores invisibles con planificación digital 100%. Usás los alineadores transparentes a tu ritmo, y cada etapa está calculada para mover tus dientes con precisión de fracción de milímetro.",
        impacto: "Efectivos para todas las edades. Nadie va a saber que los llevás.",
        href: "/alineadores-invisibles",
        destacado: false,
    },
    {
        id: "05",
        nombre: "Implantes Dentales",
        tagline: "El diente que no sabés que es artificial",
        descripcion: "Reemplazamos dientes perdidos con implantes que se integran a tu hueso. El resultado es indistinguible de un diente natural — en función y en estética.",
        impacto: "Solución permanente. Máxima estabilidad. Sin comprometer los dientes vecinos.",
        href: null,
        destacado: false,
    },
    {
        id: "06",
        nombre: "Armonización Orofacial",
        tagline: "Más allá de los dientes",
        descripcion: "Trabajamos el contorno de los labios y el marco facial para que tu sonrisa y tu cara cuenten la misma historia. No invasivo. Resultados que sorprenden.",
        impacto: "Complementa cualquier tratamiento dental con una dimensión estética que transforma la percepción total del rostro.",
        href: null,
        destacado: false,
    },
    {
        id: "07",
        nombre: "Estética Gingival",
        tagline: "La sonrisa gingival tiene solución",
        descripcion: "Si tu encía tapa demasiado tu diente o está despareja, existe un procedimiento de contorno gingival que equilibra las proporciones en una sola sesión.",
        impacto: "Cambia la proporción completa de tu sonrisa. Pocas personas saben que esto existe.",
        href: null,
        destacado: false,
    },
    {
        id: "08",
        nombre: "Prótesis Estéticas",
        tagline: "Rehabilitación de alta gama",
        descripcion: "Coronas y prótesis diseñadas a medida con materiales de última generación. Restauramos la función y la belleza de forma simultánea, sin comprometer ninguna de las dos.",
        impacto: "Para casos complejos que merecen una solución a la altura.",
        href: null,
        destacado: false,
    },
];

const quickLinks = [
    { label: "Carillas: precio", tone: "Para quien busca: cuánto cuesta", href: "/precio-carillas-dentales-buenos-aires" },
    { label: "Carillas vs Alineadores", tone: "Para quien compara: qué me conviene", href: "/carillas-vs-alineadores" },
    { label: "Porcelana vs Resina", tone: "Para quien elige material", href: "/carillas-de-porcelana-vs-resina" },
    { label: "Bruxismo + Desgaste", tone: "Para quien sufre daño dental", href: "/bruxismo-desgaste-dental-carillas-ceramicas" },
    { label: "Implantes Buenos Aires", tone: "Para quien perdió dientes", href: "/implantes-dentales-buenos-aires" },
    { label: "Diseño de Sonrisa", tone: "Para quien quiere transformarse", href: "/diseno-de-sonrisa-precio-buenos-aires" },
];


const tratamientosEn = [
    {
        id: "01",
        nombre: "Digital Smile Design",
        tagline: "See your result before we start",
        descripcion: "We design your new smile in 3D before touching a single tooth. You see the result, you approve it, and only then do we execute it with millimetric precision. No surprises. No blind faith.",
        impacto: "The most transformative treatment there is. A single consultation can change how you see yourself in the mirror, for good.",
        href: "/en/smile-design-buenos-aires",
        destacado: true,
    },
    {
        id: "02",
        nombre: "Porcelain Veneers",
        tagline: "Ultra-definition porcelain and composite",
        descripcion: "Minimally invasive porcelain veneers and ultra-thin veneers that correct color, shape and size in just a few sessions. Maximum durability with the least possible tooth preparation. The favourite of patients who want immediate, permanent results.",
        impacto: "80% of our patients choose veneers. 100% say it changed their life.",
        href: "/en/porcelain-veneers-buenos-aires",
        destacado: false,
    },
    {
        id: "03",
        nombre: "Professional Whitening",
        tagline: "Controlled technique, results from session one",
        descripcion: "This is not a drugstore whitening kit. It is a clinical protocol with active-light technology, calibrated to your enamel type and the specific result you are after.",
        impacto: "Visible results in the first session. Without unnecessary sensitivity.",
        href: null,
        destacado: false,
    },
    {
        id: "04",
        nombre: "AM Aligners",
        tagline: "Orthodontics without brackets, without hassle",
        descripcion: "Invisible aligners with 100% digital planning. You wear the clear aligners at your own pace, and every stage is calculated to move your teeth with fraction-of-a-millimetre precision.",
        impacto: "Effective at any age. Nobody will know you are wearing them.",
        href: null,
        destacado: false,
    },
    {
        id: "05",
        nombre: "Dental Implants",
        tagline: "The tooth you would never guess is artificial",
        descripcion: "We replace missing teeth with implants that integrate into your bone. The result is indistinguishable from a natural tooth — in function and in aesthetics.",
        impacto: "A permanent solution. Maximum stability. Without compromising neighbouring teeth.",
        href: null,
        destacado: false,
    },
    {
        id: "06",
        nombre: "Orofacial Harmonization",
        tagline: "Beyond the teeth",
        descripcion: "We work on the lip contour and facial frame so that your smile and your face tell the same story. Non-invasive. Results that surprise.",
        impacto: "Complements any dental treatment with an aesthetic dimension that transforms how the whole face is perceived.",
        href: null,
        destacado: false,
    },
    {
        id: "07",
        nombre: "Gum Contouring",
        tagline: "A gummy smile has a solution",
        descripcion: "If your gum covers too much of your tooth or sits unevenly, a gum contouring procedure can rebalance the proportions in a single session.",
        impacto: "It changes the entire proportion of your smile. Few people know this exists.",
        href: null,
        destacado: false,
    },
    {
        id: "08",
        nombre: "Aesthetic Prosthetics",
        tagline: "High-end rehabilitation",
        descripcion: "Crowns and prosthetics designed to measure with state-of-the-art materials. We restore function and beauty simultaneously, without compromising either.",
        impacto: "For complex cases that deserve a solution to match.",
        href: null,
        destacado: false,
    },
];

const quickLinksEn = [
    { label: "Dental Tourism", tone: "For patients traveling from abroad", href: "/en/dental-tourism-argentina" },
    { label: "Porcelain Veneers", tone: "For those who want a definitive change", href: "/en/porcelain-veneers-buenos-aires" },
    { label: "Smile Design", tone: "For those planning a full transformation", href: "/en/smile-design-buenos-aires" },
    { label: "Before & After", tone: "For those who want to see real results", href: "/en/before-after" },
    { label: "The Clinic", tone: "For those who want to know the space", href: "/en/clinic" },
    { label: "The Team", tone: "For those who want to know who treats them", href: "/en/team" },
];

const UI = {
    es: {
        eyebrow: "Especialidades",
        h2a: "Cada tratamiento",
        h2b: "tiene su propio resultado",
        lead: "No hay dos sonrisas iguales. Por eso cada tratamiento está personalizado a tu caso, tu presupuesto y tus objetivos.",
        consult: "Consultar",
        more: "Ver más →",
        waPrefix: "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20",
        qlEyebrow: "Explorá por intención",
        qlH3a: "Las búsquedas que más acercan",
        qlH3b: " a una decisión real",
        qlLead: "Si ya sabés lo que querés resolver, entrá por precio, por técnica o por comparación clínica en vez de navegar toda la web.",
    },
    en: {
        eyebrow: "Specialties",
        h2a: "Every treatment",
        h2b: "has its own result",
        lead: "No two smiles are alike. That is why every treatment is tailored to your case, your budget and your goals.",
        consult: "Ask about it",
        more: "Learn more →",
        waPrefix: "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20more%20about%20",
        qlEyebrow: "Explore by intent",
        qlH3a: "The pages that bring you closest",
        qlH3b: " to a real decision",
        qlLead: "If you already know what you want to solve, go straight in by treatment, by result or by what matters to you as an international patient.",
    },
} as const;

export default function Tratamientos({ lang = "es" }: { lang?: "es" | "en" }) {
    const t = UI[lang];
    const items = lang === "en" ? tratamientosEn : tratamientos;
    const links = lang === "en" ? quickLinksEn : quickLinks;
    return (
        <section className="px-6 py-24 max-w-7xl mx-auto">
            <div className="space-y-10">
                {/* Encabezado */}
                <div className="mb-12">
                    <span className="text-oro/60 font-manrope uppercase tracking-[0.35em] text-xs block mb-4">
                        {t.eyebrow}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                        {t.h2a} <span className="font-cormorant italic text-oro">{t.h2b}</span>
                    </h2>
                    <p className="text-crema/60 font-manrope text-base leading-relaxed max-w-2xl">
                        {t.lead}
                    </p>
                </div>

                {/* Tratamientos - Acordeones expandibles (todo visible en HTML para Google) */}
                <div className="space-y-2">
                    {items.map((item, i) => (
                        <details
                            key={item.id}
                            open={i === 0}
                            className="group border border-oro/10 rounded-2xl overflow-hidden bg-carbon hover:border-oro/20 transition-colors"
                        >
                            <summary className="cursor-pointer px-6 py-5 flex items-center justify-between select-none hover:bg-carbon-soft transition-colors">
                                <div>
                                    <span className="font-manrope text-xs font-medium uppercase tracking-widest block mb-1 text-oro group-open:text-oro text-crema-muted">
                                        {item.id}
                                    </span>
                                    <span className="font-manrope font-medium text-sm text-crema">
                                        {item.nombre}
                                    </span>
                                </div>
                                <span className="text-lg transition-transform text-oro group-open:translate-x-1">
                                    →
                                </span>
                            </summary>

                            {/* Contenido expandible - TODO visible en DOM para Google */}
                            <div className="px-6 pb-6 border-t border-oro/10 pt-6 bg-carbon/40">
                                <span className="text-oro/60 font-manrope uppercase tracking-[0.3em] text-xs block mb-4">
                                    {item.tagline}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4 leading-tight">
                                    {item.nombre}
                                </h3>
                                <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                    {item.descripcion}
                                </p>

                                {/* Impact line */}
                                <div className="border-l-2 border-oro pl-4 mb-6">
                                    <p className="text-crema font-manrope text-sm italic leading-relaxed">
                                        {item.impacto}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={`${t.waPrefix}${encodeURIComponent(item.nombre)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-oro text-carbon px-6 py-3 rounded-full font-manrope font-semibold text-sm hover:bg-oro/90 transition-colors"
                                    >
                                        {t.consult}
                                        <span>→</span>
                                    </a>
                                    {item.href && (
                                        <Link
                                            href={item.href}
                                            className="inline-flex items-center gap-2 border border-oro/25 text-crema/70 px-6 py-3 rounded-full font-manrope text-sm hover:border-oro/50 hover:text-crema transition-colors"
                                        >
                                            {t.more}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </details>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="mt-12 rounded-[2rem] border border-oro/10 bg-carbon px-6 py-8 md:px-8">
                    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="text-oro/65 font-manrope uppercase tracking-[0.32em] text-[10px] block mb-3">
                                {t.qlEyebrow}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-manrope font-light text-crema leading-tight">
                                {t.qlH3a}
                                <span className="font-cormorant italic text-oro">{t.qlH3b}</span>
                            </h3>
                        </div>
                        <p className="max-w-xl text-crema/50 font-manrope text-sm leading-relaxed">
                            {t.qlLead}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {links.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="rounded-2xl border border-oro/12 bg-carbon-soft px-5 py-5 transition-colors hover:border-oro/30 group"
                            >
                                <span className="text-crema font-manrope font-medium text-sm block mb-2 group-hover:text-oro transition-colors">
                                    {item.label}
                                </span>
                                <span className="text-crema/45 font-manrope text-xs leading-relaxed block">
                                    {item.tone}
                                </span>
                                <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-3 block">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
