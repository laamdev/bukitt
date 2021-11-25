import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function HighlightCard({ name, body, thumbnail }) {
  return (
    <li className="col-span-1 flex flex-col space-y-2">
      {thumbnail && (
        <div className="bg-gray-400 mx-auto w-full">
          <Image
            src={urlForImage(thumbnail).url()}
            layout="responsive"
            width={4}
            height={3}
            alt={name}
          />
        </div>
      )}

      <div className="tw-card-title">{name}</div>

      <div className="paragraph">
        <TextBody content={body} />
      </div>
    </li>
  );
}
