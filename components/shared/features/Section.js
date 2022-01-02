import FeaturesList from '@/components/shared/features/List';

export default function Section({ heading, features }) {
  return (
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h3 className="tw-section-heading">{heading}</h3>
      <FeaturesList features={features} />
    </div>
  );
}
