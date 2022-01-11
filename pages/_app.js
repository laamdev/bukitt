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
        <Component
          {...pageProps}
          canonical={url}
          key={url}
          // exit={{ opacity: 0 }}
        />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
