import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import SectionHeading from '@/components/shared/SectionHeading';

export default function AccommodationSection({ heading, body, image }) {
  return (
    <section className="tw-section">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-12 text-center sm:flex-row sm:space-y-0 sm:space-x-24 lg:text-left">
          <div className="w-full space-y-3 sm:w-1/2">
            <SectionHeading>{heading}</SectionHeading>
            <p className="">{body}</p>
          </div>

          <div className="w-full rounded-2xl bg-slate-100 shadow-xl sm:w-1/2">
            {image && (
              <Image
                src={urlForImage(image).width(1080).height(1080).url()}
                alt={image.alt}
                layout="responsive"
                width={1}
                height={1}
                className="rounded-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
