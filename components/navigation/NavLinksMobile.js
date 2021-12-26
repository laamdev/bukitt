import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover } from '@headlessui/react';

export default function NavLinksMobile({ navLinks }) {
  const router = useRouter();

  return (
    <div>
      <ul className="flex flex-col px-6 py-12 space-y-6 tw-navlink-mobile">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <a
                className={`cursor-pointer font-secondary ${
                  router.asPath === link.href
                    ? 'text-primary font-bold '
                    : 'text-black hover:text-primary tw-transition'
                } 
            `}
              >
                <Popover.Button>{link.name}</Popover.Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
