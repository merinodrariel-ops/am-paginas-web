"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MousePointer2 } from "lucide-react";
import clsx from "clsx";

const hours = ["09:00", "10:30", "14:00", "15:30", "17:00"];
const days = ["Lun", "Mar", "Mié", "Jue", "Vie"];

export default function ScheduleAgenda() {
    const [selectedSlot, setSelectedSlot] = useState<{ d: number; h: number } | null>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cursorRef.current || !gridRef.current) return;

        const ctx = gsap.context(() => {
            // Create a sequence of random movements simulating a user finding a slot
            const t = gsap.timeline({ repeat: -1, repeatDelay: 2 });

            const targetDay = 2; // Miércoles
            const targetHour = 3; // 15:30

            t.set(cursorRef.current, { x: 0, y: 0, opacity: 0 })
                .to(cursorRef.current, { opacity: 1, duration: 0.5 })
                .to(cursorRef.current, {
                    x: 80, y: 40,
                    duration: 1,
                    ease: "power2.inOut"
                })
                .to(cursorRef.current, {
                    x: 150, y: 90,
                    duration: 0.8,
                    ease: "power2.inOut"
                })
                .to(cursorRef.current, {
                    // Final destination coordinate approximation (will tweak via CSS classes)
                    x: 220, y: 180,
                    duration: 1.2,
                    ease: "power3.inOut",
                    onComplete: () => setSelectedSlot({ d: targetDay, h: targetHour })
                })
                .to(cursorRef.current, {
                    scale: 0.8,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1
                })
                .to(cursorRef.current, {
                    opacity: 0,
                    duration: 1,
                    delay: 1.5,
                    onComplete: () => setSelectedSlot(null)
                });
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={gridRef}
            className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl relative overflow-hidden"
        >
            <div className="grid grid-cols-6 gap-2 text-center text-xs md:text-sm mb-4 font-jakarta font-medium text-carbon/60">
                <div className="flex items-center justify-center">
                    <span className="sr-only">Horas</span>
                </div>
                {days.map(d => <div key={d} className="py-2">{d}</div>)}
            </div>

            <div className="flex flex-col gap-2 relative">
                {hours.map((hour, hIdx) => (
                    <div key={hour} className="grid grid-cols-6 gap-2">
                        <div className="flex items-center justify-center text-xs text-carbon/40 font-mono">
                            {hour}
                        </div>
                        {days.map((_, dIdx) => {
                            const isSelected = selectedSlot?.d === dIdx && selectedSlot?.h === hIdx;
                            const isPast = dIdx < 2 && hIdx < 2; // Simulate some past slots

                            return (
                                <div
                                    key={`${dIdx}-${hIdx}`}
                                    className={clsx(
                                        "h-10 rounded-xl border flex items-center justify-center transition-all duration-300",
                                        isSelected
                                            ? "bg-arcilla text-crema border-arcilla shadow-lg scale-105 z-10"
                                            : isPast
                                                ? "bg-carbon/5 border-carbon/5 text-transparent opacity-50"
                                                : "bg-white border-carbon/10 hover:border-arcilla/30 hover:bg-arcilla/5 text-carbon"
                                    )}
                                >
                                    <div className={clsx("w-2 h-2 rounded-full", isSelected ? "bg-crema" : isPast ? "bg-transparent" : "bg-verde-musgo/20")} />
                                </div>
                            );
                        })}
                    </div>
                ))}

                {/* Animated Custom Cursor */}
                <div
                    ref={cursorRef}
                    className="absolute z-20 pointer-events-none opacity-0 drop-shadow-2xl"
                    style={{ top: 0, left: 0 }}
                >
                    <MousePointer2 className="w-6 h-6 text-carbon fill-carbon" />
                </div>
            </div>
        </div>
    );
}
