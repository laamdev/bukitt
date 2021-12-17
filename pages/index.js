import { homePageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import CardFeatured from '@/components/destination/CardFeatured';
import FeaturedList from '@/components/home/FeaturedList';
import Hero from '@/components/shared/Hero';
import IntroductionSection from '@/components/home/IntroductionSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import PartnersSection from '@/components/home/PartnersSection';
import ContentWrapper from '@/components/shared/ContentWrapper';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage({ homeData }) {
  return (
    <article>
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

        <div className="flex flex-col space-y-6 sm:space-y-12">
          <h2 className="tw-subheading text-center">
            {homeData?.featuredSection?.heading}
          </h2>
          <FeaturedList>
            {homeData?.featured.map((destination) => (
              <CardFeatured
                key={destination?.card?.title}
                title={destination?.card?.title}
                slug={destination?.slug}
                location={destination?.card?.location}
                image={destination?.card?.image}
              />
            ))}
          </FeaturedList>
        </div>

        <AboutSection
          heading={homeData?.aboutSection?.heading}
          body={homeData?.aboutSection?.body}
          callToAction={homeData?.aboutSection?.callToAction}
        />

        <PartnersSection
          heading={homeData?.partnersSection?.heading}
          partners={homeData?.partnersSection?.partners}
        />

        <ContactSection partners={homeData?.contact?.heading} />
      </ContentWrapper>
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeData = await getClient(preview).fetch(homePageQuery);

  return {
    props: { homeData, preview },
  };
}
