import Image from 'next/image';

import FeaturedDestinationsList from '@/components/home/featuredDestinations/List';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Section({ heading, featuredDestinations }) {
  return (
    <SectionWrapper>
      <SectionHeading>{heading}</SectionHeading>

      <FeaturedDestinationsList featuredDestinations={featuredDestinations} />
    </SectionWrapper>
  );
}
