# AM — Instrucciones globales para agentes

## Cliente
Dr. Ariel Merino — AM Estética Dental, Puerto Madero, Buenos Aires.
Es odontólogo, no programador. Explicar sin jerga técnica cuando se comunica con él directamente.

## Proyectos en este monorepo

| Carpeta | Sitio | Estado |
|---|---|---|
| `amesteticadental/` | amesteticadental.com | Producción (Vercel) |
| `amesteticadental-uy/` | Uruguay (pendiente) | En desarrollo |
| `arielmerino/` | arielmerino.com | En desarrollo |
| `thedentalreview/` | thedentalreview.com | En desarrollo |

## Reglas de negocio — NO ignorar

- **NUNCA** mencionar "consulta sin costo", "evaluación gratuita" ni similar — destruye el posicionamiento premium
- Precios siempre en **USD**
- Tono: premium, clínico, sin exageraciones ni promesas absolutas
- CTA principal: WhatsApp `https://api.whatsapp.com/send?phone=541170219298`
- Marca: AM Estética Dental · Dr. Ariel Merino · Puerto Madero · Forbes Argentina

## Google Ads CLI
Credenciales en `am-paginas-web/.env.ads` (no subir a git).

```bash
node ads.mjs listar
node ads.mjs activar "Carillas Dentales"
node ads.mjs pausar "Carillas Dentales"
node ads.mjs presupuesto "Carillas Dentales" 9000
node ads.mjs diagnosticar
node ads.mjs configurar
```

- MCC: 620-029-5782 (dr.arielmerinopersonal@gmail.com)
- Cuenta cliente: 548-608-5415

## Google Search Console CLI

```bash
node gsc.mjs indexar    # solicita indexación de páginas nuevas
node gsc.mjs estado     # muestra estado de indexación
```

- Sitio verificado: https://www.amesteticadental.com

## Campañas activas (mayo 2026)

| Campaña | Presupuesto | Landing |
|---|---|---|
| Carillas Dentales | ARS 9.000/día | /precio-carillas-dentales-buenos-aires |
| Implantes Dentales | ARS 6.000/día | /implantes-dentales-buenos-aires |
| Diseno de Sonrisa | ARS 5.000/día | /diseno-de-sonrisa-precio-buenos-aires |

## Deploy
- Push a `main` → Vercel despliega automáticamente `amesteticadental/`
- Después del deploy correr `node gsc.mjs indexar` para páginas nuevas

## Cloudinary
- Cloud: `drctvgyqd`
- Imágenes de casos clínicos y landing pages
- **Regla obligatoria para casos clínicos**: todas las fotos de casos clínicos deben subirse y servirse desde Cloudinary, no desde `public/images/casos` ni rutas locales del repo.
- Usar URLs Cloudinary con transformaciones `q_auto,f_auto` y rutas descriptivas, por ejemplo `https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/...`.
- Las copias locales de fotos clínicas pueden quedar solo como backup/fuente, pero la app no debe referenciarlas salvo fallback explícito y justificado.
- Antes de cambiar una referencia de imagen clínica, verificar que la URL de Cloudinary responde `200`.

## Stack amesteticadental.com
- Next.js (Turbopack), Tailwind v4, TypeScript
- Fuentes: Manrope + Cormorant Garamond
- Colores: carbon `#141414`, oro `#C9A96E`, crema `#F5F0E8`
