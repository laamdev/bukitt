import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="relative min-w-full space-y-6 bg-gray-100 p-6">
      <div className="text-center items-center tw-subheading">
        {testimonial.travelerTripDestination}
      </div>
      <blockquote>
        <div className="text-center">
          <p>&ldquo;{testimonial.body}&ldquo;</p>
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
                className="hidden md:block mx-1 h-5 w-5 text-primary"
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
