import SectionHeading from '@/components/shared/SectionHeading';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ServicesCard from '@/components/home/ServicesCard';

export default function ServicesSection({
  heading,
  experiencesCard,
  tailoredCard,
}) {
  return (
    <SectionWrapper>
      <SectionHeading>{heading}</SectionHeading>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row space-x-0 sm:space-x-12 space-y-6 sm:space-y-0">
        <ServicesCard
          title={experiencesCard?.title}
          imageUrl={experiencesCard?.image}
          btnLinkText={experiencesCard?.callToAction?.linkText}
          btnURL={experiencesCard?.callToAction?.url}
        />
        <ServicesCard
          title={tailoredCard?.title}
          imageUrl={tailoredCard?.image}
          btnLinkText={tailoredCard?.callToAction?.linkText}
          btnURL={tailoredCard?.callToAction?.url}
        />
      </div>
    </SectionWrapper>
  );
}
