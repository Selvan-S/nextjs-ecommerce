/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "i.imgur.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
  experimental: { serverActions: true },
};

module.exports = nextConfig;
