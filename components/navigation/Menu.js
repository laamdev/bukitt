import { Disclosure } from '@headlessui/react';

import Header from '@/components/navigation/Header';

export default function Menu() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-100 border-b border-gray-300 border-opacity-25 lg:border-none"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <Header open={open} />
          </div>

          {/* <Profile/> */}
        </>
      )}
    </Disclosure>
  );
}
