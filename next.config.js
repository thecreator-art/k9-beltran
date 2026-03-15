/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        qualities: [55, 60, 75],
    },
    experimental: {
        workerThreads: false,
        cpus: 1
    },
    async redirects() {
        return [];
    },
};

module.exports = nextConfig;
