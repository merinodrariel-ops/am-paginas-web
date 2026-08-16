/**
 * CLI de gestión Google Ads — AM Estética Dental
 * Uso: node ads.mjs [comando]
 *
 * Comandos:
 *   node ads.mjs listar          → lista campañas con estado y presupuesto
 *   node ads.mjs activar <nombre>  → activa una campaña
 *   node ads.mjs pausar <nombre>   → pausa una campaña
 *   node ads.mjs presupuesto <nombre> <monto_usd>  → cambia el presupuesto diario
 */

import { readFileSync } from "fs";

// Cargar .env.ads
const env = Object.fromEntries(
  readFileSync(new URL("./.env.ads", import.meta.url), "utf8")
    .split("\n")
    .filter(l => l && !l.startsWith("#"))
    .map(l => l.split("="))
);

const DEV_TOKEN = env.GOOGLE_ADS_DEVELOPER_TOKEN;
const CLIENT_ID = env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_ADS_CLIENT_SECRET;
const REFRESH_TOKEN = env.GOOGLE_ADS_REFRESH_TOKEN;
const LOGIN_CID = env.GOOGLE_ADS_LOGIN_CUSTOMER_ID;
const CUSTOMER_ID = env.GOOGLE_ADS_CUSTOMER_ID;

async function getAccessToken() {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  const d = await r.json();
  if (!d.access_token) throw new Error("No se pudo obtener access token: " + JSON.stringify(d));
  return d.access_token;
}

async function query(gaql, accessToken) {
  const r = await fetch(
    `https://googleads.googleapis.com/v20/customers/${CUSTOMER_ID}/googleAds:searchStream`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "developer-token": DEV_TOKEN,
        "login-customer-id": LOGIN_CID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: gaql }),
    }
  );
  const text = await r.text();
  if (!r.ok) throw new Error(text);
  return JSON.parse(text);
}

async function mutate(operations, accessToken) {
  const r = await fetch(
    `https://googleads.googleapis.com/v20/customers/${CUSTOMER_ID}/campaigns:mutate`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "developer-token": DEV_TOKEN,
        "login-customer-id": LOGIN_CID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ operations }),
    }
  );
  const text = await r.text();
  if (!r.ok) throw new Error(text);
  return JSON.parse(text);
}

async function listar() {
  const token = await getAccessToken();
  const data = await query(
    `SELECT campaign.id, campaign.name, campaign.status, campaign_budget.amount_micros
     FROM campaign
     ORDER BY campaign.name`,
    token
  );

  const STATUS = { ENABLED: "✅ Activa", PAUSED: "⏸  Pausada", REMOVED: "🗑  Eliminada" };
  console.log("\n📋 Campañas — AM Estética Dental\n");
  for (const batch of data) {
    for (const row of batch.results || []) {
      const c = row.campaign;
      const budget = (row.campaignBudget?.amountMicros / 1_000_000).toFixed(0);
      console.log(`  ${STATUS[c.status] || c.status}  ${c.name.padEnd(30)} USD ${budget}/día   [ID: ${c.id}]`);
    }
  }
  console.log();
}

async function setCampaignStatus(nombre, status) {
  const token = await getAccessToken();
  const data = await query(
    `SELECT campaign.id, campaign.name FROM campaign WHERE campaign.name = '${nombre}'`,
    token
  );
  const results = data.flatMap(b => b.results || []);
  if (!results.length) {
    console.log(`\n❌ No encontré ninguna campaña llamada "${nombre}"\n`);
    return;
  }
  const id = results[0].campaign.id;
  await mutate([{ update: { resourceName: `customers/${CUSTOMER_ID}/campaigns/${id}`, status }, updateMask: "status" }], token);
  const label = status === "ENABLED" ? "✅ activada" : "⏸  pausada";
  console.log(`\n${label}: ${nombre}\n`);
}

