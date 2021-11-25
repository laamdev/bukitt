import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function Card({ name, slug, thumbnail }) {
  return (
    <li className="col-span-1 text-center">
      <Link href={`/adventures/${slug}`}>
        <a>
          {thumbnail && (
            <div className="w-56 h-80 relative mx-auto">
              <Image
                className="rounded-full "
                src={urlForImage(thumbnail).url()}
                layout="fill"
                objectFit="cover"
                alt={name}
              />
            </div>
          )}

          <div className="tw-card-title mt-2">{name}</div>
        </a>
      </Link>
    </li>
  );
}
