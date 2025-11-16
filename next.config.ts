import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static image optimization
  output: 'standalone',
};

export default nextConfig;
