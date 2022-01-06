import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function HighlightCard({ highlight }) {
  return (
    <li className="col-span-1 flex flex-col space-y-2">
      {highlight?.image && (
        <div className="relative aspect-square bg-gray-100 mx-auto w-full rounded-2xl shadow">
          <Image
            src={urlForImage(highlight?.image).width(1080).height(1080).url()}
            alt={highlight?.image.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl"
          />
        </div>
      )}

      <h4 className="tw-card-title">{highlight?.title}</h4>

      <div className="tw-body">
        <TextBody content={highlight?.body} />
      </div>
    </li>
  );
}
