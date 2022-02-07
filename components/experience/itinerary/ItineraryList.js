import { Disclosure, Transition } from '@headlessui/react';
import { IoChevronUpOutline } from 'react-icons/io5';

export default function ItineraryList({ itinerary }) {
  return (
    <div className="mx-auto max-w-5xl space-y-6 sm:space-y-12">
      {itinerary.map((item) => (
        <Disclosure key={item?._key}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`tw-transition flex w-full items-center justify-between rounded-2xl p-6 text-left shadow-md focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ${
                  open ? 'bg-slate-white' : 'bg-slate-100 hover:bg-white'
                }  `}
              >
                <h4
                  className={`tw-transition flex items-center space-x-12 font-mono uppercase`}
                >
                  <span className="rounded-2xl bg-brand py-6 px-4 text-center text-base font-thin text-white md:text-lg lg:text-left lg:text-xl">
                    Day {item?.day}{' '}
                  </span>
                  <span className="text-lg font-medium text-black md:text-xl lg:text-2xl">
                    {item?.activity}
                  </span>
                </h4>
                <IoChevronUpOutline
                  className={`tw-transition stroke-1 ${
                    open ? 'rotate-180 transform text-brand' : ''
                  } h-6 w-6 sm:h-10 sm:w-10`}
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
                <Disclosure.Panel className="text-center text-lg md:text-xl lg:text-2xl">
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
