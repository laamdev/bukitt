import SectionContainer from '@/components/shared/SectionContainer';
import ItineraryList from '@/components/experience/itinerary/ItineraryList';

export default function ItinerarySection({ heading, itinerary }) {
  return (
    <SectionContainer heading={heading}>
      <ItineraryList itinerary={itinerary} />
    </SectionContainer>
  );
}
