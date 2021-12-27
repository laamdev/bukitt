import Card from '@/components/experience/destinations/Card';

export default function List({ destinations }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
    >
      {destinations.map((destination, idx) => (
        <Card key={idx} destination={destination} />
      ))}
    </ul>
  );
}
