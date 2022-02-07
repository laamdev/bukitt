import ExperienceCard from '@/components/destination/ExperienceCard';
import SectionHeading from '@/components/shared/SectionHeading';

export default function ExperienceSection({ heading, experience }) {
  return (
    <section className="tw-section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading className="text-center">{heading}</SectionHeading>
        <div className="mx-auto max-w-5xl">
          <ExperienceCard
            key={experience?._id}
            content={experience?.card}
            linkURL={`/experiences/${experience?.slug}`}
          />
        </div>
      </div>
    </section>
  );
}
