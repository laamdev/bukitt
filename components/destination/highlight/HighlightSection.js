import GridList from '@/components/shared/list/GridList';
import HighlightCard from '@/components/shared/HighlightCard';
import SectionHeading from '@/components/shared/SectionHeading';

export default function HighlightSection({ heading, highlights }) {
  return (
    <section className="tw-section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading className="text-center">{heading}</SectionHeading>
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
