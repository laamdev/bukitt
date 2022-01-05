import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="relative min-w-full space-y-3 bg-gray-100 p-6 sm:p-12">
      <div className="flex items-center justify-center space-x-1.5 sm:space-x-3">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl text-center font-medium font-mono uppercase">
          {testimonial.travelerTripDestination}
        </h3>
      </div>

      <blockquote>
        <div className="text-center">
          <p className="max-w-prose mx-auto text-lg sm:text-xl text-gray-500">
            &ldquo;{testimonial.body}&ldquo;
          </p>
        </div>
        <footer className="mt-8">
          <div className="flex flex-col items-center md:flex-row justify-center">
            <div className="md:flex-shrink-0">
              <Image
                src={urlForImage(testimonial.travelerImage)
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
                  {testimonial.travelerName}, {testimonial.travelerAge}
                </span>
                <span className=""> / </span>
                <span className="">{testimonial.travelerOriginLocation}</span>
              </div>

              <div className="text-base text-gray-500"></div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}
