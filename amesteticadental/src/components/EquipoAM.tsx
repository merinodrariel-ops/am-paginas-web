import Image from "next/image";

const EQUIPO = [
    { nombre: "Dr. Ariel Merino", rol: "Director Clínico", src: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/equipo/dr-ariel-merino-director-clinico-am-estetica-dental-puerto-madero", alt: "Dr. Ariel Merino — Director Clínico — AM Estética Dental" },
    { nombre: "Agostina Villalba", rol: "Asistente Dental", src: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/equipo/agostina-villalba-asistente-dental-am-estetica-dental-buenos-aires", alt: "Agostina Villalba — Asistente Dental — AM Estética Dental" },
    { nombre: "Andrés", rol: "Endodoncista", src: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/equipo/andres-endodoncista-am-estetica-dental-puerto-madero-buenos-aires", alt: "Andrés — Endodoncista — AM Estética Dental" },
    { nombre: "Augusto", rol: "Cirugía e Implantes", src: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/equipo/augusto-cirugia-implantes-am-estetica-dental-buenos-aires", alt: "Augusto — Cirugía e Implantes — AM Estética Dental" },
    { nombre: "Claudia", rol: "Administración", src: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/equipo/claudia-administracion-am-estetica-dental-puerto-madero", alt: "Claudia — Administración — AM Estética Dental" },
    { nombre: "Georgina", rol: "Laboratorio Dental", src: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/equipo/georgina-laboratorio-dental-am-estetica-dental-buenos-aires", alt: "Georgina — Laboratorio Dental — AM Estética Dental" },
    { nombre: "Luz Ferrón", rol: "Ortodoncista", src: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/equipo/luz-ferron-ortodoncista-am-estetica-dental-puerto-madero-buenos-aires", alt: "Luz Ferrón — Ortodoncista — AM Estética Dental" },
    { nombre: "Micaela", rol: "Asistente Dental", src: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/equipo/micaela-asistente-dental-am-estetica-dental-buenos-aires", alt: "Micaela — Asistente Dental — AM Estética Dental" },
    { nombre: "Romina Lima", rol: "Fidelización de Pacientes", src: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/equipo/romina-lima-fidelizacion-pacientes-am-estetica-dental-puerto-madero", alt: "Romina Lima — Fidelización de Pacientes — AM Estética Dental" },
];

export default function EquipoAM() {
    return (
        <section id="equipo" className="py-32 px-4 bg-carbon relative z-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        Nuestro Equipo
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                            El equipo detrás de{" "}
                            <span className="font-cormorant italic text-oro">cada sonrisa.</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-lg font-light leading-relaxed">
                            AM Estética Dental es un equipo multidisciplinario en Puerto Madero. Cada especialidad integrada para que cada caso tenga el resultado que merece.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {EQUIPO.map((miembro) => (
                        <div key={miembro.nombre} className="group flex flex-col items-center text-center">
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 border border-oro/10 group-hover:border-oro/30 transition-colors duration-300">
                                <Image
                                    src={miembro.src}
                                    alt={miembro.alt}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            </div>
                            <h3 className="font-manrope font-light text-crema text-sm leading-snug mb-1">
                                {miembro.nombre}
                            </h3>
                            <p className="font-manrope text-[10px] uppercase tracking-[0.25em] text-oro/60">
                                {miembro.rol}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
