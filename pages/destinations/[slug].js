import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import {
  individualDestinationQuery,
  destinationsPathsQuery,
} from '@/lib/queries';
import { usePreviewSubscription } from '@/lib/sanity';
import { sanityClient, getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import ContentWrapper from '@/components/shared/ContentWrapper';
import HighlightCard from '@/components/destination/highlight/Card';
import HighlightsList from '@/components/destination/highlight/List';
import Hero from '@/components/shared/HeroProduct';
import MapSection from '@/components/experience/MapSection';
import SectionWrapper from '@/components/shared/SectionWrapper';

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
    <Layout title={''} description={''}>
      <Hero hero={destination?.hero} />
      <ContentWrapper>
        {destination?.mapSection && (
          <>
            <MapSection
              heading={destination?.mapSection?.heading}
              body={destination?.mapSection?.body}
              image={destination?.mapSection?.image}
            />
          </>
        )}

        <SectionWrapper>
          <h3 className="tw-section-heading text-center">
            {destination?.highlightsSection?.heading}
          </h3>

          <HighlightsList>
            {destination?.highlightsSection?.highlights?.map((highlight) => (
              <HighlightCard
                key={highlight?.title}
                title={highlight?.title}
                image={highlight?.image}
                body={highlight?.body}
              />
            ))}
          </HighlightsList>
        </SectionWrapper>
      </ContentWrapper>
    </Layout>
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
