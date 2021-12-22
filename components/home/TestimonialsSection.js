import TestimonialsList from '@/components/home/TestimonialsList';
import SectionHeading from '../shared/SectionHeading';

export default function TestimonialsSection({ heading, testimonials }) {
  return (
    <section className="max-w-3xl mx-auto space-y-6 sms:space-y-12">
      <SectionHeading>{heading}</SectionHeading>
      <TestimonialsList testimonials={testimonials} />
    </section>
  );
}
