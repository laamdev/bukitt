import PartnersSlider from '@/components/home/PartnersSlider';
import SectionHeading from '@/components/shared/SectionHeading';

export default function PartnersSection({ heading, partners }) {
  return (
    <section className="tw-section mx-auto max-w-7xl">
      <SectionHeading className="text-center">{heading}</SectionHeading>
      <PartnersSlider partners={partners} />
    </section>
  );
}
