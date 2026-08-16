import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─────────────────────────────────────────────────────────────
//  Trailing slash cleanup
//
//  Acá vivía también un mapa REDIRECTS con las URLs viejas de WordPress. Estaba
//  muerto: los redirects de next.config.ts corren antes que el proxy, y 37 de
//  sus 38 entradas ya estaban declaradas ahí. Peor, 13 apuntaban a otro destino
//  —/opiniones-estetica-dental-buenos-aires iba a /opiniones en next.config y a
//  /#testimonios acá—, así que el archivo decía una cosa y el sitio hacía otra.
//
//  Los redirects viven ahora en un solo lugar: next.config.ts.
// ─────────────────────────────────────────────────────────────

export function proxy(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;

    // ── Trailing slash removal (excepto para paths que lo necesitan)
    if (pathname.endsWith("/") && pathname !== "/") {
        const cleanPath = pathname.replace(/\/+$/, "");
        const newUrl = new URL(cleanPath, request.url);
        if (searchParams.toString()) {
            newUrl.search = searchParams.toString();
        }
        return NextResponse.redirect(newUrl, 301);
    }

    return NextResponse.next();
}

// Solo ejecutar en rutas que importan — no en assets estáticos
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - api routes
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico
         * - public files (images, videos, etc.)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|images/|videos/|logo.png|robots.txt|sitemap.xml).*)",
    ],
};
