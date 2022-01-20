import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function FeaturesCard({ feature }) {
  return (
    <li className="flow-root bg-neutral-50 rounded-lg shadow-md px-6 pb-8">
      <div className="-mt-6">
        <div>
          <div className="bg-brand-500 rounded-md shadow-lg w-12 h-12 mx-auto p-2">
            <Image
              src={urlForImage(feature?.icon).width(1080).height(1080).url()}
              alt={feature?.icon?.alt}
              layout="responsive"
              width={1}
              height={1}
              objectFit="cover"
              objectPosition="center"
              aria-hidden="true"
            />
          </div>
        </div>
        <h3 className="mt-8 text-2xl lg:text-3xl font-mono uppercase font-medium text-neutral-900 tracking-tight">
          {feature?.title}
        </h3>
        <p className="mt-5 text-base lg:text-lg text-neutral-500">
          {feature?.description}
        </p>
      </div>
    </li>
  );
}
