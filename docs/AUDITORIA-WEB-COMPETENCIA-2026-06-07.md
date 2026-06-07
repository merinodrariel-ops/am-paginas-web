# Auditoría web, seguridad y competencia

Fecha: 7 de junio de 2026  
Sitio principal: https://www.amesteticadental.com

## Resumen ejecutivo

AM Estética Dental tiene una base digital superior a la mayoría de sus competidores directos en Buenos Aires: casos clínicos detallados, precios claros en USD, contenido especializado, autoridad personal, buena arquitectura SEO y una identidad visual consistente.

Los problemas principales no están en la falta de páginas. Están en:

1. seguridad técnica y control de abuso del simulador;
2. CTR bajo en páginas que ya posicionan bien;
3. afirmaciones de autoridad repetidas con un tono demasiado absoluto;
4. dispersión entre páginas muy parecidas;
5. dependencia excesiva de Forbes como argumento de confianza;
6. falta de publicación real de The Dental Review.

## Metodología

- Revisión del código Next.js y sus rutas públicas.
- Rastreo de las 49 URLs incluidas en el sitemap.
- Comprobación de 62 enlaces internos.
- Revisión de assets críticos, canonicals y navegación.
- Auditoría de dependencias con `npm audit`.
- Inspección del endpoint público del simulador.
- Análisis de Search Console entre el 7 de marzo y el 4 de junio de 2026.
- Comparación pública con competidores visibles para búsquedas de carillas, diseño de sonrisa e implantes en Buenos Aires.

## Salud técnica

### Correcto

- Las 49 URLs del sitemap respondieron HTTP 200.
- Todas las URLs tienen canonical coherente.
- Los 62 enlaces internos rastreados respondieron sin errores ni redirecciones problemáticas.
- Todas las páginas sin menú completo conservan al menos un enlace a Inicio.
- `/casos` ya tiene navegación completa.
- El video del héroe vuelve a servirse correctamente.
- `robots.txt` y `sitemap.xml` son accesibles.
- La aplicación compila de forma estática en las páginas comerciales principales.

### Corregido durante esta auditoría

- Next.js actualizado de 16.2.4 a 16.2.7.
- Dependencias de producción: 0 vulnerabilidades conocidas.
- Dependencias locales: 0 vulnerabilidades conocidas después de actualizar el árbol.
- Se agregaron:
  - `Content-Security-Policy` limitada a protección estructural;
  - `Permissions-Policy`;
  - `Referrer-Policy`;
  - `X-Content-Type-Options`;
  - `X-Frame-Options`.
- El simulador ahora limita:
  - formatos a JPEG, PNG y WebP;
  - imagen decodificada a 5 MB;
  - cuerpo total a 7 MB;
  - base64 inválido antes de consumir la API de IA.

### Riesgos restantes

#### P1 — Abuso económico del simulador

La validación de tamaño reduce ataques básicos, pero todavía falta un rate limit distribuido por IP o sesión. Un límite en memoria no es confiable en Vercel. La solución correcta es una regla de Vercel Firewall o un contador externo durable.

#### Privacidad del simulador — corregido

El consentimiento ahora informa que la fotografía se procesa temporalmente mediante Google Gemini, que AM no la guarda en su base de datos y que la simulación no constituye diagnóstico ni promesa de resultado.

#### P2 — Middleware duplicado

Hay redirecciones tanto en `next.config.ts` como en `src/middleware.ts`, con destinos distintos para algunas URLs históricas. Conviene consolidar una sola fuente para evitar contradicciones y aprovechar la migración recomendada de `middleware` a `proxy`.

#### P2 — Encabezado CORS

Vercel devuelve `Access-Control-Allow-Origin: *` también en HTML estático. No expone credenciales por sí solo, pero no aporta valor para las páginas y merece revisión en la configuración de plataforma.

## Navegación

El caso detectado en `/casos` era excepcional. Varias landings de Ads no muestran el menú completo por decisión de conversión, pero sí contienen logo o enlace al Inicio.

Recomendación:

