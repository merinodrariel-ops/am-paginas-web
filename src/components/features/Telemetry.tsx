"use client";

import { useEffect, useState, useRef } from "react";
import { Terminal, Activity } from "lucide-react";

export default function Telemetry() {
    const [text, setText] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    const fullText = `> Inicializando escáner intraoral... [OK]
> Calibrando sensores ópticos... [OK]
> Iniciando captura 3D (Precisión: 10 micras)...
> Analizando biomecánica oclusal...
> Detectando puntos de contacto... 14 anomalías detectadas.
> Generando malla poligonal... 450,000 vértices capturados.
> Exportando caso a laboratorio digital... [COMPLETADO]`;

    useEffect(() => {
        let i = 0;
        let timer: NodeJS.Timeout;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                // Start typing effect when visible
                setText("");
                i = 0;

                const typeChar = () => {
                    if (i < fullText.length) {
                        setText(fullText.substring(0, i + 1));
                        i++;
                        // Randomize typing speed slightly
                        timer = setTimeout(typeChar, Math.random() * 30 + 10);
                    }
                };
                typeChar();

                observer.disconnect();
            }
        }, { threshold: 0.5 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-carbon text-verde-musgo/80 p-6 flex flex-col gap-4 font-mono text-xs md:text-sm shadow-xl rounded-3xl border border-carbon/10 h-64 relative overflow-hidden group"
        >
            <div className="flex items-center justify-between border-b border-verde-musgo/20 pb-4 mb-2">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-arcilla" />
                    <span className="text-crema/50 font-semibold tracking-wider uppercase text-[10px]">AM Terminal_v2.4</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arcilla opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-arcilla"></span>
                    </span>
                    <span className="text-crema/40 text-[10px]">LIVE</span>
                </div>
            </div>

            <div className="flex-1 whitespace-pre-wrap text-crema/80 relative z-10 font-light leading-relaxed">
                {text}
                <span className="inline-block w-2 h-4 bg-arcilla ml-1 animate-pulse align-middle" />
            </div>

            {/* Background decorative elements */}
            <Activity className="absolute -bottom-10 -right-10 w-48 h-48 text-crema/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -rotate-12" />
        </div>
    );
}
