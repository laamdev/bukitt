import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function HighlightCard({ title, body, image }) {
  return (
    <li className="col-span-1">
      {image && (
        <div className="relative aspect-square bg-neutral-100 mx-auto w-full rounded-2xl shadow-xl">
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            alt={image?.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl"
          />
        </div>
      )}

      <h4 className="mt-6 text-xl sm:text-2xl font-medium font-mono uppercase">
        {title}
      </h4>

      <p className="mt-2">{body}</p>
    </li>
  );
}
