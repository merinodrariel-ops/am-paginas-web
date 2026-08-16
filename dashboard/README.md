# Dashboard AM

Un solo panel con lo que pasa en las webs: Google Ads, Search Console, GA4,
velocidad real y los leads de Supabase — más un diagnóstico que cruza todo eso
y dice qué mirar.

```bash
node dashboard/server.mjs
```

→ http://localhost:4321

Corre **sólo en tu máquina** (escucha en `127.0.0.1`). Las credenciales de Ads y
la service role key de Supabase nunca salen del servidor local, y la lista de
leads viaja al navegador con los nombres abreviados y sin mail ni teléfono.

## De dónde saca los datos

No hay que configurar nada nuevo: lee los archivos que ya existen.

| Fuente | Archivo | Qué trae |
|---|---|---|
| Google Ads | `../.env.ads` | Costo, clicks, conversiones, CPA por campaña; términos de búsqueda |
| Search Console | `../.env.ads` (mismo OAuth) | Clicks, impresiones, CTR, posición, queries y páginas |
| GA4 | `../.env.ads` (mismo OAuth) | Sesiones, usuarios, canales |
| Supabase | `../amesteticadental/.env.local` | Leads del formulario |
| Core Web Vitals | API pública | LCP, INP, CLS de usuarios reales (CrUX) |

Overrides opcionales en `dashboard/.env`:

```
DASHBOARD_PORT=4321
GSC_DEFAULT_SITE=sc-domain:amesteticadental.com
SITE_ORIGIN=https://www.amesteticadental.com
GA4_PROPERTY_ID=123456789      # si no, se autodescubre
PAGESPEED_API_KEY=...          # sin key la cuota anónima se agota rápido
```

## Antes de la primera corrida: reconectar Google

El refresh token que hay en `.env.ads` está vencido (`invalid_grant`), así que
Ads, Search Console y GA4 no responden. Además hacía falta sumar el permiso de
lectura de GA4, que antes no estaba pedido.

Una sola reautorización arregla las tres cosas:

```bash
node renovar-token-google.mjs
```

Se abre el navegador, autorizás con la cuenta de Google que tiene acceso a Ads +
Search Console + Analytics, y el script reescribe el `GOOGLE_ADS_REFRESH_TOKEN`
en `.env.ads`. Después arrancá el dashboard de nuevo.

Los scripts que ya existían (`ads.mjs`, `gsc.mjs`, `gsc-analisis.mjs`) también
quedan andando otra vez con ese mismo token.

Si una fuente falla, el dashboard no se cae: muestra el aviso arriba, marca el
diagnóstico como incompleto y sigue con el resto.

## Cómo lee las fechas

Google Ads publica hasta ayer; Search Console tarda ~3 días. Por eso las
ventanas no son iguales:

- **Ads, leads, GA4** → los últimos N días terminando ayer.
- **Search Console** → los últimos N días terminando hace 3 días.

El gráfico de clicks por día usa la **intersección** de las dos, para que el
orgánico no parezca desplomarse sólo porque Google todavía no publicó esos días.
Cada bloque muestra sus fechas reales en el encabezado.

## El diagnóstico

Las reglas viven en `lib/insights.mjs`, una función cada una. Hoy detecta:

- Campañas activas que gastan y no convierten.
- Inversión que sube mientras las conversiones bajan.
- **Canibalización**: términos que pagás y donde ya salís top 3 orgánico.
- CPA muy por encima del promedio de la cuenta.
- Términos de búsqueda caros sin conversión (candidatos a negativa).
- Páginas con muchas impresiones y CTR muy por debajo del promedio.
- Tasa de visita → lead por debajo del 1%.
- Core Web Vitals en rojo con datos de usuarios reales.
- Keywords en posiciones 8–20 (el SEO más barato que hay).
- Caídas fuertes contra el período anterior en leads, orgánico y conversiones.

Para agregar una: escribí la función, devolvé un array de
`{ severidad, titulo, detalle, accion, evidencia }` y sumala a la lista `reglas`.
Las severidades son `critico`, `serio`, `alerta`, `oportunidad`, `bien`.

## Ver cómo queda lleno sin conectar nada

```bash
DASHBOARD_MOCK=/ruta/a/panel.json node dashboard/server.mjs
```

Sirve ese JSON tal cual en `/api/panel`. Útil para trabajar la UI o mostrar el
dashboard sin depender de las APIs.

## Estructura

```
dashboard/
  server.mjs          servidor HTTP + endpoints JSON (cero dependencias)
  lib/env.mjs         lee los .env que ya existen en el proyecto
  lib/google.mjs      OAuth, Google Ads, Search Console, GA4
  lib/supabase.mjs    leads (agregados + versión reducida sin datos de contacto)
  lib/psi.mjs         Core Web Vitals reales, cacheados 6 horas
  lib/insights.mjs    el motor de diagnóstico
  public/             la página: index.html, styles.css, app.js
```

Sin `npm install`, sin build, sin `node_modules`. Los gráficos son SVG a mano y
la paleta está validada para daltonismo y contraste en modo claro y oscuro.

## Si algún día lo querés online

Es un servidor Node común: se puede poner detrás de Vercel o un VPS. Antes de
hacerlo hay que agregarle autenticación — hoy no tiene ninguna, porque no la
necesita escuchando sólo en loopback.
