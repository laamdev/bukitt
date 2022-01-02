import SectionWrapper from '@/components/shared/SectionWrapper';
import ServicesCard from '@/components/home/ServicesCard';

export default function ServicesSection({
  heading,
  experiencesCard,
  tailoredCard,
}) {
  return (
    <SectionWrapper>
      <h3 className="tw-section-heading text-center">{heading}</h3>
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-6 sm:space-y-0">
        <ServicesCard
          title={experiencesCard?.title}
          description={experiencesCard?.description}
          imageUrl={experiencesCard?.image}
          btnLinkText={experiencesCard?.callToAction?.linkText}
          btnURL={experiencesCard?.callToAction?.url}
        />
        <ServicesCard
          title={tailoredCard?.title}
          description={tailoredCard?.description}
          imageUrl={tailoredCard?.image}
          btnLinkText={tailoredCard?.callToAction?.linkText}
          btnURL={tailoredCard?.callToAction?.url}
        />
      </div>
    </SectionWrapper>
  );
}
