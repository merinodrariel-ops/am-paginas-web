/* Dashboard AM — render. Sin dependencias: SVG a mano. */

const $ = (sel) => document.querySelector(sel);
const el = (tag, attrs = {}, ...hijos) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else if (k === "html") n.innerHTML = v;
    else if (v != null) n.setAttribute(k, v);
  }
  for (const h of hijos.flat()) if (h != null) n.append(h);
  return n;
};
const svgEl = (tag, attrs = {}) => {
  const n = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) n.setAttribute(k, v);
  return n;
};

// ── Formato ────────────────────────────────────────────────────────────────

let MONEDA = "ARS";
const nf = new Intl.NumberFormat("es-AR");
const n0 = (v) => nf.format(Math.round(Number(v) || 0));
const n1 = (v) => (Number(v) || 0).toFixed(1);
const pct = (v) => `${((Number(v) || 0) * 100).toFixed(1)}%`;
const plata = (v) =>
  `${MONEDA === "USD" ? "US$" : "$"}${nf.format(Math.round(Number(v) || 0))}`;
const fechaCorta = (iso) => {
  const [, m, d] = iso.split("-");
  return `${Number(d)}/${Number(m)}`;
};

/**
 * Índices donde va etiqueta en el eje x. Incluye el último sólo si no queda
 * pegado al anterior — si no, aparecen dos fechas encimadas al final.
 */
function marcasEjeX(largo, maximo = 6) {
  if (largo <= 1) return [0];
  const paso = Math.max(1, Math.ceil(largo / maximo));
  const idx = [];
  for (let i = 0; i < largo; i += paso) idx.push(i);
  const ultimo = largo - 1;
  if (ultimo - idx[idx.length - 1] >= paso * 0.6) idx.push(ultimo);
  return idx;
}

/** Techo "redondo" para el eje: 31.742 → 40.000, y no 31.742/4 por marca. */
function techoLindo(valor) {
  if (valor <= 0) return 1;
  const magnitud = 10 ** Math.floor(Math.log10(valor));
  for (const m of [1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10]) {
    if (m * magnitud >= valor) return m * magnitud;
  }
  return 10 * magnitud;
}

/**
 * Rellena con cero los días sin datos. Sin esto un gráfico de 28 días con 7
 * leads se dibuja como 7 barras seguidas y parece que llueven leads.
 */
function porDia(filas, since, until, campo) {
  const valores = new Map(filas.map((f) => [f.date, f[campo] ?? 0]));
  const salida = [];
  for (let d = new Date(since + "T00:00:00Z"); ; d.setUTCDate(d.getUTCDate() + 1)) {
    const iso = d.toISOString().slice(0, 10);
    salida.push({ x: iso, y: valores.get(iso) ?? 0 });
    if (iso >= until) break;
  }
  return salida;
}
const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

/** Delta contra el período anterior, con dirección semántica. */
function delta(actual, previo, { menosEsMejor = false } = {}) {
  if (previo == null || previo === 0 || actual == null) return null;
  const cambio = (actual - previo) / previo;
  const bueno = menosEsMejor ? cambio < 0 : cambio > 0;
  return { cambio, bueno, texto: `${cambio > 0 ? "+" : ""}${(cambio * 100).toFixed(0)}%` };
}

function tile({ label, value, delta: d, nota, hero = false }) {
  const cuerpo = [
    el("div", { class: "label" }, label),
    el("div", { class: `value${hero ? " hero" : ""}` }, value),
  ];
  if (d) {
    cuerpo.push(
      el(
        "div",
        { class: "delta" },
        el("span", { class: d.bueno ? "up" : "down" }, `${d.bueno ? "↑" : "↓"} ${d.texto}`),
        " vs. período anterior"
      )
    );
  }
  if (nota) cuerpo.push(el("div", { class: "note" }, nota));
  return el("div", { class: "card tile" }, cuerpo);
}

// ── Gráfico de líneas con crosshair ────────────────────────────────────────

