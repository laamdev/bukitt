import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function FeaturesCard({ feature }) {
  return (
    <li className="flow-root rounded-lg bg-slate-50 px-6 pb-8 shadow-md">
      <div className="-mt-6">
        <div>
          <div className="mx-auto h-12 w-12 rounded-md bg-brand-500 p-2 shadow-lg">
            {feature?.icon && (
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
            )}
          </div>
        </div>
        <h3 className="mt-8 font-mono text-2xl font-medium uppercase tracking-tight text-slate-900 lg:text-3xl">
          {feature?.title}
        </h3>
        <p className="mt-5 text-base text-slate-500 lg:text-lg">
          {feature?.description}
        </p>
      </div>
    </li>
  );
}
