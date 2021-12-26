import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import CardTitle from '@/components/shared/card/Title';

export default function Card({ feature }) {
  return (
    <div className="pt-6">
      <div className="flow-root bg-gray-100 rounded-lg shadow-lg px-6 pb-8">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-white border-2 border-primary rounded-lg shadow-lg">
              <Image
                src={urlForImage(feature.icon).width(1080).height(1080).url()}
                alt={feature.icon.alt ? feature.icon.alt : 'Icon.'}
                layout="intrinsic"
                width={50}
                height={50}
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
                aria-hidden="true"
              />
            </span>
          </div>
          <div className="mt-6">
            <CardTitle>{feature.title}</CardTitle>
          </div>
          <p className="mt-3 text-base text-gray-500">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}
