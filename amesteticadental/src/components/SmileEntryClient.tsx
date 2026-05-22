"use client";

import { ChangeEvent, DragEvent, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ImagePlus,
  Loader2,
  MessageCircle,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import { getUTMs, submitLead } from "@/lib/leads";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_MB = 10;
const WHATSAPP_NUMBER = "541170219298";

type SmileResult = {
  beforeDataUrl: string;
  afterDataUrl: string;
};

function buildWhatsappUrl(name: string, email: string, whatsapp: string) {
  const message = [
    "Hola AM Estética Dental, probé el simulador de sonrisa con IA en la web.",
    name ? `Mi nombre es ${name}.` : null,
    email ? `Mi email es ${email}.` : null,
    whatsapp ? `Mi WhatsApp es ${whatsapp}.` : null,
    "Quiero una evaluación real para mi caso.",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
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
      if (!ctx) {
        reject(new Error("No se pudo preparar la imagen."));
        return;
      }
      ctx.drawImage(image, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("No se pudo comprimir la imagen."));
            return;
          }
          const reader = new FileReader();
          reader.onload = () => {
            const dataUrl = reader.result as string;
            resolve({
              base64: dataUrl.split(",")[1],
              dataUrl,
              mimeType: "image/jpeg",
            });
          };
          reader.onerror = () => reject(new Error("No se pudo leer la imagen."));
          reader.readAsDataURL(blob);
        },
        "image/jpeg",
        0.9,
      );
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("No pudimos abrir esa foto."));
    };
    image.src = url;
  });
}

