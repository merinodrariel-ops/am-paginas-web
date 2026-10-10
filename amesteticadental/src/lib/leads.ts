export const TRATAMIENTOS = [
  { value: "carillas", label: "Carillas estéticas", labelEn: "Veneers" },
  { value: "diseno_sonrisa", label: "Diseño de sonrisa", labelEn: "Smile design" },
  { value: "implantes", label: "Implantes dentales", labelEn: "Dental implants" },
  { value: "ortodoncia_invisible", label: "Ortodoncia invisible", labelEn: "Invisible aligners" },
  { value: "blanqueamiento", label: "Blanqueamiento", labelEn: "Whitening" },
  { value: "bruxismo", label: "Bruxismo / desgaste dental", labelEn: "Bruxism / tooth wear" },
  { value: "periodoncia", label: "Periodoncia (encías)", labelEn: "Periodontics (gums)" },
  { value: "estetica_general", label: "Estética dental general", labelEn: "General cosmetic dentistry" },
  { value: "limpieza", label: "Limpieza / Profilaxis", labelEn: "Cleaning / Prophylaxis" },
  { value: "endodoncia", label: "Endodoncia", labelEn: "Root canal" },
  { value: "protesis", label: "Prótesis", labelEn: "Prosthetics" },
  { value: "otro", label: "Otro / No estoy seguro", labelEn: "Other / Not sure" },
] as const;

export type TratamientoSlug = typeof TRATAMIENTOS[number]["value"];

export interface LeadInput {
  fullName: string;
  email?: string;
  whatsapp?: string;
  neighborhood?: string;
  interestTags?: string[];
  message?: string;
  metadata?: Record<string, unknown>;
  origin?: string;
}

export interface LeadResult {
  success: boolean;
  alreadyExists?: boolean;
  error?: string;
}

/**
 * Envía la consulta al servidor (`/api/consultas`).
 *
 * Antes esto insertaba directo en Supabase desde el navegador y nadie recibía
 * aviso. Ahora el route handler guarda el lead y avisa al equipo por Resend.
 * `website` es el honeypot: si un bot lo completa, el servidor descarta el envío.
 */
export async function submitLead(
  input: LeadInput & { website?: string; lang?: "es" | "en" },
): Promise<LeadResult> {
  try {
    const response = await fetch("/api/consultas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const data = (await response.json().catch(() => ({}))) as LeadResult;
    if (!response.ok || !data.success) {
      return { success: false, error: data.error || "No pudimos enviar el formulario. Intentá de nuevo." };
    }
    return { success: true, alreadyExists: data.alreadyExists };
  } catch {
    return { success: false, error: "No pudimos enviar el formulario. Revisá tu conexión o escribinos por WhatsApp." };
  }
}

export function getUTMs(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"]) {
    const val = params.get(key);
    if (val) utms[key] = val;
  }
  return utms;
}
