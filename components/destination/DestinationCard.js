import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function DestinationCard({ name, slug, thumbnail, location }) {
  return (
    <li className="col-span-1 flex flex-col items-center text-center">
      <Link href={`/destinations/${slug}`}>
        <a>
          {thumbnail && (
            <div className="relative w-32 h-24 lg:w-80 lg:h-56 bg-gray-400 mx-auto">
              <Image
                src={urlForImage(thumbnail).url()}
                layout="fill"
                objectFit="cover"
                alt={name}
              />
            </div>
          )}

          <div className="tw-card-title mt-2">
            {name}, {location}
          </div>
        </a>
      </Link>
    </li>
  );
}
