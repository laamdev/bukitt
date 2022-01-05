import { aboutPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import ContentWrapper from '@/components/shared/ContentWrapper';
import Hero from '@/components/shared/Hero';
import AboutSection from '@/components/about/AboutSection';
import TeamSection from '@/components/about/team/Section';
import TeamQuote from '@/components/about/TeamQuote';
import Divider from '@/components/shared/Divider';

export default function AboutPage({ aboutData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={aboutData?.hero} page={aboutData?.slug} />

      <ContentWrapper>
        <AboutSection
          heading={aboutData?.aboutUsSection?.heading}
          body={aboutData?.aboutUsSection?.body}
          image={aboutData?.aboutUsSection?.image}
        />
        <Divider />
        <TeamSection
          heading={aboutData?.teamSection?.heading}
          team={aboutData?.teamSection?.team}
        />
        <Divider />
        <TeamQuote quoteSection={aboutData?.quoteSection} />
      </ContentWrapper>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const aboutData = await getClient(preview).fetch(aboutPageQuery);

  return {
    props: { aboutData, preview },
  };
}
