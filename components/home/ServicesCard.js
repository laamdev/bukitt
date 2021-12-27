import Link from 'next/link';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function ServicesCard({ title, imageUrl, btnURL }) {
  return (
    <div className="w-full sm:w-1/2 shadow rounded">
      <Link href={btnURL}>
        <a>
          <div className="relative aspect-w-3 aspect-h-4 group">
            <Image
              src={urlForImage(imageUrl).width(1080).height(1920).url()}
              alt={imageUrl?.alt}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute inset-0 bg-gray-300 opacity-100 group-hover:opacity-0 tw-transition mix-blend-multiply rounded" />

            <div className="absolute flex flex-col space-y-3 sm:space-y-6 justify-center items-center px-3 sm:px-6 text-center">
              <h3 className="tw-card-title-lg text-white">{title}</h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
