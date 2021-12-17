import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function Card({ title, slug, image, location }) {
  return (
    <div className="w-full sm:w-1/3 px-8 py-8 text-center">
      <Link href={`/experiences/${slug}`}>
        <a>
          <div className="group block w-full aspect-w-7 rounded-full aspect-h-10 bg-gray-100 hover:scale-95 tw-transition focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary overflow-hidden">
            {image && (
              <Image
                src={urlForImage(image).width(1080).height(1080).url()}
                layout="fill"
                objectFit="cover"
                alt={title}
              />
            )}
          </div>

          <div className="tw-card-title mt-2">
            <span>{title}</span>
            {location && <span>, {location}</span>}
          </div>
        </a>
      </Link>
    </div>
  );
}
