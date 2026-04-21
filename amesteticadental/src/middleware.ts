import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─────────────────────────────────────────────────────────────
//  Redirects: URLs viejas de WordPress → nuevo Next.js
//  + trailing slash cleanup
// ─────────────────────────────────────────────────────────────

const REDIRECTS: Record<string, string> = {
    // URL vieja sin "precio" → página actual
    "/carillas-dentales-buenos-aires":
        "/precio-carillas-dentales-buenos-aires",

    // Carillas vs Resina (slug largo → corto)
    "/diferencias-entre-carillas-ceramicas-y-de-resina-todo-lo-que-necesitas-saber":
        "/carillas-de-porcelana-vs-resina",
    "/diferencias-entre-carillas-ceramicas-y-de-resina-todo-lo-que-necesitas-saber/":
        "/carillas-de-porcelana-vs-resina",

    // Cuánto duran las carillas (slug viejo → blog nuevo)
    "/cuanto-duran-las-carillas-ceramicas":
        "/blog/cuanto-duran-las-carillas-de-porcelana",
    "/cuanto-duran-las-carillas-ceramicas/":
        "/blog/cuanto-duran-las-carillas-de-porcelana",

    // Testimonios → ancla en home
    "/testimonios": "/#testimonios",
    "/testimonios/": "/#testimonios",

    // Ubicación → ancla contacto en home
    "/ubicacion": "/#contacto",
    "/ubicacion/": "/#contacto",

    // Galería vieja → sección Casos en home
    "/galeria-sonrisas-am": "/#casos",
    "/galeria-sonrisas-am/": "/#casos",

    // Landing vieja de tratamientos → home
    "/transforma-tu-sonrisa-con-nuestros-tratamientos-de-odontologa-estetica":
        "/",
    "/transforma-tu-sonrisa-con-nuestros-tratamientos-de-odontologa-estetica/":
        "/",
    "/transforma-tu-sonrisa-con-nuestros-tratamientos-de-odontologa-estetica/feed/":
        "/",

    // Trabaja con nosotros → home (no existe equivalente)
    "/trabaja-en-am": "/",
    "/unete-al-team-am": "/",
    "/unete-al-team-am/": "/",

    // Formularios WordPress → home
    "/califica-nuestro-servicio-atencion": "/",
    "/califica-nuestro-servicio-atencion/": "/",
    "/form": "/",
    "/form/": "/",

    // Drafts de Elementor → home
    "/elementor-505": "/",
    "/elementor-505/": "/",
    "/elementor-1075": "/",
    "/elementor-1075/": "/",

    // Blog viejo sin equivalente → blog index
    "/las-3-patologias-que-deterioran-la-estetica-de-tu-sonrisa":
        "/blog",
    "/las-3-patologias-que-deterioran-la-estetica-de-tu-sonrisa/":
        "/blog",

    // Páginas viejas con tráfico real → páginas temáticamente relevantes
    "/opiniones-estetica-dental-buenos-aires": "/#testimonios",
    "/opiniones-estetica-dental-buenos-aires/": "/#testimonios",
    "/clinica-estetica-dental-buenos-aires": "/estetica-dental",
    "/clinica-estetica-dental-buenos-aires/": "/estetica-dental",
    "/tratamientos-estetica-dental-buenos-aires": "/estetica-dental",
    "/tratamientos-estetica-dental-buenos-aires/": "/estetica-dental",
    "/financiacion-estetica-dental-buenos-aires": "/#financiacion",
    "/financiacion-estetica-dental-buenos-aires/": "/#financiacion",
};

export function middleware(request: NextRequest) {
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

    // ── Redirects de URLs viejas
    const redirectPath = REDIRECTS[pathname];
    if (redirectPath) {
        // Si el destino es una URL absoluta (www redirect o externo)
        if (redirectPath.startsWith("http")) {
            return NextResponse.redirect(redirectPath, 301);
        }
        // Si el destino es un ancla en la home (#testimonios, #contacto, etc.)
        if (redirectPath.startsWith("/#")) {
            const newUrl = new URL(redirectPath, request.url);
            return NextResponse.redirect(newUrl, 301);
        }
        // Redirect interno normal
        const newUrl = new URL(redirectPath, request.url);
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
