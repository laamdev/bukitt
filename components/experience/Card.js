import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function Card({ title, slug, image, location }) {
  return (
    <div className="col-span-1 text-center">
      <Link href={`/experiences/${slug}`}>
        <a>
          <div className="group block w-full aspect-w-7 rounded-full shadow-lg aspect-h-10 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary overflow-hidden">
            {image && (
              <Image
                src={urlForImage(image).width(1080).height(1080).url()}
                layout="fill"
                objectFit="cover"
                alt={title}
                className="hover:scale-105 tw-transition"
              />
            )}
          </div>

          <div className="tw-subheading mt-4">
            <span>{title}</span>
            {location && <span>, {location}</span>}
          </div>
        </a>
      </Link>
    </div>
  );
}
