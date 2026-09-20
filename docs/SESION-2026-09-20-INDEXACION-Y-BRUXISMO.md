# Sesión 2026-09-20 — Indexación de Google y artículo de bruxismo

Dos trabajos independientes que salieron el mismo día. El segundo destrabó algo que
venía roto desde agosto.

---

## 1. Artículo nuevo: cómo combatir el bruxismo

**URL:** https://www.amesteticadental.com/blog/como-combatir-el-bruxismo-botox-y-placa

El sitio ya tenía `/bruxismo-desgaste-dental-carillas-ceramicas`, pero esa página
resuelve el problema tarde: es la rehabilitación con carillas de un desgaste que ya
ocurrió. No había nada sobre **cómo frenarlo antes**, que es lo que la gente busca
cuando todavía está a tiempo. Son intenciones de búsqueda distintas y no compiten;
el artículo enlaza a la página vieja para el caso en que el desgaste ya cambió la
forma de los dientes.

Cubre los dos pilares del tratamiento —la placa con guías de desoclusión y la toxina
botulínica en el masetero— con las analogías que el Dr. Merino usa en el consultorio.

### Dos decisiones de contenido que conviene no deshacer sin querer

**La longevidad quedó como razonamiento, no como promesa.** El artículo explica la
cadena completa (apretar → microdespertares → sueño menos reparador) y después dice
explícitamente que nadie puede prometer más años de vida. La cadena es sólida; la
promesa sería otra cosa, y el posicionamiento premium de AM no necesita venderla.

**La experiencia personal del Dr. va rotulada como un solo caso.** Los ruidos
articulares que desaparecieron tras tres aplicaciones en nueve meses sostienen la
convicción del autor, no la eficacia del tratamiento. Está dicho así en el texto.

### Imágenes

Tres ilustraciones generadas con el conector de Magnific, subidas a Cloudinary
(carpeta `bruxismo/`) y rotuladas como ilustración en el pie:

| Imagen | Modelo | Por qué ese |
|---|---|---|
| Header editorial | `seedream-5-pro` | Fotografía y producto |
| La placa, vista de producto | `seedream-5-pro` | Ídem |
| El masetero con puntos de aplicación | `gpt-2` | Es el único que respetó la anatomía |

Vale la pena la nota sobre el masetero: los otros modelos lo dibujaron **dos veces**
como una mariposa sobre la mejilla, cuando en realidad es una lámina rectangular que
va del arco cigomático al ángulo de la mandíbula. Una ilustración anatómica mal
dibujada en la web de un odontólogo cuesta más credibilidad de la que suma la imagen.
Mirar cada render antes de subirlo.

### El 360 de la placa quedó pendiente, y no por falta de intentos

Se probaron los dos caminos que ofrece Magnific y ninguno da un resultado publicable,
**porque la placa es transparente**:

- `images_change_camera` mantiene el objeto pero corre la escala y el encuadre entre
  frames, y el giro real no sigue los grados pedidos. La secuencia saltaría.
- `models3d_generate` (tripo-v31, textura detallada) devolvió un bloque **opaco** tipo
  piedra: el image-to-3D no puede inferir geometría a través de la refracción. Encima
  pesaba 57 MB, inviable para web aun si hubiera salido bien.

**El camino bueno son fotos reales**: una placa de la clínica sobre plato giratorio,
24-36 tomas con luz y encuadre fijos, y un visor de secuencia. Para una clínica, una
placa real vale más que cualquier render.

---

## 2. La indexación en Google dejó de depender del token de una persona

### El problema, que no era el que parecía

La indexación venía fallando con `invalid_grant` cada pocos días, y cada vez se la
"arreglaba" regenerando el token. Era tratar el síntoma: **los refresh tokens de
Google caducan a los 7 días mientras la app de OAuth está en estado "Testing"**, así
que el token nuevo se moría a la semana siguiente.

El costo real fue invisible durante un mes: `indexacion-watch.yml` acumulaba
**34 corridas en rojo de 34** desde su creación —nunca vigiló nada un solo día— y
`search-console-sitemaps.yml` llevaba 21 fallas seguidas.

### Por qué no se publicó la app OAuth, que era el plan

Al ir a publicarla apareció un bloqueo: el botón está deshabilitado porque Google
exige, para una app externa, una **política de privacidad pública**, y
`amesteticadental.com` no tiene ninguna (se probaron las cinco rutas habituales, todas
404). Ese camino arrastraba escribir y publicar una página legal nueva, más convivir
con la pantalla de "app no verificada" en cada autorización.

