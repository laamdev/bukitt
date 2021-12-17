import List from '@/components/experience/features/List';

export default function Section({ heading, features }) {
  return (
    <section className="space-y-12">
      <h2 className="tw-subheading text-center">{heading}</h2>
      <List features={features} />
    </section>
  );
}
