import FeaturedDestinationCard from '@/components/destination/Card';

export default function List({ featuredDestinations }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {featuredDestinations.map((destination, idx) => (
        <FeaturedDestinationCard key={idx} destination={destination} />
      ))}
    </ul>
  );
}
