/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@/media'] = path.join(__dirname, 'src/public');
        return config;
      },
    images: {
        domains: ['dynamic.brandcrowd.com', 'res.cloudinary.com', 'tailwindui.com'],
    }
}

module.exports = nextConfig;
