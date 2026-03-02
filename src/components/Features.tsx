"use client";

import Design3D from "./features/Design3D";
import Telemetry from "./features/Telemetry";
import ScheduleAgenda from "./features/ScheduleAgenda";

export default function Features() {
    return (
        <section id="tecnologia" className="py-32 px-4 bg-crema text-carbon relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-outfit font-light tracking-tight mb-4">
                        Artefactos <span className="font-cormorant italic text-arcilla">Funcionales</span>
                    </h2>
                    <p className="text-carbon/60 max-w-xl font-jakarta">
                        Diseñamos cada aspecto de la experiencia clínica apoyados por la tecnología más avanzada,
                        eliminando la fricción y enfocándonos en resultados perfectos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Feature 1: Diseño 3D (Full width on mobile, half on desktop) */}
                    <div className="lg:pr-8">
                        <h3 className="text-2xl font-outfit mb-3">Diseño 3D y Mockup</h3>
                        <p className="text-carbon/70 mb-8 font-jakarta font-light">
                            Visualiza tu sonrisa antes de comenzar. Nuestro laboratorio digital diseña tu caso
                            con precisión milimétrica.
                        </p>
                        <Design3D />
                    </div>

                    {/* Feature 2: Telemetría and Feature 3: Schedule stacked */}
                    <div className="flex flex-col gap-12">
                        <div>
                            <h3 className="text-2xl font-outfit mb-3">Telemetría Dental</h3>
                            <p className="text-carbon/70 mb-6 font-jakarta font-light">
                                Escaneo intraoral sin impresión. Analizamos tu biomecánica en tiempo real.
                            </p>
                            <Telemetry />
                        </div>

                        <div>
                            <h3 className="text-2xl font-outfit mb-3">Agenda Inteligente</h3>
                            <p className="text-carbon/70 mb-6 font-jakarta font-light">
                                Reserva tu evaluación desde tu dispositivo. Conectado a nuestra sede en Puerto Madero.
                            </p>
                            <ScheduleAgenda />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
