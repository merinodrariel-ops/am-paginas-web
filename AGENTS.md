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
- CTA principal: WhatsApp `https://api.whatsapp.com/send?phone=5491170219298`
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

## Generación de imágenes con IA (Nano Banana)

Se pueden generar imágenes con Google Nano Banana (`gemini-2.5-flash-image`) desde el repo:

```bash
node generar-imagen.mjs "prompt en inglés describiendo la imagen" salida.png
node generar-imagen.mjs "..." out.png --model gemini-3.1-flash-image   # otro modelo
```

- La API key se lee de `.env.gemini` (raíz del repo, **gitignoreado** — nunca se commitea) o de la env var `GEMINI_API_KEY`.
- `.env.gemini` vive solo en la máquina del Dr.; otras máquinas necesitan su propia copia con la key.
- Requiere billing habilitado en Google AI Studio. Costo ~US$0,03-0,04 por imagen (Nano Banana es barato).
- **Uso recomendado**: headers editoriales abstractos, visuales de lifestyle/hero, ilustraciones conceptuales. NO para simular fotos clínicas reales (resta credibilidad). Para casos clínicos, siempre foto real.
- Las imágenes generadas que se usen en los sitios deben subirse a Cloudinary (`drctvgyqd`), igual que el resto.

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

## ⭐ FLUJO OBLIGATORIO — Publicar caso clínico o página nueva

Cuando publiques un caso clínico nuevo (o cualquier página/URL nueva), NO termina en el push.
Hay que indexarlo en Google **y** Bing. Ejecutá este flujo completo **sin esperar que te lo pidan**:

1. **Publicar**: agregar el caso a `amesteticadental/src/data/casos.ts` con `publicado: true`.
   El sitemap (`src/app/sitemap.ts`) lo incluye automáticamente vía `...casos.map()`.
2. **Verificar build**: `npm run build` en `amesteticadental/` (debe compilar sin errores).
3. **Commit + push a `main`** (regla de oro: nada queda en local).
4. **Verificar que está en vivo**: `curl -s -o /dev/null -w "%{http_code}" https://www.amesteticadental.com/casos/<slug>` → debe dar `200`.
5. **Indexar en Google**: `node gsc.mjs indexar` (o solicitar indexación manual en Search Console).
6. **Indexar en Bing/Yandex** (IndexNow):
   - **Automático**: el GitHub Action `.github/workflows/indexnow.yml` ya dispara IndexNow
     en cada push que toque casos o páginas. No hace falta hacer nada.
   - **Manual (si querés forzarlo ya)**: desde `amesteticadental/`:
     - `npm run notify-index` → notifica TODAS las URLs del sitemap
     - `node scripts/notify-indexnow.mjs /casos/<slug>` → notifica solo esa URL
7. **The Dental Review**: evaluar si el caso amerita una nota periodística en thedentalreview.com
   que enlace de vuelta al caso (ver sección backlinks abajo).

**Datos IndexNow**: key `14c9604645864308b49cb8994e8d032c`, hosteada en
`https://www.amesteticadental.com/14c9604645864308b49cb8994e8d032c.txt`.
Google NO usa IndexNow — para Google es sitemap dinámico + `gsc.mjs indexar`.

## The Dental Review — estrategia de backlinks

