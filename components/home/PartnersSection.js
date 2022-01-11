import PartnersSlider from '@/components/home/PartnersSlider';
import SectionContent from '@/components/shared/SectionContent';
import SectionHeading from '@/components/shared/SectionHeading';

export default function PartnersSection({ heading, partners }) {
  return (
    <section className="tw-section max-w-7xl mx-auto">
      <h3 className="tw-section-heading">{heading}</h3>
      <PartnersSlider partners={partners} />
    </section>
  );
}
