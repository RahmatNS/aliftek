/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    turbopack: {},
    images: {
        unoptimized: true,
    },
    webpack: (config, { dev, isServer }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            }
        }
        return config
    },
};

module.exports = nextConfig;
