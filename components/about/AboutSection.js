import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import Body from '@/components/shared/Body';
import SectionHeading from '@/components/shared/SectionHeading';

export default function AboutSection({ heading, body, image }) {
  return (
    <section className="tw-section">
      <div className="mx-auto flex max-w-6xl flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-24">
        <div className="w-full lg:w-1/2">
          <SectionHeading className="text-center lg:text-left">
            {heading}
          </SectionHeading>
          <Body className="text-center lg:text-left">{body}</Body>
        </div>

        <div className="w-full rounded-2xl shadow lg:w-1/2">
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
