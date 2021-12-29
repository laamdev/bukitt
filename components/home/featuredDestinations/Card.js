import Image from 'next/image';
import Link from 'next/link';

import Overlay from '@/components/shared/image/Overlay';

import { urlForImage } from '@/lib/sanity';

export default function Card({ destination }) {
  return (
    <li>
      <Link href={`/destinations/${destination?.slug}`}>
        <a>
          <div className="relative aspect-4/5 group bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary overflow-hidden rounded shadow">
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
              <h3 className="tw-card-title-lg text-white">
                {destination?.card?.title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
