import FeaturedCard from '@/components/destination/FeaturedCard';
import CustomLink from '@/components/shared/CustomLink';
import TextBody from '@/components/shared/TextBody';
import ListGrid from '@/components/shared/ListGrid';
import Hero from '@/components/destination/Hero';

import { homePageQuery } from '@/lib/queries';
import { getClient, overlayDrafts } from '@/lib/sanity.server';

export default function Home({ homeData, preview }) {
  return (
    <article className="space-y-12">
      <Hero hero={homeData.hero} />

      <section>
        <ListGrid>
          {homeData.featured.map((destination) => (
            <FeaturedCard
              key={destination.card.name}
              name={destination.card.name}
              slug={destination.card.slug}
              location={destination.card.location}
              thumbnail={destination.card.thumbnail}
            />
          ))}
        </ListGrid>
      </section>

      <section className="space-y-6">
        <h2 className="tw-subheading text-center">{homeData.about.heading}</h2>
        <div className="paragraph text-lg">
          <TextBody content={homeData.about.body} />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="tw-subheading text-center">
          {homeData.explore.heading}
        </h2>
        <TextBody content={homeData.explore.body} />
      </section>
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeData = await getClient(preview).fetch(homePageQuery);

  return {
    props: { homeData, preview },
  };
}
