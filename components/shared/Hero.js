import Image from 'next/image';
import { IoPinOutline } from 'react-icons/io5';

import { urlForImage } from '@/lib/sanity';

import BtnNav from '@/components/shared/buttons/BtnNav';
import BtnDownload from '@/components/shared/buttons/BtnDownload';
import HeroOverlay from '@/components/shared/overlays/HeroOverlay';

export default function Hero({ hero, guideURL, location, category, page }) {
  return (
    <section className="relative rounded-2xl shadow-xl">
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
              className="grayscale rounded-2xl"
            />
          )}
          <HeroOverlay />
        </div>

        <div className="max-w-6xl mx-auto relative px-1 sm:px-3 py-12 sm:py-14 lg:py-16 text-center">
          <div className="text-brand-200 text-sm md:text-lg lg:text-xl font-mono font-thin uppercase tracking-widest">
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

          <h1 className="flex flex-col mt-1 text-5xl sm:text-7xl lg:text-9xl font-bold font-mono tracking-tight uppercase text-white">
            {hero?.heading}
          </h1>

          <p className="max-w-lg lg:max-w-3xl mx-auto mt-3 text-xl md:text-2xl lg:text-3xl text-white opacity-80">
            {hero?.body}
          </p>

          <div
            className={`flex flex-col sm:flex-row space-x-0 sm:space-x-12 space-y-6 sm:space-y-0 justify-center items-center mt-6 lg:mt-12 ${
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
