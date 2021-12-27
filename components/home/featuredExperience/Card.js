import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';
import { currentMonth } from '@/data/navigation';

import ButtonLink from '@/components/shared/buttons/ButtonLink';
import CardTitleLarge from '@/components/shared/CardTitleLarge';
import FeaturedExperienceTagline from '@/components/home/featuredExperience/Tagline';
import FeaturedExperienceBody from '@/components/home/featuredExperience/Body';

export default function Card({ experience, body }) {
  return (
    <div className="max-w-3xl mx-auto shadow rounded">
      <Link href={`experiences/${experience.slug}`}>
        <a>
          <div className="relative aspect-w-16 aspect-h-9 group">
            <Image
              src={urlForImage(experience?.hero?.coverImage)
                .width(1920)
                .height(1080)
                .url()}
              alt={experience?.hero?.coverImage?.alt}
              layout="fill"
              objectFit="cover"
              className="h-full w-full hover:scale-105 tw-transition"
            />
            <div className="absolute inset-0 bg-gray-300 opacity-100 group-hover:opacity-0 tw-transition mix-blend-multiply rounded" />
            <div className="absolute flex flex-col items-center justify-center px-3 sm:px-6 text-center">
              <h4 className="w-fit-content text-base sm:text-lg tracking-widest uppercase italic border-b-2 border-gray-300 text-white font-medium">
                {currentMonth}
              </h4>
              <h3 className="tw-card-title-lg text-white mt-1.5 sm:mt-3">
                {experience?.hero?.heading}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
