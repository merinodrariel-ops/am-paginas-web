#!/usr/bin/env node
/**
 * Vigila el estado REAL de indexación de la red AM y repara lo que se pueda.
 *
 * POR QUÉ EXISTE
 * --------------
 * Hasta ahora todo el flujo era "disparar y olvidar": se notificaba a IndexNow y
 * se enviaban sitemaps, y nadie verificaba nunca el resultado. En agosto de 2026
 * eso costó caro — 11 páginas de amesteticadental.uy quedaron "Descubierta:
 * actualmente sin indexar" durante semanas y nos enteramos por un email de Google,
 * no por el sistema. Peor: el workflow que debía avisarle a Google terminaba en
 * verde sin hacer nada, porque los secretos nunca se habían cargado.
 *
 * Este script cierra ese lazo. No pregunta "¿mandé el aviso?" sino "¿Google la
 * indexó?", que es la única pregunta que importa.
 *
 * CÓMO LO SABE
 * ------------
 * Usa la URL Inspection API de Search Console, que devuelve exactamente el mismo
 * dato que muestra el panel: coverageState, si el robots la bloquea, si hay
 * conflicto de canonical, cuándo fue el último rastreo. Es la fuente de verdad.
 *
 * QUÉ REPARA DE VERDAD — Y QUÉ NO
 * -------------------------------
 * Repara: reenvía el sitemap a Search Console y vuelve a notificar por IndexNow
 * (Bing/Yandex) las URLs atascadas. Eso son arreglos reales.
 *
 * NO repara por arte de magia "Descubierta: sin indexar" en un dominio nuevo: eso
 * es Google decidiendo no gastar presupuesto de rastreo, y volver a pinchar todos
 * los días no lo cambia — sólo quema cuota y parece spam. Por eso hay backoff: una
 * URL atascada se vuelve a notificar cada DIAS_REPING días, no en cada corrida.
 * Cuando el diagnóstico apunta a algo accionable (canonical en conflicto, robots
 * bloqueando, noindex, 404) el reporte lo dice con todas las letras, porque eso sí
 * se arregla en el código.
 *
 * SALIDA
 * ------
 * Termina con código ≠ 0 si hay URLs atascadas hace más de UMBRAL_DIAS. En el CI
 * eso hace fallar el workflow y GitHub manda el email. Ese es el aviso que antes
 * llegaba de Google semanas tarde.
 *
 *   node scripts/auditar-indexacion.mjs                      # toda la red
 *   node scripts/auditar-indexacion.mjs amesteticadental.uy  # un solo sitio
 *   node scripts/auditar-indexacion.mjs --solo-auditar       # no repara, sólo mira
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const SITIOS = [
  { host: "www.amesteticadental.com", key: "14c9604645864308b49cb8994e8d032c" },
  { host: "www.amesteticadental.uy", key: "14c9604645864308b49cb8994e8d032c" },
  { host: "www.thedentalreview.com", key: "14c9604645864308b49cb8994e8d032c" },
  { host: "www.arielmerino.com", key: "14c9604645864308b49cb8994e8d032c" },
];

/** Días que una URL puede estar sin indexar antes de que esto sea una alarma. */
const UMBRAL_DIAS = Number(process.env.UMBRAL_DIAS || 5);

/** Días mínimos entre dos notificaciones de la misma URL atascada. */
const DIAS_REPING = Number(process.env.DIAS_REPING || 3);

const ARCHIVO_ESTADO = fileURLToPath(new URL("../infra/estado-indexacion.json", import.meta.url));

const DIA_MS = 24 * 60 * 60 * 1000;
const hoy = () => new Date().toISOString().slice(0, 10);
const diasDesde = (iso) => Math.floor((Date.now() - new Date(iso).getTime()) / DIA_MS);
const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

// ─────────────────────────────────────────────────────────────────────────────
// Credenciales
// ─────────────────────────────────────────────────────────────────────────────

/**
 * En el CI las credenciales llegan por variables de entorno; en una máquina del
 * consultorio, por .env.gsc (token acotado a Search Console) o .env.ads (que además
 * puede gastar en Google Ads, por eso va segundo).
 */
