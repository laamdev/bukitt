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
          className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
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
          <h4 className="font-mono text-2xl font-bold uppercase text-dark">
            {teamMember?.name}
          </h4>
          <p className="text-lg font-medium text-brand">{teamMember?.role}</p>
        </div>

        <div className="mx-auto w-full border-t border-slate-300" />

        <div className="mt-6 flex justify-around">
          <div className="flex w-1/2 flex-col items-center">
            <PlaneArrivalIcon className="h-6 w-6 fill-brand" />
            <span className="font-mono text-sm uppercase">
              {teamMember?.recentTrip}
            </span>
          </div>
          <div className="flex w-1/2 flex-col items-center">
            <PlaneDepartureIcon className="h-6 w-6 fill-brand" />
            <span className="font-mono text-sm uppercase">
              {teamMember?.futureTrip}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
