import Image from 'next/image';
import { IoPinOutline } from 'react-icons/io5';

import { urlForImage } from '@/lib/sanity';

import ButtonLink from '@/components/shared/ButtonLink';
import ButtonDownload from '@/components/shared/ButtonDownload';

export default function Hero({ hero, guideURL, location, category }) {
  return (
    <div className="relative">
      <div className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-md sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            {hero?.coverImage && (
              <Image
                src={urlForImage(hero?.coverImage)
                  .width(1920)
                  .height(1080)
                  .url()}
                alt={hero?.coverImage.alt ? hero?.coverImage.alt : ''}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority
                className="grayscale"
              />
            )}
            <div className="absolute inset-0 bg-dark mix-blend-hard-light" />
          </div>

          <div className="max-w-6xl mx-auto relative px-4 py-12 sm:px-6 sm:py-24 lg:py-24 lg:px-8 text-center">
            <div className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-mono font-thin uppercase tracking-widest">
              <h2 className="flex justify-center">
                <span>{category}</span>
                {location && (
                  <>
                    <IoPinOutline className=" text-paradiso" />
                    <span>{location}</span>
                  </>
                )}
              </h2>
            </div>

            <h1 className="flex flex-col text-5xl sm:text-6xl lg:text-9xl uppercase font-extrabold tracking-tight font-mono text-white bg-gradient-to-b from-white to-paradiso-400 text-transparent bg-clip-text">
              <span>{hero?.heading}</span>
            </h1>

            <div className="mt-3 max-w-lg mx-auto text-2xl text-white sm:max-w-3xl">
              {hero?.body}
            </div>

            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-12 space-y-6 sm:space-y-0 justify-center items-center mt-6 lg:mt-12">
              <ButtonLink btnLinkText="Book Now" btnURL="enquiry-form" />
              {guideURL && (
                <ButtonDownload
                  btnLinkText="Download Guide"
                  btnURL={guideURL}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
