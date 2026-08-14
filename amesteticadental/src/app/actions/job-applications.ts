"use server";

import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import {
  buildJobApplicationStoragePath,
  hashPrivacyValue,
  isLikelyUrl,
  isValidEmail,
  JOB_APPLICATION_AREAS,
  normalizeEmail,
  sanitizeJobApplicationFileName,
  sanitizeLongText,
  sanitizeText,
  validateJobApplicationFile,
} from "@/lib/job-applications";

const MIN_FORM_COMPLETION_MS = 4000;
const RATE_LIMIT_WINDOW_MINUTES = 15;
const RATE_LIMIT_MAX_SUBMISSIONS = 3;

export type SubmitJobApplicationResult = {
  success?: true;
  error?: string;
};

function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing Supabase admin environment variables");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

function genericSubmitError() {
  return "No pudimos recibir la postulación. Revisá los datos e intentá de nuevo.";
}

async function getRequestHashes() {
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for") || "";
  const realIp = headerStore.get("x-real-ip") || "";
  const userAgent = headerStore.get("user-agent") || "";
  const ip = forwardedFor.split(",")[0]?.trim() || realIp || "unknown";

  return {
    ipHash: hashPrivacyValue(ip),
    userAgentHash: userAgent ? hashPrivacyValue(userAgent) : null,
  };
}

function getRequiredText(formData: FormData, key: string, maxLength = 3000) {
  return sanitizeLongText(formData.get(key), maxLength);
}

function validateTextPayload(payload: {
  fullName: string;
  area: string;
  otherArea: string;
  experience: string;
  areaResponsibilities: string;
  instagramUrl: string;
  email: string;
  location: string;
  teamworkAnswer: string;
  learningInterest: string;
  longTermGoals: string;
  teamContribution: string;
  whyChooseYou: string;
  consent: string;
}) {
  if (!payload.fullName || payload.fullName.length < 3) return "Completá tu nombre y apellido.";
  if (!payload.area || !JOB_APPLICATION_AREAS.includes(payload.area as typeof JOB_APPLICATION_AREAS[number])) return "Seleccioná un área.";
  if (payload.area === "Otros" && !payload.otherArea) return "Indicá el área de postulación.";
  if (!payload.experience) return "Completá tu experiencia previa.";
  if (!payload.areaResponsibilities) return "Completá las funciones del área.";
  if (!payload.instagramUrl || !isLikelyUrl(payload.instagramUrl)) return "Completá tu Instagram.";
  if (!payload.email || !isValidEmail(payload.email)) return "Completá un email válido.";
  if (!payload.location) return "Completá dónde vivís.";
  if (!payload.teamworkAnswer) return "Completá cómo trabajás en equipo.";
  if (!payload.learningInterest) return "Respondé si querés seguir aprendiendo.";
  if (!payload.longTermGoals) return "Completá tus metas a largo plazo.";
  if (!payload.teamContribution) return "Completá qué aportarías al equipo.";
  if (!payload.whyChooseYou) return "Completá por qué deberíamos elegirte.";
  if (payload.consent !== "on") return "Aceptá el uso de tus datos para el proceso de selección.";
  return "";
}

/**
 * Núcleo de procesamiento, compartido por dos entradas:
 *  - la server action de este sitio (formulario de Puerto Madero)
 *  - el route handler `/api/job-applications`, que recibe las postulaciones de
 *    amesteticadental.uy
 *
 * `source` es lo que después permite separarlas en el panel de administración.
 * Las filas históricas del sitio argentino son `web_public` (default de la tabla).
 */
