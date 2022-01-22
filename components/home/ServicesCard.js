import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';
import BtnNav from '@/components/shared/buttons/BtnNav';

export default function ServicesCard({
  title,
  description,
  imageUrl,
  btnLinkText,
  btnURL,
}) {
  return (
    <div className="col-span-1 shadow-xl rounded-2xl relative group">
      <Link href={`/${btnURL}`}>
        <a>
          <Image
            src={urlForImage(imageUrl).width(1080).height(1350).url()}
            alt={imageUrl?.alt}
            layout="responsive"
            width={4}
            height={5}
            objectPosition="center"
            objectFit="cover"
            className="rounded-2xl"
          />
          <Overlay />

          <div className="absolute tw-center w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-6 text-center">
            <h4 className="text-4xl sm:text-5xl lg:text-7xl font-mono text-white font-medium uppercase">
              {title}
            </h4>
            <p className="text-neutral-100 text-lg lg:text-2xl">
              {description}
            </p>
            <div className="mt-6 flex justify-center">
              <BtnNav btnLinkText={btnLinkText} btnURL={btnURL} secondary />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
