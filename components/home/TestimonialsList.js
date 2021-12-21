import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import TestimonialCard from '@/components/home/TestimonialCard';

export default function TestimonialsList({ testimonials }) {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
    slidesToScroll: 1,
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
    <div>
      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
        {/* Carousel container */}
        <div className="flex w-full">
          {/* Carousel slide's */}
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 space-x-2">
        {scrollSnaps.map((_, idx) => (
          <button
            className={`w-2 h-2 rounded-full ${
              idx === selectedIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
