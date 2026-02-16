import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for optimized images
  },

  // Compiler Options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Experimental Features
  experimental: {
    optimizePackageImports: ['motion', 'lucide-react'],
  },

  // Performance & Security
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
