import FeaturedExperienceCard from '@/components/home/featuredExperience/Card';
import SectionContainer from '@/components/shared/SectionContainer';

export default function Section({ heading, body, featuredExperience }) {
  return (
    <SectionContainer heading={heading}>
      <FeaturedExperienceCard body={body} experience={featuredExperience} />
    </SectionContainer>
  );
}
