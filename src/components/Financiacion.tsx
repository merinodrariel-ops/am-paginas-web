"use client";

import { useState } from "react";

// Simulador de financiación nativo — elimina el redirect a Google Forms
// que rompe la experiencia premium.
// Parámetros actuales: 50% anticipo + 50% financiado a 12% TNA fija
// TODO: Ariel va a compartir los nuevos parámetros para actualizar esto

const TASA_ANUAL = 0.12;
const TASA_MENSUAL = TASA_ANUAL / 12;

function calcularCuota(monto: number, cuotas: number): number {
    if (cuotas === 1) return monto;
    const cuota = monto * (TASA_MENSUAL * Math.pow(1 + TASA_MENSUAL, cuotas)) / (Math.pow(1 + TASA_MENSUAL, cuotas) - 1);
    return cuota;
}

export default function Financiacion() {
    const [monto, setMonto] = useState(2000);
    const [cuotas, setCuotas] = useState(6);

    const anticipo = monto * 0.5;
    const montoFinanciado = monto * 0.5;
    const cuotaMensual = calcularCuota(montoFinanciado, cuotas);
    const totalFinal = anticipo + cuotaMensual * cuotas;

    const opcionesCuotas = [3, 6, 12];

    return (
        <section id="financiacion" className="py-32 px-4 bg-carbon relative overflow-hidden">

            {/* Glow dorado */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full bg-oro/4 blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto relative">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        Financiación
                    </span>
                    <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema mb-6">
                        Calculá tu inversión{" "}
                        <span className="font-cormorant italic text-oro">ahora mismo</span>
                    </h2>
                    <p className="text-crema-muted font-manrope text-lg font-light max-w-xl mx-auto">
                        Tasa fija anual del 12%. Sin sorpresas, sin letra chica. Pagás en USD o en pesos al tipo de cambio oficial del Banco Nación del día.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Controles */}
                    <div className="bg-carbon-soft border border-oro/10 rounded-2xl p-8">

                        {/* Monto total del tratamiento */}
                        <div className="mb-8">
                            <label className="text-crema font-manrope text-sm font-medium block mb-4">
                                Valor total del tratamiento (USD)
                            </label>
                            <div className="flex items-center gap-4">
                                <span className="text-oro font-manrope text-2xl font-light">$ {monto.toLocaleString("en-US")}</span>
                            </div>
                            <input
                                type="range"
                                min={500}
                                max={15000}
                                step={500}
                                value={monto}
                                onChange={(e) => setMonto(Number(e.target.value))}
                                className="w-full mt-4 accent-[#f2b90d]"
                            />
                            <div className="flex justify-between text-crema-muted font-manrope text-xs mt-1">
                                <span>USD 500</span>
                                <span>USD 15.000</span>
                            </div>
                        </div>

                        {/* Cuotas */}
                        <div>
                            <label className="text-crema font-manrope text-sm font-medium block mb-4">
                                Cantidad de cuotas
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {opcionesCuotas.map((n) => (
                                    <button
                                        key={n}
                                        onClick={() => setCuotas(n)}
                                        className={`py-3 rounded-xl font-manrope font-medium text-sm transition-all border ${
                                            cuotas === n
                                                ? "bg-oro text-carbon border-oro"
                                                : "bg-carbon border-oro/20 text-crema/70 hover:border-oro/40"
                                        }`}
                                    >
                                        {n} cuotas
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Resultado */}
                    <div className="bg-carbon-soft border border-oro/30 rounded-2xl p-8">
                        <div className="space-y-6 mb-8">

                            <div className="flex justify-between items-center py-4 border-b border-oro/10">
                                <span className="text-crema-muted font-manrope text-sm">Anticipo (50%)</span>
                                <span className="text-crema font-manrope font-semibold">
                                    USD {anticipo.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                                </span>
                            </div>

                            <div className="flex justify-between items-center py-4 border-b border-oro/10">
                                <span className="text-crema-muted font-manrope text-sm">Monto a financiar</span>
                                <span className="text-crema font-manrope font-semibold">
                                    USD {montoFinanciado.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                                </span>
                            </div>

                            <div className="flex justify-between items-center py-4 border-b border-oro/10">
                                <span className="text-crema-muted font-manrope text-sm">Tasa fija anual</span>
                                <span className="text-oro font-manrope font-semibold">12% TNA</span>
                            </div>

                            <div className="flex justify-between items-center py-4 border-b border-oro/10">
                                <span className="text-crema font-manrope font-medium">Cuota mensual × {cuotas}</span>
                                <span className="text-2xl text-oro font-manrope font-light">
                                    USD {cuotaMensual.toFixed(0)}
                                </span>
                            </div>

                            <div className="flex justify-between items-center py-2">
                                <span className="text-crema-muted font-manrope text-xs">Total con financiación</span>
                                <span className="text-crema-muted font-manrope text-sm">
                                    ≈ USD {totalFinal.toFixed(0)}
                                </span>
                            </div>
                        </div>

                        <p className="text-crema-muted font-manrope text-xs mb-6 leading-relaxed">
                            Los valores en USD se abonan en ARS a la cotización oficial (venta) del Banco Nación del día de pago.
                        </p>

                        <a
                            href={`https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Simul%C3%A9%20un%20tratamiento%20de%20USD%20${monto}%20en%20${cuotas}%20cuotas.%20Me%20gustar%C3%ADa%20agendar%20una%20consulta.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 bg-oro text-carbon px-6 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-all"
                        >
                            Consultar este plan por WhatsApp
                            <span>→</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
