# Indexación Automática en Google + Bing — Arquitectura Completa (2026-08-18)

**Audiencia:** Otros agentes (Claude, Codex, etc.) que publican contenido en la red AM.

---

## Resumen ejecutivo

A partir del **18 de agosto de 2026**, toda URL nueva publicada en cualquiera de los 4 sitios (amesteticadental.com, .uy, thedentalreview.com, arielmerino.com) se **indexa automáticamente en Google y Bing sin intervención manual**.

- ✅ **Google**: vía sitemap dinámico + Search Console
- ✅ **Bing/Yandex**: vía IndexNow (notificación automática en cada push)
- ✅ **Monitoreo**: verificación diaria que Google REALMENTE indexó; alertas si algo se atasca

---

## Cómo funciona

### Flujo automático (la mayoría de casos)

```
1. Publicas contenido (caso clínico, página, nota en TDR)
   ↓
2. Commit + push a main
   ↓
3. Vercel despliega (~2 min)
   ↓
4. GitHub Action "IndexNow" dispara automáticamente (150s después)
   ├─ Lee sitemap en vivo
   ├─ Notifica TODAS las URLs a Bing/Yandex
   └─ Log en GitHub Actions (se ve en repo)
   ↓
5. Google indexa vía sitemap dinámico
   ↓
6. Diariamente (08:00 ART): indexacion-watch.yml verifica que Google indexó
   ├─ Si algo está OK → silencio
   └─ Si algo lleva >5 días sin indexar → job falla + mail de alerta
```

### Flujo manual (si necesitás forzar ya)

Desde la carpeta del sitio:

```bash
# Notificar TODAS las URLs al sitemap
node scripts/notify-indexnow.mjs

# O solo URLs específicas
node scripts/notify-indexnow.mjs /casos/mi-caso /precio-carillas
```

---

## Datos técnicos

### IndexNow keys (API Bing Webmaster Tools)

| Sitio | Host | Key | Verificación |
|---|---|---|---|
| amesteticadental.com | www.amesteticadental.com | `14c96...2c` | `amesteticadental/public/14c96...2c.txt` |
| amesteticadental.uy | www.amesteticadental.uy | `14c96...2c` | `amesteticadental-uy/public/14c96...2c.txt` |
| **thedentalreview.com** | www.thedentalreview.com | `86346...e0` | `thedentalreview/public/86346...e0.txt` |
| arielmerino.com | www.arielmerino.com | `14c96...2c` | `arielmerino/public/14c96...2c.txt` |

**Nota**: La API key es **compartida** (una por cuenta Bing WT), pero cada dominio notifica con su propio `host` y archivo de verificación.

### Workflows de GitHub

| Workflow | Dispara | Hace |
|---|---|---|
| **`indexnow.yml`** | En cada push a main que toque páginas | Espera deploy (150s) → notifica todas las URLs a Bing |
| **`indexacion-watch.yml`** | Diariamente 08:00 ART (cron) | Pregunta a GSC si cada URL está indexada; repara si está atascada; falla si >5 días sin indexar |

---

## Qué verificar

### En Bing Webmaster Tools
https://www.bing.com/webmasters/

1. Selecciona cada sitio del dropdown
2. Ve a **IndexNow** en el menú
3. Deberías ver URLs enviadas en las últimas 24h
4. Si hay actividad post-push → está funcionando ✅

### En Google Search Console
https://search.google.com/search-console/

- `amesteticadental.com` está verificado (es la principal)
- Ve a **Performance** para ver indexación de nuevas URLs
- Espera ~24h después de publicar

### En GitHub Actions
https://github.com/merinodrariel-ops/am-paginas-web/actions

- Workflow `indexnow` → log de notificaciones a Bing
- Workflow `indexacion-watch` → log de verificación en GSC (ejecuta diario)

---

## Casos especiales

### Publicar un caso clínico en amesteticadental.com

```bash
cd amesteticadental

# 1. Agregar a casos.ts con publicado: true
# 2. Build
npm run build

# 3. Commit + push
git commit -m "feat: nuevo caso"
git push origin main

# 4. GitHub Action dispara automáticamente
# 5. El sitemap se actualiza → Bing notificado → Google indexa
# ✅ Listo. No necesitás hacer nada más.

# Opcional: acelerar Google
# cd ..
# node gsc.mjs indexar
```

### Publicar nota en The Dental Review

```bash
cd thedentalreview

# 1. Crear página en app/noticias/<slug>/page.tsx
# 2. Agregar a array ARTICULOS en app/page.tsx
# 3. Registrar en app/sitemap.ts
# 4. Build + push

npm run build
git commit -m "feat(tdr): nueva nota"
git push origin main

# GitHub Action dispara → IndexNow notifica → Bing indexa
# Google indexa vía sitemap dinámico
# ✅ Listo.
```

### Páginas de Uruguay (amesteticadental.uy)

Las páginas dinámicas se generan desde `app/site-data.ts` (no se crean archivos).

```bash
cd amesteticadental-uy

# 1. Agregar entrada a treatmentPages en app/site-data.ts
# 2. Build + push

npm run build
git commit -m "feat(uy): nueva página"
git push origin main

# GitHub Action dispara → IndexNow para .uy → Bing indexa
# Monitoreo diario verifica que Google indexe
# ✅ Automático.
```

---

## Alertas y troubleshooting

### "¿Cómo sé si la indexación funcionó?"

1. **Inmediato** (post-push): Mira el log del workflow `indexnow` en GitHub Actions
   - Si dice `✅ IndexNow aceptó las URLs` → Bing fue notificado
2. **Horas después**: Google Search Console → Inspección de URL → pega la URL nueva
   - Si dice "Indexada" → listo
3. **Diariamente** (08:00 ART): Workflow `indexacion-watch` verifica automáticamente

### "Una URL lleva 5+ días sin indexarse en Google"

El workflow `indexacion-watch` **fallará automáticamente** y GitHub mandará mail.

Acciones:
1. Ve a Google Search Console → Inspección de URL
2. Verifica: canonical, robots, noindex, fetch status
3. Si está bien: "Solicitar indexación" manual en GSC
4. Si sigue atascada después de otros 5 días → investigar problema técnico (redirect, 404, etc.)

### "Quiero notificar manualmente ahora (no esperar al workflow)"

```bash
cd <carpeta-del-sitio>
node scripts/notify-indexnow.mjs /ruta/nueva
```

---

## Documentación relacionada

- **AGENTS.md** (línea 236+): Flujo obligatorio completo
- **.github/workflows/indexnow.yml**: GitHub Action que notifica a Bing
- **.github/workflows/indexacion-watch.yml**: Monitoreo diario de indexación en Google
- **scripts/auditar-indexacion.mjs**: Script que verifica indexación real en GSC

---

## Cambios en Git (2026-08-18)

- Commit `00aaedb`: IndexNow setup para thedentalreview.com
- Commit `79a5128`: AGENTS.md actualizado con arquitectura completa
- Commit `9c7e533`: Publicadas 2 notas en TDR (ejemplo de flujo automático)

---

**Última actualización**: 2026-08-18  
**Responsable**: Claude Haiku 4.5  
**Estado**: Producción, automático, monitoreado
