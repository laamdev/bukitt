import TestimonialsSlider from '@/components/home/TestimonialsSlider';

export default function TestimonialsSection({ heading, testimonials }) {
  return (
    <section className="tw-section">
      <div className="max-w-6xl mx-auto">
        <h3 className="tw-section-heading">{heading}</h3>

        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </section>
  );
}
