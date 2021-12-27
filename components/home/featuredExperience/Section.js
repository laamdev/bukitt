import FeaturedExperienceCard from '@/components/home/featuredExperience/Card';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function Section({ heading, body, featuredExperience }) {
  return (
    <SectionWrapper>
      <h3 className="tw-section-heading text-center">{heading}</h3>

      <FeaturedExperienceCard body={body} experience={featuredExperience} />
    </SectionWrapper>
  );
}
