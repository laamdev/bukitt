import Image from 'next/image';
import { useRouter } from 'next/router';

import { urlForImage } from '@/lib/sanity';
import TextBody from '@/components/shared/TextBody';

export default function Hero({ hero }) {
  const router = useRouter();

  return (
    <div className="relative bg-gray-100 pb-32 shadow-xl sm:rounded-2xl sm:overflow-hidden">
      <div className="w-full h-full z-0">
        {hero?.coverImage && (
          <Image
            className="grayscale"
            src={urlForImage(hero?.coverImage).url()}
            alt={hero?.coverImage?.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        )}
        <div className="absolute inset-0 bg-dark opacity-90 mix-blend-hard-light" />

        <header className="relative py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-lg mx-auto text-white space-y-3">
              {router.route === '/' ? (
                <Image
                  src="/logos/rectangle.svg"
                  alt="Bukitt logo"
                  layout="responsive"
                  width={16}
                  height={9}
                />
              ) : (
                <div className="space-y-1.5 sm:space-y-3">
                  <h1 className="tw-heading z-10">{hero?.heading}</h1>
                  <div className="text-lg z-10">
                    <TextBody content={hero?.body} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
