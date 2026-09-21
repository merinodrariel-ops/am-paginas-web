/**
 * Cliente mínimo de TypeSafe (modelo Jev) — decisiones estructuradas.
 *
 * Por qué a mano y no el SDK: son 40 líneas de `fetch` y evita meter una dependencia
 * más en un repo que despliega cuatro sitios a Vercel. Si algún día necesitamos
 * streaming o batching, ahí sí conviene `npm i typesafe-sdk`.
 *
 * La diferencia con pedirle esto a un LLM: Jev no genera texto, devuelve un valor
 * tipado + la distribución de probabilidad + una confianza. O sea: el código puede
 * ramificar sobre la respuesta sin parsear nada, y puede distinguir "estoy seguro de
 * que está mal" de "no sé". Esa segunda parte es la que sirve para no romper nada:
 * cuando la confianza es baja, no se falla, se avisa.
 *
 * Tipos de pregunta:
 *   noul   → { noul: 0..1 }              probabilidad de que la afirmación sea cierta
 *   choice → { choice, probabilities, confidence }
 *   score  → { score, legend, probabilities, confidence }
 *
 * Todas las preguntas de una llamada se evalúan en paralelo y aisladas contra el mismo
 * estado, así que agregar preguntas casi no cuesta tiempo.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const ENDPOINT = "https://api.typesafe.ai/v1/systemone";
const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

/** Lee la key del entorno o de .env.typesafe (que está gitignoreado). */
function leerKey() {
  if (process.env.TYPESAFE_API_KEY) return process.env.TYPESAFE_API_KEY;
  try {
    const env = readFileSync(resolve(RAIZ, ".env.typesafe"), "utf8");
    const key = env.match(/^TYPESAFE_API_KEY=(.+)$/m)?.[1]?.trim();
    if (key) return key;
  } catch {
    // cae al error de abajo
  }
  throw new Error(
    "Falta TYPESAFE_API_KEY. Poné la key en .env.typesafe o exportala en el entorno.\n" +
      "Se saca de https://console.typesafe.ai/keys",
  );
}

/**
 * Manda un estado y un conjunto de preguntas tipadas. Devuelve `answers` tal cual
 * viene de la API, más `usage`.
 *
 * Reintenta ante 429 y 5xx respetando `retry-after` — la red se audita entera de una
 * y no queremos que un rate limit tire abajo la corrida.
 */
export async function preguntar(state, questions, { model = "jev-latest", reintentos = 3 } = {}) {
  const key = leerKey();
  const cuerpo = JSON.stringify({ state, model, questions });

  for (let intento = 0; ; intento++) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: cuerpo,
    });

    if (res.ok) return res.json();

    const recuperable = res.status === 429 || res.status >= 500;
    if (!recuperable || intento >= reintentos) {
      throw new Error(`TypeSafe devolvió ${res.status}: ${(await res.text()).slice(0, 300)}`);
    }
    const espera = Number(res.headers.get("retry-after")) * 1000 || 500 * 2 ** intento;
    await new Promise((r) => setTimeout(r, espera));
  }
}

/** Corre `tarea` sobre cada item con un tope de concurrencia. Preserva el orden. */
export async function enTandas(items, limite, tarea) {
  const salida = new Array(items.length);
  let siguiente = 0;
  const obreros = Array.from({ length: Math.min(limite, items.length) }, async () => {
    while (siguiente < items.length) {
      const i = siguiente++;
      salida[i] = await tarea(items[i], i);
    }
  });
  await Promise.all(obreros);
  return salida;
}
