import {
  IoCashOutline,
  IoCalendarNumberOutline,
  IoTimeOutline,
  IoPeopleOutline,
} from 'react-icons/io5';

import DetailsContainer from '@/components/experience/details/DetailsContainer';
import DetailsLabel from '@/components/experience/details/DetailsLabel';
import DetailsWrapper from '@/components/experience/details/DetailsWrapper';

export default function DetailsSection({
  price,
  dateFrom,
  dateTo,
  duration,
  groupSizeMin,
  groupSizeMax,
}) {
  return (
    <section className="tw-section">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <dl className="rounded-lg bg-neutral-50 shadow-lg sm:grid sm:grid-cols-4">
            <div className="flex flex-col border-b border-neutral-200 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-neutral-500">
                Price
              </dt>
              <dd className="order-1 text-5xl font-medium text-brand-600 font-mono uppercase">
                ${price}
                <span className="text-sm font-thin"> pp</span>
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-neutral-200 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-neutral-500">
                Season
              </dt>
              <dd className="order-1 text-5xl font-medium text-brand-600 font-mono uppercase">
                {dateFrom} - {dateTo}
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-neutral-200 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-neutral-500">
                Delivery
              </dt>
              <dd className="order-1 text-5xl font-medium text-brand-600 font-mono uppercase">
                24/7
              </dd>
            </div>
            <div className="flex flex-col border-t border-neutral-200 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-neutral-500">
                Calories
              </dt>
              <dd className="order-1 text-5xl font-medium text-brand-600 font-mono uppercase">
                100k
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
