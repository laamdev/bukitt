import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';
import ButtonLink from '@/components/shared/ButtonLink';
import TextBody from '@/components/shared/TextBody';

export default function ServicesCard({
  title,
  description,
  imageUrl,
  btnLinkText,
  btnURL,
}) {
  return (
    <div className="col-span-1 shadow-xl rounded-2xl relative group aspect-4/5">
      <Link href={`/${btnURL}`}>
        <a>
          <Image
            src={urlForImage(imageUrl).width(1080).height(1350).url()}
            alt={imageUrl?.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <Overlay />

          <div className="absolute tw-center w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-6 text-center">
            <h3 className="text-4xl sm:text-5xl lg:text-7xl font-mono text-white font-medium uppercase">
              {title}
            </h3>
            <p className="text-neutral-100 lg:text-2xl">{description}</p>
            <div className="mt-6 flex justify-center">
              <ButtonLink btnLinkText={btnLinkText} btnURL={btnURL} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
