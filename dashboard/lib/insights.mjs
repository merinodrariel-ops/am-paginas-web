/**
 * Motor de diagnóstico: cruza Ads × Search Console × leads × Core Web Vitals
 * y saca conclusiones accionables.
 *
 * Cada regla devuelve hallazgos con forma:
 *   { severidad, titulo, detalle, accion, evidencia[] }
 *
 * severidad: "critico" | "serio" | "alerta" | "oportunidad" | "bien"
 */

const pct = (n) => `${(n * 100).toFixed(1)}%`;
const money = (n, cur) =>
  `${cur === "USD" ? "US$" : "$"}${Math.round(n).toLocaleString("es-AR")}`;

function variacion(actual, previo) {
  if (!previo) return actual > 0 ? 1 : 0;
  return (actual - previo) / previo;
}

// ── Reglas ────────────────────────────────────────────────────────────────

/** Campañas activas que gastan y no traen ni una conversión. */
function campanasQueQueman({ ads }) {
  if (!ads) return [];
  const umbral = Math.max(ads.totals.cost * 0.05, 1);
  return ads.campaigns
    .filter((c) => c.status === "ENABLED" && c.cost >= umbral && c.conversions === 0)
    .map((c) => ({
      severidad: "critico",
      titulo: `"${c.name}" gastó sin una sola conversión`,
      detalle:
        `${money(c.cost, ads.currency)} y ${c.clicks} clicks en el período, ` +
        `cero conversiones registradas.`,
      accion:
        c.clicks < 20
          ? "Con tan pocos clicks todavía puede ser falta de volumen. Miralo de nuevo en una semana antes de tocar nada."
          : "Con ese volumen de clicks ya hay señal: revisá la landing, el seguimiento de conversión en GTM, y los términos de búsqueda que la disparan.",
      evidencia: [`${c.clicks} clicks`, `${money(c.cost, ads.currency)}`, "0 conversiones"],
    }));
}

/** Campañas cuyo costo por conversión se dispara sobre el promedio de la cuenta. */
function cpaFueraDeRango({ ads }) {
  if (!ads || !ads.totals.cpa) return [];
  const promedio = ads.totals.cpa;
  return ads.campaigns
    .filter((c) => c.conversions >= 2 && c.cpa && c.cpa > promedio * 1.8)
    .map((c) => ({
      severidad: "alerta",
      titulo: `"${c.name}" tiene un CPA ${(c.cpa / promedio).toFixed(1)}× el promedio`,
      detalle:
        `${money(c.cpa, ads.currency)} por conversión contra ` +
        `${money(promedio, ads.currency)} del promedio de la cuenta.`,
      accion:
        "Compará con el resto: si el tratamiento que trae justifica el costo, dejala. Si no, bajale presupuesto y movelo a las que rinden.",
      evidencia: [
        `CPA ${money(c.cpa, ads.currency)}`,
        `${c.conversions.toFixed(0)} conv.`,
        `promedio ${money(promedio, ads.currency)}`,
      ],
    }));
}

/** Términos de búsqueda caros que nunca convirtieron: candidatos a negativa. */
function terminosParaNegativizar({ searchTerms, ads }) {
  if (!searchTerms?.length || !ads) return [];
  const caros = searchTerms
    .filter((t) => t.conversions === 0 && t.clicks >= 3)
    .sort((a, b) => b.cost - a.cost)
    .slice(0, 8);
  if (!caros.length) return [];

  const total = caros.reduce((s, t) => s + t.cost, 0);
  return [
    {
      severidad: "alerta",
      titulo: `${caros.length} términos de búsqueda se llevaron ${money(total, ads.currency)} sin convertir`,
      detalle: caros
        .map((t) => `“${t.term}” — ${t.clicks} clicks, ${money(t.cost, ads.currency)}`)
        .join(" · "),
      accion:
        "Leelos uno por uno. Los que no tienen nada que ver con lo que ofrecés van como palabra clave negativa; los que sí, quizás necesitan su propio anuncio.",
      evidencia: caros.slice(0, 4).map((t) => `“${t.term}”`),
    },
  ];
}

/**
 * Canibalización: pagás por una búsqueda donde ya salís primero orgánicamente.
 * Este cruce es la razón de ser del dashboard — ninguna herramienta suelta lo ve.
 */
function canibalizacion({ searchTerms, gsc, ads }) {
  if (!searchTerms?.length || !gsc?.queries?.length || !ads) return [];

  const organico = new Map(gsc.queries.map((q) => [q.query.toLowerCase().trim(), q]));
  const solapados = [];
  for (const term of searchTerms) {
    const q = organico.get(term.term.toLowerCase().trim());
    if (q && q.position <= 3 && q.clicks >= 3 && term.cost > 0) {
      solapados.push({ term: term.term, cost: term.cost, clicks: term.clicks, pos: q.position });
    }
  }
  if (!solapados.length) return [];

  const total = solapados.reduce((s, t) => s + t.cost, 0);
  return [
    {
      severidad: "alerta",
      titulo: `Estás pagando por ${solapados.length} búsquedas donde ya salís en el top 3 orgánico`,
      detalle:
        `${money(total, ads.currency)} en términos donde el sitio ya aparece arriba sin pagar: ` +
        solapados
          .slice(0, 5)
          .map((t) => `“${t.term}” (pos. ${t.pos.toFixed(1)})`)
          .join(", "),
      accion:
        "No las cortes de una — a veces conviene ocupar las dos posiciones. Probá pausarlas dos semanas y mirá si los clicks orgánicos compensan; si compensan, ahorraste esa plata.",
      evidencia: solapados.slice(0, 4).map((t) => `“${t.term}” pos ${t.pos.toFixed(1)}`),
    },
  ];
}

