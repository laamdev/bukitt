import Link from 'next/link';
import Image from 'next/image';

import {
  socialLinksFooter,
  contactLinks,
  copyright,
  currentYear,
} from '@/utils/data';

import FooterHeading from '@/components/navigation/FooterHeading';
import FooterList from '@/components/navigation/FooterList';
import FooterGroup from '@/components/navigation/FooterGroup';

export default function Footer() {
  return (
    <footer className="bg-dark-500 py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
        <FooterGroup className="col-span-1 lg:col-span-1">
          <FooterHeading>Socials</FooterHeading>
          <FooterList>
            {socialLinksFooter.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="tw-transition text-slate-400 hover:text-slate-300 "
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="h-6 w-6 lg:h-8 lg:w-8">{social.icon}</span>
                </a>
              </li>
            ))}
          </FooterList>
        </FooterGroup>

        <FooterGroup className="col-span-1 lg:col-span-1">
          <FooterHeading>Contacts</FooterHeading>
          <FooterList>
            {contactLinks.map((contact) => (
              <li key={contact.name}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="tw-transition text-slate-400 hover:text-slate-300"
                >
                  <span className="sr-only">{contact.name}</span>
                  <span className="h-6 w-6 lg:h-8 lg:w-8">{contact.icon}</span>
                </a>
              </li>
            ))}
          </FooterList>
        </FooterGroup>

        <FooterGroup className="col-span-2 lg:col-span-1">
          <div className="w-20 lg:w-24">
            <a target="_blank" rel="noreferrer" href="https://www.iata.org/">
              <Image
                src="/static/images/iata-logo.png"
                alt="IATA logo"
                layout="responsive"
                width={1}
                height={1}
              />
            </a>
          </div>
        </FooterGroup>
      </div>

      <div className="mt-12 border-t-2 border-slate-700 pt-12">
        <p className="text-center text-xs text-slate-400">
          © {currentYear}, {copyright}. Policies:{' '}
          <Link href="/policies/cancellation">
            <a>Cancellation</a>
          </Link>{' '}
          /{' '}
          <Link href="/policies/privacy">
            <a>Privacy</a>
          </Link>{' '}
          /{' '}
          <Link href="/policies/cookies">
            <a>Cookies</a>
          </Link>
        </p>
      </div>
    </footer>
  );
}
