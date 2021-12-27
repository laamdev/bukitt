import FeaturedDestinationsList from '@/components/home/featuredDestinations/List';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function Section({ heading, featuredDestinations }) {
  return (
    <SectionWrapper>
      <h3 className="tw-section-heading text-center">{heading}</h3>

      <FeaturedDestinationsList featuredDestinations={featuredDestinations} />
    </SectionWrapper>
  );
}
