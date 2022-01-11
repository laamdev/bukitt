import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function TeamCard({ teamMember }) {
  return (
    <li className="text-center">
      <div className="space-y-6">
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
        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3 className="font-bold text-xl">{teamMember?.name}</h3>
            <p className="text-brand-500 font-medium">{teamMember?.role}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
