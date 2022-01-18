import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function AccommodationSection({ heading, body, image }) {
  return (
    <section className="tw-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col space-y-12 sm:flex-row sm:space-y-0 sm:space-x-24 items-center text-center lg:text-left">
          <div className="w-full sm:w-1/2 space-y-3">
            <h3 className="tw-section-heading mb-4 text-center lg:text-left">
              {heading}
            </h3>
            <p className="">{body}</p>
          </div>

          <div className="w-full sm:w-1/2 bg-neutral-100 rounded-2xl shadow-xl">
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