function cargarCredenciales() {
  const deEntorno = {
    id: process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_ID,
    secret: process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET,
    refresh: process.env.GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN,
    origen: "variables de entorno",
  };
  if (deEntorno.id && deEntorno.secret && deEntorno.refresh) return deEntorno;

  for (const archivo of [".env.gsc", ".env.ads"]) {
    try {
      const ruta = fileURLToPath(new URL(`../${archivo}`, import.meta.url));
      const env = Object.fromEntries(
        readFileSync(ruta, "utf8")
          .split("\n")
          .filter((l) => l && !l.startsWith("#"))
          .map((l) => {
            const i = l.indexOf("=");
            return [l.slice(0, i), l.slice(i + 1)];
          })
      );
      const id = env.GOOGLE_SEARCH_CONSOLE_CLIENT_ID || env.GOOGLE_ADS_CLIENT_ID;
      const secret = env.GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET || env.GOOGLE_ADS_CLIENT_SECRET;
      const refresh = env.GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN || env.GOOGLE_ADS_REFRESH_TOKEN;
      if (id && secret && refresh) return { id, secret, refresh, origen: archivo };
    } catch {
      // no está en esta máquina; se prueba el siguiente
    }
  }
  return null;
}

async function pedirToken({ id, secret, refresh }) {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: id, client_secret: secret, refresh_token: refresh, grant_type: "refresh_token" }),
  });
  const d = await r.json().catch(() => ({}));
  if (!d.access_token) {
    // invalid_grant = el refresh token venció o fue revocado. Es el fallo más común
    // y el mensaje de Google no lo explica, así que lo traducimos acá.
    const pista =
      d.error === "invalid_grant"
        ? "\n   El refresh token venció o fue revocado. Regeneralo con: node get-token-gsc.mjs"
        : "";
    throw new Error(`No se pudo refrescar el token de Google (${d.error_description || d.error}).${pista}`);
  }
  return d.access_token;
}

// ─────────────────────────────────────────────────────────────────────────────
// Search Console
// ─────────────────────────────────────────────────────────────────────────────

/**
 * El identificador de una propiedad NO se puede derivar del dominio: Search Console
 * distingue entre propiedad de prefijo (`https://www.x.com/`) y de dominio
 * (`sc-domain:x.com`). Hay que preguntarle cuáles existen.
 */
async function propiedadesVerificadas(token) {
  const r = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`No se pudo leer las propiedades de Search Console (HTTP ${r.status}): ${JSON.stringify(d)}`);
  return (d.siteEntry || []).map((e) => e.siteUrl);
}

function resolverPropiedad(host, verificadas) {
  const prefijo = `https://${host}/`;
  if (verificadas.includes(prefijo)) return prefijo;
  const dominio = `sc-domain:${host.replace(/^www\./, "")}`;
  if (verificadas.includes(dominio)) return dominio;
  return null;
}

async function urlsDelSitemap(host) {
  const r = await fetch(`https://${host}/sitemap.xml`, { redirect: "follow" });
  if (!r.ok) throw new Error(`sitemap HTTP ${r.status}`);
  const xml = await r.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

/** Consulta el estado real de una URL. Devuelve el bloque indexStatusResult. */
async function inspeccionar(token, siteUrl, inspectionUrl) {
  const r = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ inspectionUrl, siteUrl, languageCode: "es" }),
  });

  if (r.status === 429) return { error: "cuota agotada (429)" };
  if (!r.ok) {
    const d = await r.json().catch(() => ({}));
    return { error: d.error?.message || `HTTP ${r.status}` };
  }

  const d = await r.json();
  return d.inspectionResult?.indexStatusResult || { error: "respuesta sin indexStatusResult" };
}

/**
 * Traduce el resultado crudo a un veredicto accionable.
 *
 * La distinción que importa: hay causas que se arreglan en el código (canonical,
 * robots, noindex, 404) y causas que sólo se arreglan con autoridad y tiempo
 * ("Descubierta: sin indexar"). Mezclarlas hace que el reporte no sirva.
 */
