# TypeSafe (Jev) en la red AM

Jev no escribe texto: contesta preguntas tipadas sobre un estado y devuelve un valor que
el código puede usar sin parsear nada. Tres tipos de pregunta:

| tipo     | pregunta                        | devuelve                                |
| -------- | ------------------------------- | --------------------------------------- |
| `noul`   | ¿esta afirmación es cierta?     | `noul` entre 0 y 1                      |
| `choice` | elegí una de estas opciones     | `choice`, `probabilities`, `confidence` |
| `score`  | puntuá contra esta rúbrica      | `score`, `probabilities`, `confidence`  |

Todas las preguntas de una llamada se evalúan en paralelo contra el mismo estado, así que
agregar preguntas casi no cuesta tiempo.

## Por qué esto y no un LLM

Para juicios chicos y repetidos —¿este título está escrito para el paciente?— un LLM
generativo devuelve un párrafo que hay que volver a leer y que no es comparable entre
corridas. Jev devuelve `0.48/2` y una confianza de `0.44`. Eso se compara, se ordena, se
mete en un `if` y se versiona.

La confianza es la parte que evita romper cosas: cuando el modelo duda, el script no
falla, manda a revisión humana. Los umbrales viven en el código, no en el prompt.

**Dónde no sirve:** para escribir el título nuevo. Jev juzga, no redacta. El flujo real es
Jev detecta → un LLM propone → una persona elige.

## La key

Va en `.env.typesafe` en la raíz (gitignoreado, `chmod 600`), o como `TYPESAFE_API_KEY` en
el entorno. Se saca de https://console.typesafe.ai/keys.

## `auditar-titulos.mjs`

El validador pre-commit que pedía la guía de títulos de casos clínicos y nunca existió.
Reparte el trabajo: el código chequea lo verificable (slug con número de secuencia, título
igual al slug, largos mínimos), Jev juzga lo que es criterio (¿para el paciente o para el
dentista? ¿invita al click? ¿parece un slug aunque no lo sea?).

```bash
node scripts/typesafe/auditar-titulos.mjs           # audita los casos publicados
node scripts/typesafe/auditar-titulos.mjs --json    # para encadenar
node scripts/typesafe/auditar-titulos.mjs --titulo "..." --slug "..." --subtitulo "..."
```

Sale con código 1 sólo si algo queda en `MAL`. `REVISAR` no rompe nada: es para leer.

### Medido en la corrida del 21-09-2026

11 casos publicados, ~0.8 s por caso, 4 en paralelo, ~510 tokens de entrada y ~72 de
salida por caso. Resultado: 9 bien, 2 a revisar, 0 mal.

Dos cosas que encontró y que son de verdad:

1. **`gingivectomia-laser-micro-diseno-sonrisa-resinas`** puntúa `0.48/2` en "escrito para
   el paciente" — es el título más técnico de la galería. Está publicado y es, además, el
   que la guía de títulos usa como ejemplo de título *corregido*. El ejemplo de la guía
   está flojo.
2. La regla de **"máx 8-10 palabras"** de la guía la incumple el título que mejor puntúa de
   los 11 (`20 carillas en 10 días...`, 14 palabras, `1.96/2` en gancho). La regla está
   desactualizada contra lo que funciona. Por eso el largo avisa y no falla.

### Calibrar los umbrales

Están todos juntos arriba del archivo, en `UMBRALES`. Dos ya se movieron contra casos
reales: `relleno` subió de `0.6` a `0.75` porque un `noul` de `0.61` es el modelo dudando,
y el regex del número de secuencia se ancló al final del slug porque el `-24-` de
`implantes-24-ceramicas` es la cantidad de piezas, no una versión.

## Próximo candidato

Los títulos ya estaban casi todos bien. Donde hay plata de verdad es en el CTR: según el
análisis de Search Console, la fuga de la red no es el ranking sino el click. Un
`auditar-ctr.mjs` que cruce las páginas con impresiones altas y CTR bajo contra un `score`
de "¿este title promete algo?" atacaría eso directamente.
