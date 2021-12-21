import CardFeatured from '@/components/destination/CardFeatured';
import FeaturedList from '@/components/home/FeaturedList';

export default function FeaturedSection() {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-12">
      <h2 className="tw-subheading text-center">
        {homeData?.featuredSection?.heading}
      </h2>
      <FeaturedList>
        {homeData?.featured.map((destination) => (
          <CardFeatured
            key={destination?.card?.title}
            title={destination?.card?.title}
            slug={destination?.slug}
            location={destination?.card?.location}
            image={destination?.card?.image}
          />
        ))}
      </FeaturedList>
    </div>
  );
}