async function setPresupuesto(nombre, montoUSD) {
  const token = await getAccessToken();
  const data = await query(
    `SELECT campaign.id, campaign.name, campaign.campaign_budget FROM campaign WHERE campaign.name = '${nombre}'`,
    token
  );
  const results = data.flatMap(b => b.results || []);
  if (!results.length) {
    console.log(`\n❌ No encontré ninguna campaña llamada "${nombre}"\n`);
    return;
  }
  const budgetResource = results[0].campaign.campaignBudget;
  const budgetId = budgetResource.split("/").pop();
  const r = await fetch(
    `https://googleads.googleapis.com/v20/customers/${CUSTOMER_ID}/campaignBudgets:mutate`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "developer-token": DEV_TOKEN,
        "login-customer-id": LOGIN_CID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operations: [{
          update: {
            resourceName: `customers/${CUSTOMER_ID}/campaignBudgets/${budgetId}`,
            amountMicros: Math.round(montoUSD * 1_000_000),
          },
          updateMask: "amount_micros",
        }],
      }),
    }
  );
  if (!r.ok) throw new Error(await r.text());
  console.log(`\n💰 Presupuesto de "${nombre}" actualizado a USD ${montoUSD}/día\n`);
}

async function eliminarCampaign(nombre) {
  const token = await getAccessToken();
  const data = await query(
    `SELECT campaign.id, campaign.name FROM campaign WHERE campaign.name = '${nombre}' AND campaign.status != 'REMOVED'`,
    token
  );
  const results = data.flatMap(b => b.results || []);
  if (!results.length) {
    console.log(`\n❌ No encontré ninguna campaña activa llamada "${nombre}"\n`);
    return;
  }
  const id = results[0].campaign.id;
  const r = await fetch(
    `https://googleads.googleapis.com/v20/customers/${CUSTOMER_ID}/campaigns:mutate`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "developer-token": DEV_TOKEN,
        "login-customer-id": LOGIN_CID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operations: [{ remove: `customers/${CUSTOMER_ID}/campaigns/${id}` }],
      }),
    }
  );
  if (!r.ok) throw new Error(await r.text());
  console.log(`\n🗑  Eliminada: ${nombre}\n`);
}

async function configurarTodasArgentina() {
  const token = await getAccessToken();
  const data = await query(
    `SELECT campaign.id, campaign.name FROM campaign WHERE campaign.status != 'REMOVED'`,
    token
  );
  const campañas = data.flatMap(b => b.results || []);
  console.log(`\n🌎 Configurando ubicación Argentina + idioma Español en ${campañas.length} campañas...\n`);

  for (const row of campañas) {
    const { id, name } = row.campaign;
    const resource = `customers/${CUSTOMER_ID}/campaigns/${id}`;

    // Geo target: Argentina = criterionId 2032
    await fetch(`https://googleads.googleapis.com/v20/customers/${CUSTOMER_ID}/campaignCriteria:mutate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "developer-token": DEV_TOKEN,
        "login-customer-id": LOGIN_CID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operations: [{
          create: {
            campaign: resource,
            location: { geoTargetConstant: "geoTargetConstants/2032" },
          }
        }]
      }),
    });

    // Language: Spanish = criterionId 1003
    await fetch(`https://googleads.googleapis.com/v20/customers/${CUSTOMER_ID}/campaignCriteria:mutate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "developer-token": DEV_TOKEN,
        "login-customer-id": LOGIN_CID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operations: [{
          create: {
            campaign: resource,
            language: { languageConstant: "languageConstants/1003" },
          }
        }]
      }),
    });

    console.log(`  ✅ ${name}`);
  }
  console.log("\n✓ Listo. Todas las campañas apuntan a Argentina en Español.\n");
}