function diagnosticar(estado) {
  if (estado.error) return { nivel: "error", etiqueta: "no se pudo consultar", detalle: estado.error, accionable: false };

  const cobertura = estado.coverageState || "(sin dato)";

  if (estado.verdict === "PASS") return { nivel: "ok", etiqueta: "indexada", detalle: cobertura, accionable: false };

  if (estado.robotsTxtState === "DISALLOWED")
    return { nivel: "roto", etiqueta: "bloqueada por robots.txt", detalle: "arreglable en el código: revisá app/robots.ts", accionable: true };

  if (estado.indexingState === "BLOCKED_BY_META_TAG")
    return { nivel: "roto", etiqueta: "noindex en la página", detalle: "arreglable en el código: sacá el meta robots noindex", accionable: true };

  if (estado.indexingState === "BLOCKED_BY_HTTP_HEADER")
    return { nivel: "roto", etiqueta: "noindex por cabecera HTTP", detalle: "arreglable en el código: revisá headers de Next/Vercel", accionable: true };

  if (estado.pageFetchState && !["SUCCESSFUL", "PAGE_FETCH_STATE_UNSPECIFIED"].includes(estado.pageFetchState))
    return { nivel: "roto", etiqueta: `Google no pudo descargarla (${estado.pageFetchState})`, detalle: "arreglable: verificá que la URL responda 200", accionable: true };

  // Canonical en conflicto: Google eligió otra URL como la buena. Suele pasar cuando
  // dos páginas de la red dicen casi lo mismo (.uy replicando .com sin hreflang).
  if (estado.googleCanonical && estado.userCanonical && estado.googleCanonical !== estado.userCanonical)
    return {
      nivel: "roto",
      etiqueta: "Google eligió otra canónica",
      detalle: `Google indexó ${estado.googleCanonical} en lugar de esta. Arreglable: hreflang recíproco y contenido propio.`,
      accionable: true,
    };

  if (/discovered/i.test(cobertura))
    return { nivel: "atascada", etiqueta: "descubierta, nunca rastreada", detalle: "Google la conoce pero no gastó rastreo. Se gana con enlaces internos, backlinks y tiempo.", accionable: false };

  if (/crawled/i.test(cobertura))
    return { nivel: "atascada", etiqueta: "rastreada, sin indexar", detalle: "Google la vio y decidió no indexarla. Suele ser contenido percibido como flojo o duplicado.", accionable: false };

  return { nivel: "atascada", etiqueta: cobertura, detalle: "revisar en Search Console", accionable: false };
}

// ─────────────────────────────────────────────────────────────────────────────
// Reparación
// ─────────────────────────────────────────────────────────────────────────────

