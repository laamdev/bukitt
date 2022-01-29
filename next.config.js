const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/studio/:path*'
      : '/studio/index.html',
};

module.exports = {
  rewrites: () => [STUDIO_REWRITE],
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'cdn.sanity.io', 'www.facebook.com'],
  },
  async headers() {
    return [
      {
        source: '/fonts/neue/neuemontreal-thin.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/neue/neuemontreal-lightitalic.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/neue/neuemontreal-regular.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/neue/neuemontreal-italic.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/neue/neuemontreal-medium.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/neue/neuemontreal-mediumitalic.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/neue/neuemontreal-bold.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/neue/neuemontreal-bolditalic.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/fuji/fuji-light.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/fuji/fuji-regular.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/fuji/fuji-medium.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/fuji/fuji-bold.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      //! INDEX
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
