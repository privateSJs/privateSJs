import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Konieczne dla statycznych stron bez optymalizacji obrazów
  },
  basePath: "/privateSJs",
  assetPrefix: "/privateSJs/",
  env:{
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  }
};

export default nextConfig;
