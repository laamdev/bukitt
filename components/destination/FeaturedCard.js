import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import CardText from '@/components/shared/CardText';

export default function FeaturedCard({ name, slug, location, thumbnail }) {
  return (
    <li className="col-span-1 text-center">
      <Link href={`/destinations/${slug}`}>
        <a>
          {thumbnail && (
            <div className="w-64 h-96 relative mx-auto">
              <Image
                className="rounded-full "
                src={urlForImage(thumbnail).url()}
                layout="fill"
                objectFit="cover"
                alt={name}
              />
            </div>
          )}

          <CardText>
            {name}, {location}
          </CardText>
        </a>
      </Link>
    </li>
  );
}
