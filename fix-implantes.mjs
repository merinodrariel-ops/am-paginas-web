import { readFileSync } from "fs";

const env = Object.fromEntries(
  readFileSync(new URL("./.env.ads", import.meta.url), "utf8")
    .split("\n").filter(l => l && !l.startsWith("#")).map(l => l.split("="))
);

const DEV_TOKEN = env.GOOGLE_ADS_DEVELOPER_TOKEN;
const CLIENT_ID = env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_ADS_CLIENT_SECRET;
const REFRESH_TOKEN = env.GOOGLE_ADS_REFRESH_TOKEN;
const LOGIN_CID = env.GOOGLE_ADS_LOGIN_CUSTOMER_ID;
const CUSTOMER_ID = env.GOOGLE_ADS_CUSTOMER_ID;

async function getToken() {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, refresh_token: REFRESH_TOKEN, grant_type: "refresh_token" }),
  });
  return (await r.json()).access_token;
}

async function headers(token) {
  return { Authorization: `Bearer ${token}`, "developer-token": DEV_TOKEN, "login-customer-id": LOGIN_CID, "Content-Type": "application/json" };
}

async function getAdGroupId(token, campaignName, adGroupName) {
  const r = await fetch(`https://googleads.googleapis.com/v20/customers/${CUSTOMER_ID}/googleAds:searchStream`, {
    method: "POST", headers: await headers(token),
    body: JSON.stringify({ query: `SELECT ad_group.id FROM ad_group WHERE campaign.name = '${campaignName}' AND ad_group.name = '${adGroupName}' AND campaign.status != 'REMOVED'` }),
  });
  const data = await r.json();
  return data[0]?.results?.[0]?.adGroup?.id;
}

async function addKeywords(token, adGroupId, keywords) {
  const MATCH = { "Broad": "BROAD", "Phrase": "PHRASE", "Exact": "EXACT" };
  const r = await fetch(`https://googleads.googleapis.com/v20/customers/${CUSTOMER_ID}/adGroupCriteria:mutate`, {
    method: "POST", headers: await headers(token),
    body: JSON.stringify({
      operations: keywords.map(({ text, match, cpc }) => ({
        create: {
          adGroup: `customers/${CUSTOMER_ID}/adGroups/${adGroupId}`,
          status: "ENABLED",
          keyword: { text, matchType: MATCH[match] },
          cpcBidMicros: Math.round(cpc * 1_000_000),
        },
        exemptPolicyViolationKeys: [{ policyName: "HEALTH_IN_PERSONALIZED_ADS", violatingText: text }],
      }))
    }),
  });
  const result = await r.json();
  if (!r.ok) throw new Error(JSON.stringify(result));
  return result;
}

const token = await getToken();

// Implantes Informacional
const idInfo = await getAdGroupId(token, "Implantes Dentales", "Implantes Informacional");
await addKeywords(token, idInfo, [
  { text: "implantes dentales", match: "Broad", cpc: 0.40 },
  { text: "cuanto dura un implante dental", match: "Broad", cpc: 0.35 },
  { text: "implante dental proceso", match: "Broad", cpc: 0.30 },
]);
console.log("✅ Implantes Informacional — 3 keywords agregadas");

// Implantes Transaccional
const idTrans = await getAdGroupId(token, "Implantes Dentales", "Implantes Transaccional");
await addKeywords(token, idTrans, [
  { text: "implantes dentales buenos aires", match: "Exact", cpc: 1.50 },
  { text: "precio implante dental argentina", match: "Phrase", cpc: 1.20 },
  { text: "implante dental precio", match: "Phrase", cpc: 1.10 },
]);
console.log("✅ Implantes Transaccional — 3 keywords agregadas");
