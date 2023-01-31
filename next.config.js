/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require("@plaiceholder/next");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com"],
  },
};

module.exports = withPlaiceholder(nextConfig);
