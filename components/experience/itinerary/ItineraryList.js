import { Disclosure, Transition } from '@headlessui/react';
import { IoChevronUpOutline } from 'react-icons/io5';

export default function ItineraryList({ itinerary }) {
  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-12">
      {itinerary.map((item) => (
        <Disclosure key={item._key}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex justify-between items-center w-full px-6 py-12 text-left shadow-md rounded-2xl tw-transition focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75 ${
                  open
                    ? 'bg-neutral-white hover:bg-neutral-100'
                    : 'bg-neutral-100 hover:bg-white'
                }  `}
              >
                <h4
                  className={`text-2xl sm:text-4xl font-mono font-bold uppercase tw-transition ${
                    open ? 'text-brand' : 'text-dark'
                  }`}
                >
                  Day {item.day}
                </h4>
                <IoChevronUpOutline
                  className={`tw-transition stroke-1 ${
                    open ? 'transform rotate-180 text-brand' : ''
                  } w-6 sm:w-12 h-6 sm:h-12`}
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
                <Disclosure.Panel className="text-lg sm:text-xl lg:text-2xl text-brand text-center">
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
