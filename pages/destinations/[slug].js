import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import {
  individualDestinationQuery,
  destinationsPathsQuery,
} from '@/lib/queries';
import { usePreviewSubscription } from '@/lib/sanity';
import { sanityClient, getClient, overlayDrafts } from '@/lib/sanity.server';

import Destination from '@/components/adventure/Destination';

export default function DestinationsPage({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.destination?.slug;

  const {
    data: { destination, moreDestinations },
  } = usePreviewSubscription(individualDestinationQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Destination
      key={destination?.title}
      title={destination?.title}
      hero={destination?.hero}
      highlightsSection={destination?.highlightsSection}
    />
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(destinationsPathsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { destination, moreDestinations } = await getClient(preview).fetch(
    individualDestinationQuery,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      preview,
      data: {
        destination,
        moreDestinations: overlayDrafts(moreDestinations),
      },
    },
  };
}
