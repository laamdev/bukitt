import {
  IoCashOutline,
  IoCalendarNumberOutline,
  IoTimeOutline,
  IoPeopleOutline,
} from 'react-icons/io5';

export default function Details({
  price,
  dateFrom,
  dateTo,
  duration,
  groupSizeMin,
  groupSizeMax,
}) {
  return (
    <section className="mx-auto">
      <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
        <div className="flex flex-col items-center border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
          <IoCashOutline className="w-7 sm:w-8 h-7 sm:h-8 text-dark" />
          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
            Price
          </dt>
          <dd className="order-1 tw-subheading text-primary">
            {price} <span className="text-xs sm:text-sm">pp</span>
          </dd>
        </div>
        <div className="flex flex-col items-center border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
          <IoCalendarNumberOutline className="w-7 sm:w-8 h-7 sm:h-8 text-dark" />
          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
            Season
          </dt>
          <dd className="order-1 tw-subheading text-primary">
            <span>{dateFrom}</span> {dateTo && <span> - {dateTo}</span>}
          </dd>
        </div>

        <div className="flex flex-col items-center border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
          <IoTimeOutline className="w-7 sm:w-8 h-7 sm:h-8 text-dark" />
          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
            Duration
          </dt>
          <dd className="order-1 tw-subheading text-primary">
            {duration} <span className="text-xs sm:text-sm">days</span>
          </dd>
        </div>

        <div className="flex flex-col items-center border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
          <IoPeopleOutline className="w-7 sm:w-8 h-7 sm:h-8 text-dark" />
          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
            Calories
          </dt>
          <dd className="order-1 tw-subheading text-primary">
            <span>
              {groupSizeMin}
              <span className="text-xs sm:text-sm"> min</span>
            </span>
            {groupSizeMax && (
              <span>
                {' '}
                / {groupSizeMax}
                <span className="text-xs sm:text-sm"> max</span>
              </span>
            )}
          </dd>
        </div>
      </dl>
    </section>
  );
}
