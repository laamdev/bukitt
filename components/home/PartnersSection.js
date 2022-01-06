import PartnersSlider from '@/components/home/PartnersSlider';
import SectionContainer from '@/components/shared/SectionContainer';

export default function PartnersSection({ heading, partners }) {
  return (
    <SectionContainer heading={heading}>
      <PartnersSlider partners={partners} />
    </SectionContainer>
  );
}
