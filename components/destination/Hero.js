import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function Hero({ hero }) {
  return (
    <div className="relative bg-gray-200 shadow-xl sm:rounded-2xl sm:overflow-hidden">
      <div className="relative w-full h-full pb-32 z-0">
        {hero?.coverImage && (
          <Image
            src={urlForImage(hero?.coverImage).url()}
            alt={hero?.coverImage?.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />

        <header className="relative py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-3xl mx-auto text-center text-white space-y-3">
              <h1 className="tw-heading z-10">{hero?.heading}</h1>
              <div className="tw-body z-10">
                <TextBody content={hero?.body} />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
