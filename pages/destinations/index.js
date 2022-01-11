import { destinationsPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import DestinationCard from '@/components/shared/DestinationCard';

export default function DestinationsPage({ destinationsPageData }) {
  const sortedDestinations = destinationsPageData?.destinations.sort(function (
    a,
    b
  ) {
    return a.name.localeCompare(b.name);
  });

  return (
    <Layout title={''} description={''}>
      <Hero hero={destinationsPageData?.hero} />
      <section className="tw-section">
        <div className="max-w-7xl mx-auto">
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 xl:gap-x-8 gap-y-12 sm:gap-y-14 lg:gap-y-16"
          >
            {sortedDestinations.map((destination, idx) => (
              <li key={idx}>
                <DestinationCard
                  content={destination?.card}
                  linkURL={`destinations/${destination?.slug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
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
