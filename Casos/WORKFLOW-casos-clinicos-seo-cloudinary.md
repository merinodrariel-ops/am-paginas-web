# Workflow para subir casos clinicos a AM Estetica Dental

Este flujo se usa cada vez que llega una carpeta nueva dentro de `Casos/` con fotos de antes, despues, proceso clinico o comparativas.

## 1. Leer el caso antes de tocar codigo

- Entender el diagnostico principal: por ejemplo carilla unitaria, bruxismo, agenesia, diastemas, alineadores o implantes.
- Identificar que problema busca resolver el paciente y que transformacion documentan las fotos.
- Separar fotos de portada, antes/despues, proceso, planificacion, cementado, pruebas de color y resultado final.
- Mantener tono premium, clinico y realista. No prometer resultados absolutos.
- No usar "consulta sin costo", "evaluacion gratuita" ni variantes.

## 2. Renombrar la carpeta y las fotos fuente

Antes de subir nada a Cloudinary, la carpeta local y las fotos fuente deben quedar con nombres SEO. No dejar nombres como `central 1unico-1.png`, `IMG_1234.png` o capturas genericas.

El slug debe mezclar tratamiento, problema y busqueda probable. Ejemplos:

- `carilla-unitaria-incisivo-central-oscurecido`
- `bruxismo-desgaste-dental-carillas-ceramicas`
- `agenesia-dental-rehabilitacion-completa-implantes`
- `diseno-sonrisa-cierre-diastemas-dientes-conoidos`

Ejemplo de carpeta local:

```txt
Casos/carilla-unitaria-incisivo-central-oscurecido-dr-ariel-merino-puerto-madero/
```

Ejemplo de archivo:

```txt
carilla-unitaria-incisivo-central-oscurecido-antes-despues-portada-dr-ariel-merino-am-estetica-dental-puerto-madero.png
```

## 3. Embeber metadata y geolocalizacion en las fotos locales

Antes del upload, cada archivo debe tener metadata local con `exiftool`:

- titulo especifico de la foto;
- descripcion clinica;
- keywords SEO;
- autor: `Dr. Ariel Merino - AM Estetica Dental`;
- derechos/copyright;
- ubicacion: `AM Estetica Dental, Puerto Madero`;
- ciudad, provincia y pais;
- coordenadas del consultorio.

Coordenadas de AM Estetica Dental:

```txt
GPSLatitude: 34 deg 37 min 15.09 sec S
GPSLongitude: 58 deg 21 min 39.26 sec W
GPSMapDatum: WGS-84
```

Validar metadata antes de subir:

```bash
exiftool -Title -Description -Subject -Location -GPSLatitude -GPSLongitude "Casos/<carpeta-seo>"/*.png
```

La metadata debe incluir:

- tratamiento principal;
- problema clinico;
- "antes y despues";
- "Dr. Ariel Merino";
- "AM Estetica Dental";
- "Puerto Madero";
- "Buenos Aires".

## 4. Subir imagenes a Cloudinary

Regla obligatoria: las fotos clinicas se sirven desde Cloudinary `drctvgyqd`, no desde `public/images/casos`.

Carpeta sugerida:

```txt
casos/<slug-seo>/
```

Cada public ID debe ser descriptivo y legible:

```txt
casos/central-unico/carilla-unitaria-incisivo-central-oscurecido-antes-despues-portada-dr-ariel-merino-am-estetica-dental
```

Usar siempre URLs con transformacion:

```txt
https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/<carpeta>/<public-id>
```

Despues de subir, verificar que cada URL responda `200` antes de referenciarla en la app.

## 5. Escribir alt text y captions

El `alt` debe describir la imagen y reforzar SEO sin sonar artificial:

```txt
Antes y despues de carilla unitaria en incisivo central oscurecido por traumatismo infantil - Dr. Ariel Merino AM Estetica Dental Puerto Madero
```

Las captions deben ayudar al paciente a entender el recorrido:

- `Estado inicial del incisivo central oscurecido`
- `Prueba de color y maquillaje ceramico`
- `Cementado adhesivo de la ceramica`
- `Antes y despues - perfil derecho`

## 6. Cargar el caso en `src/data/casos.ts`

Agregar un objeto en `CASOS` con:

- `slug`
- `titulo`
- `subtitulo`
- `descripcion` para SEO
- `categorias`
- `duracion`
- `piezas`
- `tecnica`
- `fotoPortada`
- `fotos`
- `copy`
- `copyRedes`
- `precio`
- `publicado: true`

La primera foto debe ser una portada fuerte de antes/despues. Esa imagen funciona como entrada desde la galeria y como Open Graph.

## 7. Metadata y datos estructurados

La pagina individual de caso debe tener:

- canonical propio: `/casos/<slug>`;
- title y description del caso;
- Open Graph con la portada;
- Twitter card con la portada;
- keywords derivadas de las categorias y la ubicacion;
- metadata local de Puerto Madero / Buenos Aires;
- JSON-LD tipo `MedicalWebPage` con `MedicalBusiness`.

## 8. Verificacion antes de cerrar

Antes de darlo por terminado:

```bash
curl -I "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/<carpeta>/<public-id>"
npx tsc --noEmit --pretty false
npm run lint
```

Si el repo tiene ruido preexistente, validar como minimo los archivos tocados y dejar claro que el problema es ajeno al caso.

## 9. Despues del deploy

Cuando el cambio llegue a produccion:

```bash
node gsc.mjs indexar
```

Para casos nuevos conviene pedir indexacion de:

- `/casos`
- `/casos/<slug>`
