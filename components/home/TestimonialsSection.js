import SectionContainer from '@/components/shared/SectionContainer';
import TestimonialsList from '@/components/home/TestimonialsList';

export default function TestimonialsSection({ heading, testimonials }) {
  return (
    <SectionContainer heading={heading}>
      <div className="max-w-5xl mx-auto">
        <TestimonialsList testimonials={testimonials} />
      </div>
    </SectionContainer>
  );
}
