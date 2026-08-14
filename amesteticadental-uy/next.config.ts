import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // La página que explicaba cómo tratarse en Buenos Aires se dio de baja: el
        // sitio uruguayo no deriva pacientes a la sede argentina. Se redirige en vez
        // de devolver 404 porque la URL llegó a estar en el sitemap y en IndexNow.
        source: "/tratamiento-en-buenos-aires-desde-uruguay",
        destination: "/clinica-dental-carrasco",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "amesteticadental.uy" }],
        destination: "https://www.amesteticadental.uy/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "amesteticadental.com.uy" }],
        destination: "https://www.amesteticadental.uy/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.amesteticadental.com.uy" }],
        destination: "https://www.amesteticadental.uy/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
};

export default nextConfig;
