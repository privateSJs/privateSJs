import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Konieczne dla statycznych stron bez optymalizacji obrazów
  },
  basePath: isProd ? "/privateSJs" : "",
  assetPrefix: isProd ? "/privateSJs" : "",
  trailingSlash: true,
};

export default nextConfig;