async function reenviarSitemap(token, siteUrl, host) {
  const sitemap = `https://${host}/sitemap.xml`;
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemap)}`;
  const r = await fetch(endpoint, { method: "PUT", headers: { Authorization: `Bearer ${token}` } });
  return r.ok ? "reenviado" : `rechazado (HTTP ${r.status})`;
}

async function notificarIndexNow(host, key, urlList) {
  if (urlList.length === 0) return "sin URLs para notificar";
  const r = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
  });
  return r.ok ? `${urlList.length} URL(s) aceptadas (HTTP ${r.status})` : `rechazado (HTTP ${r.status})`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Estado entre corridas
// ─────────────────────────────────────────────────────────────────────────────

function leerEstado() {
  try {
    return JSON.parse(readFileSync(ARCHIVO_ESTADO, "utf8"));
  } catch {
    return {};
  }
}

function guardarEstado(estado) {
  mkdirSync(dirname(ARCHIVO_ESTADO), { recursive: true });
  writeFileSync(ARCHIVO_ESTADO, JSON.stringify(estado, null, 2) + "\n");
}

// ─────────────────────────────────────────────────────────────────────────────
// Reporte
// ─────────────────────────────────────────────────────────────────────────────

const lineas = [];
function decir(texto = "") {
  console.log(texto);
  lineas.push(texto);
}

function volcarResumenGitHub() {
  const destino = process.env.GITHUB_STEP_SUMMARY;
  if (!destino) return;
  const md = lineas.join("\n").replace(/^/gm, "").trim();
  writeFileSync(destino, "```\n" + md + "\n```\n", { flag: "a" });
}

// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const soloAuditar = args.includes("--solo-auditar");
  const filtro = args.find((a) => !a.startsWith("--"));

  const sitios = filtro ? SITIOS.filter((s) => s.host.includes(filtro)) : SITIOS;
  if (sitios.length === 0) throw new Error(`Ningún sitio coincide con "${filtro}".`);

  const creds = cargarCredenciales();
  if (!creds) {
    // Antes esto pasaba en verde y por eso nadie se enteraba de nada. Ahora rompe.
    throw new Error(
      "Faltan las credenciales de Search Console.\n" +
        "   En el CI: cargá los secretos GOOGLE_SEARCH_CONSOLE_CLIENT_ID / _SECRET / _REFRESH_TOKEN.\n" +
        "   En una máquina: generá .env.gsc con  node get-token-gsc.mjs"
    );
  }

  const token = await pedirToken(creds);
  const verificadas = await propiedadesVerificadas(token);
  const estado = leerEstado();

  decir(`Auditoría de indexación — ${hoy()}`);
  decir(`Credenciales: ${creds.origen}`);
  decir(`Alarma si una URL lleva ${UMBRAL_DIAS}+ días sin indexar. Re-notificación cada ${DIAS_REPING} días.`);

  let atascadasConAlarma = 0;
  let totalNoIndexadas = 0;

  for (const { host, key } of sitios) {
    decir("");
    decir(`── ${host}`);

    const propiedad = resolverPropiedad(host, verificadas);
    if (!propiedad) {
      // No es un fallo del deploy: es una tarea pendiente en Search Console.
      decir(`   ⚠️  El dominio no está verificado en Search Console — no se puede auditar.`);
      continue;
    }

    let urls;
    try {
      urls = await urlsDelSitemap(host);
    } catch (e) {
      decir(`   ✗ No se pudo leer el sitemap: ${e.message}`);
      atascadasConAlarma++;
      continue;
    }

    const problemas = [];
    let indexadas = 0;

    for (const url of urls) {
      const resultado = await inspeccionar(token, propiedad, url);
      const dx = diagnosticar(resultado);

      const clave = url;
      if (dx.nivel === "ok") {
        indexadas++;
        delete estado[clave]; // se recuperó: se olvida el historial
      } else {
        const previo = estado[clave] || { desde: hoy(), ultimoAviso: null };
        estado[clave] = { ...previo, etiqueta: dx.etiqueta, ultimaRevision: hoy() };
        problemas.push({ url, dx, desde: previo.desde });
      }

      await dormir(120); // la API tolera 600/min por propiedad; esto queda holgado
    }

    totalNoIndexadas += problemas.length;
    decir(`   ${indexadas}/${urls.length} indexadas`);

    if (problemas.length === 0) {
      decir(`   ✅ Nada pendiente.`);
      continue;
    }

    // Reporte de lo que falta, agrupado por causa
    for (const { url, dx, desde } of problemas) {
      const dias = diasDesde(desde);
      const ruta = url.replace(`https://${host}`, "") || "/";
      const marca = dx.nivel === "roto" ? "🔧" : dx.nivel === "error" ? "❓" : "⏳";
      const antiguedad = dias === 0 ? "detectada hoy" : `${dias} día(s)`;
      decir(`   ${marca} ${ruta}`);
      decir(`      ${dx.etiqueta} — ${antiguedad}`);
      decir(`      ${dx.detalle}`);
      if (dias >= UMBRAL_DIAS || dx.nivel === "roto") atascadasConAlarma++;
    }

    if (soloAuditar) continue;

    // ── Reparación: sólo sobre las que toca re-notificar (backoff)
    const aRenotificar = problemas
      .filter(({ url }) => {
        const ultimo = estado[url]?.ultimoAviso;
        return !ultimo || diasDesde(ultimo) >= DIAS_REPING;
      })
      .map(({ url }) => url);

    decir("");
    decir(`   Reparando:`);
    decir(`      sitemap → Search Console: ${await reenviarSitemap(token, propiedad, host)}`);

    if (aRenotificar.length > 0) {
      decir(`      IndexNow (Bing/Yandex): ${await notificarIndexNow(host, key, aRenotificar)}`);
      for (const url of aRenotificar) estado[url].ultimoAviso = hoy();
    } else {
      decir(`      IndexNow: en pausa — todas se notificaron hace menos de ${DIAS_REPING} días`);
    }
  }

  guardarEstado(estado);

  decir("");
  if (atascadasConAlarma > 0) {
    decir(`RESULTADO: ${atascadasConAlarma} URL(s) requieren atención (de ${totalNoIndexadas} sin indexar).`);
    decir(`Las marcadas con 🔧 se arreglan en el código. Las ⏳ necesitan enlaces y tiempo.`);
  } else if (totalNoIndexadas > 0) {
    decir(`RESULTADO: ${totalNoIndexadas} URL(s) sin indexar, todas recientes. Se siguen observando.`);
  } else {
    decir(`RESULTADO: toda la red indexada.`);
  }

  volcarResumenGitHub();

  // Código ≠ 0 → el workflow falla → GitHub manda el email. Ese es el aviso.
  if (atascadasConAlarma > 0) process.exit(1);
}

main().catch((e) => {
  console.error(`\nError: ${e.message}\n`);
  volcarResumenGitHub();
  process.exit(1);
});
