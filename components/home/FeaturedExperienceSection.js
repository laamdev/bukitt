import FeaturedExperienceCard from '@/components/home/FeaturedExperienceCard';
import SectionContainer from '@/components/shared/SectionContainer';

export default function FeaturedExperienceSection({
  heading,
  body,
  featuredExperience,
}) {
  return (
    <SectionContainer>
      <h3 className="tw-section-heading text-center">{heading}</h3>
      <FeaturedExperienceCard body={body} experience={featuredExperience} />
    </SectionContainer>
  );
}
