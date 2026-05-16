import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-carbon flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                    Página no encontrada
                </span>

                <h1 className="text-8xl md:text-9xl font-manrope font-light text-crema/10 leading-none mb-6">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema leading-tight mb-4">
                    Esta sonrisa{" "}
                    <span className="font-cormorant italic text-oro">no existe.</span>
                </h2>

                <p className="text-crema-muted font-manrope text-base font-light leading-relaxed mb-10">
                    La página que buscás no existe o fue movida. Volvé al inicio y encontrá el tratamiento que necesitás.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-all"
                    >
                        Volver al inicio
                        <span>→</span>
                    </Link>
                    <a
                        href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20No%20encuentro%20la%20p%C3%A1gina%20que%20buscaba."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-oro/30 text-crema px-8 py-4 rounded-full font-manrope font-medium text-base hover:border-oro/60 transition-colors"
                    >
                        Consultar por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
