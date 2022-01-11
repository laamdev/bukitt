import { enquiryFormPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import ContentWrapper from '@/components/shared/ContentWrapper';
import Hero from '@/components/shared/Hero';
import EnquiryForm from '@/components/forms/EnquiryForm';

export default function EnquiryFormPage({ enquiryFormPageData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={enquiryFormPageData?.hero} />

      <section className="tw-section">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm
            destinations={enquiryFormPageData?.destinations}
            experiences={enquiryFormPageData?.experiences}
          />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const enquiryFormPageData = await getClient().fetch(enquiryFormPageQuery);

  return {
    props: { enquiryFormPageData },
  };
}
