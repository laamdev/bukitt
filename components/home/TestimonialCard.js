import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import Body from '@/components/shared/Body';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="relative min-w-full space-y-3 bg-white p-6 sm:p-12">
      <div className="flex items-center justify-center space-x-1.5 sm:space-x-3">
        <h4 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold">
          {testimonial?.destination}
        </h4>
      </div>

      <blockquote>
        <Body>&quot;{testimonial?.quote}&quot;</Body>
        <footer className="mt-8">
          <div className="flex flex-col items-center md:flex-row justify-center">
            <div className="md:flex-shrink-0">
              <Image
                src={urlForImage(testimonial.thumbnail)
                  .width(1080)
                  .height(1080)
                  .url()}
                layout="intrinsic"
                width={50}
                height={50}
                objectFit="cover"
                objectPosition="center"
                className="rounded-full"
                alt=""
              />
            </div>
            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
              <div className="text-xs sm:text-sm lg:text-base">
                <span className="">
                  {testimonial.name}, {testimonial.age}
                </span>
                <span className=""> / </span>
                <span className="">{testimonial.origin}</span>
              </div>

              <div className="text-base text-gray-500"></div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}
