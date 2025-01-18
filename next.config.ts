import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Konieczne dla statycznych stron bez optymalizacji obrazów
    },
};

export default nextConfig;
