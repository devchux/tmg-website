/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ytimg.com", "scontent.cdninstagram.com", "scontent-iad3-2.cdninstagram.com"],
  },
};

module.exports = nextConfig;
