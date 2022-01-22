import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { urlForImage } from '@/lib/sanity';

import { PrevButton, NextButton } from '@/components/home/TestimonialsButtons';

export default function TestimonialsSlider({ testimonials }) {
  const mediaByIndex = (index) => testimonials[index % testimonials.length];

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {testimonials.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
                  <svg
                    className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
                    width={784}
                    height={404}
                    fill="none"
                    viewBox="0 0 784 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-neutral-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={784}
                      height={404}
                      fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
                    />
                  </svg>

                  <svg
                    className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-neutral-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={784}
                      fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
                    />
                  </svg>

                  <div className="relative lg:flex lg:items-center">
                    <div className="hidden lg:block lg:shrink-0 relative h-64 lg:h-80 w-64 lg:w-80 rounded-full">
                      <Image
                        src={urlForImage(index.thumbnail)
                          .width(1080)
                          .height(1080)
                          .url()}
                        alt={index.thumbnail.alt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-full"
                      />
                    </div>

                    <div className="relative lg:ml-10">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-brand-200 opacity-50"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 144 144"
                        aria-hidden="true"
                      >
                        <path
                          strokeWidth={2}
                          d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                        />
                      </svg>
                      <blockquote className="relative">
                        <div>
                          <h4 className="text-3xl md:text-5xl lg:text-5xl font-mono uppercase text-brand">
                            {index.destination}
                          </h4>
                        </div>
                        <div className="mt-4 text-xl md:text-2xl lg:text-2xl leading-7 font-medium text-neutral-900">
                          <p>{index.quote}</p>
                        </div>
                        <footer className="mt-8">
                          <div className="flex items-center">
                            <div className="shrink-0 lg:hidden w-16 h-16 md:w-24 md:h-24">
                              <Image
                                src={urlForImage(index.thumbnail)
                                  .width(1080)
                                  .height(1080)
                                  .url()}
                                alt={index.thumbnail.alt}
                                layout="responsive"
                                width={1}
                                height={1}
                                objectFit="cover"
                                objectPosition="center"
                                className="rounded-full"
                              />
                            </div>
                            <div className="ml-4 md:ml-6 lg:ml-0">
                              <div className="text-base md:text-xl lg:text-lg font-medium text-neutral-900">
                                {index.name}
                              </div>
                              <div className="text-sm md:text-lg lg:text-base font-ligth text-brand-600">
                                {index.origin}, {index.age}
                              </div>
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
}
