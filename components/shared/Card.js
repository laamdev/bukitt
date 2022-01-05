import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';

export default function Card({ content, linkURL }) {
  return (
    <Link href={linkURL}>
      <a>
        <div className="relative aspect-4/5 group bg-gray-100 overflow-hidden rounded-2xl shadow focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-paradiso">
          {content?.image && (
            <Image
              src={urlForImage(content?.image).width(1080).height(1350).url()}
              alt={content?.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 tw-transition rounded-2xl"
            />
          )}
          <Overlay />

          <div className="tw-center text-center w-full px-3 sm:px-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white font-mono font-bold uppercase group-hover:scale-95 tw-transition">
              {content?.title}
            </h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
