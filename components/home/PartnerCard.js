import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

export default function PartnerCard({ partner }) {
  return (
    <li className="col-span-1 md:col-span-2 lg:col-span-1">
      <Image
        className="grayscale"
        src={urlForImage(partner.logo).width(1080).height(1080).url()}
        alt={partner.logo.alt}
        layout="responsive"
        width={1}
        height={1}
      />
    </li>
  );
}
