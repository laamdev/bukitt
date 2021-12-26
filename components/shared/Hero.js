import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import HeroHeading from '@/components/shared/HeroHeading';
import HeroTagline from '@/components/shared/HeroTagline';
import HeroBody from '@/components/shared/HeroBody';
import ButtonLink from '@/components/shared/buttons/ButtonLink';
import ButtonDownload from '@/components/shared/buttons/ButtonDownload';
import Divider from '@/components/shared/Divider';

export default function Hero({ hero, guideURL }) {
  return (
    <div className="relative bg-gray-100 shadow-xl sm:overflow-hidden">
      <div className="relative w-full h-full px-6 pb-32 z-0">
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

        <header className="relative space-y-6 sm:space-y-6 py-6 sm:py-12">
          <div className="max-w-4xl mx-auto text-white text-left sm:text-center">
            <div className="flex flex-col space-y-6">
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
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center items-center space-y-3 sm:space-y-0 sm:space-x-24">
            {hero?.callToAction && (
              <ButtonLink
                btnLinkText={hero?.callToAction?.linkText}
                btnURL={hero?.callToAction?.url}
              />
            )}
            {guideURL && (
              <ButtonDownload btnLinkText="Download Guide" btnURL={guideURL} />
            )}
          </div>
        </header>
      </div>
    </div>
  );
}
