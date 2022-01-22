import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import PlaneArrivalIcon from '@/components/shared/icons/PlaneArrival';
import PlaneDepartureIcon from '@/components/shared/icons/PlaneDeparture';
import Divider from '@/components/shared/Divider';

export default function TeamCard({ teamMember }) {
  return (
    <li className="text-center">
      <div>
        <Image
          className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          src={urlForImage(teamMember?.profilePicture)
            .width(1080)
            .height(1080)
            .url()}
          alt={
            teamMember?.profilePicture?.alt
              ? teamMember?.profilePicture?.alt
              : ''
          }
          layout="responsive"
          width={1}
          height={1}
        />
      </div>

      <div className="mt-3">
        <div className="pb-3">
          <h4 className="font-bold text-2xl text-dark font-mono uppercase">
            {teamMember?.name}
          </h4>
          <p className="text-brand font-medium text-lg">{teamMember?.role}</p>
        </div>

        <div className="mx-auto w-full border-t border-neutral-300" />

        <div className="flex justify-around mt-6">
          <div className="w-1/2 flex flex-col items-center">
            <PlaneArrivalIcon passedClassName="w-6 h-6 fill-brand" />
            <span className="text-sm uppercase font-mono">
              {teamMember?.recentTrip}
            </span>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <PlaneDepartureIcon passedClassName="w-6 h-6 fill-brand" />
            <span className="text-sm uppercase font-mono">
              {teamMember?.futureTrip}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
