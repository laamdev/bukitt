import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function Hero({ hero }) {
  return (
    <div className="relative bg-dark pb-32 shadow-xl sm:rounded-2xl sm:overflow-hidden">
      <div className="w-full h-full z-0">
        {hero?.coverImage && (
          <>
            <Image
              src={urlForImage(hero?.coverImage).url()}
              alt={hero?.coverImage?.alt}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
          </>
        )}
      </div>

      <header className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl mx-auto text-center text-white space-y-3">
            <h1 className="tw-heading z-10">{hero?.heading}</h1>
            <div className="text-lg z-10">
              <TextBody content={hero?.body} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
