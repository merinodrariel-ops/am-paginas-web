import { NextResponse } from "next/server";

const BROU_QUOTATIONS_URL = "https://www.brou.com.uy/c/portal/render_portlet?p_l_id=20593&p_p_id=cotizacionfull_WAR_broutmfportlet_INSTANCE_otHfewh1klyS";

function parseBrouUsdSaleRate(html: string): number | null {
  const dollarRow = html.match(/<p class="moneda">Dólar<\/p>[\s\S]*?<\/tr>/i)?.[0];
  if (!dollarRow) return null;
  const values = [...dollarRow.matchAll(/<p class="valor">\s*([\d.,]+)\s*<\/p>/g)]
    .map((match) => Number(match[1].replace(/\./g, "").replace(",", ".")));
  return Number.isFinite(values[1]) && values[1] > 0 ? values[1] : null;
}

export async function GET() {
  try {
    const response = await fetch(BROU_QUOTATIONS_URL, {
      cache: "no-store",
      headers: { "User-Agent": "AM-Estetica-Dental-Uruguay/1.0" },
    });
    const saleRate = parseBrouUsdSaleRate(await response.text());
    if (!response.ok || !saleRate) throw new Error("BROU quotation unavailable");

    return NextResponse.json({ saleRate, source: "BROU", fetchedAt: new Date().toISOString() }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "No se pudo obtener la cotización de BROU." }, { status: 503 });
  }
}
