# AM — Instrucciones globales para agentes

## Cliente
Dr. Ariel Merino — AM Estética Dental, Puerto Madero, Buenos Aires.
Es odontólogo, no programador. Explicar sin jerga técnica cuando se comunica con él directamente.

## Proyectos en este monorepo

| Carpeta | Sitio | Estado |
|---|---|---|
| `amesteticadental/` | amesteticadental.com | Producción (Vercel) |
| `amesteticadental-uy/` | amesteticadental.uy | Producción (preapertura Carrasco) |
| `arielmerino/` | arielmerino.com | Producción |
| `thedentalreview/` | thedentalreview.com | Producción |

**Los cuatro son una sola marca, no cuatro proyectos.** Antes de tocar SEO,
enlaces, schema o páginas nuevas, leer **`docs/PLAN-MAESTRO-RED-AM.md`**: explica
cómo están conectadas las propiedades y qué NO hay que romper.

### ⚠️ Cluster hreflang AR ↔ UY — se toca de a dos

`amesteticadental.com` y `amesteticadental.uy` son los dos en español. El cluster
`es-AR` / `es-UY` es lo único que evita que Google los trate como duplicados en
competencia. Vive en dos mapas que **tienen que moverse juntos**:

- `amesteticadental/src/lib/i18n-routes.ts` → `UY_BY_ES`
- `amesteticadental-uy/app/site-data.ts` → `AR_BY_UY`

Agregar una página a uno solo rompe la bidireccionalidad y Google ignora el cluster
entero.

### Páginas nuevas en Uruguay

No se crean archivos: se agrega una entrada a `treatmentPages` en
`amesteticadental-uy/app/site-data.ts`. La plantilla `app/[slug]/page.tsx` resuelve
sitemap, hreflang, breadcrumbs, FAQ schema y enlaces relacionados sola.

## Reglas de negocio — NO ignorar

- **NUNCA** mencionar "consulta sin costo", "evaluación gratuita" ni similar — destruye el posicionamiento premium
- Precios siempre en **USD**
- Tono: premium, clínico, sin exageraciones ni promesas absolutas
- CTA principal: WhatsApp `https://api.whatsapp.com/send?phone=5491170219298`
- Marca: AM Estética Dental · Dr. Ariel Merino · Puerto Madero · Forbes Argentina

### ⚠️ Reglas de copy — dictadas por el Dr. Merino (2026-07-28)

Estas tres aplican a **todo**: web ES e EN, ads, slogans, redes, The Dental Review.

**1. NUNCA prometer "sin desgaste" / "no-prep" / "no enamel reduction".**
En ~90% de los casos hace falta una preparación mínima del esmalte, aunque la técnica sea
ultrafina. Prometer cero desgaste es **publicidad engañosa** y AM no la necesita.
- ✅ Usar: "mínimamente invasivo", "mínima preparación", "minimal prep", "minimally invasive",
  "ultra-thin veneers", "lentes de contacto dental" (como nombre de producto).
- ❌ Evitar: "sin desgaste", "no se tocan tus dientes", "no-prep", "without removing enamel".
- Palabras del Dr.: *"alguien que es muy bueno en lo que hace no necesita estar engañando
  con pancartas con ese tipo de eslogan"*.

**2. El posicionamiento NO es el precio. Es el TIEMPO.**
AM **no compite** contra otros países/consultorios por ser más barato. Nada de tablas de
"ahorro por país" ni "hasta 70% menos que en USA".
- El eje real: **laboratorio propio → resultados naturales en días, no meses**.
- El paciente objetivo (extranjero, empresario, yankee) **valora su tiempo**, no busca ahorrar:
  paga mucho por resultados rápidos y naturales.
- Palabras del Dr.: *"no estamos en la mentalidad de la competencia del precio... la gente
  quiere resultados naturales lo más rápido posible y va a pagar mucho dinero por eso"*.

**2.bis NUNCA comparar la inversión contra otros países.**
Nada de "en Estados Unidos cuesta X y acá Y", ni tablas de ahorro por país. AM está entre
las clínicas más caras incluso a nivel internacional, y ese tipo de comparación atrae
justamente al paciente que después se va a Turquía o Colombia por precio — que no es el
nicho. Palabras del Dr.: *"no me pareció una buena manera compararse con otros países,
porque si no todos se van a Turquía y a Colombia; ese no es mi nicho"*.
- ✅ El eje correcto es **la proyección internacional de la clínica**: pacientes de tres
  continentes, casos documentados, cobertura editorial y **estructura clínica propia en dos
  países** (Buenos Aires en funcionamiento, Montevideo en obra). Ninguna clínica de estética
  dental de la región opera así — es el diferencial más fuerte que tiene la marca, y en
  Uruguay pesa todavía más que en Argentina.
