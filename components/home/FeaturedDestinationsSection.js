import SectionContainer from '@/components/shared/SectionContainer';
import GridList from '@/components/shared/list/GridList';
import Card from '@/components/shared/Card';

export default function FeaturedDestinationsSection({
  heading,
  featuredDestinations,
}) {
  return (
    <SectionContainer heading={heading}>
      <GridList>
        {featuredDestinations.map((destination, idx) => (
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
