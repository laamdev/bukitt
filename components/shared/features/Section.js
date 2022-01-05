import SectionContainer from '@/components/shared/SectionContainer';
import GridListFeatures from '@/components/shared/list/GridList';
import FeaturesCard from '@/components/shared/features/FeaturesCard';

export default function Section({ heading, features }) {
  return (
    <SectionContainer heading={heading}>
      <GridListFeatures>
        {features.map((feature) => (
          <FeaturesCard key={feature._id} feature={feature} />
        ))}
      </GridListFeatures>
    </SectionContainer>
  );
}
