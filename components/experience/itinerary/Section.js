import List from '@/components/experience/itinerary/List';

export default function Section({ heading, itinerary }) {
  return (
    <section className="space-y-12">
      <h2 className="tw-subheading text-center">{heading}</h2>

      <List itinerary={itinerary} />
    </section>
  );
}
