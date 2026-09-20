# Setup: Google Search Console en el CI

## Por qué

El flujo automático de indexación (`indexacion-watch.yml`) necesita credenciales para:
1. Consultar si cada URL está indexada (URL Inspection API)
2. Reenviar sitemaps a Google (Sitemaps API)
3. Avisar cuando algo está atascado

Sin esto, el workflow falla con _"Faltan las credenciales de Search Console"_.

## Paso a paso (5 min)

### 1. Generar el token en tu máquina

```bash
cd /Users/minimacm4/Documents/IA/AM\ paginas\ webs\ Gasds
node get-token-gsc.mjs
```

**Qué pasa:**
- Se abre el navegador con un login de Google
- **Logueate con la cuenta que administra Search Console** (la que tiene verificados `amesteticadental.com` y `amesteticadental.uy`)
- Se crea automáticamente `.env.gsc` en la raíz del repo (gitignoreado)

El archivo contiene 3 valores:
```
GOOGLE_SEARCH_CONSOLE_CLIENT_ID=...
GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET=...
GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN=...
```

**Nota:** si el navegador no se abre, copia la URL que aparece en la terminal.

### 2. Cargar los valores en GitHub

En https://github.com/merinodrariel-ops/am-paginas-web/settings/secrets/actions

Crea 3 secretos:

| Nombre | Valor |
|--------|-------|
| `GOOGLE_SEARCH_CONSOLE_CLIENT_ID` | Copia de `.env.gsc`, línea 1 |
| `GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET` | Copia de `.env.gsc`, línea 2 |
| `GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN` | Copia de `.env.gsc`, línea 3 |

**Cómo copiar sin errores:**
```bash
cat .env.gsc
```
Copias el valor tal cual (sin comillas ni `NOMBRE=`).

### 3. Verificar

En https://github.com/merinodrariel-ops/am-paginas-web/actions

Buscá **"Indexación — vigilancia diaria"** y presioná **"Run workflow"** (manual trigger).

Debería terminar en verde. Si falla, el error dice exactamente qué falta.

## ⚠️ El token se muere cada 7 días — y por qué

**Esto no es una hipótesis: al 20-09-2026 la vigilancia diaria lleva 34 corridas
de 34 en rojo, todas por lo mismo. Nunca funcionó un solo día.**

La causa no es el token: es el **estado de la app de OAuth** en Google Cloud
Console. Mientras la pantalla de consentimiento esté en **"Testing"**, Google
caduca todos los refresh tokens **a los 7 días**, sin aviso y sin excepción. Es
una política de Google, no un bug del repo.

Por eso regenerar el token **no arregla nada**: vuelve a morirse el viernes
siguiente. Hay que publicar la app **primero**, y recién después generar el token.

### El arreglo, una sola vez (5 minutos)

1. Entrar a https://console.cloud.google.com/apis/credentials/consent
2. Elegir arriba el proyecto donde están las credenciales de Search Console.
3. En **Audience** (antes "Publishing status"), el estado dirá **Testing**.
4. Botón **PUBLISH APP** → **Confirm**.
   - Google puede mostrar un cartel de verificación. **No hace falta verificar
     nada**: la app es de uso propio y sólo pide scopes de Search Console. El
     estado pasa a "In production" igual, y con eso alcanza.
5. Recién ahora, en la máquina del Dr.:
   ```bash
   node get-token-gsc.mjs
   ```
6. Cargar los tres valores nuevos de `.env.gsc` en los secretos de GitHub
   (ver el paso 2 de arriba).

Desde ahí el refresh token dura de forma indefinida: sólo se invalida si se
revoca el acceso a mano, si se cambia la contraseña de la cuenta, o si pasan
6 meses sin usarlo (y acá se usa todos los días).

## Los dos errores y qué significa cada uno

Son distintos y se arreglan distinto. Confundirlos hace perder horas:

| Error | Qué pasó | Arreglo |
|---|---|---|
| `invalid_grant` | El token caducó (app en Testing). | Publicar la app y regenerar. |
| `invalid_client: The OAuth client was not found` | El **client_id ya no existe** en Google Cloud: alguien borró esa credencial, o el secreto de GitHub quedó de un proyecto viejo. Regenerar el token no sirve — no hay contra qué autenticar. | Crear una credencial OAuth nueva (Desktop app), correr `get-token-gsc.mjs`, y reemplazar **los tres** secretos de GitHub. |

Al 20-09-2026 conviven los dos: `.env.gsc` local da `invalid_grant` (el cliente
existe, el token venció) y los secretos de GitHub dan `invalid_client` (el
cliente de esos secretos ya no existe). O sea: publicar la app arregla lo local,
pero el CI además necesita secretos nuevos.

## Qué ves después

Una vez que esté andando, cada día a las 08:00 ART (cuando corre el cron):

- **Verde:** todas las URLs indexadas, o recién publicadas (sin alarma)
- **Naranja** (warning): algunas URLs sin indexar hace poco; se sigue observando
- **Rojo** (failure): algo lleva 5+ días atascado — hay un email de GitHub. El reporte dice si es arreglable en código o si toca esperar/enlaces

El archivo `.infra/estado-indexacion.json` guarda desde cuándo está atascada cada URL (va en caché, no en el repo).

## Troubleshooting

| Síntoma | Solución |
|---------|----------|
| `invalid_grant` | El refresh token venció porque la app sigue en Testing. **Publicar la app primero** (ver arriba) y recién ahí regenerar: si no, se muere de nuevo en 7 días. |
| `invalid_client` | El client_id de los secretos ya no existe en Google Cloud. Hay que crear una credencial nueva, no regenerar el token. |
| `No se pudo leer la lista de propiedades (HTTP 403)` | Los secretos se cargaron mal en GitHub. Verificá que sean exactamente los valores de `.env.gsc`. |
| Workflow salta sin hacer nada | Los secretos faltan. Cargalos en Settings → Secrets and variables → Actions. |
