import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import SectionHeading from '@/components/shared/SectionHeading';

export default function TestimonialsSection({ heading, testimonials }) {
  return (
    <section className="tw-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading className="text-center">{heading}</SectionHeading>

        {/* <TestimonialsSlider testimonials={testimonials} /> */}
      </div>
    </section>
  );
}
