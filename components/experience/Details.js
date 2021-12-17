import {
  IoCashOutline,
  IoCalendarNumberOutline,
  IoTimeOutline,
} from 'react-icons/io5';

import DetailsSection from '@/components/experience/details/Section';
import DetailsWrapper from '@/components/experience/details/Wrapper';
import DetailsLabel from '@/components/experience/details/Label';
import DetailsItem from '@/components/experience/details/Item';

export default function Details({ price, dateFrom, dateTo, duration }) {
  return (
    <DetailsSection>
      <DetailsWrapper>
        <IoCashOutline className="w-6 h-6 sm:w-8 sm:h-8" />
        {/* <DetailsLabel>Price</DetailsLabel> */}
        <DetailsItem>${price} PP</DetailsItem>
      </DetailsWrapper>

      <DetailsWrapper>
        <IoCalendarNumberOutline className="w-6 h-6 sm:w-8 sm:h-8" />
        {/* <DetailsLabel>Season</DetailsLabel> */}
        <DetailsItem>
          {dateFrom} - {dateTo}
        </DetailsItem>
      </DetailsWrapper>

      <DetailsWrapper>
        <IoTimeOutline className="w-6 h-6 sm:w-8 sm:h-8" />
        {/* <DetailsLabel>Duration</DetailsLabel> */}
        <DetailsItem>{duration} days</DetailsItem>
      </DetailsWrapper>
    </DetailsSection>
  );
}
