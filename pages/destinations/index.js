import { destinationsPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import Card from '@/components/shared/Card';
import GridList from '@/components/shared/list/GridList';
import ContentWrapper from '@/components/shared/ContentWrapper';

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
      <ContentWrapper>
        <GridList>
          {sortedDestinations.map((destination, idx) => (
            <li key={idx}>
              <Card
                content={destination?.card}
                linkURL={`destinations/${destination?.slug}`}
              />
            </li>
          ))}
        </GridList>
      </ContentWrapper>
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
