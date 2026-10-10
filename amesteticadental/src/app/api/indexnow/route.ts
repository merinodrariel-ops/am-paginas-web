import { NextRequest, NextResponse } from 'next/server';
import { secretoCoincide } from '@/lib/api-guard';

/**
 * Proxy a IndexNow. Exige el header `x-indexnow-secret` igual a la env var
 * INDEXNOW_SECRET. Sin la env var cargada, el endpoint queda cerrado (503):
 * antes era un POST abierto con el que cualquiera podía notificar URLs del dominio.
 * El workflow de GitHub usa scripts/notify-indexnow.mjs, que habla directo con
 * IndexNow y no depende de esta ruta.
 */
export async function POST(request: NextRequest) {
  const esperado = process.env.INDEXNOW_SECRET;
  if (!esperado) {
    return NextResponse.json({ error: 'IndexNow endpoint disabled' }, { status: 503 });
  }
  if (!secretoCoincide(request.headers.get('x-indexnow-secret'), esperado)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { urlList } = await request.json();

    if (Array.isArray(urlList) && urlList.length > 10000) {
      return NextResponse.json({ error: 'urlList too long (max 10000)' }, { status: 400 });
    }

    if (!urlList || !Array.isArray(urlList) || urlList.length === 0) {
      return NextResponse.json(
        { error: 'urlList is required and must be a non-empty array' },
        { status: 400 }
      );
    }

    const indexNowPayload = {
      host: 'www.amesteticadental.com',
      key: '14c9604645864308b49cb8994e8d032c',
      keyLocation: 'https://www.amesteticadental.com/14c9604645864308b49cb8994e8d032c.txt',
      // Sólo URLs del propio host: IndexNow rechaza el lote entero si hay otras.
      urlList: urlList
        .filter((url: unknown): url is string => typeof url === 'string')
        .map((url: string) =>
          url.startsWith('http') ? url : `https://www.amesteticadental.com${url.startsWith('/') ? '' : '/'}${url}`
        )
        .filter((url: string) => url.startsWith('https://www.amesteticadental.com/') || url === 'https://www.amesteticadental.com'),
    };

    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(indexNowPayload),
    });

    const result = await response.json().catch(() => ({}));

    return NextResponse.json(
      {
        success: response.ok,
        status: response.status,
        message: response.ok ? 'URLs submitted to IndexNow' : 'IndexNow submission failed',
        details: result,
      },
      { status: response.ok ? 200 : response.status }
    );
  } catch (error) {
    console.error('[api/indexnow]', error);
    return NextResponse.json(
      { error: 'Failed to submit URLs to IndexNow' },
      { status: 500 }
    );
  }
}