export async function processJobApplication(
  formData: FormData,
  { source }: { source: string },
): Promise<SubmitJobApplicationResult> {
  const startedAt = Number(formData.get("form_started_at") || 0);
  const company = sanitizeText(formData.get("company"), 120);

  if (company) {
    return { success: true };
  }

  if (!startedAt || Date.now() - startedAt < MIN_FORM_COMPLETION_MS) {
    return { error: "Esperá unos segundos y volvé a enviar el formulario." };
  }

  const payload = {
    fullName: sanitizeText(formData.get("full_name"), 180),
    area: sanitizeText(formData.get("area"), 180),
    otherArea: sanitizeText(formData.get("other_area"), 180),
    experience: getRequiredText(formData, "experience"),
    areaResponsibilities: getRequiredText(formData, "area_responsibilities"),
    instagramUrl: sanitizeText(formData.get("instagram_url"), 240),
    email: normalizeEmail(formData.get("email")),
    location: sanitizeText(formData.get("location"), 240),
    teamworkAnswer: getRequiredText(formData, "teamwork_answer"),
    learningInterest: getRequiredText(formData, "learning_interest"),
    longTermGoals: getRequiredText(formData, "long_term_goals"),
    teamContribution: getRequiredText(formData, "team_contribution"),
    whyChooseYou: getRequiredText(formData, "why_choose_you"),
    consent: String(formData.get("consent") || ""),
  };

  const validationError = validateTextPayload(payload);
  if (validationError) return { error: validationError };

  const cv = formData.get("cv");
  if (!(cv instanceof File)) return { error: "Adjuntá tu CV." };

  const fileValidation = validateJobApplicationFile(cv);
  if (!fileValidation.ok) return { error: fileValidation.error };

  let admin: ReturnType<typeof createAdminClient>;
  try {
    admin = createAdminClient();
  } catch (error) {
    console.error("[submitJobApplication] admin client failed:", error);
    return { error: genericSubmitError() };
  }

  const { ipHash, userAgentHash } = await getRequestHashes();
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();

  const { count, error: rateError } = await admin
    .from("job_applications")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", windowStart);

  if (rateError) {
    console.error("[submitJobApplication] rate limit check failed:", rateError.message);
    return { error: genericSubmitError() };
  }

  if ((count || 0) >= RATE_LIMIT_MAX_SUBMISSIONS) {
    return { error: "Recibimos demasiados envíos recientes. Probá más tarde." };
  }

  const applicationId = crypto.randomUUID();
  const storagePath = buildJobApplicationStoragePath(applicationId, cv.name);
  const bytes = Buffer.from(await cv.arrayBuffer());

  const { error: uploadError } = await admin.storage
    .from("job-applications")
    .upload(storagePath, bytes, {
      contentType: cv.type,
      upsert: false,
    });

  if (uploadError) {
    console.error("[submitJobApplication] upload failed:", uploadError.message);
    return { error: genericSubmitError() };
  }

  const { error: insertError } = await admin
    .from("job_applications")
    .insert({
      id: applicationId,
      full_name: payload.fullName,
      area: payload.area,
      other_area: payload.area === "Otros" ? payload.otherArea : null,
      experience: payload.experience,
      area_responsibilities: payload.areaResponsibilities,
      instagram_url: payload.instagramUrl,
      email: payload.email,
      location: payload.location,
      teamwork_answer: payload.teamworkAnswer,
      learning_interest: payload.learningInterest,
      long_term_goals: payload.longTermGoals,
      team_contribution: payload.teamContribution,
      why_choose_you: payload.whyChooseYou,
      cv_storage_path: storagePath,
      cv_original_filename: sanitizeJobApplicationFileName(cv.name),
      cv_mime_type: cv.type,
      cv_size_bytes: cv.size,
      source,
      ip_hash: ipHash,
      user_agent_hash: userAgentHash,
    });

  if (insertError) {
    console.error("[submitJobApplication] insert failed:", insertError.message);
    await admin.storage.from("job-applications").remove([storagePath]);
    return { error: genericSubmitError() };
  }

  return { success: true };
}

/** Formulario del sitio argentino. Mantiene el `source` histórico de la tabla. */
export async function submitJobApplication(formData: FormData): Promise<SubmitJobApplicationResult> {
  return processJobApplication(formData, { source: "web_public" });
}
