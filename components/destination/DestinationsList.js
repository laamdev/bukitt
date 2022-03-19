import { motion } from 'framer-motion';

export default function DestinationsList({ children }) {
  return (
    <section className="tw-section mx-auto max-w-7xl">
      <motion.ul
        layout
        role="list"
        className="mx-auto grid grid-cols-2 gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-12"
      >
        {children}
      </motion.ul>
    </section>
  );
}
