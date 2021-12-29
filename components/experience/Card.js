import Image from 'next/image';
import Link from 'next/link';

import Title from '@/components/shared/card/Title';

import { urlForImage } from '@/lib/sanity';

export default function Card({ title, slug, image }) {
  return (
    <div className="col-span-1">
      <Link href={`/experiences/${slug}`}>
        <a>
          <div className="relative aspect-square shadow bg-gray-100 overflow-hidden focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary">
            {image && (
              <Image
                src={urlForImage(image).width(1080).height(1080).url()}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="hover:scale-105 tw-transition"
              />
            )}
          </div>

          <Title>{title}</Title>
        </a>
      </Link>
    </div>
  );
}
