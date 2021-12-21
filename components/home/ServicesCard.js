import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import ButtonLink from '@/components/shared/buttons/ButtonLink';

export default function ServicesCard({ title, imageUrl, btnLinkText, btnURL }) {
  return (
    <div className="w-full sm:w-1/2 shadow-lg rounded-lg">
      <div className="relative aspect-w-3 aspect-h-4 group">
        <Image
          src={urlForImage(imageUrl).url()}
          alt={imageUrl?.alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-100 tw-transition mix-blend-multiply rounded-lg" />

        <div className="absolute flex flex-col space-y-3 sm:space-y-6 justify-center items-center px-3 sm:px-6 text-center">
          <div>
            <h3 className="tw-subheading text-white">{title}</h3>
          </div>
          <div>
            <ButtonLink btnLinkText={btnLinkText} btnURL={btnURL} />
          </div>
        </div>
      </div>
    </div>
  );
}