/** Keywords atascadas en la segunda página: el mejor SEO por unidad de esfuerzo. */
function oportunidadesSegundaPagina({ gsc }) {
  if (!gsc?.queries?.length) return [];
  const candidatas = gsc.queries
    .filter((q) => q.position > 7 && q.position <= 20 && q.impressions >= 50)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 8);
  if (!candidatas.length) return [];

  const impresiones = candidatas.reduce((s, q) => s + q.impressions, 0);
  return [
    {
      severidad: "oportunidad",
      titulo: `${candidatas.length} búsquedas a un empujón de la primera página`,
      detalle:
        `${impresiones.toLocaleString("es-AR")} impresiones entre todas, en posiciones 8 a 20: ` +
        candidatas
          .slice(0, 5)
          .map((q) => `“${q.query}” (pos. ${q.position.toFixed(0)})`)
          .join(", "),
      accion:
        "Estas ya rankean, sólo están abajo. Reforzá la página que las trabaja: título más directo, responder la búsqueda en el primer párrafo, y enlaces internos desde páginas que ya andan bien.",
      evidencia: candidatas.slice(0, 4).map((q) => `“${q.query}” pos ${q.position.toFixed(0)}`),
    },
  ];
}

/** Páginas con muchas impresiones y CTR muy por debajo del promedio del sitio. */
function titulosQueNoSeClickean({ gsc }) {
  if (!gsc?.pages?.length || !gsc.totals.impressions) return [];
  const promedio = gsc.totals.ctr;
  const flojas = gsc.pages
    .filter((p) => p.impressions >= 200 && p.ctr < promedio * 0.5)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 6);
  if (!flojas.length) return [];

  return [
    {
      severidad: "alerta",
      titulo: `${flojas.length} páginas se muestran mucho y se clickean poco`,
      detalle:
        `CTR del sitio: ${pct(promedio)}. Estas están a menos de la mitad: ` +
        flojas
          .map((p) => `${new URL(p.page).pathname} (${pct(p.ctr)}, ${p.impressions} impr.)`)
          .join(" · "),
      accion:
        "Google las muestra, la gente no entra: el problema está en el título y la descripción que aparecen en el resultado, no en la página. Reescribilos.",
      evidencia: flojas.slice(0, 4).map((p) => new URL(p.page).pathname),
    },
  ];
}

/** Comparación contra el período anterior en las métricas que importan. */
function tendencias({ ads, gsc, leads, previo }) {
  if (!previo) return [];
  const out = [];

  const entero = (v) => Math.round(v).toLocaleString("es-AR");

  const revisar = ({
    nombre, actual, anterior,
    invertir = false, umbral = 0.25, plural = false,
    formato = entero,
  }) => {
    if (anterior == null || actual == null) return;
    if (anterior < 5 && actual < 5) return; // números chicos: el % miente
    const delta = variacion(actual, anterior);
    const malo = invertir ? delta > umbral : delta < -umbral;
    const bueno = invertir ? delta < -umbral : delta > umbral;
    if (!malo && !bueno) return;

    out.push({
      severidad: malo ? "serio" : "bien",
      titulo:
        `${nombre} ${delta > 0 ? (plural ? "subieron" : "subió") : plural ? "bajaron" : "bajó"} ` +
        `${pct(Math.abs(delta))} vs. el período anterior`,
      detalle: `${formato(actual)} contra ${formato(anterior)} del período previo de igual duración.`,
      accion: malo
        ? "Mirá si coincide con algún cambio: campaña pausada, presupuesto tocado, página que se rompió o cayó el ranking."
        : "Fijate qué lo empujó y reforzá eso.",
      evidencia: [formato(actual), `antes ${formato(anterior)}`],
    });
  };

  if (leads) revisar({ nombre: "Los leads del formulario", actual: leads.total, anterior: previo.leads, plural: true });
  if (gsc) revisar({ nombre: "Los clicks orgánicos", actual: gsc.totals.clicks, anterior: previo.gscClicks, plural: true });
  if (ads) {
    revisar({ nombre: "Las conversiones de Ads", actual: Math.round(ads.totals.conversions), anterior: Math.round(previo.adsConversions ?? 0), plural: true });
    revisar({
      nombre: "El costo por conversión",
      actual: ads.totals.cpa,
      anterior: previo.adsCpa,
      invertir: true,
      umbral: 0.3,
      formato: (v) => money(v, ads.currency),
    });
  }

  return out;
}

