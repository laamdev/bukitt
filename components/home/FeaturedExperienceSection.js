import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import SectionHeading from '@/components/shared/SectionHeading';
import BtnNav from '@/components/shared/buttons/BtnNav';

export default function FeaturedExperienceSection({
  heading,
  featuredExperience,
}) {
  return (
    <section className="tw-section">
      <SectionHeading className="text-center">{heading}</SectionHeading>

      <div className="mx-auto max-w-4xl">
        <Link href={`/experiences/${featuredExperience?.slug}`}>
          <a>
            <div className="group relative overflow-hidden rounded-full bg-slate-100 focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-within:ring-offset-slate-100">
              {featuredExperience?.card?.image && (
                <Image
                  src={urlForImage(featuredExperience?.card?.image)
                    .width(1080)
                    .height(1080)
                    .url()}
                  alt={featuredExperience?.card?.image?.alt}
                  layout="responsive"
                  width={1}
                  height={1}
                  objectFit="cover"
                  className="tw-transition rounded-full group-hover:scale-105"
                />
              )}
              <div className="tw-transition absolute inset-0 rounded-full bg-dark opacity-50 mix-blend-multiply group-hover:opacity-0" />

              <div className="tw-center w-full px-1.5 text-center sm:px-2 lg:px-3">
                <h3 className="tw-transition break-words font-mono text-5xl font-medium uppercase text-white group-hover:scale-95 md:text-7xl lg:text-8xl">
                  {featuredExperience?.name}
                </h3>
              </div>
            </div>
          </a>
        </Link>

        <div className="mt-6 flex justify-center sm:mt-8 lg:mt-10">
          <BtnNav btnLinkText="All Experiences" btnURL="experiences" primary />
        </div>
      </div>
    </section>
  );
}
