import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

export default function Layout({ children, title, description }) {
  return (
    <div className="overflow-x-hidden">
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.7, type: 'easeInOut' }}
        className="max-w-screen-2xl mx-auto px-3 lg:px-6"
      >
        {children}
      </motion.main>
    </div>
  );
}
