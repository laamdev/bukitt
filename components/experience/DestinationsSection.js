import DestinationCard from '@/components/destination/Card';

export default function DestinationsSection({ heading, destinations }) {
  return (
    <section className="space-y-6 sm:space-y-12 text-center">
      <h3 className="tw-subheading">{heading}</h3>

      <ul
        role="list"
        className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-24 sm:gap-y-12"
      >
        {destinations.map((destination, idx) => (
          <DestinationCard key={idx} destination={destination} />
        ))}
      </ul>
    </section>
  );
}
