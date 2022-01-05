import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/neue/neuemontreal-thin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/neue/neuemontreal-italic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/neue/neuemontreal-lightitalic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/neue/neuemontreal-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/neue/neuemontreal-italic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/neue/neuemontreal-medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/neue/neuemontreal-mediumitalic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/neue/neuemontreal-bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/neue/neuemontreal-bolditalic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/fuji/fuji-light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/fuji/fuji-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />{' '}
          <link
            rel="preload"
            href="/fonts/fuji/fuji-medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />{' '}
          <link
            rel="preload"
            href="/fonts/fuji/fuji-bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>

        <body className="bg-white text-shark text-base sm:text-lg lg:text-xl mt-20 sm:mt-24">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
