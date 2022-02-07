import GridList from '@/components/shared/list/GridList';
import ProductCard from '@/components/shared/ProductCard';
import SectionHeading from '@/components/shared/SectionHeading';

export default function DestinationsSection({ heading, destinations }) {
  return (
    <section className="tw-section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading className="text-center">{heading}</SectionHeading>
        <GridList>
          {destinations.map((destination) => (
            <ProductCard
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
