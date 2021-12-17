import { destinationsPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Hero from '@/components/shared/Hero';
import DestinationCard from '@/components/destination/Card';
import DestinationsGrid from '@/components/destination/List';
import ContentWrapper from '@/components/shared/ContentWrapper';

export default function DestinationsPage({ destinationsPageData }) {
  let sortedDestinations = destinationsPageData?.destinations.sort(function (
    a,
    b
  ) {
    return a.name.localeCompare(b.name);
  });

  return (
    <article>
      <Hero hero={destinationsPageData?.hero} />

      <ContentWrapper>
        <DestinationsGrid>
          {sortedDestinations.map((destination) => (
            <DestinationCard
              key={destination?._id}
              title={destination?.card?.title}
              location={destination?.location}
              slug={destination?.slug}
              image={destination?.card?.image}
            />
          ))}
        </DestinationsGrid>
      </ContentWrapper>
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const destinationsPageData = await getClient(preview).fetch(
    destinationsPageQuery
  );
  return {
    props: { destinationsPageData, preview },
  };
}
