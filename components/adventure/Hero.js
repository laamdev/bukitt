import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';
import InternalLink from '@/components/shared/InternalLink';

export default function Hero({ heading, tagline, body, coverImage }) {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
        <div className="w-full h-full z-0">
          {coverImage && (
            <Image
              src={urlForImage(coverImage).url()}
              layout="fill"
              objectFit="cover"
              quality={100}
              alt={coverImage.alt}
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

          <div className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl text-white">
            <TextBody content={body} />
          </div>

          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <InternalLink label="Bukitt Now" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
}
