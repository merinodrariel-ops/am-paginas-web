import { NextResponse } from "next/server";
import { submitLead } from "@/lib/leads";

/**
 * Recibe leads de las otras sedes de la red AM.
 *
 * Espeja a `/api/job-applications`: las webs de la red no tienen base propia, y
 * duplicar credenciales de Supabase en cada proyecto de Vercel amplía sin
 * necesidad la superficie de exposición. Este sitio sigue siendo el único que
 * escribe, y cada origen define el `origin` con el que la fila queda etiquetada.
 *
 * Por qué existe (2026-08-14): la lista de novedades uruguaya guardaba los
 * contactos en un proveedor externo cuya clave dejó de ser válida. Devolvía 503 a
 * cada visitante y los leads se perdían sin dejar rastro. Guardándolos en
 * `marketing_leads` —la misma tabla que ya usan los formularios argentinos— el
 * lead queda aunque el proveedor de mail esté caído.
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

  if (!headers || !origin) {
    return NextResponse.json({ error: "Origen no permitido." }, { status: 403 });
  }

  let body: { fullName?: string; email?: string; interestTags?: string[]; metadata?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "No pudimos leer los datos." }, { status: 400, headers });
  }

  const result = await submitLead({
    fullName: String(body.fullName || ""),
    email: String(body.email || ""),
    interestTags: body.interestTags ?? ["apertura_carrasco"],
    metadata: body.metadata ?? {},
    origin: ALLOWED_ORIGINS[origin],
  });

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400, headers });
  }

  return NextResponse.json({ success: true, alreadyExists: result.alreadyExists ?? false }, { headers });
}
