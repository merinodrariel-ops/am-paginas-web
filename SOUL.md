# Soul — AM Estética Dental

## Core Identity

Este archivo define el **Alma Cognitiva e Instintos Técnicos** del agente de IA que opera en el ecosistema digital de **AM Estética Dental** (Dr. Ariel Merino · Puerto Madero · Forbes Argentina). Regula el comportamiento, la toma de decisiones y las prioridades de desarrollo en este monorepo.

---

## Principios Cognitivos e Instintos Irrompibles

Cualquier agente que opere en este espacio de trabajo debe asimilar y ejecutar estos seis principios como directrices absolutas de diseño e implementación:

### 1. Vercel-First (Despliegue Inmediato en Producción)
*   **Instinto:** El flujo de trabajo exige que todo cambio final se suba y verifique directamente en la versión en línea.
*   **Regla:** Queda **estrictamente prohibido** dejar cambios huérfanos a nivel local.
*   **Acción:** Una vez completada y probada localmente cualquier tarea, se debe realizar `git commit` y `git push origin main` para que Vercel realice el despliegue automático. El éxito solo se consolida cuando los resultados son visibles en producción.

### 2. Cloudinary-Only (Integridad de Activos Clínicos)
*   **Instinto:** Las imágenes clínicas de pacientes y casos de éxito representan la reputación premium de la clínica.
*   **Regla:** Todas las fotos de casos clínicos deben subirse y servirse desde Cloudinary.
*   **Parámetros:** Usar obligatoriamente la transformación `q_auto,f_auto` y rutas descriptivas y SEO-amigables (ej: `https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/...`).
*   **Excepción:** Las copias locales en `public/images/casos` quedan estrictamente como backup. La aplicación no debe referenciarlas directamente, salvo en situaciones excepcionales y justificadas. Antes de cambiar cualquier referencia, verificar que el recurso en Cloudinary responda con un estado HTTP `200`.

### 3. Supabase-First (Veracidad del Equipo Clínico)
*   **Instinto:** Los nombres, cargos, ortografía y roles del personal clínico deben estar 100% alineados con la administración interna de la clínica.
*   **Regla:** La base de datos Supabase ubicada en el proyecto hermano `am-clinica-main` es la única fuente de verdad oficial.
*   **Acción:** Antes de añadir, modificar o promover a cualquier integrante del equipo en `/equipo-am`, el agente debe consultar la tabla de prestadores en la base de datos Supabase de `am-clinica-main` para extraer los datos reales y oficiales (evitando información incompleta o inventada).

### 4. Tono Clínico Élite (Branding Premium)
*   **Instinto:** El Dr. Ariel Merino atiende a un perfil de paciente premium en Puerto Madero. El posicionamiento de marca debe ser impecable.
*   **Regla de Oro:** **NUNCA** mencionar "consulta sin costo", "evaluación gratuita", "primera consulta gratis" ni términos similares. Esto destruye el posicionamiento premium y devalúa la percepción del servicio.
*   **Moneda:** Todos los precios deben expresarse estrictamente en **USD** (dólares estadounidenses).
*   **Copywriting:** Tono clínico, profesional, científico, sofisticado e inspirador de confianza, sin caer en exageraciones comerciales o promesas absolutas de resultados.

### 5. SEO & AEO (Optimización para Buscadores y Motores de IA)
*   **Instinto:** Cada página debe estar diseñada no solo para indexadores de Google, sino para motores de respuesta de IA (AEO).
*   **Acción:** Después de cada despliegue que involucre páginas nuevas o modificadas de forma relevante, el agente debe ejecutar de inmediato el indexador de Google Search Console mediante el comando CLI:
    ```bash
    node gsc.mjs indexar
    ```
*   **Estructura:** Asegurar una única etiqueta `<h1>` por página, jerarquía semántica estricta (H2, H3), meta-descripciones atractivas y velocidad de carga excepcional.

### 6. Plan Before Execute (Planificación y Estética Visual)
*   **Instinto:** La estética de la interfaz debe dejar al usuario "impresionado a primera vista" (WOW effect), utilizando Tailwind v4, tipografías elegantes (Manrope, Cormorant Garamond) y la paleta de colores premium (Carbon `#141414`, Oro `#C9A96E`, Crema `#F5F0E8`).
*   **Acción:** Cualquier cambio visual, componente o flujo complejo debe ser planeado previamente. No se permiten diseños minimalistas mediocres o placeholders. Las imágenes requeridas deben ser generadas con `generate_image` para asegurar calidad premium desde el primer momento.

---

## Herramientas e Interfaces de Control

El agente tiene a su disposición las siguientes CLI del monorepo, las cuales debe utilizar activamente para diagnosticar y ejecutar tareas:

```bash
# Sincronización e Indexación GSC
node gsc.mjs indexar     # Solicita indexación de páginas modificadas o nuevas
node gsc.mjs estado      # Diagnostica el estado de indexación del sitio completo
node gsc-analisis.mjs    # Analiza el rendimiento orgánico del sitio

# Gestión de Campañas de Google Ads (Presupuestos diarios en ARS)
node ads.mjs listar                              # Lista todas las campañas y su presupuesto actual
node ads.mjs activar "Carillas Dentales"          # Activa una campaña específica
node ads.mjs pausar "Implantes Dentales"          # Pausa una campaña específica
node ads.mjs presupuesto "Carillas Dentales" 9000 # Configura presupuesto diario (ARS 9.000)
node ads.mjs diagnosticar                        # Verifica la salud de la configuración de Ads
```
