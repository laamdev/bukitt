import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { urlForImage } from '@/lib/sanity';

import { PrevButton, NextButton } from '@/components/home/TestimonialsButtons';
import TestimonialQuoteShape from '@/components/home/TestimonialQuoteShape';
import TestimonialBackgroundShapes from '@/components/home/TestimonialBackgroundShapes';

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
    <div className="relative rounded-2xl shadow-md py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <div className="overflow-hidden w-full" ref={viewportRef}>
        <div className="flex select-none">
          {testimonials.map((index) => (
            <div
              className="relative px-6 md:px-12 lg:px-24 min-w-full"
              key={index}
            >
              <div className="relative overflow-hidden">
                <div className="relative max-w-7xl mx-auto pt-20 pb-12 lg:py-20">
                  <TestimonialBackgroundShapes />

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
                      <TestimonialQuoteShape />
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
