# Hero Video Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reemplazar la ilustracion del hero por un video self-hosted optimizado y listo para autoplay.

**Architecture:** El video se procesa localmente con `ffmpeg`, se publica desde `public/videos/` y se renderiza con `video` HTML5 dentro de `src/components/Hero.tsx`. El hero mantiene sus animaciones GSAP, glow ambiental y composicion premium.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, GSAP, ffmpeg.

---

### Task 1: Generar assets web del video

**Files:**
- Create: `public/videos/generate-3d-veneer.mp4`
- Create: `public/videos/generate-3d-veneer.webm`
- Create: `public/videos/generate-3d-veneer-poster.jpg`
- Source: `Generate_3D_veneer_202603250452.mp4`

**Step 1: Verificar metadata del video fuente**

Run: `ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration,avg_frame_rate -of default=noprint_wrappers=1 "Generate_3D_veneer_202603250452.mp4"`

**Step 2: Generar MP4 optimizado sin audio**

Run: `ffmpeg -y -i "Generate_3D_veneer_202603250452.mp4" -an -vf "scale=1280:-2,format=yuv420p" -c:v libx264 -preset slow -crf 30 -movflags +faststart "public/videos/generate-3d-veneer.mp4"`

**Step 3: Generar WebM alternativo**

Run: `ffmpeg -y -i "Generate_3D_veneer_202603250452.mp4" -an -vf "scale=1280:-2" -c:v libvpx-vp9 -b:v 0 -crf 36 "public/videos/generate-3d-veneer.webm"`

**Step 4: Generar poster**

Run: `ffmpeg -y -ss 0.5 -i "Generate_3D_veneer_202603250452.mp4" -frames:v 1 -vf "scale=1280:-2" "public/videos/generate-3d-veneer-poster.jpg"`

**Step 5: Verificar tamanos**

Run: `python3 - <<'PY'
import os
for name in ["public/videos/generate-3d-veneer.mp4", "public/videos/generate-3d-veneer.webm", "public/videos/generate-3d-veneer-poster.jpg"]:
    print(name, os.path.getsize(name))
PY`

### Task 2: Integrar el video en el Hero

**Files:**
- Modify: `src/components/Hero.tsx`

**Step 1: Remover el arte poligonal anterior**

- Quitar `PolygonSmile` del hero y conservar solo el sistema de animacion necesario para la columna visual.

**Step 2: Insertar contenedor de video premium**

- Agregar `video` con `muted autoPlay loop playsInline preload="auto" poster="/videos/generate-3d-veneer-poster.jpg"`.
- Incluir `source` para `.webm` y `.mp4`.

**Step 3: Mantener lenguaje visual existente**

- Conservar glow, particulas y badges.
- Agregar borde, overlay y microcopy editorial sobre la tarjeta de video.

**Step 4: Validar responsive**

- Confirmar que mobile conserva jerarquia y que el video no rompe el `min-h-[100dvh]` del hero.

### Task 3: Limpiar archivo original

**Files:**
- Delete: `Generate_3D_veneer_202603250452.mp4`

**Step 1: Confirmar que los assets finales existen**

- Verificar `public/videos/` antes de borrar el original.

**Step 2: Eliminar el archivo fuente de la raiz**

Run: `rm "Generate_3D_veneer_202603250452.mp4"`

### Task 4: Validar el cambio

**Files:**
- Validate: `src/components/Hero.tsx`

**Step 1: Lint**

Run: `npm run lint`

**Step 2: Tipos**

Run: `npx tsc --noEmit`

**Step 3: Build de produccion**

Run: `npm run build`

**Step 4: Revisar estado final**

Run: `git status --short`
