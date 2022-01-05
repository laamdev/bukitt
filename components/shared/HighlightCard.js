import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';
import Title from '@/components/shared/card/Title';

export default function HighlightCard({ highlight }) {
  return (
    <li className="col-span-1 flex flex-col space-y-2">
      {highlight?.image && (
        <div className="relative aspect-square bg-gray-100 mx-auto w-full">
          <Image
            src={urlForImage(highlight?.image).width(1080).height(1080).url()}
            alt={highlight?.image.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )}

      <Title>{highlight?.title}</Title>

      <div className="tw-body">
        <TextBody content={highlight?.body} />
      </div>
    </li>
  );
}
