import TeamList from '@/components/about/team/TeamList';

export default function TeamSection({ heading, team, body }) {
  return (
    <section className="tw-section">
      <h3 className="tw-section-heading">{heading}</h3>
      <TeamList team={team} />
    </section>
  );
}
