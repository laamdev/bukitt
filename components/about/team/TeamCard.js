import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TripLabel from '@/components/about/team/TripLabel';
import TripValue from '@/components/about/team/TripValue';

export default function TeamCard({ teamMember }) {
  return (
    <li
      key={teamMember.name}
      className="pt-6 bg-gray-100 text-center rounded-2xl"
    >
      <div className="space-y-3 xl:space-y-6">
        <div className="space-y-3 xl:space-y-6 px-3 xl:px-6 ">
          <Image
            src={urlForImage(teamMember.profilePicture).url()}
            alt={teamMember.profilePicture.alt}
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
            objectPosition="center"
            className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          />
          <div>
            <div className="text-center font-medium text-lg leading-6 space-y-1">
              <h4 className="font-bold text-2xl">{teamMember.name}</h4>
              <p className="text-indigo-400">{teamMember.role}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between border-t-2 border-gray-300 py-6">
          <div className="w-1/2 px-3 xl:px-6 text-left">
            <TripLabel>Last</TripLabel>
            <TripValue>{teamMember.recentTrip}</TripValue>
          </div>
          <div className="w-1/2 px-3 xl:px-6 text-right">
            <TripLabel>Next</TripLabel>
            <TripValue>{teamMember.futureTrip}</TripValue>
          </div>
        </div>
      </div>
    </li>
  );
}
