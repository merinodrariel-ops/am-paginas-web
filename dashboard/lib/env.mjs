/**
 * Carga de configuración. Lee los .env que ya existen en el proyecto —
 * no duplica credenciales ni pide nada nuevo.
 *
 *   ../.env.ads                    → Google Ads + Search Console (OAuth)
 *   ../amesteticadental/.env.local → Supabase, GA4 measurement id
 *   ./.env                         → overrides propios del dashboard (opcional)
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
export const DASHBOARD_DIR = resolve(HERE, "..");
export const REPO_ROOT = resolve(DASHBOARD_DIR, "..");

function parseEnvFile(path) {
  if (!existsSync(path)) return {};
  const out = {};
  for (const raw of readFileSync(path, "utf8").split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

const merged = {
  ...parseEnvFile(resolve(REPO_ROOT, ".env.ads")),
  ...parseEnvFile(resolve(REPO_ROOT, "amesteticadental", ".env.local")),
  ...parseEnvFile(resolve(DASHBOARD_DIR, ".env")),
  ...process.env,
};

export const env = merged;

export const config = {
  port: Number(merged.DASHBOARD_PORT || 4321),

  google: {
    clientId: merged.GOOGLE_ADS_CLIENT_ID,
    clientSecret: merged.GOOGLE_ADS_CLIENT_SECRET,
    refreshToken: merged.GOOGLE_ADS_REFRESH_TOKEN,
    developerToken: merged.GOOGLE_ADS_DEVELOPER_TOKEN,
    loginCustomerId: merged.GOOGLE_ADS_LOGIN_CUSTOMER_ID,
    customerId: merged.GOOGLE_ADS_CUSTOMER_ID,
  },

  supabase: {
    url: merged.NEXT_PUBLIC_SUPABASE_URL,
    // La service role key sólo vive del lado del servidor local; nunca se
    // manda al navegador.
    key: merged.SUPABASE_SERVICE_ROLE_KEY || merged.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  ga4: {
    measurementId: merged.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
    // Se autodescubre vía Admin API si no se fija a mano.
    propertyId: merged.GA4_PROPERTY_ID || null,
  },

  // Opcional: sin key, PageSpeed usa la cuota anónima compartida (se agota fácil).
  pagespeedKey: merged.PAGESPEED_API_KEY || null,

  // Propiedad de Search Console por defecto. El selector del dashboard se
  // llena solo con todas las propiedades a las que la cuenta tiene acceso.
  defaultSite: merged.GSC_DEFAULT_SITE || "sc-domain:amesteticadental.com",

  // URL que se audita en Core Web Vitals cuando el sitio es el principal.
  defaultOrigin: merged.SITE_ORIGIN || "https://www.amesteticadental.com",
};

export function missingGoogleCreds() {
  const { clientId, clientSecret, refreshToken } = config.google;
  const missing = [];
  if (!clientId) missing.push("GOOGLE_ADS_CLIENT_ID");
  if (!clientSecret) missing.push("GOOGLE_ADS_CLIENT_SECRET");
  if (!refreshToken) missing.push("GOOGLE_ADS_REFRESH_TOKEN");
  return missing;
}
