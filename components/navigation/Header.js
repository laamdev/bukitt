import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { navLinks } from '@/data/navigation';

import MobileMenu from '@/components/navigation/MobileMenu';

export default function Header() {
  return (
    <header>
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Link href="/">
                <a>
                  <Image
                    alt="Bukitt"
                    src="/logos/wordmark-dark.svg"
                    layout="intrinsic"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-dark bg-dark">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      alt="Bukitt"
                      src="/logos/wordmark-white.svg"
                      layout="intrinsic"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-transaprent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <MobileMenu />
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
