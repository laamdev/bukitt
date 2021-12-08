import { aboutPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Hero from '@/components/shared/Hero';
import Section from '@/components/shared/Section';
import TeamList from '@/components/about/TeamList';
import TeamQuote from '@/components/about/TeamQuote';

export default function AboutPage({ aboutData }) {
  console.log(JSON.stringify(aboutData, null, 2));
  return (
    <article>
      <Hero hero={aboutData?.hero} />

      <div className="relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg shadow px-5 py-6 sm:px-6 space-y-12 sm:space-y-24">
            <Section
              heading={aboutData?.aboutUsSection?.heading}
              body={aboutData?.aboutUsSection?.body}
              image={aboutData?.aboutUsSection?.image}
            />

            <TeamList teamSection={aboutData?.teamSection} />

            <TeamQuote quoteSection={aboutData?.quoteSection} />
          </div>
        </div>
      </div>
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const aboutData = await getClient(preview).fetch(aboutPageQuery);

  return {
    props: { aboutData, preview },
  };
}