import Image from 'next/image';
import { useRouter } from 'next/router';

import { urlForImage } from '@/lib/sanity';
import TextBody from '@/components/shared/TextBody';

export default function Hero({ hero }) {
  const router = useRouter();

  return (
    <div className="relative bg-gray-100 shadow-xl sm:rounded-2xl sm:overflow-hidden">
      <div className="relative w-full h-full pb-32 z-0">
        {hero?.coverImage && (
          <Image
            src={urlForImage(hero?.coverImage).width(1920).height(1080).url()}
            alt={hero?.coverImage?.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="grayscale"
          />
        )}
        <div className="absolute inset-0 bg-dark opacity-90 mix-blend-hard-light" />

        <header className="relative py-10">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-3xl mx-auto text-white space-y-3">
              {router.route === '/' ? (
                <div className="relative w-2/3 mx-auto">
                  <Image
                    src="/logos/rectangle.svg"
                    alt="Bukitt logo"
                    layout="responsive"
                    width={16}
                    height={9}
                  />
                </div>
              ) : (
                <div className="space-y-1.5 sm:space-y-3 py-12 text-center">
                  <h1 className="tw-heading z-10">{hero?.heading}</h1>
                  <div className="tw-body-hero z-10">
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
