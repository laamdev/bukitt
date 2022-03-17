import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function HighlightCard({ title, body, image }) {
  return (
    <li className="col-span-1">
      {image && (
        <div className="mx-auto w-full rounded-2xl shadow-xl">
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            alt={image?.alt ?? 'highlight'}
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL="/images/image-placeholder.png"
            className="tw-transition rounded-2xl bg-slate-300"
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
