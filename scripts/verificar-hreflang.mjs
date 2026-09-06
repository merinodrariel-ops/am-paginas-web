#!/usr/bin/env node
/**
 * Verifica la integridad de los clusters de hreflang de la red AM.
 *
 * Por qué existe: un cluster de hreflang es un CONJUNTO de páginas, y Google sólo lo
 * respeta si TODOS sus miembros declaran el mismo conjunto. Los mapas viven duplicados
 * en dos proyectos que se despliegan por separado:
 *
 *   amesteticadental/src/lib/i18n-routes.ts   → EN_BY_ES, UY_BY_ES
 *   amesteticadental-uy/app/site-data.ts      → AR_BY_UY, EN_BY_AR
 *
 * Si uno se toca y el otro no, los conjuntos dejan de coincidir y Google descarta el
 * cluster —sin avisar, y sin que nada falle en el build—. El 06-09-2026 se encontró
 * exactamente eso: el lado uruguayo declaraba es-AR + es-UY mientras el argentino
 * declaraba es-AR + en-US + es-UY, y los 8 clusters compartidos estaban rotos.
 *
 * Este script no mira el código: mira los sitemaps publicados, que es lo que Google
 * efectivamente lee.
 *
 *   node scripts/verificar-hreflang.mjs
 *
 * Sale con código 1 si algún cluster es inconsistente.
 */

const SITEMAPS = [
  "https://www.amesteticadental.com/sitemap.xml",
  "https://www.amesteticadental.uy/sitemap.xml",
];

const norm = (u) => u.replace(/\/$/, "");

async function cargar(url) {
  const res = await fetch(url, { headers: { "User-Agent": "AM-hreflang-check/1.0" } });
  if (!res.ok) throw new Error(`${url} devolvió ${res.status}`);
  const xml = await res.text();
  const paginas = new Map();
  for (const bloque of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = bloque.match(/<loc>(.*?)<\/loc>/)?.[1];
    if (!loc) continue;
    const alts = [...bloque.matchAll(/hreflang="([^"]+)"\s+href="([^"]+)"/g)]
      .filter(([, lang]) => lang !== "x-default")
      .map(([, lang, href]) => `${lang}=${norm(href)}`);
    if (alts.length) paginas.set(norm(loc), new Set(alts));
  }
  return paginas;
}

const todas = new Map();
for (const sm of SITEMAPS) {
  for (const [loc, alts] of await cargar(sm)) todas.set(loc, alts);
}

const problemas = [];
for (const [loc, conjunto] of todas) {
  // Toda página del cluster tiene que declararse a sí misma.
  const propias = [...conjunto].map((e) => e.split("=").slice(1).join("="));
  if (!propias.includes(loc)) {
    problemas.push(`${loc}\n    no se declara a sí misma dentro de su propio cluster`);
    continue;
  }
  for (const miembro of propias) {
    if (miembro === loc) continue;
    const otro = todas.get(miembro);
    if (!otro) {
      problemas.push(`${loc}\n    declara a ${miembro}, que no declara ningún alternate`);
      continue;
    }
    const falta = [...conjunto].filter((e) => !otro.has(e));
    const sobra = [...otro].filter((e) => !conjunto.has(e));
    if (falta.length || sobra.length) {
      problemas.push(
        `${loc}\n    vs ${miembro}\n` +
          (falta.length ? `    al otro le falta: ${falta.join(", ")}\n` : "") +
          (sobra.length ? `    al otro le sobra: ${sobra.join(", ")}` : ""),
      );
    }
  }
}

console.log(`Páginas con hreflang declarado: ${todas.size}`);
if (problemas.length === 0) {
  console.log("✅ Todos los clusters son consistentes.");
  process.exit(0);
}
console.error(`\n❌ ${problemas.length} inconsistencias:\n`);
for (const p of problemas) console.error("  ✗ " + p + "\n");
console.error(
  "Los mapas que tienen que moverse juntos:\n" +
    "  amesteticadental/src/lib/i18n-routes.ts   (EN_BY_ES, UY_BY_ES)\n" +
    "  amesteticadental-uy/app/site-data.ts      (AR_BY_UY, EN_BY_AR)\n",
);
process.exit(1);
