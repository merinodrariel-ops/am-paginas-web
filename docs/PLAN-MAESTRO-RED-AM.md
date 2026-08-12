# Plan maestro — la red AM como un solo activo

Última actualización: 2026-08-12

Este documento existe porque el monorepo venía siendo tratado como cuatro proyectos
que comparten carpeta. No lo son: son **cuatro propiedades de una misma marca**, y
el valor que no se estaba capturando estaba en la relación entre ellas, no dentro de
cada una.

---

## 1. El diagnóstico

Los cuatro dominios están vivos y devuelven 200:

| Dominio | Rol | Tamaño |
|---|---|---|
| `amesteticadental.com` | Motor comercial y de autoridad | 51 páginas ES + 25 EN |
| `amesteticadental.uy` | Sede de Montevideo (preapertura) | 14 URLs |
| `thedentalreview.com` | Publicación editorial → backlinks | 13 URLs |
| `arielmerino.com` | Ancla de la entidad Persona | 1 URL |

Lo que estaba roto no era ninguno de los sitios. Era la red:

1. **`.com` enlazaba a `.uy` una sola vez** — y ni siquiera era un enlace visible:
   era una constante de configuración dentro de `SmileEntryClient.tsx`. Uruguay no
   recibía nada de la autoridad del sitio principal.
2. **No había hreflang entre `.com` y `.uy`.** Los dos son español. Sin declarar
   `es-AR` / `es-UY`, Google trata dos páginas de intención equivalente como
   duplicados en competencia y suprime una. Uruguay estaba compitiendo contra el
   sitio de la propia marca.
3. **Las entidades estaban desconectadas.** `.uy` declaraba un `Organization`
   genérico, sin `@id`, sin `sameAs` y sin ninguna referencia a Wikidata ni a la
   clínica argentina. Para Google eran dos marcas distintas que casualmente se
   llamaban parecido.
4. **`.uy` exportaba autoridad y no importaba nada.** Todas sus tarjetas de casos
   apuntaban afuera, a `.com`, y no había un solo enlace entrante.
5. **Contenido demasiado fino para rankear.** Las 4 páginas de tratamiento uruguayas
   tenían ~150 palabras cada una.
6. **Defectos técnicos que sangraban crawl.** `/trabaja-en-am` y `/simulador-sonrisa`
   son redirects a otros dominios y estaban listados en el sitemap; la navegación de
   `.uy` era `display: none` en mobile, dejando al grueso del tráfico sin un solo
   enlace interno; el índice de noticias de TDR listaba 2 de 4 notas.

---

## 2. La tesis

**Uruguay no crece como sitio nuevo. Crece como sede de una marca que ya tiene
autoridad.** Todo lo que sigue deriva de ahí.

Y una segunda tesis, comercial: mientras Carrasco no abra, el sitio uruguayo no
tiene un camino a ingresos si sólo junta emails. El único camino real hoy es
**capturar demanda uruguaya y resolverla en Buenos Aires**. Eso además es coherente
con el posicionamiento del Dr. Merino: el eje no es el precio, es el tiempo — el
laboratorio propio concentra el tratamiento en días, y para alguien que tiene que
cruzar el río esa diferencia es lo que hace el tratamiento posible.

---

## 3. Lo ejecutado (2026-08-12)

### Capa de identidad
- **Cluster hreflang `es-AR` / `es-UY` / `x-default`** en 13 pares de páginas,
  declarado en **los dos sitemaps**. Se hizo por sitemap y no página por página
  porque Google exige bidireccionalidad: hacerlo en el `<head>` habría implicado
  editar las 50 páginas argentinas de a una.
  - Mapa argentino: `amesteticadental/src/lib/i18n-routes.ts` → `UY_BY_ES`
  - Mapa uruguayo: `amesteticadental-uy/app/site-data.ts` → `AR_BY_UY`
  - **Los dos tienen que moverse juntos.** Si agregás una página uruguaya con par
    argentino, agregala en ambos mapas o el cluster se rompe.
- **Grafo de schema con `@id` compartidos.** La sede uruguaya se declara
  `subOrganization` de la marca y `branchOf` de la clínica argentina; el Dr. Merino
  reusa el `@id` de `arielmerino.com` en los tres dominios.
  - No se declaran `openingHoursSpecification` ni `aggregateRating` en `.uy`: la
    sede no abrió. Afirmar horarios o reseñas propias sería un dato falso.

### Ruteo de autoridad
- Fila **"AM en la región"** en el footer de `.com` (presente en 21 páginas) hacia
  `.uy`, The Dental Review y arielmerino.com.
