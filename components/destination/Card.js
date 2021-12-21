import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function DestinationCard({ destination }) {
  console.log(JSON.stringify(destination, null, 2));

  return (
    <li className="relative text-center">
      <Link href={`/destinations/${destination?.slug}`}>
        <a>
          <div className="group block w-full aspect-w-10 aspect-h-10 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary overflow-hidden rounded-lg shadow-lg">
            {destination?.card?.image && (
              <Image
                src={urlForImage(destination?.card?.image)
                  .width(1080)
                  .height(1080)
                  .url()}
                alt={destination?.card?.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 tw-transition"
              />
            )}
          </div>

          <div className="tw-card-title mt-2">
            <span>{destination?.card?.title}</span>
          </div>
        </a>
      </Link>
    </li>
  );
}
