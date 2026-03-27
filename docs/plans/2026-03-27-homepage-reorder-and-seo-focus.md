# Homepage Reorder and SEO Focus Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reordenar la home para vender primero carillas y diseño de sonrisa natural, corregir inconsistencias de confianza y dejar la base lista para ganar búsquedas de alta intención.

**Architecture:** La home mantiene el sistema visual premium actual, pero cambia el orden narrativo para pasar de una apertura centrada en estatus a una secuencia más lógica: promesa, confianza, tratamientos, proceso, doctor, evidencia y cierre. En paralelo, se corrigen inconsistencias de financiación y escasez en los puntos donde hoy erosionan confianza.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, metadata API de Next.js, JSON-LD schema.

---

### Task 1: Reordenar la home alrededor de carillas y sonrisa natural

**Files:**
- Modify: `src/app/page.tsx`
- Review: `src/components/Hero.tsx`
- Review: `src/components/Tratamientos.tsx`
- Review: `src/components/Features.tsx`
- Review: `src/components/Archive.tsx`

**Step 1: Reordenar los imports y el render principal**

- Mantener `Hero` y `Autoridad` arriba.
- Subir `Tratamientos` y `Features` antes de `DrMerino`.
- Subir `Archive` antes de `Testimonios`.
- Bajar `Prensa` y `ClientesVIP` para que funcionen como refuerzo y no como apertura.
- Sacar `Manifesto` de la home si rompe la secuencia comercial principal.

**Step 2: Reescribir comentarios de orden interno**

- Alinear los comentarios con la nueva jerarquía narrativa.
- Evitar numeración rota o desfasada.

**Step 3: Verificar lectura secuencial**

- Confirmar que la historia quede: promesa, prueba, tratamiento, proceso, experto, evidencia, cierre.

### Task 2: Enfocar el hero en carillas y diseño de sonrisa natural

**Files:**
- Modify: `src/components/Hero.tsx`

**Step 1: Cambiar headline y subcopy**

- El `h1` debe priorizar `carillas dentales` y `sonrisa natural`.
- El párrafo debe presentar carillas, lentes de contacto dental y diseño digital como eje principal.
- `Alineadores invisibles` e `Invisalign` quedan como complemento clínico.

**Step 2: Mantener consistencia con el CTA**

- CTA principal: evaluación inicial.
- CTA secundario: tratamientos principales.

**Step 3: Unificar mensaje de escasez**

- Definir una sola cantidad para la disponibilidad mensual y reutilizarla también en `Contacto`.

### Task 3: Corregir inconsistencias de financiación

**Files:**
- Modify: `src/components/FAQ.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/carillas-dentales/page.tsx`
- Modify: `src/components/PorQueAM.tsx`
- Review: `src/components/Financiacion.tsx`

**Step 1: Elegir la tasa de referencia**

- Tomar como fuente de verdad la lógica real del simulador en `Financiacion`.
- Actualizar el resto del sitio con la misma tasa anual y mensual equivalente.

**Step 2: Sincronizar copy y schema**

- Corregir respuestas FAQ visibles.
- Corregir JSON-LD FAQ en `layout`.
- Corregir FAQ específica de `carillas-dentales`.
- Corregir el texto de diferenciación en `PorQueAM`.

**Step 3: Revisar tono y claridad**

- Mantener lenguaje premium, pero sin contradicciones numéricas.

### Task 4: Validar el bloque estable

**Files:**
- Review: `src/app/page.tsx`
- Review: `src/components/Hero.tsx`
- Review: `src/components/Contacto.tsx`
- Review: `src/components/FAQ.tsx`
- Review: `src/app/layout.tsx`

**Step 1: Ejecutar validaciones**

- Run: `npm run lint`
- Run: `npm run build`

**Step 2: Confirmar que no haya regresiones narrativas**

- Revisar que la home abra con foco en carillas y sonrisa natural.
- Revisar que la financiación diga lo mismo en todos los puntos.

**Step 3: Dejar listo el siguiente bloque SEO**

- Siguiente bloque sugerido: crear `lentes-de-contacto-dental`, `carillas-sin-desgaste` e `invisalign`.
