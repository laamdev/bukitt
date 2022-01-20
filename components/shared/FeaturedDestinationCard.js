import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function FeaturedDestinationCard({ content, linkURL }) {
  return (
    <li className="shadow-xl rounded-full">
      <Link href={linkURL}>
        <a>
          <div className="relative group bg-neutral-100 overflow-hidden rounded-full focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100 focus-within:ring-brand">
            {content?.image && (
              <Image
                src={urlForImage(content?.image).width(1152).height(1920).url()}
                alt={content?.title}
                layout="responsive"
                width={3}
                height={5}
                objectFit="cover"
                className="group-hover:scale-105 tw-transition rounded-full"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 tw-transition mix-blend-multiply rounded-full" />

            <div className="tw-center text-center w-full px-1.5 sm:px-2 lg:px-3">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-mono font-medium uppercase group-hover:scale-95 tw-transition break-words">
                {content?.title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
