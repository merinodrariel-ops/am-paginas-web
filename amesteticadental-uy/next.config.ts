import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
