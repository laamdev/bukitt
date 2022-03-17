import { homePageQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';

import Hero from '@/components/shared/Hero';
import FeaturesSection from '@/components/shared/features/FeaturesSection';
import Layout from '@/components/navigation/Layout';
import FeaturedDestinationsSection from '@/components/home/FeaturedDestinationsSection';
import FeaturedExperienceSection from '@/components/home/FeaturedExperienceSection';
import ServicesSection from '@/components/home/ServicesSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import PartnersSection from '@/components/home/PartnersSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function HomePage({ homeData }) {
  return (
    <Layout metaTitle={homeData?.title} metaDescription={homeData?.hero?.body}>
      <Hero hero={homeData?.hero} page="home" />
      {/* 
      <ServicesSection
        heading={homeData?.servicesSection?.heading}
        experiencesCard={homeData?.servicesSection?.experiencesCard}
        destinationsCard={homeData?.servicesSection?.destinationsCard}
      /> */}

      <FeaturesSection
        heading={homeData?.featuresSection?.heading}
        features={homeData?.featuresSection?.features}
      />

      <FeaturedDestinationsSection
        heading={homeData?.featuredDestinationsSection?.heading}
        featuredDestinations={
          homeData?.featuredDestinationsSection?.featuredDestinations
        }
      />

      {/* <TestimonialsSection
        heading={homeData?.testimonialsSection?.heading}
        testimonials={homeData?.testimonialsSection?.testimonials}
      /> */}

      <FeaturedExperienceSection
        heading={homeData?.featuredExperienceSection?.heading}
        featuredExperience={
          homeData?.featuredExperienceSection?.featuredExperience
        }
      />

      <NewsletterSection
        heading={homeData?.newsletterSection?.heading}
        body={homeData?.newsletterSection?.body}
      />

      <PartnersSection
        heading={homeData?.partnersSection?.heading}
        partners={homeData?.partnersSection?.partners}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const homeData = await sanityClient.fetch(homePageQuery);

  return {
    props: { homeData },
  };
}
