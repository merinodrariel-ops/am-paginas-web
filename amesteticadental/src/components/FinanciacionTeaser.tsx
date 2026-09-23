import Link from "next/link";

export default function FinanciacionTeaser() {
    return (
        <section id="financiacion" className="py-28 px-6 bg-carbon relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full bg-oro/4 blur-[120px]" />
            </div>

            <div className="max-w-3xl mx-auto text-center relative">
                <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                    Financiación propia
                </span>
                <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                    Sonreí hoy.{" "}
                    <span className="font-cormorant italic text-oro">Pagá después.</span>
                </h2>
                <p className="text-crema-muted font-manrope text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
                    Sabemos que no todos pueden afrontar una inversión de esta magnitud de una sola vez.
                    Por eso diseñamos un plan de financiación propio, para que tu tratamiento empiece
                    cuando vos lo decidís — no cuando termines de juntar todo el monto.
                </p>
                <Link
                    href="/financiacion"
                    className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro/90 transition-colors shadow-lg hover:shadow-oro/10"
                >
                    Conocé cómo financiamos tu sonrisa
                    <span>→</span>
                </Link>
            </div>
        </section>
    );
}
