// // import CookieConsent from 'react-cookie-consent';

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
      {/* <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{
          color: '#4e503b',
          fontSize: '13px',
          borderRadius: '20px',
          background: '#0d0d0d',
        }}
        expires={150}
        className="bg-brand"
      >
        > This website uses cookies to enhance the user experience.{' '}
        <span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span>
      </CookieConsent> */}

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

      <TestimonialsSection
        heading={homeData?.testimonialsSection?.heading}
        testimonials={homeData?.testimonialsSection?.testimonials}
      />

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

export async function getStaticProps({ preview = false }) {
  const homeData = await sanityClient.fetch(homePageQuery);

  return {
    props: { homeData, preview },
  };
}
