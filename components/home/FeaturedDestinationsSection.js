import SectionHeading from '@/components/shared/SectionHeading';
import BtnNav from '@/components/shared/buttons/BtnNav';
import FeaturedDestinationCard from '@/components/shared/FeaturedDestinationCard';

export default function FeaturedDestinationsSection({
  heading,
  featuredDestinations,
}) {
  return (
    <section className="tw-section bg-slate-100">
      <SectionHeading className="text-center">{heading}</SectionHeading>
      <ul
        role="list"
        className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-x-12"
      >
        {featuredDestinations.map((destination) => (
          <FeaturedDestinationCard
            key={destination?._id}
            content={destination?.card}
            linkURL={`destinations/${destination?.slug}`}
          />
        ))}
      </ul>

      <div className="mt-6 flex justify-center sm:mt-8 lg:mt-10">
        <BtnNav btnLinkText="All Destinations" btnURL="destinations" primary />
      </div>
    </section>
  );
}
