import Image from 'next/image';
import Link from 'next/link';

import Title from '@/components/shared/card/Title';

import { urlForImage } from '@/lib/sanity';

export default function Card({ destination }) {
  return (
    <li className="relative">
      <Link href={`/destinations/${destination?.slug}`}>
        <a className="relative">
          <div className="relative group block w-full aspect-w-3 aspect-h-4 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary overflow-hidden rounded shadow ">
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
            <div className="absolute inset-0 bg-gray-300 opacity-100 group-hover:opacity-0 tw-transition mix-blend-multiply rounded" />
            <div className="absolute flex flex-col space-y-3 sm:space-y-6 justify-center items-center px-3 sm:px-6 text-center">
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
