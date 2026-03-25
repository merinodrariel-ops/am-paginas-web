"use client";

// Sección de autoridad: Forbes + Miss Universo + datos duros
// Estos son los diferenciadores reales que ningún competidor en CABA puede replicar

export default function Autoridad() {
    return (
        <section className="py-24 px-4 bg-carbon border-y border-oro/10 relative overflow-hidden">

            {/* Gold line top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-oro/0 to-oro/60" />

            <div className="max-w-6xl mx-auto">

                {/* Label */}
                <div className="text-center mb-16">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs">
                        Reconocimiento & Autoridad
                    </span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-oro/10 border border-oro/10 rounded-2xl overflow-hidden mb-20">
                    {[
                        { number: "4.9★", label: "Google Rating", sub: "Reseñas verificadas" },
                        { number: "10+", label: "Años de experiencia", sub: "Dr. Ariel Merino" },
                        { number: "#1", label: "Forbes Argentina", sub: "Única clínica dental" },
                        { number: "100%", label: "Casos reales", sub: "Sin stock, sin filtros" },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-carbon px-8 py-10 text-center group hover:bg-carbon-soft transition-colors">
                            <div className="text-3xl md:text-4xl font-manrope font-light text-oro mb-2">
                                {stat.number}
                            </div>
                            <div className="text-crema font-manrope font-medium text-sm mb-1">
                                {stat.label}
                            </div>
                            <div className="text-crema-muted font-manrope text-xs">
                                {stat.sub}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Forbes + Miss Universo — los dos proof points más fuertes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Forbes */}
                    <div className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft relative overflow-hidden group hover:border-oro/40 transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-oro/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-oro/10 transition-colors" />
                        <div className="relative">
                            <span className="text-oro/60 font-manrope uppercase tracking-[0.3em] text-xs block mb-6">
                                Forbes Argentina
                            </span>
                            <h3 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4 leading-snug">
                                La única clínica odontológica de Argentina reconocida por Forbes.
                            </h3>
                            <p className="text-crema-muted font-manrope text-sm leading-relaxed">
                                No es un premio de industria. Es reconocimiento editorial en el medio de negocios más exigente del mundo — por el impacto real que generamos en la vida de nuestros pacientes.
                            </p>
                        </div>
                    </div>

                    {/* Miss Universo */}
                    <div className="border border-oro/20 rounded-2xl p-8 bg-carbon-soft relative overflow-hidden group hover:border-oro/40 transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-oro/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-oro/10 transition-colors" />
                        <div className="relative">
                            <span className="text-oro/60 font-manrope uppercase tracking-[0.3em] text-xs block mb-6">
                                Miss Universo
                            </span>
                            <h3 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4 leading-snug">
                                La sonrisa más estudiada del mundo confía en el Dr. Ariel Merino.
                            </h3>
                            <p className="text-crema-muted font-manrope text-sm leading-relaxed">
                                Cuando el estándar es la perfección bajo los focos del mundo, no hay margen para el error. Nuestros resultados hablan antes que cualquier credencial.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Gold line bottom accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-oro/0 to-oro/60" />
        </section>
    );
}
