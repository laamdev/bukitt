import { destinationsPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Hero from '@/components/shared/Hero';
import DestinationCard from '@/components/destination/DestinationCard';
import ListGrid from '@/components/destination/HighlightsList';
import ContentWrapper from '@/components/shared/ContentWrapper';

export default function DestinationsPage({ destinationsPageData }) {
  return (
    <article>
      <Hero hero={destinationsPageData?.hero} />

      <ContentWrapper>
        <ListGrid>
          {destinationsPageData.destinations.map((destination) => (
            <DestinationCard
              key={destination?._id}
              name={destination?.card?.name}
              location={destination?.card?.location}
              slug={destination?.slug}
              thumbnail={destination?.card?.thumbnail}
            />
          ))}
        </ListGrid>
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
