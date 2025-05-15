/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'd1c6gk3tn6ydje.cloudfront.net',
      'dedjh0j7jhutx.cloudfront.net',
      'images.unsplash.com'
    ],
    unoptimized: true,
  },
};

export default nextConfig;
