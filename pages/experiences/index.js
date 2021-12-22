import { experiencesPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import ContentWrapper from '@/components/shared/ContentWrapper';
import ExperienceCard from '@/components/experience/Card';
import ExperiencesList from '@/components/experience/List';

export default function ExperiencesPage({ experiencesPageData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={experiencesPageData?.hero} />
      <ContentWrapper>
        <section className="space-y-6 sm:space-y-12">
          <ExperiencesList>
            {experiencesPageData?.experiences.map((experience) => (
              <ExperienceCard
                key={experience?._id}
                title={experience?.card?.title}
                slug={experience?.slug}
                image={experience?.card?.image}
              />
            ))}
          </ExperiencesList>
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
