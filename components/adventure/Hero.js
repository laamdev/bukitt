import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';
import ButtonLink from '@/components/shared/ButtonLink';

export default function Hero({ heading, tagline, body, coverImage }) {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
        <div className="w-full h-full z-0">
          {coverImage && (
            <Image
              src={urlForImage(coverImage).url()}
              alt={coverImage?.alt}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
        </div>

        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h2 className="tw-tagline text-center font-medium tracking-tight text-white">
            {tagline}
          </h2>

          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white uppercase font-heading">
            {heading}
          </h1>

          <div className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
            <TextBody content={body} />
          </div>

          <div className="mt-10 flex justify-center">
            {/* <ButtonLink label="Bukitt Now" link="#" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
