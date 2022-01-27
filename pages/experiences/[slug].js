import { sanityClient } from '@/lib/sanity.server';
import {
  individualExperienceQuery,
  experiencesPathsQuery,
} from '@/lib/queries';

import Layout from '@/components/navigation/Layout';
import MapSection from '@/components/shared/MapSection';
import AccommodationSection from '@/components/experience/AccommodationSection';
import DestinationsSection from '@/components/experience/destinations/DestinationsSection';
import DetailsSection from '@/components/experience/details/DetailsSection';
import FeaturesSection from '@/components/shared/features/FeaturesSection';
import ItinerarySection from '@/components/experience/itinerary/ItinerarySection';
import Hero from '@/components/shared/Hero';

export default function ExperiencePage({ experience }) {
  return (
    <Layout
      title={experience?.seo?.title ? experience?.seo?.title : ''}
      description={
        experience?.seo?.description ? experience?.seo?.description : ''
      }
    >
      <Hero hero={experience?.hero} guideURL={experience?.guideURL} />

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

      {experience?.mapSection && (
        <MapSection
          heading={experience?.mapSection?.heading}
          body={experience?.mapSection?.body}
          image={experience?.mapSection?.image}
        />
      )}
      {experience?.featuresSection && (
        <FeaturesSection
          heading={experience?.featuresSection?.heading}
          features={experience?.featuresSection?.features}
        />
      )}
      {experience?.accommodationSection && (
        <AccommodationSection
          heading={experience?.accommodationSection?.heading}
          body={experience?.accommodationSection?.body}
          image={experience?.accommodationSection?.image}
        />
      )}
      {experience?.itinerarySection && (
        <ItinerarySection
          heading={experience?.itinerarySection?.heading}
          itinerary={experience?.itinerarySection?.itinerary}
        />
      )}
      {experience?.destinationsSection && (
        <DestinationsSection
          heading={experience?.destinationsSection?.heading}
          destinations={experience?.destinationsSection?.destinations}
        />
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(experiencesPathsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { experience } = await sanityClient.fetch(individualExperienceQuery, {
    slug: params.slug,
  });

  return {
    props: {
      experience,
    },
  };
}