/** Gasto para arriba y conversiones para abajo al mismo tiempo. */
function tijeraDeEficiencia({ ads, previo }) {
  if (!ads || !previo?.adsCost) return [];
  const dCosto = variacion(ads.totals.cost, previo.adsCost);
  const dConv = variacion(ads.totals.conversions, previo.adsConversions);
  if (dCosto <= 0.15 || dConv >= -0.15) return [];

  return [
    {
      severidad: "serio",
      titulo: "La inversión sube y las conversiones bajan",
      detalle:
        `Gasto ${dCosto > 0 ? "+" : ""}${pct(dCosto)} y conversiones ${pct(dConv)} respecto del período anterior. ` +
        "Estás pagando más por menos.",
      accion:
        "Primero descartá lo aburrido: que el seguimiento de conversiones siga funcionando (probá el click de WhatsApp y mirá si llega a Ads). Si el tracking está bien, es competencia o pujas.",
      evidencia: [`costo ${pct(dCosto)}`, `conversiones ${pct(dConv)}`],
    },
  ];
}

/** El embudo completo: sin conversión de visita a lead, lo demás no importa. */
function embudoFlojo({ ads, gsc, leads }) {
  if (!leads) return [];
  const visitas = (ads?.totals.clicks || 0) + (gsc?.totals.clicks || 0);
  if (visitas < 100) return [];
  const tasa = leads.total / visitas;
  if (tasa >= 0.01) return [];

  return [
    {
      severidad: "alerta",
      titulo: `De cada 100 visitas, menos de 1 deja los datos (${pct(tasa)})`,
      detalle:
        `${visitas.toLocaleString("es-AR")} clicks entre orgánico y pago, ${leads.total} leads del formulario.`,
      accion:
        "Ojo: mucha gente escribe directo por WhatsApp sin pasar por el formulario, así que el número real es mejor. Verificá que las conversiones de WhatsApp estén llegando antes de tocar la página.",
      evidencia: [`${visitas.toLocaleString("es-AR")} visitas`, `${leads.total} leads`],
    },
  ];
}

/** Core Web Vitals en rojo — Google lo usa para rankear y el usuario lo sufre. */
function vitalsEnRojo({ vitals }) {
  const movil = vitals?.movil;
  if (!movil?.tieneDatosDeCampo) return [];
  const malas = movil.metricas.filter((m) => m.estado === "mal");
  if (!malas.length) return [];

  return [
    {
      severidad: "alerta",
      titulo: `${malas.length} métrica${malas.length > 1 ? "s" : ""} de velocidad en rojo en celular`,
      detalle: malas
        .map((m) => `${m.label}: ${m.valor.toFixed(m.unidad ? 0 : 2)}${m.unidad} (debería ser ≤ ${m.umbralBien}${m.unidad})`)
        .join(" · "),
      accion:
        "Son datos de usuarios reales, no de laboratorio. LCP alto suele ser una imagen grande arriba de todo; CLS es algo que se mueve mientras carga.",
      evidencia: malas.map((m) => m.label),
    },
  ];
}

// ── Orquestador ───────────────────────────────────────────────────────────

const ORDEN = { critico: 0, serio: 1, alerta: 2, oportunidad: 3, bien: 4 };

export function analizar(contexto) {
  const reglas = [
    campanasQueQueman,
    tijeraDeEficiencia,
    canibalizacion,
    cpaFueraDeRango,
    terminosParaNegativizar,
    titulosQueNoSeClickean,
    embudoFlojo,
    vitalsEnRojo,
    oportunidadesSegundaPagina,
    tendencias,
  ];

  const hallazgos = [];
  for (const regla of reglas) {
    try {
      hallazgos.push(...regla(contexto));
    } catch (e) {
      // Una regla rota no puede tumbar el diagnóstico entero.
      hallazgos.push({
        severidad: "alerta",
        titulo: `La regla "${regla.name}" falló`,
        detalle: e.message,
        accion: "Es un bug del dashboard, no de la cuenta.",
        evidencia: [],
      });
    }
  }

  hallazgos.sort((a, b) => ORDEN[a.severidad] - ORDEN[b.severidad]);

  // Sin todas las fuentes, "no encontré nada" no significa "está todo bien".
  const caidas = (contexto.problemas || []).map((p) => p.fuente);
  if (caidas.length) {
    hallazgos.unshift({
      severidad: "serio",
      titulo: `El diagnóstico está incompleto: ${caidas.join(", ")} no respond${caidas.length > 1 ? "en" : "e"}`,
      detalle:
        "Las reglas que cruzan esas fuentes no pudieron correr, así que lo que ves abajo es parcial.",
      accion: contexto.problemas[0]?.hint || "Revisá las credenciales en .env.ads.",
      evidencia: caidas,
    });
  } else if (!hallazgos.length) {
    hallazgos.push({
      severidad: "bien",
      titulo: "Nada que corregir en este período",
      detalle:
        "Ninguna regla se disparó: no hay campañas quemando plata, ni caídas fuertes, ni páginas con CTR anómalo.",
      accion: "Seguí como venís.",
      evidencia: [],
    });
  }

  return hallazgos;
}
