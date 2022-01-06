import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import {
  individualExperienceQuery,
  experiencesPathsQuery,
} from '@/lib/queries';
import { usePreviewSubscription } from '@/lib/sanity';
import { sanityClient, getClient } from '@/lib/sanity.server';

import ContentWrapper from '@/components/shared/ContentWrapper';
import Divider from '@/components/shared/Divider';
import Layout from '@/components/navigation/Layout';
import MapSection from '@/components/shared/MapSection';
import AccommodationSection from '@/components/experience/AccommodationSection';
import DestinationsSection from '@/components/experience/destinations/DestinationsSection';
import DetailsSection from '@/components/experience/details/DetailsSection';
import FeaturesSection from '@/components/shared/features/FeaturesSection';
import ItinerarySection from '@/components/experience/itinerary/ItinerarySection';
import Hero from '@/components/shared/Hero';

export default function ExperiencePage({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.experience?.slug;

  const {
    data: { experience },
  } = usePreviewSubscription(individualExperienceQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={''} description={''}>
      <Hero hero={experience?.hero} />

      <ContentWrapper>
        {experience?.details && (
          <DetailsSection
            price={experience?.details?.price}
            dateFrom={experience?.details?.dateFrom}
            dateTo={experience?.details?.dateTo}
            duration={experience?.details?.duration}
            groupSizeMin={experience?.details?.groupSizeMin}
            groupSizeMax={experience?.details?.groupSizeMax}
          />
        )}
        <Divider />

        {experience?.mapSection && (
          <>
            <MapSection
              heading={experience?.mapSection?.heading}
              body={experience?.mapSection?.body}
              image={experience?.mapSection?.image}
            />
            <Divider />
          </>
        )}
        {experience?.featuresSection && (
          <>
            <FeaturesSection
              heading={experience?.featuresSection?.heading}
              features={experience?.featuresSection?.features}
            />
            <Divider />
          </>
        )}
        {experience?.accommodationSection && (
          <>
            <AccommodationSection
              heading={experience?.accommodationSection?.heading}
              body={experience?.accommodationSection?.body}
              image={experience?.accommodationSection?.image}
            />
            <Divider />
          </>
        )}
        {experience?.itinerarySection && (
          <>
            <ItinerarySection
              heading={experience?.itinerarySection?.heading}
              itinerary={experience?.itinerarySection?.itinerary}
            />
            <Divider />
          </>
        )}
        {experience?.destinationsSection && (
          <DestinationsSection
            heading={experience?.destinationsSection?.heading}
            destinations={experience?.destinationsSection?.destinations}
          />
        )}
      </ContentWrapper>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(experiencesPathsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { experience } = await getClient(preview).fetch(
    individualExperienceQuery,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      preview,
      data: {
        experience,
      },
    },
  };
}
