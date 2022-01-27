import { sanityClient } from '@/lib/sanity.server';
import {
  individualDestinationQuery,
  destinationsPathsQuery,
} from '@/lib/queries';

import Layout from '@/components/navigation/Layout';
import HighlightsSection from '@/components/destination/highlight/HighlightSection';
import MapSection from '@/components/shared/MapSection';
import Hero from '@/components/shared/Hero';

export default function DestinationPage({ destination }) {
  return (
    <Layout
      title={destination?.seo?.title}
      description={destination?.seo?.description}
    >
      <Hero
        hero={destination?.hero}
        location={destination?.location}
        category={destination?.category}
      />

      {destination?.mapSection && (
        <>
          <MapSection
            heading={destination?.mapSection?.heading}
            body={destination?.mapSection?.body}
            image={destination?.mapSection?.image}
          />
        </>
      )}
      {destination?.highlightsSection && (
        <HighlightsSection
          heading={destination?.highlightsSection?.heading}
          highlights={destination?.highlightsSection?.highlights}
        />
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(destinationsPathsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { destination } = await sanityClient.fetch(individualDestinationQuery, {
    slug: params.slug,
  });

  return {
    props: {
      destination,
    },
  };
}
