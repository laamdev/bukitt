import { AnimatePresence, useCycle } from 'framer-motion';

import Logo from '@/components/navigation/Logo';
import NavLinksDesktop from '@/components/navigation/NavLinksDesktop';
import NavLinksMobile from '@/components/navigation/NavLinksMobile';
import BtnNav from '@/components/shared/buttons/BtnNav';

import { navLinks } from '@/utils/data';
import BurgerMenuButton from '@/components/navigation/BurgerMenuButton';

export default function Header() {
  const [isOpen, toggleIsOpen] = useCycle(false, true);

  return (
    <nav className="sticky top-0 left-0 right-0 z-30 flex h-16 items-center justify-between bg-white px-3 lg:h-24 lg:px-6">
      <div
        onClick={isOpen ? toggleIsOpen : undefined}
        className="z-50 block lg:hidden"
      >
        <Logo />
      </div>
      <div className="hidden lg:block">
        <Logo />
      </div>
      <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
        <NavLinksDesktop navLinks={navLinks} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <NavLinksMobile navLinks={navLinks} toggleIsOpen={toggleIsOpen} />
        )}
      </AnimatePresence>
      <div className="z-50 block lg:hidden">
        <BurgerMenuButton isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      </div>

      <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
        <BtnNav btnLinkText="Inquire" btnURL="inquiry-form" primary />
      </div>
    </nav>
  );
}
