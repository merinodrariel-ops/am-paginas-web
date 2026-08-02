# amesteticadental.com

Sitio principal de **AM Estética Dental** — Dr. Ariel Merino, Puerto Madero, Buenos Aires.

Es el único sitio del monorepo **en producción con campañas de Google Ads activas**. Cualquier cambio acá se ve en tráfico pagado el mismo día.

## Qué es

Clínica de estética dental premium: carillas de porcelana, lentes de contacto dental, diseño de sonrisa digital, implantes y alineadores. Público en español (Buenos Aires) y en inglés (`/en`, turismo dental).

- **Conversión principal:** WhatsApp → solicitud de evaluación inicial.
- **Landings con presupuesto de Ads:** `/precio-carillas-dentales-buenos-aires`, `/implantes-dentales-buenos-aires`, `/diseno-de-sonrisa-precio-buenos-aires`.
- **Deploy:** push a `main` → Vercel publica automáticamente esta carpeta.

## Antes de tocar el copy

Las reglas de mensaje las dictó el Dr. Merino y están en el `AGENTS.md` de la raíz del monorepo. Las tres que más se violan sin querer:

1. **Nunca prometer "sin desgaste" / "no-prep".** Usar "mínimamente invasivo" o "mínima preparación".
2. **El posicionamiento es el tiempo, no el precio.** Laboratorio propio → resultados en días, no en meses. Nada de comparativas de ahorro por país.
3. **"Precio" solo para SEO** (URL, `title`, meta description). En el texto visible se dice **"inversión"**.

Leerlas completas antes de escribir una línea de copy.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # obligatorio antes de commitear
```

Las imágenes se sirven desde Cloudinary (`drctvgyqd`), nunca desde `public/`. El detalle técnico está en `CLAUDE.md`.
