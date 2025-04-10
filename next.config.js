/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'colombiantrip-bkt.s3.amazonaws.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/thank-you-:slug',
        destination: '/thank-you/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
