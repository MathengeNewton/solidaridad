/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@/media'] = path.join(__dirname, 'src/public');
        return config;
    },
    images: {
        domains: ['dynamic.brandcrowd.com', 'res.cloudinary.com', 'tailwindui.com', 'flowbite.s3.amazonaws.com'],
    }
}

module.exports = nextConfig;
