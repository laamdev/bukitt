import TeamCard from '@/components/about/team/TeamCard';

export default function List({ team }) {
  return (
    <ul
      role="list"
      className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
    >
      {team.map((teamMember) => (
        <TeamCard key={teamMember._id} teamMember={teamMember} />
      ))}
    </ul>
  );
}
