import GridList from '@/components/shared/list/GridList';
import HighlightCard from '@/components/shared/HighlightCard';

export default function Section({ heading, highlights }) {
  return (
    <section className="tw-section">
      <h3 className="tw-section-heading text-center">{heading}</h3>

      <GridList>
        {highlights.map((highlight, idx) => (
          <li key={idx}>
            <HighlightCard highlight={highlight} />
          </li>
        ))}
      </GridList>
    </section>
  );
}
