import { experiencesPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
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
    <Layout
      title={`${
        experiencesPageData?.seo?.title
          ? experiencesPageData?.seo?.title
          : 'Experiences'
      }`}
      description={`${
        experiencesPageData?.seo?.description
          ? experiencesPageData?.seo?.description
          : 'Hand-made experience packages for nonconformist travelers looking for the perfect blend of adventure and luxury.'
      }`}
    >
      <Hero hero={experiencesPageData?.hero} />
      <section className="tw-section">
        <div className="max-w-7xl mx-auto">
          <GridList>
            {sortedExperiences.map((experience) => (
              <Card
                key={experience?._id}
                content={experience?.card}
                linkURL={`experiences/${experience?.slug}`}
              />
            ))}
          </GridList>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const experiencesPageData = await getClient().fetch(experiencesPageQuery);
  return {
    props: { experiencesPageData },
  };
}
