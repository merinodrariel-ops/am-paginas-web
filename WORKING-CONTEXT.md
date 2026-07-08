# Working Context — AM Estética Dental

Última actualización: 2026-07-08

## Propósito

Este archivo sirve como la **Memoria de Sesión Operativa** de los agentes en el monorepo `am-paginas-web`. Registra el estado de producción en Vercel, las campañas de Google Ads activas, las tareas pendientes de indexación en Google Search Console y las notas del sprint actual para evitar regresiones o pérdida de contexto entre invocaciones consecutivas.

---

## Estado Operativo Actual (Current Truth)

- **Rama principal:** `main` (despliegue automático a Vercel tras cada `git push`).
- **Sitio de producción principal:** [amesteticadental.com](https://www.amesteticadental.com)
- **Base de datos clínica oficial:** Supabase (`am-clinica-main`), utilizada para validar credenciales, ortografía y roles de los prestadores.
- **Canal de captación primario (CTA):** Enlaces dinámicos a WhatsApp (`https://api.whatsapp.com/send?phone=5491170219298`) con textos pre-rellenados específicos según el tratamiento o página.
- **Estado del árbol de git:** Limpio, listo para consolidar el arnés ECC.

---

## Campañas de Google Ads Activas (Mayo/Junio 2026)

| Campaña | Presupuesto Diario | Landing Page Principal | Estado |
|---|---|---|---|
| **Carillas Dentales** | ARS 9.000 / día | `/precio-carillas-dentales-buenos-aires` | Activa |
| **Implantes Dentales** | ARS 6.000 / día | `/implantes-dentales-buenos-aires` | Activa |
| **Diseño de Sonrisa** | ARS 5.000 / día | `/diseno-de-sonrisa-precio-buenos-aires` | Activa |

---

## Cola de Indexación (Google Search Console)

Las siguientes páginas han sido creadas o modificadas sustancialmente y requieren solicitar indexación manual en Google Search Console una vez realizado el deploy a producción y renovado el token:

- [ ] `/equipo-am` (Modificada: incorporación de Dra. Emily Lugo, promoción de Dra. Claudia Hernández y rediseño de tarjetas visuales).
- [ ] `/clinica` (Modificada: agregada a sitemap, galería interactiva con lightbox y almacenamiento optimizado en Cloudinary).
- [ ] Todas las landings optimizadas por SEO (Ajuste de títulos y meta descripciones en `/`, `/casos`, `/dr-ariel-merino`, `/clinica`, `/carillas-dentales`, `/alineadores-invisibles`, `/diseno-de-sonrisa`, `/antes-y-despues`, `/turismo-dental`, `/implantes-dentales-buenos-aires`, `/diseno-de-sonrisa-precio-buenos-aires`, `/blanqueamiento-dental-precio-buenos-aires`, `/odontologia-estetica-buenos-aires`).
- [ ] Todos los casos clínicos optimizados en `/casos/[slug]`.
- [x] `/precio-carillas-dentales-buenos-aires` (Indexación solicitada en la tanda anterior).
- [ ] `/dentista-puerto-madero` (NUEVA landing local SEO — sesión 08-07-2026).
- [ ] `/blog/cuanto-cuestan-las-carillas-dentales-en-argentina` (NUEVO artículo de precios — sesión 08-07-2026).
- [ ] `/blog/cuanto-cuesta-un-implante-dental-en-argentina` (NUEVO artículo de precios — sesión 08-07-2026).
- [ ] Re-solicitar indexación de páginas con precios actualizados (`/precio-carillas-*`, `/precio-implantes-*`, `/diseno-de-sonrisa-precio-*`, `/lentes-de-contacto-dental-precio-*`, `/dientes-de-porcelana-carillas-precio`, `/coronas-y-fundas-dentales`, `/implantes-dentales-buenos-aires`).

*Para procesar esta cola:* Ejecutar `node gsc.mjs indexar` tras el deploy exitoso a Vercel y la renovación del token de GSC.

---

## Sprint Actual e Historial Reciente de Modificaciones

### Completado con éxito en esta sesión:
1. **Puesta en valor de la Clínica y Tecnología de Puerto Madero (Oficina 101)**:
   * **Curaduría y Optimización de Fotos**: Filtramos las 13 fotos del consultorio localizadas en `D:\FOTOS\` para seleccionar las 8 mejores y más distintivas (3 exteriores, 5 interiores) eliminando tomas muy parecidas.
   * **Integración con Cloudinary**: Escribimos y ejecutamos el script `upload-clinica-cloudinary.mjs` para subir de forma optimizada las fotos al bucket oficial (`drctvgyqd`) en el folder `clinica/`.
   * **Galería Interactiva con Lightbox**: Diseñamos el componente de cliente `ClinicaGallery.tsx` con un visor lightbox a pantalla completa y soporte de navegación por teclado y mouse para las instalaciones.
   * **CTAs Protagónicos**: Agregamos botones llamativos en la homepage (`Clinica.tsx`, `Features.tsx`) y una píldora directa en `FEATURED_LINKS` de `Navbar.tsx` para guiar a los visitantes de forma preferente hacia `/clinica`.
   * **SEO y Sitemap**: Agregamos la ruta `/clinica` al archivo `sitemap.ts` con prioridad de `0.9`.
2. **Rediseño e Integración Visual en `/equipo-am`:**
   * Se promovió jerárquicamente a **Dra. Claudia Hernández** al sector clínico (odontóloga), agregando su rol oficial a cargo de la dirección del consultorio, administración y logística.
   * Se integró a **Dra. Emily Lugo** como odontóloga estética, geolocalizada en el consultorio de Puerto Madero, con su información verificada al 100% desde la base de datos de administración clínica de Supabase en `am-clinica-main`.
   * Se eliminaron los datos de contacto personal de los integrantes para proteger la privacidad comercial.
   * Se reestructuró la página en una cuadrícula premium de 4 columnas para el staff de asistencia y soporte administrativo.
   * Se refinó la estética con efectos de hover premium, tarjetas de vidrio (glassmorphic layouts) y CTAs inteligentes vinculados a WhatsApp con textos pre-rellenados y contextuales para cada tratamiento.
3. **Refinamiento del Logotipo de Forbes:**
   * Se resolvió el error de visualización del recuadro blanco del logo de Forbes.
   * Se inyectó un canal alfa de transparencia `tRNS` mediante un script Node personalizado para asegurar que el logotipo sea 100% transparente y se integre perfectamente con la tipografía y fondo en modo oscuro.
4. **Optimización SEO y Enlaces Internos (Ahrefs Site Audit):**
   * Se redujo la longitud de todos los metatítulos y meta descripciones de las 13 páginas de destino principales y los 8 casos clínicos publicados para alinearse a las recomendaciones óptimas (Titles < 60-65 chars, Descriptions < 150-160 chars).
   * Se implementaron los campos `seoTitle` y `seoDescription` en la base de datos de casos para mantener el H1 narrativo en la web y servir metadatos limpios y breves a Google.
   * Se corrigió la redirección interna (HTTP 308) en la cuadrícula de la página `/precio-carillas-dentales-buenos-aires` cambiando el enlace a `/casos/[slug]` en lugar de `/antes-y-despues/[slug]`.

### Tareas en Progreso:
- [x] Instalar el arnés de autogobierno inspirado en ECC (Creación de `SOUL.md` y `WORKING-CONTEXT.md` para guiar futuros agentes).
- [x] Desplegar a Vercel producción (Completado con éxito y subido a Git).
- [ ] Ejecutar el indexador de GSC (`node gsc.mjs indexar`) -> Pendiente de que el usuario ejecute `node get-token-gsc.mjs` para renovar el token de acceso vencido.


---

## Notas de Ejecución (Sesión del 02-06-2026)
*   Se detectó que el repo `affaan-m/ECC` basa su éxito en la inmutabilidad y la persistencia de la memoria. La adición de `SOUL.md` y `WORKING-CONTEXT.md` reduce a cero el tiempo de inducción del agente en turnos futuros.
*   Se mantendrán ambos archivos actualizados al final de cada turno de desarrollo para que el siguiente agente tome el relevo de forma inmediata y sin pérdida de contexto.

---

## Sesión del 08-07-2026 (precios 2026 + SEO local + flujo Vercel)

### REGLA OPERATIVA CRÍTICA (reforzada por el Dr. Merino)
- **NADA queda en local. Todo cambio se `commit` + `push origin main` en el momento.** El Dr. trabaja en varias computadoras con varios agentes; dejar cambios locales sin pushear hace que él crea que ya están aplicados y se acumulen errores/sobrescrituras entre máquinas.
- Antes de cerrar turno: `git status` limpio y `main` sincronizado con `origin/main`. Si el push es rechazado → `git fetch` + `git rebase origin/main` + `npm run build` + push. **Nunca terminar con commits sin pushear.**

### Cambios de precios aplicados (todos en producción, commit `c562010`)
- **Carillas cerámicas / lentes de contacto / carillas sin desgaste:** USD 900–1.200 → **USD 1.000–1.500 por pieza**.
- **Diseño de sonrisa en resina:** **desde USD 5.000**.
- **Diseño de sonrisa en cerámica (10 piezas):** **desde USD 10.000**.
- **Rehabilitación full cerámica** (toda la boca; casos complejos: bruxismo avanzado, maloclusión, malas posiciones, mucho desgaste, múltiples coronas/implantes; corrige y mejora la mordida): **desde USD 26.000** (algunos hasta 30k). Se agregó explicación + FAQ con schema en `/diseno-de-sonrisa-precio-buenos-aires`.
- **Implantes:** floor subido de USD 800 → **desde USD 1.200** (unitario con corona). PENDIENTE: definir precio premium distinto para corona de zirconio (hoy quedó también en "desde USD 1.200").
- **Coronas y fundas:** eran "Consultar precio" → ahora **desde USD 1.000/pieza** (son piezas cerámicas de laboratorio). Precio agregado en hero + FAQ + schema.
- Totales de paquetes recalculados en consecuencia (8-12 piezas, makeover, etc.).
- Casos clínicos históricos en `casos.ts` (totales de pacientes puntuales) se dejaron SIN cambiar a propósito (son registros reales, no lista de precios vigente).

### Páginas nuevas creadas (SEO local + AEO)
- `/dentista-puerto-madero` — landing local: hero con foto de clínica, diferenciales vs. competencia, precios visibles, Dr. Merino, galería, opiniones 4.9★, cómo llegar, FAQ + schema `Dentist` con geo.
- `/blog/cuanto-cuestan-las-carillas-dentales-en-argentina` y `/blog/cuanto-cuesta-un-implante-dental-en-argentina` — guías de precios apuntando a búsquedas "en Argentina" (dato de GSC: 84% de clics vienen de páginas de precios; "cuanto cuesta un implante dental en argentina 2026" en alza). Article + FAQPage schema, enlazado cruzado.
- Fix sitemap: agregadas `/antes-y-despues`, `/clinica` y blog de blanqueamiento (estaban huérfanas).

### Analítica / Tracking (estado real verificado)
- **Instalado en `main` (layout.tsx):** Google Tag Manager (`gtmId`) + Meta Pixel (`metaPixelId`) + **Plausible** (Script ID `pa-IVsi12we0zqH_TNpn9oAv`, commit `cdc0381`) + tracking de clicks de WhatsApp → dataLayer → GTM → conversión Google Ads.
- **Plausible:** instalado 2026-07-08, strategy `afterInteractive`, data-domain `amesteticadental.com`. Lee Script ID desde env var `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_ID`. Datos en tiempo real en https://plausible.io/sites/amesteticadental.com/dashboard. Verificar instalación en Settings → Verify installation.

### Competencia SEO local (recordatorio)
- Competidores directos "dentista Puerto Madero": esteticadentalmadero.com (sin precios/testimonios/FAQ) y dentaldique.com (solo español, sin blog). Estrategia AM: transparencia de precios + testimonios + diseño 3D + turismo dental bilingüe.
- PENDIENTE: sacar CPC exactos de Argentina y keyword-gap desde Ahrefs (la sesión de Ahrefs está en el perfil de Chrome del consultorio, no en el personal).
