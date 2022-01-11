import GridList from '@/components/shared/list/GridList';
import Card from '@/components/shared/Card';
import SectionContainer from '@/components/shared/SectionContainer';

export default function DestinationsSection({ heading, destinations }) {
  return (
    <section className="tw-section">
      <div className="max-w-7xl mx-auto">
        <h3 className="tw-section-heading">{heading}</h3>
        <GridList>
          {destinations.map((destination) => (
            <Card
              key={destination?._id}
              content={destination?.card}
              linkURL={`/destinations/${destination?.slug}`}
            />
          ))}
        </GridList>
      </div>
    </section>
  );
}
