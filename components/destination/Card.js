import Image from 'next/image';
import Link from 'next/link';

import Overlay from '@/components/shared/image/Overlay';

import { urlForImage } from '@/lib/sanity';

export default function Card({ destination }) {
  return (
    <li>
      <Link href={`/destinations/${destination?.slug}`}>
        <a>
          <div className="relative aspect-4/5 group bg-gray-100 overflow-hidden rounded shadow focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary">
            {destination?.card?.image && (
              <Image
                src={urlForImage(destination?.card?.image)
                  .width(1080)
                  .height(1350)
                  .url()}
                alt={destination?.card?.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 tw-transition"
              />
            )}
            <Overlay />

            <div className="tw-center flex flex-col text-center">
              <h3 className="font-mono font-bold uppercase text-white text-xl sm:text-2xl lg:text-3xl">
                {destination?.card?.title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
