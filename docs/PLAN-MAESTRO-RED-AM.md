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

---

## 3.bis Lo que dijeron los datos (2026-08-13)

Con acceso a la API de Search Console se pudo contrastar el plan contra la realidad
en vez de contra intuiciones. **Dos supuestos resultaron equivocados.**

### El volumen del sitio está concentrado en una sola página

`/precio-carillas-dentales-buenos-aires` acumula **148.122 impresiones** en tres
meses — cerca del 78% de todas las impresiones argentinas del sitio — con **1,6% de
CTR en posición 6,3**. El CTR esperado en esa posición ronda el 4-6%.

Esa brecha es, por lejos, la mayor palanca de toda la red: llevar esa página de 1,6%
a 4% valdría más clics que todo lo que puedan sumar las páginas uruguayas en un año.
Parte de la brecha probablemente sea AI Overview comiéndose el clic (la query es
"carillas dentales precio", exactamente el tipo de pregunta que el AIO responde sin
que nadie entre), y eso no se arregla con metadatos. Pero sí se arreglaron dos cosas
concretas: el título decía "desde USD 1.000" mientras la descripción decía
"USD 500-1.500" —contradiciéndose en la misma SERP— y prometía "financiación sin
interés" cuando la propia página informa una tasa fija del 18% anual.

### La demanda uruguaya existe, pero no busca lo que suponíamos

Uruguay es el **4º país** del sitio: 97 clics y 3.058 impresiones en tres meses,
posición media 5,5. La demanda es real. Pero **ninguna de las búsquedas uruguayas
contiene "Montevideo" ni "Uruguay"**. Buscan "carillas dentales precio", "carillas
dentales costo", "cuánto cuestan las carillas dentales". Intención de precio, sin
geografía.

Ojo con la lectura: esto no prueba que nadie busque "carillas Montevideo" — si lo
buscara, aparecerían clínicas uruguayas y no AM, así que esa query no puede figurar
en estos datos. Lo que sí prueba es **qué demanda uruguaya puede capturar AM hoy**:
precio de carillas, sin componente local.

**Consecuencia directa sobre el plan:** `/precio-carillas-dentales-buenos-aires` se
sacó del cluster hreflang. Esa página se lleva 37 de los 97 clics uruguayos. El
hreflang le habría pedido a Google que a un uruguayo le muestre la versión `.uy` en
su lugar — una página sin autoridad, de una sede que todavía no atiende. Era cambiar
un activo que convierte por una promesa. Se vuelve a sumar cuando Carrasco abra.

### Otras oportunidades que quedaron identificadas y sin trabajar

| Página | Impresiones | CTR | Posición | Qué pasa |
|---|---|---|---|---|
| `/blog/las-carillas-danan-los-dientes` | 17.093 | 0,4% | 5,9 | ✅ corregido: el título no respondía la pregunta |
| `/blog/cuanto-cuesta-un-implante-dental-en-argentina` | 13.222 | 1,7% | 5,7 | sin revisar |
| `/blanqueamiento-dental-precio-buenos-aires` | 8.530 | 1,5% | 5,3 | sin revisar |
| `/casos/carillas-resina-diseno-sonrisa-gingivectomia-laser` | 2.534 | 0,6% | 8,0 | sin revisar |
| `/blog/como-blanquear-los-dientes-sin-danar-el-esmalte` | 1.183 | 0,3% | 8,7 | sin revisar |

Y a tiro de piedra (posición 7,5-20 con volumen), todas apuntando a la misma página
de precios: "precio de carillas dentales" (2.531 impr, pos 8,2), "precio de las
carillas dentales" (1.368, pos 9,0), "carillas de porcelana precio" (1.176, pos 8,5),
"cuanto cuestan las carillas dentales" (1.135, pos 7,6).

### Baseline de medición

Al 2026-08-13, las 5 páginas uruguayas nuevas figuran como **"URL desconocida para
Google"**: el sitemap se envió recién hoy. El home y `/casos-clinicos` sí están
indexados. Ese es el punto de partida contra el que medir en dos o tres semanas.

---

## 4. Lo que sigue, en orden de palanca

