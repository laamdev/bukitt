import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';
import Title from '@/components/shared/card/Title';

export default function Card({ title, body, image }) {
  return (
    <li className="col-span-1 flex flex-col space-y-2">
      {image && (
        <div className="relative aspect-square bg-gray-100 mx-auto w-full">
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )}

      <Title>{title}</Title>

      <div className="tw-body">
        <TextBody content={body} />
      </div>
    </li>
  );
}
