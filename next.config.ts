import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel-ready config */
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
