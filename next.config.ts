import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true },
    /* config options here */
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;