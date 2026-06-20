import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "base-uri 'self'; frame-ancestors 'none'; object-src 'none'; form-action 'self'",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: configDir,
  },
  skipTrailingSlashRedirect: true,
  allowedDevOrigins: ["192.168.1.122", "localhost"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/videos/generate-3d-veneer.webm",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/videos/generate-3d-veneer.mp4",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/videos/generate-3d-veneer-poster.jpg",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/carillas-dentales-buenos-aires",
        destination: "/precio-carillas-dentales-buenos-aires",
        permanent: true,
      },
      {
        source: "/opiniones-estetica-dental-buenos-aires",
        destination: "/opiniones",
        permanent: true,
      },
      {
        source: "/opiniones-estetica-dental-buenos-aires/",
        destination: "/opiniones",
        permanent: true,
      },
      {
        source: "/clinica-estetica-dental-buenos-aires",
        destination: "/estetica-dental",
        permanent: true,
      },
      {
        source: "/financiacion-estetica-dental-buenos-aires",
        destination: "/#financiacion",
        permanent: true,
      },
      {
        source: "/contacto-clinica-dental-buenos-aires",
        destination: "/#contacto",
        permanent: true,
      },
      {
        source: "/alineadores-invisibles-la-ortodoncia-estetica-que-transforma-sonrisas-am-estetica-dental",
        destination: "/alineadores-invisibles",
        permanent: true,
      },
      {
        source: "/alineadores-invisibles-la-ortodoncia-estetica-que-transforma-sonrisas-am-estetica-dental-copy",
        destination: "/alineadores-invisibles",
        permanent: true,
      },
      {
        source: "/alineadores-invisibles-la-ortodoncia-estetica-que-transforma-sonrisas-am-estetica-dental-copy/",
        destination: "/alineadores-invisibles",
        permanent: true,
      },
      {
        source: "/tratamientos-estetica-dental-buenos-aires",
        destination: "/estetica-dental",
        permanent: true,
      },
      {
        source: "/blanqueamiento-casero-vs-profesional-am-estetica-dental",
        destination: "/estetica-dental",
        permanent: true,
      },
      {
        source: "/antes-y-despues",
        destination: "/casos",
        permanent: true,
      },
      {
        source: "/antes-y-despues/",
        destination: "/casos",
        permanent: true,
      },
      // Casos clínicos: /antes-y-despues/[slug] → /casos/[slug]
      {
        source: "/antes-y-despues/:slug",
        destination: "/casos/:slug",
        permanent: true,
      },
      // URLs del sitio WordPress anterior
      { source: "/testimonios", destination: "/casos", permanent: true },
      { source: "/testimonios/", destination: "/casos", permanent: true },
      { source: "/galeria-sonrisas-am", destination: "/casos", permanent: true },
      { source: "/galeria-sonrisas-am/", destination: "/casos", permanent: true },
      { source: "/ubicacion", destination: "/", permanent: true },
      { source: "/ubicacion/", destination: "/", permanent: true },
      { source: "/unete-al-team-am", destination: "/trabaja-en-am", permanent: true },
      { source: "/unete-al-team-am/", destination: "/trabaja-en-am", permanent: true },
      { source: "/califica-nuestro-servicio-atencion", destination: "/", permanent: true },
      { source: "/califica-nuestro-servicio-atencion/", destination: "/", permanent: true },
      { source: "/diferencias-entre-carillas-ceramicas-y-de-resina-todo-lo-que-necesitas-saber", destination: "/carillas-de-porcelana-vs-resina", permanent: true },
      { source: "/diferencias-entre-carillas-ceramicas-y-de-resina-todo-lo-que-necesitas-saber/", destination: "/carillas-de-porcelana-vs-resina", permanent: true },
      { source: "/las-3-patologias-que-deterioran-la-estetica-de-tu-sonrisa", destination: "/estetica-dental", permanent: true },
      { source: "/las-3-patologias-que-deterioran-la-estetica-de-tu-sonrisa/", destination: "/estetica-dental", permanent: true },
      { source: "/como-mantener-tus-carillas-y-prolongar-su-duracion-am-estetica-dental-copy", destination: "/blog/cuanto-duran-las-carillas-de-porcelana", permanent: true },
      { source: "/como-mantener-tus-carillas-y-prolongar-su-duracion-am-estetica-dental-copy/", destination: "/blog/cuanto-duran-las-carillas-de-porcelana", permanent: true },
      { source: "/transforma-tu-sonrisa-con-nuestros-tratamientos-de-odontologa-estetica", destination: "/estetica-dental", permanent: true },
      { source: "/transforma-tu-sonrisa-con-nuestros-tratamientos-de-odontologa-estetica/", destination: "/estetica-dental", permanent: true },
      { source: "/transforma-tu-sonrisa-con-nuestros-tratamientos-de-odontologa-estetica/feed", destination: "/blog", permanent: true },
      { source: "/transforma-tu-sonrisa-con-nuestros-tratamientos-de-odontologa-estetica/feed/", destination: "/blog", permanent: true },
      { source: "/cuanto-duran-las-carillas-ceramicas", destination: "/blog/cuanto-duran-las-carillas-de-porcelana", permanent: true },
      { source: "/cuanto-duran-las-carillas-ceramicas/", destination: "/blog/cuanto-duran-las-carillas-de-porcelana", permanent: true },
      { source: "/form", destination: "/", permanent: true },
      { source: "/form/", destination: "/", permanent: true },
      { source: "/elementor-505", destination: "/", permanent: true },
      { source: "/elementor-505/", destination: "/", permanent: true },
      { source: "/elementor-1075", destination: "/", permanent: true },
      { source: "/elementor-1075/", destination: "/", permanent: true },
      { source: "/dr-ariel-merino/", destination: "/dr-ariel-merino", permanent: true },
      // URLs de WordPress sin redirect previo
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/inicio", destination: "/", permanent: true },
      { source: "/inicio/", destination: "/", permanent: true },
      { source: "/financiacion", destination: "/#financiacion", permanent: true },
      { source: "/financiacion/", destination: "/#financiacion", permanent: true },
      { source: "/carillas-dentales-buenos-aires/", destination: "/precio-carillas-dentales-buenos-aires", permanent: true },
      { source: "/clinica-estetica-dental-buenos-aires/", destination: "/estetica-dental", permanent: true },
      { source: "/contacto-clinica-dental-buenos-aires/", destination: "/contacto", permanent: true },
      { source: "/financiacion-estetica-dental-buenos-aires/", destination: "/#financiacion", permanent: true },
      { source: "/tratamientos-estetica-dental-buenos-aires/", destination: "/estetica-dental", permanent: true },
    ];
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/cloudinary-image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
