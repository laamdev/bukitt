import List from '@/components/experience/itinerary/List';

export default function Section({ heading, itinerary }) {
  return (
    <section className="space-y-12">
      <h3 className="tw-section-heading text-center">{heading}</h3>

      <List itinerary={itinerary} />
    </section>
  );
}
