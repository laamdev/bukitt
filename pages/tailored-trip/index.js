import { tailoredTripPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import ContentWrapper from '@/components/shared/ContentWrapper';
import Hero from '@/components/shared/Hero';
import Contact from '@/components/forms/Contact';

export default function TailoredTrip({ tailoredTripData }) {
  return (
    <article>
      <Hero hero={tailoredTripData?.hero} />

      <ContentWrapper>
        <Contact />
      </ContentWrapper>
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const tailoredTripData = await getClient(preview).fetch(
    tailoredTripPageQuery
  );

  return {
    props: { tailoredTripData, preview },
  };
}
