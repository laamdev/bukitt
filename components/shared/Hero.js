import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import HeroHeading from '@/components/shared/HeroHeading';
import HeroBody from '@/components/shared/HeroBody';
import Divider from '@/components/shared/Divider';
import OverlayHero from '@/components/shared/image/OverlayHero';

export default function Hero({ hero }) {
  return (
    <div className="relative bg-dark shadow-xl sm:overflow-hidden">
      <div className="relative w-full h-full px-6 pb-32 z-0">
        {hero?.coverImage && (
          <>
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
            <OverlayHero />
          </>
        )}

        <header className="max-w-3xl mx-auto relative py-6 sm:py-12">
          <div className="flex flex-col space-y-6 text-white text-left sm:text-center">
            <div>
              <HeroHeading>{hero?.heading}</HeroHeading>
            </div>

            {hero?.body && (
              <>
                <div>
                  <Divider />
                </div>

                <HeroBody content={hero?.body} />
              </>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}
