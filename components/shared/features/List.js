import FeaturesCard from '@/components/shared/features/Card';

export default function List({ features }) {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {features.map((feature, idx) => (
          <FeaturesCard key={idx} feature={feature} />
        ))}
      </div>
    </div>
  );
}
