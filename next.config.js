/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "user-images.githubusercontent.com"
      },
      {
        protocol: 'https',
        hostname: "raw.githubusercontent.com"
      }
    ],
  },
}

module.exports = nextConfig
