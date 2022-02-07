import FeaturesCard from '@/components/shared/features/FeaturesCard';
import SectionHeading from '@/components/shared/SectionHeading';

export default function FeaturesSection({ heading, features }) {
  return (
    <section className="tw-section">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <SectionHeading className="text-center">{heading}</SectionHeading>

        <ul
          role="list"
          className="mt-24 grid grid-cols-1 gap-y-24 gap-x-8 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <FeaturesCard key={feature?.title} feature={feature} />
          ))}
        </ul>
      </div>
    </section>
  );
}
