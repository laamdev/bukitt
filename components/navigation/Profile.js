import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import { navLinks, userLinks, user } from '@/data/navigation';

export default function Profile() {
  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navLinks.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-red-700 text-white'
                : 'text-white hover:bg-red-500 hover:bg-opacity-75',
              'block rounded-md py-2 px-3 text-base font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-red-700">
        <div className="px-5 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="rounded-full h-10 w-10"
              src={user.imageUrl}
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">{user.name}</div>
            <div className="text-sm font-medium text-red-300">{user.email}</div>
          </div>
          <button
            type="button"
            className="ml-auto bg-red-600 flex-shrink-0 rounded-full p-1 text-red-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-3 px-2 space-y-1">
          {userLinks.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-red-500 hover:bg-opacity-75"
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  );
}
