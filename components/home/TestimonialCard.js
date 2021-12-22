import Image from 'next/image';
import { IoAirplaneOutline } from 'react-icons/io5';
import { urlForImage } from '@/lib/sanity';

import TestimonialTitle from '@/components/home/TestimonialTitle';
import TestimonialQuote from '@/components/home/TestimonialQuote';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="relative min-w-full space-y-6 bg-gray-100 p-3 sm:p-6">
      <div className="flex items-center justify-center space-x-1.5 sm:space-x-3">
        <IoAirplaneOutline className="w-4 sm:w-6 h-4 sm:h-6 text-primary" />
        <TestimonialTitle>
          {testimonial.travelerTripDestination}
        </TestimonialTitle>
        <IoAirplaneOutline className="w-4 sm:w-6 h-4 sm:h-6 text-primary rotate-180" />
      </div>

      <blockquote>
        <div className="text-center">
          <TestimonialQuote>{testimonial.body}</TestimonialQuote>
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
              <div className="text-base font-medium text-gray-900">
                {testimonial.travelerName}. {testimonial.travelerAge}
              </div>

              <svg
                className="hidden md:block mx-1 h-4 w-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M11 0h3L9 20H6l5-20z" />
              </svg>

              <div className="text-base font-medium text-gray-500">
                {testimonial.travelerOriginLocation}
              </div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}
