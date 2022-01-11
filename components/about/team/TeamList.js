import TeamCard from '@/components/about/team/TeamCard';

export default function TeamList({ team }) {
  return (
    <ul
      role="list"
      className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
    >
      {team.map((teamMember) => (
        <TeamCard key={teamMember._idx} teamMember={teamMember} />
      ))}
    </ul>
  );
}
