import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: configDir,
  },
  allowedDevOrigins: ["192.168.1.122", "localhost"],
  async redirects() {
    return [
      {
        source: "/carillas-dentales-buenos-aires",
        destination: "/carillas-dentales",
        permanent: true,
      },
      {
        source: "/opiniones-estetica-dental-buenos-aires",
        destination: "/#testimonios",
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
        source: "/tratamientos-estetica-dental-buenos-aires",
        destination: "/estetica-dental",
        permanent: true,
      },
      {
        source: "/blanqueamiento-casero-vs-profesional-am-estetica-dental",
        destination: "/estetica-dental",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
