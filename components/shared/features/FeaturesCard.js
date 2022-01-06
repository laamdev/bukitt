import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function FeaturesCard({ feature }) {
  return (
    <li className="min-h-content text-center">
      <div className="h-full flow-root bg-gray-100 rounded-2xl shadow px-6 pb-8">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-white border-2 border-paradiso rounded-2xl shadow">
              <Image
                src={urlForImage(feature.icon).width(1080).height(1080).url()}
                alt={feature.icon.alt ? feature.icon.alt : 'Icon.'}
                layout="intrinsic"
                width={50}
                height={50}
                objectFit="cover"
                objectPosition="center"
                className="rounded-2xl"
                aria-hidden="true"
              />
            </span>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className="tw-card-title">{feature.title}</h4>
            <p className="text-base sm:text-lg ">{feature.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
