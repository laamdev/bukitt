import PartnersSlider from '@/components/home/PartnersSlider';
import SectionHeading from '@/components/shared/SectionHeading';

export default function PartnersSection({ heading, partners }) {
  return (
    <section className="tw-section max-w-7xl mx-auto">
      <SectionHeading passedClassName="text-center">{heading}</SectionHeading>
      <PartnersSlider partners={partners} />
    </section>
  );
}
