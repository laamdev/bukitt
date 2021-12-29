import {
  IoCashOutline,
  IoCalendarNumberOutline,
  IoTimeOutline,
  IoPeopleOutline,
} from 'react-icons/io5';

import Container from '@/components/experience/details/Container';
import Label from '@/components/experience/details/Label';
import Wrapper from '@/components/experience/details/Wrapper';

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
      <Container>
        <Wrapper>
          <IoCashOutline className="tw-details-icon" />
          <Label>Price</Label>
          <dd className="order-1 tw-card-title-lg mt-3">
            ${price} <span className="text-xs sm:text-sm">pp</span>
          </dd>
        </Wrapper>

        <Wrapper>
          <IoCalendarNumberOutline className="tw-details-icon" />
          <Label>Season</Label>
          <dd className="order-1 tw-card-title-lg mt-3">
            <span>{dateFrom}</span> {dateTo && <span> - {dateTo}</span>}
          </dd>
        </Wrapper>

        <Wrapper>
          <IoTimeOutline className="tw-details-icon" />
          <Label>Duration</Label>
          <dd className="order-1 tw-card-title-lg mt-3">
            {duration} <span className="text-xs sm:text-sm">days</span>
          </dd>
        </Wrapper>

        <Wrapper>
          <IoPeopleOutline className="tw-details-icon" />
          <Label>Group</Label>
          <dd className="order-1 tw-card-title-lg mt-3">
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
        </Wrapper>
      </Container>
    </section>
  );
}
