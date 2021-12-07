import TeamMemberCard from '@/components/about/TeamMemberCard';

export default function TeamList({ teamSection }) {
  return (
    <section className="space-y-3 sm:space-y-6">
      <div className="tw-subheading text-center">{teamSection.heading}</div>
      <ul
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-x-24 sm:gap-y-24 px-3 sm:px-0"
        role="list"
      >
        {teamSection.team.map((teamMember) => (
          <TeamMemberCard key={teamMember.name} teamMember={teamMember} />
        ))}
      </ul>
    </section>
  );
}
