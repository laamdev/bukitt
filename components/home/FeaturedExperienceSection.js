import FeaturedExperienceCard from '@/components/home/FeaturedExperienceCard';
import SectionContainer from '@/components/shared/SectionContainer';

export default function FeaturedExperienceSection({
  heading,
  body,
  featuredExperience,
}) {
  return (
    <SectionContainer heading={heading}>
      <FeaturedExperienceCard body={body} experience={featuredExperience} />
    </SectionContainer>
  );
}
