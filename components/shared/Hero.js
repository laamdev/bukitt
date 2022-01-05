import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import ButtonLink from '@/components/shared/ButtonLink';
import ButtonDownload from '@/components/shared/ButtonDownload';

export default function Hero({ hero, guideURL }) {
  return (
    <div className="relative mt-6">
      <div className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={urlForImage(hero?.coverImage).width(1920).height(1080).url()}
              alt={hero?.heading}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              priority
              className="grayscale"
            />
            <div className="absolute inset-0 bg-dark mix-blend-hard-light" />
          </div>

          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-24 lg:px-8">
            <h1 className="flex flex-col text-center text-4xl uppercase font-extrabold tracking-tight sm:text-5xl lg:text-9xl font-mono text-white bg-gradient-to-b from-white to-paradiso-400 text-transparent bg-clip-text">
              <span>{hero?.heading}</span>
            </h1>

            <div className="mt-3 max-w-lg mx-auto text-center text-2xl text-white sm:max-w-3xl">
              {hero?.body}
            </div>

            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-12 space-y-6 sm:space-y-0 justify-center mt-12">
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
