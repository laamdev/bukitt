import ServicesCard from '@/components/home/ServicesCard';
import SectionHeading from '@/components/shared/SectionHeading';

export default function ServicesSection({
  heading,
  experiencesCard,
  tailoredCard,
}) {
  return (
    <section className="tw-section max-w-7xl mx-auto">
      <SectionHeading passedClassName="text-center">{heading}</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
    </section>
  );
}
