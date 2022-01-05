import GridList from '@/components/shared/list/GridList';
import Card from '@/components/shared/Card';
import SectionContainer from '@/components/shared/SectionContainer';

export default function DestinationsSection({ heading, destinations }) {
  return (
    <SectionContainer heading={heading}>
      <GridList>
        {destinations.map((destination) => (
          <Card
            key={destination?._id}
            content={destination?.card}
            linkURL={`destinations/${destination?.slug}`}
          />
        ))}
      </GridList>
    </SectionContainer>
  );
}
