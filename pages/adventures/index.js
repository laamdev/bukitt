import { adventuresPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Card from '@/components/adventure/Card';
import DestinationCard from '@/components/destination/DestinationCard';
import Subheading from '@/components/shared/Subheading';
import ListGrid from '@/components/shared/ListGrid';

export default function AdventuresPage({ adventuresPageData }) {
  return (
    <>
      <article className="flex flex-col mx-auto space-y-12 sm:space-y-24">
        <section className="space-y-12">
          <Subheading>{adventuresPageData?.adventuresHeading}</Subheading>
          <ListGrid>
            {adventuresPageData?.adventures.map((adventure) => (
              <Card
                key={adventure?._id}
                name={adventure?.card.name}
                slug={adventure?.slug}
                thumbnail={adventure?.card?.thumbnail}
              />
            ))}
          </ListGrid>
        </section>

        <section className="space-y-12">
          <Subheading>{adventuresPageData?.destinationsHeading}</Subheading>
          <ListGrid>
            {adventuresPageData?.destinations.map((destination) => (
              <DestinationCard
                key={destination?._id}
                name={destination?.card?.name}
                location={destination?.card?.location}
                slug={destination.slug}
                thumbnail={destination?.card?.thumbnail}
              />
            ))}
          </ListGrid>
        </section>
      </article>
    </>
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
