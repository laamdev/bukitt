import SectionContainer from '@/components/shared/SectionContainer';
import TestimonialsList from '@/components/home/TestimonialsList';

export default function TestimonialsSection({ heading, testimonials }) {
  return (
    <SectionContainer>
      <h3 className="tw-section-heading text-center">{heading}</h3>

      <div className="max-w-5xl mx-auto">
        <TestimonialsList testimonials={testimonials} />
      </div>
    </SectionContainer>
  );
}
