const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/studio/:path*'
      : '/studio/index.html',
};

const nextConfig = {
  rewrites: () => [STUDIO_REWRITE],
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'cdn.sanity.io', 'www.facebook.com'],
  },
  async redirects() {
    return [
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
