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
        <div className="flex flex-col space-y-2 sm:space-y-3 w-fit-content -mt-3 bg-gray-100 rounded-lg shadow-md py-1 sm:py-2 px-3 sm:px-6">
          <div className="flex flex-col pb-2 sm:pb-3 border-b-2 border-gray-200">
            <span className="tw-card-title">{teamMember.name}</span>
            <span className="tw-card-subtitle">{teamMember.role}</span>
          </div>

          <div className="flex flex-col space-y-1 sm:space-y-2">
            <div className="flex flex-col">
              <span className="tw-sublabel">Recently checked off</span>
              <span className="tw-label">{teamMember.recentTrip}</span>
            </div>
            <div className="flex flex-col">
              <span className="tw-sublabel">Next on their Bukitt list</span>
              <span className="tw-label">{teamMember.futureTrip}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
