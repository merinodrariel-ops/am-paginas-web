# SEO Block 3 Comparison Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Crear páginas de intención alta para precio y comparación, orientadas a búsquedas con fuerte potencial de contacto: `precio carillas dentales`, `carillas vs alineadores` y `carillas de porcelana vs resina`.

**Architecture:** Se suman tres páginas nuevas dentro de `src/app/` reutilizando la estética editorial premium de las landings existentes, con metadata específica, FAQ schema y enlaces directos hacia las páginas transaccionales del cluster principal.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, metadata API de Next.js, JSON-LD schema.

---

### Task 1: Crear la página de precio de carillas

**Files:**
- Create: `src/app/precio-carillas-dentales-buenos-aires/page.tsx`

**Step 1: Atacar intención comercial directa**

- H1 con `precio carillas dentales en Buenos Aires`.
- Explicar qué factores modifican el valor.
- Mantener transparencia sin dar un precio vacío ni una promo genérica.

**Step 2: Convertir ansiedad en ventaja**

- Explicar por qué el precio cambia según material, piezas y diseño.
- Integrar financiación como cierre racional.

### Task 2: Crear la página comparativa carillas vs alineadores

**Files:**
- Create: `src/app/carillas-vs-alineadores/page.tsx`

**Step 1: Resolver decisión real del paciente**

- Diferenciar cuándo conviene cambiar color/forma y cuándo conviene mover dientes.
- Explicar cuándo se combinan ambos tratamientos.

**Step 2: Derivar al tratamiento correcto**

- Empujar a `carillas-dentales`, `alineadores-invisibles` e `invisalign`.

### Task 3: Crear la página comparativa porcelana vs resina

**Files:**
- Create: `src/app/carillas-de-porcelana-vs-resina/page.tsx`

**Step 1: Resolver comparación clásica de compra**

- Diferencias en durabilidad, naturalidad, costo y mantenimiento.
- Cerrar con recomendación clínica según tipo de caso.

### Task 4: Conectar las páginas al cluster

**Files:**
- Modify: `src/app/carillas-dentales/page.tsx`
- Modify: `src/app/estetica-dental/page.tsx`
- Modify: `src/app/sitemap.ts`

**Step 1: Añadir enlaces cruzados**

- Desde `carillas-dentales` hacia `precio`, `porcelana-vs-resina` y `carillas-vs-alineadores`.
- Desde `estetica-dental` incluirlas como recursos de decisión.

**Step 2: Actualizar sitemap**

- Añadir las tres nuevas URLs.

### Task 5: Verificar el bloque

**Files:**
- Review: nuevas páginas y archivos modificados

**Step 1: Ejecutar lint dirigido**

- Run: `npx eslint <archivos-modificados>`

**Step 2: Ejecutar build**

- Run: `npm run build`