function lineChart(cont, { series, alto = 200, formato = n0, etiquetaX = fechaCorta }) {
  cont.innerHTML = "";
  const puntos = series.flatMap((s) => s.puntos);
  if (!puntos.length) {
    cont.append(el("div", { class: "vacio" }, "Sin datos en este período."));
    return;
  }

  const W = Math.max(cont.clientWidth || 520, 280);
  const H = alto;
  const pad = { t: 12, r: 52, b: 26, l: 46 };

  // El eje x se arma con la unión ordenada de fechas de todas las series.
  const fechas = [...new Set(puntos.map((p) => p.x))].sort();
  const maxY = techoLindo(Math.max(1, ...puntos.map((p) => p.y)));
  const px = (x) =>
    pad.l + (fechas.length < 2 ? 0 : (fechas.indexOf(x) / (fechas.length - 1)) * (W - pad.l - pad.r));
  const py = (y) => H - pad.b - (y / maxY) * (H - pad.t - pad.b);

  const svg = svgEl("svg", { viewBox: `0 0 ${W} ${H}`, height: H, role: "img" });

  // Grilla + eje y
  for (let i = 0; i <= 4; i++) {
    const v = (maxY / 4) * i;
    const y = py(v);
    svg.append(svgEl("line", { class: "gridline", x1: pad.l, x2: W - pad.r, y1: y, y2: y }));
    const t = svgEl("text", { class: "tick", x: pad.l - 8, y: y + 4, "text-anchor": "end" });
    t.textContent = formato(v);
    svg.append(t);
  }
  svg.append(
    svgEl("line", { class: "axisline", x1: pad.l, x2: W - pad.r, y1: py(0), y2: py(0) })
  );

  // Eje x: pocas etiquetas para que no se pisen.
  for (const i of marcasEjeX(fechas.length)) {
    const f = fechas[i];
    const t = svgEl("text", { class: "tick", x: px(f), y: H - pad.b + 16, "text-anchor": "middle" });
    t.textContent = etiquetaX(f);
    svg.append(t);
  }

  // Series
  for (const s of series) {
    const orden = [...s.puntos].sort((a, b) => a.x.localeCompare(b.x));
    if (!orden.length) continue;
    const d = orden.map((p, i) => `${i ? "L" : "M"}${px(p.x)},${py(p.y)}`).join(" ");
    svg.append(
      svgEl("path", {
        d,
        fill: "none",
        stroke: s.color,
        "stroke-width": 2,
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
      })
    );
    // Etiqueta directa en el extremo: la identidad no depende sólo del color.
    const ultimo = orden[orden.length - 1];
    const lbl = svgEl("text", {
      class: "serie-label",
      x: px(ultimo.x) + 8,
      y: py(ultimo.y) + 4,
      fill: s.color,
    });
    lbl.textContent = s.nombre;
    svg.append(lbl);
  }

  // Capa de hover
  const cursor = svgEl("line", {
    class: "axisline",
    y1: pad.t,
    y2: H - pad.b,
    opacity: 0,
    "stroke-width": 1,
  });
  svg.append(cursor);
  const marcas = series.map((s) => {
    const c = svgEl("circle", {
      r: 4.5,
      fill: s.color,
      stroke: cssVar("--surface"),
      "stroke-width": 2,
      opacity: 0,
    });
    svg.append(c);
    return c;
  });

  const tip = el("div", { class: "tooltip" });
  cont.append(svg, tip);

  const capa = svgEl("rect", {
    x: pad.l,
    y: pad.t,
    width: Math.max(1, W - pad.l - pad.r),
    height: Math.max(1, H - pad.t - pad.b),
    fill: "transparent",
  });
  svg.append(capa);

  const salir = () => {
    cursor.setAttribute("opacity", 0);
    marcas.forEach((m) => m.setAttribute("opacity", 0));
    tip.classList.remove("on");
  };

  capa.addEventListener("mousemove", (ev) => {
    const caja = svg.getBoundingClientRect();
    const escala = W / caja.width;
    const x = (ev.clientX - caja.left) * escala;
    const frac = (x - pad.l) / Math.max(1, W - pad.l - pad.r);
    const idx = Math.max(0, Math.min(fechas.length - 1, Math.round(frac * (fechas.length - 1))));
    const fecha = fechas[idx];

    cursor.setAttribute("x1", px(fecha));
    cursor.setAttribute("x2", px(fecha));
    cursor.setAttribute("opacity", 1);

    const filas = [];
    series.forEach((s, i) => {
      const p = s.puntos.find((q) => q.x === fecha);
      if (!p) return marcas[i].setAttribute("opacity", 0);
      marcas[i].setAttribute("cx", px(fecha));
      marcas[i].setAttribute("cy", py(p.y));
      marcas[i].setAttribute("opacity", 1);
      filas.push(
        `<div class="t-fila"><span><i style="background:${s.color}"></i> ${s.nombre}</span><b>${formato(p.y)}</b></div>`
      );
    });

    tip.innerHTML = `<div class="t-fecha">${fecha}</div>${filas.join("")}`;
    tip.classList.add("on");
    const izq = px(fecha) / escala;
    tip.style.left = `${Math.min(Math.max(izq - 65, 0), caja.width - 150)}px`;
    tip.style.top = "0px";
  });
  capa.addEventListener("mouseleave", salir);

  // Vista de tabla: alternativa accesible y respaldo cuando el color falla.
  cont.append(
    tablaAlterna(
      "Ver como tabla",
      ["Fecha", ...series.map((s) => s.nombre)],
      fechas.map((f) => [f, ...series.map((s) => formato(s.puntos.find((p) => p.x === f)?.y ?? 0))])
    )
  );
}

