#!/usr/bin/env node
/**
 * Audita los títulos, subtítulos y slugs de los casos clínicos publicados.
 *
 * Por qué existe: el 100% de los casos se publica con título escrito a mano, y ya pasó
 * una vez que se coló un slug como título —`gingivectomia-laser-10-procedimiento-recorte-gingival`—
 * en producción. Un título así no lo entiende el paciente, no invita al click y se lee
 * como un nombre de archivo interno. La guía de títulos pedía un validador pre-commit
 * que nunca se construyó; esto es ese validador.
 *
 * Cómo reparte el trabajo, que es el punto:
 *
 *   El CÓDIGO decide lo que es verificable   → ¿el slug tiene un número de secuencia?
 *                                              ¿el título es idéntico al slug?
 *                                              ¿la descripción llega a 100 caracteres?
 *
 *   JEV decide lo que es criterio            → ¿esto está escrito para el paciente o
 *                                              para el dentista? ¿invita al click?
 *                                              ¿parece un slug aunque no lo sea?
 *
 * Lo segundo no se puede resolver con un `grep`, y pedírselo a un LLM generativo
 * devuelve un párrafo que hay que volver a leer. Jev devuelve un número entre 0 y 2 y
 * una confianza, así que el veredicto lo arma este archivo y no el modelo.
 *
 * La confianza es la que evita los falsos positivos: si Jev no está seguro, el caso no
 * se marca como MAL, se marca como REVISAR. Nada se rompe por una corazonada del modelo.
 *
 *   node scripts/typesafe/auditar-titulos.mjs
 *   node scripts/typesafe/auditar-titulos.mjs --json
 *   node scripts/typesafe/auditar-titulos.mjs --titulo "..." --slug "..." --subtitulo "..."
 *
 * Sale con código 1 si algún caso queda en MAL. REVISAR no rompe el build.
 */

import { preguntar, enTandas } from "./client.mjs";

const CASOS_TS = "../../amesteticadental/src/data/casos.ts";

// Umbrales del veredicto. Están acá y no en el prompt a propósito: cuando cambie el
// criterio editorial se toca un número, no se reescribe una instrucción en prosa.
const UMBRALES = {
  parecoSlug: 0.6, // noul por encima de esto = suena a nombre de archivo
  // 0.75 y no 0.6: un noul de ~0.6 es el modelo dudando, y los títulos buenos que usan
  // la palabra "caso" dentro de una oración caían del lado equivocado de 0.6.
  relleno: 0.75, // noul por encima de esto = tiene palabras de relleno
  paraPaciente: 0.8, // score (0..2) por debajo de esto = escrito para el dentista
  gancho: 0.8, // score (0..2) por debajo de esto = nadie va a hacer click
  confianzaMinima: 0.5, // por debajo de esto no se falla, se manda a revisión humana
};

// Las mismas cinco reglas de la guía de títulos, en el formato que Jev entiende.
const PREGUNTAS = {
  parece_slug: {
    type: "noul",
    instructions:
      "El título parece un nombre de archivo o un slug interno: palabras encadenadas con guiones, " +
      "números de secuencia, o jerga técnica pegada sin gramática de oración",
  },
  tiene_relleno: {
    type: "noul",
    instructions:
      "El título contiene palabras de relleno que no aportan nada: etiquetas administrativas " +
      "como 'procedimiento', 'antes y después' o 'caso N°', o números de versión. " +
      "Una de esas palabras usada dentro de una oración con sentido no es relleno",
  },
  para_paciente: {
    type: "score",
    instructions: "Para quién está escrito el título de este caso clínico",
    criteria: [
      "Para el dentista: nombra el procedimiento técnico y nada más",
      "Mixto: nombra el procedimiento pero se entiende desde afuera",
      "Para el paciente: comunica el beneficio, el resultado o la emoción",
    ],
  },
  gancho: {
    type: "score",
    instructions:
      "Cuánto invita este título a abrir el caso, visto en una galería de antes y después de un consultorio odontológico",
    criteria: [
      "Nulo: lo saltearía sin mirarlo",
      "Correcto pero olvidable",
      "Me da curiosidad, quiero ver el caso",
    ],
  },
  subtitulo_aporta: {
    type: "noul",
    instructions:
      "El subtítulo agrega información concreta que el título no dice (qué se hizo, por qué, " +
      "con qué técnica), en vez de repetir el título con otras palabras",
  },
};

