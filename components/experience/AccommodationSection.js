import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function AccommodationSection({ heading, body, image }) {
  return (
    <section className="flex space-x-24 text-right">
      <div className="w-full sm:w-1/2 space-y-3">
        <h3 className="tw-section-heading">{heading}</h3>
        <TextBody content={body} />
      </div>

      <div className="relative aspect-square w-full sm:w-1/2 bg-gray-100 rounded-2xl shadow">
        {image && (
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            alt={image.alt}
            layout="fill"
            className="rounded-2xl"
          />
        )}
      </div>
    </section>
  );
}
