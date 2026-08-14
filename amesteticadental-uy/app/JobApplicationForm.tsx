"use client";

import { useMemo, useState } from "react";
import { JOBS_ENDPOINT } from "./site-data";

// Deben coincidir exactamente con JOB_APPLICATION_AREAS del sitio argentino: el
// servidor valida el área contra esa lista y rechaza cualquier valor que no esté.
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

const QUESTIONS = [
  ["experience", "¿Cuál es tu experiencia previa en esta área?"],
  ["area_responsibilities", "¿Cuáles son las principales funciones y responsabilidades del área, según tu criterio?"],
  ["teamwork_answer", "¿Cómo trabajás en equipo?"],
  ["learning_interest", "¿Te interesa seguir aprendiendo y mejorando tus habilidades?"],
  ["long_term_goals", "¿Cuáles son tus metas y aspiraciones a largo plazo?"],
  ["team_contribution", "¿Qué aportarías al equipo?"],
  ["why_choose_you", "¿Por qué deberíamos elegirte?"],
] as const;

export default function JobApplicationForm() {
  const [area, setArea] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");
  const [error, setError] = useState("");
  const startedAt = useMemo(() => Date.now(), []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const formData = new FormData(event.currentTarget);

    try {
      // Va al sitio argentino a propósito: la administración de postulaciones es
      // una sola y vive allá. La fila queda etiquetada como Uruguay del lado del
      // servidor, según el origen de la petición.
      const response = await fetch(JOBS_ENDPOINT, { method: "POST", body: formData });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "uy_job_application_submit", page_path: window.location.pathname });
        setStatus("ok");
        return;
      }
      setError(data.error || "No pudimos recibir la postulación. Intentá de nuevo.");
      setStatus("idle");
    } catch {
      setError("No pudimos conectar con el servidor. Revisá tu conexión e intentá de nuevo.");
      setStatus("idle");
    }
  }

  if (status === "ok") {
    return (
      <div className="jobs-success">
        <p className="eyebrow">POSTULACIÓN RECIBIDA</p>
        <h2>
          Gracias por querer
          <br />
          <em>sumarte al equipo.</em>
        </h2>
        <p>
          Recibimos tus datos y tu CV. Si tu perfil coincide con una de las búsquedas que abrimos para la sede de
          Carrasco, el equipo AM te va a contactar.
        </p>
      </div>
    );
  }

  return (
    <form className="jobs-form" onSubmit={handleSubmit}>
      <input type="hidden" name="form_started_at" value={startedAt} />
      {/* Trampa para bots: un humano no ve este campo, así que no lo completa. */}
      <input className="jobs-honeypot" tabIndex={-1} autoComplete="off" name="company" aria-hidden="true" />

      <fieldset>
        <legend>Tus datos</legend>
        <div className="jobs-grid-2">
          <label>
            <span>Nombre y apellido *</span>
            <input required name="full_name" placeholder="Ej. Laura Pérez" />
          </label>
          <label>
            <span>Email *</span>
            <input required type="email" name="email" placeholder="tu@email.com" />
          </label>
          <label>
            <span>Área de postulación *</span>
            <select required name="area" value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">Seleccioná un área</option>
              {AREAS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Ciudad y barrio *</span>
            <input required name="location" placeholder="Ej. Carrasco, Montevideo" />
          </label>
          {area === "Otros" ? (
            <label>
              <span>¿Qué área? *</span>
              <input required name="other_area" placeholder="Contanos en qué área" />
            </label>
          ) : null}
          <label>
            <span>Instagram *</span>
            <input required name="instagram_url" placeholder="@usuario o URL" />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Contanos de vos</legend>
        {QUESTIONS.map(([name, label]) => (
          <label key={name}>
            <span>{label} *</span>
            <textarea required name={name} rows={3} />
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Tu CV</legend>
        <label>
          <span>Adjuntá tu CV * (PDF o Word, hasta 10 MB)</span>
          <input required type="file" name="cv" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
        </label>

        <label className="jobs-consent">
          <input required type="checkbox" name="consent" />
          <span>
            Acepto que AM Estética Dental use los datos enviados exclusivamente para evaluar mi postulación y
            contactarme por procesos de selección.
          </span>
        </label>

        {error ? <p className="jobs-error">{error}</p> : null}

        <button type="submit" className="button button-gold" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar postulación"}
        </button>
        <p className="jobs-note">
          Tu CV queda guardado en un espacio privado. Solo el equipo interno de AM puede revisarlo.
        </p>
      </fieldset>
    </form>
  );
}
