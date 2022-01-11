import GridList from '@/components/shared/list/GridList';
import HighlightCard from '@/components/shared/HighlightCard';

export default function HighlightSection({ heading, highlights }) {
  return (
    <section className="tw-section">
      <div className="max-w-7xl mx-auto">
        <h3 className="tw-section-heading">{heading}</h3>
        <GridList>
          {highlights.map((highlight, idx) => (
            <HighlightCard
              key={idx}
              title={highlight?.title}
              body={highlight?.body}
              image={highlight?.image}
            />
          ))}
        </GridList>
      </div>
    </section>
  );
}
