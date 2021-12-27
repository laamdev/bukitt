import { Disclosure, Transition } from '@headlessui/react';
import { IoChevronUpOutline } from 'react-icons/io5';

import CardTitle from '@/components/shared/card/Title';

export default function List({ itinerary }) {
  return (
    <div className="max-w-4xl mx-auto p-2 bg-gray-100 rounded space-y-1.5 sm:space-y-3">
      {itinerary.map((item, idx) => (
        <Disclosure key={idx}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-left bg-gray-50 rounded hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <CardTitle>Day {item.day}</CardTitle>
                <IoChevronUpOutline
                  className={`tw-transition ${
                    open ? 'transform rotate-180' : ''
                  } w-6 sm:w-8 h-6 sm:h-8 text-primary`}
                />
              </Disclosure.Button>

              <Transition
                enter="transition duration-150 ease-linear"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-linear"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 tw-card-subtitle text-gray-500">
                  {item.activity}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
