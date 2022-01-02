import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function MapSection({ heading, body, image }) {
  return (
    <section className="flex flex-col-reverse space-y-12 space-y-reverse sm:flex-row sm:space-y-0 sm:space-x-24 items-center text-center sm:text-left">
      <div className="relative aspect-square w-full sm:w-1/2 bg-gray-100 shadow rounded">
        {image && (
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded"
          />
        )}
      </div>

      <div className="w-full sm:w-1/2 space-y-3">
        <h3 className="tw-section-heading">{heading}</h3>
        <div className="tw-body">
          <TextBody content={body} />
        </div>
      </div>
    </section>
  );
}
