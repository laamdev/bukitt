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
        heading={homeData?.featuredDestinationsSection?.heading}
        featuredDestinations={
          homeData?.featuredDestinationsSection?.featuredDestinations
        }
      />
      <FeaturedExperienceSection
        heading={homeData?.featuredExperienceSection?.heading}
        featuredExperience={
          homeData?.featuredExperienceSection?.featuredExperience
        }
      />
      <TestimonialsSection
        heading={homeData?.testimonialsSection?.heading}
        testimonials={homeData?.testimonialsSection?.testimonials}
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

export async function getStaticProps({ preview = false }) {
  const homeData = await sanityClient.fetch(homePageQuery);

  return {
    props: { homeData, preview },
  };
}
