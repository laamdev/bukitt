import { experiencesPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Hero from '@/components/shared/Hero';
import ContentWrapper from '@/components/shared/ContentWrapper';
import ExperienceCard from '@/components/experience/Card';
import ExperiencesList from '@/components/experience/List';

export default function ExperiencesPage({ experiencesPageData }) {
  return (
    <article>
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
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const experiencesPageData = await getClient(preview).fetch(
    experiencesPageQuery
  );
  return {
    props: { experiencesPageData, preview },
  };
}
