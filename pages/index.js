import { homePageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import FeaturedDestinationsSection from '@/components/home/featuredDestinations/Section';
import FeaturedExperienceSection from '@/components/home/featuredExperience/Section';
import AboutSection from '@/components/home/AboutSection';
import FeaturesSection from '@/components/shared/features/Section';
import ServicesSection from '@/components/home/ServicesSection';
import PartnersSection from '@/components/home/PartnersSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import Hero from '@/components/shared/Hero';
import ContentWrapper from '@/components/shared/ContentWrapper';

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

        {/* 
        <AboutSection
          heading={homeData?.aboutSection?.heading}
          body={homeData?.aboutSection?.body}
          callToAction={homeData?.aboutSection?.callToAction}
        /> */}

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
