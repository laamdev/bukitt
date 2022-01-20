import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import Body from '@/components/shared/Body';

export default function AboutSection({ heading, body, image }) {
  return (
    <section className="tw-section">
      <div className="max-w-6xl mx-auto flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-24">
        <div className="w-full sm:w-1/2">
          <h3 className="tw-section-heading mb-6">{heading}</h3>
          <Body>{body}</Body>
        </div>

        <div className="w-full sm:w-1/2 rounded-2xl shadow">
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
      </div>
    </section>
  );
}
