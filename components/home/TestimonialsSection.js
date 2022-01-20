import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import SectionHeading from '@/components/shared/SectionHeading';

export default function TestimonialsSection({ heading, testimonials }) {
  return (
    <section className="tw-section">
      <div className="max-w-6xl mx-auto">
        <SectionHeading passedClassName="text-center">{heading}</SectionHeading>

        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </section>
  );
}
