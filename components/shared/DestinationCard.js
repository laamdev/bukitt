import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';

export default function FeaturedDestinationCard({ content, linkURL }) {
  return (
    <li className="shadow-xl rounded-2xl">
      <Link href={linkURL}>
        <a>
          <div className="relative aspect-4/5 group bg-neutral-100 overflow-hidden rounded-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100 focus-within:ring-brand">
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

            <div className="tw-center text-center w-full px-1.5 sm:px-2 lg:px-3">
              <h3 className="text-xl sm:text-3xl lg:text-4xl text-white font-mono font-medium uppercase group-hover:scale-95 tw-transition break-words">
                {content?.title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
