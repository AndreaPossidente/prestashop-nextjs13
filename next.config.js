/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    domains: ["www.jsdev.it"],
  },
};

module.exports = nextConfig;
