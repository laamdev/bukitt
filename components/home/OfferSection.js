import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import InternalLink from '@/components/shared/InternalLink';

export default function OfferSection({
  heading,
  firstImage,
  firstLink,
  secondImage,
  secondLink,
}) {
  return (
    <section className="max-w-3xl mx-auto space-y-6 sm:space-y-12">
      <div className="tw-subheading text-center">{heading}</div>

      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
        <div className="w-full sm:w-1/2 h-full">
          <div className="relative aspect-w-3 aspect-h-4 group">
            <div>
              <Image
                src={urlForImage(firstImage).url()}
                alt={firstImage.alt}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-100 tw-transition mix-blend-multiply" />
            </div>

            <div className="absolute flex flex-col space-y-3 sm:space-y-6 justify-center items-center px-3 sm:px-6 text-center">
              <div>
                <h3 className="tw-subheading text-white">Adventure Packages</h3>
              </div>
              <div>
                <Link href={`/${firstLink}`}>
                  <a>
                    <InternalLink label="Explore" link="adventures" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 h-full">
          <div className="relative aspect-w-3 aspect-h-4 group">
            <div>
              <Image
                src={urlForImage(secondImage).url()}
                alt={secondImage.alt}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-100 tw-transition mix-blend-multiply" />
            </div>

            <div className="absolute flex flex-col space-y-3 sm:space-y-6 justify-center items-center px-3 sm:px-6 text-center">
              <div>
                <h3 className="tw-subheading text-white">Tailored Trips</h3>
              </div>

              <div>
                <Link href={`/${secondLink}`}>
                  <a>
                    <InternalLink label="Explore" link="adventures" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}