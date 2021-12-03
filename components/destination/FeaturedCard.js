import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function FeaturedCard({ name, slug, location, thumbnail }) {
  return (
    <li className="col-span-1 text-center">
      <Link href={`/destinations/${slug}`}>
        <a>
          {thumbnail && (
            <div className="w-28 h-44 sm:w-52 sm:h-80 relative mx-auto">
              <Image
                className="rounded-full"
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
