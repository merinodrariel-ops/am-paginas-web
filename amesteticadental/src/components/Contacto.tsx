"use client";

import Image from "next/image";

export default function Contacto() {
    return (
        <section id="contacto" className="py-32 px-4 bg-carbon-soft relative overflow-hidden">

            {/* Fondo con glow dorado sutil */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] rounded-full bg-oro/5 blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto relative">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        Puerto Madero, Buenos Aires
                    </span>
                    <h2 className="text-4xl md:text-6xl font-manrope font-light text-crema leading-tight mb-6">
                        Tu sonrisa tiene{" "}
                        <span className="font-cormorant italic text-oro">nombre y apellido.</span>
                    </h2>
                    <p className="text-crema-muted font-manrope text-lg font-light max-w-xl mx-auto">
                        Cada tratamiento empieza con una evaluacion inicial donde entendemos exactamente que queres lograr y definimos el plan indicado para tu caso.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-oro/15 bg-carbon/45 px-4 py-2 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-oro" />
                        <span className="text-[11px] font-manrope uppercase tracking-[0.24em] text-crema/72">
                            Agenda limitada · Solo 4 evaluaciones iniciales disponibles este mes
                        </span>
                    </div>
                </div>

                {/* CTA principal — WhatsApp */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                    <a
                        href="https://api.whatsapp.com/send?phone=541170219298&text=Hola%20buenas!%20%F0%9F%91%8B%20Me%20gustaria%20solicitar%20una%20evaluacion%20inicial."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-all hover:scale-[1.02] active:scale-100"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Solicitar evaluacion por WhatsApp
                    </a>
                    <a
                        href="https://www.instagram.com/amesteticadental"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 border border-oro/30 text-crema px-8 py-4 rounded-full font-manrope font-medium text-base hover:border-oro/60 transition-colors"
                    >
                        @amesteticadental
                    </a>
                </div>

                {/* Info de contacto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {[
                        {
                            label: "Ubicación",
                            value: "Camila O'Gorman 412, Of. 101",
                            sub: "Puerto Madero, C1107DED CABA",
                        },
                        {
                            label: "Horario",
                            value: "Lunes a Viernes",
                            sub: "10:00 — 18:00",
                        },
                        {
                            label: "Contacto directo",
                            value: "+54 9 11 7021-9298",
                            sub: "WhatsApp disponible",
                        },
                    ].map((item) => (
                        <div key={item.label} className="border border-oro/10 rounded-2xl px-6 py-8 bg-carbon hover:border-oro/20 transition-colors">
                            <span className="text-oro/60 font-manrope uppercase tracking-[0.3em] text-xs block mb-3">
                                {item.label}
                            </span>
                            <div className="text-crema font-manrope font-medium mb-1">{item.value}</div>
                            <div className="text-crema-muted font-manrope text-sm">{item.sub}</div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Redes sociales */}
            <div className="mt-16 pt-10 border-t border-oro/10">
                <p className="text-crema/30 font-manrope uppercase tracking-[0.4em] text-[10px] text-center mb-8">Seguinos</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {[
                        { label: "Instagram", href: "https://www.instagram.com/amesteticadental", handle: "@amesteticadental" },
                        { label: "TikTok", href: "https://www.tiktok.com/@drarielmerino", handle: "@drarielmerino" },
                        { label: "YouTube", href: "https://www.youtube.com/@ArielMerino", handle: "Dr. Ariel Merino" },
                        { label: "LinkedIn", href: "https://ar.linkedin.com/company/am-est%C3%A9tica-dental", handle: "AM Estética Dental" },
                    ].map((r) => (
                        <a
                            key={r.label}
                            href={r.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-oro/12 rounded-full px-4 py-2 text-crema/50 font-manrope text-xs hover:border-oro/30 hover:text-crema transition-colors"
                        >
                            <span className="text-oro/50 font-medium">{r.label}</span>
                            <span className="text-crema/30">·</span>
                            <span>{r.handle}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mapa embebido */}
            <div className="mt-16 rounded-2xl overflow-hidden border border-oro/10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.339753076963!2d-58.36348498957587!3d-34.62085355828912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352fb2b91c57%3A0xa89ef8e7957fdd0d!2sAM%20Est%C3%A9tica%20Dental%20%E2%80%93%20Dise%C3%B1o%20de%20Sonrisas%20en%20Puerto%20Madero!5e0!3m2!1ses!2sar!4v1775532671562!5m2!1ses!2sar"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de AM Estética Dental en Google Maps"
                    className="w-full"
                />
            </div>

            {/* Links de navegación */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                    href="https://maps.app.goo.gl/5kWar9VL6qjhdEGM7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-crema/40 font-manrope text-xs hover:text-crema/70 transition-colors"
                >
                    <svg className="w-3.5 h-3.5 text-oro/50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Abrir en Google Maps
                </a>
                <span className="text-oro/15">·</span>
                <a
                    href="https://waze.com/ul/h69y7pcqyu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-crema/40 font-manrope text-xs hover:text-crema/70 transition-colors"
                >
                    <Image src="/images/waze-mark.svg" alt="Waze" width={14} height={14} className="h-3.5 w-3.5" />
                    Abrir en Waze
                </a>
                <span className="text-oro/15">·</span>
                <a
                    href="https://g.page/r/CQ3df5Xn-J6oEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-crema/40 font-manrope text-xs hover:text-crema/70 transition-colors"
                >
                    ★ Dejar una reseña en Google
                </a>
            </div>

            {/* Footer con logo */}
            <div className="mt-12 pt-8 border-t border-oro/10 flex justify-center">
                <Image
                    src="/logo.png"
                    alt="AM Estética Dental"
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain opacity-60"
                />
            </div>

        </section>
    );
}
