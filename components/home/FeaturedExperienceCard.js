import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';
import { currentMonth } from '@/data/navigation';

import Overlay from '@/components/shared/image/Overlay';

export default function FeaturedExperienceCard({ experience }) {
  return (
    <div className="max-w-5xl mx-auto">
      <Link href={`experiences/${experience.slug}`}>
        <a>
          <div className="relative aspect-video group bg-gray-100 overflow-hidden rounded-2xl shadow focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-paradiso">
            <Image
              src={urlForImage(experience?.hero?.coverImage)
                .width(1920)
                .height(1080)
                .url()}
              alt={experience?.hero?.coverImage?.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="group-hover:scale-105 tw-transition rounded-2xl"
            />
            <Overlay />

            <div className="w-full flex flex-col items-center px-1.5 sm:px-3 py-3 sm:py-6 tw-center text-center">
              {/* <h4 className="text-base sm:text-lg tracking-widest text-white font-medium border-b-2 border-gray-300">
                {currentMonth}
              </h4> */}
              <h3 className="text-2xl sm:text-6xl lg:text-8xl text-white mt-1.5 sm:mt-3 font-mono font-bold uppercase group-hover:scale-95 tw-transition">
                {experience?.hero?.heading}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
