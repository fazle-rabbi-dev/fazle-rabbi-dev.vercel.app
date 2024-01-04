/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "user-images.githubusercontent.com"
      }
    ],
  },
}

module.exports = nextConfig
