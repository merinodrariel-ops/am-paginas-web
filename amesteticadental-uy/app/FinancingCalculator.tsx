"use client";

import { useEffect, useMemo, useState } from "react";
import { BROU_EXCHANGE_RATE_URL, WHATSAPP_URL } from "./site-data";

const TASA_ANUAL = 0.18;
const TASA_MENSUAL = TASA_ANUAL / 12;
const CUOTAS = [3, 6, 12];

function formatUsd(value: number) {
  return `US$ ${Math.round(value).toLocaleString("es-UY")}`;
}

function formatUyu(value: number) {
  return `$ ${Math.round(value).toLocaleString("es-UY")} UYU`;
}

function calculateInstallment(balance: number, installments: number) {
  return (balance * (TASA_MENSUAL * Math.pow(1 + TASA_MENSUAL, installments))) /
    (Math.pow(1 + TASA_MENSUAL, installments) - 1);
}

export default function FinancingCalculator() {
  const [amountInput, setAmountInput] = useState("30000");
  const [downPaymentRate, setDownPaymentRate] = useState(0.5);
  const [brouSaleRate, setBrouSaleRate] = useState<number | null>(null);
  const [rateError, setRateError] = useState(false);

  const amount = Math.max(Number(amountInput.replace(/\D/g, "")) || 0, 0);
  const downPayment = amount * downPaymentRate;
  const balance = Math.max(amount - downPayment, 0);

  useEffect(() => {
    let active = true;
    fetch("/api/exchange-rate", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Rate unavailable");
        return response.json() as Promise<{ saleRate: number }>;
      })
      .then(({ saleRate }) => { if (active) setBrouSaleRate(saleRate); })
      .catch(() => { if (active) setRateError(true); });
    return () => { active = false; };
  }, []);

  const simulations = useMemo(() => CUOTAS.map((installments) => ({
    installments,
    usd: calculateInstallment(balance, installments),
  })), [balance]);

  const whatsappMessage = encodeURIComponent(`Hola AM Estética Dental Uruguay. Simulé una inversión de ${formatUsd(amount)} con ${Math.round(downPaymentRate * 100)}% de anticipo. Quiero conocer las opciones para mi caso.`);

  return (
    <div className="finance-calculator">
      <div className="finance-panel">
        <label className="finance-label" htmlFor="finance-amount">Inversión total del tratamiento (USD)</label>
        <input id="finance-amount" className="finance-input" type="text" inputMode="numeric" value={amount.toLocaleString("es-UY")} onChange={(event) => setAmountInput(event.target.value)} />
        <p className="finance-hint">Podés ingresar cualquier monto. Por ejemplo: 15.000, 20.000 o 30.000 USD.</p>
        <div className="finance-option-grid" aria-label="Anticipo inicial">
          {[0.3, 0.5].map((percentage) => <button key={percentage} type="button" className="finance-option" aria-pressed={downPaymentRate === percentage} onClick={() => setDownPaymentRate(percentage)}>{Math.round(percentage * 100)}% de anticipo</button>)}
        </div>
        <div className="finance-rate"><p className="finance-hint">Tasa anual fija sobre el saldo financiado</p><strong>18% anual</strong></div>
      </div>

      <div className="finance-panel">
        <div className="finance-result-grid">
          <div className="finance-result"><small>Anticipo hoy</small><strong>{formatUsd(downPayment)}</strong>{brouSaleRate ? <span>{formatUyu(downPayment * brouSaleRate)}</span> : null}</div>
          <div className="finance-result"><small>Saldo financiado</small><strong>{formatUsd(balance)}</strong>{brouSaleRate ? <span>{formatUyu(balance * brouSaleRate)}</span> : null}</div>
          <div className="finance-result"><small>Forma de pago</small><strong>USD / UYU</strong><span>Equivalente al tipo vendedor BROU</span></div>
        </div>

        <p className="finance-rate-status">{brouSaleRate ? `Cotización vendedora de dólar BROU: $ ${brouSaleRate.toLocaleString("es-UY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} UYU por USD.` : rateError ? "No pudimos actualizar la cotización. Las cuotas en USD siguen disponibles." : "Actualizando cotización vendedora de BROU..."}</p>

        <div className="finance-result-grid">
          {simulations.map(({ installments, usd }) => <div className="finance-result" key={installments}><small>{installments} cuotas fijas</small><strong>{formatUsd(usd)}</strong>{brouSaleRate ? <span>{formatUyu(usd * brouSaleRate)} / mes</span> : <span>Equivalente UYU al tipo BROU</span>}</div>)}
        </div>

        <p className="finance-disclaimer">La inversión y las cuotas se expresan en USD. El monto en pesos uruguayos es una referencia calculada con la cotización vendedora de Banco República al momento de consultar; se confirma al momento de cada pago. Financiación sujeta a evaluación y preaprobación de cada caso.</p>
        <div className="finance-actions"><a href={`${WHATSAPP_URL}&text=${whatsappMessage}`} target="_blank" rel="noreferrer" data-track="uy_financing_whatsapp_click" className="button button-gold">Consultar este plan</a><a href={BROU_EXCHANGE_RATE_URL} target="_blank" rel="noreferrer" className="text-link">Ver cotización BROU</a></div>
      </div>
    </div>
  );
}
