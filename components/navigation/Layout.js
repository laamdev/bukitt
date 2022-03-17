import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

import { pageVariants } from '@/utils/framer';

export default function Layout({ children, metaTitle, metaDesription }) {
  return (
    <>
      <NextSeo
        title={metaTitle}
        description={metaDesription}
        openGraph={{ metaTitle, metaDesription }}
      />

      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={{ type: 'easeInOut' }}
        className="min-h-screen overflow-hidden"
      >
        {children}
      </motion.main>
    </>
  );
}
