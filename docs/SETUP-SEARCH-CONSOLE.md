# Setup: Google Search Console en el CI

## Por qué

El flujo automático de indexación necesita credenciales para:

1. Consultar si cada URL está indexada (URL Inspection API)
2. Reenviar sitemaps a Google (Sitemaps API)
3. Pedir indexación de páginas nuevas (Indexing API)

## La credencial es una cuenta de servicio (desde 2026-09-20)

**No se usan más los refresh tokens de usuario.** La historia de por qué importa:

Durante meses la indexación en Google se rompió una y otra vez con `invalid_grant`.
La causa no era que alguien se olvidara de renovar nada: **los refresh tokens de Google
caducan a los 7 días mientras la app de OAuth está en estado "Testing"**. Cada vez que
se "arreglaba" regenerando el token, el token nuevo se moría a la semana siguiente.
El resultado real: `indexacion-watch.yml` acumuló 34 corridas en rojo de 34 desde su
creación, sin vigilar nada un solo día.

La otra salida —publicar la app OAuth— exigía redactar y publicar una política de
privacidad en el sitio y convivir con la pantalla de "app no verificada". Para un
proceso que corre solo, de noche, sin nadie delante, la credencial correcta nunca fue
la de un usuario: es una **cuenta de servicio**, que no caduca, no pide consentimiento
y no expone nada públicamente.

| | Refresh token (viejo) | Cuenta de servicio (actual) |
|---|---|---|
| Vencimiento | 7 días en "Testing" | No vence |
| Pantalla de consentimiento | Sí | No |
| Política de privacidad pública | Requerida para publicar | No hace falta |
| Atado a una persona | Sí | No |

## La cuenta

```
indexacion-red-am@am-ads-494903.iam.gserviceaccount.com
```

Vive en el proyecto **AM ADS** (`am-ads-494903`). No tiene ningún rol de IAM en el
proyecto y no lo necesita: los permisos que importan se otorgan **dentro de Search
Console**, agregando esa dirección como usuaria de cada propiedad.

## Permisos en Search Console

En cada propiedad → Configuración → Usuarios y permisos → Agregar usuario:

| Propiedad | Permiso necesario |
|---|---|
| amesteticadental.com | Propietario |
| amesteticadental.uy | Propietario |
| thedentalreview.com | Propietario |
| arielmerino.com | Propietario |

**Por qué "Propietario" y no "Completo":** la Indexing API exige nivel de propietario.
Los sitemaps se conformarían con "Completo", pero si se carga distinto en cada
propiedad, después nadie se acuerda de cuál es cuál.

## Dónde vive la clave

**En tu máquina:** `.gsc-service-account.json` en la raíz del repo. Está gitignoreado
y debe tener permisos `0600`. Nunca se commitea.

```bash
chmod 600 .gsc-service-account.json
```

**En GitHub Actions:** un único secreto, `GOOGLE_SERVICE_ACCOUNT_JSON`, con el
contenido completo del archivo JSON. Se carga en
https://github.com/merinodrariel-ops/am-paginas-web/settings/secrets/actions

Reemplaza a los tres secretos viejos (`GOOGLE_SEARCH_CONSOLE_CLIENT_ID`, `_SECRET`,
`_REFRESH_TOKEN`), que pueden borrarse una vez que el workflow corra en verde.

## Cómo se usa desde el código

Todo pasa por `scripts/google-auth.mjs`, que busca la credencial en este orden:

1. `GOOGLE_SERVICE_ACCOUNT_JSON` (el JSON entero, así viaja en el CI)
2. `GOOGLE_APPLICATION_CREDENTIALS` (ruta a un archivo)
3. `.gsc-service-account.json` en la raíz del repo

Si no encuentra ninguna, cae al método viejo de refresh token — sólo como red durante
la transición. Los scripts que lo usan: `gsc.mjs`, `gsc-analisis.mjs`,
`gsc-indexar-faltantes.mjs`, `scripts/submit-google-sitemaps.mjs`,
`scripts/indexar-red.mjs`, `scripts/auditar-indexacion.mjs`.

## Verificar que anda

```bash
node scripts/verificar-credenciales-google.mjs
```

Dice qué credencial encontró, si autentica y qué propiedades ve. Si una propiedad no
aparece, es que a la cuenta de servicio le falta el alta en Search Console.

Después, la prueba de fuego:

```bash
node gsc.mjs indexar /blog/mi-nota
```

## Rotar la clave

Si alguna vez se filtra (o por higiene periódica):

1. Google Cloud Console → IAM → Cuentas de servicio → Indexacion Red AM → Claves
2. Crear clave nueva (JSON), guardarla como `.gsc-service-account.json`
3. Actualizar el secreto `GOOGLE_SERVICE_ACCOUNT_JSON` en GitHub
4. Recién entonces, **borrar la clave vieja** desde esa misma pantalla

Google deshabilita automáticamente las claves que detecta en repositorios públicos.
Este repo es público: por eso el `.gitignore` y el `chmod 600` no son opcionales.
