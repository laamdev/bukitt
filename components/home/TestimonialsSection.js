import TestimonialsList from '@/components/home/TestimonialsList';

export default function TestimonialsSection({ heading, testimonials }) {
  return (
    <section className="max-w-4xl mx-auto space-y-6 sms:space-y-12">
      <TestimonialsList testimonials={testimonials} />
    </section>
  );
}
