/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';
import { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import { socialLinks } from '@/utils/data';
import { navLinks } from '@/utils/data';

import Logo from '@/components/navigation/Logo';
import NavLinksDesktop from '@/components/navigation/NavLinksDesktop';
import BtnPrimary from '@/components/shared/buttons/BtnPrimary';

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
                <BtnPrimary btnLinkText="Inquire" btnURL="inquiry-form" />
              </div>

              <Popover.Button
                className={classNames(
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 lg:hidden'
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
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
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
                <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                  {navLinks.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a>
                        <Popover.Button className="text-3xl font-medium">
                          {item.name}
                        </Popover.Button>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto space-y-12 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                  <div className="flex justify-center">
                    <Popover.Button>
                      <BtnPrimary btnLinkText="Inquire" btnURL="inquiry-form" />
                    </Popover.Button>
                  </div>
                  <ul role="list" className="flex justify-evenly">
                    {socialLinks.map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-700 hover:text-neutral-500 tw-transition"
                        >
                          <Popover.Button>
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
