import { supabase } from "./supabase-client";

export const TRATAMIENTOS = [
  { value: "carillas", label: "Carillas estéticas" },
  { value: "diseno_sonrisa", label: "Diseño de sonrisa" },
  { value: "implantes", label: "Implantes dentales" },
  { value: "ortodoncia_invisible", label: "Ortodoncia invisible" },
  { value: "blanqueamiento", label: "Blanqueamiento" },
  { value: "bruxismo", label: "Bruxismo / desgaste dental" },
  { value: "periodoncia", label: "Periodoncia (encías)" },
  { value: "estetica_general", label: "Estética dental general" },
  { value: "limpieza", label: "Limpieza / Profilaxis" },
  { value: "endodoncia", label: "Endodoncia" },
  { value: "protesis", label: "Prótesis" },
  { value: "otro", label: "Otro / No estoy seguro" },
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
}

export interface LeadResult {
  success: boolean;
  alreadyExists?: boolean;
  error?: string;
}

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  const fullName = input.fullName?.trim();
  if (!fullName || fullName.length < 2) {
    return { success: false, error: "Por favor ingresá tu nombre completo" };
  }
  if (fullName.length > 200) {
    return { success: false, error: "Nombre demasiado largo" };
  }
  const email = input.email?.trim().toLowerCase() || null;
  const whatsapp = input.whatsapp?.trim() || null;
  if (!email && !whatsapp) {
    return { success: false, error: "Necesitamos email o WhatsApp para contactarte" };
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Email inválido" };
  }
  const message = input.message?.trim() || null;
  if (message && message.length > 2000) {
    return { success: false, error: "Mensaje demasiado largo" };
  }

  const { error } = await supabase.from("marketing_leads").insert({
    full_name: fullName,
    email,
    whatsapp,
    neighborhood: input.neighborhood?.trim() || null,
    interest_tags: input.interestTags ?? [],
    notes: message,
    metadata: input.metadata ?? {},
    origin: "web_form_amesteticadental",
  });

  if (error) {
    if (error.code === "23505") return { success: true, alreadyExists: true };
    console.error("submitLead error:", error);
    return { success: false, error: "No pudimos enviar el formulario. Intentá de nuevo." };
  }

  return { success: true };
}

export function getUTMs(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const val = params.get(key);
    if (val) utms[key] = val;
  }
  return utms;
}
