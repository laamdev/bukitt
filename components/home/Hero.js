import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function Hero({ coverImage }) {
  return (
    <div className="relative bg-gray-100 pb-32 shadow-xl sm:rounded-2xl sm:overflow-hidden">
      <div className="w-full h-full z-0">
        <Image
          className="grayscale"
          src={urlForImage(coverImage).url()}
          alt={coverImage?.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        <div className="absolute inset-0 bg-dark opacity-90 mix-blend-hard-light" />

        <header className="relative py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-lg mx-auto text-center text-white space-y-3">
              <Image
                src="/logos/rectangle.svg"
                alt="Bukitt logo"
                layout="responsive"
                width={16}
                height={9}
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
