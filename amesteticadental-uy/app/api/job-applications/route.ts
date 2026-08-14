import { NextResponse } from "next/server";
import { ARGENTINA_URL, SITE_URL } from "../../site-data";

/**
 * Puente de postulaciones: el navegador postea acá, este servidor reenvía a Argentina.
 *
 * Por qué existe. Antes el formulario uruguayo posteaba directo a
 * `amesteticadental.com/api/job-applications`. El endpoint funciona —probado con un
 * CV de 2 MB: HTTP 200 en 3,4 s— pero pedirle al navegador que haga una petición a
 * OTRO dominio es frágil por fuera de nuestro código:
 *
 *   - Safari (ITP) y Brave bloquean peticiones entre sitios de forma agresiva.
 *   - Cualquier bloqueador de publicidad las trata como "third-party request".
 *   - Si la respuesta de error no trae cabeceras CORS —el 413 de la plataforma, por
 *     ejemplo— el navegador ni siquiera puede leerla.
 *
 * En los tres casos el `fetch` se rechaza sin respuesta y el usuario ve un error de
 * conexión con la conexión intacta. Eso explica por qué el formulario argentino
 * nunca falló en más de 50 postulaciones: es del mismo origen y nadie lo bloquea.
 *
 * Con este puente, el navegador sólo habla con su propio dominio. El salto a
 * Argentina lo hace este servidor, donde no hay CORS, ni ITP, ni extensiones.
 */
export const runtime = "nodejs";
export const maxDuration = 60;

const UPSTREAM = `${ARGENTINA_URL}/api/job-applications`;

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "No pudimos leer el formulario." }, { status: 400 });
  }

  try {
    const upstream = await fetch(UPSTREAM, {
      method: "POST",
      // El endpoint argentino identifica la sede por el Origin, y así etiqueta la
      // fila como `web_uruguay`. Al viajar servidor a servidor hay que declararlo
      // explícitamente: no hay navegador que lo agregue solo.
      headers: { Origin: SITE_URL },
      body: formData,
    });

    const data = await upstream.json().catch(() => null);

    if (!data) {
      // Respuesta sin JSON: casi siempre la plataforma cortando por tamaño (413)
      // o un timeout. Se traduce a algo accionable en vez de un error genérico.
      const detalle =
        upstream.status === 413
          ? "El archivo es demasiado grande para enviarlo. Exportá el CV comprimiendo las imágenes y probá otra vez."
          : "No pudimos procesar la postulación en este momento. Probá de nuevo en unos minutos.";
      return NextResponse.json({ error: detalle }, { status: upstream.status || 502 });
    }

    return NextResponse.json(data, { status: upstream.status });
  } catch (error) {
    console.error("[job-applications proxy] falló el reenvío a Argentina:", error);
    return NextResponse.json(
      { error: "No pudimos procesar la postulación en este momento. Probá de nuevo en unos minutos." },
      { status: 502 },
    );
  }
}
