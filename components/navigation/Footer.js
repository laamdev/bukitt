import Image from 'next/image';
import Link from 'next/link';

import {
  socialLinks,
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

      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <div className="w-1/4">
            <Newsletter />
          </div>

          <div className="w-2/4 flex justify-evenly">
            {/* <div>
              <FooterHeading>Solutions</FooterHeading>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div>
              <FooterHeading>Quick Links</FooterHeading>
              <ul role="list" className="mt-4 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-1/4 flex justify-center items-center">
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

        <div className="flex justify-between mt-12 pt-12 border-t border-gray-700">
          <div>
            <p className="mt-8 text-sm text-gray-400 md:mt-0 md:order-1">
              © {currentYear}, {copyright}
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>

    // <footer className="max-w-7xl mx-auto py-6">
    //   <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-6 sm:space-y-0">
    //     <ul className="flex space-x-6">
    //       {socialLinks.map((social) => (
    //         <li key={social.name}>
    //           <Link href={social.href}>
    //             <a className="tw-text-hover tw-transition">{social.icon}</a>
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>

    //     <div className="text-xs sm:text-sm text-gray-500">{copyright}</div>
    //   </div>
    // </footer>
  );
}

//  <footer>
//    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
//      <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
//        <span className="block sm:inline">&copy; 2021 Tailwind Labs Inc.</span>{' '}
//        <span className="block sm:inline">All rights reserved.</span>
//      </div>
//    </div>
//  </footer>;
