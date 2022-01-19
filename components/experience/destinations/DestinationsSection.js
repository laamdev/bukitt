import GridList from '@/components/shared/list/GridList';
import ProductCard from '@/components/shared/ProductCard';

export default function DestinationsSection({ heading, destinations }) {
  return (
    <section className="tw-section">
      <div className="max-w-7xl mx-auto">
        <h3 className="tw-section-heading">{heading}</h3>
        <GridList>
          {destinations.map((destination) => (
            <ProductCard
              key={destination?._id}
              content={destination?.card}
              linkURL={`destinations/${destination?.slug}`}
            />
          ))}
        </GridList>
      </div>
    </section>
  );
}
