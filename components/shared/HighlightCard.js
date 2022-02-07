import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function HighlightCard({ title, body, image }) {
  return (
    <li className="col-span-1">
      {image && (
        <div className="mx-auto w-full rounded-2xl bg-slate-100 shadow-xl">
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            alt={image?.alt}
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl"
          />
        </div>
      )}

      <h4 className="mt-6 font-mono text-xl font-medium uppercase sm:text-2xl">
        {title}
      </h4>

      <p className="mt-2">{body}</p>
    </li>
  );
}
