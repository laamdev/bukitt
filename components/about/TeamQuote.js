import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function TeamQuote({ quoteSection }) {
  return (
    <section className="tw-section">
      {/* <h3 className="tw-section-heading">{quoteSection?.heading}</h3> */}

      <div className="mx-auto max-w-6xl rounded-2xl bg-brand-600 pb-16 shadow-xl lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="overflow-hidden rounded-2xl bg-slate-500 shadow-xl">
                <Image
                  src={urlForImage(quoteSection?.profilePicture)
                    .width(1080)
                    .height(1350)
                    .url()}
                  alt={quoteSection?.profilePicture?.alt}
                  layout="responsive"
                  width={4}
                  height={5}
                  objectFit="cover"
                  objectPosition="center"
                  className="lg:h-full lg:w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    {quoteSection?.body}
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">
                    {quoteSection?.author}
                  </p>
                  <p className="text-base font-medium text-brand-100">
                    {quoteSection?.role}
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
