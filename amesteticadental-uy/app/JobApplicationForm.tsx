"use client";

import { useMemo, useRef, useState } from "react";
import { JOBS_ENDPOINT } from "./site-data";

/**
 * Tope real de un CV, en bytes.
 *
 * Vercel corta el cuerpo de una request en 4,5 MB antes de que llegue al servidor,
 * y responde 413 sin cabeceras CORS. Desde este dominio el navegador no puede leer
 * esa respuesta, así que el fetch falla como si se hubiera caído la red: el usuario
 * veía "revisá tu conexión" cuando el problema era el tamaño del archivo.
 * Por eso el tamaño se valida acá, antes de subir nada.
 */
const MAX_CV_BYTES = 4 * 1024 * 1024;
const EXTENSIONES_VALIDAS = ["pdf", "doc", "docx"];

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
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const startedAt = useMemo(() => Date.now(), []);

  /** Valida el archivo apenas se elige o se suelta, para no hacer perder una subida entera. */
  function aceptarArchivo(archivo: File) {
    const extension = archivo.name.split(".").pop()?.toLowerCase() || "";

    if (!EXTENSIONES_VALIDAS.includes(extension)) {
      setError("El CV tiene que ser un PDF o un documento de Word.");
      setCvFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (archivo.size > MAX_CV_BYTES) {
      const pesa = (archivo.size / 1024 / 1024).toFixed(1);
      setError(`Tu CV pesa ${pesa} MB y el máximo es 4 MB. Probá exportarlo de nuevo comprimiendo las imágenes.`);
      setCvFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // El input real es el que viaja en el FormData, así que hay que sincronizarlo
    // cuando el archivo llegó por drag & drop y no por el selector.
    if (fileInputRef.current) {
      const transfer = new DataTransfer();
      transfer.items.add(archivo);
      fileInputRef.current.files = transfer.files;
    }

    setError("");
    setCvFile(archivo);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!cvFile) {
      setError("Adjuntá tu CV para poder enviar la postulación.");
      return;
    }

    setStatus("sending");
    setError("");

    const formData = new FormData(event.currentTarget);

    try {
      // Va a una ruta de ESTE dominio, no directo a Argentina: el salto entre
      // sitios lo hace el servidor. Así ningún navegador ni extensión lo bloquea.
      const response = await fetch(JOBS_ENDPOINT, { method: "POST", body: formData });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "uy_job_application_submit", page_path: window.location.pathname });
        setStatus("ok");
        return;
      }
      // 413 lo devuelve la infraestructura, no el servidor: llega sin JSON y sin
      // cabeceras CORS. Se nombra aparte para no reportar un archivo grande como
      // un problema de conexión, que fue exactamente lo que confundía antes.
      if (response.status === 413) {
        setError("El archivo es demasiado grande para enviarlo. Exportá el CV comprimiendo las imágenes y probá otra vez.");
        setStatus("idle");
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
        <div
          className={`jobs-drop${dragging ? " is-dragging" : ""}${cvFile ? " has-file" : ""}`}
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
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              fileInputRef.current?.click();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Adjuntar CV: arrastrá el archivo o hacé clic para elegirlo"
        >
          <input
            ref={fileInputRef}
            type="file"
            name="cv"
            className="jobs-file-input"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(event) => {
              const elegido = event.target.files?.[0];
              if (elegido) aceptarArchivo(elegido);
            }}
          />
          {cvFile ? (
            <>
              <strong className="jobs-drop-file">{cvFile.name}</strong>
              <span className="jobs-drop-meta">{(cvFile.size / 1024 / 1024).toFixed(2)} MB · listo para enviar</span>
              <span className="jobs-drop-change">Cambiar archivo</span>
            </>
          ) : (
            <>
              <span className="jobs-drop-icon" aria-hidden="true">↑</span>
              <strong>Arrastrá tu CV acá</strong>
              <span className="jobs-drop-meta">o hacé clic para elegirlo · PDF o Word · hasta 4 MB</span>
            </>
          )}
        </div>

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