// ── Gráfico de barras diario ───────────────────────────────────────────────

function barChart(cont, { datos, color, alto = 200, formato = n0, titulo = "Valor" }) {
  cont.innerHTML = "";
  if (!datos.length) {
    cont.append(el("div", { class: "vacio" }, "Sin datos en este período."));
    return;
  }

  const W = Math.max(cont.clientWidth || 520, 280);
  const H = alto;
  const pad = { t: 12, r: 12, b: 26, l: 46 };
  const maxY = techoLindo(Math.max(1, ...datos.map((d) => d.y)));
  const ancho = (W - pad.l - pad.r) / datos.length;
  const py = (y) => H - pad.b - (y / maxY) * (H - pad.t - pad.b);

  const svg = svgEl("svg", { viewBox: `0 0 ${W} ${H}`, height: H, role: "img" });

  for (let i = 0; i <= 4; i++) {
    const v = (maxY / 4) * i;
    const y = py(v);
    svg.append(svgEl("line", { class: "gridline", x1: pad.l, x2: W - pad.r, y1: y, y2: y }));
    const t = svgEl("text", { class: "tick", x: pad.l - 8, y: y + 4, "text-anchor": "end" });
    t.textContent = formato(v);
    svg.append(t);
  }

  const tip = el("div", { class: "tooltip" });

  datos.forEach((d, i) => {
    const x = pad.l + i * ancho;
    const alturaBarra = Math.max(0, py(0) - py(d.y));
    const w = Math.max(1, ancho - 2); // 2px de aire entre barras, no un borde
    const r = svgEl("rect", {
      x,
      y: py(d.y),
      width: w,
      height: alturaBarra,
      rx: Math.min(4, w / 2),
      fill: color,
    });
    // La barra en cero no se ve: damos igual un blanco de hover usable.
    const hit = svgEl("rect", {
      x,
      y: pad.t,
      width: w,
      height: H - pad.t - pad.b,
      fill: "transparent",
    });
    hit.addEventListener("mouseenter", () => {
      r.setAttribute("opacity", 0.75);
      tip.innerHTML = `<div class="t-fecha">${d.x}</div><div class="t-fila"><span><i style="background:${color}"></i> ${titulo}</span><b>${formato(d.y)}</b></div>`;
      tip.classList.add("on");
      tip.style.left = `${Math.min(Math.max(x - 60, 0), W - 150)}px`;
      tip.style.top = "0px";
    });
    hit.addEventListener("mouseleave", () => {
      r.removeAttribute("opacity");
      tip.classList.remove("on");
    });
    svg.append(r, hit);
  });

  svg.append(svgEl("line", { class: "axisline", x1: pad.l, x2: W - pad.r, y1: py(0), y2: py(0) }));

  for (const i of marcasEjeX(datos.length)) {
    const t = svgEl("text", {
      class: "tick",
      x: pad.l + i * ancho + ancho / 2,
      y: H - pad.b + 16,
      "text-anchor": "middle",
    });
    t.textContent = fechaCorta(datos[i].x);
    svg.append(t);
  }

  cont.append(svg, tip);
  cont.append(
    tablaAlterna("Ver como tabla", ["Fecha", titulo], datos.map((d) => [d.x, formato(d.y)]))
  );
}

