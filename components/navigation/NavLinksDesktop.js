import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLinks({ navLinks }) {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex space-x-12 items-baseline">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="relative">
              <a
                className={`cursor-pointer text-lg tw-transition font-sans ${
                  router.asPath.includes(link.href)
                    ? 'text-paradiso font-medium'
                    : 'hover:text-paradiso-400'
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
