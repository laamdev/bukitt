import { homePageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import FeaturedDestinationsSection from '@/components/home/FeaturedDestinationsSection';
import FeaturedExperienceSection from '@/components/home/FeaturedExperienceSection';
import FeaturesSection from '@/components/shared/features/FeaturesSection';
import ServicesSection from '@/components/home/ServicesSection';
import PartnersSection from '@/components/home/PartnersSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Hero from '@/components/shared/Hero';

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
        tailoredCard={homeData?.servicesSection?.tailoredCard}
      />
      <FeaturesSection
        heading={homeData?.featuresSection?.heading}
        features={homeData?.featuresSection?.features}
      />
      <FeaturedDestinationsSection
        heading={homeData?.featuredDestinationsSection?.heading}
        featuredDestinations={homeData?.featuredDestinations}
      />
      <TestimonialsSection
        heading={homeData?.testimonialsSection?.heading}
        testimonials={homeData?.testimonialsSection?.testimonials}
      />
      <FeaturedExperienceSection
        heading={homeData?.featuredExperienceSection?.heading}
        body={homeData?.featuredExperienceSection?.body}
        featuredExperience={
          homeData?.featuredExperienceSection?.featuredExperience
        }
      />
      <PartnersSection
        heading={homeData?.partnersSection?.heading}
        partners={homeData?.partnersSection?.partners}
      />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeData = await getClient(preview).fetch(homePageQuery);

  return {
    props: { homeData, preview },
  };
}
