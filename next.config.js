/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // gets rid of Next.js default loading icon
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
