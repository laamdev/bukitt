import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function FeaturedDestinationCard({ content, linkURL }) {
  return (
    <li className="rounded-full shadow-xl">
      <Link href={linkURL} scroll={false}>
        <a>
          <div className="group relative overflow-hidden rounded-full bg-slate-100 focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-within:ring-offset-slate-100">
            {content?.image && (
              <Image
                src={urlForImage(content?.image).width(1152).height(1920).url()}
                alt={content?.title}
                layout="responsive"
                width={3}
                height={5}
                objectFit="cover"
                className="tw-transition rounded-full group-hover:scale-105"
              />
            )}
            <div className="tw-transition absolute inset-0 rounded-full bg-dark opacity-50 mix-blend-multiply group-hover:opacity-0" />

            <div className="tw-center w-full px-1.5 text-center sm:px-2 lg:px-3">
              <h3 className="tw-transition break-words font-mono text-2xl font-medium uppercase text-white group-hover:scale-95 md:text-4xl lg:text-4xl">
                {content?.title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
