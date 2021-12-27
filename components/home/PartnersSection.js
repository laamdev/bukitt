import PartnersSlider from '@/components/home/PartnersSlider';
import SeactionHeading from '@/components/shared/SectionHeading';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function PartnersSection({ heading, partners }) {
  return (
    <SectionWrapper>
      <SeactionHeading>{heading}</SeactionHeading>
      <PartnersSlider partners={partners} />
    </SectionWrapper>
  );
}