- **Footer de red completo** en `.uy`, que antes no tenía footer.
- **Nota editorial en The Dental Review** sobre el corredor odontológico rioplatense,
  con enlaces profundos a `.uy` y anchors variados.
- `arielmerino.com` declara las dos sedes en `affiliation` y enlaza a las cuatro
  propiedades.

### Contenido uruguayo
Las 4 páginas de tratamiento pasaron de stubs a contenido real, y se sumaron 5:

| URL | Rol |
|---|---|
| `/carillas-dentales-montevideo` | Cabeza de categoría |
| `/diseno-de-sonrisa-montevideo` | Cabeza de categoría |
| `/estetica-dental-montevideo` | Paraguas |
| `/carillas-de-porcelana-montevideo` | Long tail de material |
| `/implantes-dentales-montevideo` | **Nueva** — categoría sin cubrir |
| `/blanqueamiento-dental-montevideo` | **Nueva** — tratamiento de entrada |
| `/precio-carillas-dentales-montevideo` | **Nueva** — intención comercial |
| `/clinica-dental-carrasco` | **Nueva** — ancla de SEO local |
| `/tratamiento-en-buenos-aires-desde-uruguay` | **Nueva** — la página que convierte hoy |

Todas se renderizan desde `treatmentPages` en `app/site-data.ts` con la plantilla
`app/[slug]/page.tsx`. **Para agregar una página uruguaya nueva alcanza con agregar
una entrada al objeto**: sitemap, hreflang, breadcrumbs, FAQ schema y enlaces
relacionados salen solos.

Sobre el copy, se respetaron las tres reglas del Dr. Merino: nunca "sin desgaste"
(se dice preparación mínima y se explica por qué), nunca competir por precio (el eje
es tiempo y laboratorio propio, dicho de frente en la página puente), y "precio" sólo
en URL y title mientras el cuerpo habla de **inversión**.

### Técnico
- Los dos redirects salieron del sitemap uruguayo.
- La navegación mobile de `.uy` dejó de ocultarse: ahora es una fila desplazable.
- El índice de noticias de TDR lista las 5 notas.
- CI compila los cuatro sitios (`.github/workflows/ci.yml`).

---

## 4. Lo que sigue, en orden de palanca

0. **🚨 El envío automático de sitemaps a Google está apagado desde siempre.**
   El workflow `search-console-sitemaps.yml` figura en verde en cada push, pero es
   un no-op: los secretos `GOOGLE_SEARCH_CONSOLE_CLIENT_ID`, `_CLIENT_SECRET` y
   `_REFRESH_TOKEN` **no están cargados en GitHub**, así que el job salta directo al
   paso "Avisar si faltan secretos" y termina con éxito sin haber enviado nada.
   Afecta a los cuatro sitios, no sólo a Uruguay. El script en sí está bien y ya
   contempla `amesteticadental.uy/sitemap.xml`.
   **Para arreglarlo:** correr `node get-token-gsc.mjs` (genera el refresh token) y
   cargar los tres valores en Settings → Secrets and variables → Actions del repo.
   Es lo único que hace falta; el workflow ya está escrito.

1. **Verificar `amesteticadental.uy` en Search Console** y enviar el sitemap. Sin
   esto, nada de lo anterior es medible. Requiere al Dr. (acceso a la cuenta).
2. **Google Business Profile de la sede uruguaya.** No se puede publicar hasta que
   haya dirección atendible, pero se puede preparar. Es el input más pesado del SEO
   local en Montevideo.
3. **Reseñas.** El sitio argentino declara 4.9★ con base real; el uruguayo no puede
   declarar nada propio todavía. En cuanto abra, es la primera prioridad.
4. **Traducir la sede uruguaya al inglés** sólo si el turismo dental hacia Uruguay
   lo justifica. Hoy el volumen está del lado argentino; no adelantarse.
5. **Casos clínicos propios de la sede uruguaya.** Hoy `.uy` muestra el portfolio
   argentino, que es honesto pero no genera contenido único. El primer caso hecho en
   Carrasco es el que empieza a construir autoridad local propia.
6. **Más notas en The Dental Review** que enlacen a Uruguay a medida que haya hechos
   reales que reportar (apertura, equipamiento, primeros casos).

## 5. Cosas que NO hay que hacer

- **No traducir `.uy` a `/en` todavía.** Duplicaría el trabajo sin demanda que lo
  sostenga.
- **No declarar horarios, reseñas ni "ya atendemos" en `.uy`** hasta que la sede
  abra de verdad.
- **No romper el cluster hreflang** agregando páginas a un mapa y no al otro.
- **No hacer de `.uy` una copia de `.com`.** Si las páginas terminan siendo el mismo
  texto, el hreflang deja de ser una solución y pasa a ser un parche sobre contenido
  duplicado.