`thedentalreview.com` es una publicación editorial independiente cuya función SEO es
generar **backlinks de calidad** hacia amesteticadental.com (Bing lo marca como debilidad #1).

Reglas al escribir para The Dental Review:
- **Tono periodístico, tercera persona.** "Una clínica de Puerto Madero documentó..." NO "somos los mejores".
- **Sin autobombo excesivo.** Creíble, informativo, como cobertura de prensa real.
- **Enlazar a páginas profundas** de amesteticadental (el caso, la página de precio), no solo al home.
- **Anchor text variado y natural** (no repetir siempre "carillas dentales Buenos Aires").
- **Cubrir también temas de industria** (no solo AM) para que la publicación parezca legítima y no un PBN.
- Cada caso clínico nuestro puede convertirse en una nota: técnica usada, resultado, contexto del sector.

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

## Publicación de Casos Clínicos — Flujo obligatorio

**REGLA CRÍTICA**: Nunca publicar un caso clínico con título automático (slug, nombre de archivo, etc.). Todo título debe ser procesado, mejorado y validado por un LLM ANTES de commitear.

### Checklist pre-commit para casos clínicos

Antes de `git add casos.ts`, verifica TODOS estos puntos:

1. **Título** (`titulo`)
   - ✅ NO es un slug (no tiene guiones ni números raros)
   - ✅ NO es una descripción técnica ("procedimiento-recorte-gingival")
   - ✅ Está pensado para el paciente: beneficio, emoción, claridad
   - ✅ Es corto y pegadizo (máx 8-10 palabras)
   - ✅ Fue mejorado por un LLM (no automático)
   - Ej. MALO: "gingivectomia-laser-10-procedimiento-recorte-gingival"
   - Ej. BUENO: "Gingivectomía láser + micro diseño de sonrisa en resinas"

2. **Subtítulo** (`subtitulo`)
   - ✅ Expande el título: qué se hizo, por qué, para quién
   - ✅ Máx 15-20 palabras
   - Ej: "Gingivectomía en todos los márgenes + micro diseño de sonrisa mínimamente invasivo"

3. **Descripción** (`descripcion`)
   - ✅ Resumen ejecutivo: quién, qué, cómo, resultado, precio
   - ✅ Incluye ubicación y profesional
   - ✅ Tone: clínico pero accesible, sin jerga excesiva

4. **Copy** (`copy`)
   - ✅ Cuenta la historia: premisa → proceso → resultado
   - ✅ Humaniza (paciente, emociones, por qué vino)
   - ✅ Educativo: explica qué se hizo y por qué, no solo antes/después
   - ✅ Fue procesado y mejorado por un LLM

5. **Precio** (`precio`)
   - ✅ Precio confirmado (no aproximado)
   - ✅ Si hay financiación, incluir: anticipo + cuota mensual + plazo
   - Ej: "USD 5.000 (o USD 1.500 + USD 309/mes en 12 meses)"

6. **Slug** (`slug`)
   - ✅ NO tiene números de secuencia o versión (-09, -10, etc.)
   - ✅ Descriptivo y único
   - ✅ Sin "procedimiento", "antes-despues", u otros rellenos

### Prompt para mejorar títulos vía LLM (usa esto si dudas)

Si un título suena raro o automático, pasalo por este prompt:

```
Eres editor de contenido clínico premium. Mejora este título de caso clínico.

TÍTULO ACTUAL: [pegar slug o título raro]

CONTEXTO DEL CASO:
- Procedimientos: [ej: gingivectomía láser + micro diseño de sonrisa]
- Tipo de paciente: [ej: joven, vive de su imagen]
- Resultado: [ej: sonrisa más refinada, línea gingival nivelada]
- Precio: [ej: USD 5.000]

REGLAS:
- Máx 8-10 palabras
- Beneficio o resultado, no procedimiento técnico
- Para el paciente, no para el dentista
- Pegadizo y memorable
- Evitar: números, guiones, palabras técnicas innecesarias

NUEVO TÍTULO:
[LLM devuelve 3 opciones]

PICK UNA. Si te gusta, úsala.
```

### Ejemplo: Cómo NO hacer vs. BIEN

**❌ MAL** (automático, título raro):
```
slug: "gingivectomia-laser-10-procedimiento-recorte-gingival"
titulo: "gingivectomia laser 10 procedimiento recorte gingival"
```
↳ Suena como un nombre de archivo interno. El paciente no entiende qué es.

**✅ BIEN** (procesado, pensado):
```
slug: "gingivectomia-laser-micro-diseno-sonrisa-resinas"
titulo: "Gingivectomía láser + micro diseño de sonrisa en resinas"
subtitulo: "Gingivectomía en todos los márgenes gingivales + micro diseño mínimamente invasivo"
```
↳ Claro, atractivo, explica qué se hizo. El paciente entiende el beneficio.

### Validación automática (TODO para futuro)

En el futuro, un script pre-commit puede validar:
- Slug no contiene números de secuencia (`-09`, `-10`, `-11`, etc.)
- Título no es igual al slug
- Título no contiene palabras técnicas innecesarias ("procedimiento", "antes-despues")
- Descripción tiene mínimo 100 caracteres
- Copy tiene mínimo 300 caracteres
