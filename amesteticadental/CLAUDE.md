# amesteticadental.com — instrucciones para agentes

## ⚠️ Leer primero: `../AGENTS.md` (raíz del monorepo)

`AGENTS.md` en la raíz es la fuente de verdad compartida por todos los agentes (Claude,
Codex, etc.). Contiene, entre otras cosas:
- **Reglas de copy del Dr. Merino**: nunca prometer "sin desgaste"/"no-prep"; el
  posicionamiento es **tiempo + laboratorio propio**, NO precio; en el contenido se dice
  **"inversión"**, no "precio" (la URL sí puede decir precio, por SEO).
- **`git fetch` obligatorio antes de tocar nada** — el local suele estar commits atrás de
  este monorepo multi-sitio; pushear WIP viejo revierte trabajo de otros. Nunca `--force`.
- **Sitio en inglés `/en`**: arquitectura de páginas espejo + checklist para traducir.
- **Galería de casos**: usar `src/lib/public-cases.ts`, blocklist + gate anti-basura.
- **Flujo obligatorio al publicar casos clínicos** (checklist de títulos/copy).

## Reglas de comportamiento

- Hacer lo pedido; nada más, nada menos. Preferir editar archivos existentes a crear nuevos.
- No crear documentación (*.md) no pedida. No guardar archivos de trabajo en la raíz.
- Leer siempre un archivo antes de editarlo. Nunca commitear secretos ni `.env`.
- Mantener archivos por debajo de ~500 líneas cuando sea razonable.

## Reglas de negocio AM Estética Dental

- **TODAS las imágenes** (no solo casos clínicos) se sirven desde Cloudinary (`drctvgyqd`) —
  clínica, equipo, Dr. Merino, landings, headers, todo. NUNCA referenciar `/public/images/...`
  desde un componente `next/image`.
- **Por qué (técnico, no negociable):** `next.config.ts` define
  `images.loaderFile: ./src/lib/cloudinary-image-loader.ts`. Un `loaderFile` custom desactiva
  la optimización propia de Next (`/_next/image`). El loader solo transforma URLs de
  `res.cloudinary.com`; una `src` local se devuelve tal cual → se sirve cruda, a tamaño
  completo, sin WebP. (En 2026-07 hubo 43 fotos a 2-3.4 MB c/u por esto; migradas: −94%.)
- Usar URLs de Cloudinary con `q_auto,f_auto` y carpetas descriptivas
  (`casos/...`, `clinica/...`, `equipo-am/...`, `dr-merino/...`).
- Copias locales en `/public` son solo backup/fuente. Excepción: `src/remotion/*` usa
  `staticFile()` local (render de video, no web servida).
- Antes de agregar/reemplazar una referencia de imagen, verificar que la URL devuelve HTTP 200.

## Build & verificación

```bash
npm run build   # SIEMPRE antes de commitear
npm run lint
```

- Verificar el build antes de commitear. Push a `main` = deploy a Vercel (el Dr. solo mira
  la versión online — la verificación local es la única red de seguridad).
- CI: `.github/workflows/ci.yml` compila los 3 sitios en cada push;
  `uptime.yml` chequea URLs críticas 2×/día.
