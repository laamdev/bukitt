import Link from 'next/link';

import { navLinks } from '@/data/navigation';
import { classNames } from '@/utils/helpers';

export default function NavLinks() {
  return (
    <nav className="flex space-x-4">
      {navLinks.map((link) => (
        <Link key={link.name} href={link.href}>
          <a
            className={classNames(
              link.current ? 'text-dark' : 'text-primary',
              'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
            )}
            aria-current={link.current ? 'page' : undefined}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </nav>
  );
}
