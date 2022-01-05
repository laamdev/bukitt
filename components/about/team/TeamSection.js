import List from '@/components/about/team/TeamList';

export default function Section({ heading, team }) {
  return (
    <section className="tw-section">
      <h3 className="tw-section-heading text-center">{heading}</h3>
      <List team={team} />
    </section>
  );
}
