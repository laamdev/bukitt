const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'cdn.sanity.io', 'www.facebook.com'],
  },
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        destination: 'https://bukitt.sanity.studio',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/tailor-made-trips',
        destination: '/inquiry-form',
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([[withBundleAnalyzer], nextConfig]);
