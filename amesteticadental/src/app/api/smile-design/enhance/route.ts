import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import {
  dentroDelLimite,
  esOrigenPropio,
  ipDe,
  leerCuerpoConTope,
  verificarTurnstile,
} from "@/lib/api-guard";

const MAX_REQUEST_BYTES = 7 * 1024 * 1024;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
// Cada generación cuesta plata (Gemini 2.5 Flash Image). Un visitante real prueba
// una o dos fotos; esto deja margen para reintentos sin habilitar abuso.
const LIMITES_POR_IP = [
  { limite: 3, segundos: 60 },
  { limite: 10, segundos: 60 * 60 },
  { limite: 30, segundos: 24 * 60 * 60 },
];
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function getAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY not configured");
  return new GoogleGenAI({ apiKey });
}

export async function POST(req: NextRequest) {
  try {
    if (!esOrigenPropio(req)) {
      return NextResponse.json({ error: "Origen no permitido." }, { status: 403 });
    }

    const ip = ipDe(req);
    if (!(await dentroDelLimite("smile-enhance", ip, LIMITES_POR_IP))) {
      return NextResponse.json(
        { error: "Alcanzaste el límite de simulaciones por ahora. Probá de nuevo más tarde." },
        { status: 429, headers: { "Retry-After": "3600" } },
      );
    }

    const raw = await leerCuerpoConTope(req, MAX_REQUEST_BYTES);
    if (raw === null) {
      return NextResponse.json({ error: "La imagen supera el tamaño permitido." }, { status: 413 });
    }

    let body: { imageBase64?: unknown; mimeType?: unknown; turnstileToken?: unknown };
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json({ error: "No pudimos leer la imagen." }, { status: 400 });
    }
    const { imageBase64, mimeType, turnstileToken } = body;

    // Sólo se exige si TURNSTILE_SECRET_KEY está cargada (ver src/lib/api-guard.ts).
    if (!(await verificarTurnstile(turnstileToken, ip))) {
      return NextResponse.json({ error: "No pudimos verificar que seas una persona. Recargá la página." }, { status: 403 });
    }

    if (typeof imageBase64 !== "string" || typeof mimeType !== "string") {
      return NextResponse.json({ error: "imageBase64 and mimeType required" }, { status: 400 });
    }

    if (!ALLOWED_IMAGE_TYPES.has(mimeType)) {
      return NextResponse.json({ error: "Formato de imagen no permitido." }, { status: 415 });
    }

    const normalizedBase64 = imageBase64.replace(/\s/g, "");
    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(normalizedBase64)) {
      return NextResponse.json({ error: "La imagen no tiene un formato válido." }, { status: 400 });
    }

    const padding = normalizedBase64.endsWith("==") ? 2 : normalizedBase64.endsWith("=") ? 1 : 0;
    const imageBytes = Math.floor((normalizedBase64.length * 3) / 4) - padding;
    if (imageBytes <= 0 || imageBytes > MAX_IMAGE_BYTES) {
      return NextResponse.json({ error: "La imagen supera el tamaño permitido." }, { status: 413 });
    }

    const prompt = `Efectúa un rediseño digital completo de la sonrisa de la persona en esta foto.

INSTRUCCIONES CRÍTICAS:
1. CORRECCIÓN ORTODÓNTICA: Cierra completamente cualquier espacio o diastema entre los dientes. Los dientes deben ser contiguos.
2. ALINEACIÓN Y FORMA: Corrige dientes torcidos o astillados. Hazlos rectos, uniformes y simétricos.
3. EFECTO CARILLAS: Crea una sonrisa estética tipo carillas de porcelana de alta calidad, con proporciones ideales, pero sin perder el realismo fotográfico.
4. COLOR: Aplica un blanqueamiento estético moderado y realista.
5. PRESERVACIÓN: El resultado DEBE ser fotorrealista. Mantén todas las demás facciones, la textura de la piel, la iluminación y el fondo original exactamente como están. SOLO los dientes y la sonrisa deben ser transformados.

CALIDAD DE DETALLE:
- Evita dientes borrosos, pixelados o con bordes serruchados.
- Mantén contornos dentales limpios y textura natural del esmalte.
- No alteres labios, nariz, ojos, forma facial ni cabello.
- No agregues ni elimines dientes visibles.

Devuelve solo la imagen final editada.`;

    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            { inlineData: { mimeType, data: normalizedBase64 } },
          ],
        },
      ],
      config: {
        responseModalities: ["IMAGE", "TEXT"],
        imageConfig: { imageSize: "1K" },
      },
    });

    type GeminiPart = {
      inlineData?: {
        data?: string;
        mimeType?: string;
      };
      text?: string;
    };

    const parts = (response.candidates?.[0]?.content?.parts ?? []) as GeminiPart[];
    const imagePart = parts.find((part) => part.inlineData?.data);

    if (!imagePart?.inlineData?.data) {
      return NextResponse.json(
        { error: "No pudimos generar una imagen. Probá con una foto frontal y mejor iluminada." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      imageBase64: imagePart.inlineData.data,
      mimeType: imagePart.inlineData.mimeType || "image/png",
    });
  } catch (err: unknown) {
    console.error("[am-smile-design/enhance]", err);
    const message = err instanceof Error ? err.message : String(err);

    if (message.includes("GEMINI_API_KEY") || message.includes("API_KEY_INVALID") || message.includes("401")) {
      return NextResponse.json(
        { error: "El simulador no está configurado para generar imágenes todavía." },
        { status: 500 },
      );
    }

    if (message.includes("RESOURCE_EXHAUSTED") || message.includes("quota")) {
      return NextResponse.json(
        { error: "El simulador alcanzó el límite de generaciones por el momento. Intentá más tarde." },
        { status: 429 },
      );
    }

    return NextResponse.json(
      { error: "Error al procesar la imagen. Probá de nuevo con otra foto." },
      { status: 500 },
    );
  }
}
