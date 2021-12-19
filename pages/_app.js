import { AnimatePresence } from 'framer-motion';

import Layout from '@/components/navigation/Layout';

import '@/styles/tailwind.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
