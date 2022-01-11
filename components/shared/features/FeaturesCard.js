import Image from 'next/image';
import { HiOutlineClock } from 'react-icons/hi';

import { urlForImage } from '@/lib/sanity';

export default function FeaturesCard({ feature }) {
  return (
    <li className="flow-root bg-neutral-50 rounded-lg shadow-md px-6 pb-8">
      <div className="-mt-6">
        <div>
          <span className="inline-flex items-center justify-center p-3 bg-brand-500 rounded-md shadow-xl">
            <HiOutlineClock className="h-6 w-6 text-white" aria-hidden="true" />
            {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
          </span>
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