- mantener navegación reducida en landings pagas;
- usar navegación completa en contenido orgánico, casos, blog, equipo y prensa;
- incorporar un pie consistente en todas las landings para evitar sensación de micrositio aislado.

## Search Console: oportunidades reales

Periodo analizado: 7 de marzo a 4 de junio de 2026.

### Página dominante

`/precio-carillas-dentales-buenos-aires`

- 53.163 impresiones
- 1.029 clics
- CTR: 1,94%
- posición media: 5,4

Esta página es el principal activo SEO del sitio. Un aumento de CTR de 1,94% a 3% representaría aproximadamente 560 clics adicionales por cada volumen equivalente de impresiones.

### Consultas prioritarias

| Consulta | Impresiones | Clics | CTR | Posición |
|---|---:|---:|---:|---:|
| carillas dentales | 7.780 | 84 | 1,08% | 4,0 |
| carillas dentales precio | 5.741 | 102 | 1,78% | 6,3 |
| carillas | 1.185 | 6 | 0,51% | 4,6 |
| precio de carillas dentales | 1.017 | 16 | 1,57% | 8,6 |
| carillas de resina precio | 453 | 5 | 1,10% | 7,1 |

### Interpretación

AM ya aparece. El problema es que muchos usuarios no eligen el resultado.

Prioridades:

1. probar un metatítulo con precio real y ubicación;
2. mostrar fecha de actualización clínica visible;
3. reforzar autor y revisión;
4. presentar comparativa cerámica/resina sin obligar a recorrer toda la página;
5. agregar una respuesta directa sobre precio total según cantidad de piezas;
6. medir cambios de CTR por bloques de 28 días.

### Canibalización

Existen varias páginas cercanas:

- `/carillas-dentales`
- `/precio-carillas-dentales-buenos-aires`
- `/dientes-de-porcelana-carillas-precio`
- `/lentes-de-contacto-dental-precio-buenos-aires`
- `/carillas-sin-desgaste`

No deben repetir la misma intención. Cada una necesita una función inequívoca:

- precio;
- guía clínica general;
- material/terminología;
- ultradelgadas y selección de caso;
- comparativa técnica.

## Competencia

### Grupo Río Dental Studio

Fuente: https://www.riodontologia.com.ar/

**Hace bien**

- comunica equipo interdisciplinario;
- enumera tecnología concreta: escaneo, impresión 3D, láser y microscopio;
- presenta tratamientos de forma rápida;
- CTA visible.

**Hace mal**

- usa promesas amplias como tratamiento aplicable “en todos los casos”;
- contiene errores de redacción y secciones genéricas;
- presenta poca evidencia clínica profunda;
- no publica precios ni criterios claros de selección.

**Qué tomar**

- explicar la infraestructura en una sola sección compacta y concreta.

### Enjoy Dental

Fuente: https://enjoydental.com.ar/

**Hace bien**

- comunica escala: seis consultorios y radiología;
- muestra un equipo amplio con especialidades;
- explica coberturas médicas;
- cubre intención generalista y urgencias.

**Hace mal**

- contenido duplicado dentro de la misma página;
- números de WhatsApp inconsistentes;
- propuesta de valor genérica;
- menor foco y autoridad específica en estética premium.

**Qué tomar**

- mostrar capacidad operativa, roles del equipo y qué se resuelve dentro de la clínica.

### OdontoSP

Fuente: https://odontosp.com.ar/

**Hace bien**

- mensaje simple y directo;
- profesional visible;
- testimonios y contacto inmediato.

**Hace mal**

- sitio anticuado;
- poca profundidad;
- afirmaciones genéricas;
- evidencia clínica y SEO limitados.

**Qué tomar**

- claridad: el usuario entiende en segundos quién atiende y cómo contactar.

### Estética Dental Madero

Fuente: https://www.esteticadentalmadero.com/

**Hace bien**

- antigüedad temática y cobertura de muchas búsquedas locales;
- ubicación Puerto Madero explícita;
- páginas por tratamiento;
- contacto visible.

**Hace mal**

