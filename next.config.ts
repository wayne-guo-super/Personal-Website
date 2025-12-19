import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'enter-nickname.com',
                port: '',
                pathname: '/source/**',
            },
        ]
    },

    eslint: {
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;