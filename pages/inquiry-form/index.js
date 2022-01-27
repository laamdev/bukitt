import { inquiryFormPageQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import InquiryForm from '@/components/forms/InquiryForm';

export default function InquiryFormPage({ inquiryFormPageData }) {
  return (
    <Layout
      title={inquiryFormPageData?.seo?.title}
      description={inquiryFormPageData?.seo?.description}
    >
      <Hero hero={inquiryFormPageData?.hero} page="inquiry" />

      <section className="tw-section">
        <div className="max-w-4xl mx-auto">
          <InquiryForm
            destinations={inquiryFormPageData?.destinations}
            experiences={inquiryFormPageData?.experiences}
          />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const inquiryFormPageData = await sanityClient.fetch(inquiryFormPageQuery);

  return {
    props: { inquiryFormPageData },
  };
}
