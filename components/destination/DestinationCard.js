import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';

export default function DestinationCard({ destination }) {
  return (
    <li className="shadow-xl rounded-2xl col-span-1">
      <Link href={`/destinations/${destination?.slug}`}>
        <a>
          <div className="relative group bg-neutral-100 overflow-hidden rounded-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100 focus-within:ring-brand">
            {destination?.card?.image && (
              <Image
                src={urlForImage(destination?.card?.image)
                  .width(1536)
                  .height(2048)
                  .url()}
                alt={destination?.card?.title}
                layout="responsive"
                width={3}
                height={4}
                objectFit="cover"
                className="group-hover:scale-105 tw-transition rounded-2xl"
              />
            )}
            <Overlay />

            <div className="tw-center text-center w-full px-1.5 sm:px-2 lg:px-3">
              <h3 className="text-2xl md:text-4xl lg:text-5xl text-white font-mono font-medium uppercase group-hover:scale-95 tw-transition break-words">
                {destination?.card?.title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
