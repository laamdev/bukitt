import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import PartnersList from '@/components/home/PartnersList';

export default function PartnersSection({ heading, partners }) {
  return (
    <div>
      <h2 className="tw-subheading text-center">{heading}</h2>
      <PartnersList>
        {partners.map((partner) => (
          <li key={partner.name}>
            <Image
              className="grayscale"
              src={urlForImage(partner.logo).url()}
              alt={partner.logo.alt}
              layout="responsive"
              width={1}
              height={1}
            />
          </li>
        ))}
      </PartnersList>
    </div>
  );
}
