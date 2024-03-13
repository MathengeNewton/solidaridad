/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@/media'] = path.join(__dirname, 'src/public');
        return config;
    },
    images: {
        remotePatterns: [
                {
                protocol: 'https',
                hostname: 'dynamic.brandcrowd.com'
                },
                {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                },
                {
                protocol: 'https',
                hostname: 'flowbite.s3.amazonaws.com'
                },
                {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                }
            ]
    }
}

module.exports = nextConfig;
