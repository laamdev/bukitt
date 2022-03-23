import Link from 'next/link';
import { motion } from 'framer-motion';

import { mobileMenuVariants } from '@/utils/framer';
import BtnInquiry from '@/components/shared/buttons/BtnInquiry';

export default function NavLinksMobile({ navLinks, toggleIsOpen }) {
  return (
    <motion.nav
      initial="initial"
      animate="animate"
      exit="exit"
      custom={toggleIsOpen}
      variants={mobileMenuVariants}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-slate-50"
    >
      <ul className="flex flex-col items-center justify-center space-y-6 ">
        {navLinks.map((link) => (
          <li key={link.id} onClick={toggleIsOpen}>
            <Link href={link.href} className="relative">
              <a
                className="font-mono text-4xl uppercase"
                aria-current={link.current ? 'page' : undefined}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <BtnInquiry label="Inquire" to="inquiry-form" toggle={toggleIsOpen} />
      </div>
    </motion.nav>
  );
}