- ❌ No afirmar "la primera clínica internacional del país": es una superioridad que no se
  puede verificar y el argumento se sostiene sin ella.

**3. "Precio" solo para SEO; en el contenido se dice "INVERSIÓN".**
- ✅ URL, `<title>` y meta description pueden decir "precio"/"price" — así busca la gente
  (intención de búsqueda real, no se toca el SEO).
- ✅ En el **cuerpo, headings y copy** se habla de **"inversión" / "investment"**.
- Por qué: es el lenguaje de quien decide por valor. La gente de mucho dinero habla de
  inversión, no de precio. Más elegante y coherente con no competir por precio.

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

## 🚨 ANTES DE TOCAR NADA: `git fetch` (leer esto SIEMPRE)

**El checkout local puede estar MUY desactualizado.** El 2026-07-28 el `main` local estaba
**51 commits atrás** del remoto y divergido: era una línea vieja/paralela. Este es un
**monorepo con 4 sitios** que se edita desde varias máquinas/sesiones (Claude, Codex, etc.).

Riesgos reales si no se chequea:
- Pushear WIP viejo **revierte trabajo del equipo** (pasó a punto de ocurrir con dr-merino,
  layout, Hero ya migrados a Cloudinary).
- Trabajás sobre archivos que ya fueron refactorizados y duplicás/rompés lo hecho.

**Flujo obligatorio:**
```bash
git fetch origin main && git status -sb   # ¿dice "behind N"? → sincronizar PRIMERO
```
- Si divergió: reconciliar **sobre el remoto**. **NUNCA `git push --force`** (se pierde
  trabajo real de otros).
- Nada de ramas/worktrees locales olvidados: el trabajo termina **pusheado a `main`** o no
  existe. El Dr. **solo mira la versión online (Vercel)** — nunca revisa local.
- Antes de commitear, verificar que no se cuelen artefactos ajenos (`JB BALAYAGE/`,
  `*-transfer-bundle*`, `.env*`) — ya están en `.gitignore`.

## Sitio en inglés (`/en`) — turismo dental internacional

Arquitectura elegida (2026-07-28): **páginas espejo `/en/...` con slugs en inglés**.
El sitio en español **no se toca** (cero riesgo). NO se usó `app/[lang]/` (refactor
riesgoso de 50 páginas). Nada de plugins/widgets de traducción: no indexan y son basura SEO.

Piezas de la base (en `amesteticadental/`):
| Archivo | Rol |
|---|---|
| `src/lib/i18n-routes.ts` | Mapa `EN_BY_ES` (clave = URL ES, valor = URL EN) + `hreflangFor()` |
| `src/components/LanguageSwitcher.tsx` | Banderita 🇦🇷/🇬🇧 en el Navbar |
| `src/components/HtmlLangSetter.tsx` + `src/app/en/layout.tsx` | `<html lang="en">` en /en |
| `src/components/Navbar.tsx` | Detecta `/en` → menú, CTA y WhatsApp en inglés |

**Para traducir una página nueva (checklist):**
1. Copiar la página ES (son autocontenidas, JSX inline) a `src/app/en/<slug-en>/page.tsx`.
2. Traducir **localizando keywords**, no literal: *Porcelain Veneers*, *Smile Design*,
   *Dental Tourism*, *Ultra-thin veneers*. Aplicar las **reglas de copy** de arriba.
3. Metadata: `canonical` propio + `languages: hreflangFor("/ruta-espanola")` +
   `openGraph.locale: "en_US"`.
4. Agregar el par al mapa en `src/lib/i18n-routes.ts` (la banderita y el hreflang salen solos).
5. Agregar `hreflangFor()` también en la metadata de la página **española** (bidireccional).
6. Agregar la URL `/en/...` a `STATIC_ROUTES` en `src/app/sitemap.ts`.
7. Si la página ya tiene versión EN, actualizar los links internos de las otras páginas EN.
8. `npm run build` → push. IndexNow notifica a Bing solo.

**Hecho (2026-07-29) — 11 páginas EN:** `/en` (home), `/en/dental-tourism-argentina`,
`/en/porcelain-veneers-buenos-aires`, `/en/ultra-thin-veneers-buenos-aires`,
`/en/smile-design-buenos-aires`, `/en/veneers-cost-buenos-aires`, `/en/dr-ariel-merino`,
`/en/before-after`, `/en/clinic`, `/en/team`, `/en/contact`.

