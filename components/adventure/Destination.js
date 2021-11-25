import HighlightCard from '@/components/destination/HighlightCard';
import ListGrid from '@/components/shared/ListGrid';
import Hero from '@/components/destination/Hero';

export default function Destination({ hero, highlightsSection }) {
  return (
    <section>
      <Hero hero={hero} />

      <div className="relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="tw-subheading text-center mb-6">
              <h3>{highlightsSection?.heading}</h3>
            </div>
            <ListGrid>
              {highlightsSection?.highlights?.map((highlight) => (
                <HighlightCard
                  key={highlight?.name}
                  name={highlight?.name}
                  thumbnail={highlight?.thumbnail}
                  body={highlight?.body}
                />
              ))}
            </ListGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
