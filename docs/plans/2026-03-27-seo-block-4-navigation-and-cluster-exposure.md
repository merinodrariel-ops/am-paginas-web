# SEO Block 4 Navigation and Cluster Exposure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Hacer visible el cluster SEO/comercial desde la navegación principal y desde la home para que tanto usuarios como crawlers encuentren rápido las páginas de mayor intención.

**Architecture:** Se mantiene la navbar premium actual, pero se suma una capa editorial con accesos de alta intención. En la home se agregan módulos de exploración y decisión dentro de secciones ya existentes para no inflar la interfaz con bloques redundantes.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS.

---

### Task 1: Mejorar la exposición del cluster en la navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1: Mantener anchors de navegación de home**

- No romper la navegación existente por secciones.

**Step 2: Agregar accesos de alta intención**

- Exponer rutas clave como `carillas-dentales`, `lentes-de-contacto-dental`, `invisalign` y `precio-carillas-dentales-buenos-aires`.
- Hacerlo visible en desktop y mobile.

### Task 2: Exponer páginas clave dentro de tratamientos

**Files:**
- Modify: `src/components/Tratamientos.tsx`

**Step 1: Añadir exploración por intención**

- Agregar una fila/bloque de quick links debajo del módulo principal.
- Priorizar páginas de dinero y páginas comparativas.

### Task 3: Exponer rutas de decisión desde resultados

**Files:**
- Modify: `src/components/Archive.tsx`

**Step 1: Vincular evidencia con decisión**

- Debajo de casos, sumar accesos a páginas como `precio`, `porcelana vs resina` y `carillas vs alineadores`.

### Task 4: Verificación

**Files:**
- Review: `src/components/Navbar.tsx`
- Review: `src/components/Tratamientos.tsx`
- Review: `src/components/Archive.tsx`

**Step 1: Ejecutar lint dirigido**

- Run: `npx eslint <archivos-modificados>`

**Step 2: Ejecutar build**

- Run: `npm run build`
