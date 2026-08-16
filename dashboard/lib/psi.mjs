/**
 * Core Web Vitals reales (datos de campo CrUX) vía PageSpeed Insights.
 *
 * Es la parte de Rybbit que importa: no el score de laboratorio, sino qué
 * experimentan los usuarios de verdad. La llamada tarda ~20s, así que se
 * cachea 6 horas — los datos de CrUX son una ventana móvil de 28 días,
 * pedirlos más seguido no aporta nada.
 */
import { config } from "./env.mjs";
import { fail } from "./google.mjs";

const CACHE_MS = 6 * 60 * 60 * 1000;
const cache = new Map();

const UMBRALES = {
  LARGEST_CONTENTFUL_PAINT_MS: { bien: 2500, regular: 4000, unidad: "ms", label: "LCP" },
  INTERACTION_TO_NEXT_PAINT: { bien: 200, regular: 500, unidad: "ms", label: "INP" },
  CUMULATIVE_LAYOUT_SHIFT_SCORE: { bien: 0.1, regular: 0.25, unidad: "", label: "CLS" },
  FIRST_CONTENTFUL_PAINT_MS: { bien: 1800, regular: 3000, unidad: "ms", label: "FCP" },
  EXPERIMENTAL_TIME_TO_FIRST_BYTE: { bien: 800, regular: 1800, unidad: "ms", label: "TTFB" },
};

function clasificar(key, percentile) {
  const u = UMBRALES[key];
  if (!u) return "desconocido";
  const value = key === "CUMULATIVE_LAYOUT_SHIFT_SCORE" ? percentile / 100 : percentile;
  if (value <= u.bien) return "bien";
  if (value <= u.regular) return "regular";
  return "mal";
}

async function medir(url, strategy) {
  const params = new URLSearchParams({ url, strategy, category: "performance" });
  if (config.pagespeedKey) params.set("key", config.pagespeedKey);

  const r = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`);
  const payload = await r.json().catch(() => ({}));

  if (!r.ok) {
    const quota = r.status === 429;
    return fail(
      `PageSpeed ${r.status}: ${payload?.error?.message?.slice(0, 160) || "error"}`,
      quota
        ? "Cuota anónima agotada. Poné PAGESPEED_API_KEY en dashboard/.env para tener cuota propia."
        : undefined
    );
  }

  const field = payload.loadingExperience?.metrics || {};
  const metricas = Object.entries(field)
    .filter(([key]) => UMBRALES[key])
    .map(([key, m]) => {
      const u = UMBRALES[key];
      const value = key === "CUMULATIVE_LAYOUT_SHIFT_SCORE" ? m.percentile / 100 : m.percentile;
      return {
        key,
        label: u.label,
        valor: value,
        unidad: u.unidad,
        estado: clasificar(key, m.percentile),
        umbralBien: u.bien,
        umbralRegular: u.regular,
      };
    });

  return {
    ok: true,
    data: {
      strategy,
      // Sin datos de campo suficientes, CrUX no devuelve nada para esa URL.
      tieneDatosDeCampo: metricas.length > 0,
      veredicto: payload.loadingExperience?.overall_category || null,
      metricas,
      scoreLab: Math.round((payload.lighthouseResult?.categories?.performance?.score ?? 0) * 100),
    },
  };
}

export async function fetchWebVitals(url) {
  const hit = cache.get(url);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.value;

  const [movil, escritorio] = await Promise.all([medir(url, "mobile"), medir(url, "desktop")]);

  // Si móvil falló (cuota, timeout), no vale la pena cachear el error.
  if (!movil.ok && !escritorio.ok) return movil;

  const value = {
    ok: true,
    data: {
      url,
      movil: movil.ok ? movil.data : null,
      escritorio: escritorio.ok ? escritorio.data : null,
      error: movil.ok ? null : movil.error,
      hint: movil.ok ? null : movil.hint,
    },
  };
  cache.set(url, { at: Date.now(), value });
  return value;
}
