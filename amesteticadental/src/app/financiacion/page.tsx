import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Financiacion from "@/components/Financiacion";
import Contacto from "@/components/Contacto";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/financiacion";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Financiación propia | AM Estética Dental",
    description:
        "Sonreí hoy, pagá después. Financiación propia con tasa fija del 18% anual para que tu tratamiento empiece cuando vos lo decidís, no cuando termines de ahorrar.",
    alternates: { canonical: CANONICAL, languages: hreflangFor("/financiacion") },
    openGraph: {
        title: "Financiación propia | AM Estética Dental",
        description:
            "Un plan de financiación pensado para que tu sonrisa nueva empiece hoy. Simulá tu plan en segundos.",
        url: CANONICAL,
    },
};

export default function FinanciacionPage() {
    return (
        <main className="bg-carbon text-crema font-manrope min-h-screen">
            <BreadcrumbsSchema
                items={[
                    { name: "Inicio", item: "/" },
                    { name: "Financiación", item: "/financiacion" },
                ]}
            />
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 border-b border-oro/10 bg-gradient-to-b from-carbon to-carbon-soft overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[500px] h-[500px] rounded-full bg-oro/5 blur-[120px]" />
                </div>
                <div className="max-w-3xl mx-auto text-center relative">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                        Financiación propia
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.05] mb-8">
                        Sonreí hoy.
                        <br />
                        <span className="font-cormorant italic text-oro">Pagá después.</span>
                    </h1>
                    <p className="text-crema-muted font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        Sabemos que no todos pueden afrontar una inversión de esta magnitud de una sola vez —
                        y no tiene por qué ser así. Por eso diseñamos un plan de financiación propio, para que
                        tu tratamiento empiece cuando vos lo decidís, no cuando termines de juntar todo el monto.
                    </p>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                        <span className="rounded-full border border-oro/20 bg-oro/5 px-5 py-2.5 text-crema/70 font-manrope text-xs uppercase tracking-[0.2em]">
                            Tasa fija 18% anual
                        </span>
                        <span className="rounded-full border border-oro/20 bg-oro/5 px-5 py-2.5 text-crema/70 font-manrope text-xs uppercase tracking-[0.2em]">
                            Anticipo del 30% o 50%
                        </span>
                        <span className="rounded-full border border-oro/20 bg-oro/5 px-5 py-2.5 text-crema/70 font-manrope text-xs uppercase tracking-[0.2em]">
                            Cuotas en pesos o USD
                        </span>
                    </div>
                </div>
            </section>

            {/* Simulador */}
            <Financiacion />

            {/* Cierre + contacto */}
            <Contacto />
        </main>
    );
}
