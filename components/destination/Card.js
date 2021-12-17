import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

export default function DestinationCard({ title, slug, image, location }) {
  return (
    <li className="relative text-center">
      <Link href={`/destinations/${slug}`}>
        <a>
          <div className="group block w-full aspect-w-10 aspect-h-10 bg-gray-100 hover:scale-95 tw-transition focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary overflow-hidden">
            {image && (
              <Image
                src={urlForImage(image).width(1080).height(1080).url()}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>

          <div className="tw-card-title mt-2">
            <span>{title}</span>
            {location && <span>, {location}</span>}
          </div>
        </a>
      </Link>
    </li>
  );
}
