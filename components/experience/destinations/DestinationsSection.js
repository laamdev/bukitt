import GridList from '@/components/shared/list/GridList';
import Card from '@/components/shared/Card';
import SectionContainer from '@/components/shared/SectionContainer';

export default function DestinationsSection({ heading, destinations }) {
  return (
    <SectionContainer heading={heading}>
      <GridList>
        {destinations.map((destination, idx) => (
          <li key={idx}>
            <Card
              content={destination?.card}
              linkURL={`destinations/${destination?.slug}`}
            />
          </li>
        ))}
      </GridList>
    </SectionContainer>
  );
}
