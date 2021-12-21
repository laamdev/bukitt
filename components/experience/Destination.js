import HighlightCard from '@/components/destination/highlight/Card';
import HighlightsList from '@/components/destination/highlight/List';
import Hero from '@/components/destination/Hero';
import MapSection from '@/components/experience/MapSection';

export default function Destination({ hero, highlightsSection, mapSection }) {
  return (
    <section>
      <Hero hero={hero} />

      <div className="relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 space-y-12 sm:space-y-24">
            {mapSection && (
              <>
                <MapSection
                  heading={mapSection?.heading}
                  body={mapSection?.body}
                  image={mapSection?.image}
                />

                {/* <Separator /> */}
              </>
            )}

            <div>
              <div className="tw-subheading text-center mb-6">
                <h3>{highlightsSection?.heading}</h3>
              </div>
              <HighlightsList>
                {highlightsSection?.highlights?.map((highlight) => (
                  <HighlightCard
                    key={highlight?.title}
                    title={highlight?.title}
                    image={highlight?.image}
                    body={highlight?.body}
                  />
                ))}
              </HighlightsList>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
