# Hero Video Design

**Goal:** Integrar el video `Generate 3D Veneers` dentro del hero principal sin degradar la carga inicial ni romper la estetica black-and-gold existente.

## Approach

- Mantener el layout actual de dos columnas y reemplazar la pieza visual derecha por un video self-hosted optimizado.
- Servir assets desde `public/videos/` para evitar dependencias externas y conservar control total del look.
- Usar un `video` HTML5 con `muted`, `autoPlay`, `loop` y `playsInline` para compatibilidad con mobile y autoplay.
- Acompanarlo con `poster` estatico, borde premium, overlays suaves y etiquetas editoriales para que el bloque no se vea como un embed generico.

## Performance Notes

- Fuente original: `Generate_3D_veneer_202603250452.mp4` (~8.6 MB, 1920x1080, 8s)
- Salida optimizada propuesta:
  - `public/videos/generate-3d-veneer.mp4`
  - `public/videos/generate-3d-veneer.webm`
  - `public/videos/generate-3d-veneer-poster.jpg`
- Sin audio para reducir peso y evitar autoplay bloqueado.
- Fallback visual inmediato via `poster`.

## UI Direction

- Reemplazar el arte poligonal por una tarjeta de video premium.
- Preservar particulas, glow dorado y badges para no perder el lenguaje visual del hero.
- Mantener el copy principal intacto y usar el video como prueba visual del tratamiento.

## Mobile Behavior

- Mantener el video arriba del texto en mobile, pero con contenedor controlado para no dominar toda la pantalla.
- Reproduccion inline, sin controles, con recorte suave y bordes redondeados.

## Cleanup

- Eliminar el archivo original de la raiz una vez generados los assets finales para evitar confusiones futuras.
