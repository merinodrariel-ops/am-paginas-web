import { NextResponse } from "next/server";
import { processJobApplication } from "@/app/actions/job-applications";

/**
 * Recibe postulaciones de las otras sedes de la red AM.
 *
 * Por qué existe: amesteticadental.uy necesita su propio formulario, pero la
 * administración de postulaciones vive en un solo lugar. En vez de duplicar la
 * `SUPABASE_SERVICE_ROLE_KEY` en un segundo proyecto de Vercel —que ampliaría la
 * superficie de exposición de la llave con más permisos del sistema—, el
 * formulario uruguayo postea acá y este sitio sigue siendo el único que escribe
 * en la base.
 *
 * Cada origen permitido define el `source` con el que la fila queda etiquetada,
 * y así el panel central puede separarlas por sede.
 */
const ALLOWED_ORIGINS: Record<string, string> = {
  "https://www.amesteticadental.uy": "web_uruguay",
  "https://amesteticadental.uy": "web_uruguay",
};

function corsHeaders(origin: string | null) {
  if (!origin || !(origin in ALLOWED_ORIGINS)) return null;
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export async function OPTIONS(request: Request) {
  const headers = corsHeaders(request.headers.get("origin"));
  if (!headers) return new NextResponse(null, { status: 403 });
  return new NextResponse(null, { status: 204, headers });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const headers = corsHeaders(origin);

  // Sin origen permitido no se procesa: este endpoint es para las sedes de la
  // red, no un formulario público que cualquier sitio pueda usar.
  if (!headers || !origin) {
    return NextResponse.json({ error: "Origen no permitido." }, { status: 403 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "No pudimos leer el formulario." }, { status: 400, headers });
  }

  const result = await processJobApplication(formData, { source: ALLOWED_ORIGINS[origin] });

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400, headers });
  }

  return NextResponse.json({ success: true }, { headers });
}
