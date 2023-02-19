/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
  },
  images: {
    domains: ["www.jsdev.it"],
  },
};

module.exports = nextConfig;
