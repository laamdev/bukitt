import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';
import { currentMonth } from '@/data/navigation';

import ButtonLink from '@/components/shared/buttons/ButtonLink';
import FeaturedExperienceTitle from '@/components/home/featuredExperience/Title';
import FeaturedExperienceTagline from '@/components/home/featuredExperience/Tagline';
import FeaturedExperienceBody from '@/components/home/featuredExperience/Body';

export default function Card({ experience, body }) {
  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
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
            <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 text-center text-white">
            <div>
              <FeaturedExperienceTagline>
                {currentMonth}
              </FeaturedExperienceTagline>
              <FeaturedExperienceTitle>
                {experience?.hero?.heading}
              </FeaturedExperienceTitle>
            </div>
            <FeaturedExperienceBody>{body}</FeaturedExperienceBody>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <ButtonLink
                btnLinkText="Explore"
                btnURL={`experiences/${experience.slug}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
