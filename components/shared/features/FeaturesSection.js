import SectionContainer from '@/components/shared/SectionContainer';
import GridListFeatures from '@/components/shared/list/GridList';
import FeaturesCard from '@/components/shared/features/FeaturesCard';

export default function Section({ heading, features }) {
  return (
    <SectionContainer>
      <h3 className="tw-section-heading text-center">{heading}</h3>
      <GridListFeatures>
        {features.map((feature, idx) => (
          <FeaturesCard feature={feature} key={idx} />
        ))}
      </GridListFeatures>
    </SectionContainer>
  );
}
