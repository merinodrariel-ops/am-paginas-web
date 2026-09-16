import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // El dominio canónico es www. El apex existe y responde, así que manda a
      // todo el mundo a la misma versión en un solo salto.
      {
        source: "/:path*",
        has: [{ type: "host", value: "arielmerino.com" }],
        destination: "https://www.arielmerino.com/:path*",
        permanent: true,
      },
      // Herencia del sitio anterior, donde la portada vivía en /home. Google la
      // siguió pidiendo hasta agosto de 2026 y encontraba un 404: cada enlace
      // viejo que apunte ahí tiraba su autoridad a la basura en vez de pasársela
      // a la portada. Con el 301, esa autoridad vuelve a la home.
      { source: "/home", destination: "/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
};

export default nextConfig;