/** Chequeos que no necesitan criterio: o se cumplen o no. */
function chequeosDuros({ titulo, subtitulo, slug, descripcion, copy }) {
  const fallas = [];
  const avisos = [];

  // Sólo al final del slug: `-10` en `gingivectomia-laser-10` es un número de secuencia,
  // pero el `-24-` de `implantes-24-ceramicas` es la cantidad de piezas y es información.
  if (/-\d{1,2}$/.test(slug)) fallas.push("el slug termina en un número de secuencia");
  if (titulo.trim().toLowerCase() === slug.trim().toLowerCase()) fallas.push("el título ES el slug");
  if (/\b(procedimiento|antes-despues|antes y despu[eé]s)\b/i.test(titulo)) {
    fallas.push("el título tiene palabras de relleno");
  }
  if ((descripcion ?? "").length < 100) fallas.push(`la descripción tiene ${(descripcion ?? "").length} caracteres (mínimo 100)`);
  if ((copy ?? "").length < 300) fallas.push(`el copy tiene ${(copy ?? "").length} caracteres (mínimo 300)`);
  if (!subtitulo?.trim()) fallas.push("no tiene subtítulo");

  // La guía pedía 8-10 palabras, pero los títulos que mejor funcionan en la galería son
  // frases partidas más largas. Se avisa, no se falla.
  const palabras = titulo.trim().split(/\s+/).length;
  if (palabras > 12) avisos.push(`el título tiene ${palabras} palabras`);

  return { fallas, avisos };
}

/** Combina los chequeos duros con el criterio de Jev en un veredicto único. */
function veredicto(duros, a) {
  const fallas = [...duros.fallas];
  const dudas = [];

  const gatillo = (cond, confianza, texto) => {
    if (!cond) return;
    if (confianza !== undefined && confianza < UMBRALES.confianzaMinima) dudas.push(texto);
    else fallas.push(texto);
  };

  gatillo(a.parece_slug.noul > UMBRALES.parecoSlug, undefined, `suena a slug (${a.parece_slug.noul.toFixed(2)})`);
  gatillo(a.tiene_relleno.noul > UMBRALES.relleno, undefined, `tiene relleno (${a.tiene_relleno.noul.toFixed(2)})`);
  gatillo(
    a.para_paciente.score < UMBRALES.paraPaciente,
    a.para_paciente.confidence,
    `está escrito para el dentista, no para el paciente (${a.para_paciente.score.toFixed(2)}/2)`,
  );
  gatillo(
    a.gancho.score < UMBRALES.gancho,
    a.gancho.confidence,
    `no invita al click (${a.gancho.score.toFixed(2)}/2)`,
  );
  if (a.subtitulo_aporta.noul < 0.4) dudas.push(`el subtítulo repite el título (${a.subtitulo_aporta.noul.toFixed(2)})`);

  const estado = fallas.length ? "MAL" : dudas.length || duros.avisos.length ? "REVISAR" : "BIEN";
  return { estado, fallas, dudas: [...dudas, ...duros.avisos] };
}

async function auditar(caso) {
  // El estado es sólo lo que se juzga. Mandarle el copy entero haría que el modelo
  // opine sobre el caso clínico en vez de sobre el título.
  const state =
    `Título: ${caso.titulo}\n` +
    `Subtítulo: ${caso.subtitulo}\n` +
    `Slug: ${caso.slug}\n` +
    `Contexto: es un caso clínico de una galería de antes y después de un consultorio de odontología estética.`;

  const { answers } = await preguntar(state, PREGUNTAS);
  return { caso, answers, ...veredicto(chequeosDuros(caso), answers) };
}

// --- entrada ---------------------------------------------------------------

const args = process.argv.slice(2);
const flag = (n) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 ? args[i + 1] : undefined;
};

let casos;
if (flag("titulo")) {
  // Modo pre-commit: se audita un caso suelto antes de que exista en el repo.
  casos = [
    {
      slug: flag("slug") ?? "",
      titulo: flag("titulo"),
      subtitulo: flag("subtitulo") ?? "",
      descripcion: flag("descripcion") ?? "x".repeat(100),
      copy: flag("copy") ?? "x".repeat(300),
    },
  ];
} else {
  const { getCasosPublicados } = await import(CASOS_TS);
  casos = getCasosPublicados();
}

const resultados = await enTandas(casos, 4, auditar);

if (args.includes("--json")) {
  console.log(JSON.stringify(resultados, null, 2));
} else {
  const icono = { BIEN: "✅", REVISAR: "⚠️ ", MAL: "❌" };
  for (const r of resultados) {
    console.log(`\n${icono[r.estado]} ${r.caso.titulo}`);
    console.log(`   ${r.caso.slug}`);
    const a = r.answers;
    console.log(
      `   paciente ${a.para_paciente.score.toFixed(2)}/2 · gancho ${a.gancho.score.toFixed(2)}/2 · ` +
        `slug ${a.parece_slug.noul.toFixed(2)} · subtítulo ${a.subtitulo_aporta.noul.toFixed(2)}`,
    );
    for (const f of r.fallas) console.log(`   ❌ ${f}`);
    for (const d of r.dudas) console.log(`   ⚠️  ${d}`);
  }

  const cuenta = (e) => resultados.filter((r) => r.estado === e).length;
  console.log(
    `\n─────\n${resultados.length} casos · ${cuenta("BIEN")} bien · ${cuenta("REVISAR")} a revisar · ${cuenta("MAL")} mal`,
  );
}

process.exit(resultados.some((r) => r.estado === "MAL") ? 1 : 0);
