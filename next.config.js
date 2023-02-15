/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.jsdev.it"],
  },
};

module.exports = nextConfig;
