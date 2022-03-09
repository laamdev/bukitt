const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/studio/:path*'
      : '/studio/index.html',
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  rewrites: () => [STUDIO_REWRITE],
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'cdn.sanity.io', 'www.facebook.com'],
  },
  async redirects() {
    return [
      //! INDEX
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
});
