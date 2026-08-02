# amesteticadental.com.uy

Sede de **AM Estética Dental en Uruguay** — Carrasco, Montevideo.

## Qué es

Una landing de lanzamiento: "Próximamente en Carrasco" + captura de emails para lista de espera (`app/api/subscribe`, formulario en `app/LeadForm.tsx`).

Es la puerta de entrada al mercado uruguayo mientras la sede no abre.

## ⚠️ Está construido pero no publicado

La landing funciona, pero el dominio `amesteticadental.com.uy` **no resuelve** — no está configurado en DNS. Es trabajo terminado que hoy nadie puede ver, y los emails que debería estar capturando no se están capturando.

Destrabarlo no es programar: es configurar el dominio y apuntarlo a Vercel. Probablemente sea la mejora de mejor relación esfuerzo/resultado de todo el monorepo.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Las reglas de copy de la marca están en el `AGENTS.md` de la raíz del monorepo y aplican también acá.
