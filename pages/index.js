import { homePageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import FeaturedCard from '@/components/home/FeaturedCard';
import FeaturedList from '@/components/home/FeaturedList';
import Hero from '@/components/shared/Hero';
import IntroductionSection from '@/components/home/IntroductionSection';
import AboutSection from '@/components/home/AboutSection';
import OfferSection from '@/components/home/OfferSection';
import PartnersSection from '@/components/home/PartnersSection';
import ContentWrapper from '@/components/shared/ContentWrapper';

export default function HomePage({ homeData }) {
  return (
    <article>
      <Hero hero={homeData?.hero} />
      <ContentWrapper>
        <IntroductionSection
          heading={homeData?.introductionSection?.heading}
          body={homeData?.introductionSection?.body}
        />

        <OfferSection
          heading={homeData?.offerSection?.heading}
          firstImage={homeData?.offerSection?.firstImage}
          firstLink={homeData?.offerSection?.firstLink}
          secondImage={homeData?.offerSection?.secondImage}
          secondLink={homeData?.offerSection?.secondLink}
        />

        <div className="flex flex-col space-y-6 sm:space-y-12">
          <h2 className="tw-subheading text-center">
            {homeData?.featuredSection?.heading}
          </h2>
          <FeaturedList>
            {homeData?.featured.map((destination) => (
              <FeaturedCard
                key={destination?.card?.name}
                name={destination?.card?.name}
                slug={destination?.slug}
                location={destination?.card?.location}
                thumbnail={destination?.card?.thumbnail}
              />
            ))}
          </FeaturedList>
        </div>

        <AboutSection
          heading={homeData?.aboutSection?.heading}
          body={homeData?.aboutSection?.body}
          cta={homeData?.aboutSection?.cta}
        />

        <PartnersSection
          heading={homeData?.partnersSection?.heading}
          partners={homeData?.partnersSection?.partners}
        />
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
