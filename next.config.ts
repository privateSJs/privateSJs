import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Konieczne dla statycznych stron bez optymalizacji obrazów
  },
  basePath: "/privateSJs",
  assetPrefix: "/privateSJs/",
};

export default nextConfig;
