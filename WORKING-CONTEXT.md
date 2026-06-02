# Working Context — AM Estética Dental

Última actualización: 2026-06-02

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

Las siguientes páginas han sido creadas o modificadas sustancialmente y requieren solicitar indexación manual en Google Search Console una vez realizado el deploy a producción:

- [ ] `/equipo-am` (Modificada: incorporación de Dra. Emily Lugo, promoción de Dra. Claudia Hernández y rediseño de tarjetas visuales).
- [x] `/precio-carillas-dentales-buenos-aires` (Indexación solicitada en la tanda anterior).

*Para procesar esta cola:* Ejecutar `node gsc.mjs indexar` tras el deploy exitoso a Vercel.

---

## Sprint Actual e Historial Reciente de Modificaciones

### Completado con éxito en esta sesión:
1. **Rediseño e Integración Visual en `/equipo-am`:**
   * Se promovió jerárquicamente a **Dra. Claudia Hernández** al sector clínico (odontóloga), agregando su rol oficial a cargo de la dirección del consultorio, administración y logística.
   * Se integró a **Dra. Emily Lugo** como odontóloga estética, geolocalizada en el consultorio de Puerto Madero, con su información verificada al 100% desde la base de datos de administración clínica de Supabase en `am-clinica-main`.
   * Se eliminaron los datos de contacto personal de los integrantes para proteger la privacidad comercial.
   * Se reestructuró la página en una cuadrícula premium de 4 columnas para el staff de asistencia y soporte administrativo.
   * Se refinó la estética con efectos de hover premium, tarjetas de vidrio (glassmorphic layouts) y CTAs inteligentes vinculados a WhatsApp con textos pre-rellenados y contextuales para cada tratamiento.
2. **Refinamiento del Logotipo de Forbes:**
   * Se resolvió el error de visualización del recuadro blanco del logo de Forbes.
   * Se inyectó un canal alfa de transparencia `tRNS` mediante un script Node personalizado para asegurar que el logotipo sea 100% transparente y se integre perfectamente con la tipografía y fondo en modo oscuro.

### Tareas en Progreso:
- [x] Instalar el arnés de autogobierno inspirado en ECC (Creación de `SOUL.md` y `WORKING-CONTEXT.md` para guiar futuros agentes).
- [x] Desplegar a Vercel producción (Completado con éxito mediante Vercel CLI y optimización de `.vercelignore`).
- [ ] Ejecutar el indexador de GSC (`node gsc.mjs indexar`) -> Pendiente de que el usuario ejecute `node get-token-gsc.mjs` para renovar el token de acceso vencido.


---

## Notas de Ejecución (Sesión del 02-06-2026)
*   Se detectó que el repo `affaan-m/ECC` basa su éxito en la inmutabilidad y la persistencia de la memoria. La adición de `SOUL.md` y `WORKING-CONTEXT.md` reduce a cero el tiempo de inducción del agente en turnos futuros.
*   Se mantendrán ambos archivos actualizados al final de cada turno de desarrollo para que el siguiente agente tome el relevo de forma inmediata y sin pérdida de contexto.
