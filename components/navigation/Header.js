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
    <Popover className="fixed inset-x-0 top-0 z-20">
      {({ open }) => (
        <>
          <div className="relative z-10 bg-white shadow">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 lg:h-20 lg:px-0">
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
                  open ? 'text-slate-900' : 'text-slate-500',
                  'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 lg:hidden'
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
                    open ? 'text-slate-600' : 'text-slate-400',
                    'ml-2 h-5 w-5 group-hover:text-slate-500'
                  )}
                  aria-hidden="true"
                /> */}
              </Popover.Button>
              <Popover.Overlay className="fixed inset-0 z-30 mt-24 bg-black bg-opacity-75" />
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
            <Popover.Panel className="absolute inset-x-0 z-10 transform shadow-lg">
              <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-12 text-center md:py-24">
                  <ul className="space-y-6 md:space-y-12">
                    {navLinks.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>
                          <a>
                            <Popover.Button className="font-mono text-3xl font-medium uppercase md:text-6xl">
                              {item.name}
                            </Popover.Button>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50">
                <div className="mx-auto max-w-7xl space-y-12 px-4 py-5">
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
                          className="tw-transition text-slate-700 hover:text-slate-500"
                        >
                          <Popover.Button className="h-6 w-6 md:h-12 md:w-12">
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
