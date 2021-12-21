import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function AboutSection({ heading, body, image }) {
  return (
    <section className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-12 items-center text-left sm:text-right">
      <div className="w-full sm:w-3/5 space-y-3">
        <h3 className="tw-subheading">{heading}</h3>
        <div>
          <TextBody content={body} />
        </div>
      </div>

      <div className="w-full sm:w-2/5 rounded-lg shadow-lg">
        {image && (
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            alt={image.alt}
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
          />
        )}
      </div>
    </section>
  );
}
