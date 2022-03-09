import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';
import BtnNav from '@/components/shared/buttons/BtnNav';

export default function ServicesCard({
  heading,
  body,
  image,
  btnLinkText,
  btnURL,
}) {
  return (
    <div className="group relative col-span-1 rounded-2xl shadow-xl">
      <Link href={`/${btnURL}`} scroll={false}>
        <a>
          <Image
            src={urlForImage(image).width(1080).height(1350).url()}
            alt={image?.alt}
            layout="responsive"
            width={4}
            height={5}
            objectPosition="center"
            objectFit="cover"
            className="rounded-2xl"
          />
          <Overlay />

          <div className="tw-center absolute w-full px-3 py-3 text-center sm:px-4 sm:py-6 lg:px-6">
            <h4 className="font-mono text-4xl font-medium uppercase text-white sm:text-5xl lg:text-7xl">
              {heading}
            </h4>
            <p className="text-lg text-slate-100 lg:text-2xl">{body}</p>
            <div className="mt-6 flex justify-center">
              <BtnNav btnLinkText={btnLinkText} btnURL={btnURL} secondary />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
