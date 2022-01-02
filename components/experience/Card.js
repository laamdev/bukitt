import Image from 'next/image';
import Link from 'next/link';

import Overlay from '@/components/shared/image/Overlay';

import { urlForImage } from '@/lib/sanity';

export default function Card({ experience }) {
  return (
    <li>
      <Link href={`/experiences/${experience?.slug}`}>
        <a>
          <div className="relative aspect-4/5 group bg-gray-100 overflow-hidden rounded shadow focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary">
            {experience?.card?.image && (
              <Image
                src={urlForImage(experience?.card?.image)
                  .width(1080)
                  .height(1350)
                  .url()}
                alt={experience?.card?.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 tw-transition"
              />
            )}
            <Overlay />

            <div className="tw-center flex flex-col text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono uppercase text-white">
                {experience?.card?.title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
