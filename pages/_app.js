import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

import '@/styles/tailwind.css';

function MyApp({ Component, pageProps, router }) {
  const url = `https://bukitt.com${router.route}`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <DefaultSeo
        titleTemplate="%s - Bukitt"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: 'Tailored adventures for the boutique traveler.',
          site_name: 'Bukitt | bukitt.com',
          images: [],
        }}
        canonical={url}
      />

      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;

// <main className="min-h-screen">
//   <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//     {children}
//   </div>
// </main>;