**16 componentes bilingües** (prop `lang`, ES por defecto): Hero, Casos, DrMerino,
Testimonios, Autoridad, Tratamientos, Features, Clinica, PorQueAM, Prensa, ClientesVIP,
FAQ, Contacto, ClinicaGallery, CasosClient, LeadForm + Navbar (menú EN completo).
Data con campos EN: `equipo.ts` (rolEn/areaEn/descripcionEn/altEn), `faq.ts` (`faqDataEn`),
`leads.ts` (`labelEn`). `RootSchema` evita schema español en /en.

**Casos clínicos en inglés:** `/en/cases/[slug]` (detalle) + `/en/before-after` (listado).
La traducción del contenido vive en la columna `translations` de Supabase
(`{ en: { title, subtitle, description, copy, ... } }`) y en `translations` de los assets
(`{ en: { alt, caption } }`). `getCasosPublicadosMerged(lang)` y `getCasoBySlugMerged(slug, lang)`
resuelven el idioma; si no hay traducción, cae al español.

**Ola 2 (2026-07-29) — 24 páginas EN.** Suma: cosmetic-dentistry (paraguas),
invisible-aligners, dental-implants, teeth-whitening, porcelain-vs-composite-veneers,
veneers-vs-aligners, smile-simulator, reviews, blog (+3 artículos), press.
`SmileEntryClient` y `LeadForm` también bilingües.

**Pendiente:** artículos de blog restantes (8 en español sin versión EN), y páginas
secundarias de menor tráfico: coronas-y-fundas, puentes-dentales, carillas-de-resina,
periodoncia, turismo-dental ya está, dientes-de-porcelana-precio, precio-implantes,
odontologia-estetica-buenos-aires, dentista-puerto-madero, carillas-sin-desgaste,
lentes-precio, invisalign, alineadores-buenos-aires, bruxismo, trabaja-en-am, ig.

## Galería de casos — arquitectura de datos (2026-07-28)

- **Listado**: `/casos-antes-y-despues` (antes era `/casos`, que ahora redirige 301).
  Los casos individuales siguen en `/casos/[slug]`.
- **Capa de datos correcta: `src/lib/public-cases.ts`** (`getCasosPublicadosMerged()` /
  `getCasoBySlugMerged()`). La vieja `public-clinical-cases.ts` quedó sin uso.
- `LEGACY_CASE_SLUGS`: blocklist de slugs basura (excluidos de listados y sitemap).
- `looksAutogeneratedTitle()`: **gate genérico** que oculta cualquier caso del bridge de
  Supabase con título auto-generado (empieza en minúscula / parece nombre de archivo).
  Complementa el checklist manual de más abajo: si el pipeline publica basura, no llega a la web.
- **El caso curado (estático en `casos.ts`) es autoritativo** sobre el mismo slug del bridge.
- **Casos fijos ("pin" tipo Instagram)**: `CASOS_FIJOS` en
  `src/app/casos-antes-y-despues/page.tsx` — hoy Milán, 20 carillas y 13 años. El resto rota
  con shuffle diario determinista.
- ⚠️ La web usa la **anon key** de Supabase → **no puede escribir**. Limpiar filas basura de
  la DB requiere service role / panel del pipeline.
- Los dos casos de gingivectomía son **distintos** (mirar las fotos, no el nombre del archivo):
  `-09` = maxilar **inferior** (periodoncia, `gingivectomia-laser-sin-bisturi-sangrado-puntos`);
  `-10` = maxilar **superior** (`gingivectomia-laser-micro-diseno-sonrisa-resinas`).

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

## Cloudinary — TODAS las imágenes, no solo casos clínicos
- Cloud: `drctvgyqd`
- **⚠️ REGLA OBLIGATORIA (aplica a TODA imagen del sitio):** cualquier imagen que se sirva en `amesteticadental/` — casos clínicos, fotos de clínica, equipo, del Dr. Merino, landing pages, headers, lo que sea — **debe subirse a Cloudinary y referenciarse con su URL `res.cloudinary.com`**. NUNCA referenciar `/public/images/...` desde un componente `next/image`.
- **Por qué (causa técnica, no negociable):** `next.config.ts` define `images.loaderFile: ./src/lib/cloudinary-image-loader.ts`. Un `loaderFile` custom **desactiva la optimización propia de Next.js** (`/_next/image`). El loader solo transforma URLs de `res.cloudinary.com` (les agrega `w_/c_limit/q_auto/f_auto`); si la `src` es local hace `return src` → la imagen se sirve **cruda, a tamaño completo, sin resize ni WebP**. Por esto en 2026-07 había 43 fotos de clínica/equipo/dr sirviéndose a 2-3.4 MB c/u y frenando el sitio (se corrigió migrándolas a Cloudinary: bajaron −94%).
- **Flujo correcto al agregar imágenes nuevas:** (1) subir a Cloudinary a un folder descriptivo (`casos/`, `clinica/`, `equipo-am/`, `dr-merino/`, etc.) — hay firma HMAC en `amesteticadental/.env.local`; (2) referenciar `https://res.cloudinary.com/drctvgyqd/image/upload/v.../<folder>/<nombre>` (el loader agrega las transformaciones solo); (3) verificar que la URL responde `200`.
- Las copias locales en `/public` valen solo como backup/fuente; la app no debe referenciarlas salvo fallback explícito y justificado.
- **Única excepción:** `src/remotion/*` usa `staticFile()` con rutas locales para render de video (no es web servida) — ahí sí van locales.

