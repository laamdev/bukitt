import Item from '@/components/experience/itinerary/Item';

export default function List({ itinerary }) {
  return (
    <ul className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-24 pl-4">
      {itinerary.map((item) => (
        <Item key={item.day} item={item} />
      ))}
    </ul>
  );
}
