import PartnersSlider from '@/components/home/PartnersSlider';

export default function PartnersSection({ heading, partners }) {
  return (
    <section className="tw-section">
      <h3 className="tw-section-heading text-center">{heading}</h3>
      <PartnersSlider partners={partners} />
    </section>
  );
}
