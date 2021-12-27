import List from '@/components/experience/destinations/List';

export default function DestinationsSection({ heading, destinations }) {
  return (
    <section className="space-y-6 sm:space-y-12">
      <h3 className="tw-section-heading text-center">{heading}</h3>

      <List destinations={destinations} />
    </section>
  );
}
