import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ajd-compro', // <-- Tambahkan baris ini
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ajd.co.id',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;