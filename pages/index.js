import { homePageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import IntroductionSection from '@/components/home/IntroductionSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import PartnersSection from '@/components/home/PartnersSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContentWrapper from '@/components/shared/ContentWrapper';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage({ homeData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={homeData?.hero} />
      <ContentWrapper>
        <IntroductionSection
          heading={homeData?.introductionSection?.heading}
          body={homeData?.introductionSection?.body}
        />

        <ServicesSection
          heading={homeData?.servicesSection?.heading}
          experiencesCard={homeData?.servicesSection?.experiencesCard}
          tailoredCard={homeData?.servicesSection?.tailoredCard}
        />
        {/* 
        <AboutSection
          heading={homeData?.aboutSection?.heading}
          body={homeData?.aboutSection?.body}
          callToAction={homeData?.aboutSection?.callToAction}
        /> */}

        <TestimonialsSection
          heading={homeData?.testimonialsSection?.heading}
          testimonials={homeData?.testimonialsSection?.testimonials}
        />

        <PartnersSection
          heading={homeData?.partnersSection?.heading}
          partners={homeData?.partnersSection?.partners}
        />

        <ContactSection partners={homeData?.contact?.heading} />
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
