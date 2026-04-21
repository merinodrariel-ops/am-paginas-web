"use client";

// Sección de tecnología — reemplaza los widgets del template base
// Diseño editorial limpio con la estética del proyecto Stitch

const tecnologias = [
    {
        numero: "01",
        titulo: "Escáner Intraoral Digital",
        descripcion: "Sin pasta. Sin moldes. Sin ansiedad. Capturamos la geometría de tu boca con precisión de 10 micrones en menos de 3 minutos.",
        detalle: "iTero Element 5D — el mismo escáner que usan las mejores clínicas de Nueva York y Madrid.",
    },
    {
        numero: "02",
        titulo: "Diseño de Sonrisa 3D",
        descripcion: "Tu nueva sonrisa existe en pantalla antes de que toquemos un solo diente. La ves, la aprobás, la ajustamos. Después la ejecutamos.",
        detalle: "Software DSD — Digital Smile Design. El estándar internacional de la odontología estética de autor.",
    },
    {
        numero: "03",
        titulo: "Laboratorio CAD/CAM",
        descripcion: "Las carillas y coronas se diseñan digitalmente y se fabrican con máquinas de fresado de precisión. Cero margen de error humano en la manufactura.",
        detalle: "Materiales e.max y Vita Suprinity — los cerámicos de alta resistencia que usan los mejores laboratorios del mundo.",
    },
    {
        numero: "04",
        titulo: "Protocolo Fotográfico Clínico",
        descripcion: "Cada caso se documenta con fotografía clínica profesional antes, durante y después. Es la base de los resultados firmados @drarielmerino.",
        detalle: "Registros que permiten análisis biomecánico y justifican cada decisión clínica.",
    },
];

export default function Features() {
    return (
        <section id="tecnologia" className="py-32 px-4 bg-carbon relative z-10">

            {/* Glow sutil */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] rounded-full bg-oro/3 blur-[140px]" />
            </div>

            <div className="max-w-6xl mx-auto relative">

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
                    <div>
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                            Tecnología clínica
                        </span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                            El proceso que hace{" "}
                            <span className="font-cormorant italic text-oro">posible el resultado</span>
                        </h2>
                    </div>
                    <p className="text-crema-muted font-manrope text-lg font-light leading-relaxed">
                        No alcanza con el talento clínico. Detrás de cada caso hay una cadena de tecnología que elimina el error y garantiza el resultado.
                    </p>
                </div>

                {/* Grid de tecnologías */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-oro/10 border border-oro/10 rounded-2xl overflow-hidden">
                    {tecnologias.map((t) => (
                        <div
                            key={t.numero}
                            className="bg-carbon p-10 hover:bg-carbon-soft transition-colors group"
                        >
                            <div className="flex items-start gap-6">
                                <span className="text-oro/30 font-manrope font-light text-4xl leading-none flex-none group-hover:text-oro/50 transition-colors">
                                    {t.numero}
                                </span>
                                <div>
                                    <h3 className="text-crema font-manrope font-medium text-lg mb-3 leading-snug">
                                        {t.titulo}
                                    </h3>
                                    <p className="text-crema/70 font-manrope text-sm leading-relaxed mb-4">
                                        {t.descripcion}
                                    </p>
                                    <p className="text-oro/60 font-manrope text-xs leading-relaxed italic border-l border-oro/20 pl-3">
                                        {t.detalle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20conocer%20m%C3%A1s%20sobre%20la%20tecnolog%C3%ADa%20de%20AM%20Est%C3%A9tica%20Dental."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 border border-oro/30 text-crema px-8 py-4 rounded-full font-manrope text-sm hover:border-oro/60 hover:text-crema transition-colors"
                    >
                        Consultar sobre el proceso
                        <span className="text-oro">→</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
