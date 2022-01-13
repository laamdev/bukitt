import { Disclosure, Transition } from '@headlessui/react';
import { IoChevronUpOutline } from 'react-icons/io5';

export default function ItineraryList({ itinerary }) {
  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-12">
      {itinerary.map((item) => (
        <Disclosure key={item?._key}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex justify-between items-center w-full p-6 text-left shadow-md rounded-2xl tw-transition focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75 ${
                  open
                    ? 'bg-neutral-white hover:bg-neutral-100'
                    : 'bg-neutral-100 hover:bg-white'
                }  `}
              >
                <h4
                  className={`flex items-center space-x-6 font-mono uppercase tw-transition`}
                >
                  <span className="text-brand text-center lg:text-left text-xl lg:text-4xl font-bold">
                    Day {item?.day}{' '}
                  </span>
                  <span className="text-lg lg:text-2xl font-medium">
                    {item?.activity}
                  </span>
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
                  {item?.description}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
