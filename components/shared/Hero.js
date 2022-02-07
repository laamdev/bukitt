import Image from 'next/image';
import { IoPinOutline } from 'react-icons/io5';

import { urlForImage } from '@/lib/sanity';

import BtnNav from '@/components/shared/buttons/BtnNav';
import BtnDownload from '@/components/shared/buttons/BtnDownload';
import HeroOverlay from '@/components/shared/overlays/HeroOverlay';

export default function Hero({ hero, guideURL, location, category, page }) {
  return (
    <section className="relative mx-auto max-w-screen-2xl rounded-2xl px-4">
      <div className="sm:overflow-hidden">
        <div className="absolute inset-0">
          {hero?.coverImage && (
            <Image
              src={urlForImage(hero?.coverImage).width(1920).height(1080).url()}
              alt={hero?.coverImage.alt ? hero?.coverImage.alt : ''}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="rounded-2xl grayscale"
            />
          )}
          <HeroOverlay />
        </div>

        <div className="relative mx-auto max-w-6xl px-1 py-12 text-center sm:px-3 sm:py-14 lg:py-16">
          <div className="font-mono text-sm font-thin uppercase tracking-widest text-brand-200 md:text-lg lg:text-xl">
            <h2 className="flex justify-center">
              {hero?.tagline && <span>{hero?.tagline}</span>}
              {category && <span>{category}</span>}
              {location && (
                <>
                  <IoPinOutline className="text-white" />
                  <span>{location}</span>
                </>
              )}
            </h2>
          </div>

          <h1 className="mt-1 flex flex-col font-mono text-5xl font-bold uppercase tracking-tight text-white sm:text-7xl lg:text-9xl">
            {hero?.heading}
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-xl text-white opacity-80 md:text-2xl lg:max-w-3xl lg:text-3xl">
            {hero?.body}
          </p>

          <div
            className={`mt-6 flex flex-col items-center justify-center space-x-0 space-y-6 sm:flex-row sm:space-x-12 sm:space-y-0 lg:mt-12 ${
              page === 'inquiry' || page === 'blog' || page === 'about'
                ? 'hidden'
                : 'block'
            }`}
          >
            <BtnNav btnLinkText="Book Now" btnURL="inquiry-form" secondary />
            {guideURL && (
              <BtnDownload
                btnLinkText="Download Guide"
                btnURL={guideURL}
                secondary
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
