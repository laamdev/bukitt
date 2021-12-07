import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { individualAdventureQuery, adventuresPathsQuery } from '@/lib/queries';
import { usePreviewSubscription } from '@/lib/sanity';
import { sanityClient, getClient } from '@/lib/sanity.server';

import Hero from '@/components/adventure/Hero';
import MapSection from '@/components/adventure/MapSection';
import AccommodationSection from '@/components/adventure/AccommodationSection';
import Destination from '@/components/adventure/Destination';
import Meta from '@/components/shared/Meta';

export default function AdventurePage({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.adventure?.slug;

  const {
    data: { adventure },
  } = usePreviewSubscription(individualAdventureQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="space-y-12 sm:space-y-24">
      <Hero
        heading={adventure?.hero?.heading}
        tagline={adventure?.hero?.tagline}
        body={adventure?.hero?.body}
        coverImage={adventure?.hero?.coverImage}
      />

      {adventure?.mapSection && (
        <MapSection
          heading={adventure?.mapSection?.heading}
          body={adventure?.mapSection?.body}
          image={adventure?.mapSection?.image}
        />
      )}

      {adventure?.accommodationSection && (
        <AccommodationSection
          heading={adventure?.accommodationSection?.heading}
          body={adventure?.accommodationSection?.body}
          image={adventure?.accommodationSection?.image}
        />
      )}

      {adventure?.destinations?.map((destination) => (
        <Destination
          key={destination?.title}
          title={destination?.title}
          hero={destination?.hero}
          highlightsSection={destination?.highlightsSection}
          mapSection={destination?.mapSection}
        />
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(adventuresPathsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { adventure } = await getClient(preview).fetch(
    individualAdventureQuery,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      preview,
      data: {
        adventure,
      },
    },
  };
}
