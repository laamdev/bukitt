import { experiencesPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import ContentWrapper from '@/components/shared/ContentWrapper';
import Hero from '@/components/shared/Hero';
import GridList from '@/components/shared/list/GridList';
import Card from '@/components/shared/Card';

export default function ExperiencesPage({ experiencesPageData }) {
  const sortedExperiences = experiencesPageData?.experiences.sort(function (
    a,
    b
  ) {
    return a.name.localeCompare(b.name);
  });
  return (
    <Layout title={''} description={''}>
      <Hero hero={experiencesPageData?.hero} />
      <ContentWrapper>
        <section className="space-y-6 sm:space-y-12">
          <GridList>
            {sortedExperiences.map((experience, idx) => (
              <li key={idx}>
                <Card
                  content={experience?.card}
                  linkURL={`experiences/${experience?.slug}`}
                />
              </li>
            ))}
          </GridList>
        </section>
      </ContentWrapper>
    </Layout>
  );
}

export async function getStaticProps() {
  const experiencesPageData = await getClient().fetch(experiencesPageQuery);
  return {
    props: { experiencesPageData },
  };
}
