import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLinks({ navLinks }) {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex space-x-6 items-baseline">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="relative">
              <a
                className={`cursor-pointer tw-transition text-base sm:text-lg ${
                  router.asPath === link.href
                    ? 'text-teal-500 font-medium'
                    : 'text-black hover:text-teal-500'
                }`}
                aria-current={link.current ? 'page' : undefined}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
