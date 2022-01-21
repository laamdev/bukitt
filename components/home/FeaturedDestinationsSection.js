import SectionHeading from '@/components/shared/SectionHeading';
import BtnPrimary from '@/components/shared/buttons/BtnPrimary';
import FeaturedDestinationCard from '@/components/shared/FeaturedDestinationCard';

export default function FeaturedDestinationsSection({
  heading,
  featuredDestinations,
}) {
  return (
    <section className="tw-section max-w-full mx-auto">
      <SectionHeading passedClassName="text-center">{heading}</SectionHeading>
      <ul
        role="list"
        className="mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-x-12"
      >
        {featuredDestinations.map((destination) => (
          <FeaturedDestinationCard
            key={destination?._id}
            content={destination?.card}
            linkURL={`destinations/${destination?.slug}`}
          />
        ))}
      </ul>

      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
        <BtnPrimary btnLinkText="All Destinations" btnURL="destinations" />
      </div>
    </section>
  );
}
