"use client";

import Link from "next/link";
import { useState } from "react";

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

export default function Tratamientos() {
    const [activo, setActivo] = useState(0);
    const quickLinks = [
        { label: "Precio de Carillas", href: "/precio-carillas-dentales-buenos-aires", tone: "Qué influye en el valor real del tratamiento" },
        { label: "Lentes de Contacto Dental", href: "/lentes-de-contacto-dental", tone: "La opción más conservadora para máxima naturalidad" },
        { label: "Carillas sin Desgaste", href: "/carillas-sin-desgaste", tone: "Cuándo realmente se puede evitar preparar el diente" },
        { label: "Porcelana vs Resina", href: "/carillas-de-porcelana-vs-resina", tone: "Compará duración, refinamiento y mantenimiento" },
        { label: "Carillas vs Alineadores", href: "/carillas-vs-alineadores", tone: "Definí si necesitás cambiar forma o mover dientes" },
        { label: "AM Aligners", href: "/alineadores-invisibles", tone: "Nuestro sistema de alineadores invisibles con planificación digital" },
    ];

    return (
        <section id="tratamientos" className="py-32 px-4 bg-carbon-soft relative z-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-20 max-w-2xl">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        Tratamientos de Estética Dental
                    </span>
                    <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                        Carillas, alineadores e implantes{" "}
                        <span className="font-cormorant italic text-oro">en Puerto Madero</span>
                    </h2>
                    <p className="text-crema-muted font-manrope text-lg font-light">
                        No vendemos procedimientos. Diseñamos resultados que cambian la manera en que una persona se para frente al mundo.
                    </p>
                </div>

                {/* Layout: lista izquierda + detalle derecha */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-oro/10 rounded-2xl overflow-hidden">

                    {/* Lista de tratamientos — todos visibles en HTML para indexación */}
                    <div className="lg:col-span-2 border-r border-oro/10">
                        {tratamientos.map((t, i) => (
                            <button
                                key={t.id}
                                onClick={() => setActivo(i)}
                                className={`
                                    w-full text-left px-6 py-5 border-b border-oro/10 last:border-0
                                    flex items-center justify-between group transition-all
                                    ${activo === i ? "bg-oro/10" : "hover:bg-carbon-soft"}
                                `}
                            >
                                <div>
                                    <span className={`font-manrope text-xs font-medium uppercase tracking-widest block mb-1 ${activo === i ? "text-oro" : "text-crema-muted"}`}>
                                        {t.id}
                                    </span>
                                    <span className={`font-manrope font-medium text-sm ${activo === i ? "text-crema" : "text-crema/70"}`}>
                                        {t.nombre}
                                    </span>
                                </div>
                                <span className={`text-lg transition-transform ${activo === i ? "text-oro translate-x-1" : "text-crema/20 group-hover:text-crema/50"}`}>
                                    →
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Detalle del tratamiento activo */}
                    <div className="lg:col-span-3 p-10 bg-carbon flex flex-col justify-between min-h-[400px]">
                        <div>
                            <span className="text-oro/60 font-manrope uppercase tracking-[0.3em] text-xs block mb-4">
                                {tratamientos[activo].id} — {tratamientos[activo].tagline}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-manrope font-light text-crema mb-6 leading-tight">
                                {tratamientos[activo].nombre}
                            </h3>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-8">
                                {tratamientos[activo].descripcion}
                            </p>

                            {/* Impact line */}
                            <div className="border-l-2 border-oro pl-4">
                                <p className="text-crema font-manrope text-sm italic leading-relaxed">
                                    {tratamientos[activo].impacto}
                                </p>
                            </div>
                        </div>

                        {/* Contenido completo de todos los tratamientos — visible para crawlers, oculto visualmente */}
                        <div className="sr-only" aria-hidden="true">
                            {tratamientos.map((t) => (
                                <div key={t.id}>
                                    <h3>{t.nombre}</h3>
                                    <p>{t.descripcion}</p>
                                    <p>{t.impacto}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a
                                href={`https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20${encodeURIComponent(tratamientos[activo].nombre)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-6 py-3 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Consultar este tratamiento
                                <span>→</span>
                            </a>
                            {tratamientos[activo].href && (
                                <Link
                                    href={tratamientos[activo].href}
                                    className="inline-flex items-center gap-2 border border-oro/25 text-crema/70 px-6 py-3 rounded-full font-manrope text-sm hover:border-oro/50 hover:text-crema transition-colors"
                                >
                                    Ver más →
                                </Link>
                            )}
                        </div>
                    </div>

                </div>

                <div className="mt-10 rounded-[2rem] border border-oro/10 bg-carbon px-6 py-8 md:px-8">
                    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="text-oro/65 font-manrope uppercase tracking-[0.32em] text-[10px] block mb-3">
                                Explorá por intención
                            </span>
                            <h3 className="text-2xl md:text-3xl font-manrope font-light text-crema leading-tight">
                                Las búsquedas que más acercan
                                <span className="font-cormorant italic text-oro"> a una decisión real</span>
                            </h3>
                        </div>
                        <p className="max-w-xl text-crema/50 font-manrope text-sm leading-relaxed">
                            Si ya sabés lo que querés resolver, entrá por precio, por técnica o por comparación clínica en vez de navegar toda la web.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {quickLinks.map((item) => (
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
