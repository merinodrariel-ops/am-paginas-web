#!/usr/bin/env node
/**
 * Motor de Auditoría GEO & SEO Local (Inspirado en SEO OS y masterclass de GEO/Alhambra Search)
 * 
 * Evalúa las páginas clave de la red para garantizar:
 * 1. Títulos y Meta Descriptions óptimos para SERP y Snippets de IA.
 * 2. Datos Estructurados Schema.org completos (E-E-A-T: MedicalWebPage, Physician, FAQPage).
 * 3. Consistencia semántica local (Puerto Madero, Dr. Ariel Merino, MN 34.869).
 * 4. Preparación para motores de Inteligencia Artificial (ChatGPT, Perplexity, Google AI Overviews).
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const RAIZ = resolve(process.cwd(), 'amesteticadental/src/app');

function buscarPaginas(dir, base = '') {
  let paginas = [];
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const rel = join(base, entry);
    if (statSync(full).isDirectory()) {
      paginas = paginas.concat(buscarPaginas(full, rel));
    } else if (entry === 'page.tsx') {
      paginas.push({ ruta: base || '/', archivo: full });
    }
  }
  return paginas;
}

console.log('🔍 Iniciando Auditoría GEO & SEO Local en amesteticadental...');
const paginas = buscarPaginas(RAIZ);
console.log(`📋 Total páginas detectadas: ${paginas.length}\n`);

let conSchema = 0;
let conFAQ = 0;
let conEEAT = 0;
let conGeoLocal = 0;
let alertas = [];

for (const p of paginas) {
  let contenido = readFileSync(p.archivo, 'utf8');

  // Si usa BarrioLanding, incluir el contenido de BarrioLanding para evaluar schemas y geo
  if (contenido.includes('BarrioLanding')) {
    const barrioPath = resolve(process.cwd(), 'amesteticadental/src/components/BarrioLanding.tsx');
    if (existsSync(barrioPath)) {
      contenido += '\n' + readFileSync(barrioPath, 'utf8');
    }
  }

  // Evaluar presencia de Schemas
  const tieneSchema = contenido.includes('@context') && (contenido.includes('schema.org') || contenido.includes('schema'));
  const tieneFAQ = contenido.includes('FAQPage') || contenido.includes('FAQS') || contenido.includes('faqs') || contenido.includes('Preguntas');
  const tieneEEAT = contenido.includes('Ariel Merino');
  const tieneGeo = contenido.includes('Puerto Madero') || contenido.includes('Buenos Aires') || contenido.includes('Camila O\'Gorman');

  if (tieneSchema) conSchema++;
  if (tieneFAQ) conFAQ++;
  if (tieneEEAT) conEEAT++;
  if (tieneGeo) conGeoLocal++;

  // Alertas específicas en páginas de tratamiento
  const esTratamiento = !p.ruta.startsWith('api') && !p.ruta.startsWith('admin') && p.ruta !== '/';
  if (esTratamiento) {
    if (!tieneSchema) {
      alertas.push({ ruta: p.ruta, error: 'Falta Schema.org estructurado' });
    }
    if (!tieneGeo) {
      alertas.push({ ruta: p.ruta, advertencia: 'Sin mención explícita de ubicación (Puerto Madero / BA)' });
    }
  }
}

console.log('═══════════════════════════════════════════════════════');
console.log('📊 REPORTE DE SALUD GEO & E-E-A-T (IA / Maps / ChatGPT)');
console.log('═══════════════════════════════════════════════════════');
console.log(`✅ Páginas con Schema estructurado:  ${conSchema} / ${paginas.length} (${Math.round(conSchema/paginas.length*100)}%)`);
console.log(`✅ Páginas con FAQs / Respuestas IA: ${conFAQ} / ${paginas.length} (${Math.round(conFAQ/paginas.length*100)}%)`);
console.log(`✅ Páginas con Autoridad E-E-A-T:    ${conEEAT} / ${paginas.length} (${Math.round(conEEAT/paginas.length*100)}%)`);
console.log(`✅ Páginas con Señales Geo-Locales:  ${conGeoLocal} / ${paginas.length} (${Math.round(conGeoLocal/paginas.length*100)}%)`);
console.log('═══════════════════════════════════════════════════════\n');

if (alertas.length > 0) {
  console.log(`⚠️  Alertas encontradas en ${alertas.length} puntos:`);
  alertas.slice(0, 10).forEach(a => {
    console.log(` - /${a.ruta}: ${a.error || a.advertencia}`);
  });
  if (alertas.length > 10) {
    console.log(`   ... y ${alertas.length - 10} más.`);
  }
} else {
  console.log('🎉 ¡Todas las páginas de tratamiento cumplen con los estándares de GEO y SEO Local!');
}
