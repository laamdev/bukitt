import { enquiryFormPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import ContentWrapper from '@/components/shared/ContentWrapper';
import Hero from '@/components/shared/Hero';
import EnquiryForm from '@/components/forms/EnquiryForm';

export default function EnquiryFormPage({ enquiryFormPageData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={enquiryFormPageData?.hero} page={enquiryFormPageData?.slug} />

      <ContentWrapper>
        <EnquiryForm
          destinations={enquiryFormPageData?.destinations}
          experiences={enquiryFormPageData?.experiences}
        />
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
