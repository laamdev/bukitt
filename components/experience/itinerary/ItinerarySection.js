import ItineraryList from '@/components/experience/itinerary/ItineraryList';
import SectionHeading from '@/components/shared/SectionHeading';

export default function ItinerarySection({ heading, itinerary }) {
  return (
    <section className="tw-section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading className="text-center">{heading}</SectionHeading>
        <ItineraryList itinerary={itinerary} />
      </div>
    </section>
  );
}
