import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

export default function EmblaCarousel({ slides }) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // this function allow's us to scroll to the slide whose
  // id correspond's to the id of the navigation dot when we
  // click on it.

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  // set the id of the current slide to active id
  // we need it to correctly highlight it's corresponding
  // navigation dot.

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  // make sure embla is mounted and return true operation's
  // can be only performed on it if it's successfully mounted.

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="py-12 mx-auto max-w-6xl px-5">
      {/* title */}
      <div className="flex justify-center items-center pb-10">
        <h2 className="text-center text-black dark:text-gray-100 text-4xl font-bold">
          Testimonials
        </h2>
      </div>
      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Carousel container */}
        <div className="flex">
          {/* Carousel slide's */}
          {testimonials.map((testimonial) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 space-x-2">
        {scrollSnaps.map((_, idx) => (
          <button
            className={`w-2 h-2 rounded-full ${
              idx === selectedIndex ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
