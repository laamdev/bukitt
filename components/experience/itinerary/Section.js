import SectionContainer from '@/components/shared/SectionContainer';
import DisclosureList from '@/components/experience/itinerary/DisclosureList';

export default function Section({ heading, itinerary }) {
  return (
    <SectionContainer heading={heading}>
      <DisclosureList itinerary={itinerary} />
    </SectionContainer>
  );
}
