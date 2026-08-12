# Lanzamiento AM Estética Dental Uruguay

La web ya utiliza el dominio canónico `https://www.amesteticadental.uy`. El dominio raíz redirige a `www` en Vercel. No crear variantes de URL, propiedades de Search Console ni perfiles con el dominio sin `www` como sitio público.

## Vercel y captación

Configurar en el proyecto Vercel `amesteticadental-uy`, para los entornos Production y Preview cuando corresponda:

- `BREVO_API_KEY`: API key de Brevo con permiso para contactos y envío transaccional.
- `BREVO_LIST_ID`: identificador numérico de la lista exclusiva `AM Uruguay - Lista de Espera`.
- `NEXT_PUBLIC_GTM_ID`: identificador del contenedor GTM exclusivo de Uruguay, por ejemplo `GTM-XXXXXXX`.

No se debe publicar la lista de Brevo ni el ID de un contenedor compartido con Argentina. Uruguay necesita su propio origen de conversiones y audiencias.

En GTM crear eventos/conversiones sobre los eventos ya emitidos por la web:

| Evento | Conversión |
| --- | --- |
| `uy_waitlist_submit` | Lead de lista de espera |
| `uy_waitlist_cta_click` | Intención de lead |
| `uy_whatsapp_click` | Inicio de conversación |
| `uy_location_whatsapp_click` | Contacto desde ubicación |
| `uy_case_to_ar_click` | Consulta de antecedente clínico |

Crear una propiedad GA4 y, cuando haya pauta, una cuenta o conversión separada de Google Ads para Uruguay. No mezclar esos leads con Argentina: se pierde atribución, presupuesto y lectura comercial.

## Google y Bing

1. En Search Console conservar la propiedad de dominio `amesteticadental.uy` ya validada por DNS.
2. Enviar `https://www.amesteticadental.uy/sitemap.xml`.
3. Añadir el sitio en Bing Webmaster Tools y enviar el mismo sitemap.
4. Crear Google Business Profile desde `amesteticadentaluruguay@gmail.com`, con esa cuenta como propietaria principal; agregar el Gmail personal del Dr. Merino como propietario adicional.
5. Nombre: `AM Estética Dental`. Dirección: `Miraflores 1445, Oficina 202, Montevideo`. Indicar apertura futura hasta que el espacio esté realmente operativo.
6. Subir exclusivamente fotos reales de obra/espacio y renders identificados como render. Nunca usar fotos de Puerto Madero para presentar la sede como si fueran Uruguay.
7. Crear Bing Places con el mismo nombre, dirección, teléfono local cuando exista y URL pública `https://www.amesteticadental.uy`.

## Autoridad y contenido

- Los casos uruguayos enlazan a la documentación clínica original en Buenos Aires y declaran su procedencia. Mantener esa transparencia.
- Hacer enlaces cruzados sólo cuando explican una relación real: perfil del Dr. Merino, archivo de casos, expansión de la marca y notas de prensa.
- Conseguir enlaces locales reales: arquitecto del proyecto, proveedores, medios de Montevideo/Carrasco, sociedades profesionales y cobertura editorial del lanzamiento.
- Publicar avances con material propio: inicio de obra, decisiones de diseño, equipamiento, final de obra y fecha de apertura. Cada publicación debe aportar información nueva, no sólo cambiar Buenos Aires por Montevideo.

## Antes de abrir agenda

- Confirmar habilitación sanitaria, permisos del edificio y datos societarios con asesoría uruguaya.
- Definir teléfono/WhatsApp local y reemplazar el CTA provisorio de Argentina.
- Confirmar horarios, profesional responsable local, métodos de pago y política de consultas.
- Cargar fotos finales de la sede en Cloudinary bajo `am/uy/clinica/`; los renders van en `am/uy/renders/` y las fotos de obra en `am/uy/obra/`.
