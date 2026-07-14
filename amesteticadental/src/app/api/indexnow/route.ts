import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { urlList } = await request.json();

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
      urlList: urlList.map((url: string) =>
        url.startsWith('http') ? url : `https://www.amesteticadental.com${url}`
      ),
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
    return NextResponse.json(
      { error: 'Failed to submit URLs to IndexNow', details: String(error) },
      { status: 500 }
    );
  }
}
