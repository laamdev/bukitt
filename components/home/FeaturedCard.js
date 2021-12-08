import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function FeaturedCard({ name, slug, location, thumbnail }) {
  return (
    <li className="col-span-1 text-center">
      <Link href={`/destinations/${slug}`}>
        <a>
          {thumbnail && (
            <div className="relative w-28 h-44 sm:w-52 sm:h-80 mx-auto hover:scale-95 tw-transition">
              <Image
                className="rounded-full z-0"
                src={urlForImage(thumbnail).url()}
                layout="fill"
                objectFit="cover"
                alt={name}
              />
              <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tw-card-title z-10 bg-gray-100 w-full items-center justify-center">
                <div>{name}</div>
              </div>
            </div>
          )}
        </a>
      </Link>
    </li>
  );
}
