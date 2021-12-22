import { tailoredTripPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import ContentWrapper from '@/components/shared/ContentWrapper';
import Hero from '@/components/shared/Hero';
import Contact from '@/components/forms/Contact';

export default function TailoredTrip({ tailoredTripData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={tailoredTripData?.hero} />

      <ContentWrapper>
        <Contact />
      </ContentWrapper>
    </Layout>
  );
}

export async function getStaticProps() {
  const tailoredTripData = await getClient().fetch(tailoredTripPageQuery);

  return {
    props: { tailoredTripData },
  };
}
