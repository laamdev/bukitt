import DetailsContainer from '@/components/experience/details/DetailsContainer';
import DetailsWrapper from '@/components/experience/details/DetailsWrapper';
import DetailsValue from '@/components/experience/details/DetailsValue';
import DetailsLabel from '@/components/experience/details/DetailsLabel';
import DetailsUnit from '@/components/experience/details/DetailsUnit';

export default function DetailsSection({
  price,
  dateFrom,
  dateTo,
  duration,
  groupSizeMin,
  groupSizeMax,
}) {
  return (
    <DetailsContainer>
      <DetailsWrapper className="border-b sm:border-0 sm:border-r">
        <DetailsLabel>Price</DetailsLabel>
        <DetailsValue>
          ${price}
          <DetailsUnit> pp</DetailsUnit>
        </DetailsValue>
      </DetailsWrapper>
      <DetailsWrapper className="border-t border-b sm:border-0 sm:border-l sm:border-r">
        <DetailsLabel>Season</DetailsLabel>
        <DetailsValue>
          {dateFrom} - {dateTo}
        </DetailsValue>
      </DetailsWrapper>
      <DetailsWrapper className="border-t border-b sm:border-0 sm:border-l sm:border-r">
        <DetailsLabel>Duration</DetailsLabel>
        <DetailsValue>
          {duration}
          <DetailsUnit> days</DetailsUnit>
        </DetailsValue>
      </DetailsWrapper>
      <DetailsWrapper className="border-t sm:border-0 sm:border-l">
        <DetailsLabel>Group</DetailsLabel>
        <DetailsValue>
          {groupSizeMin}
          <DetailsUnit> min</DetailsUnit> - {groupSizeMax}
          <DetailsUnit> max</DetailsUnit>
        </DetailsValue>
      </DetailsWrapper>
    </DetailsContainer>
  );
}
