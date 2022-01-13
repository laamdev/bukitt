import { Popover } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function MenuButton({ open }) {
  return (
    <div className="absolute right-0 flex-shrink-0 lg:hidden">
      {/* Mobile menu button */}
      <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-black hover:text-neutral-700 hover:bg-white hover:bg-opacity-10 tw-transition focus:outline-none focus:ring-2 focus:ring-white">
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Popover.Button>
    </div>
  );
}
