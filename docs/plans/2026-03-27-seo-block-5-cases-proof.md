# SEO Block 5 Cases Proof Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convertir la sección de casos en una prueba más fuerte para usuarios y buscadores, con imágenes optimizadas, contexto clínico y enlaces por intención.

**Architecture:** Se mantiene `Archive` como sección de home, pero se mejora con `next/image`, metadata visual más clara y casos conectados con páginas comerciales del cluster. Se habilita optimización remota para imágenes temporales desde Unsplash.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, `next/image`.

---

### Task 1: Habilitar `next/image` para imágenes remotas

**Files:**
- Modify: `next.config.ts`

**Step 1: Declarar `remotePatterns` para Unsplash**

- Permitir carga optimizada de imágenes temporales mientras se reemplazan por casos reales.

### Task 2: Refactorizar `Archive`

**Files:**
- Modify: `src/components/Archive.tsx`

**Step 1: Reemplazar `<img>` por `Image`**

- Eliminar warnings de lint.
- Mantener el efecto antes/después.

**Step 2: Enriquecer cada caso**

- Agregar resultado o intención clínica resumida.
- Vincular cada caso con su página más relevante.

**Step 3: Mantener CTA y exploración**

- Dejar la sección más convincente sin volverla pesada.

### Task 3: Verificación

**Files:**
- Review: `next.config.ts`
- Review: `src/components/Archive.tsx`

**Step 1: Ejecutar lint dirigido**

- Run: `npx eslint next.config.ts src/components/Archive.tsx`

**Step 2: Ejecutar build**

- Run: `npm run build`
