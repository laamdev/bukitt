import ItineraryList from '@/components/experience/itinerary/ItineraryList';

export default function ItinerarySection({ heading, itinerary }) {
  return (
    <section className="tw-section">
      <div className="max-w-7xl mx-auto">
        <h3 className="tw-section-heading">{heading}</h3>
        <ItineraryList itinerary={itinerary} />
      </div>
    </section>
  );
}
