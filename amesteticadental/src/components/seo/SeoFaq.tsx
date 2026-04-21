"use client";

import { useState } from "react";

export interface FaqItem {
    pregunta: string;
    respuesta: string;
}

export default function SeoFaq({ items }: { items: FaqItem[] }) {
    const [abierto, setAbierto] = useState<number | null>(0);

    return (
        <div className="space-y-2">
            {items.map((faq, i) => (
                <div
                    key={i}
                    className={`border rounded-xl overflow-hidden transition-colors ${
                        abierto === i ? "border-oro/30 bg-carbon" : "border-oro/10 bg-carbon-soft hover:border-oro/20"
                    }`}
                >
                    <button
                        onClick={() => setAbierto(abierto === i ? null : i)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    >
                        <span className={`font-manrope font-medium text-sm leading-snug ${abierto === i ? "text-crema" : "text-crema/80"}`}>
                            {faq.pregunta}
                        </span>
                        <span className={`text-oro flex-none transition-transform duration-200 ${abierto === i ? "rotate-45" : ""}`}>
                            +
                        </span>
                    </button>
                    {abierto === i && (
                        <div className="px-6 pb-6">
                            <div className="h-px bg-oro/10 mb-5" />
                            <p className="text-crema-muted font-manrope text-sm leading-relaxed">
                                {faq.respuesta}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
