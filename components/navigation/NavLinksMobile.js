import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover } from '@headlessui/react';

import ButtonLink from '@/components/shared/buttons/ButtonLink';

export default function NavLinksMobile({ navLinks }) {
  const router = useRouter();

  return (
    <div className="mt-6">
      <ul className="flex flex-col space-y-6 tw-navlink-mobile border-b-2 border-gray-300 pb-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <a
                className={`cursor-pointer ${
                  router.asPath === link.href
                    ? 'text-primary font-bold '
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
      <div className="flex justify-center mt-6">
        <ButtonLink btnLinkText="Enquire" btnURL="enquiry-form" />
      </div>
    </div>
  );
}
