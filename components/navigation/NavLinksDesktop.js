import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLinksDesktop({ navLinks }) {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex items-baseline space-x-12">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href} className="relative">
              <a
                className={`tw-transition cursor-pointer font-sans text-lg underline-offset-4 ${
                  router.asPath.includes(link.href)
                    ? 'font-medium text-brand underline'
                    : 'hover:text-brand'
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
