"use client";

import { useState } from "react";

// Simulador de financiación con monto libre.
// La TNA es 18% fija sobre el saldo financiado.

const TASA_ANUAL = 0.18;
const TASA_MENSUAL = TASA_ANUAL / 12;

function formatearMonto(valor: number): string {
    return valor.toLocaleString("es-AR");
}

function parsearMontoInput(valor: string): number {
    const soloDigitos = valor.replace(/\D/g, "");
    return Number(soloDigitos || 0);
}

function calcularCuota(monto: number, cuotas: number): number {
    if (cuotas === 1) return monto;
    const cuota = monto * (TASA_MENSUAL * Math.pow(1 + TASA_MENSUAL, cuotas)) / (Math.pow(1 + TASA_MENSUAL, cuotas) - 1);
    return cuota;
}

export default function Financiacion() {
    const [montoInput, setMontoInput] = useState("20000");
    const [anticipoPorcentaje, setAnticipoPorcentaje] = useState(0.5);

    const monto = Math.max(parsearMontoInput(montoInput), 0);
    const anticipo = monto * anticipoPorcentaje;
    const montoFinanciado = Math.max(monto - anticipo, 0);
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
                        Ingresá el monto de tu presupuesto, elegí si querés dar 30% o 50% de anticipo y mirá cómo quedarían las cuotas a 3, 6 o 12 meses. Pagás en USD o en pesos al tipo de cambio oficial del Banco Nación del día.
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
                            <div className="flex items-center rounded-xl border border-oro/15 bg-carbon px-5 py-4">
                                <span className="text-oro font-manrope text-lg mr-3">US$</span>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={monto === 0 && montoInput === "" ? "" : formatearMonto(monto)}
                                    onChange={(e) => setMontoInput(e.target.value)}
                                    className="w-full bg-transparent text-crema font-manrope text-2xl font-light outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                />
                            </div>
                            <p className="text-crema/40 font-manrope text-xs mt-3 leading-relaxed">
                                Podés escribir cualquier monto. Por ejemplo: 15000, 24000, 26000 o 30000.
                            </p>
                        </div>

                        {/* Anticipo */}
                        <div>
                            <label className="text-crema font-manrope text-sm font-medium block mb-4">
                                Anticipo inicial
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {[0.3, 0.5].map((porcentaje) => (
                                    <button
                                        key={porcentaje}
                                        onClick={() => setAnticipoPorcentaje(porcentaje)}
                                        className={`py-3 rounded-xl font-manrope font-medium text-sm transition-all border ${
                                            anticipoPorcentaje === porcentaje
                                                ? "bg-oro text-carbon border-oro"
                                                : "bg-carbon border-oro/20 text-crema/70 hover:border-oro/40"
                                        }`}
                                    >
                                        {Math.round(porcentaje * 100)}% de anticipo
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Resultado */}
                    <div className="bg-carbon-soft border border-oro/30 rounded-2xl p-8">
                        <div className="space-y-5 mb-8">

                            {/* Anticipo */}
                            <div className="rounded-xl border border-oro/15 bg-carbon px-6 py-5 flex items-center justify-between">
                                <div>
                                    <span className="text-crema/50 font-manrope uppercase tracking-[0.3em] text-[10px] block mb-1">Pagás hoy</span>
                                    <span className="text-crema font-manrope font-light text-sm">Anticipo del {Math.round(anticipoPorcentaje * 100)}%</span>
                                </div>
                                <span className="text-crema font-manrope font-semibold text-xl">
                                    US$ {formatearMonto(Math.round(anticipo))}
                                </span>
                            </div>

                            <div className="rounded-xl border border-oro/15 bg-carbon px-6 py-5 flex items-center justify-between">
                                <div>
                                    <span className="text-crema/50 font-manrope uppercase tracking-[0.3em] text-[10px] block mb-1">Saldo financiado</span>
                                    <span className="text-crema/45 font-manrope font-light text-xs">Base sobre la que se calcula la financiación</span>
                                </div>
                                <span className="text-crema font-manrope font-semibold text-xl">
                                    US$ {formatearMonto(Math.round(montoFinanciado))}
                                </span>
                            </div>

                            {/* Cuotas */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {opcionesCuotas.map((n) => {
                                    const cuotaMensual = calcularCuota(montoFinanciado, n);

                                    return (
                                        <div key={n} className="rounded-xl border border-oro/40 bg-oro/8 px-5 py-5">
                                            <span className="text-oro/70 font-manrope uppercase tracking-[0.3em] text-[10px] block mb-2">
                                                {n} cuotas
                                            </span>
                                            <span className="text-crema font-manrope font-light text-sm block mb-4">
                                                Pagos iguales y fijos
                                            </span>
                                            <span className="text-oro font-manrope font-light text-3xl block">
                                                US$ {formatearMonto(Math.round(cuotaMensual))}
                                            </span>
                                            <span className="text-oro/50 font-manrope text-xs block mt-1">/mes</span>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                        <p className="text-crema/30 font-manrope text-xs mb-2 leading-relaxed">
                            Valores en USD. La TNA es 18% anual sobre el saldo financiado. Podés abonar en pesos al tipo de cambio oficial Banco Nación del día de pago.
                        </p>

                        <p className="text-crema/24 font-manrope text-[11px] mb-6 leading-relaxed">
                            Financiación sujeta a evaluación y preaprobación de cada caso.
                        </p>

                        <a
                            href={`https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Simul%C3%A9%20un%20tratamiento%20de%20USD%20${monto}%20con%20${Math.round(anticipoPorcentaje * 100)}%20de%20anticipo.%20Me%20gustar%C3%ADa%20agendar%20una%20consulta.`}
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
