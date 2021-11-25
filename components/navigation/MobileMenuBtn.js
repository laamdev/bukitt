import { Disclosure } from '@headlessui/react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';

export default function MobileMenuBtn({ open }) {
  return (
    <div className="flex lg:hidden">
      {/* Mobile menu button */}
      <Disclosure.Button className="p-2 rounded-md inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-red-100 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white">
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
}
