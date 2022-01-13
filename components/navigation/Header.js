import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

import { navLinks } from '@/data/navigation';

import MenuButton from '@/components/navigation/MenuButton';
import Logo from '@/components/navigation/Logo';
import NavLinksDesktop from '@/components/navigation/NavLinksDesktop';
import NavLinksMobile from '@/components/navigation/NavLinksMobile';
import ButtonLinkHeader from '@/components/shared/ButtonLinkHeader';

export default function Header() {
  return (
    <Popover as="header">
      {({ open }) => (
        <>
          <div className="fixed top-0 inset-x-0 z-20 flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8 bg-white border-b-2 border-neutral-100">
            {/* Logo */}
            <div>
              <Logo />
            </div>

            {/* Right section on desktop */}
            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
              <NavLinksDesktop navLinks={navLinks} />
            </div>

            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
              <ButtonLinkHeader btnLinkText="Inquire" btnURL="inquiry-form" />
            </div>

            {/* Mobule menu button */}
            <MenuButton open={open} />
          </div>

          <Transition.Root as={Fragment}>
            <div className="lg:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="z-30 fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                >
                  <div className="ring-1 ring-black ring-opacity-5 divide-y divide-slate-200">
                    <div className="p-6 bg-neutral-100 rounded-2xl shadow">
                      <div className="flex items-center justify-between pb-6">
                        <Popover.Button>
                          <Link href="/">
                            <a>
                              <span className="sr-only">Bukitt</span>
                              <div className="relative w-10">
                                <Image
                                  src="/logos/bukitt-logo-square.svg"
                                  alt="Bukitt"
                                  layout="responsive"
                                  width={1}
                                  height={1}
                                />
                              </div>
                            </a>
                          </Link>
                        </Popover.Button>
                        <div>
                          <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 tw-transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand">
                            <span className="sr-only">Close menu</span>
                            <XIcon
                              className="h-6 w-6 text-black hover:text-neutral-700"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>
                      </div>
                      <NavLinksMobile navLinks={navLinks} />
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}
