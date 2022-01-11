import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover } from '@headlessui/react';

export default function NavLinksMobile({ navLinks }) {
  const router = useRouter();

  return (
    <div className="mt-6">
      <ul className="flex flex-col space-y-6 text-2xl border-b-2 border-neutral-300 pb-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <a
                className={`cursor-pointer ${
                  router.asPath === link.href
                    ? 'text-brand font-bold '
                    : 'text-dark hover:text-brand tw-transition'
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
