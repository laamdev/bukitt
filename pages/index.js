import { homePageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import FeaturedCard from '@/components/destination/FeaturedCard';
import ListGrid from '@/components/shared/ListGrid';
import Hero from '@/components/home/Hero';
import IntroductionSection from '@/components/home/IntroductionSection';
import AboutSection from '@/components/home/AboutSection';

export default function Home({ homeData }) {
  return (
    <article>
      <Hero coverImage={homeData?.hero?.coverImage} />
      <div className="relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg shadow px-5 py-6 sm:px-6 space-y-12 sm:space-y-24">
            <IntroductionSection
              heading={homeData?.introductionSection?.heading}
              body={homeData?.introductionSection?.body}
            />

            <ListGrid>
              {homeData?.featured.map((destination) => (
                <FeaturedCard
                  key={destination?.card?.name}
                  name={destination?.card?.name}
                  slug={destination?.card?.slug}
                  location={destination?.card?.location}
                  thumbnail={destination?.card?.thumbnail}
                />
              ))}
            </ListGrid>

            <AboutSection
              heading={homeData?.aboutSection?.heading}
              body={homeData?.aboutSection?.body}
              cta={homeData?.aboutSection?.cta}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeData = await getClient(preview).fetch(homePageQuery);

  return {
    props: { homeData, preview },
  };
}
