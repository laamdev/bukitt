import Link from 'next/link';
import { socialLinks, copyright } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto py-6">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-6 sm:space-y-0">
        <ul className="flex space-x-6">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <Link href={social.href}>
                <a className="tw-text-hover tw-transition">{social.icon}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-xs sm:text-sm text-gray-500">{copyright}</div>
      </div>
    </footer>
  );
}
