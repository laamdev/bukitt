import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function TeamMemberCard({ teamMember }) {
  return (
    <li className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col">
      <div>
        <Image
          src={urlForImage(teamMember.profilePicture).url()}
          alt={teamMember.profilePicture.alt}
          layout="responsive"
          width={1}
          height={1}
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </div>

      <div className="self-center z-10 text-center space-y-1 sm:space-y-2">
        <div className="w-fit-content -mt-3 bg-gray-100 rounded-lg shadow text-center tw-card-title px-4 sm:px-6 lg:px-8">
          {teamMember.name}
        </div>
        <div className="text-base sm:text-lg">{teamMember.role}</div>
      </div>

      <div className="self-center text-center mt-3 sm:mt-6 space-y-1.5 sm:space-y-3">
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm">Recently checked off</span>
          <span className="font-bold text-sm sm:text-base uppercase">
            {teamMember.recentTrip}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm">Next on their Bukitt list</span>
          <span className="font-bold text-sm sm:text-base uppercase">
            {teamMember.futureTrip}
          </span>
        </div>
      </div>
    </li>
  );
}