function tablaAlterna(rotulo, cabeceras, filas) {
  const d = el("details", { class: "tabla-alt" }, el("summary", {}, rotulo));
  d.append(el("div", { class: "tabla-scroll" }, tabla(cabeceras, filas)));
  return d;
}

function tabla(cabeceras, filas) {
  const t = el("table");
  t.append(el("thead", {}, el("tr", {}, cabeceras.map((c) => el("th", {}, String(c))))));
  t.append(
    el(
      "tbody",
      {},
      filas.map((fila) =>
        el(
          "tr",
          {},
          fila.map((celda) =>
            celda && celda.nodeType ? el("td", {}, celda) : el("td", {}, String(celda ?? "—"))
          )
        )
      )
    )
  );
  return t;
}

/** Celda con barra de fondo proporcional — magnitud sin gastar un gráfico. */
function celdaBarra(texto, fraccion, color = "var(--s1)") {
  const c = el("span", {}, texto);
  const barra = el("i");
  barra.style.width = `${Math.max(0, Math.min(1, fraccion)) * 100}%`;
  barra.style.background = color;
  const cont = el("div", { class: "barra" }, barra, c);
  return cont;
}

// ── Embudo ─────────────────────────────────────────────────────────────────

function renderEmbudo(cont, etapas) {
  cont.innerHTML = "";
  const validas = etapas.filter((e) => e.valor != null);
  if (!validas.length) {
    cont.append(el("div", { class: "vacio" }, "Faltan fuentes para armar el embudo."));
    return;
  }
  const max = Math.max(1, ...validas.map((e) => e.valor));
  const ramp = ["--ord-1", "--ord-2", "--ord-3", "--ord-4"];
  const caja = el("div", { class: "embudo" });

  validas.forEach((e, i) => {
    const frac = e.valor / max;
    const relleno = el("div", { class: "relleno" });
    relleno.style.width = `${Math.max(frac * 100, 0.5)}%`;
    relleno.style.background = `var(${ramp[Math.min(i, ramp.length - 1)]})`;

    // Si la barra es angosta el texto no entra: se va afuera en vez de recortarse.
    const adentro = frac > 0.28;
    const txt = el("span", { class: `txt${adentro ? "" : " afuera"}` }, e.nombre);
    if (!adentro) txt.style.color = "var(--ink)";
    const pista = el("div", { class: "pista" }, relleno, txt);

    caja.append(
      el("div", { class: "etapa" }, pista, el("div", { class: "cifra" }, n0(e.valor)))
    );

    const siguiente = validas[i + 1];
    if (siguiente) {
      const tasa = e.valor ? siguiente.valor / e.valor : 0;
      caja.append(el("div", { class: "paso" }, `↓ ${pct(tasa)} pasa a "${siguiente.nombre}"`));
    }
  });

  cont.append(caja);
  cont.append(
    tablaAlterna(
      "Ver como tabla",
      ["Etapa", "Cantidad", "Fuente"],
      validas.map((e) => [e.nombre, n0(e.valor), e.fuente])
    )
  );
}

// ── Diagnóstico ────────────────────────────────────────────────────────────

const ICONO = { critico: "🔴", serio: "🟠", alerta: "🟡", oportunidad: "🔵", bien: "🟢" };
const ROTULO = {
  critico: "Crítico",
  serio: "Serio",
  alerta: "Revisar",
  oportunidad: "Oportunidad",
  bien: "Bien",
};

function renderDiagnostico(cont, hallazgos) {
  cont.innerHTML = "";
  for (const h of hallazgos) {
    cont.append(
      el(
        "div",
        { class: "hallazgo" },
        el("div", { class: "icono" }, ICONO[h.severidad] || "•"),
        el(
          "div",
          {},
          el("div", { class: `sev sev-${h.severidad}` }, ROTULO[h.severidad] || h.severidad),
          el("h3", {}, h.titulo),
          el("p", {}, h.detalle),
          el("div", { class: "accion" }, el("b", {}, "Qué hacer: "), h.accion),
          h.evidencia?.length
            ? el("div", { class: "chips" }, h.evidencia.map((e) => el("span", { class: "chip" }, e)))
            : null
        )
      )
    );
  }
}

