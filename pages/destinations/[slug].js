import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import {
  individualDestinationQuery,
  destinationsPathsQuery,
} from '@/lib/queries';
import { usePreviewSubscription } from '@/lib/sanity';
import { sanityClient, getClient } from '@/lib/sanity.server';

import Destination from '@/components/adventure/Destination';

export default function DestinationPage({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.destination?.slug;

  const {
    data: { destination },
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
      mapSection={destination?.mapSection}
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
  const { destination } = await getClient(preview).fetch(
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
      },
    },
  };
}
