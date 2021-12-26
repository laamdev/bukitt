import ExperienceFeaturesList from '@/components/experience/features/List';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Section({ heading, features }) {
  return (
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <SectionHeading>{heading}</SectionHeading>
      {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan
        in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id
        viverra nulla.
      </p> */}
      <ExperienceFeaturesList features={features} />
    </div>
  );
}
