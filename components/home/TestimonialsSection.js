import TestimonialsList from '@/components/home/TestimonialsList';

export default function TestimonialsSection({ heading, testimonials }) {
  return (
    <section className="max-w-3xl mx-auto space-y-6 sms:space-y-12">
      <h3 className="tw-section-heading text-center">{heading}</h3>
      <TestimonialsList testimonials={testimonials} />
    </section>
  );
}
