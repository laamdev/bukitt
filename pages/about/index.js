import { aboutPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import AboutSection from '@/components/about/AboutSection';
import TeamSection from '@/components/about/team/TeamSection';
import TeamQuote from '@/components/about/TeamQuote';

export default function AboutPage({ aboutData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={aboutData?.hero} />

      <AboutSection
        heading={aboutData?.aboutUsSection?.heading}
        body={aboutData?.aboutUsSection?.body}
        image={aboutData?.aboutUsSection?.image}
      />
      <TeamQuote quoteSection={aboutData?.quoteSection} />
      <TeamSection
        heading={aboutData?.teamSection?.heading}
        body={aboutData?.teamSection?.body}
        team={aboutData?.teamSection?.team}
      />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const aboutData = await getClient(preview).fetch(aboutPageQuery);

  return {
    props: { aboutData, preview },
  };
}
