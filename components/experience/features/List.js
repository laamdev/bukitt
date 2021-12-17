import Item from '@/components/experience/features/Item';

export default function List({ features }) {
  return (
    <ul className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-24 pl-4">
      {features.map((feature) => (
        <Item key={feature.name} feature={feature} />
      ))}
    </ul>
  );
}
