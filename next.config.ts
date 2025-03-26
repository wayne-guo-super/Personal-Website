import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    /* config options here */
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        turbo: {
            rules: {
                '*.{glsl,vs,fs,vert,frag}': {
                    loaders: ['raw-loader'],
                    as: '*.js',
                },
            }
        }
    }
};

export default nextConfig;