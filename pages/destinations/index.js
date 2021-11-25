import { destinationsPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import DestinationCard from '@/components/destination/DestinationCard';
import Subheading from '@/components/shared/Subheading';
import ListGrid from '@/components/shared/ListGrid';

export default function DestinationsPage({ destinationsPageData }) {
  return (
    <article className="flex flex-col mx-auto max-w-5xl">
      <section className="space-y-12">
        <Subheading>{destinationsPageData?.highlights?.heading}</Subheading>
        <ListGrid>
          {destinationsPageData.destinations.map((destination) => (
            <DestinationCard
              key={destination?._id}
              name={destination?.card.name}
              location={destination?.card?.location}
              slug={destination?.slug}
              thumbnail={destination?.card?.thumbnail}
            />
          ))}
        </ListGrid>
      </section>
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
