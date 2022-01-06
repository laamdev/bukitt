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
    <section className="mx-auto">
      <DetailsContainer>
        <DetailsWrapper>
          <IoCashOutline className="tw-details-icon" />
          <DetailsLabel>Price</DetailsLabel>
          <dd className="order-1 tw-card-title-lg text-2xl sm:text-3xl lg:text-4xl mt-3">
            ${price} <span className="text-xs sm:text-sm">pp</span>
          </dd>
        </DetailsWrapper>

        <DetailsWrapper>
          <IoCalendarNumberOutline className="tw-details-icon" />
          <DetailsLabel>Season</DetailsLabel>
          <dd className="order-1 tw-card-title-lg text-2xl sm:text-3xl lg:text-4xl mt-3">
            <span>{dateFrom}</span> {dateTo && <span> - {dateTo}</span>}
          </dd>
        </DetailsWrapper>

        <DetailsWrapper>
          <IoTimeOutline className="tw-details-icon" />
          <DetailsLabel>Duration</DetailsLabel>
          <dd className="order-1 tw-card-title-lg text-4xl mt-3">
            {duration} <span className="text-xs sm:text-sm">days</span>
          </dd>
        </DetailsWrapper>

        <DetailsWrapper>
          <IoPeopleOutline className="tw-details-icon" />
          <DetailsLabel>Group</DetailsLabel>
          <dd className="order-1 tw-card-title-lg text-2xl sm:text-3xl lg:text-4xl mt-3">
            <span>
              {groupSizeMin}
              <span className="text-xs sm:text-sm"> min</span>
            </span>
            {groupSizeMax && (
              <span>
                {' '}
                - {groupSizeMax}
                <span className="text-xs sm:text-sm"> max</span>
              </span>
            )}
          </dd>
        </DetailsWrapper>
      </DetailsContainer>
    </section>
  );
}
