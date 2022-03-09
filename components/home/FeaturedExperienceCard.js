import Image from 'next/image';
import Link from 'next/link';

import Overlay from '@/components/shared/image/Overlay';

export default function FeaturedExperienceCard({ experience }) {
  return (
    <div className="mx-auto max-w-5xl">
      <Link href={`experiences/${experience.slug}`} scroll={false}>
        <a>
          <div className="group overflow-hidden rounded-2xl bg-slate-100 shadow-md focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-within:ring-offset-slate-100">
            <Image
              src={urlForImage(experience?.hero?.coverImage)
                .width(1920)
                .height(1080)
                .url()}
              alt={experience?.hero?.coverImage?.alt}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              objectPosition="center"
              className="tw-transition rounded-2xl group-hover:scale-105"
            />
            <Overlay />

            <div className="tw-center flex w-full flex-col items-center px-1.5 py-3 text-center sm:px-3 sm:py-6">
              {/* <h4 className="text-base sm:text-lg tracking-widest text-white font-medium border-b-2 border-slate-300">
                {currentMonth}
              </h4> */}
              <h3 className="tw-transition mt-1.5 font-mono text-2xl font-bold uppercase text-white group-hover:scale-95 sm:mt-3 sm:text-6xl lg:text-8xl">
                {experience?.hero?.heading}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
