import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function CardFeatured({ title, slug, location, image }) {
  return (
    <li className="col-span-1 text-center">
      <Link href={`/destinations/${slug}`}>
        <a>
          {image && (
            <div className="relative w-28 h-44 sm:w-52 sm:h-80 mx-auto hover:scale-95 tw-transition rounded-full bg-gray-200">
              <Image
                className="rounded-full z-0"
                src={urlForImage(image).url()}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tw-card-title z-10 bg-gray-100 w-full items-center justify-center">
                <div>{title}</div>
              </div>
            </div>
          )}
        </a>
      </Link>
    </li>
  );
}
