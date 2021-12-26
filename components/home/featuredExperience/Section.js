import FeaturedExperienceCard from '@/components/home/featuredExperience/Card';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Section({ heading, body, featuredExperience }) {
  return (
    <SectionWrapper>
      <SectionHeading>{heading}</SectionHeading>

      <FeaturedExperienceCard body={body} experience={featuredExperience} />
    </SectionWrapper>
  );
}
