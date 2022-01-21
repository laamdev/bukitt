import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import SectionHeading from '@/components/shared/SectionHeading';

export default function MapSection({ heading, body, image }) {
  return (
    <section className="tw-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse space-y-12 space-y-reverse sm:flex-row sm:space-y-0 sm:space-x-24 items-center text-center lg:text-left">
          <div className="w-full sm:w-1/2 rounded-2xl shadow-md">
            {image && (
              <Image
                src={urlForImage(image).width(1080).height(1080).url()}
                alt={image.alt}
                layout="responsive"
                width={1}
                height={1}
                objectFit="cover"
                objectPosition="center"
                className="rounded-2xl"
              />
            )}
          </div>
          <div className="w-full sm:w-1/2 space-y-3">
            <SectionHeading>{heading}</SectionHeading>
            <p className="text-lg sm:text-2xl">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
