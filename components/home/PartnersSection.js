import PartnersSlider from '@/components/home/PartnersSlider';

export default function PartnersSection({ heading, partners }) {
  return (
    <section className="space-y-6 sm:space-y-12">
      <h2 className="tw-subheading text-center">{heading}</h2>
      <PartnersSlider partners={partners} />
    </section>
  );
}
