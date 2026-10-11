// Tests del aviso interno de nueva consulta. Correr: `npm test` (Node >= 22.18, type stripping).
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  DESTINO_POR_DEFECTO,
  armarAviso,
  asuntoAviso,
  destinatariosAviso,
  linkWhatsapp,
} from "../src/lib/aviso-consulta.ts";

test("destino por defecto es el mail oficial del Dr. Merino", () => {
  assert.equal(DESTINO_POR_DEFECTO, "drarielmerino@gmail.com");
  assert.deepEqual(destinatariosAviso(undefined), ["drarielmerino@gmail.com"]);
  assert.deepEqual(destinatariosAviso("   "), ["drarielmerino@gmail.com"]);
  assert.deepEqual(destinatariosAviso("no-es-mail"), ["drarielmerino@gmail.com"]);
});

test("NEW_LEAD_NOTIFY_TO acepta lista separada por comas y deduplica", () => {
  assert.deepEqual(destinatariosAviso("a@x.com, B@x.com ,a@x.com"), ["a@x.com", "b@x.com"]);
});

test("nunca vuelve a la casilla vieja", () => {
  const { html } = armarAviso({ fullName: "Ana", email: "ana@test.com" });
  assert.ok(!destinatariosAviso(undefined).includes("merinodrariel@gmail.com"));
  assert.ok(!html.includes("merinodrariel@gmail.com"));
});

test("asunto: nombre y tratamiento, sin saltos de línea", () => {
  assert.equal(asuntoAviso("Ana Pérez", ["Carillas estéticas"]), "Nueva consulta: Ana Pérez — Carillas estéticas");
  assert.equal(asuntoAviso("Ana", []), "Nueva consulta: Ana — Consulta general");
  assert.ok(!asuntoAviso("Ana\r\nBcc: x@y.com", []).includes("\n"));
});

test("link de WhatsApp", () => {
  assert.equal(linkWhatsapp("+54 9 11 7021-9298"), "https://wa.me/5491170219298");
  assert.equal(linkWhatsapp("11 7021 9298"), "https://wa.me/541170219298");
  assert.equal(linkWhatsapp("+598 99 123 456"), "https://wa.me/59899123456");
  assert.equal(linkWhatsapp("123"), null);
  assert.equal(linkWhatsapp(""), null);
});

test("cuerpo completo, escapado y con Reply-To del paciente", () => {
  const aviso = armarAviso({
    fullName: "<script>x</script> Ana",
    email: "ana@test.com",
    whatsapp: "+54 9 11 5555-5555",
    tratamientos: ["Implantes dentales"],
    message: "Hola\nquiero turno",
    origin: "web_form_amesteticadental",
    metadata: { page: "/contacto", utm_source: "google", utm_campaign: "carillas", site: "amesteticadental.com" },
    fecha: new Date("2026-10-10T15:00:00Z"),
  });
  assert.equal(aviso.replyTo, "ana@test.com");
  assert.ok(!aviso.html.includes("<script>"));
  assert.ok(aviso.html.includes("&lt;script&gt;"));
  assert.ok(aviso.html.includes("https://wa.me/5491155555555"));
  assert.ok(aviso.html.includes("Implantes dentales"));
  assert.ok(aviso.html.includes("Hola<br />quiero turno"));
  assert.ok(aviso.html.includes("source: google"));
  assert.ok(aviso.html.includes("/contacto"));
  assert.ok(aviso.html.includes("amesteticadental.com"));
});

test("sin email no hay Reply-To; lead repetido se marca", () => {
  const aviso = armarAviso({ fullName: "Juan", whatsapp: "1155555555", alreadyExists: true });
  assert.equal(aviso.replyTo, undefined);
  assert.ok(aviso.html.includes("consulta repetida"));
});