- estética y lenguaje desactualizados;
- marcas y tratamientos presentados con tono promocional extremo;
- contenido repetitivo;
- errores de estilo y promesas poco calibradas.

**Qué tomar**

- reforzar señales locales de Puerto Madero y páginas específicas, sin copiar el tono comercial antiguo.

## AM frente a la competencia

### AM hace mejor

- documentación de casos clínicos;
- fotografía y presentación premium;
- autoridad del profesional;
- transparencia de precios en USD;
- contenido para intención de búsqueda;
- simulación y planificación digital;
- navegación entre casos, tratamientos y artículos;
- turismo dental;
- consistencia de marca.

### AM hace peor o puede mejorar

- repite demasiado “Forbes”, “única clínica” y otras fórmulas absolutas;
- mezcla 15+ y 20+ años en distintas páginas;
- algunas landings parecen micrositios independientes;
- falta información operativa concreta sobre capacidad del equipo;
- el simulador necesita mayor transparencia de privacidad;
- hay demasiadas páginas próximas sobre carillas;
- algunos artículos tienen muchas impresiones y CTR muy bajo;
- The Dental Review aún no existe públicamente.

## Estrategia Forbes y The Dental Review

Artículo original de Forbes:

https://www.forbesargentina.com/innovacion/del-1-10-que-tan-linda-tu-sonrisa-ia-te-lo-dira-segundos-n51306

La nota fue publicada el 20 de abril de 2024. No conviene copiarla ni parafrasearla extensamente.

Se preparó un artículo original:

`/casos/inteligencia-artificial-diseno-sonrisa-limites-clinicos`

Enfoque:

- qué cambió entre 2024 y 2026;
- usos reales de IA;
- límites del diagnóstico por imagen;
- riesgo de sonrisas estandarizadas;
- proceso responsable desde simulación a tratamiento;
- enlace a Forbes como antecedente;
- enlace contextual a la página de diseño de sonrisa de AM;
- declaración de relación editorial y revisión clínica.

### Verdad incómoda sobre el backlink

The Dental Review es un activo controlado por el mismo propietario. Ese backlink puede ayudar a descubrimiento, contexto semántico y construcción de entidad, pero no equivale a una recomendación independiente.

Para que gane valor real necesita:

1. dominio y DNS activos;
2. identidad editorial transparente;
3. autores y revisores identificados;
4. artículos sobre otros profesionales e instituciones;
5. política editorial;
6. fuentes externas;
7. tráfico y enlaces propios;
8. publicación sostenida.

## Plan priorizado

### Próximos 7 días

1. Publicar las correcciones de seguridad.
2. Activar DNS y deploy de The Dental Review.
3. Publicar el artículo de IA.
4. Configurar rate limit durable para `/api/smile-design/enhance`.

### Próximos 30 días

1. Test de metatítulo y descripción en la página de precio de carillas.
2. Consolidar contenidos que compiten por la misma consulta.
3. Unificar 15+ vs 20+ años con una única fuente factual.
4. Reducir afirmaciones absolutas sobre Forbes.
5. Añadir fecha, autor y revisión clínica a las páginas informativas.
6. Crear contenido editorial externo que no trate exclusivamente sobre AM.

### Próximos 90 días

1. Conseguir menciones independientes en medios, universidades, asociaciones o proveedores.
2. Publicar estudios de caso con metodología y seguimiento.
3. Medir conversiones por landing, no solo clics a WhatsApp globales.
4. Comparar CTR y posición antes/después de cada cambio.

## Fuentes públicas consultadas

- AM Estética Dental: https://www.amesteticadental.com/
- Forbes Argentina: https://www.forbesargentina.com/innovacion/del-1-10-que-tan-linda-tu-sonrisa-ia-te-lo-dira-segundos-n51306
- Grupo Río Dental Studio: https://www.riodontologia.com.ar/
- Enjoy Dental: https://enjoydental.com.ar/
- OdontoSP: https://odontosp.com.ar/
- Estética Dental Madero: https://www.esteticadentalmadero.com/
