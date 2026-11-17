/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['prisma']
  },
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com']
  }
}

module.exports = nextConfig