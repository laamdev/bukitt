import { enquiryFormPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import ContentWrapper from '@/components/shared/ContentWrapper';
import Hero from '@/components/shared/Hero';
import Contact from '@/components/forms/Contact';

export default function EnquiryForm({ enquiryFormPageData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={enquiryFormPageData?.hero} />

      <ContentWrapper>
        <Contact />
      </ContentWrapper>
    </Layout>
  );
}

export async function getStaticProps() {
  const enquiryFormPageData = await getClient().fetch(enquiryFormPageQuery);

  return {
    props: { enquiryFormPageData },
  };
}
