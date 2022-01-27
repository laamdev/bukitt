import { homePageQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';

import Hero from '@/components/shared/Hero';
import FeaturesSection from '@/components/shared/features/FeaturesSection';
import Layout from '@/components/navigation/Layout';
import FeaturedDestinationsSection from '@/components/home/FeaturedDestinationsSection';
import FeaturedExperienceSection from '@/components/home/FeaturedExperienceSection';
import ServicesSection from '@/components/home/ServicesSection';
import PartnersSection from '@/components/home/PartnersSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function HomePage({ homeData }) {
  return (
    <Layout
      title={homeData?.seo?.title}
      description={homeData?.seo?.description}
    >
      <Hero hero={homeData?.hero} page="home" />
      <ServicesSection
        heading={homeData?.servicesSection?.heading}
        experiencesCard={homeData?.servicesSection?.experiencesCard}
        destinationsCard={homeData?.servicesSection?.destinationsCard}
      />
      <FeaturesSection
        heading={homeData?.featuresSection?.heading}
        features={homeData?.featuresSection?.features}
      />
      <FeaturedDestinationsSection
        sectionHeading={homeData?.featuredDestinationsSection?.sectionHeading}
        featuredDestinations={
          homeData?.featuredDestinationsSection?.featuredDestinations
        }
      />
      <TestimonialsSection
        heading={homeData?.testimonialsSection?.heading}
        testimonials={homeData?.testimonialsSection?.testimonials}
      />
      <PartnersSection
        heading={homeData?.partnersSection?.heading}
        partners={homeData?.partnersSection?.partners}
      />
      <FeaturedExperienceSection
        heading={homeData?.featuredExperienceSection?.heading}
        body={homeData?.featuredExperienceSection?.body}
        featuredExperience={
          homeData?.featuredExperienceSection?.featuredExperience
        }
      />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeData = await sanityClient.fetch(homePageQuery);

  return {
    props: { homeData, preview },
  };
}
