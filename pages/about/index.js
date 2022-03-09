import { aboutPageQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import AboutSection from '@/components/about/AboutSection';
import TeamSection from '@/components/about/team/TeamSection';
import TeamQuote from '@/components/about/TeamQuote';

export default function AboutPage({ aboutData }) {
  return (
    <Layout>
      <Hero hero={aboutData?.hero} page="about" />
      <AboutSection
        heading={aboutData?.aboutSection?.heading}
        body={aboutData?.aboutSection?.body}
        image={aboutData?.aboutSection?.image}
      />
      <TeamSection
        heading={aboutData?.teamSection?.heading}
        body={aboutData?.teamSection?.body}
        team={aboutData?.teamSection?.team}
      />
      <TeamQuote quoteSection={aboutData?.quoteSection} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const aboutData = await sanityClient.fetch(aboutPageQuery);

  return {
    props: { aboutData, preview },
  };
}
