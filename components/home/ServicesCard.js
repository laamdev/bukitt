import Link from 'next/link';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';
import ButtonLink from '@/components/shared/buttons/ButtonLink';

export default function ServicesCard({
  title,
  description,
  imageUrl,
  btnLinkText,
  btnURL,
}) {
  return (
    <div className="w-full sm:w-1/2 shadow rounded relative group aspect-9/16">
      <Image
        src={urlForImage(imageUrl).width(1080).height(1920).url()}
        alt={imageUrl?.alt}
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
      <Overlay />

      <div className="absolute tw-center w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-6 text-center">
        <h3 className="font-mono font-bold uppercase text-3xl sm:text-4xl lg:text-5xl text-white">
          {title}
        </h3>
        <p className="mt-2 text-xl text-white ">{description}</p>
        <div className="mt-6 flex justify-center">
          <ButtonLink btnLinkText={btnLinkText} btnURL={btnURL} />
        </div>
      </div>
    </div>
  );
}
