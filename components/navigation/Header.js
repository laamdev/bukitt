import Link from 'next/link';
import { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import { socialLinkMobileMenu } from '@/utils/data';
import { navLinks } from '@/utils/data';

import Logo from '@/components/navigation/Logo';
import NavLinksDesktop from '@/components/navigation/NavLinksDesktop';
import BtnNav from '@/components/shared/buttons/BtnNav';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Popover className="fixed z-20 top-0 inset-x-0">
      {({ open }) => (
        <>
          <div className="relative z-10 bg-white shadow">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-16 lg:h-20 px-3 lg:px-0">
              <div>
                <Logo />
              </div>

              <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                <NavLinksDesktop navLinks={navLinks} />
              </div>

              <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                <BtnNav btnLinkText="Inquire" btnURL="inquiry-form" primary />
              </div>

              <Popover.Button
                className={classNames(
                  open ? 'text-neutral-900' : 'text-neutral-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 lg:hidden'
                )}
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block w-6" aria-hidden="true" />
                )}{' '}
                {/* <ChevronDownIcon
                  className={classNames(
                    open ? 'text-neutral-600' : 'text-neutral-400',
                    'ml-2 h-5 w-5 group-hover:text-neutral-500'
                  )}
                  aria-hidden="true"
                /> */}
              </Popover.Button>
              <Popover.Overlay className="z-30 fixed inset-0 bg-black bg-opacity-75 mt-24" />
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute z-10 inset-x-0 transform shadow-lg">
              <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 text-center">
                  <ul className="space-y-6 md:space-y-12">
                    {navLinks.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>
                          <a>
                            <Popover.Button className="text-3xl md:text-6xl font-mono font-medium uppercase">
                              {item.name}
                            </Popover.Button>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-neutral-50">
                <div className="max-w-7xl mx-auto space-y-12 px-4 py-5">
                  <div className="flex justify-center">
                    <Popover.Button>
                      <BtnNav
                        btnLinkText="Inquire"
                        btnURL="inquiry-form"
                        primary
                      />
                    </Popover.Button>
                  </div>
                  <ul role="list" className="flex justify-evenly">
                    {socialLinkMobileMenu.map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-700 hover:text-neutral-500 tw-transition"
                        >
                          <Popover.Button className="w-6 h-6 md:w-12 md:h-12">
                            <span className="sr-only">{social.name}</span>
                            {social.icon}
                          </Popover.Button>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
