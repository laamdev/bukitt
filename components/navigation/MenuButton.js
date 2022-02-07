import { Popover } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function MenuButton({ open }) {
  return (
    <div className="absolute right-0 shrink-0 lg:hidden">
      {/* Mobile menu button */}
      <Popover.Button className="tw-transition inline-flex items-center justify-center rounded-md bg-transparent p-2 text-black hover:bg-white hover:bg-opacity-10 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-white">
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
