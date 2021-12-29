import Image from 'next/image';
import Link from 'next/link';

import Title from '@/components/shared/card/Title';

import { urlForImage } from '@/lib/sanity';

export default function Card({ destination }) {
  return (
    <li>
      <Link href={`/destinations/${destination?.slug}`}>
        <a>
          <div className="relative aspect-square bg-gray-100 overflow-hidden rounded shadow focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary">
            {destination?.card?.image && (
              <Image
                src={urlForImage(destination?.card?.image)
                  .width(1080)
                  .height(1080)
                  .url()}
                alt={destination?.card?.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="hover:scale-105 tw-transition"
              />
            )}
          </div>
          <Title>{destination?.card?.title}</Title>
        </a>
      </Link>
    </li>
  );
}