### Lo que se hizo en su lugar

Para un proceso que corre solo, de noche, sin nadie delante, la credencial correcta
nunca fue la de un usuario. Ahora es una **cuenta de servicio**:

```
indexacion-red-am@am-ads-494903.iam.gserviceaccount.com
```

No vence, no pide consentimiento, no expone nada públicamente y no está atada a
ninguna persona. Tiene **cero roles de IAM** en el proyecto de Google Cloud: su
alcance máximo es Search Console. No toca Ads, ni facturación, ni datos de pacientes.

Figura como **Propietario** en las cuatro propiedades. Verificado contra la Indexing
API real, no contra la lista de propiedades:

```
amesteticadental.com     ✅    thedentalreview.com   ✅
amesteticadental.uy      ✅    arielmerino.com       ✅
```

### Cambios en el código

- **`scripts/google-auth.mjs`** (nuevo) — centraliza la autenticación de los 6 scripts
  que hablaban con Google cada uno por su cuenta. Firma un JWT con la clave privada,
  sin dependencias nuevas. Mantiene el refresh token como respaldo para uso local.
- **`scripts/verificar-credenciales-google.mjs`** (nuevo) — responde las tres preguntas
  en orden: ¿hay credencial? ¿autentica? ¿qué propiedades ve?
- Migrados: `gsc.mjs`, `gsc-analisis.mjs`, `gsc-indexar-faltantes.mjs`,
  `scripts/submit-google-sitemaps.mjs`, `scripts/indexar-red.mjs`,
  `scripts/auditar-indexacion.mjs`.
- Workflows: usan `GOOGLE_SERVICE_ACCOUNT_JSON`. Los tres secretos viejos se borraron
  de GitHub y ya no se referencian.

### Dos trampas de diagnóstico, anotadas para que no cuesten dos veces

**`verificar-credenciales-google.mjs` NO distingue Propietario de Completo.** Con
"Completo" las cuatro propiedades ya figuran en `sites.list`, así que el verificador
da todo verde mientras la indexación falla en silencio. La diferencia sólo aparece al
pedir indexación: `403 Permission denied. Failed to verify the URL ownership`. Para
comprobar el nivel real hay que pegarle a la Indexing API.

**El desplegable de permisos de Search Console no acepta automatización.** Resiste el
click sobre la opción, ArrowUp+Enter y el type-ahead: el valor vuelve solo a
"Completo". Los tres permisos que faltaban los cargó el Dr. a mano. Si hay que
rehacerlo, es a mano.

---

## Cómo verificar que sigue sano

```bash
node scripts/verificar-credenciales-google.mjs   # ¿hay credencial y autentica?
node scripts/indexar-red.mjs                     # ¿el permiso es Propietario? (consume cuota)
```

La Indexing API tiene un tope de **200 pedidos por día**. El segundo comando es para
verificar, no para correr a cada rato.

Al publicar una nota nueva:

```bash
node gsc.mjs indexar /blog/mi-nota
```

---

## ⚠️ Al sincronizar desde otra máquina

`git pull` trae todo el código, pero **la clave NO viaja por git** — está en
`.gitignore` a propósito, y este repo es público.

Para que los scripts de Search Console funcionen en la otra computadora hay que
llevarle el archivo a mano:

1. Copiar `.gsc-service-account.json` desde la Mac mini (AirDrop sirve).
2. Dejarlo en la raíz del repo, con el mismo nombre.
3. `chmod 600 .gsc-service-account.json`
4. Comprobar con `node scripts/verificar-credenciales-google.mjs`

Sin ese archivo, todo lo demás del repo anda igual: sólo fallan los comandos que
hablan con Google. El CI no se ve afectado, porque allá la credencial viaja por el
secreto de GitHub.

Lo mismo vale para `.env.local`, `.env.gemini` y `.env.ads`, que tampoco están en git.

---

## Qué quedó abierto

| Pendiente | Estado |
|---|---|
| 360 de la placa | Esperando fotos reales sobre plato giratorio |
| Política de privacidad del sitio | No existe. Hoy no bloquea nada, pero es una página que un sitio con formularios debería tener |
| Rotar la clave de la cuenta de servicio | **Decisión del Dr.: no rotarla.** El alcance es Search Console y nada más |
