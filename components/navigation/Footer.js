import Link from 'next/link';
import Image from 'next/image';

import {
  socialLinks,
  contactLinks,
  navLinks,
  copyright,
  currentYear,
} from '@/data/navigation';

import FooterHeading from '@/components/footer/Heading';
import Newsletter from '@/components/forms/Newsletter';

export default function Footer() {
  return (
    <footer
      className="bg-dark mt-12 sm:mt-24 py-12"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-6 sm:px-0">
        <div className="flex flex-col space-y-12 sm:space-y-0 sm:flex-row">
          <div className="w-full sm:w-1/4">
            <Newsletter />
          </div>

          <div className="w-full sm:w-2/4 flex justify-between sm:justify-evenly">
            <div>
              <FooterHeading>Quick Links</FooterHeading>
              <ul role="list" className="mt-4 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-base text-gray-300 hover:text-white tw-transition">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-12">
              <div>
                <FooterHeading>Socials</FooterHeading>
                <ul role="list" className="mt-4 space-y-4">
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-gray-300 tw-transition"
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <FooterHeading>Contacts</FooterHeading>
                <ul role="list" className="mt-4 space-y-4">
                  {contactLinks.map((contact) => (
                    <li key={contact.name}>
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-gray-300 tw-transition"
                      >
                        <span className="sr-only">{contact.name}</span>
                        {contact.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/4 flex justify-center items-center">
            <div className="w-24">
              <Image
                src="/images/iata-logo.png"
                alt="IATA logo"
                layout="responsive"
                width={1}
                height={1}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 pt-12 border-t border-gray-700">
          <div>
            <p className="sm:mt-8 text-xs sm:text-sm text-gray-400 md:mt-0 md:order-1">
              © {currentYear}, {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
