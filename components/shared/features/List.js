import FeaturesCard from '@/components/shared/features/FeaturesCard';

export default function List({ features }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
      {features.map((feature, idx) => (
        <FeaturesCard key={idx} feature={feature} />
      ))}
    </div>
  );
}
