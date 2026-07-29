"use client";

import { ChangeEvent, DragEvent, PointerEvent, useRef, useState, useMemo } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Download,
  Loader2,
  Mail,
  MessageCircle,
  MoveHorizontal,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import { getUTMs, submitLead } from "@/lib/leads";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_MB = 10;
const WHATSAPP_NUMBER = "5491170219298";

// Caso real AM Estética Dental para el demo
const DEMO_BEFORE =
  "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-02-am-estetica-dental";
const DEMO_AFTER =
  "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-01-am-estetica-dental";

type SmileResult = {
  beforeDataUrl: string;
  afterDataUrl: string;
};

type SimCopy = (typeof SIM_COPY)["es"] | (typeof SIM_COPY)["en"];

function buildWhatsappUrl(name: string, email: string, whatsapp: string, t: SimCopy) {
  const message = [
    t.waText,
    name ? `Mi nombre es ${name}.` : null,
    email ? `Mi email es ${email}.` : null,
    whatsapp ? `Mi WhatsApp es ${whatsapp}.` : null,
    t.emailBody,
  ]
    .filter(Boolean)
    .join("\n");
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

function buildEmailUrl(name: string, email: string, whatsapp: string, t: SimCopy) {
  const subject = t.emailSubject;
  const body = [
    t.waText,
    "",
    name ? `Nombre: ${name}` : null,
    email ? `Email: ${email}` : null,
    whatsapp ? `WhatsApp: ${whatsapp}` : null,
    "",
    t.emailBody,
    "",
    t.emailNote,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:info@amesteticadental.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function compressFile(file: File): Promise<{ base64: string; dataUrl: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      const maxWidth = 1500;
      const scale = Math.min(1, maxWidth / image.naturalWidth);
      const width = Math.round(image.naturalWidth * scale);
      const height = Math.round(image.naturalHeight * scale);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) { reject(new Error("No se pudo preparar la imagen.")); return; }
      ctx.drawImage(image, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (!blob) { reject(new Error("No se pudo comprimir la imagen.")); return; }
          const reader = new FileReader();
          reader.onload = () => {
            const dataUrl = reader.result as string;
            resolve({ base64: dataUrl.split(",")[1], dataUrl, mimeType: "image/jpeg" });
          };
          reader.onerror = () => reject(new Error("No se pudo leer la imagen."));
          reader.readAsDataURL(blob);
        },
        "image/jpeg",
        0.9,
      );
    };
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error("IMAGE_OPEN_FAILED")); };
    image.src = url;
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("No pudimos preparar la descarga."));
    image.src = src;
  });
}

