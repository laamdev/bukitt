import FeaturesCard from '@/components/shared/features/FeaturesCard';

export default function FeaturesSection({ heading, features }) {
  return (
    <section className="tw-section">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h3 className="tw-section-heading">{heading}</h3>

        <ul
          role="list"
          className="grid grid-cols-1 gap-y-24 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 mt-24"
        >
          {features.map((feature) => (
            <FeaturesCard key={feature._key} feature={feature} />
          ))}
        </ul>
      </div>
    </section>
  );
}