El orden cambió después de ver los datos: **el mayor retorno no está en Uruguay,
está en la página de precios argentina.** Uruguay es la apuesta a mediano plazo;
esa página es el activo de hoy.

1. **Seguir trabajando el CTR de `/precio-carillas-dentales-buenos-aires`.**
   148.122 impresiones al 1,6%. Ya se corrigieron título y descripción; falta medir
   el efecto en 2-3 semanas y, si el problema resulta ser el AI Overview, atacarlo
   por donde el AIO sí cita: dirección, material y método (ver
   [[project_aio-carillas-estrategia]] — laboratorio propio es el dato extractable).
2. **Las otras cuatro páginas de la tabla de CTR** de la sección 3.bis. Mismo
   patrón, menor volumen, alta probabilidad de mejora barata.
3. **Cargar los secretos de Search Console en GitHub** para que el envío de sitemaps
   quede automático. Estado: el workflow figuraba en verde desde siempre sin enviar
   nada (faltaban las credenciales) y además el script apuntaba mal la propiedad;
   ambas cosas corregidas el 13-08 y los tres sitemaps enviados a mano. Falta sólo
   que las credenciales vivan en el CI. Usar `node get-token-gsc.mjs`, que genera un
   token acotado a Search Console — el de `.env.ads` sirve pero puede gastar en
   Google Ads, y este repo es público.
4. **Verificar `arielmerino.com` en Search Console.** Es el único de los cuatro sin
   verificar, y es el ancla de la entidad Persona del grafo.
5. **Google Business Profile de la sede uruguaya.** El input más pesado del SEO local
   en Montevideo. No se puede publicar hasta que haya dirección atendible.
6. **Casos clínicos propios de la sede uruguaya.** Hoy `.uy` muestra el portfolio
   argentino, que es honesto pero no genera contenido único. El primer caso hecho en
   Carrasco es el que empieza a construir autoridad local propia.
7. **Reincorporar `/precio-carillas-dentales-*` al cluster hreflang** cuando Carrasco
   abra y la página uruguaya pueda atender de verdad.
8. **Más notas en The Dental Review** que enlacen a Uruguay a medida que haya hechos
   reales que reportar (apertura, equipamiento, primeros casos).
9. **Traducir la sede uruguaya al inglés** sólo si el turismo dental hacia Uruguay
   lo justifica. Hoy el volumen está del lado argentino; no adelantarse.

## 5. Cosas que NO hay que hacer

- **No traducir `.uy` a `/en` todavía.** Duplicaría el trabajo sin demanda que lo
  sostenga.
- **No declarar horarios, reseñas ni "ya atendemos" en `.uy`** hasta que la sede
  abra de verdad.
- **No romper el cluster hreflang** agregando páginas a un mapa y no al otro.
- **No hacer de `.uy` una copia de `.com`.** Si las páginas terminan siendo el mismo
  texto, el hreflang deja de ser una solución y pasa a ser un parche sobre contenido
  duplicado.
- **No emparejar por hreflang una página argentina que ya rankea y convierte con una
  uruguaya que todavía no puede atender.** El hreflang no es neutral: le dice a Google
  cuál mostrar. Antes de agregar un par, mirar en Search Console cuánto tráfico
  uruguayo tiene hoy la página argentina.
- **No prometer "cero desgaste" ni "0% de preparación"**, tampoco dentro de un
  gráfico o una tabla. El 13-08 se encontró exactamente eso en el infográfico de
  `/blog/las-carillas-danan-los-dientes`, la nota de blog con más impresiones del
  sitio. La regla aplica al copy y también a los datos que se dibujan.

---

## 6. Cómo mirar los datos

La API de Search Console se consulta con las credenciales de `.env.ads`
(`GOOGLE_ADS_CLIENT_ID` / `_CLIENT_SECRET` / `_REFRESH_TOKEN`, con scope
`webmasters`). Las propiedades verificadas son `sc-domain:amesteticadental.com`,
`sc-domain:amesteticadental.uy` y `thedentalreview.com` — `arielmerino.com` todavía no.

Ojo con un detalle que costó un bug: las propiedades están registradas como
**propiedad de dominio** (`sc-domain:...`), no como prefijo de URL. Construir el
identificador a mano a partir del dominio devuelve 403.
