import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import InternalLink from '@/components/shared/InternalLink';

export default function OfferSection({
  firstImage,
  firstLink,
  secondImage,
  secondLink,
}) {
  return (
    <section className="max-w-3xl flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 mx-auto">
      <div className="w-full sm:w-1/2 h-full">
        <div className="relative aspect-w-3 aspect-h-4 ">
          <Image
            src={urlForImage(firstImage).url()}
            alt={firstImage.alt}
            layout="fill"
            objectFit="cover"
          />

          <div className="absolute flex flex-col space-y-3 sm:space-y-6 justify-center items-center px-3 sm:px-6 text-center">
            <h3 className="tw-subheading text-white">Adventure Packages</h3>
            <InternalLink label="Explore" link="adventures" />
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 h-full">
        <div className="relative aspect-w-3 aspect-h-4 ">
          <Image
            src={urlForImage(secondImage).url()}
            alt={secondImage.alt}
            layout="fill"
            objectFit="cover"
          />

          <div className="absolute flex flex-col space-y-3 sm:space-y-6 justify-center items-center px-3 sm:px-6 text-center">
            <h3 className="tw-subheading text-white">Tailored Trips</h3>
            <InternalLink label="Explore" link="adventures" />
          </div>
        </div>
      </div>
    </section>
  );
}
