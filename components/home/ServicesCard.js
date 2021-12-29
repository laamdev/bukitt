import Link from 'next/link';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';

export default function ServicesCard({ title, imageUrl, btnURL }) {
  return (
    <div className="w-full sm:w-1/2 shadow rounded">
      <Link href={btnURL}>
        <a>
          <div className="relative group aspect-9/16">
            <Image
              src={urlForImage(imageUrl).width(1080).height(1920).url()}
              alt={imageUrl?.alt}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <Overlay />

            <div className="absolute tw-center w-full px-1.5 sm:px-3 py-3 sm:py-6 text-center">
              <h3 className="tw-card-title-lg text-white">{title}</h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
