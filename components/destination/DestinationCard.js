import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity';

import Overlay from '@/components/shared/image/Overlay';

export default function DestinationCard({ destination }) {
  return (
    <motion.li
      layout
      className="col-span-1 rounded-2xl shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link href={`/destinations/${destination?.slug}`} scroll={false}>
        <a>
          <div className="group relative overflow-hidden rounded-2xl bg-slate-100 focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-within:ring-offset-slate-100">
            {destination?.card?.image && (
              <Image
                src={urlForImage(destination?.card?.image)
                  .width(1536)
                  .height(2048)
                  .url()}
                alt={destination?.card?.title}
                layout="responsive"
                width={3}
                height={4}
                objectFit="cover"
                className="tw-transition rounded-2xl group-hover:scale-105"
              />
            )}
            <Overlay />

            <div className="tw-center w-full px-1.5 text-center sm:px-2 lg:px-3">
              <h3 className="tw-transition break-words font-mono text-2xl font-medium uppercase text-white group-hover:scale-95 md:text-4xl lg:text-5xl">
                {destination?.card?.title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </motion.li>
  );
}
