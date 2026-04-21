"use client";

import { useState, useMemo } from "react";

const TASA_ANUAL = 0.18;

export default function CalculadoraFinanciacion() {
    const [precio, setPrecio] = useState(3600);
    const [anticipoPct, setAnticipoPct] = useState(50);
    const [cuotas, setCuotas] = useState(6);

    const calculo = useMemo(() => {
        const anticipo = precio * (anticipoPct / 100);
        const saldo = precio - anticipo;
        const interesMensual = TASA_ANUAL / 12;
        const cuota = saldo > 0 ? (saldo * interesMensual) / (1 - Math.pow(1 + interesMensual, -cuotas)) : 0;
        const totalFinanciado = anticipo + cuota * cuotas;
        return {
            anticipo: Math.round(anticipo),
            saldo: Math.round(saldo),
            cuota: Math.round(cuota),
            total: Math.round(totalFinanciado),
            interes: Math.round(totalFinanciado - precio),
        };
    }, [precio, anticipoPct, cuotas]);

    return (
        <div className="border border-oro/15 rounded-2xl p-8 bg-carbon-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="calc-precio" className="text-crema/70 font-manrope text-sm block mb-2">
                            Valor total del tratamiento (USD)
                        </label>
                        <input
                            id="calc-precio"
                            type="number"
                            value={precio}
                            onChange={(e) => setPrecio(Number(e.target.value) || 0)}
                            min={500}
                            step={100}
                            className="w-full bg-carbon border border-oro/20 rounded-xl px-4 py-3 text-crema font-manrope text-sm focus:border-oro/50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="calc-anticipo" className="text-crema/70 font-manrope text-sm block mb-2">
                            Anticipo
                        </label>
                        <select
                            id="calc-anticipo"
                            value={anticipoPct}
                            onChange={(e) => setAnticipoPct(Number(e.target.value))}
                            className="w-full bg-carbon border border-oro/20 rounded-xl px-4 py-3 text-crema font-manrope text-sm focus:border-oro/50 focus:outline-none"
                        >
                            <option value={30}>30% de anticipo</option>
                            <option value={50}>50% de anticipo</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="calc-cuotas" className="text-crema/70 font-manrope text-sm block mb-2">
                            Cantidad de cuotas
                        </label>
                        <select
                            id="calc-cuotas"
                            value={cuotas}
                            onChange={(e) => setCuotas(Number(e.target.value))}
                            className="w-full bg-carbon border border-oro/20 rounded-xl px-4 py-3 text-crema font-manrope text-sm focus:border-oro/50 focus:outline-none"
                        >
                            <option value={3}>3 cuotas</option>
                            <option value={6}>6 cuotas</option>
                            <option value={12}>12 cuotas</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                    <div className="border border-oro/10 rounded-xl p-5 bg-carbon">
                        <p className="text-crema/50 font-manrope text-xs uppercase tracking-widest mb-1">Anticipo ({anticipoPct}%)</p>
                        <p className="text-crema font-manrope font-semibold text-2xl">${calculo.anticipo.toLocaleString("es-AR")} USD</p>
                    </div>
                    <div className="border border-oro/10 rounded-xl p-5 bg-carbon">
                        <p className="text-crema/50 font-manrope text-xs uppercase tracking-widest mb-1">Cuota mensual ({cuotas}x)</p>
                        <p className="text-oro font-manrope font-semibold text-2xl">${calculo.cuota.toLocaleString("es-AR")} USD</p>
                    </div>
                    <div className="border border-oro/10 rounded-xl p-5 bg-carbon">
                        <p className="text-crema/50 font-manrope text-xs uppercase tracking-widest mb-1">Total financiado</p>
                        <p className="text-crema font-manrope font-semibold text-2xl">${calculo.total.toLocaleString("es-AR")} USD</p>
                    </div>
                    <div className="border border-oro/10 rounded-xl p-5 bg-carbon">
                        <p className="text-crema/50 font-manrope text-xs uppercase tracking-widest mb-1">Interés total</p>
                        <p className="text-crema-muted font-manrope font-semibold text-lg">${calculo.interes.toLocaleString("es-AR")} USD</p>
                    </div>
                </div>
            </div>

            <p className="text-crema/35 font-manrope text-xs mt-6">
                * Cálculo estimativo con tasa fija del 18% anual. El presupuesto definitivo se entrega después de la evaluación inicial.
                Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.
            </p>
        </div>
    );
}
