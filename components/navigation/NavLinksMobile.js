import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover } from '@headlessui/react';

export default function NavLinksMobile({ navLinks }) {
  const router = useRouter();

  return (
    <div>
      <ul className="flex flex-col mt-6 ml-6 space-y-3">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <a
                className={`cursor-pointer font-subheading ${
                  router.asPath === link.href
                    ? 'text-primary'
                    : 'text-dark hover:text-primary tw-transition'
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
