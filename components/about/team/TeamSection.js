import SectionHeading from '@/components/shared/SectionHeading';
import TeamList from '@/components/about/team/TeamList';

export default function TeamSection({ heading, team, body }) {
  return (
    <section className="tw-section">
      <SectionHeading passedClassName="text-center">{heading}</SectionHeading>
      <TeamList team={team} />
    </section>
  );
}
