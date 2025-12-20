import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'asset.enter-nickname.com',
                pathname: '/**',
            },
        ]
    },

    eslint: {
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;