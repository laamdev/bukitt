import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';
import { currentMonth } from '@/data/navigation';

import Overlay from '@/components/shared/image/Overlay';

export default function Card({ experience, body }) {
  return (
    <div className="max-w-3xl mx-auto shadow rounded">
      <Link href={`experiences/${experience.slug}`}>
        <a>
          <div className="relative group aspect-video">
            <Image
              src={urlForImage(experience?.hero?.coverImage)
                .width(1920)
                .height(1080)
                .url()}
              alt={experience?.hero?.coverImage?.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="hover:scale-105 tw-transition"
            />
            <Overlay />

            <div className="w-full flex flex-col items-center px-1.5 sm:px-3 py-3 sm:py-6 tw-center text-center">
              <h4 className="text-base sm:text-lg tracking-widest uppercase italic text-white font-medium border-b-2 border-gray-300">
                {currentMonth}
              </h4>
              <h3 className="font-mono font-bold uppercase text-2xl sm:text-5xl lg:text-6xl text-white mt-1.5 sm:mt-3">
                {experience?.hero?.heading}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