// ── Render principal ───────────────────────────────────────────────────────

let ultimoPanel = null;

function render(p) {
  ultimoPanel = p;
  MONEDA = p.ads?.currency || "ARS";

  $("#sub").textContent =
    `${p.rango.since} → ${p.rango.until} · ${p.rango.dias} días` +
    (p.gsc ? ` · SEO hasta ${p.rangoSeo.until}` : "");

  // Selector de propiedades de Search Console. Sin conexión no hay lista que
  // mostrar, así que el control se esconde en vez de quedar como un combo vacío.
  const sel = $("#sitio");
  sel.hidden = !p.sitios?.length;
  if (p.sitios?.length && sel.options.length !== p.sitios.length) {
    sel.innerHTML = "";
    for (const s of p.sitios) {
      sel.append(el("option", { value: s.url, selected: s.url === p.sitioSeo ? "" : null }, s.url));
    }
  }

  // Avisos de fuentes caídas.
  const avisos = $("#avisos");
  avisos.innerHTML = "";
  for (const pr of p.problemas || []) {
    avisos.append(
      el(
        "div",
        { class: "aviso" },
        el("b", {}, `${pr.fuente} no respondió`),
        el("div", {}, pr.error),
        pr.hint ? el("div", { html: `<br>${pr.hint.replace(/`([^`]+)`/g, "<code>$1</code>")}` }) : null
      )
    );
  }

  // KPIs
  const k = $("#kpis");
  k.innerHTML = "";
  const ads = p.ads, gsc = p.gsc, leads = p.leads, prev = p.previo || {};

  k.append(
    tile({
      label: "Leads del formulario",
      value: leads ? n0(leads.total) : "—",
      delta: leads ? delta(leads.total, prev.leads) : null,
      hero: true,
      nota: "No incluye quien escribe directo por WhatsApp",
    })
  );
  if (ads) {
    k.append(
      tile({ label: "Inversión en Ads", value: plata(ads.totals.cost), delta: delta(ads.totals.cost, prev.adsCost) }),
      tile({
        label: "Conversiones de Ads",
        value: n1(ads.totals.conversions),
        delta: delta(ads.totals.conversions, prev.adsConversions),
      }),
      tile({
        label: "Costo por conversión",
        value: ads.totals.cpa ? plata(ads.totals.cpa) : "—",
        delta: ads.totals.cpa ? delta(ads.totals.cpa, prev.adsCpa, { menosEsMejor: true }) : null,
      }),
      tile({ label: "Clicks pagos", value: n0(ads.totals.clicks), nota: `CTR ${pct(ads.totals.ctr)}` })
    );
  }
  if (gsc) {
    k.append(
      tile({
        label: "Clicks orgánicos",
        value: n0(gsc.totals.clicks),
        delta: delta(gsc.totals.clicks, prev.gscClicks),
      }),
      tile({
        label: "Impresiones orgánicas",
        value: n0(gsc.totals.impressions),
        nota: `CTR ${pct(gsc.totals.ctr)} · posición media ${n1(gsc.totals.position)}`,
      })
    );
  }
  if (p.ga4) {
    k.append(
      tile({
        label: "Sesiones (GA4)",
        value: n0(p.ga4.totals.sessions),
        delta: delta(p.ga4.totals.sessions, prev.sessions),
        nota: `${n0(p.ga4.totals.users)} usuarios`,
      })
    );
  }

  renderDiagnostico($("#diagnostico"), p.diagnostico || []);

  // Embudo. Una etapa sin fuente viva se omite: mostrarla en cero haría que
  // el paso siguiente diga "0% convierte", que es mentira, no un dato.
  const hayVisitas = Boolean(p.ga4 || ads || gsc);
  const visitas = p.ga4?.totals.sessions ?? (ads?.totals.clicks || 0) + (gsc?.totals.clicks || 0);
  renderEmbudo($("#embudo"), [
    gsc ? { nombre: "Vieron el sitio en Google", valor: gsc.totals.impressions, fuente: "Search Console" } : null,
    hayVisitas ? { nombre: "Entraron al sitio", valor: visitas, fuente: p.ga4 ? "GA4" : "Ads + Search Console" } : null,
    leads ? { nombre: "Dejaron sus datos", valor: leads.total, fuente: "Supabase" } : null,
  ].filter(Boolean));

  // Gráficos
  const { since, until } = p.rango;

  // Ads llega hasta ayer y Search Console hasta hace 3 días. Para compararlos
  // en el mismo eje usamos la intersección: si no, el orgánico se desplomaría
  // sobre el final del gráfico sólo porque Google todavía no publicó esos días.
  const desde = since > p.rangoSeo.since ? since : p.rangoSeo.since;
  const hasta = until < p.rangoSeo.until ? until : p.rangoSeo.until;
  $("#nota-clicks").textContent = gsc ? `${desde} → ${hasta}` : "";

  lineChart($("#chart-clicks"), {
    series: [
      ads ? { nombre: "Pago", color: cssVar("--s1"), puntos: porDia(ads.series, desde, hasta, "clicks") } : null,
      gsc ? { nombre: "Orgánico", color: cssVar("--s2"), puntos: porDia(gsc.series, desde, hasta, "clicks") } : null,
    ].filter(Boolean),
  });

  barChart($("#chart-costo"), {
    datos: ads ? porDia(ads.series, since, until, "cost") : [],
    color: cssVar("--s1"),
    formato: plata,
    titulo: "Inversión",
  });

  barChart($("#chart-leads"), {
    datos: leads ? porDia(leads.series, since, until, "leads") : [],
    color: cssVar("--s3"),
    titulo: "Leads",
  });

  // Campañas
  const tc = $("#tabla-campanas");
  tc.innerHTML = "";
  if (ads?.campaigns.length) {
    const maxCosto = Math.max(...ads.campaigns.map((c) => c.cost), 1);
    tc.append(
      tabla(
        ["Campaña", "Estado", "Impresiones", "Clicks", "CTR", "Inversión", "Conv.", "CPA"],
        ads.campaigns.map((c) => [
          c.name,
          c.status === "ENABLED" ? "Activa" : c.status === "PAUSED" ? "Pausada" : c.status,
          n0(c.impressions),
          n0(c.clicks),
          pct(c.ctr),
          celdaBarra(plata(c.cost), c.cost / maxCosto),
          n1(c.conversions),
          c.cpa ? plata(c.cpa) : "—",
        ])
      )
    );
  } else {
    tc.append(el("div", { class: "vacio" }, "Sin datos de campañas."));
  }

  // SEO
  const tq = $("#tabla-queries");
  tq.innerHTML = "";
  if (gsc?.queries.length) {
    const max = Math.max(...gsc.queries.map((q) => q.clicks), 1);
    tq.append(
      tabla(
        ["Búsqueda", "Clicks", "Impr.", "CTR", "Pos."],
        gsc.queries.slice(0, 20).map((q) => [
          q.query,
          celdaBarra(n0(q.clicks), q.clicks / max, "var(--s2)"),
          n0(q.impressions),
          pct(q.ctr),
          n1(q.position),
        ])
      )
    );
  } else {
    tq.append(el("div", { class: "vacio" }, "Sin datos de Search Console."));
  }

  const tp = $("#tabla-paginas");
  tp.innerHTML = "";
  if (gsc?.pages.length) {
    const max = Math.max(...gsc.pages.map((q) => q.clicks), 1);
    tp.append(
      tabla(
        ["Página", "Clicks", "Impr.", "CTR", "Pos."],
        gsc.pages.slice(0, 20).map((q) => [
          new URL(q.page).pathname,
          celdaBarra(n0(q.clicks), q.clicks / max, "var(--s2)"),
          n0(q.impressions),
          pct(q.ctr),
          n1(q.position),
        ])
      )
    );
  } else {
    tp.append(el("div", { class: "vacio" }, "Sin datos de Search Console."));
  }

  // Core Web Vitals
  const v = $("#vitals");
  v.innerHTML = "";
  const movil = p.vitals?.movil;
  if (movil?.tieneDatosDeCampo) {
    v.append(
      el(
        "div",
        { class: "grid tiles" },
        movil.metricas.map((m) =>
          el(
            "div",
            {},
            el("div", { class: "label", style: "font-size:12px;color:var(--ink-muted)" }, m.label),
            el(
              "div",
              { class: "vital" },
              el(
                "span",
                { class: `v estado-${m.estado}` },
                m.unidad === "ms" ? `${n0(m.valor)} ms` : m.valor.toFixed(2)
              )
            ),
            el(
              "div",
              { class: "note", style: "font-size:11px;color:var(--ink-muted)" },
              `${m.estado === "bien" ? "✓ Bien" : m.estado === "regular" ? "△ Regular" : "✕ Mal"} · meta ≤ ${m.umbralBien}${m.unidad}`
            )
          )
        )
      )
    );
    v.append(
      el(
        "div",
        { class: "note", style: "margin-top:10px;font-size:11.5px;color:var(--ink-muted)" },
        `Datos de usuarios reales (CrUX, ventana de 28 días) · ${p.vitals.url}`
      )
    );
  } else if (p.vitals?.error) {
    v.append(el("div", { class: "vacio" }, p.vitals.error), p.vitals.hint ? el("div", { class: "vacio" }, p.vitals.hint) : null);
  } else {
    v.append(
      el("div", { class: "vacio" }, "Midiendo… la primera medición tarda ~30s. Refrescá en un momento.")
    );
  }

  // Leads por tratamiento
  const lt = $("#leads-tratamiento");
  lt.innerHTML = "";
  if (leads?.porTratamiento.length) {
    const max = Math.max(...leads.porTratamiento.map((t) => t.value), 1);
    lt.append(
      tabla(
        ["Tratamiento", "Leads"],
        leads.porTratamiento.slice(0, 12).map((t) => [
          t.label,
          celdaBarra(n0(t.value), t.value / max, "var(--s3)"),
        ])
      )
    );
  } else {
    lt.append(el("div", { class: "vacio" }, "Sin leads en el período."));
  }

  // Últimos leads
  const tl = $("#tabla-leads");
  tl.innerHTML = "";
  if (leads?.recientes.length) {
    tl.append(
      tabla(
        ["Nombre", "Barrio", "Tratamiento", "Origen", "Estado", "Score", "Fecha"],
        leads.recientes.map((l) => [l.nombre, l.barrio, l.tratamiento, l.origen, l.estado, l.score ?? "—", l.fecha])
      )
    );
    tl.append(
      el(
        "div",
        { class: "note", style: "margin-top:10px;font-size:11.5px;color:var(--ink-muted)" },
        "Los nombres van abreviados y el contacto no sale del servidor: esto mide, no reemplaza al CRM."
      )
    );
  } else {
    tl.append(el("div", { class: "vacio" }, "Sin leads en el período."));
  }
}

// ── Estado y eventos ───────────────────────────────────────────────────────

let dias = 28;
let sitio = null;

async function cargar({ refrescar = false } = {}) {
  $("#sub").textContent = "Cargando…";
  const params = new URLSearchParams({ dias: String(dias) });
  if (sitio) params.set("site", sitio);
  if (refrescar) params.set("refrescar", "1");
  try {
    const r = await fetch(`/api/panel?${params}`);
    render(await r.json());
  } catch (e) {
    $("#sub").textContent = "Error: " + e.message;
  }
}

for (const b of document.querySelectorAll("[data-dias]")) {
  b.addEventListener("click", () => {
    document.querySelectorAll("[data-dias]").forEach((x) => x.removeAttribute("aria-pressed"));
    b.setAttribute("aria-pressed", "true");
    dias = Number(b.dataset.dias);
    cargar();
  });
}
$("#sitio").addEventListener("change", (e) => {
  sitio = e.target.value;
  cargar();
});
$("#refrescar").addEventListener("click", () => cargar({ refrescar: true }));
$("#tema").addEventListener("click", () => {
  const oscuro = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = oscuro ? "light" : "dark";
  if (ultimoPanel) render(ultimoPanel); // los gráficos leen los colores del tema
});

// Redibujar al cambiar el ancho: el SVG se calcula en píxeles, no escala solo.
let t;
addEventListener("resize", () => {
  clearTimeout(t);
  t = setTimeout(() => ultimoPanel && render(ultimoPanel), 200);
});

cargar();
