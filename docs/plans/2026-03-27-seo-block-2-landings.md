# SEO Block 2 Landings Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Crear tres landings nuevas de alta intención (`lentes de contacto dental`, `carillas sin desgaste`, `Invisalign`) y conectarlas con la arquitectura SEO actual para ganar búsquedas donde la competencia todavía es débil o genérica.

**Architecture:** Se extiende el patrón de landings existentes bajo `src/app/` con páginas server-first, metadata específica, FAQ schema y CTAs a WhatsApp. Se agrega interlinking mínimo desde páginas ya existentes y se actualiza el sitemap para acelerar descubrimiento e indexación.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, metadata API de Next.js, JSON-LD schema.

---

### Task 1: Crear la landing de lentes de contacto dental

**Files:**
- Create: `src/app/lentes-de-contacto-dental/page.tsx`

**Step 1: Definir intención de búsqueda**

- Hero centrado en `lentes de contacto dental en Buenos Aires`.
- Enfatizar ultrafino, natural, sin desgaste o con intervención nula cuando aplica.

**Step 2: Cubrir objeciones reales**

- Qué son.
- Para quién sirven.
- Cuándo no convienen.
- Diferencia con carillas tradicionales.

**Step 3: Cerrar con CTA y FAQ schema**

- CTA a WhatsApp.
- FAQ enfocada en naturalidad, duración, costo y candidatura.

### Task 2: Crear la landing de carillas sin desgaste

**Files:**
- Create: `src/app/carillas-sin-desgaste/page.tsx`

**Step 1: Definir promesa exacta**

- Explicar que no todos los casos califican.
- Convertir honestidad diagnóstica en ventaja comercial.

**Step 2: Cubrir intención comparativa y comercial**

- Diferencia frente a carillas convencionales.
- Cuándo sí y cuándo no.
- Relación con lentes de contacto dental.

**Step 3: Conectar con el cluster de carillas**

- Enlazar con `carillas-dentales` y `lentes-de-contacto-dental`.

### Task 3: Crear la landing de Invisalign

**Files:**
- Create: `src/app/invisalign/page.tsx`

**Step 1: Capturar intención de marca con enfoque local**

- Hero con `Invisalign en Buenos Aires`.
- Dejar claro que AM trabaja Invisalign cuando es la mejor opción.

**Step 2: Resolver comparación de marca**

- Diferencia entre Invisalign y otros alineadores.
- Aclarar que el criterio clínico importa más que la marca sola.

**Step 3: Conectar con alineadores invisibles**

- Interlink directo entre ambas páginas.

### Task 4: Reforzar interlinking y descubrimiento

**Files:**
- Modify: `src/app/carillas-dentales/page.tsx`
- Modify: `src/app/alineadores-invisibles/page.tsx`
- Modify: `src/app/estetica-dental/page.tsx`
- Modify: `src/app/sitemap.ts`

**Step 1: Añadir enlaces contextuales**

- `carillas-dentales` debe empujar a `lentes-de-contacto-dental` y `carillas-sin-desgaste`.
- `alineadores-invisibles` debe empujar a `invisalign`.
- `estetica-dental` debe listar las nuevas rutas dentro del universo de tratamientos.

**Step 2: Actualizar sitemap**

- Incluir las tres nuevas URLs con prioridad comercial alta.

### Task 5: Verificación del bloque

**Files:**
- Review: nuevas rutas y archivos modificados

**Step 1: Ejecutar lint dirigido**

- Run: `npx eslint <archivos-modificados>`

**Step 2: Ejecutar build**

- Run: `npm run build`

**Step 3: Confirmar resultado del bloque**

- Verificar que las rutas aparezcan en el build.
- Verificar que el cluster SEO quede conectado.