async function downloadComparison(result: SmileResult) {
  const [before, after] = await Promise.all([loadImage(result.beforeDataUrl), loadImage(result.afterDataUrl)]);
  const imageWidth = 900;
  const imageHeight = Math.round(imageWidth * 1.18);
  const labelHeight = 76;
  const canvas = document.createElement("canvas");
  canvas.width = imageWidth * 2;
  canvas.height = imageHeight + labelHeight;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("No pudimos crear la imagen para descargar.");
  const ctx = context;
  ctx.fillStyle = "#0D0D0D";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  function drawCover(img: HTMLImageElement, x: number) {
    const scale = Math.max(imageWidth / img.naturalWidth, imageHeight / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    ctx.drawImage(img, x + (imageWidth - w) / 2, (imageHeight - h) / 2, w, h);
  }
  drawCover(before, 0);
  drawCover(after, imageWidth);
  ctx.fillStyle = "rgba(13,13,13,0.72)";
  ctx.fillRect(0, imageHeight, canvas.width, labelHeight);
  ctx.fillStyle = "#f2b90d";
  ctx.font = "700 28px Arial";
  ctx.fillText("Antes", 42, imageHeight + 48);
  ctx.fillText("Después IA", imageWidth + 42, imageHeight + 48);
  ctx.fillStyle = "#F2F0E9";
  ctx.font = "400 20px Arial";
  ctx.fillText("AM Estética Dental · Simulación orientativa", imageWidth - 260, imageHeight + 48);
  const anchor = document.createElement("a");
  anchor.href = canvas.toDataURL("image/jpeg", 0.92);
  anchor.download = "am-estetica-dental-simulacion-sonrisa.jpg";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

// ─── Slider antes/después reutilizable ───────────────────────────────────────
function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Antes",
  afterAlt = "Después",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);

  function updatePosition(event: PointerEvent<HTMLDivElement>) {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
  }

  return (
    <div
      ref={sliderRef}
      className="relative touch-none select-none overflow-hidden rounded-2xl border border-oro/12 bg-black"
      style={{ minHeight: 380 }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); updatePosition(e); }}
      onPointerMove={(e) => { if (e.buttons !== 1) return; updatePosition(e); }}
      role="slider"
      aria-label="Comparador antes y después"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((c) => Math.max(4, c - 4));
        if (e.key === "ArrowRight") setPosition((c) => Math.min(96, c + 4));
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={beforeSrc} alt={beforeAlt} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={afterSrc} alt={afterAlt} className="h-full w-full object-cover" draggable={false} />
      </div>

      <div className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-crema">
        Después IA
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-crema">
        Antes
      </div>

      <div
        className="absolute inset-y-0 z-10 w-px bg-oro shadow-[0_0_28px_rgba(242,185,13,0.7)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-oro bg-carbon text-oro shadow-2xl">
          <MoveHorizontal className="h-6 w-6" />
        </div>
      </div>

      {/* Hint de arrastre — se oculta después de la primera interacción */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-crema/70 backdrop-blur">
        ← Deslizá para comparar →
      </div>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

const SIM_COPY = {
  es: {
    eyebrow: "Simulador con IA · AM Estética Dental",
    lead: "Subí una foto y generamos una simulación orientativa con IA. Gratis, en segundos.",
    exampleLabel: "Ejemplo real · Carillas cerámicas AM Estética Dental",
    exampleNote: "Caso clínico real. La simulación IA sobre tu foto puede variar según tus características faciales.",
    tryNow: "Ahora probalo con tu foto",
    dropzone: "Arrastrá o elegí una foto de tu rostro",
    dropzoneHint: "Frontal, nítida, con buena luz y sonrisa visible.",
    yourPhoto: "Tu foto",
    namePh: "Tu nombre",
    emailPh: "tu@email.com",
    phonePh: "+54 9 11...",
    consent: "Acepto el procesamiento temporal de la foto y entiendo que esta imagen es orientativa: no constituye un diagnóstico ni una promesa de resultado. La foto se envía a Google Gemini y AM no la guarda.",
    generate: "Generar mi simulación",
    generating: "Generando simulación…",
    resultNote: "Simulación lista. Para saber qué se puede lograr clínicamente en tu caso, pedí una evaluación real.",
    wa: "Consultar por WhatsApp",
    email: "Enviar por email",
    download: "Descargar imagen",
    before: "Antes",
    after: "Después IA",
    beforeAlt: "Tu foto original antes del diseño de sonrisa",
    afterAlt: "Tu simulación IA de diseño de sonrisa",
    comparator: "Comparador antes y después",
    errNoPhoto: "Subí una foto de rostro para generar la simulación.",
    errFormat: "Subí una foto JPG, PNG o WebP.",
    errConsent: "Aceptá que esto es una simulación orientativa antes de continuar.",
    errName: "Ingresá tu nombre para que podamos identificar la consulta.",
    errOpen: "No pudimos abrir esa foto.",
    errGenerate: "No pudimos generar la simulación.",
    errDownload: "No pudimos descargar la imagen.",
    waText: "Hola AM Estética Dental, probé el simulador de diseño de sonrisa con IA.",
    emailSubject: "Consulta por simulador de diseño de sonrisa",
    emailBody: "Quiero una evaluación real para mi caso.",
    emailNote: "Nota: puedo adjuntar la imagen descargada del simulador a este email.",
  },
  en: {
    eyebrow: "AI Simulator · AM Estética Dental",
    lead: "Upload a photo and we generate an indicative AI simulation. Free, in seconds.",
    exampleLabel: "Real example · Ceramic veneers at AM Estética Dental",
    exampleNote: "A real clinical case. The AI simulation on your own photo may differ depending on your facial characteristics.",
    tryNow: "Now try it with your photo",
    dropzone: "Drag or choose a photo of your face",
    dropzoneHint: "Front-facing, sharp, well lit and with your smile visible.",
    yourPhoto: "Your photo",
    namePh: "Your name",
    emailPh: "you@email.com",
    phonePh: "+1 555...",
    consent: "I accept the temporary processing of my photo and understand that this image is indicative only: it is not a diagnosis nor a promise of result. The photo is sent to Google Gemini and AM does not store it.",
    generate: "Generate my simulation",
    generating: "Generating simulation…",
    resultNote: "Your simulation is ready. To find out what can actually be achieved clinically in your case, request a real assessment.",
    wa: "Ask on WhatsApp",
    email: "Send by email",
    download: "Download image",
    before: "Before",
    after: "After (AI)",
    beforeAlt: "Your original photo before smile design",
    afterAlt: "Your AI smile design simulation",
    comparator: "Before and after comparison slider",
    errNoPhoto: "Upload a photo of your face to generate the simulation.",
    errFormat: "Upload a JPG, PNG or WebP photo.",
    errConsent: "Please accept that this is an indicative simulation before continuing.",
    errName: "Enter your name so we can identify your enquiry.",
    errOpen: "We could not open that photo.",
    errGenerate: "We could not generate the simulation.",
    errDownload: "We could not download the image.",
    waText: "Hi AM Estética Dental, I tried the AI smile design simulator.",
    emailSubject: "Enquiry from the smile design simulator",
    emailBody: "I'd like a real assessment for my case.",
    emailNote: "Note: I can attach the image downloaded from the simulator to this email.",
  },
} as const;


export default function SmileEntryClient({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = SIM_COPY[lang];
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<SmileResult | null>(null);

  const whatsappUrl = useMemo(() => buildWhatsappUrl(fullName.trim(), email.trim(), whatsapp.trim(), t), [fullName, email, whatsapp, t]);
  const emailUrl = useMemo(() => buildEmailUrl(fullName.trim(), email.trim(), whatsapp.trim(), t), [fullName, email, whatsapp, t]);

  function validateFile(nextFile: File) {
    if (!ACCEPTED_TYPES.includes(nextFile.type)) return t.errFormat;
    if (nextFile.size > MAX_FILE_MB * 1024 * 1024) return `La foto no puede pesar más de ${MAX_FILE_MB} MB.`;
    return null;
  }

  function pickFile(nextFile?: File | null) {
    if (!nextFile) return;
    const validation = validateFile(nextFile);
    if (validation) { setError(validation); return; }
    setFile(nextFile);
    setResult(null);
    setError(null);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    pickFile(event.dataTransfer.files?.[0]);
  }

  async function generateSmile() {
    setError(null);
    if (!file) { setError(t.errNoPhoto); return; }
    if (!accepted) { setError(t.errConsent); return; }
    if (fullName.trim().length < 2) { setError(t.errName); return; }
    if (!email.trim() && !whatsapp.trim()) { setError("Dejanos un email o WhatsApp para contactarte si querés avanzar."); return; }

    setProcessing(true);
    try {
      const compressed = await compressFile(file);
      const lead = await submitLead({
        fullName,
        email,
        whatsapp,
        interestTags: ["diseno_sonrisa", "carillas", "simulador_ia"],
        message: "Lead generado desde el simulador público de sonrisa con IA.",
        metadata: {
          ...getUTMs(),
          source: "simulador_sonrisa_web",
          page: "/sonrisa",
          photoName: file.name,
          consent: true,
          referrer: typeof document !== "undefined" ? document.referrer : null,
        },
      });

      if (!lead.success) { setError(lead.error || "No pudimos guardar tus datos."); return; }

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "smile_simulator_lead", event_category: "conversion", event_label: "simulador_sonrisa_ia" });
        if (window.fbq) window.fbq("track", "Lead", { content_name: "Simulador sonrisa IA", content_category: "diseno_sonrisa" });
      }

      const response = await fetch("/api/smile-design/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: compressed.base64, mimeType: compressed.mimeType }),
      });
      const data = await response.json();
      if (!response.ok || data.error) throw new Error(data.error || t.errGenerate);

      setResult({ beforeDataUrl: compressed.dataUrl, afterDataUrl: `data:${data.mimeType};base64,${data.imageBase64}` });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al procesar la imagen.");
    } finally {
      setProcessing(false);
    }
  }

  return (
    <div className="min-h-screen bg-carbon text-crema">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 md:pt-32">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-22"
          src="/videos/generate-3d-veneer.webm"
          poster="/videos/generate-3d-veneer-poster.jpg"
          autoPlay muted loop playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.96)_0%,rgba(13,13,13,0.80)_100%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <Link href="/" className="mb-10 inline-flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="AM Estética Dental" className="h-9 w-auto" />
          </Link>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-oro/25 bg-carbon/45 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-oro backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {t.eyebrow}
          </div>

          <h1 className="text-5xl font-light leading-[0.96] tracking-tight text-crema md:text-7xl">
            Probá tu{" "}
            <span className="font-cormorant italic text-oro">diseño de sonrisa</span>{" "}
            antes de venir.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-8 text-crema/68 md:text-lg">
            {t.lead}
          </p>
        </div>
      </section>

      {/* ── DEMO ANTES / DESPUÉS ─────────────────────────────────────────────── */}
      <section className="relative px-4 pb-0 pt-12">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-center text-[11px] font-black uppercase tracking-[0.28em] text-oro/70">
            {t.exampleLabel}
          </p>
          <BeforeAfterSlider
            beforeSrc={DEMO_BEFORE}
            afterSrc={DEMO_AFTER}
            beforeAlt="Antes de carillas cerámicas — AM Estética Dental"
            afterAlt="Después de carillas cerámicas — AM Estética Dental"
          />
          <p className="mt-3 text-center text-xs text-crema/35">
            {t.exampleNote}
          </p>
        </div>
      </section>

      {/* ── SIMULADOR ────────────────────────────────────────────────────────── */}
      <section className="px-4 pb-20 pt-14" id="simulador">
        <div className="mx-auto max-w-2xl">
          <p className="mb-6 text-center text-[11px] font-black uppercase tracking-[0.28em] text-oro/70">
            {t.tryNow}
          </p>

          {!result ? (
            <div className="rounded-[2rem] border border-oro/15 bg-carbon/88 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">

              {/* Drop zone — protagonista */}
              <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => !file && inputRef.current?.click()}
                className={[
                  "flex min-h-[420px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 text-center transition-colors md:min-h-[500px]",
                  dragging ? "border-oro bg-oro/10" : file ? "border-oro/40 bg-carbon/60" : "border-oro/22 bg-carbon-soft/60 hover:border-oro/40",
                ].join(" ")}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => pickFile(e.target.files?.[0])}
                />

                {file ? (
                  // Preview de la foto seleccionada
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={URL.createObjectURL(file)}
                      alt={t.yourPhoto}
                      className="mb-5 h-48 w-auto rounded-xl object-cover shadow-lg"
                    />
                    <p className="text-lg font-light text-crema">{file.name}</p>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}
                      className="mt-3 text-xs text-crema/45 underline underline-offset-2 hover:text-crema/70"
                    >
                      Cambiar foto
                    </button>
                  </>
                ) : (
                  <>
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-oro/12 text-oro">
                      <UploadCloud className="h-10 w-10" />
                    </div>
                    <h2 className="text-2xl font-light text-crema md:text-3xl">
                      {t.dropzone}
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-crema/48">
                      {t.dropzoneHint}
                      JPG, PNG o WebP · máx. {MAX_FILE_MB} MB
                    </p>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}
                      className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-oro px-8 py-3.5 text-sm font-semibold text-carbon transition-colors hover:bg-oro-light"
                    >
                      <UploadCloud className="h-4 w-4" />
                      Elegir foto
                    </button>
                  </>
                )}
              </div>

              {/* Campos de contacto — debajo del drop zone */}
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-crema/45">
                    Nombre *
                  </span>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-oro/16 bg-carbon px-4 py-3 text-sm text-crema outline-none transition-colors placeholder:text-crema/25 focus:border-oro/60"
                    placeholder={t.namePh}
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-crema/45">
                    Email
                  </span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-oro/16 bg-carbon px-4 py-3 text-sm text-crema outline-none transition-colors placeholder:text-crema/25 focus:border-oro/60"
                    placeholder={t.emailPh}
                    type="email"
                    autoComplete="email"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-crema/45">
                    WhatsApp
                  </span>
                  <input
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full rounded-xl border border-oro/16 bg-carbon px-4 py-3 text-sm text-crema outline-none transition-colors placeholder:text-crema/25 focus:border-oro/60"
                    placeholder={t.phonePh}
                    type="tel"
                    autoComplete="tel"
                  />
                </label>
              </div>

              {/* Consentimiento + error + botón */}
              <label className="mt-4 flex items-start gap-3 text-left text-xs leading-5 text-crema/45">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-oro"
                />
                <span>
                  {t.consent}
                </span>
              </label>

              {error ? (
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              ) : null}

              <button
                type="button"
                onClick={generateSmile}
                disabled={processing || !file}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-oro py-4 text-base font-semibold text-carbon transition-colors hover:bg-oro-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                {processing ? <Loader2 className="h-5 w-5 animate-spin" /> : <Sparkles className="h-5 w-5" />}
                {processing ? t.generating : t.generate}
              </button>
            </div>

          ) : (
            /* ── RESULTADO ──────────────────────────────────────────────────── */
            <div className="grid gap-4">
              <BeforeAfterSlider
                beforeSrc={result.beforeDataUrl}
                afterSrc={result.afterDataUrl}
                beforeAlt={t.beforeAlt}
                afterAlt={t.afterAlt}
              />

              {error ? (
                <div className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              ) : null}

              <div className="rounded-2xl border border-oro/12 bg-carbon/80 p-4">
                <div className="mb-4 flex items-start gap-2 text-sm text-crema/60">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-oro" />
                  <p>
                    {t.resultNote}
                  </p>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-oro px-5 py-3 text-sm font-semibold text-carbon transition-colors hover:bg-oro-light"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t.wa}
                  </a>
                  <a
                    href={emailUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-oro/24 px-5 py-3 text-sm font-semibold text-crema transition-colors hover:border-oro/50"
                  >
                    <Mail className="h-4 w-4" />
                    {t.email}
                  </a>
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await downloadComparison(result);
                        if (typeof window !== "undefined") {
                          window.dataLayer = window.dataLayer || [];
                          window.dataLayer.push({ event: "smile_simulator_download", event_category: "engagement", event_label: "comparacion_antes_despues" });
                        }
                      } catch (downloadError) {
                        setError(downloadError instanceof Error ? downloadError.message : t.errDownload);
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-oro/24 px-5 py-3 text-sm font-semibold text-crema transition-colors hover:border-oro/50"
                  >
                    <Download className="h-4 w-4" />
                    {t.download}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => { setFile(null); setResult(null); setError(null); }}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-crema/38 hover:text-crema/60"
                >
                  Probar con otra foto <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
