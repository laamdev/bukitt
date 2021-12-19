import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLinks({ navLinks }) {
  const router = useRouter();

  return (
    <nav className="flex space-x-6">
      {navLinks.map((link) => (
        <Link key={link.name} href={link.href}>
          <a
            className={`cursor-pointer font-subheading ${
              router.asPath === link.href
                ? 'text-primary'
                : 'text-dark opacity-50 hover:text-primary hover:opacity-100 tw-transition'
            }`}
            aria-current={link.current ? 'page' : undefined}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </nav>
  );
}
