import PartnersSlider from '@/components/home/PartnersSlider';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function PartnersSection({ heading, partners }) {
  return (
    <SectionWrapper>
      <h3 className="tw-section-heading">{heading}</h3>
      <PartnersSlider partners={partners} />
    </SectionWrapper>
  );
}
