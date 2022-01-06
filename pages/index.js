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
import ContentWrapper from '@/components/shared/ContentWrapper';
import Divider from '@/components/shared/Divider';

export default function HomePage({ homeData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={homeData?.hero} />
      <ContentWrapper>
        <ServicesSection
          heading={homeData?.servicesSection?.heading}
          experiencesCard={homeData?.servicesSection?.experiencesCard}
          tailoredCard={homeData?.servicesSection?.tailoredCard}
        />
        <Divider />
        <FeaturesSection
          heading={homeData?.featuresSection?.heading}
          features={homeData?.featuresSection?.features}
        />
        <Divider />
        <FeaturedDestinationsSection
          heading={homeData?.featuredDestinationsSection?.heading}
          featuredDestinations={homeData?.featuredDestinations}
        />
        <Divider />
        <TestimonialsSection
          heading={homeData?.testimonialsSection?.heading}
          testimonials={homeData?.testimonialsSection?.testimonials}
        />
        <Divider />
        <FeaturedExperienceSection
          heading={homeData?.featuredExperienceSection?.heading}
          body={homeData?.featuredExperienceSection?.body}
          featuredExperience={
            homeData?.featuredExperienceSection?.featuredExperience
          }
        />
        <Divider />
        <PartnersSection
          heading={homeData?.partnersSection?.heading}
          partners={homeData?.partnersSection?.partners}
        />
      </ContentWrapper>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeData = await getClient(preview).fetch(homePageQuery);

  return {
    props: { homeData, preview },
  };
}
