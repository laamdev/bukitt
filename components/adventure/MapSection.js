import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function MapSection({ heading, body, image }) {
  return (
    <section className="flex flex-col-reverse space-y-12 space-y-reverse sm:flex-row sm:space-y-0 sm:space-x-24 items-center text-center sm:text-left">
      <div className="w-full sm:w-1/2 bg-gray-100">
        {image && (
          <Image
            src={urlForImage(image).url()}
            alt={image.alt}
            layout="responsive"
            width={4}
            height={3}
            objectFit="cover"
          />
        )}
      </div>

      <div className="w-full sm:w-1/2 space-y-3">
        <h3 className="tw-subheading">{heading}</h3>
        <div>
          <TextBody content={body} />
        </div>
      </div>
    </section>
  );
}
