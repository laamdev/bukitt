import { aboutPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import ContentWrapper from '@/components/shared/ContentWrapper';
import Hero from '@/components/shared/Hero';
import Section from '@/components/shared/Section';
import TeamList from '@/components/about/TeamList';
import TeamQuote from '@/components/about/TeamQuote';

export default function AboutPage({ aboutData }) {
  return (
    <article>
      <Hero hero={aboutData?.hero} />

      <ContentWrapper>
        <Section
          heading={aboutData?.aboutUsSection?.heading}
          body={aboutData?.aboutUsSection?.body}
          image={aboutData?.aboutUsSection?.image}
        />

        <TeamList teamSection={aboutData?.teamSection} />

        <TeamQuote quoteSection={aboutData?.quoteSection} />
      </ContentWrapper>
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const aboutData = await getClient(preview).fetch(aboutPageQuery);

  return {
    props: { aboutData, preview },
  };
}