export default function SmileEntryClient() {
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

  const whatsappUrl = useMemo(
    () => buildWhatsappUrl(fullName.trim(), email.trim(), whatsapp.trim()),
    [fullName, email, whatsapp],
  );

  function validateFile(nextFile: File) {
    if (!ACCEPTED_TYPES.includes(nextFile.type)) return "Subí una foto JPG, PNG o WebP.";
    if (nextFile.size > MAX_FILE_MB * 1024 * 1024) return `La foto no puede pesar más de ${MAX_FILE_MB} MB.`;
    return null;
  }

  function pickFile(nextFile?: File | null) {
    if (!nextFile) return;
    const validation = validateFile(nextFile);
    if (validation) {
      setError(validation);
      return;
    }
    setFile(nextFile);
    setResult(null);
    setError(null);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    pickFile(event.target.files?.[0]);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    pickFile(event.dataTransfer.files?.[0]);
  }

  async function generateSmile() {
    setError(null);

    if (!file) {
      setError("Subí una foto de rostro para generar la simulación.");
      return;
    }

    if (!accepted) {
      setError("Aceptá que esto es una simulación orientativa antes de continuar.");
      return;
    }

    if (fullName.trim().length < 2) {
      setError("Ingresá tu nombre para que podamos identificar la consulta.");
      return;
    }

    if (!email.trim() && !whatsapp.trim()) {
      setError("Dejanos un email o WhatsApp para contactarte si querés avanzar.");
      return;
    }

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

      if (!lead.success) {
        setError(lead.error || "No pudimos guardar tus datos.");
        return;
      }

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "smile_simulator_lead",
          event_category: "conversion",
          event_label: "simulador_sonrisa_ia",
        });
        if (window.fbq) {
          window.fbq("track", "Lead", {
            content_name: "Simulador sonrisa IA",
            content_category: "diseno_sonrisa",
          });
        }
      }

      const response = await fetch("/api/smile-design/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: compressed.base64,
          mimeType: compressed.mimeType,
        }),
      });
      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "No pudimos generar la simulación.");
      }

      setResult({
        beforeDataUrl: compressed.dataUrl,
        afterDataUrl: `data:${data.mimeType};base64,${data.imageBase64}`,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al procesar la imagen.");
    } finally {
      setProcessing(false);
    }
  }

  return (
    <div className="min-h-screen bg-carbon text-crema">
      <section className="relative min-h-screen overflow-hidden px-4 pb-14 pt-28 md:pt-32">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-22"
          src="/videos/generate-3d-veneer.webm"
          poster="/videos/generate-3d-veneer-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,0.98)_0%,rgba(13,13,13,0.88)_42%,rgba(13,13,13,0.62)_100%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <Link href="/" className="mb-8 inline-flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="AM Estética Dental" className="h-9 w-auto" />
              </Link>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-oro/25 bg-carbon/45 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-oro backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Entrada digital AM
              </div>

              <h1 className="max-w-3xl text-5xl font-light leading-[0.96] tracking-tight text-crema md:text-7xl">
                Probá tu{" "}
                <span className="font-cormorant italic text-oro">diseño de sonrisa</span>{" "}
                antes de venir.
              </h1>
              <p className="mt-6 max-w-xl text-base font-light leading-8 text-crema/68 md:text-lg">
                Subí una foto frontal y generamos una simulación orientativa con IA. Si sos paciente,
                podés pedir una evaluación. Si sos colega, también podés explorar formación y cursos del Dr. Ariel Merino.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="#simulador"
                className="group rounded-2xl border border-oro/25 bg-oro px-5 py-5 text-carbon transition-transform hover:-translate-y-1"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-carbon text-oro">
                  <ImagePlus className="h-5 w-5" />
                </span>
                <span className="block text-lg font-semibold">Soy paciente</span>
                <span className="mt-1 block text-sm text-carbon/70">Quiero ver una simulación de mi sonrisa.</span>
              </a>
              <a
                href="#colegas"
                className="group rounded-2xl border border-oro/20 bg-carbon/65 px-5 py-5 text-crema backdrop-blur transition-transform hover:-translate-y-1 hover:border-oro/45"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-oro/12 text-oro">
                  <BookOpen className="h-5 w-5" />
                </span>
                <span className="block text-lg font-semibold">Soy colega</span>
                <span className="mt-1 block text-sm text-crema/55">Quiero ver cursos, casos y formación.</span>
              </a>
            </div>
          </div>

          <div
            id="simulador"
            className="rounded-[2rem] border border-oro/15 bg-carbon/88 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            <div className="grid gap-4 rounded-[1.5rem] border border-oro/10 bg-black/20 p-4 md:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-crema/52">
                    Nombre
                  </span>
                  <input
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    className="w-full rounded-xl border border-oro/16 bg-carbon px-4 py-3 text-sm text-crema outline-none transition-colors placeholder:text-crema/25 focus:border-oro/60"
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-crema/52">
                    Email
                  </span>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-xl border border-oro/16 bg-carbon px-4 py-3 text-sm text-crema outline-none transition-colors placeholder:text-crema/25 focus:border-oro/60"
                    placeholder="tu@email.com"
                    type="email"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-crema/52">
                  WhatsApp
                </span>
                <input
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(event.target.value)}
                  className="w-full rounded-xl border border-oro/16 bg-carbon px-4 py-3 text-sm text-crema outline-none transition-colors placeholder:text-crema/25 focus:border-oro/60"
                  placeholder="+54 9 11..."
                  type="tel"
                  autoComplete="tel"
                />
              </label>

              {!result ? (
                <div
                  onDragOver={(event) => {
                    event.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={handleDrop}
                  className={[
                    "flex min-h-[360px] flex-col items-center justify-center rounded-2xl border-2 border-dashed px-5 text-center transition-colors",
                    dragging ? "border-oro bg-oro/10" : "border-oro/18 bg-carbon-soft/72",
                  ].join(" ")}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={handleInputChange}
                  />

                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-oro/12 text-oro">
                    {file ? <ImagePlus className="h-8 w-8" /> : <UploadCloud className="h-8 w-8" />}
                  </div>

                  <h2 className="text-2xl font-light text-crema md:text-3xl">
                    {file ? file.name : "Arrastrá una foto de rostro"}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-crema/48">
                    Mejor si es frontal, nítida, con buena luz y sonrisa visible. La foto se usa solo para generar esta simulación.
                  </p>

                  <label className="mt-5 flex max-w-md items-start gap-3 text-left text-xs leading-5 text-crema/48">
                    <input
                      type="checkbox"
                      checked={accepted}
                      onChange={(event) => setAccepted(event.target.checked)}
                      className="mt-1 h-4 w-4 accent-oro"
                    />
                    <span>
                      Acepto que esta imagen es una simulación estética generada por IA y que los resultados reales pueden variar.
                    </span>
                  </label>

                  {error ? (
                    <div className="mt-4 flex max-w-md items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-left text-sm text-red-200">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => inputRef.current?.click()}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-oro/28 px-5 py-3 text-sm font-semibold text-crema transition-colors hover:border-oro/55"
                    >
                      <UploadCloud className="h-4 w-4" />
                      Elegir foto
                    </button>
                    <button
                      type="button"
                      onClick={generateSmile}
                      disabled={processing || !file}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-oro px-5 py-3 text-sm font-semibold text-carbon transition-colors hover:bg-oro-light disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                      Generar simulación
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="grid overflow-hidden rounded-2xl border border-oro/12 bg-black md:grid-cols-2">
                    <figure className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={result.beforeDataUrl} alt="Foto original antes del diseño de sonrisa" className="h-full min-h-[360px] w-full object-cover" />
                      <figcaption className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-crema">
                        Antes
                      </figcaption>
                    </figure>
                    <figure className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={result.afterDataUrl} alt="Simulación después del diseño de sonrisa" className="h-full min-h-[360px] w-full object-cover" />
                      <figcaption className="absolute left-3 top-3 rounded-full bg-oro px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-carbon">
                        Después IA
                      </figcaption>
                    </figure>
                  </div>

                  {error ? (
                    <div className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  ) : null}

                  <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
                    <div className="flex items-start gap-2 text-sm text-crema/58">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-oro" />
                      <p>Simulación lista. Para saber qué se puede lograr clínicamente, pedí una evaluación real.</p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-oro px-5 py-3 text-sm font-semibold text-carbon transition-colors hover:bg-oro-light"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Enviar por WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setFile(null);
                          setResult(null);
                          setError(null);
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-oro/24 px-5 py-3 text-sm font-semibold text-crema transition-colors hover:border-oro/50"
                      >
                        Otra foto
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="colegas" className="border-t border-oro/10 bg-carbon-soft px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-start">
          <div>
            <span className="mb-5 block text-xs font-black uppercase tracking-[0.34em] text-oro">
              Para colegas
            </span>
            <h2 className="text-4xl font-light leading-tight text-crema md:text-5xl">
              Formación en estética dental, carillas y diseño de sonrisa.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Casos reales", "Antes y después documentados con criterios clínicos y estéticos.", "/casos"],
              ["Artículos técnicos", "Contenido sobre carillas, materiales, planificación y límites clínicos.", "/blog"],
              ["Cursos y mentorías", "Consultá disponibilidad de cursos, observerships o formación personalizada.", `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent("Hola Dr. Ariel Merino, soy colega y quiero información sobre cursos o formación en estética dental.")}`],
            ].map(([title, copy, href]) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-2xl border border-oro/12 bg-carbon p-6 transition-colors hover:border-oro/35"
              >
                <h3 className="mb-3 text-xl font-light text-crema">{title}</h3>
                <p className="text-sm leading-6 text-crema/55">{copy}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