## Emails de la red — Resend (2026-08-14)

**Un solo proveedor y un solo remitente para toda la marca.** Si cada sitio tuviera su
cuenta habría dos reputaciones de envío que cuidar, y que un sitio caiga en spam
arrastraría al otro.

- **Proveedor:** Resend. La cuenta y la clave son las mismas que usa `am-clinica-main`.
- **Remitente:** `info@amesteticadental.com`. Es el único dominio verificado en Resend.
  `amesteticadental.uy` **no** está verificado y **no hace falta**: decisión del Dr., los
  mails son informativos y no esperan respuesta.
- **Variables** (cargadas en Vercel en los proyectos `am-estetica-dental` y
  `amesteticadental-uy`): `RESEND_API_KEY`, `RESEND_FROM`.

**El diseño del mail vive en el repo, no en el panel de Resend.** Resend sólo transporta
un HTML ya armado. El envoltorio compartido está en `src/lib/email.ts` (Argentina) y
`app/lib/email-layout.ts` (Uruguay): define encabezado, tipografía, botón y pie; cada mail
sólo aporta saludo y párrafos.

Reglas de maquetado, que en email no son las de la web:
- **CSS en línea.** Gmail y Outlook descartan las hojas de estilo.
- **Ancho fijo (540px) y estructura simple.** El soporte de flexbox y grid es irregular.
- **Sin imágenes en el encabezado.** Muchos clientes las bloquean por defecto y un logo que
  no carga deja el mail decapitado. La marca la sostienen tipografía, espaciado y el dorado.

**Regla de oro:** si el mail falla, la acción del usuario NO falla. El CV ya está guardado
y el lead ya está registrado; avisar de un error ahí sería mentirle a la persona. Por eso
en la lista de novedades **primero se guarda el lead y después se manda el mail**.

## Variables de entorno — dónde mirar primero (2026-08-14)

Antes de diagnosticar "el formulario no anda", revisar que el proyecto tenga cargadas sus
variables. El 14-08 el proyecto `amesteticadental-uy` en Vercel tenía **cero variables de
entorno**: todo lo que dependía de configuración fallaba en silencio, y la lista de
novedades venía devolviendo 503 a cada visitante perdiendo todos los leads.

```bash
vercel link --yes --project <proyecto>   # desde una carpeta vacía
vercel env ls
```

Las claves reales viven en Vercel, no en el disco. Los `.env.local` del repo pueden estar
vencidos: el de Brevo lo estaba.

⚠️ Al probar una API con Python/urllib, un `403` puede ser Cloudflare bloqueando el cliente
y no la clave. Verificar con `curl` antes de concluir que una credencial está mal.

## Formularios entre sitios — el navegador nunca cruza de dominio (2026-08-14)

Las webs de la red no tienen base de datos propia: postean a `amesteticadental.com`, que es
el único que escribe en Supabase. Pero **el salto entre dominios lo hace el servidor, no el
navegador**: cada sitio expone su propia ruta y desde ahí reenvía.

Por qué: Safari (ITP), Brave y cualquier bloqueador de publicidad bloquean las peticiones
entre sitios. Cuando eso pasa el `fetch` se rechaza sin respuesta y el formulario reporta un
error de conexión con la conexión intacta. El formulario argentino nunca falló en 50+
postulaciones justamente porque es del mismo origen.

- Postulaciones: `amesteticadental-uy/app/api/job-applications` → `.com/api/job-applications`
- Leads: `amesteticadental-uy/app/api/subscribe` → `.com/api/leads` → tabla `marketing_leads`
- El endpoint argentino identifica la sede por el header `Origin` y etiqueta la fila
  (`web_uruguay`). Al viajar servidor a servidor hay que declararlo explícitamente.

⚠️ **Límite de tamaño: 4 MB.** Vercel corta el cuerpo de una request en 4,5 MB y responde
413 sin cabeceras CORS. Validar tamaño y extensión en el navegador ANTES de subir.

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
