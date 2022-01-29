import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';

import * as fbq from '@/lib/fpixel';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

import '@/styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const url = `https://bukitt.com${router.asPath}`;

  useEffect(() => {
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        id="fpixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${fbq.FB_PIXEL_ID});
          fbq('track', 'PageView');
          `,
        }}
      />

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
