"use client";

import { useMemo, useRef, useState } from "react";
import { Briefcase, CheckCircle2, FileText, Loader2, Send, ShieldCheck } from "lucide-react";
import { submitJobApplication } from "@/app/actions/job-applications";
import { MAX_JOB_APPLICATION_FILE_BYTES } from "@/lib/job-applications";

const EXTENSIONES_VALIDAS = ["pdf", "doc", "docx"];

const AREAS = [
  "Odontólogo General",
  "Asistente Dental",
  "Recepción - Secretaría",
  "Administración & Logística",
  "Laboratorio Dental - Fresado - Diseño - Maquillaje",
  "Inversor & Capital",
  "Cirugía Implantes",
  "Ortodoncia",
  "Especialista en Prótesis Fija - Rehabilitación",
  "Otros",
];

const inputClass = "w-full rounded-lg border border-oro/15 bg-carbon-soft/70 px-4 py-3 text-sm text-crema outline-none transition placeholder:text-crema/28 focus:border-oro/45";
const textareaClass = `${inputClass} min-h-28 resize-y`;
const labelClass = "text-xs font-semibold uppercase tracking-[0.18em] text-crema/48";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

export default function JobApplicationForm() {
  const [area, setArea] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const startedAt = useMemo(() => Date.now(), []);

  /**
   * Valida el archivo apenas se elige, antes de subir nada.
   *
   * Sin esto, un CV grande viaja entero para que recién la plataforma lo rechace
   * con un 413 —Vercel corta el cuerpo de la request en 4,5 MB— y el usuario ve
   * un error genérico después de esperar la subida completa.
   */
  function aceptarArchivo(archivo: File) {
    const extension = archivo.name.split(".").pop()?.toLowerCase() || "";

    if (!EXTENSIONES_VALIDAS.includes(extension)) {
      setError("El CV tiene que ser un PDF o un documento de Word.");
      setCvFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (archivo.size > MAX_JOB_APPLICATION_FILE_BYTES) {
      const pesa = (archivo.size / 1024 / 1024).toFixed(1);
      setError(`Tu CV pesa ${pesa} MB y el máximo es 4 MB. Probá exportarlo de nuevo comprimiendo las imágenes.`);
      setCvFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // El input real es el que viaja en el FormData: hay que sincronizarlo cuando
    // el archivo llegó por drag & drop y no por el selector.
    if (fileInputRef.current) {
      const transfer = new DataTransfer();
      transfer.items.add(archivo);
      fileInputRef.current.files = transfer.files;
    }

    setError("");
    setCvFile(archivo);
  }

  async function handleSubmit(formData: FormData) {
    if (!cvFile) {
      setError("Adjuntá tu CV para poder enviar la postulación.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const result = await submitJobApplication(formData);
      if (result.success) {
        setSuccess(true);
        return;
      }
      setError(result.error || "No pudimos recibir la postulación.");
    } catch {
      setError("No pudimos recibir la postulación. Intentá de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <section className="min-h-screen bg-carbon px-5 py-16 text-crema">
        <div className="mx-auto flex min-h-[72vh] max-w-2xl flex-col items-center justify-center text-center">
          <CheckCircle2 className="mb-6 h-14 w-14 text-oro" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-oro/85">Postulación recibida</p>
          <h1 className="font-manrope text-4xl font-light tracking-tight md:text-5xl">Gracias por querer sumarte a Team AM.</h1>
          <p className="mt-6 text-base leading-relaxed text-crema/62">
            Recibimos tus datos y tu CV. Si tu perfil coincide con una búsqueda activa, el equipo AM te va a contactar.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-carbon px-5 pb-16 pt-32 text-crema md:pb-24 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 grid gap-8 border-b border-oro/12 pb-10 md:grid-cols-[1fr_0.72fr] md:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-oro/80">
              <Briefcase size={14} /> Team AM
            </p>
            <h1 className="max-w-3xl font-manrope text-4xl font-light leading-tight tracking-tight md:text-6xl">
              Trabajá con nosotros.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-crema/65 md:text-lg">
              Completá tus datos, contanos por qué querés sumarte y adjuntá tu CV. Revisamos las postulaciones cuando abrimos búsquedas o detectamos un perfil compatible.
            </p>
          </div>
          <div className="rounded-lg border border-oro/14 bg-carbon-soft/70 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-oro" />
              <p className="text-sm leading-relaxed text-crema/58">
                Tu CV queda guardado en un espacio privado. Solo el equipo interno puede revisarlo para procesos de selección.
              </p>
            </div>
          </div>
        </header>

        <form action={handleSubmit} className="grid gap-8">
          <input type="hidden" name="form_started_at" value={startedAt} />
          <input className="hidden" tabIndex={-1} autoComplete="off" name="company" />

          <div className="grid gap-5 rounded-lg border border-oro/12 bg-carbon-soft/45 p-5 md:grid-cols-2 md:p-7">
            <Field label="Nombre y apellido *">
              <input required name="full_name" className={inputClass} placeholder="Ej. Laura Pérez" />
            </Field>
            <Field label="Email *">
              <input required type="email" name="email" className={inputClass} placeholder="tu@email.com" />
            </Field>
            <Field label="Área de postulación *">
              <select required name="area" value={area} onChange={(event) => setArea(event.target.value)} className={inputClass}>
                <option value="" className="bg-carbon">Seleccioná un área</option>
                {AREAS.map((item) => (
                  <option key={item} value={item} className="bg-carbon">
                    {item}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Ciudad y barrio *">
              <input required name="location" className={inputClass} placeholder="Ej. CABA, Palermo" />
            </Field>
            {area === "Otros" && (
              <Field label="Otra área *">
                <input required name="other_area" className={inputClass} placeholder="Contanos en qué área" />
              </Field>
            )}
            <Field label="Instagram *">
              <input required name="instagram_url" className={inputClass} placeholder="@usuario o URL" />
            </Field>
          </div>

          <div className="grid gap-5 rounded-lg border border-oro/12 bg-carbon-soft/45 p-5 md:p-7">
            <Field label="¿Cuál es tu experiencia previa en esta área? *">
              <textarea required name="experience" className={textareaClass} />
            </Field>
            <Field label="¿Cuáles son las principales funciones y responsabilidades en esta área según tu criterio? *">
              <textarea required name="area_responsibilities" className={textareaClass} />
            </Field>
            <Field label="¿Cómo trabajás en equipo? *">
              <textarea required name="teamwork_answer" className={textareaClass} />
            </Field>
            <Field label="¿Estás interesada/o en seguir aprendiendo y mejorando tus habilidades? *">
              <textarea required name="learning_interest" className={textareaClass} />
            </Field>
            <Field label="¿Cuáles son tus metas y aspiraciones a largo plazo? *">
              <textarea required name="long_term_goals" className={textareaClass} />
            </Field>
            <Field label="¿Qué aportarías al equipo? *">
              <textarea required name="team_contribution" className={textareaClass} />
            </Field>
            <Field label="¿Por qué deberíamos elegirte? *">
              <textarea required name="why_choose_you" className={textareaClass} />
            </Field>
          </div>

          <div className="grid gap-5 rounded-lg border border-oro/12 bg-carbon-soft/45 p-5 md:p-7">
            <Field label="Adjuntá tu CV *">
              <div
                role="button"
                tabIndex={0}
                aria-label="Adjuntar CV: arrastrá el archivo o hacé clic para elegirlo"
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    fileInputRef.current?.click();
                  }
                }}
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(event) => {
                  event.preventDefault();
                  setDragging(false);
                  const dropped = event.dataTransfer.files?.[0];
                  if (dropped) aceptarArchivo(dropped);
                }}
                className={`flex min-h-[168px] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border px-6 py-8 text-center transition-all ${
                  dragging
                    ? "border-solid border-oro bg-oro/12 scale-[1.01]"
                    : cvFile
                      ? "border-solid border-oro/55 bg-oro/6"
                      : "border-dashed border-oro/35 bg-oro/[0.03] hover:border-oro hover:bg-oro/[0.07]"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="pointer-events-none absolute h-px w-px opacity-0"
                  onChange={(event) => {
                    const elegido = event.target.files?.[0];
                    if (elegido) aceptarArchivo(elegido);
                  }}
                />
                {cvFile ? (
                  <>
                    <FileText size={22} className="text-oro" />
                    <strong className="break-all px-2 font-cormorant text-2xl font-normal text-crema">{cvFile.name}</strong>
                    <span className="text-xs text-crema/50">{(cvFile.size / 1024 / 1024).toFixed(2)} MB · listo para enviar</span>
                    <span className="mt-1 border-b border-oro/45 pb-[3px] text-[10px] uppercase tracking-[0.13em] text-oro">
                      Cambiar archivo
                    </span>
                  </>
                ) : (
                  <>
                    <span className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-oro/45 text-oro">
                      <FileText size={18} />
                    </span>
                    <strong className="font-cormorant text-2xl font-normal text-crema">Arrastrá tu CV acá</strong>
                    <span className="text-xs leading-relaxed text-crema/50">
                      o hacé clic para elegirlo · PDF o Word · hasta 4 MB
                    </span>
                  </>
                )}
              </div>
            </Field>

            <label className="flex items-start gap-3 text-sm leading-relaxed text-crema/58">
              <input required type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-oro/25 bg-carbon" />
              <span>
                Acepto que AM Estética Dental use los datos enviados exclusivamente para evaluar mi postulación y contactarme por procesos de selección.
              </span>
            </label>

            {error && (
              <p className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-oro px-7 py-4 text-sm font-semibold text-carbon transition hover:bg-oro-light disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
            >
              {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              Enviar postulación
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
