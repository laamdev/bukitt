import PartnersSlider from '@/components/home/PartnersSlider';
import SectionContainer from '@/components/shared/SectionContainer';

export default function PartnersSection({ heading, partners }) {
  return (
    <SectionContainer>
      <h3 className="tw-section-heading text-center">{heading}</h3>
      <PartnersSlider partners={partners} />
    </SectionContainer>
  );
}
