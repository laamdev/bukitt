import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import {
  individualExperienceQuery,
  experiencesPathsQuery,
} from '@/lib/queries';
import { usePreviewSubscription } from '@/lib/sanity';
import { sanityClient, getClient } from '@/lib/sanity.server';

import Hero from '@/components/experience/Hero';
import MapSection from '@/components/experience/MapSection';
import AccommodationSection from '@/components/experience/AccommodationSection';
import Destination from '@/components/experience/Destination';
import Details from '@/components/experience/Details';
import FeaturesSection from '@/components/experience/features/Section';
import ItinerarySection from '@/components/experience/itinerary/Section';
import Meta from '@/components/shared/Meta';

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
    <div className="space-y-12 sm:space-y-48">
      <Hero
        heading={experience?.hero?.heading}
        tagline={experience?.hero?.tagline}
        body={experience?.hero?.body}
        coverImage={experience?.hero?.coverImage}
      />

      {experience?.details && (
        <Details
          price={experience?.details?.price}
          dateFrom={experience?.details?.dateFrom}
          dateTo={experience?.details?.dateTo}
          duration={experience?.details?.duration}
        />
      )}

      {experience?.featuresSection && (
        <FeaturesSection
          heading={experience?.featuresSection?.heading}
          features={experience?.featuresSection?.features}
        />
      )}

      {experience?.itinerarySection && (
        <ItinerarySection
          heading={experience?.itinerarySection?.heading}
          itinerary={experience?.itinerarySection?.itinerary}
        />
      )}

      {experience?.mapSection && (
        <MapSection
          heading={experience?.mapSection?.heading}
          body={experience?.mapSection?.body}
          image={experience?.mapSection?.image}
        />
      )}

      {experience?.accommodationSection && (
        <AccommodationSection
          heading={experience?.accommodationSection?.heading}
          body={experience?.accommodationSection?.body}
          image={experience?.accommodationSection?.image}
        />
      )}

      {experience?.destinations?.map((destination) => (
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
