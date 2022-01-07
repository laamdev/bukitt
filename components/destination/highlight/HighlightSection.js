import GridList from '@/components/shared/list/GridList';
import HighlightCard from '@/components/shared/HighlightCard';
import SectionContainer from '@/components/shared/SectionContainer';

export default function Section({ heading, highlights }) {
  return (
    <SectionContainer heading={heading}>
      <h3 className="tw-section-heading text-center">{heading}</h3>
      <GridList>
        {highlights.map((highlight, idx) => (
          <HighlightCard highlight={highlight} key={idx} />
        ))}
      </GridList>
    </SectionContainer>
  );
}
