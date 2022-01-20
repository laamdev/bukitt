import DestinationCard from '@/components/shared/ProductCard';
import SectionHeading from '@/components/shared/SectionHeading';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';

export default function FeaturedDestinationsSection({
  heading,
  featuredDestinations,
}) {
  return (
    <section className="tw-section max-w-full mx-auto">
      <SectionHeading passedClassName="text-center">{heading}</SectionHeading>
      <ul
        role="list"
        className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-4"
      >
        {featuredDestinations.map((destination) => (
          <DestinationCard
            key={destination?._id}
            content={destination?.card}
            linkURL={`destinations/${destination?.slug}`}
          />
        ))}
      </ul>

      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
        <ButtonPrimary btnLinkText="Destinations" btnURL="destinations" />
      </div>
    </section>
  );
}
