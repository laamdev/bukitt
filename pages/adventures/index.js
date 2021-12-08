import { adventuresPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Hero from '@/components/shared/Hero';
import ContentWrapper from '@/components/shared/ContentWrapper';
import AdventureCard from '@/components/adventure/Card';
import List from '@/components/adventure/List';

export default function AdventuresPage({ adventuresPageData }) {
  return (
    <article>
      <Hero hero={adventuresPageData?.hero} />
      <ContentWrapper>
        <section className="space-y-6 sm:space-y-12">
          <List>
            {adventuresPageData?.adventures.map((adventure) => (
              <AdventureCard
                key={adventure?._id}
                name={adventure?.card.name}
                slug={adventure?.slug}
                thumbnail={adventure?.card?.thumbnail}
              />
            ))}
          </List>
        </section>
      </ContentWrapper>
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const adventuresPageData = await getClient(preview).fetch(
    adventuresPageQuery
  );
  return {
    props: { adventuresPageData, preview },
  };
}
