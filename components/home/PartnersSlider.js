import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { urlForImage } from '@/lib/sanity';

const animation = { duration: 10000, easing: (t) => t };

export default function PartnerSlider({ partners }) {
  const slideNumber = partners.length - 1;

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    breakpoints: {
      '(min-width: 1024px)': {
        slides: { perView: 4, spacing: 200 },
      },
    },
    slides: {
      perView: 2,
      spacing: 50,
    },
    created(s) {
      s.moveToIdx(slideNumber, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + slideNumber, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + slideNumber, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider bg-gray-100 rounded-2xl shadow">
      {partners.map((partner, idx) => (
        <div key={idx} className="keen-slider__slide">
          <Image
            src={urlForImage(partner.logo).width(1080).height(1080).url()}
            alt={partner.logo.alt}
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
            objectPosition="center"
            className="grayscale"
          />
        </div>
      ))}
    </div>
  );
}
