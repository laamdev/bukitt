import { destinationsPageQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import GridList from '@/components/shared/list/GridList';
import ProductCard from '@/components/shared/ProductCard';

export default function DestinationsPage({ destinationsPageData }) {
  const sortedDestinations = destinationsPageData?.destinations.sort(function (
    a,
    b
  ) {
    return a.name.localeCompare(b.name);
  });

  return (
    <Layout
      title={`${
        destinationsPageData?.seo?.title
          ? destinationsPageData?.seo?.title
          : 'Destinations'
      }`}
      description={`${
        destinationsPageData?.seo?.description
          ? destinationsPageData?.seo?.description
          : 'A unique selection of unforgettable destinations hand-picked by our expert travel concierge for a unique blend of outdoorsy adventure and luxurious comfort.'
      }`}
    >
      {' '}
      <Hero hero={destinationsPageData?.hero} />
      <section className="tw-section">
        <div className="max-w-7xl mx-auto">
          <GridList>
            {sortedDestinations.map((destination, idx) => (
              <ProductCard
                key={destination?._id}
                content={destination?.card}
                linkURL={`destinations/${destination?.slug}`}
              />
            ))}
          </GridList>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const destinationsPageData = await sanityClient.fetch(destinationsPageQuery);
  return {
    props: { destinationsPageData, preview },
  };
}
