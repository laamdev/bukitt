import Image from 'next/image';
import Link from 'next/link';

import Title from '@/components/shared/card/Title';

import { urlForImage } from '@/lib/sanity';

export default function Card({ title, slug, image }) {
  return (
    <div className="col-span-1">
      <Link href={`/experiences/${slug}`}>
        <a>
          <div className="group block w-full aspect-w-1 aspect-h-1 shadow bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary overflow-hidden">
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

          <Title>{title}</Title>
        </a>
      </Link>
    </div>
  );
}
