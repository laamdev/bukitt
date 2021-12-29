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
                className={`text-sm cursor-pointer tw-transition uppercase tracking-wider ${
                  router.asPath.includes(link.href)
                    ? 'text-primary font-bold'
                    : 'text-dark font-medium opacity-50 hover:text-primary hover:opacity-100'
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
