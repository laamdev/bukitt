import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';
import { currentMonth } from '@/utils/data';

import BtnFeaturedExperience from '@/components/shared/buttons/BtnFeaturedExperience';
import SectionHeading from '@/components/shared/SectionHeading';

export default function FeaturedExperienceSection({
  heading,
  featuredExperience,
}) {
  return (
    <section className="tw-section max-w-7xl mx-auto">
      <SectionHeading passedClassName="text-center">{heading}</SectionHeading>
      <div className="bg-brand-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2 bg-neutral-50 lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="rounded-3xl shadow-2xl">
                <Image
                  src={urlForImage(featuredExperience?.hero?.coverImage)
                    .width(1080)
                    .height(1080)
                    .url()}
                  alt={featuredExperience?.hero?.coverImage?.alt}
                  layout="responsive"
                  width={1}
                  height={1}
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-brand-600 shadow-xl lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div
              className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-brand-400"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-brand-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>

            <div className="relative max-w-md mx-auto py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6 text-center lg:text-left">
              <div>
                <h5 className="text-base md:text-2xl text-white uppercase tracking-widest font-mono font-light opacity-80">
                  {currentMonth}
                </h5>
                <h4
                  className="text-4xl md:text-7xl font-mono font-medium uppercase text-white"
                  id="join-heading"
                >
                  {featuredExperience?.name}
                </h4>
              </div>
              <div className="mt-3">
                <p className="text-base md:text-2xl text-white">
                  {featuredExperience?.hero?.body}
                </p>
              </div>
              <div className="mt-6">
                <BtnFeaturedExperience
                  btnLinkText="Learn More"
                  btnURL={`experiences/${featuredExperience?.slug}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
