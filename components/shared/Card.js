import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';

export default function Card({ content, linkURL }) {
  return (
    <li className="rounded-2xl shadow-xl">
      <Link href={linkURL} scroll={false}>
        <a>
          <div className="group overflow-hidden rounded-2xl bg-slate-100 focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-within:ring-offset-slate-100">
            {content?.image && (
              <Image
                src={urlForImage(content?.image).width(1080).height(1350).url()}
                alt={content?.title}
                layout="responsive"
                width={4}
                height={5}
                objectPosition="center"
                objectFit="cover"
                className="tw-transition rounded-2xl group-hover:scale-105"
              />
            )}
            <Overlay />

            <div className="tw-center w-full px-3 text-center sm:px-6">
              <h3 className="tw-transition font-mono text-3xl font-medium uppercase text-white group-hover:scale-95 sm:text-4xl lg:text-5xl">
                {content?.title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