async function diagnosticar() {
  const token = await getAccessToken();
  const data = await query(
    `SELECT campaign.name, ad_group.name, ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type
     FROM ad_group_criterion
     WHERE ad_group_criterion.type = 'KEYWORD'
       AND campaign.status != 'REMOVED'
       AND ad_group.status != 'REMOVED'
     ORDER BY campaign.name, ad_group.name`,
    token
  );

  const grupos = {};
  for (const batch of data) {
    for (const row of batch.results || []) {
      const key = `${row.campaign.name} → ${row.adGroup.name}`;
      if (!grupos[key]) grupos[key] = [];
      grupos[key].push(row.adGroupCriterion.keyword.text);
    }
  }

  // Todos los grupos esperados
  const esperados = [
    "Carillas Dentales → Carillas Informacional",
    "Carillas Dentales → Carillas Transaccional",
    "Blanqueamiento Dental → Blanqueamiento Informacional",
    "Blanqueamiento Dental → Blanqueamiento Transaccional",
    "Alineadores Invisibles → Alineadores Informacional",
    "Alineadores Invisibles → Alineadores Transaccional",
    "Implantes Dentales → Implantes Informacional",
    "Implantes Dentales → Implantes Transaccional",
    "Diseno de Sonrisa → Diseno Informacional",
    "Diseno de Sonrisa → Diseno Transaccional",
    "Bruxismo → Bruxismo Keywords",
    "Estetica Dental → Estetica Keywords",
    "Periodoncia → Periodoncia Keywords",
  ];

  console.log("\n🔍 Diagnóstico de keywords\n");
  for (const g of esperados) {
    const kws = grupos[g];
    if (!kws || kws.length === 0) {
      console.log(`  ❌ SIN KEYWORDS: ${g}`);
    } else {
      console.log(`  ✅ ${g} (${kws.length} keywords)`);
    }
  }
  console.log();
}

export async function agregarKeywords(campaignName, adGroupName, keywords) {
  const token = await getAccessToken();
  const data = await query(
    `SELECT ad_group.id, ad_group.name, campaign.name FROM ad_group
     WHERE campaign.name = '${campaignName}' AND ad_group.name = '${adGroupName}'
       AND campaign.status != 'REMOVED' AND ad_group.status != 'REMOVED'`,
    token
  );
  const results = data.flatMap(b => b.results || []);
  if (!results.length) {
    console.log(`\n❌ No encontré el grupo "${adGroupName}" en "${campaignName}"\n`);
    return;
  }
  const adGroupId = results[0].adGroup.id;
  const adGroupResource = `customers/${CUSTOMER_ID}/adGroups/${adGroupId}`;

  const MATCH = { "Broad Match": "BROAD", "Phrase Match": "PHRASE", "Exact Match": "EXACT" };
  const operations = keywords.map(({ text, match, cpc }) => ({
    create: {
      adGroup: adGroupResource,
      status: "ENABLED",
      keyword: { text, matchType: MATCH[match] },
      cpcBidMicros: Math.round(cpc * 1_000_000),
    }
  }));

  const r = await fetch(
    `https://googleads.googleapis.com/v20/customers/${CUSTOMER_ID}/adGroupCriteria:mutate`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "developer-token": DEV_TOKEN,
        "login-customer-id": LOGIN_CID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ operations }),
    }
  );
  if (!r.ok) throw new Error(await r.text());
  console.log(`\n✅ ${keywords.length} keywords agregadas a "${adGroupName}"\n`);
}

// --- main ---
const [,, cmd, ...args] = process.argv;

if (!cmd || cmd === "listar") {
  await listar();
} else if (cmd === "activar") {
  await setCampaignStatus(args.join(" "), "ENABLED");
} else if (cmd === "pausar") {
  await setCampaignStatus(args.join(" "), "PAUSED");
} else if (cmd === "presupuesto") {
  const monto = parseFloat(args.at(-1));
  const nombre = args.slice(0, -1).join(" ");
  await setPresupuesto(nombre, monto);
} else if (cmd === "eliminar") {
  await eliminarCampaign(args.join(" "));
} else if (cmd === "configurar") {
  await configurarTodasArgentina();
} else if (cmd === "diagnosticar") {
  await diagnosticar();
} else {
  console.log(`
Comandos disponibles:
  node ads.mjs listar
  node ads.mjs activar "Carillas Dentales"
  node ads.mjs pausar "Carillas Dentales"
  node ads.mjs eliminar "Carillas Dentales"
  node ads.mjs presupuesto "Carillas Dentales" 20
`);
}
