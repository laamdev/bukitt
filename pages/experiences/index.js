import { experiencesPageQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import GridList from '@/components/shared/list/GridList';
import ProductCard from '@/components/shared/ProductCard';

export default function ExperiencesPage({ experiencesPageData }) {
  const sortedExperiences = experiencesPageData?.experiences.sort(function (
    a,
    b
  ) {
    return a.name.localeCompare(b.name);
  });

  return (
    <Layout>
      <Hero hero={experiencesPageData?.hero} />
      <section className="tw-section">
        <div className="mx-auto max-w-7xl">
          <GridList>
            {sortedExperiences.map((experience) => (
              <ProductCard
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
  const experiencesPageData = await sanityClient.fetch(experiencesPageQuery);
  return {
    props: { experiencesPageData },
  };
}
