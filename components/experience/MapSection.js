import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function MapSection({ heading, body, image }) {
  return (
    <section className="flex flex-col-reverse space-y-12 space-y-reverse sm:flex-row sm:space-y-0 sm:space-x-24 items-center text-center sm:text-left">
      <div className="relative w-full sm:w-2/5 bg-white shadow-lg rounded-lg">
        {image && (
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            alt={image.alt}
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
            className="rounded-lg"
          />
        )}
      </div>

      <div className="w-full sm:w-3/5 space-y-3">
        <h3 className="tw-subheading">{heading}</h3>
        <div>
          <TextBody content={body} />
        </div>
      </div>
    </section>
  );
}
