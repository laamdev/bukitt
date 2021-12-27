import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';
import Title from '@/components/shared/card/Title';

export default function Card({ title, body, image }) {
  return (
    <li className="col-span-1 flex flex-col space-y-2">
      {image && (
        <div className="bg-gray-400 mx-auto w-full">
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
            objectPosition="center"
            alt={image.alt}
          />
        </div>
      )}

      <Title>{title}</Title>

      <TextBody content={body} />
    </li>
  );
}
